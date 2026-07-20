import { getDb } from "@/data/database/db";
import type { Part, PartCompatibility, PartDetail } from "@/types";

export const partRepository = {
  async getAll(): Promise<Part[]> {
    return getDb().parts.toArray();
  },

  async getById(id: string): Promise<Part | undefined> {
    return getDb().parts.get(id);
  },

  async getByPartNumber(partNumber: string): Promise<Part | undefined> {
    return getDb().parts.where("partNumber").equals(partNumber).first();
  },

  async getCompatibilitiesForPart(partId: string): Promise<PartCompatibility[]> {
    return getDb().partCompatibilities.where("partId").equals(partId).toArray();
  },

  async getCompatibilitiesForModel(
    modelId: string,
    familyId: string,
  ): Promise<PartCompatibility[]> {
    return getDb()
      .partCompatibilities.filter(
        (c) =>
          c.familyId === familyId &&
          (c.modelId === modelId || c.modelId === undefined),
      )
      .toArray();
  },

  async getPartsForModel(modelId: string, familyId: string): Promise<Part[]> {
    const db = getDb();
    const compatibilities = await db.partCompatibilities
      .filter((c) => c.modelId === modelId || (!c.modelId && c.familyId === familyId))
      .toArray();

    const partIds = [...new Set(compatibilities.map((c) => c.partId))];
    const parts = await db.parts.bulkGet(partIds);
    return parts.filter((p): p is Part => p !== undefined);
  },

  async getPartDetail(id: string): Promise<PartDetail | undefined> {
    const db = getDb();
    const part = await db.parts.get(id);
    if (!part) return undefined;

    const brand = await db.brands.get(part.brandId);
    if (!brand) return undefined;

    const compatibilities = await db.partCompatibilities.where("partId").equals(id).toArray();
    const familyIds = [...new Set(compatibilities.map((c) => c.familyId))];
    const modelIds = [...new Set(compatibilities.filter((c) => c.modelId).map((c) => c.modelId!))];

    const families = (await db.pumpFamilies.bulkGet(familyIds)).filter(Boolean);
    const pumpModels = (await db.pumpModels.bulkGet(modelIds)).filter(Boolean);

    return {
      ...part,
      brand,
      compatibilities,
      families: families as NonNullable<(typeof families)[number]>[],
      pumpModels: pumpModels as NonNullable<(typeof pumpModels)[number]>[],
    };
  },

  async getPartsByHotspot(partIds: string[]): Promise<Part[]> {
    const parts = await getDb().parts.bulkGet(partIds);
    return parts.filter((p): p is Part => p !== undefined);
  },
};
