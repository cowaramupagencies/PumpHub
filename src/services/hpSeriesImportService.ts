import { getDb } from "@/data/database/db";
import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import type { DraftPartRecord, HpSeriesImportDraft, ImportHistoryRecord } from "@/types/catalogue-import";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { seedBrand, seedCategory } from "@/data/seed/demo-data";
import { HP_SERIES_CURVE_IMAGE, HP_SERIES_PUMP_IMAGE } from "@/utils/pumps";

const HP45_ID = "model-hp45";
const HP65_ID = "model-hp65";
const HP85_ID = "model-hp85";
const FAMILY_ID = "family-hp";
const DIAGRAM_ID = "diagram-hp";

function mapAvailability(part: DraftPartRecord): Part["availability"] {
  if (part.verificationStatus === "requires_verification" || part.compatibilityScope === "verify") {
    return "verify";
  }
  return "unknown";
}

function compatibilityLabel(scope: DraftPartRecord["compatibilityScope"]): string {
  switch (scope) {
    case "hp45":
      return "HP45";
    case "hp65":
      return "HP65";
    case "hp85":
      return "HP85";
    case "hp45_hp65":
      return "HP45 and HP65";
    case "hp_all":
    case "both":
      return "HP45, HP65 and HP85";
    case "family":
      return "HP Series — model not confirmed";
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
    case "hp45":
      add(HP45_ID, "hp45");
      break;
    case "hp65":
      add(HP65_ID, "hp65");
      break;
    case "hp85":
      add(HP85_ID, "hp85");
      break;
    case "hp45_hp65":
      add(HP45_ID, "hp45");
      add(HP65_ID, "hp65");
      break;
    case "hp_all":
    case "both":
      add(HP45_ID, "hp45");
      add(HP65_ID, "hp65");
      add(HP85_ID, "hp85");
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

export async function approveHpSeriesImport(draft: HpSeriesImportDraft): Promise<ImportHistoryRecord> {
  const db = getDb();
  const approvedParts = draft.parts.filter((p) => p.reviewStatus === "approved");
  const excluded = draft.parts.filter((p) => p.reviewStatus === "excluded").length;
  const requireVerification = approvedParts.filter(
    (p) => p.compatibilityScope === "verify" || p.verificationStatus === "requires_verification",
  ).length;

  const meta = await db.catalogueMeta.get("catalogue");
  const nextVersion = (meta?.hpSeriesVersion ?? 1) + 1;

  const family: PumpFamily = {
    id: FAMILY_ID,
    brandId: seedBrand.id,
    categoryId: seedCategory.id,
    name: "HP Series",
    slug: "hp-series",
    description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
    sourceUrl: draft.sourceUrl,
    identificationNotes:
      "HP Series parts vary between models, versions and controller options. Confirm the exact pump model and version before ordering model-specific parts.",
  };

  const models: PumpModel[] = [
    {
      id: HP45_ID,
      familyId: FAMILY_ID,
      name: "HP45",
      slug: "hp45",
      modelCode: "HP45-05T",
      aliases: ["HP 45", "HP45-05T"],
      description: "5-stage HP pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HP_SERIES_PUMP_IMAGE,
      curveImageUrl: HP_SERIES_CURVE_IMAGE,
      curveLabel: "HP45-05T",
    },
    {
      id: HP65_ID,
      familyId: FAMILY_ID,
      name: "HP65",
      slug: "hp65",
      modelCode: "HP65-06T",
      aliases: ["HP 65", "HP65-06T"],
      description: "6-stage HP pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HP_SERIES_PUMP_IMAGE,
      curveImageUrl: HP_SERIES_CURVE_IMAGE,
      curveLabel: "HP65-06T",
    },
    {
      id: HP85_ID,
      familyId: FAMILY_ID,
      name: "HP85",
      slug: "hp85",
      modelCode: "HP85-08T",
      aliases: ["HP 85", "HP85-08T"],
      description: "8-stage HP pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HP_SERIES_PUMP_IMAGE,
      curveImageUrl: HP_SERIES_CURVE_IMAGE,
      curveLabel: "HP85-08T",
    },
  ];

  const diagram: Diagram = {
    id: DIAGRAM_ID,
    familyId: FAMILY_ID,
    name: "HP Series Exploded View",
    imageUrl: draft.diagramLocalPath ?? "/diagrams/hp-series.svg",
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
    id: `hp-ref-${hs.reference.replace(/[^a-z0-9]/gi, "")}`,
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
    id: `import-hp-${Date.now()}`,
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
        hpSeriesVersion: nextVersion,
        hmSeriesVersion: meta?.hmSeriesVersion,
        lastHpReviewAt: history.importedAt,
        lastHsReviewAt: meta?.lastHsReviewAt,
        lastHmReviewAt: meta?.lastHmReviewAt,
        liveDataSource: "ricambio",
      });
    },
  );

  return history;
}

export async function saveHpImportDraft(draft: HpSeriesImportDraft): Promise<void> {
  await getDb().importDrafts.put(draft);
}

export async function getLatestHpDraft(): Promise<HpSeriesImportDraft | undefined> {
  const drafts = await getDb().importDrafts.orderBy("importedAt").reverse().toArray();
  return drafts.find((d) => d.familyId === FAMILY_ID);
}
