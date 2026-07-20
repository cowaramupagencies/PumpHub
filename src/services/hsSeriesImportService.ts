import { getDb } from "@/data/database/db";
import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import type { DraftPartRecord, HsSeriesImportDraft, ImportHistoryRecord } from "@/types/catalogue-import";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { buildSeriesCompatibilities } from "@/lib/ricambio/build-compatibilities";
import { seedBrand, seedCategory } from "@/data/seed/demo-data";
import { HS_SERIES_CURVE_IMAGE } from "@/utils/pumps";

const HS50_ID = "model-hs50";
const HS60_ID = "model-hs60";
const FAMILY_ID = "family-hs";
const DIAGRAM_ID = "diagram-hs";

function mapAvailability(part: DraftPartRecord): Part["availability"] {
  if (part.verificationStatus === "requires_verification" || part.compatibilityScope === "verify") {
    return "verify";
  }
  return "unknown";
}

export async function approveHsSeriesImport(draft: HsSeriesImportDraft): Promise<ImportHistoryRecord> {
  const db = getDb();
  const approvedParts = draft.parts.filter((p) => p.reviewStatus === "approved");
  const excluded = draft.parts.filter((p) => p.reviewStatus === "excluded").length;
  const requireVerification = approvedParts.filter(
    (p) => p.compatibilityScope === "verify" || p.verificationStatus === "requires_verification",
  ).length;

  const meta = await db.catalogueMeta.get("catalogue");
  const nextVersion = (meta?.hsSeriesVersion ?? 1) + 1;

  const family: PumpFamily = {
    id: FAMILY_ID,
    brandId: seedBrand.id,
    categoryId: seedCategory.id,
    name: "HS Series",
    slug: "hs-series",
    description: "Horizontal multistage pressure pumps for domestic and light commercial use.",
    sourceUrl: draft.sourceUrl,
    identificationNotes:
      "Some HS Series parts vary between models, versions or electrical specifications. Confirm the exact pump model and version before ordering model-specific parts.",
  };

  const models: PumpModel[] = [
    {
      id: HS50_ID,
      familyId: FAMILY_ID,
      name: "HS50",
      slug: "hs50",
      modelCode: "HS50",
      aliases: ["HS 50", "HS-50"],
      description: "5-stage horizontal multistage pump, 50 Hz.",
      version: "–1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: "/pumps/hs50-60.png",
      curveImageUrl: HS_SERIES_CURVE_IMAGE,
      curveLabel: "L4T (HS50-06T)",
    },
    {
      id: HS60_ID,
      familyId: FAMILY_ID,
      name: "HS60",
      slug: "hs60",
      modelCode: "HS60",
      aliases: ["HS 60", "HS-60"],
      description: "6-stage horizontal multistage pump, 50 Hz.",
      version: "–1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: "/pumps/hs50-60.png",
      curveImageUrl: HS_SERIES_CURVE_IMAGE,
      curveLabel: "L5T (HS60-08T)",
    },
  ];

  const diagram: Diagram = {
    id: DIAGRAM_ID,
    familyId: FAMILY_ID,
    name: "HS Series Exploded View",
    imageUrl: draft.diagramLocalPath ?? "/diagrams/hs-series.svg",
    imageType: "svg",
    width: draft.diagramWidth,
    height: draft.diagramHeight,
    sourceUrl: draft.diagramSourceUrl,
  };

  const parts: Part[] = [];
  const compatibilities: PartCompatibility[] = [];

  for (const draftPart of approvedParts) {
    const existing = await db.parts
      .where("partNumber")
      .equals(draftPart.partNumber)
      .first();
    const partId = existing?.id ?? draftPart.existingPartId ?? partIdFromNumber(draftPart.partNumber);

    const part: Part = {
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
    };

    parts.push(part);
    compatibilities.push(...buildSeriesCompatibilities("hs", partId, draftPart));
  }

  const partIdByNumber = new Map(parts.map((p) => [p.partNumber, p.id]));

  const hotspots: DiagramHotspot[] = draft.hotspots.map((hs) => ({
    id: `hs-ref-${hs.reference.replace(/[^a-z0-9]/gi, "")}`,
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
    id: `import-hs-${Date.now()}`,
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
        hsSeriesVersion: nextVersion,
        hpSeriesVersion: meta?.hpSeriesVersion,
        hmSeriesVersion: meta?.hmSeriesVersion,
        lastHsReviewAt: history.importedAt,
        lastHpReviewAt: meta?.lastHpReviewAt,
        lastHmReviewAt: meta?.lastHmReviewAt,
        liveDataSource: "ricambio",
      });
    },
  );

  return history;
}

export async function saveImportDraft(draft: HsSeriesImportDraft): Promise<void> {
  await getDb().importDrafts.put(draft);
}

export async function getLatestHsDraft(): Promise<HsSeriesImportDraft | undefined> {
  const drafts = await getDb().importDrafts.orderBy("importedAt").reverse().toArray();
  return drafts.find((d) => d.familyId === FAMILY_ID);
}
