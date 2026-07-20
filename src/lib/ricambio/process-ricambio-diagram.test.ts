import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { processRicambioDiagram } from "@/lib/ricambio/process-ricambio-diagram";
import { getRicambioSeriesConfig } from "@/lib/ricambio/ricambio-series-config";

describe("processRicambioDiagram", () => {
  it("processes the live HP schematic with 22 mapped hotspots", () => {
    const config = getRicambioSeriesConfig("hp");
    const html = readFileSync(join(process.cwd(), "DONT UPLOAD/tmp/ricambio-hp-live.html"), "utf8");
    const svg = readFileSync(join(process.cwd(), "DONT UPLOAD/tmp/hp-diagram-live.svg"), "utf8");

    const processed = processRicambioDiagram(html, svg, config);

    expect(processed.width).toBe(800);
    expect(processed.height).toBe(917);
    expect(processed.parts.length).toBe(38);
    expect(processed.hotspotCount).toBe(22);
    expect(processed.hotspots.find((hotspot) => hotspot.reference === "6")?.partNumbers).toEqual(
      expect.arrayContaining(["12889SP", "12890SP", "12891SP"]),
    );
    expect(processed.sanitizedSvg).not.toMatch(/<script/i);
    expect(processed.sanitizedSvg).not.toMatch(/\sonclick=/i);
  });

  it("matches bundled HP hotspot coordinates", () => {
    const bundled = JSON.parse(
      readFileSync(join(process.cwd(), "src/data/diagrams/hp-series-hotspots.json"), "utf8"),
    );
    const ref6 = bundled.hotspots.find((hotspot: { reference: string }) => hotspot.reference === "6");
    expect(ref6).toMatchObject({ x: expect.any(Number), y: expect.any(Number) });
    expect(bundled.width).toBe(800);
    expect(bundled.height).toBe(917);
    expect(bundled.hotspots.length).toBe(22);
  });
});
