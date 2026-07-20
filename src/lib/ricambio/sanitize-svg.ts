/**
 * Prepare Ricambio Components Engine SVGs for static use in PumpHub.
 * Removes scripts/event handlers and ensures a valid viewBox for layout + hotspots.
 */
export interface SanitizedSvgResult {
  svg: string;
  width: number;
  height: number;
}

export function parseRicambioViewBox(svgContent: string): { width: number; height: number } | null {
  const viewBoxMatch = svgContent.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/i);
  if (viewBoxMatch) {
    return { width: Math.round(Number(viewBoxMatch[1])), height: Math.round(Number(viewBoxMatch[2])) };
  }

  const supportMatch = svgContent.match(/viewBox_supporto="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/i);
  if (supportMatch) {
    return {
      width: Math.round(Number(supportMatch[1])),
      height: Math.round(Number(supportMatch[2])),
    };
  }

  const rootRectMatch = svgContent.match(
    /<rect[^>]*class="n1"[^>]*\bx="0"\s+y="0"\s+width="(\d+(?:\.\d+)?)"\s+height="(\d+(?:\.\d+)?)"/i,
  );
  if (rootRectMatch) {
    return {
      width: Math.round(Number(rootRectMatch[1])),
      height: Math.round(Number(rootRectMatch[2])),
    };
  }

  return null;
}

export function sanitizeRicambioSvg(svgContent: string): SanitizedSvgResult {
  let svg = svgContent;

  svg = svg.replace(/<\?xml[^?]*\?>\s*/i, "");
  svg = svg.replace(/<script[\s\S]*?<\/script>/gi, "");
  svg = svg.replace(/<script[^>]*\/>\s*/gi, "");
  svg = svg.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, "");
  svg = svg.replace(/\son[a-z]+\s*=\s*'[^']*'/gi, "");

  const dimensions = parseRicambioViewBox(svg);
  if (!dimensions) {
    throw new Error("Could not determine Ricambio diagram dimensions.");
  }

  const { width, height } = dimensions;

  svg = svg.replace(/<svg\b[^>]*>/i, (openingTag) => {
    let next = openingTag
      .replace(/\sviewBox="[^"]*"/gi, "")
      .replace(/\sviewBox_supporto="[^"]*"/gi, "");

    if (!/\sxmlns=/i.test(next)) {
      next = next.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    return next.replace("<svg", `<svg viewBox="0 0 ${width} ${height}"`);
  });

  return {
    svg: `<?xml version="1.0" encoding="UTF-8"?>\n${svg.trim()}`,
    width,
    height,
  };
}
