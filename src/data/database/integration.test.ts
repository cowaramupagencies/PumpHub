import "fake-indexeddb/auto";
import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { PumpHubDatabase, setDbInstance } from "@/data/database/db";
import { seedDatabase } from "@/data/seed/demo-data";
import { savedRepository } from "@/data/repositories/savedRepository";
import { recentRepository } from "@/data/repositories/recentRepository";
import { noteRepository } from "@/data/repositories/noteRepository";
import { partRepository } from "@/data/repositories/partRepository";
import { searchCatalog } from "@/services/searchService";

let db: PumpHubDatabase;

beforeEach(async () => {
  const temp = new PumpHubDatabase();
  await temp.delete();
  db = new PumpHubDatabase();
  setDbInstance(db);
  await seedDatabase(db);
});

afterEach(async () => {
  setDbInstance(null);
});

describe("searchCatalog", () => {
  it("finds HS60 first for HS60 query", async () => {
    const results = await searchCatalog("HS60", "pumps");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].type).toBe("pump");
    if (results[0].type === "pump") {
      expect(results[0].model).toBe("HS60");
    }
  });

  it("finds HS60 for HS 60", async () => {
    const results = await searchCatalog("HS 60", "pumps");
    expect(results.some((r) => r.type === "pump" && r.type === "pump" && (r as { model: string }).model === "HS60")).toBe(true);
  });

  it("finds HS60 for HS-60", async () => {
    const results = await searchCatalog("HS-60", "pumps");
    expect(results.some((r) => r.type === "pump" && (r as { model: string }).model === "HS60")).toBe(true);
  });

  it("finds 12559SP for 12559", async () => {
    const results = await searchCatalog("12559", "parts");
    expect(results.some((r) => r.type === "part" && r.partNumber === "12559SP")).toBe(true);
  });

  it("finds seal parts for seal", async () => {
    const results = await searchCatalog("seal", "parts");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((r) => r.type === "part")).toBe(true);
  });

  it("finds impeller parts for impeller", async () => {
    const results = await searchCatalog("impeller", "parts");
    expect(results.some((r) => r.type === "part" && r.description.toLowerCase().includes("impeller"))).toBe(true);
  });
});

describe("savedRepository", () => {
  it("persists saved items", async () => {
    await savedRepository.save("part", "part-12559");
    const saved = await savedRepository.getAll();
    expect(saved.some((s) => s.entityId === "part-12559")).toBe(true);
  });
});

describe("recentRepository", () => {
  it("deduplicates and moves to top", async () => {
    await recentRepository.trackView("pumpModel", "model-hs60");
    await recentRepository.trackView("pumpModel", "model-hs50");
    await recentRepository.trackView("pumpModel", "model-hs60");

    const items = await recentRepository.getPumps();
    expect(items.length).toBe(2);
    expect(items[0].entityId).toBe("model-hs60");
  });
});

describe("noteRepository", () => {
  it("returns pump-specific notes only", async () => {
    await noteRepository.create({
      title: "HS60 note",
      body: "Version check",
      attachedEntityType: "pumpModel",
      attachedEntityId: "model-hs60",
    });
    await noteRepository.create({
      title: "HS50 note",
      body: "Different pump",
      attachedEntityType: "pumpModel",
      attachedEntityId: "model-hs50",
    });

    const hs60Notes = await noteRepository.getForEntity("pumpModel", "model-hs60");
    expect(hs60Notes.length).toBe(1);
    expect(hs60Notes[0].title).toBe("HS60 note");
  });
});

describe("HS60 compatibility filtering", () => {
  it("returns HS60-specific and family parts", async () => {
    const parts = await partRepository.getPartsForModel("model-hs60", "family-hs");
    const partNumbers = parts.map((p) => p.partNumber);
    expect(partNumbers).toContain("12559SP");
    expect(partNumbers).not.toContain("12545SP");
    expect(partNumbers).toContain("31618");
  });
});
