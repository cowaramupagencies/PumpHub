import { describe, expect, it } from "vitest";
import {
  getBundledEvoDraft,
  inferEvoCompatibilityScope,
} from "@/lib/ricambio/parse-evo-series";
import bundledDraft from "@/data/import/evo-series-ricambio-draft.json";

describe("EvoDrive Ricambio draft", () => {
  it("includes real manufacturer parts", () => {
    expect(bundledDraft.parts.length).toBeGreaterThan(20);
    expect(bundledDraft.parts.some((p) => p.partNumber === "33466")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "404300")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "33469")).toBe(true);
  });

  it("maps illustrated parts to the EvoDrive family", () => {
    expect(
      inferEvoCompatibilityScope({
        partNumber: "33466",
        description: "Impeller",
        diagramReference: "13",
      }),
    ).toBe("family");
    expect(
      inferEvoCompatibilityScope({
        partNumber: "33469",
        description: "Seal Kit Includes Items 9 & 15",
        diagramReference: null,
      }),
    ).toBe("verify");
  });

  it("creates a review draft with hotspots", () => {
    const draft = getBundledEvoDraft();
    expect(draft.parts.length).toBeGreaterThan(0);
    expect(draft.familyId).toBe("family-evodrive");
    expect(draft.diagramLocalPath).toBe("/diagrams/evo-series.svg");
    expect(draft.hotspots.some((h) => h.reference === "13")).toBe(true);
  });
});
