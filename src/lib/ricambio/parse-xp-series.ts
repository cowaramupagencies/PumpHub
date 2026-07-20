import type {
  DraftHotspotRecord,
  DraftPartRecord,
  ImportParseReport,
  XpSeriesImportDraft,
} from "@/types/catalogue-import";
import {
  XP_SERIES_DIAGRAM_HEIGHT,
  XP_SERIES_DIAGRAM_PATH,
  XP_SERIES_DIAGRAM_SOURCE_URL,
  XP_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/xp-series-diagram";
import hotspotData from "@/data/diagrams/xp-series-hotspots.json";
import { parseRicambioCatalogueParts } from "@/lib/ricambio/parse-catalogue-html";
import { XP_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/xp-series-ricambio-draft.json";

const DIAGRAM_WIDTH = XP_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = XP_SERIES_DIAGRAM_HEIGHT;

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

function hasXpModel(text: string, model: "25" | "35" | "45"): boolean {
  const lower = text.toLowerCase();
  if (model === "25") {
    return /\bxp\s*25\b|\bxp25\b|xp25p\d|\b72111\b/.test(lower);
  }
  if (model === "35") {
    return /\bxp\s*35\b|\bxp35\b|xp35p\d|xp350t|\b72161\b|\b72171\b|\b72101\b/.test(lower);
  }
  return /\bxp\s*45\b|\bxp45\b|xp45p\d|xp450t|\b72181\b/.test(lower);
}

export function inferXpCompatibilityScope(part: {
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

  if (pn === "11253-1sp" || pn === "11254-1" || pn === "31300sp" || pn === "32029sp") {
    return "xp25";
  }
  if (pn === "11253-3" || pn === "11254-3") return "xp45";
  if (text.includes("xp350t") && text.includes("xp450t")) return "xp35_xp45";
  if (text.includes("xp450t")) return "xp45";
  if (text.includes("xp350t")) return "xp35";

  if (
    text.includes("not illustrated") ||
    text.includes("optional") ||
    text.includes("upgrade kit") ||
    text.includes("72151pc") ||
    !part.diagramReference
  ) {
    return "verify";
  }

  if (text.includes("all other models")) return "family";
  if (text.includes("suits all")) return "xp_all";

  const has25 = hasXpModel(text, "25");
  const has35 = hasXpModel(text, "35");
  const has45 = hasXpModel(text, "45");
  const count = [has25, has35, has45].filter(Boolean).length;

  if (count >= 3) return "xp_all";
  if (has25 && has35 && !has45) return "xp25_xp35";
  if (has35 && has45 && !has25) return "xp35_xp45";
  if (has25 && !has35 && !has45) return "xp25";
  if (has35 && !has25 && !has45) return "xp35";
  if (has45 && !has25 && !has35) return "xp45";
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
  if (lower.includes("switch")) return "Switch";
  if (lower.includes("venturi") || lower.includes("jet")) return "Jet";
  if (lower.includes("diaphragm") || lower.includes("accumulator")) return "Tank";
  if (lower.includes("o-ring")) return "Seal";
  if (lower.includes("adaptor") || lower.includes("adapter")) return "Adaptor";
  return "Part";
}

export function parseXpSeriesHtml(html: string): RicambioDraftPayload {
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
      inferXpCompatibilityScope(raw);
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

  const hotspots: DraftHotspotRecord[] = hotspotData.hotspots.map((hotspot) => ({
    ...hotspot,
    partNumbers: hotspot.partNumbers.length ? hotspot.partNumbers : [],
  }));

  return {
    sourceUrl: XP_SERIES_SOURCE_URL,
    diagramSourceUrl: XP_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: XP_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "XP Series",
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
  id = "draft-xp-series",
): XpSeriesImportDraft {
  return {
    id,
    familyId: "family-xp",
    status: "draft",
    sourceUrl: payload.sourceUrl ?? XP_SERIES_SOURCE_URL,
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

export function getBundledXpDraft(): XpSeriesImportDraft {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return createImportDraft(
    {
      ...raw,
      ...payload,
      hotspots: raw.hotspots ?? payload.hotspots,
    },
    "draft-xp-series-bundled",
  );
}
