import { describe, expect, it } from "vitest";
import { buildSeriesCompatibilities } from "@/lib/ricambio/build-compatibilities";
import type { DraftPartRecord } from "@/types/catalogue-import";

function draftPart(scope: DraftPartRecord["compatibilityScope"]): DraftPartRecord {
  return {
    partNumber: "48802SP",
    description: 'Seal - Mechanical 1/2"',
    diagramReference: "4",
    illustrated: true,
    compatibilityScope: scope,
    sourceDescription: 'Seal - Mechanical 1/2"',
    reviewStatus: "approved",
    partCategory: "Seal Kit",
    quantity: 1,
    verificationStatus: "verified",
  };
}

describe("buildSeriesCompatibilities", () => {
  it("assigns family-wide parts to every model in the series", () => {
    const rows = buildSeriesCompatibilities("hp", "part-48802sp", draftPart("hp_all"));
    expect(rows.map((row) => row.modelId)).toEqual(["model-hp45", "model-hp65", "model-hp85"]);
    expect(rows.every((row) => row.id.startsWith("compat-hp-"))).toBe(true);
  });

  it("uses unique compatibility ids per series for shared part numbers", () => {
    const hpRows = buildSeriesCompatibilities("hp", "part-48802sp", draftPart("hp_all"));
    const xpRows = buildSeriesCompatibilities("xp", "part-48802sp", draftPart("xp_all"));
    const hpIds = new Set(hpRows.map((row) => row.id));
    const xpIds = new Set(xpRows.map((row) => row.id));

    expect(hpIds.intersection(xpIds).size).toBe(0);
    expect(xpRows.map((row) => row.modelId)).toEqual(["model-xp25", "model-xp35", "model-xp45"]);
  });

  it("defaults verify and family scopes to all models in the range", () => {
    const verifyRows = buildSeriesCompatibilities("xp", "part-48802sp", draftPart("verify"));
    const familyRows = buildSeriesCompatibilities("xp", "part-48802sp", draftPart("family"));
    expect(verifyRows.map((row) => row.modelId)).toEqual(["model-xp25", "model-xp35", "model-xp45"]);
    expect(familyRows.map((row) => row.modelId)).toEqual(["model-xp25", "model-xp35", "model-xp45"]);
  });
});
