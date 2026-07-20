import { describe, expect, it } from "vitest";
import {
  getBundledHmDraft,
  inferHmCompatibilityScope,
} from "@/lib/ricambio/parse-hm-series";
import bundledDraft from "@/data/import/hm-series-ricambio-draft.json";

describe("HM Series Ricambio draft", () => {
  it("includes real manufacturer parts", () => {
    expect(bundledDraft.parts.length).toBeGreaterThan(80);
    expect(bundledDraft.parts.some((p) => p.partNumber === "13678SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "13676SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "13672SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "13668SP")).toBe(true);
  });

  it("maps HM impellers to correct models", () => {
    expect(inferHmCompatibilityScope({ partNumber: "13678SP", description: "Impeller HM60 Series" })).toBe(
      "hm60",
    );
    expect(
      inferHmCompatibilityScope({ partNumber: "13676SP", description: "Impeller", sourceCompatibilityText: "HM90 Series" }),
    ).toBe("hm90");
    expect(inferHmCompatibilityScope({ partNumber: "13672SP", description: "Impeller HM160 Series" })).toBe(
      "hm160",
    );
    expect(inferHmCompatibilityScope({ partNumber: "13668SP", description: "Impeller HM270 Series" })).toBe(
      "hm270",
    );
  });

  it("creates a review draft with hotspots", () => {
    const draft = getBundledHmDraft();
    expect(draft.parts.length).toBeGreaterThan(0);
    expect(draft.hotspots.some((h) => h.reference === "7")).toBe(true);
    expect(draft.diagramLocalPath).toBe("/diagrams/hm-series.svg");
  });
});
