import hotspotData from "@/data/diagrams/hs-series-hotspots.json";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { HS_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const HS_SERIES_DIAGRAM_PATH = "/diagrams/hs-series.svg";
export const HS_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const HS_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const HS_SERIES_DIAGRAM_SOURCE_URL = HS_SERIES_DIAGRAM_URL;

export function getHsSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildHsSeriesDiagramHotspots(
  diagramId: string,
  options?: { knownPartIds?: Set<string> },
): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => {
    const partIds = hotspot.partNumbers
      .map((partNumber) => partIdFromNumber(partNumber))
      .filter((partId) => !options?.knownPartIds || options.knownPartIds.has(partId));

    return {
      id: `hs-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
      diagramId,
      reference: hotspot.reference,
      x: hotspot.x,
      y: hotspot.y,
      width: hotspot.width,
      height: hotspot.height,
      partIds,
    };
  });
}
