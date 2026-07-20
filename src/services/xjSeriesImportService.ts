import { getDb } from "@/data/database/db";
import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import type { DraftPartRecord, ImportHistoryRecord, XjSeriesImportDraft } from "@/types/catalogue-import";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { buildSeriesCompatibilities } from "@/lib/ricambio/build-compatibilities";
import { seedBrand, seedCategory } from "@/data/seed/demo-data";
import {
  XJ50_CURVE_IMAGE,
  XJ70_CURVE_IMAGE,
  XJ90_CURVE_IMAGE,
  XJ_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";

const XJ50_ID = "model-xj50";
const XJ70_ID = "model-xj70";
const XJ90_ID = "model-xj90";
const FAMILY_ID = "family-xj";
const DIAGRAM_ID = "diagram-xj";

function mapAvailability(part: DraftPartRecord): Part["availability"] {
  if (part.verificationStatus === "requires_verification" || part.compatibilityScope === "verify") {
    return "verify";
  }
  return "unknown";
}

export async function approveXjSeriesImport(draft: XjSeriesImportDraft): Promise<ImportHistoryRecord> {
  const db = getDb();
  const approvedParts = draft.parts.filter((p) => p.reviewStatus === "approved");
  const excluded = draft.parts.filter((p) => p.reviewStatus === "excluded").length;
  const requireVerification = approvedParts.filter(
    (p) => p.compatibilityScope === "verify" || p.verificationStatus === "requires_verification",
  ).length;

  const meta = await db.catalogueMeta.get("catalogue");
  const nextVersion = (meta?.xjSeriesVersion ?? 1) + 1;

  const family: PumpFamily = {
    id: FAMILY_ID,
    brandId: seedBrand.id,
    categoryId: seedCategory.id,
    name: "XJ Series",
    slug: "xj-series",
    description: "Single-stage jet-assisted centrifugal pumps with Torrium2 or pressure switch options.",
    sourceUrl: draft.sourceUrl,
    identificationNotes:
      "Confirm Torrium (T) or pressure switch (P) suffix and model size on the nameplate before ordering parts.",
  };

  const models: PumpModel[] = [
    {
      id: XJ50_ID,
      familyId: FAMILY_ID,
      name: "XJ50",
      slug: "xj50",
      modelCode: "XJ50T",
      aliases: ["XJ 50", "XJ50T", "XJ50P"],
      description: "50 lpm DynaJet pressure system, 50 Hz.",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: XJ_SERIES_PUMP_IMAGE,
      curveImageUrl: XJ50_CURVE_IMAGE,
      curveLabel: "XJ50",
    },
    {
      id: XJ70_ID,
      familyId: FAMILY_ID,
      name: "XJ70",
      slug: "xj70",
      modelCode: "XJ70T",
      aliases: ["XJ 70", "XJ70T", "XJ70P"],
      description: "70 lpm DynaJet pressure system, 50 Hz.",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: XJ_SERIES_PUMP_IMAGE,
      curveImageUrl: XJ70_CURVE_IMAGE,
      curveLabel: "XJ70",
    },
    {
      id: XJ90_ID,
      familyId: FAMILY_ID,
      name: "XJ90",
      slug: "xj90",
      modelCode: "XJ90T",
      aliases: ["XJ 90", "XJ90T", "XJ90P"],
      description: "90 lpm DynaJet pressure system, 50 Hz.",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: XJ_SERIES_PUMP_IMAGE,
      curveImageUrl: XJ90_CURVE_IMAGE,
      curveLabel: "XJ90",
    },
  ];

  const diagram: Diagram = {
    id: DIAGRAM_ID,
    familyId: FAMILY_ID,
    name: "XJ Series Exploded View",
    imageUrl: draft.diagramLocalPath ?? "/diagrams/xj-series.svg",
    imageType: "svg",
    width: draft.diagramWidth,
    height: draft.diagramHeight,
    sourceUrl: draft.diagramSourceUrl,
  };

  const parts: Part[] = [];
  const compatibilities: PartCompatibility[] = [];

  for (const draftPart of approvedParts) {
    const existing = await db.parts.where("partNumber").equals(draftPart.partNumber).first();
    const partId = existing?.id ?? draftPart.existingPartId ?? partIdFromNumber(draftPart.partNumber);

    parts.push({
      id: partId,
      brandId: seedBrand.id,
      partNumber: draftPart.partNumber,
      description: draftPart.description,
      aliases: [draftPart.partNumber.replace(/SP$/i, ""), draftPart.partNumber.toLowerCase()],
      partCategory: draftPart.partCategory ?? "Part",
      quantity: draftPart.quantity ?? 1,
      availability: mapAvailability(draftPart),
      illustrated: draftPart.illustrated,
      sourceUrl: draft.sourceUrl,
      notes:
        draftPart.compatibilityScope === "verify"
          ? "Requires verification with the manufacturer catalogue."
          : undefined,
      source: {
        sourceDescription: draftPart.sourceDescription,
        sourceCompatibilityText: draftPart.sourceCompatibilityText,
        sourceQuantityText: draftPart.sourceQuantityText,
        sourcePriceText: draftPart.sourcePriceText,
        sourceUrl: draft.sourceUrl,
        importedAt: draft.importedAt,
        lastReviewedAt: new Date().toISOString(),
        verificationStatus:
          draftPart.compatibilityScope === "verify" ? "requires_verification" : "verified",
        rawCatalogueText: [
          draftPart.sourceDescription,
          draftPart.sourceCompatibilityText,
          draftPart.sourceNoteText,
          draftPart.sourceQuantityText,
        ]
          .filter(Boolean)
          .join(" | "),
      },
    });

    compatibilities.push(...buildSeriesCompatibilities("xj", partId, draftPart));
  }

  const partIdByNumber = new Map(parts.map((p) => [p.partNumber, p.id]));

  const hotspots: DiagramHotspot[] = draft.hotspots.map((hs) => ({
    id: `xj-ref-${hs.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId: DIAGRAM_ID,
    reference: hs.reference,
    x: hs.x,
    y: hs.y,
    width: hs.width,
    height: hs.height,
    partIds: hs.partNumbers
      .map((pn) => partIdByNumber.get(pn))
      .filter((id): id is string => Boolean(id)),
  }));

  const history: ImportHistoryRecord = {
    id: `import-xj-${Date.now()}`,
    familyId: FAMILY_ID,
    sourceUrl: draft.sourceUrl,
    importedAt: new Date().toISOString(),
    partsApproved: approvedParts.length,
    partsExcluded: excluded,
    partsRequireVerification: requireVerification,
    mappedReferences: hotspots.length,
    diagramStatus: draft.diagramLocalPath ? "retrieved" : "missing",
    catalogueVersion: nextVersion,
  };

  await db.transaction(
    "rw",
    [
      db.brands,
      db.categories,
      db.pumpFamilies,
      db.pumpModels,
      db.diagrams,
      db.diagramHotspots,
      db.parts,
      db.partCompatibilities,
      db.importDrafts,
      db.importHistory,
      db.catalogueMeta,
    ],
    async () => {
      await db.brands.put(seedBrand);
      await db.categories.put(seedCategory);
      await db.pumpFamilies.put(family);
      await db.pumpModels.bulkPut(models);
      await db.diagrams.put(diagram);

      const existingHotspots = await db.diagramHotspots.where("diagramId").equals(DIAGRAM_ID).toArray();
      if (existingHotspots.length) {
        await db.diagramHotspots.bulkDelete(existingHotspots.map((h) => h.id));
      }
      if (hotspots.length) await db.diagramHotspots.bulkPut(hotspots);

      await db.parts.bulkPut(parts);

      const familyCompats = await db.partCompatibilities.where("familyId").equals(FAMILY_ID).toArray();
      if (familyCompats.length) {
        await db.partCompatibilities.bulkDelete(familyCompats.map((c) => c.id));
      }
      await db.partCompatibilities.bulkPut(compatibilities);

      await db.importDrafts.put({ ...draft, status: "approved" });
      await db.importHistory.put(history);
      await db.catalogueMeta.put({
        id: "catalogue",
        hsSeriesVersion: meta?.hsSeriesVersion ?? 1,
        hpSeriesVersion: meta?.hpSeriesVersion,
        hmSeriesVersion: meta?.hmSeriesVersion,
        xjSeriesVersion: nextVersion,
        xpSeriesVersion: meta?.xpSeriesVersion,
        lastXjReviewAt: history.importedAt,
        lastHsReviewAt: meta?.lastHsReviewAt,
        lastHpReviewAt: meta?.lastHpReviewAt,
        lastHmReviewAt: meta?.lastHmReviewAt,
        liveDataSource: "ricambio",
      });
    },
  );

  return history;
}

export async function saveXjImportDraft(draft: XjSeriesImportDraft): Promise<void> {
  await getDb().importDrafts.put(draft);
}

export async function getLatestXjDraft(): Promise<XjSeriesImportDraft | undefined> {
  const drafts = await getDb().importDrafts.orderBy("importedAt").reverse().toArray();
  return drafts.find((d) => d.familyId === FAMILY_ID);
}
