import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  ellipsesToDraftHotspots,
  extractSvgHotspotEllipses,
} from "@/lib/ricambio/extract-svg-hotspots";

describe("extractSvgHotspotEllipses", () => {
  it("reads clickable reference markers from the Ricambio SVG", () => {
    const svg = readFileSync(join(process.cwd(), "public/diagrams/hs-series.svg"), "utf8");
    const ellipses = extractSvgHotspotEllipses(svg);

    expect(ellipses.length).toBe(31);
    expect(ellipses.some((ellipse) => ellipse.reference === "4")).toBe(true);
    expect(ellipses.find((ellipse) => ellipse.reference === "4")).toMatchObject({
      cx: 331.04,
      cy: 491.27,
    });
  });

  it("normalizes ellipse bounds to diagram coordinates", () => {
    const hotspots = ellipsesToDraftHotspots(
      [{ reference: "4", cx: 331.04, cy: 491.27, rx: 8.47, ry: 8.47 }],
      800,
      528,
      new Map([["4", ["12545SP", "12559SP"]]]),
    );

    expect(hotspots[0]).toMatchObject({
      reference: "4",
      partNumbers: ["12545SP", "12559SP"],
    });
    expect(hotspots[0].x).toBeCloseTo(0.4032, 3);
    expect(hotspots[0].y).toBeCloseTo(0.9144, 3);
  });

  it("merges letter-suffixed sub-references when no bare numeric marker exists", () => {
    const svg = readFileSync(join(process.cwd(), "public/diagrams/xj-series.svg"), "utf8");
    const ellipses = extractSvgHotspotEllipses(svg);

    expect(ellipses.some((ellipse) => ellipse.reference === "3")).toBe(true);
    expect(ellipses.some((ellipse) => ellipse.reference === "3a")).toBe(false);
  });
});
