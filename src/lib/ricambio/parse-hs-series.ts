import type {
  DraftHotspotRecord,
  DraftPartRecord,
  HsSeriesImportDraft,
  ImportParseReport,
} from "@/types/catalogue-import";
import {
  HS_SERIES_DIAGRAM_HEIGHT,
  HS_SERIES_DIAGRAM_PATH,
  HS_SERIES_DIAGRAM_SOURCE_URL,
  HS_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hs-series-diagram";
import hotspotData from "@/data/diagrams/hs-series-hotspots.json";
import { HS_SERIES_SOURCE_URL } from "@/lib/ricambio/url-validator";
import bundledDraft from "@/data/import/hs-series-ricambio-draft.json";

const DIAGRAM_WIDTH = HS_SERIES_DIAGRAM_WIDTH;
const DIAGRAM_HEIGHT = HS_SERIES_DIAGRAM_HEIGHT;

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

export function inferCompatibilityScope(part: {
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

  if (pn === "12545sp" || (text.includes("impeller") && text.includes("hs50"))) return "hs50";
  if (pn === "12559sp" || (text.includes("impeller") && text.includes("hs60"))) return "hs60";
  if (pn === "32578" || (text.includes("hs50") && !text.includes("hs60"))) return "hs50";
  if (pn === "782" || text.includes("hs60-08") || (text.includes("hs60") && !text.includes("hs50"))) {
    return "hs60";
  }
  if (
    text.includes("optional") ||
    text.includes("not illustrated") ||
    text.includes("torrium") ||
    text.includes("hydrascan") ||
    text.includes("pressure controller") ||
    text.includes("3 stage only") ||
    !part.diagramReference
  ) {
    return "verify";
  }
  return "both";
}

function parseQuantity(text?: string): number {
  if (!text) return 1;
  const match = text.match(/\d+/);
  return match ? Number(match[0]) : 1;
}

function inferCategory(description: string): string {
  const lower = description.toLowerCase();
  if (lower.includes("impeller")) return "Impeller";
  if (lower.includes("seal")) return "Seal Kit";
  if (lower.includes("motor")) return "Motor";
  if (lower.includes("casing")) return "Casing";
  if (lower.includes("diffuser")) return "Diffuser";
  if (lower.includes("valve")) return "Valve";
  if (lower.includes("o-ring")) return "Seal";
  if (lower.includes("screw")) return "Fitting";
  return "Part";
}

export function parseHsSeriesHtml(html: string): RicambioDraftPayload {
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
      compatibilityScope: undefined,
      reviewStatus: "pending",
    });
  }

  return buildDraftPayload(parts);
}

export function buildDraftPayload(rawParts: RicambioRawPart[]): RicambioDraftPayload {
  const parts: DraftPartRecord[] = rawParts.map((raw) => {
    const compatibilityScope =
      (raw.compatibilityScope as DraftPartRecord["compatibilityScope"]) ??
      inferCompatibilityScope(raw);
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
    sourceUrl: HS_SERIES_SOURCE_URL,
    diagramSourceUrl: HS_SERIES_DIAGRAM_SOURCE_URL,
    diagramLocalPath: HS_SERIES_DIAGRAM_PATH,
    diagramWidth: DIAGRAM_WIDTH,
    diagramHeight: DIAGRAM_HEIGHT,
    cataloguePageTitle: "HS Series -1, -2",
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
  id = "draft-hs-series",
): HsSeriesImportDraft {
  return {
    id,
    familyId: "family-hs",
    status: "draft",
    sourceUrl: payload.sourceUrl ?? HS_SERIES_SOURCE_URL,
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

export function getBundledHsDraft(): HsSeriesImportDraft {
  const raw = bundledDraft as RicambioDraftPayload & { parts: RicambioRawPart[] };
  const payload = buildDraftPayload(raw.parts);
  return createImportDraft(
    {
      ...raw,
      ...payload,
      hotspots: payload.hotspots,
    },
    "draft-hs-series-bundled",
  );
}
