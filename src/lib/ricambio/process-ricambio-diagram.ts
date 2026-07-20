import type { DraftHotspotRecord } from "@/types/catalogue-import";
import {
  ellipsesToDraftHotspots,
  extractSvgHotspotEllipses,
  normalizeHotspotReference,
} from "@/lib/ricambio/extract-svg-hotspots";
import {
  parseRicambioCatalogueParts,
  partNumbersByDiagramReference,
  type RicambioHtmlPart,
} from "@/lib/ricambio/parse-catalogue-html";
import type { RicambioSeriesConfig } from "@/lib/ricambio/ricambio-series-config";
import { sanitizeRicambioSvg } from "@/lib/ricambio/sanitize-svg";

export interface ProcessedRicambioDiagram {
  sanitizedSvg: string;
  width: number;
  height: number;
  parts: RicambioHtmlPart[];
  hotspots: DraftHotspotRecord[];
  hotspotCount: number;
  illustratedReferenceCount: number;
}

export function processRicambioDiagram(
  html: string,
  rawSvg: string,
  config: Pick<RicambioSeriesConfig, "diagramSourceUrl" | "diagramLocalPath" | "title">,
): ProcessedRicambioDiagram {
  const { svg: sanitizedSvg, width, height } = sanitizeRicambioSvg(rawSvg);
  const parts = parseRicambioCatalogueParts(html);
  const refParts = partNumbersByDiagramReference(parts);
  const ellipses = extractSvgHotspotEllipses(sanitizedSvg);
  const hotspots = ellipsesToDraftHotspots(ellipses, width, height, refParts);

  if (ellipses.length === 0) {
    throw new Error(`${config.title} diagram has no Ricambio hotspot ellipses.`);
  }

  const illustratedRefs = new Set(
    parts.filter((part) => part.diagramReference).map((part) => part.diagramReference as string),
  );
  const ellipseRefs = new Set(ellipses.map((ellipse) => ellipse.reference));
  const coveredPartNumbers = new Set(hotspots.flatMap((hotspot) => hotspot.partNumbers));

  const missingFromSvg = [...illustratedRefs].filter((ref) => {
    if (ellipseRefs.has(ref) || ellipseRefs.has(normalizeHotspotReference(ref))) return false;
    const partNumbers = refParts.get(ref) ?? [];
    if (partNumbers.length === 0) return false;
    return partNumbers.some((partNumber) => !coveredPartNumbers.has(partNumber));
  });

  if (missingFromSvg.length > 0) {
    throw new Error(
      `${config.title} diagram is missing SVG hotspots for references: ${missingFromSvg.join(", ")}`,
    );
  }

  return {
    sanitizedSvg,
    width,
    height,
    parts,
    hotspots,
    hotspotCount: hotspots.length,
    illustratedReferenceCount: illustratedRefs.size,
  };
}

export function buildHotspotsJsonPayload(
  processed: ProcessedRicambioDiagram,
  config: Pick<RicambioSeriesConfig, "diagramLocalPath" | "diagramSourceUrl">,
) {
  return {
    sourceSvg: config.diagramLocalPath,
    diagramSourceUrl: config.diagramSourceUrl,
    width: processed.width,
    height: processed.height,
    hotspots: processed.hotspots,
  };
}

export function buildDraftJsonPayload(
  processed: ProcessedRicambioDiagram,
  config: RicambioSeriesConfig,
) {
  return {
    sourceUrl: config.sourceUrl,
    diagramSourceUrl: config.diagramSourceUrl,
    diagramLocalPath: config.diagramLocalPath,
    diagramWidth: processed.width,
    diagramHeight: processed.height,
    cataloguePageTitle: config.title,
    parts: processed.parts,
    hotspots: processed.hotspots,
  };
}
