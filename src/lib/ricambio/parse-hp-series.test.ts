import { describe, expect, it } from "vitest";
import {
  getBundledHpDraft,
  inferHpCompatibilityScope,
} from "@/lib/ricambio/parse-hp-series";
import bundledDraft from "@/data/import/hp-series-ricambio-draft.json";

describe("HP Series Ricambio draft", () => {
  it("includes real manufacturer parts", () => {
    expect(bundledDraft.parts.length).toBeGreaterThan(30);
    expect(bundledDraft.parts.some((p) => p.partNumber === "12889SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "12890SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "12891SP")).toBe(true);
  });

  it("maps HP impellers to correct models", () => {
    expect(inferHpCompatibilityScope({ partNumber: "12889SP", description: "Impeller HP45-05" })).toBe(
      "hp45",
    );
    expect(inferHpCompatibilityScope({ partNumber: "12890SP", description: "Impeller", sourceCompatibilityText: "HP65-06" })).toBe(
      "hp65",
    );
    expect(inferHpCompatibilityScope({ partNumber: "12891SP", description: "Impeller HP85-08" })).toBe(
      "hp85",
    );
  });

  it("creates a review draft with hotspots", () => {
    const draft = getBundledHpDraft();
    expect(draft.parts.length).toBeGreaterThan(0);
    expect(draft.hotspots.some((h) => h.reference === "6")).toBe(true);
    expect(draft.diagramLocalPath).toBe("/diagrams/hp-series.svg");
  });
});
