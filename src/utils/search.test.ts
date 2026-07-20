import { describe, it, expect } from "vitest";
import { normalizeSearchText, createId } from "@/utils";

describe("normalizeSearchText", () => {
  it("lowercases and removes spaces", () => {
    expect(normalizeSearchText("HS 60")).toBe("hs60");
  });

  it("removes hyphens", () => {
    expect(normalizeSearchText("HS-60")).toBe("hs60");
  });

  it("normalizes part numbers", () => {
    expect(normalizeSearchText("12559 SP")).toBe("12559sp");
    expect(normalizeSearchText("12559SP")).toBe("12559sp");
  });

  it("handles mixed case", () => {
    expect(normalizeSearchText("hs60")).toBe("hs60");
    expect(normalizeSearchText("HS60")).toBe("hs60");
  });
});

describe("search ranking expectations", () => {
  it("HS60 HS 60 HS-60 normalize identically", () => {
    const variants = ["HS60", "hs60", "HS 60", "HS-60"];
    const normalized = variants.map(normalizeSearchText);
    expect(new Set(normalized).size).toBe(1);
    expect(normalized[0]).toBe("hs60");
  });

  it("12559 partial matches 12559SP", () => {
    expect(normalizeSearchText("12559")).toBe("12559");
    expect(normalizeSearchText("12559SP").includes(normalizeSearchText("12559"))).toBe(true);
  });
});

describe("createId", () => {
  it("returns a UUID-shaped string", () => {
    const id = createId();
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });
});
