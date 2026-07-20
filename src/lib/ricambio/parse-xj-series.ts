import type {
  DraftHotspotRecord,
  DraftPartRecord,
  ImportParseReport,
  XjSeriesImportDraft,
} from "@/types/catalogue-import";
import {
  XJ_SERIES_DIAGRAM_HEIGHT,
  XJ_SERIES_DIAGRAM_PATH,
  XJ_SERIES_DIAGRAM_SOURCE_URL,
  XJ_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/xj-series-diagram";
import hotspotData from "@/data/diagrams/xj-series-hotspots.json";
import { parseRicambioCatalogueParts } from "@/lib/ricambio/parse-catalogue-html";
import { XJ_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/xj-series-ricambio-draft.json";

const DIAGRAM_WIDTH = XJ_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = XJ_SERIES_DIAGRAM_HEIGHT;

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

export { partIdFromNumber } from "@/lib/ricambio/part-id";

function hasXjModel(text: string, model: "50" | "70" | "90"): boolean {
  const lower = text.toLowerCase();
  return new RegExp(`\\bxj${model}\\b|xj${model}[tp]`).test(lower);
}

export function inferXjCompatibilityScope(part: {
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

  if (pn === "9859sp" || (text.includes("impeller") && hasXjModel(text, "50"))) return "xj50";
  if (pn === "9856-5sp" || (text.includes("impeller") && hasXjModel(text, "70"))) return "xj70";
  if (pn === "9856sp" || (text.includes("impeller") && hasXjModel(text, "90"))) return "xj90";

  if (
    text.includes("not illustrated") ||
    text.includes("optional") ||
    text.includes("upgrade kit") ||
    text.includes("pressure controller") ||
    !part.diagramReference
  ) {
    return "verify";
  }

  if (text.includes("suits all")) return "xj_all";

  const has50 = hasXjModel(text, "50");
  const has70 = hasXjModel(text, "70");
  const has90 = hasXjModel(text, "90");
  const count = [has50, has70, has90].filter(Boolean).length;

  if (count >= 3) return "xj_all";
  if (has50 && has70 && !has90) return "xj50_xj70";
  if (has50 && !has70 && !has90) return "xj50";
  if (has70 && !has50 && !has90) return "xj70";
  if (has90 && !has50 && !has70) return "xj90";
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
  if (lower.includes("torrium")) return "Controller";
  if (lower.includes("switch")) return "Switch";
  if (lower.includes("o-ring")) return "Seal";
  if (lower.includes("adaptor") || lower.includes("adapter")) return "Adaptor";
  return "Part";
}

export function parseXjSeriesHtml(html: string): RicambioDraftPayload {
  const rawParts = parseRicambioCatalogueParts(html).map((part) => ({
    diagramReference: part.diagramReference,
    partNumber: part.partNumber,
    description: part.description,
    sourceDescription: part.description,
    sourceCompatibilityText: part.sourceCompatibilityText,
    sourceNoteText: part.sourceNoteText,
    sourceQuantityText: part.sourceQuantityText,
    sourcePriceText: part.sourcePriceText,
    illustrated: part.illustrated,
    zoomRect: part.zoomRect,
  }));

  return buildDraftPayload(rawParts);
}

export function buildDraftPayload(rawParts: RicambioRawPart[]): RicambioDraftPayload {
  const parts: DraftPartRecord[] = rawParts.map((raw) => {
    const compatibilityScope =
      (raw.compatibilityScope as DraftPartRecord["compatibilityScope"]) ??
      inferXjCompatibilityScope(raw);
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
    partNumbers: hotspot.partNumbers.length ? hotspot.partNumbers : [],
  }));

  return {
    sourceUrl: XJ_SERIES_SOURCE_URL,
    diagramSourceUrl: XJ_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: XJ_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "XJ Series",
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
  id = "draft-xj-series",
): XjSeriesImportDraft {
  return {
    id,
    familyId: "family-xj",
    status: "draft",
    sourceUrl: payload.sourceUrl ?? XJ_SERIES_SOURCE_URL,
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

export function getBundledXjDraft(): XjSeriesImportDraft {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return createImportDraft(
    {
      ...raw,
      ...payload,
      hotspots: raw.hotspots ?? payload.hotspots,
    },
    "draft-xj-series-bundled",
  );
}
