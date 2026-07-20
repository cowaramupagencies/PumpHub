import { getDb } from "@/data/database/db";
import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import type { DraftPartRecord, HmSeriesImportDraft, ImportHistoryRecord } from "@/types/catalogue-import";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { seedBrand, seedCategory } from "@/data/seed/demo-data";
import { HM_SERIES_CURVE_IMAGE, HM_SERIES_PUMP_IMAGE } from "@/utils/pumps";

const HM60_ID = "model-hm60";
const HM90_ID = "model-hm90";
const HM160_ID = "model-hm160";
const HM270_ID = "model-hm270";
const FAMILY_ID = "family-hm";
const DIAGRAM_ID = "diagram-hm";

function mapAvailability(part: DraftPartRecord): Part["availability"] {
  if (part.verificationStatus === "requires_verification" || part.compatibilityScope === "verify") {
    return "verify";
  }
  return "unknown";
}

function compatibilityLabel(scope: DraftPartRecord["compatibilityScope"]): string {
  switch (scope) {
    case "hm60":
      return "HM60";
    case "hm90":
      return "HM90";
    case "hm160":
      return "HM160";
    case "hm270":
      return "HM270";
    case "hm60_hm90":
      return "HM60 and HM90";
    case "hm160_hm270":
      return "HM160 and HM270";
    case "hm_all":
      return "HM60, HM90, HM160 and HM270";
    case "family":
      return "HM Series — model not confirmed";
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
    case "hm60":
      add(HM60_ID, "hm60");
      break;
    case "hm90":
      add(HM90_ID, "hm90");
      break;
    case "hm160":
      add(HM160_ID, "hm160");
      break;
    case "hm270":
      add(HM270_ID, "hm270");
      break;
    case "hm60_hm90":
      add(HM60_ID, "hm60");
      add(HM90_ID, "hm90");
      break;
    case "hm160_hm270":
      add(HM160_ID, "hm160");
      add(HM270_ID, "hm270");
      break;
    case "hm_all":
      add(HM60_ID, "hm60");
      add(HM90_ID, "hm90");
      add(HM160_ID, "hm160");
      add(HM270_ID, "hm270");
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

export async function approveHmSeriesImport(draft: HmSeriesImportDraft): Promise<ImportHistoryRecord> {
  const db = getDb();
  const approvedParts = draft.parts.filter((p) => p.reviewStatus === "approved");
  const excluded = draft.parts.filter((p) => p.reviewStatus === "excluded").length;
  const requireVerification = approvedParts.filter(
    (p) => p.compatibilityScope === "verify" || p.verificationStatus === "requires_verification",
  ).length;

  const meta = await db.catalogueMeta.get("catalogue");
  const nextVersion = (meta?.hmSeriesVersion ?? 1) + 1;

  const family: PumpFamily = {
    id: FAMILY_ID,
    brandId: seedBrand.id,
    categoryId: seedCategory.id,
    name: "HM Series",
    slug: "hm-series",
    description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
    sourceUrl: draft.sourceUrl,
    identificationNotes:
      "HM Series parts vary between models, versions and controller options. Confirm the exact pump model and version before ordering model-specific parts.",
  };

  const models: PumpModel[] = [
    {
      id: HM60_ID,
      familyId: FAMILY_ID,
      name: "HM60",
      slug: "hm60",
      modelCode: "HM60-06T",
      aliases: ["HM 60", "HM60-06T", "HM60-08T", "HM60-10T"],
      description: "Compact HM pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HM_SERIES_PUMP_IMAGE,
      curveImageUrl: HM_SERIES_CURVE_IMAGE,
      curveLabel: "HM60-10T",
    },
    {
      id: HM90_ID,
      familyId: FAMILY_ID,
      name: "HM90",
      slug: "hm90",
      modelCode: "HM90-08T",
      aliases: ["HM 90", "HM90-08T", "HM90-11T", "HM90-13T"],
      description: "Mid-size HM pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HM_SERIES_PUMP_IMAGE,
      curveImageUrl: HM_SERIES_CURVE_IMAGE,
      curveLabel: "HM90-13T",
    },
    {
      id: HM160_ID,
      familyId: FAMILY_ID,
      name: "HM160",
      slug: "hm160",
      modelCode: "HM160-15T",
      aliases: ["HM 160", "HM160-15T", "HM160-19T"],
      description: "Large HM pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HM_SERIES_PUMP_IMAGE,
      curveImageUrl: HM_SERIES_CURVE_IMAGE,
      curveLabel: "HM160-19T",
    },
    {
      id: HM270_ID,
      familyId: FAMILY_ID,
      name: "HM270",
      slug: "hm270",
      modelCode: "HM270-19",
      aliases: ["HM 270", "HM270-19", "HM270-25"],
      description: "High-flow HM pressure pump, 50 Hz.",
      version: "–0 / –1 / –2",
      frequency: "50 Hz",
      status: "active",
      identificationNotes: "Confirm the exact pump model and version before ordering model-specific parts.",
      sourceUrl: draft.sourceUrl,
      imageUrl: HM_SERIES_PUMP_IMAGE,
      curveImageUrl: HM_SERIES_CURVE_IMAGE,
      curveLabel: "HM270-25",
    },
  ];

  const diagram: Diagram = {
    id: DIAGRAM_ID,
    familyId: FAMILY_ID,
    name: "HM Series Exploded View",
    imageUrl: draft.diagramLocalPath ?? "/diagrams/hm-series.svg",
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
    id: `hm-ref-${hs.reference.replace(/[^a-z0-9]/gi, "")}`,
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
    id: `import-hm-${Date.now()}`,
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
        hmSeriesVersion: nextVersion,
        lastHmReviewAt: history.importedAt,
        lastHsReviewAt: meta?.lastHsReviewAt,
        lastHpReviewAt: meta?.lastHpReviewAt,
        liveDataSource: "ricambio",
      });
    },
  );

  return history;
}

export async function saveHmImportDraft(draft: HmSeriesImportDraft): Promise<void> {
  await getDb().importDrafts.put(draft);
}

export async function getLatestHmDraft(): Promise<HmSeriesImportDraft | undefined> {
  const drafts = await getDb().importDrafts.orderBy("importedAt").reverse().toArray();
  return drafts.find((d) => d.familyId === FAMILY_ID);
}
