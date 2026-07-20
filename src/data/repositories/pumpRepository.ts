import { getDb } from "@/data/database/db";
import type {
  Diagram,
  DiagramHotspot,
  PumpFamily,
  PumpModel,
  PumpModelDetail,
} from "@/types";

export const pumpRepository = {
  async getAllModels(): Promise<PumpModel[]> {
    return getDb().pumpModels.toArray();
  },

  async getModelById(id: string): Promise<PumpModel | undefined> {
    return getDb().pumpModels.get(id);
  },

  async getModelBySlug(slug: string): Promise<PumpModel | undefined> {
    return getDb().pumpModels.where("slug").equals(slug).first();
  },

  async getModelDetail(id: string): Promise<PumpModelDetail | undefined> {
    const db = getDb();
    const model = await db.pumpModels.get(id);
    if (!model) return undefined;

    const family = await db.pumpFamilies.get(model.familyId);
    if (!family) return undefined;

    const brand = await db.brands.get(family.brandId);
    const category = await db.categories.get(family.categoryId);
    if (!brand || !category) return undefined;

    return { ...model, brand, family, category };
  },

  async getFamilyById(id: string): Promise<PumpFamily | undefined> {
    return getDb().pumpFamilies.get(id);
  },

  async getModelsByFamily(familyId: string): Promise<PumpModel[]> {
    return getDb().pumpModels.where("familyId").equals(familyId).toArray();
  },

  async getDiagramForFamily(familyId: string): Promise<Diagram | undefined> {
    return getDb().diagrams.where("familyId").equals(familyId).first();
  },

  async getHotspotsForDiagram(diagramId: string): Promise<DiagramHotspot[]> {
    return getDb().diagramHotspots.where("diagramId").equals(diagramId).toArray();
  },

  async getCommonModels(): Promise<PumpModelDetail[]> {
    const slugs = ["hs50", "hs60", "hp45", "hp65", "hp85", "hm60", "hm90", "hm160", "hm270"];
    const results: PumpModelDetail[] = [];
    for (const slug of slugs) {
      const model = await this.getModelBySlug(slug);
      if (model) {
        const detail = await this.getModelDetail(model.id);
        if (detail) results.push(detail);
      }
    }
    return results;
  },
};
