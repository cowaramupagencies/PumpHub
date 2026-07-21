import hotspotData from "@/data/diagrams/evo-series-hotspots.json";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { EVO_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const EVO_SERIES_DIAGRAM_PATH = "/diagrams/evo-series.svg";
export const EVO_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const EVO_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const EVO_SERIES_DIAGRAM_SOURCE_URL = EVO_SERIES_DIAGRAM_URL;

export function getEvoSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildEvoSeriesDiagramHotspots(diagramId: string): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => ({
    id: `evo-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId,
    reference: hotspot.reference,
    x: hotspot.x,
    y: hotspot.y,
    width: hotspot.width,
    height: hotspot.height,
    partIds: hotspot.partNumbers.map((partNumber) => partIdFromNumber(partNumber)),
  }));
}
