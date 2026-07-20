import hotspotData from "@/data/diagrams/xj-series-hotspots.json";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { XJ_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const XJ_SERIES_DIAGRAM_PATH = "/diagrams/xj-series.svg";
export const XJ_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const XJ_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const XJ_SERIES_DIAGRAM_SOURCE_URL = XJ_SERIES_DIAGRAM_URL;

export function getXjSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildXjSeriesDiagramHotspots(diagramId: string): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => ({
    id: `xj-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId,
    reference: hotspot.reference,
    x: hotspot.x,
    y: hotspot.y,
    width: hotspot.width,
    height: hotspot.height,
    partIds: hotspot.partNumbers.map((partNumber) => partIdFromNumber(partNumber)),
  }));
}
