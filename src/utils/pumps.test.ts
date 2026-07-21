import { describe, expect, it } from "vitest";
import { getPumpCurveInfo } from "@/utils/pumps";

describe("getPumpCurveInfo", () => {
  it("returns HS50 curve label", () => {
    const curve = getPumpCurveInfo("hs50");
    expect(curve?.seriesLabel).toBe("L4T (HS50-06T)");
    expect(curve?.imageUrl).toContain("hs-series-performance-curve");
  });

  it("returns HS60 curve label", () => {
    const curve = getPumpCurveInfo("hs60");
    expect(curve?.seriesLabel).toBe("L5T (HS60-08T)");
  });

  it("returns HP65 curve label", () => {
    const curve = getPumpCurveInfo("hp65");
    expect(curve?.seriesLabel).toBe("HP65-06T");
    expect(curve?.imageUrl).toContain("hp-series-performance-curve");
  });

  it("returns HM90 curve label", () => {
    const curve = getPumpCurveInfo("hm90");
    expect(curve?.seriesLabel).toBe("HM90-13T");
    expect(curve?.imageUrl).toContain("hm-series-performance-curve");
  });

  it("returns XJ50 curve image", () => {
    const curve = getPumpCurveInfo("xj50");
    expect(curve?.seriesLabel).toBe("XJ50");
    expect(curve?.imageUrl).toContain("xj50-performance-curve");
  });

  it("returns XJ70 curve image", () => {
    const curve = getPumpCurveInfo("xj70");
    expect(curve?.imageUrl).toContain("xj70-performance-curve");
  });

  it("returns XJ90 curve image", () => {
    const curve = getPumpCurveInfo("xj90");
    expect(curve?.imageUrl).toContain("xj90-performance-curve");
  });

  it("returns XP25 curve image", () => {
    const curve = getPumpCurveInfo("xp25");
    expect(curve?.seriesLabel).toBe("XP25P8");
    expect(curve?.imageUrl).toContain("xp25-performance-curve");
  });

  it("returns EvoDrive curve for ED60-09", () => {
    const curve = getPumpCurveInfo("ed60-09", undefined, undefined, "evodrive");
    expect(curve?.seriesLabel).toBe("ED60-09");
    expect(curve?.seriesName).toBe("EvoDrive");
    expect(curve?.imageUrl).toBe("/pumps/evodrive-performance-curve.png");
  });

  it("returns undefined for pumps without curves", () => {
    expect(getPumpCurveInfo("unknown")).toBeUndefined();
  });
});
