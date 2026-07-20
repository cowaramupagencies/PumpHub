import type {
  DraftHotspotRecord,
  DraftPartRecord,
  HmSeriesImportDraft,
  ImportParseReport,
} from "@/types/catalogue-import";
import {
  HM_SERIES_DIAGRAM_HEIGHT,
  HM_SERIES_DIAGRAM_PATH,
  HM_SERIES_DIAGRAM_SOURCE_URL,
  HM_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hm-series-diagram";
import hotspotData from "@/data/diagrams/hm-series-hotspots.json";
import { HM_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/hm-series-ricambio-draft.json";

const DIAGRAM_WIDTH = HM_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = HM_SERIES_DIAGRAM_HEIGHT;

export interface RicambioRawPart {
  diagramReference?: string | null;
  partNumber: string;
  description: string;
  sourceDescription: string;
  sourceCompatibilityText?: string;
  sourceNoteText?: string;
  sourceQuantityText?: string;
  sourcePriceText?: string;
  illustrated?: boolean;
  zoomRect?: string | null;
  compatibilityScope?: string;
  reviewStatus?: string;
}

export interface RicambioDraftPayload {
  sourceUrl?: string;
  diagramSourceUrl?: string;
  diagramLocalPath?: string;
  diagramWidth?: number;
  diagramHeight?: number;
  cataloguePageTitle?: string;
  importedAt?: string;
  parts: DraftPartRecord[];
  hotspots?: DraftHotspotRecord[];
}

function stripHtml(cell: string): string {
  return cell
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePartNumber(raw: string): string {
  let pn = raw.replace(/\*/g, "").replace(/\s+/g, "").trim();
  if (/^\d+_\d+$/.test(pn)) {
    pn = pn.replace("_", "-");
  }
  return pn;
}

export { partIdFromNumber } from "@/lib/ricambio/part-id";

function hasHmModel(text: string, model: "60" | "90" | "160" | "270"): boolean {
  return new RegExp(`\\bhm${model}\\b|hm${model}-`).test(text);
}

export function inferHmCompatibilityScope(part: {
  partNumber: string;
  description: string;
  sourceCompatibilityText?: string;
  sourceNoteText?: string;
  diagramReference?: string | null;
}): DraftPartRecord["compatibilityScope"] {
  const text = [part.description, part.sourceCompatibilityText, part.sourceNoteText]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const pn = part.partNumber.toLowerCase();

  if (pn === "13678sp" || (text.includes("impeller") && hasHmModel(text, "60"))) return "hm60";
  if (pn === "13676sp" || (text.includes("impeller") && hasHmModel(text, "90"))) return "hm90";
  if (pn === "13672sp" || (text.includes("impeller") && hasHmModel(text, "160"))) return "hm160";
  if (pn === "13668sp" || (text.includes("impeller") && hasHmModel(text, "270"))) return "hm270";

  if (
    text.includes("not illustrated") ||
    text.includes("optional") ||
    text.includes("upgrade kit") ||
    text.includes("pressure controller") ||
    !part.diagramReference
  ) {
    if (text.includes("motor")) {
      const has60 = hasHmModel(text, "60");
      const has90 = hasHmModel(text, "90");
      const has160 = hasHmModel(text, "160");
      const has270 = hasHmModel(text, "270");
      if (has60 && has90 && !has160 && !has270) return "hm60_hm90";
      if (has160 && has270 && !has60 && !has90) return "hm160_hm270";
      if (has60 && !has90 && !has160 && !has270) return "hm60";
      if (has90 && !has60 && !has160 && !has270) return "hm90";
      if (has160 && !has60 && !has90 && !has270) return "hm160";
      if (has270 && !has60 && !has90 && !has160) return "hm270";
    }
    return "verify";
  }

  const has60 = hasHmModel(text, "60");
  const has90 = hasHmModel(text, "90");
  const has160 = hasHmModel(text, "160");
  const has270 = hasHmModel(text, "270");

  if (/hm60.*hm90|hm90.*hm60/.test(text) && !has160 && !has270) return "hm60_hm90";
  if (/hm160.*hm270|hm270.*hm160/.test(text) && !has60 && !has90) return "hm160_hm270";

  const count = [has60, has90, has160, has270].filter(Boolean).length;
  if (count >= 3) return "hm_all";
  if (has60 && has90) return "hm60_hm90";
  if (has160 && has270) return "hm160_hm270";
  if (has60) return "hm60";
  if (has90) return "hm90";
  if (has160) return "hm160";
  if (has270) return "hm270";
  return "family";
}

function parseQuantity(text?: string): number {
  if (!text) return 1;
  const match = text.match(/\d+/);
  return match ? Number(match[0]) : 1;
}

function inferCategory(description: string): string {
  const lower = description.toLowerCase();
  if (lower.includes("impeller")) return "Impeller";
  if (lower.includes("motor")) return "Motor";
  if (lower.includes("seal")) return "Seal Kit";
  if (lower.includes("casing")) return "Casing";
  if (lower.includes("stage body")) return "Stage Body";
  if (lower.includes("torrium")) return "Controller";
  if (lower.includes("o-ring")) return "Seal";
  if (lower.includes("pressure switch")) return "Pressure Switch";
  return "Part";
}

export function parseHmSeriesHtml(html: string): RicambioDraftPayload {
  const chunks = html.split(/<tr id="DC[^"]+"/i);
  const parts: RicambioRawPart[] = [];

  for (const block of chunks.slice(1)) {
    const refMatch = block.match(/CEO\([^,]+,'CE50TDRE','V_([^']+)'\)/i);
    if (!refMatch) continue;
    const ref = refMatch[1];
    const innerMatch = block.match(/>([\s\S]*?)<\/tr>/i);
    if (!innerMatch) continue;
    const cells = [...innerMatch[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) =>
      stripHtml(m[1]),
    );
    if (cells.length < 7) continue;

    const partNumber = normalizePartNumber(cells[2]);
    const description = cells[3];
    const zoomMatch = block.match(/ZoomRectFilmato\(([^)]+)\)/i);

    parts.push({
      diagramReference: ref === "_" ? null : ref,
      partNumber,
      description,
      sourceDescription: description,
      sourceCompatibilityText: cells[4] || undefined,
      sourceNoteText: cells[5] || undefined,
      sourceQuantityText: cells[6] || undefined,
      sourcePriceText: cells[7] || undefined,
      illustrated: ref !== "_",
      zoomRect: zoomMatch?.[1] ?? null,
    });
  }

  return buildDraftPayload(parts);
}

export function buildDraftPayload(rawParts: RicambioRawPart[]): RicambioDraftPayload {
  const parts: DraftPartRecord[] = rawParts.map((raw) => {
    const compatibilityScope =
      (raw.compatibilityScope as DraftPartRecord["compatibilityScope"]) ??
      inferHmCompatibilityScope(raw);
    return {
      partNumber: raw.partNumber,
      description: raw.description,
      diagramReference: raw.diagramReference,
      illustrated: raw.illustrated ?? raw.diagramReference != null,
      compatibilityScope,
      sourceDescription: raw.sourceDescription,
      sourceCompatibilityText: raw.sourceCompatibilityText,
      sourceNoteText: raw.sourceNoteText,
      sourceQuantityText: raw.sourceQuantityText,
      sourcePriceText: raw.sourcePriceText,
      reviewStatus: "pending",
      partCategory: inferCategory(raw.description),
      quantity: parseQuantity(raw.sourceQuantityText),
      verificationStatus:
        compatibilityScope === "verify" ? "requires_verification" : "pending",
    };
  });

  const refParts = new Map<string, string[]>();
  for (const part of parts) {
    if (!part.diagramReference) continue;
    const list = refParts.get(part.diagramReference) ?? [];
    list.push(part.partNumber);
    refParts.set(part.diagramReference, list);
  }

  const hotspots: DraftHotspotRecord[] = hotspotData.hotspots.map((hotspot) => ({
    ...hotspot,
    partNumbers: refParts.get(hotspot.reference) ?? hotspot.partNumbers,
  }));

  return {
    sourceUrl: HM_SERIES_SOURCE_URL,
    diagramSourceUrl: HM_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: HM_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "HM Series",
    importedAt: new Date().toISOString(),
    parts,
    hotspots,
  };
}

export function buildParseReport(payload: RicambioDraftPayload): ImportParseReport {
  const partNumbers = payload.parts.map((p) => p.partNumber);
  const duplicates = partNumbers.length - new Set(partNumbers).size;

  return {
    partsDetected: payload.parts.length,
    hotspotsDetected: payload.hotspots?.length ?? 0,
    missingDescriptions: payload.parts.filter((p) => !p.description.trim()).length,
    unknownCompatibility: payload.parts.filter((p) => p.compatibilityScope === "verify").length,
    duplicatePartNumbers: duplicates,
    diagramStatus: payload.diagramLocalPath ? "retrieved" : "missing",
    warnings: [],
  };
}

export function createImportDraft(
  payload: RicambioDraftPayload,
  id = "draft-hm-series",
): HmSeriesImportDraft {
  return {
    id,
    familyId: "family-hm",
    status: "draft",
    sourceUrl: payload.sourceUrl ?? HM_SERIES_SOURCE_URL,
    diagramSourceUrl: payload.diagramSourceUrl,
    diagramLocalPath: payload.diagramLocalPath,
    diagramWidth: payload.diagramWidth ?? DIAGRAM_WIDTH,
    diagramHeight: payload.diagramHeight ?? DIAGRAM_HEIGHT,
    cataloguePageTitle: payload.cataloguePageTitle,
    importedAt: payload.importedAt ?? new Date().toISOString(),
    parts: payload.parts,
    hotspots: payload.hotspots ?? [],
    parseReport: buildParseReport(payload),
  };
}

export function getBundledHmDraft(): HmSeriesImportDraft {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return createImportDraft(
    {
      ...raw,
      ...payload,
      hotspots: payload.hotspots,
    },
    "draft-hm-series-bundled",
  );
}
