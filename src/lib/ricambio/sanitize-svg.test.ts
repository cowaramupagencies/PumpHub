import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { sanitizeRicambioSvg } from "@/lib/ricambio/sanitize-svg";

describe("sanitizeRicambioSvg", () => {
  it("removes scripts and event handlers from HP diagram", () => {
    const raw = readFileSync(join(process.cwd(), "DONT UPLOAD/tmp/hp-diagram-live.svg"), "utf8");
    const { svg, width, height } = sanitizeRicambioSvg(raw);

    expect(width).toBe(800);
    expect(height).toBe(917);
    expect(svg).toContain('viewBox="0 0 800 917"');
    expect(svg).not.toMatch(/<script/i);
    expect(svg).not.toMatch(/\sonclick=/i);
  });

  it("sanitizes bundled HS diagram", () => {
    const raw = readFileSync(join(process.cwd(), "public/diagrams/hs-series.svg"), "utf8");
    const { svg, width, height } = sanitizeRicambioSvg(raw);

    expect(width).toBe(800);
    expect(height).toBe(528);
    expect(svg).not.toMatch(/<script/i);
  });
});
