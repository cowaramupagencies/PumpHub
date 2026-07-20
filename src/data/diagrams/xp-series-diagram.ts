import hotspotData from "@/data/diagrams/xp-series-hotspots.json";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { XP_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const XP_SERIES_DIAGRAM_PATH = "/diagrams/xp-series.svg";
export const XP_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const XP_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const XP_SERIES_DIAGRAM_SOURCE_URL = XP_SERIES_DIAGRAM_URL;

export function getXpSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildXpSeriesDiagramHotspots(diagramId: string): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => ({
    id: `xp-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId,
    reference: hotspot.reference,
    x: hotspot.x,
    y: hotspot.y,
    width: hotspot.width,
    height: hotspot.height,
    partIds: hotspot.partNumbers.map((partNumber) => partIdFromNumber(partNumber)),
  }));
}
