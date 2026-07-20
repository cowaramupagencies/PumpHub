import { getDb } from "@/data/database/db";
import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import type { DraftPartRecord, ImportHistoryRecord, XpSeriesImportDraft } from "@/types/catalogue-import";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { seedBrand, seedCategory } from "@/data/seed/demo-data";
import {
  XP25_CURVE_IMAGE,
  XP35_CURVE_IMAGE,
  XP45_CURVE_IMAGE,
  XP_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";

const XP25_ID = "model-xp25";
const XP35_ID = "model-xp35";
const XP45_ID = "model-xp45";
const FAMILY_ID = "family-xp";
const DIAGRAM_ID = "diagram-xp";

function mapAvailability(part: DraftPartRecord): Part["availability"] {
  if (part.verificationStatus === "requires_verification" || part.compatibilityScope === "verify") {
    return "verify";
  }
  return "unknown";
}

function compatibilityLabel(scope: DraftPartRecord["compatibilityScope"]): string {
  switch (scope) {
    case "xp25":
      return "XP25";
    case "xp35":
      return "XP35";
    case "xp45":
      return "XP45";
    case "xp25_xp35":
      return "XP25 and XP35";
    case "xp35_xp45":
      return "XP35 and XP45";
    case "xp_all":
    case "both":
      return "XP25, XP35 and XP45";
    case "family":
      return "XP Series — model not confirmed";
    default:
      return "Requires verification";
  }
}

function buildCompatibilities(
  partId: string,
  draftPart: DraftPartRecord,
  diagramId: string,
): PartCompatibility[] {
  const ref = draftPart.diagramReference ?? undefined;
  const note = compatibilityLabel(draftPart.compatibilityScope);
  const rows: PartCompatibility[] = [];

  const add = (modelId: string | undefined, idSuffix: string) => {
    rows.push({
      id: `compat-${idSuffix}-${partId.replace("part-", "")}`,
      partId,
      familyId: FAMILY_ID,
      modelId,
      diagramId: ref ? diagramId : undefined,
      diagramReference: ref,
      compatibilityNotes: note,
    });
  };

  switch (draftPart.compatibilityScope) {
    case "xp25":
      add(XP25_ID, "xp25");
      break;
    case "xp35":
      add(XP35_ID, "xp35");
      break;
    case "xp45":
      add(XP45_ID, "xp45");
      break;
    case "xp25_xp35":
      add(XP25_ID, "xp25");
      add(XP35_ID, "xp35");
      break;
    case "xp35_xp45":
      add(XP35_ID, "xp35");
      add(XP45_ID, "xp45");
      break;
    case "xp_all":
    case "both":
      add(XP25_ID, "xp25");
      add(XP35_ID, "xp35");
      add(XP45_ID, "xp45");
      break;
    case "family":
      add(undefined, "family");
      break;
    default:
      add(undefined, "verify");
      break;
  }

  return rows;
}

export async function approveXpSeriesImport(draft: XpSeriesImportDraft): Promise<ImportHistoryRecord> {
  const db = getDb();
  const approvedParts = draft.parts.filter((p) => p.reviewStatus === "approved");
  const excluded = draft.parts.filter((p) => p.reviewStatus === "excluded").length;
  const requireVerification = approvedParts.filter(
    (p) => p.compatibilityScope === "verify" || p.verificationStatus === "requires_verification",
  ).length;

  const meta = await db.catalogueMeta.get("catalogue");
  const nextVersion = (meta?.xpSeriesVersion ?? 1) + 1;

  const family: PumpFamily = {
    id: FAMILY_ID,
    brandId: seedBrand.id,
    categoryId: seedCategory.id,
    name: "XP Series",
    slug: "xp-series",
    description: "Compact pressure pumps with pressure switch control for small domestic systems.",
    sourceUrl: draft.sourceUrl,
    identificationNotes:
      "Confirm model size (XP25/XP35/XP45) and tank option on the nameplate before ordering parts.",
  };

  const models: PumpModel[] = [
    {
      id: XP25_ID,
      familyId: FAMILY_ID,
      name: "XP25",
      slug: "xp25",
      modelCode: "XP25P8",
      aliases: ["XP 25", "XP25P8", "XP25P2"],
      description: "25 lpm compact pressure pump, 50 Hz.",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: XP_SERIES_PUMP_IMAGE,
      curveImageUrl: XP25_CURVE_IMAGE,
      curveLabel: "XP25P8",
    },
    {
      id: XP35_ID,
      familyId: FAMILY_ID,
      name: "XP35",
      slug: "xp35",
      modelCode: "XP35P8",
      aliases: ["XP 35", "XP35P8"],
      description: "35 lpm compact pressure pump, 50 Hz.",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: XP_SERIES_PUMP_IMAGE,
      curveImageUrl: XP35_CURVE_IMAGE,
      curveLabel: "XP35P8",
    },
    {
      id: XP45_ID,
      familyId: FAMILY_ID,
      name: "XP45",
      slug: "xp45",
      modelCode: "XP45P8",
      aliases: ["XP 45", "XP45P8"],
      description: "45 lpm compact pressure pump, 50 Hz.",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: XP_SERIES_PUMP_IMAGE,
      curveImageUrl: XP45_CURVE_IMAGE,
      curveLabel: "XP45P8",
    },
  ];

  const diagram: Diagram = {
    id: DIAGRAM_ID,
    familyId: FAMILY_ID,
    name: "XP Series Exploded View",
    imageUrl: draft.diagramLocalPath ?? "/diagrams/xp-series.svg",
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

    compatibilities.push(...buildCompatibilities(partId, draftPart, DIAGRAM_ID));
  }

  const partIdByNumber = new Map(parts.map((p) => [p.partNumber, p.id]));

  const hotspots: DiagramHotspot[] = draft.hotspots.map((hs) => ({
    id: `xp-ref-${hs.reference.replace(/[^a-z0-9]/gi, "")}`,
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
    id: `import-xp-${Date.now()}`,
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
        xjSeriesVersion: meta?.xjSeriesVersion,
        xpSeriesVersion: nextVersion,
        lastXpReviewAt: history.importedAt,
        lastHsReviewAt: meta?.lastHsReviewAt,
        lastHpReviewAt: meta?.lastHpReviewAt,
        lastHmReviewAt: meta?.lastHmReviewAt,
        lastXjReviewAt: meta?.lastXjReviewAt,
        liveDataSource: "ricambio",
      });
    },
  );

  return history;
}

export async function saveXpImportDraft(draft: XpSeriesImportDraft): Promise<void> {
  await getDb().importDrafts.put(draft);
}

export async function getLatestXpDraft(): Promise<XpSeriesImportDraft | undefined> {
  const drafts = await getDb().importDrafts.orderBy("importedAt").reverse().toArray();
  return drafts.find((d) => d.familyId === FAMILY_ID);
}
