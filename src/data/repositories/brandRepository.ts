import { getDb } from "@/data/database/db";
import type { Brand } from "@/types";

export const brandRepository = {
  async getAll(): Promise<Brand[]> {
    return getDb().brands.toArray();
  },

  async getById(id: string): Promise<Brand | undefined> {
    return getDb().brands.get(id);
  },

  async getBySlug(slug: string): Promise<Brand | undefined> {
    return getDb().brands.where("slug").equals(slug).first();
  },
};
