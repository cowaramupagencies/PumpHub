import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { PumpHubDatabase, setDbInstance } from "@/data/database/db";
import { seedDatabase } from "@/data/seed/demo-data";
import { noteRepository } from "@/data/repositories/noteRepository";
import { savedRepository } from "@/data/repositories/savedRepository";
import { getBundledHsDraft } from "@/lib/ricambio/parse-hs-series";
import { approveHsSeriesImport } from "@/services/hsSeriesImportService";
import { searchCatalog } from "@/services/searchService";
import { partRepository } from "@/data/repositories/partRepository";
import { pumpRepository } from "@/data/repositories/pumpRepository";

describe("HS Series import", () => {
  beforeEach(async () => {
    const temp = new PumpHubDatabase();
    await temp.delete();
    const db = new PumpHubDatabase();
    setDbInstance(db);
    await seedDatabase(db);

    await noteRepository.create({
      title: "HS60 note",
      body: "Version check",
      attachedEntityType: "pumpModel",
      attachedEntityId: "model-hs60",
    });
    await savedRepository.save("part", "part-12559");
    await savedRepository.save("pumpModel", "model-hs50");
  });

  afterEach(async () => {
    setDbInstance(null);
  });

  it("approves real catalogue without removing user notes or saves", async () => {
    const draft = getBundledHsDraft();
    draft.parts = draft.parts.map((p) =>
      p.reviewStatus === "excluded"
        ? p
        : { ...p, reviewStatus: "approved", verificationStatus: "verified" },
    );

    await approveHsSeriesImport(draft);

    const notes = await noteRepository.getForEntity("pumpModel", "model-hs60");
    expect(notes.some((n) => n.body.includes("Version check"))).toBe(true);

    const savedPart = await savedRepository.getAll();
    expect(savedPart.some((s) => s.entityId === "part-12559")).toBe(true);
    expect(savedPart.some((s) => s.entityId === "model-hs50")).toBe(true);
  });

  it("keeps HS50 and HS60 impellers model-specific after import", async () => {
    const draft = getBundledHsDraft();
    draft.parts = draft.parts.map((p) => ({ ...p, reviewStatus: "approved" as const }));
    await approveHsSeriesImport(draft);

    const hs50Parts = await partRepository.getPartsForModel("model-hs50", "family-hs");
    const hs60Parts = await partRepository.getPartsForModel("model-hs60", "family-hs");

    expect(hs50Parts.some((p) => p.partNumber === "12545SP")).toBe(true);
    expect(hs50Parts.some((p) => p.partNumber === "12559SP")).toBe(false);
    expect(hs60Parts.some((p) => p.partNumber === "12559SP")).toBe(true);
    expect(hs60Parts.some((p) => p.partNumber === "12545SP")).toBe(false);
  });

  it("uses one shared record for 31618", async () => {
    const draft = getBundledHsDraft();
    draft.parts = draft.parts.map((p) => ({ ...p, reviewStatus: "approved" as const }));
    await approveHsSeriesImport(draft);

    const all = await partRepository.getAll();
    const sealParts = all.filter((p) => p.partNumber === "31618");
    expect(sealParts).toHaveLength(1);
  });

  it("finds HS60 and 12559SP in search after import", async () => {
    const draft = getBundledHsDraft();
    draft.parts = draft.parts.map((p) => ({ ...p, reviewStatus: "approved" as const }));
    await approveHsSeriesImport(draft);

    const hs60 = await searchCatalog("HS 60");
    expect(hs60[0]?.type === "pump" && hs60[0].model).toBe("HS60");

    const part = await searchCatalog("12559SP");
    expect(part[0]?.type === "part" && part[0].partNumber).toBe("12559SP");
  });

  it("prioritises HS60 parts for reference 4 hotspot", async () => {
    const draft = getBundledHsDraft();
    draft.parts = draft.parts.map((p) => ({ ...p, reviewStatus: "approved" as const }));
    await approveHsSeriesImport(draft);

    const diagram = await pumpRepository.getDiagramForFamily("family-hs");
    expect(diagram?.imageUrl).toBe("/diagrams/hs-series.svg");
    const hotspots = await pumpRepository.getHotspotsForDiagram("diagram-hs");
    const ref4 = hotspots.find((h) => h.reference === "4");
    expect(ref4?.partIds).toContain("part-12559");
    expect(ref4?.partIds).toContain("part-12545");
  });
});
