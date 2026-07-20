import { describe, expect, it } from "vitest";
import {
  getBundledXpDraft,
  inferXpCompatibilityScope,
} from "@/lib/ricambio/parse-xp-series";
import bundledDraft from "@/data/import/xp-series-ricambio-draft.json";

describe("XP Series Ricambio draft", () => {
  it("includes real manufacturer parts", () => {
    expect(bundledDraft.parts.length).toBeGreaterThan(40);
    expect(bundledDraft.parts.some((p) => p.partNumber === "11354BSP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "11253-1SP")).toBe(true);
    expect(bundledDraft.parts.some((p) => p.partNumber === "11253-3")).toBe(true);
  });

  it("maps XP model-specific parts", () => {
    expect(
      inferXpCompatibilityScope({
        partNumber: "706",
        description: "Motor",
        sourceCompatibilityText: "72111, XP25P2",
        diagramReference: "1",
      }),
    ).toBe("xp25");
    expect(
      inferXpCompatibilityScope({
        partNumber: "11253-3",
        description: "Venturi - Coverplate XP450T",
      }),
    ).toBe("xp45");
    expect(
      inferXpCompatibilityScope({
        partNumber: "31330SP",
        description: "Switch",
        sourceCompatibilityText: "XP25P2, XP35P8",
        diagramReference: "14",
      }),
    ).toBe("xp25_xp35");
  });

  it("creates a review draft with hotspots", () => {
    const draft = getBundledXpDraft();
    expect(draft.parts.length).toBeGreaterThan(0);
    expect(draft.hotspots.some((h) => h.reference === "5")).toBe(true);
    expect(draft.diagramLocalPath).toBe("/diagrams/xp-series.svg");
  });
});
