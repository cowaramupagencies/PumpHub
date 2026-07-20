import type {
  DraftHotspotRecord,
  DraftPartRecord,
  ImportParseReport,
} from "@/types/catalogue-import";
import {
  SDW_SERIES_DIAGRAM_HEIGHT,
  SDW_SERIES_DIAGRAM_PATH,
  SDW_SERIES_DIAGRAM_SOURCE_URL,
  SDW_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/sdw-series-diagram";
import hotspotData from "@/data/diagrams/sdw-series-hotspots.json";
import { parseRicambioCatalogueParts } from "@/lib/ricambio/parse-catalogue-html";
import { SDW_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/sdw-series-ricambio-draft.json";

const DIAGRAM_WIDTH = SDW_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = SDW_SERIES_DIAGRAM_HEIGHT;

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

function hasShallowKeyword(text: string): boolean {
  return (
    text.includes("shallow well") ||
    text.includes("shallowwell") ||
    /\bs\/w\b/.test(text) ||
    text.includes(" s/w")
  );
}

function hasDeepKeyword(text: string): boolean {
  return (
    text.includes("deep well") ||
    text.includes("deepwell") ||
    /\bd\/w\b/.test(text) ||
    text.includes(" d/w")
  );
}

export function inferSdwCompatibilityScope(part: {
  partNumber: string;
  description: string;
  sourceCompatibilityText?: string;
  sourceNoteText?: string;
  diagramReference?: string | null;
}): DraftPartRecord["compatibilityScope"] {
  const compat = (part.sourceCompatibilityText ?? "").trim();
  const text = [part.description, part.sourceCompatibilityText, part.sourceNoteText]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const desc = part.description.toLowerCase();

  if (
    text.includes("not illustrated") ||
    text.includes("optional") ||
    text.includes("upgrade kit") ||
    text.includes("torrium") ||
    text.includes("pressure controller") ||
    text.includes("not specifi")
  ) {
    return "verify";
  }

  if (compat === "095S, 095D TEFC") return "sdw95_both";
  if (compat === "125S, 125D, 165S, 165D TEFC") return "sdw125_165";
  if (compat === "165S3, 165D3 TEFC") return "sdw125_165";
  if (compat === "Shallow Well models") return "shallow_all";
  if (compat === "Deep Well models") return "deep_all";
  if (compat === "95S") return "sdw95s";
  if (compat === "095S") return "sdw95s";
  if (compat === "125S") return "sdw125s";
  if (compat === "165S") return "sdw165s";
  if (compat === "95S, 125S") return "sdw95s_125s";
  if (compat === "D/W") return "deep_all";

  if (compat === "-0 & -1 models" || compat === "-2 models") return "sdw_all";

  if (desc.includes("impeller assy 095s 095d")) return "sdw95_both";
  if (desc.includes("impeller assy 125s 125d 165s 165d")) return "sdw125_165";

  const shallow = hasShallowKeyword(text);
  const deep = hasDeepKeyword(text);
  if (shallow && !deep) return "shallow_all";
  if (deep && !shallow) return "deep_all";

  if (!part.diagramReference) return "verify";

  return "sdw_all";
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
  if (lower.includes("seal kit") || lower.includes("seal -")) return "Seal Kit";
  if (lower.includes("venturi")) return "Venturi";
  if (lower.includes("jet")) return "Jet";
  if (lower.includes("switch")) return "Switch";
  if (lower.includes("torrium")) return "Controller";
  if (lower.includes("o-ring")) return "Seal";
  return "Part";
}

function dedupeParts(parts: DraftPartRecord[]): DraftPartRecord[] {
  const byNumber = new Map<string, DraftPartRecord>();
  for (const part of parts) {
    const existing = byNumber.get(part.partNumber);
    if (!existing) {
      byNumber.set(part.partNumber, part);
      continue;
    }
    const mergedScope =
      existing.compatibilityScope === part.compatibilityScope
        ? existing.compatibilityScope
        : "sdw_all";
    byNumber.set(part.partNumber, {
      ...existing,
      compatibilityScope: mergedScope,
      illustrated: existing.illustrated || part.illustrated,
    });
  }
  return [...byNumber.values()];
}

export function buildDraftPayload(rawParts: RicambioRawPart[]): RicambioDraftPayload {
  const parts: DraftPartRecord[] = dedupeParts(
    rawParts.map((raw) => {
      const compatibilityScope =
        (raw.compatibilityScope as DraftPartRecord["compatibilityScope"]) ??
        inferSdwCompatibilityScope(raw);
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
    }),
  );

  const hotspots: DraftHotspotRecord[] = hotspotData.hotspots.map((hotspot) => ({
    ...hotspot,
    partNumbers: hotspot.partNumbers.length ? hotspot.partNumbers : [],
  }));

  return {
    sourceUrl: SDW_SERIES_SOURCE_URL,
    diagramSourceUrl: SDW_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: SDW_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "95S & D, 125S & D, 165S & D",
    importedAt: new Date().toISOString(),
    parts,
    hotspots,
  };
}

export function parseSdwSeriesHtml(html: string): RicambioDraftPayload {
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

export function getBundledSdwDraft(): RicambioDraftPayload {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return {
    ...raw,
    ...payload,
    hotspots: raw.hotspots ?? payload.hotspots,
  };
}
