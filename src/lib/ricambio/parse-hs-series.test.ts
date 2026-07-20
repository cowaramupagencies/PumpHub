import { describe, expect, it } from "vitest";
import {
  getBundledHsDraft,
  inferCompatibilityScope,
  partIdFromNumber,
} from "@/lib/ricambio/parse-hs-series";
import bundledDraft from "@/data/import/hs-series-ricambio-draft.json";

describe("HS Series Ricambio draft", () => {
  it("includes real manufacturer parts", () => {
    expect(bundledDraft.parts.length).toBeGreaterThan(30);
    expect(bundledDraft.parts.some((p) => p.partNumber === "12559SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "12545SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "11091-1")).toBe(true);
  });

  it("preserves part-number punctuation", () => {
    const plug = bundledDraft.parts.find((p) => p.partNumber.includes("11091"));
    expect(plug?.partNumber).toBe("11091-1");
  });

  it("maps HS50 and HS60 impellers separately", () => {
    expect(inferCompatibilityScope({ partNumber: "12545SP", description: "Impeller - HS50 50Hz" })).toBe(
      "hs50",
    );
    expect(inferCompatibilityScope({ partNumber: "12559SP", description: "Impeller - HS60 50Hz" })).toBe(
      "hs60",
    );
  });
});

describe("partIdFromNumber", () => {
  it("keeps stable legacy ids", () => {
    expect(partIdFromNumber("12559SP")).toBe("part-12559");
    expect(partIdFromNumber("11091-1")).toBe("part-11091");
  });
});

describe("bundled draft", () => {
  it("uses Ricambio SVG marker positions for hotspots", () => {
    const draft = getBundledHsDraft();
    const ref4 = draft.hotspots.find((hotspot) => hotspot.reference === "4");
    expect(ref4).toBeDefined();
    expect(ref4?.y).toBeCloseTo(0.9144, 3);
    expect(ref4?.partNumbers).toContain("12559SP");
  });
});
