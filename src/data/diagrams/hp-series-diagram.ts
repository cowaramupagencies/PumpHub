import hotspotData from "@/data/diagrams/hp-series-hotspots.json";
import { getHsSeriesSvgHotspots } from "@/data/diagrams/hs-series-diagram";
import { getHmSeriesSvgHotspots } from "@/data/diagrams/hm-series-diagram";
import { getXjSeriesSvgHotspots } from "@/data/diagrams/xj-series-diagram";
import { getXpSeriesSvgHotspots } from "@/data/diagrams/xp-series-diagram";
import { partIdFromNumber } from "@/lib/ricambio/part-id";
import { HP_SERIES_DIAGRAM_URL } from "@/lib/ricambio/url-validator";
import type { DiagramHotspot } from "@/types";
import type { DraftHotspotRecord } from "@/types/catalogue-import";

export const HP_SERIES_DIAGRAM_PATH = "/diagrams/hp-series.svg";
export const HP_SERIES_DIAGRAM_WIDTH = hotspotData.width;
export const HP_SERIES_DIAGRAM_HEIGHT = hotspotData.height;
export const HP_SERIES_DIAGRAM_SOURCE_URL = HP_SERIES_DIAGRAM_URL;

export function getHpSeriesSvgHotspots(): DraftHotspotRecord[] {
  return hotspotData.hotspots;
}

export function buildHpSeriesDiagramHotspots(diagramId: string): DiagramHotspot[] {
  return hotspotData.hotspots.map((hotspot) => ({
    id: `hp-ref-${hotspot.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId,
    reference: hotspot.reference,
    x: hotspot.x,
    y: hotspot.y,
    width: hotspot.width,
    height: hotspot.height,
    partIds: hotspot.partNumbers.map((partNumber) => partIdFromNumber(partNumber)),
  }));
}

export function getCatalogueHotspotsForFamily(familySlug: string): DraftHotspotRecord[] {
  if (familySlug === "hp-series") return getHpSeriesSvgHotspots();
  if (familySlug === "hs-series") return getHsSeriesSvgHotspots();
  if (familySlug === "hm-series") return getHmSeriesSvgHotspots();
  if (familySlug === "xj-series") return getXjSeriesSvgHotspots();
  if (familySlug === "xp-series") return getXpSeriesSvgHotspots();
  return [];
}
