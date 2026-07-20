import type {
  DraftHotspotRecord,
  DraftPartRecord,
  HpSeriesImportDraft,
  ImportParseReport,
} from "@/types/catalogue-import";
import {
  HP_SERIES_DIAGRAM_HEIGHT,
  HP_SERIES_DIAGRAM_PATH,
  HP_SERIES_DIAGRAM_SOURCE_URL,
  HP_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hp-series-diagram";
import hotspotData from "@/data/diagrams/hp-series-hotspots.json";
import { HP_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/hp-series-ricambio-draft.json";

const DIAGRAM_WIDTH = HP_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = HP_SERIES_DIAGRAM_HEIGHT;

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

import { parseRicambioCatalogueParts } from "@/lib/ricambio/parse-catalogue-html";

export { partIdFromNumber } from "@/lib/ricambio/part-id";

export function inferHpCompatibilityScope(part: {
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

  if (pn === "12889sp" || (text.includes("impeller") && text.includes("hp45"))) return "hp45";
  if (pn === "12890sp" || (text.includes("impeller") && text.includes("hp65"))) return "hp65";
  if (pn === "12891sp" || (text.includes("impeller") && text.includes("hp85"))) return "hp85";
  if (pn === "7000" || pn === "7064" || (text.includes("hp45-05") && text.includes("hp65"))) {
    return "hp45_hp65";
  }
  if (pn === "7001" || pn === "7065" || text.includes("hp85-08")) return "hp85";

  if (
    text.includes("not illustrated") ||
    text.includes("optional") ||
    text.includes("pressure controller") ||
    text.includes("upgrade kit") ||
    !part.diagramReference
  ) {
    return "verify";
  }

  const has45 = /\bhp45\b|hp45-/.test(text);
  const has65 = /\bhp65\b|hp65-/.test(text);
  const has85 = /\bhp85\b|hp85-/.test(text);
  const count = [has45, has65, has85].filter(Boolean).length;

  if (count >= 2) return "hp_all";
  if (has45) return "hp45";
  if (has65) return "hp65";
  if (has85) return "hp85";
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
  if (lower.includes("diffuser")) return "Diffuser";
  if (lower.includes("torrium")) return "Controller";
  if (lower.includes("o-ring")) return "Seal";
  return "Part";
}

export function parseHpSeriesHtml(html: string): RicambioDraftPayload {
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
      inferHpCompatibilityScope(raw);
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
    sourceUrl: HP_SERIES_SOURCE_URL,
    diagramSourceUrl: HP_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: HP_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "HP Series",
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
  id = "draft-hp-series",
): HpSeriesImportDraft {
  return {
    id,
    familyId: "family-hp",
    status: "draft",
    sourceUrl: payload.sourceUrl ?? HP_SERIES_SOURCE_URL,
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

export function getBundledHpDraft(): HpSeriesImportDraft {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return createImportDraft(
    {
      ...raw,
      ...payload,
      hotspots: payload.hotspots,
    },
    "draft-hp-series-bundled",
  );
}
