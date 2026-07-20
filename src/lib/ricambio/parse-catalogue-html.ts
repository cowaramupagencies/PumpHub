export interface RicambioHtmlPart {
  diagramReference: string | null;
  partNumber: string;
  description: string;
  sourceCompatibilityText?: string;
  sourceNoteText?: string;
  sourceQuantityText?: string;
  sourcePriceText?: string;
  illustrated: boolean;
  zoomRect?: string | null;
}

function stripHtml(cell: string): string {
  return cell
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizePartNumber(raw: string): string {
  let pn = raw.replace(/\*/g, "").replace(/\s+/g, "").trim();
  if (/^\d+_\d+$/.test(pn)) {
    pn = pn.replace("_", "-");
  }
  return pn;
}

export function parseRicambioCatalogueParts(html: string): RicambioHtmlPart[] {
  const chunks = html.split(/<tr id="DC[^"]+"/i);
  const parts: RicambioHtmlPart[] = [];

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

    const zoomMatch = block.match(/ZoomRectFilmato\(([^)]+)\)/i);

    parts.push({
      diagramReference: ref === "_" ? null : ref,
      partNumber: normalizePartNumber(cells[2]),
      description: cells[3],
      sourceCompatibilityText: cells[4] || undefined,
      sourceNoteText: cells[5] || undefined,
      sourceQuantityText: cells[6] || undefined,
      sourcePriceText: cells[7] || undefined,
      illustrated: ref !== "_",
      zoomRect: zoomMatch?.[1] ?? null,
    });
  }

  return parts;
}

export function partNumbersByDiagramReference(
  parts: RicambioHtmlPart[],
): Map<string, string[]> {
  const refParts = new Map<string, string[]>();
  for (const part of parts) {
    if (!part.diagramReference) continue;
    const list = refParts.get(part.diagramReference) ?? [];
    list.push(part.partNumber);
    refParts.set(part.diagramReference, list);
  }
  return refParts;
}
