import hotspotData from "@/data/diagrams/sdw-series-hotspots.json";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { SDW_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const SDW_SERIES_DIAGRAM_PATH = "/diagrams/sdw-series.svg";
export const SDW_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const SDW_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const SDW_SERIES_DIAGRAM_SOURCE_URL = SDW_SERIES_DIAGRAM_URL;

export function getSdwSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildSdwSeriesDiagramHotspots(diagramId: string): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => ({
    id: `sdw-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId,
    reference: hotspot.reference,
    x: hotspot.x,
    y: hotspot.y,
    width: hotspot.width,
    height: hotspot.height,
    partIds: hotspot.partNumbers.map((partNumber) => partIdFromNumber(partNumber)),
  }));
}
