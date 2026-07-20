import { describe, expect, it } from "vitest";
import { getBundledSdwDraft, inferSdwCompatibilityScope } from "@/lib/ricambio/parse-sdw-series";

describe("parse-sdw-series", () => {
  it("infers shallow and deep model scopes from Ricambio text", () => {
    expect(
      inferSdwCompatibilityScope({
        partNumber: "404131SP",
        description: "Pressure Switch",
        sourceCompatibilityText: "Shallow Well models",
        diagramReference: "1",
      }),
    ).toBe("shallow_all");

    expect(
      inferSdwCompatibilityScope({
        partNumber: "404130SP",
        description: "Pressure Switch",
        sourceCompatibilityText: "Deep Well models",
        diagramReference: "2",
      }),
    ).toBe("deep_all");
  });

  it("bundled draft includes CE_201 parts and diagram", () => {
    const draft = getBundledSdwDraft();
    expect(draft.parts.length).toBeGreaterThan(60);
    expect(draft.diagramLocalPath).toBe("/diagrams/sdw-series.svg");
    expect(draft.cataloguePageTitle).toContain("95S");
  });
});
