import type {
  DraftHotspotRecord,
  DraftPartRecord,
  EvoSeriesImportDraft,
  ImportParseReport,
} from "@/types/catalogue-import";
import {
  EVO_SERIES_DIAGRAM_HEIGHT,
  EVO_SERIES_DIAGRAM_PATH,
  EVO_SERIES_DIAGRAM_SOURCE_URL,
  EVO_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/evo-series-diagram";
import hotspotData from "@/data/diagrams/evo-series-hotspots.json";
import { parseRicambioCatalogueParts } from "@/lib/ricambio/parse-catalogue-html";
import { EVO_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/evo-series-ricambio-draft.json";

const DIAGRAM_WIDTH = EVO_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = EVO_SERIES_DIAGRAM_HEIGHT;

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

export function inferEvoCompatibilityScope(part: {
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

  if (
    text.includes("not illustrated") ||
    text.includes("optional") ||
    text.includes("upgrade kit") ||
    !part.diagramReference
  ) {
    return "verify";
  }

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
  if (lower.includes("motor") || lower.includes("stator") || lower.includes("rotor")) return "Motor";
  if (lower.includes("vsd") || lower.includes("controller")) return "Controller";
  if (lower.includes("seal")) return "Seal Kit";
  if (lower.includes("casing")) return "Casing";
  if (lower.includes("sensor")) return "Sensor";
  if (lower.includes("tank")) return "Tank";
  if (lower.includes("oring") || lower.includes("o-ring")) return "Seal";
  if (lower.includes("cover")) return "Cover";
  return "Part";
}

export function parseEvoSeriesHtml(html: string): RicambioDraftPayload {
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
      inferEvoCompatibilityScope(raw);
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
    sourceUrl: EVO_SERIES_SOURCE_URL,
    diagramSourceUrl: EVO_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: EVO_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "EvoDrive",
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
  id = "draft-evo-series",
): EvoSeriesImportDraft {
  return {
    id,
    familyId: "family-evodrive",
    status: "draft",
    sourceUrl: payload.sourceUrl ?? EVO_SERIES_SOURCE_URL,
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

export function getBundledEvoDraft(): EvoSeriesImportDraft {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return createImportDraft(
    {
      ...raw,
      ...payload,
      hotspots: payload.hotspots,
    },
    "draft-evo-series-bundled",
  );
}
