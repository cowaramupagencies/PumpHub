import type { DraftHotspotRecord } from "@/types/catalogue-import";

export interface SvgHotspotEllipse {
  reference: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

/** Ricambio sometimes splits one catalogue ref across sub-ellipses (e.g. 3a–3d → ref 3). */
export function normalizeHotspotReference(reference: string): string {
  const match = reference.match(/^(\d+)[a-z]?$/i);
  return match ? match[1] : reference;
}

const ELLIPSE_PATTERN =
  /<ellipse id="hotspot\.V_([^!]+)!@!\d+"[^>]*cx="([0-9.]+)"\s+cy="([0-9.]+)"\s+rx="([0-9.]+)"\s+ry="([0-9.]+)"/g;

export function extractSvgHotspotEllipses(svgContent: string): SvgHotspotEllipse[] {
  const raw: SvgHotspotEllipse[] = [];

  for (const match of svgContent.matchAll(ELLIPSE_PATTERN)) {
    raw.push({
      reference: match[1],
      cx: Number(match[2]),
      cy: Number(match[3]),
      rx: Number(match[4]),
      ry: Number(match[5]),
    });
  }

  return mergeEllipsesByReference(raw);
}

export function mergeEllipsesByReference(ellipses: SvgHotspotEllipse[]): SvgHotspotEllipse[] {
  const groups = new Map<string, SvgHotspotEllipse[]>();

  for (const ellipse of ellipses) {
    const key = normalizeHotspotReference(ellipse.reference);
    const list = groups.get(key) ?? [];
    list.push(ellipse);
    groups.set(key, list);
  }

  const merged: SvgHotspotEllipse[] = [];

  for (const [reference, group] of groups) {
    const hasBareNumericRef = group.some((ellipse) => /^\d+$/.test(ellipse.reference));

    if (hasBareNumericRef || group.length === 1) {
      for (const ellipse of group) {
        merged.push(ellipse);
      }
      continue;
    }

    const minX = Math.min(...group.map((e) => e.cx - e.rx));
    const maxX = Math.max(...group.map((e) => e.cx + e.rx));
    const minY = Math.min(...group.map((e) => e.cy - e.ry));
    const maxY = Math.max(...group.map((e) => e.cy + e.ry));

    merged.push({
      reference,
      cx: (minX + maxX) / 2,
      cy: (minY + maxY) / 2,
      rx: (maxX - minX) / 2,
      ry: (maxY - minY) / 2,
    });
  }

  return merged.sort((a, b) =>
    a.reference.localeCompare(b.reference, undefined, { numeric: true }),
  );
}

export function ellipsesToDraftHotspots(
  ellipses: SvgHotspotEllipse[],
  diagramWidth: number,
  diagramHeight: number,
  partNumbersByReference: Map<string, string[]>,
): DraftHotspotRecord[] {
  return ellipses.map((ellipse) => ({
    reference: ellipse.reference,
    x: (ellipse.cx - ellipse.rx) / diagramWidth,
    y: (ellipse.cy - ellipse.ry) / diagramHeight,
    width: (ellipse.rx * 2) / diagramWidth,
    height: (ellipse.ry * 2) / diagramHeight,
    partNumbers: partNumbersForHotspotReference(ellipse.reference, partNumbersByReference),
  }));
}

function partNumbersForHotspotReference(
  reference: string,
  partNumbersByReference: Map<string, string[]>,
): string[] {
  const numbers = new Set<string>(partNumbersByReference.get(reference) ?? []);

  for (const [key, partNumbers] of partNumbersByReference) {
    if (normalizeHotspotReference(key) === reference) {
      for (const partNumber of partNumbers) numbers.add(partNumber);
    }
  }

  return [...numbers];
}
