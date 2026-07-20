import hotspotData from "@/data/diagrams/hm-series-hotspots.json";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { HM_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const HM_SERIES_DIAGRAM_PATH = "/diagrams/hm-series.svg";
export const HM_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const HM_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const HM_SERIES_DIAGRAM_SOURCE_URL = HM_SERIES_DIAGRAM_URL;

export function getHmSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildHmSeriesDiagramHotspots(diagramId: string): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => ({
    id: `hm-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId,
    reference: hotspot.reference,
    x: hotspot.x,
    y: hotspot.y,
    width: hotspot.width,
    height: hotspot.height,
    partIds: hotspot.partNumbers.map((partNumber) => partIdFromNumber(partNumber)),
  }));
}
