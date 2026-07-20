import { describe, expect, it } from "vitest";
import {
  getBundledXjDraft,
  inferXjCompatibilityScope,
} from "@/lib/ricambio/parse-xj-series";
import bundledDraft from "@/data/import/xj-series-ricambio-draft.json";

describe("XJ Series Ricambio draft", () => {
  it("includes real manufacturer parts", () => {
    expect(bundledDraft.parts.length).toBeGreaterThan(40);
    expect(bundledDraft.parts.some((p) => p.partNumber === "9859SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "9856-5SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "9856SP")).toBe(true);
  });

  it("maps XJ impellers to correct models", () => {
    expect(
      inferXjCompatibilityScope({
        partNumber: "9859SP",
        description: "Impeller",
        sourceCompatibilityText: "XJ50 models",
      }),
    ).toBe("xj50");
    expect(
      inferXjCompatibilityScope({
        partNumber: "9856-5SP",
        description: "Impeller",
        sourceCompatibilityText: "XJ70 models",
      }),
    ).toBe("xj70");
    expect(
      inferXjCompatibilityScope({
        partNumber: "9856SP",
        description: "Impeller",
        sourceCompatibilityText: "XJ90 models",
      }),
    ).toBe("xj90");
  });

  it("creates a review draft with hotspots", () => {
    const draft = getBundledXjDraft();
    expect(draft.parts.length).toBeGreaterThan(0);
    expect(draft.hotspots.some((h) => h.reference === "4")).toBe(true);
    expect(draft.diagramLocalPath).toBe("/diagrams/xj-series.svg");
  });
});
