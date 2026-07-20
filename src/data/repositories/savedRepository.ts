import { getDb } from "@/data/database/db";
import { createId } from "@/utils";
import type { SavedEntityType, SavedItem } from "@/types";

export const savedRepository = {
  async getAll(): Promise<SavedItem[]> {
    return getDb().savedItems.orderBy("savedAt").reverse().toArray();
  },

  async getByEntity(
    entityType: SavedEntityType,
    entityId: string,
  ): Promise<SavedItem | undefined> {
    return getDb()
      .savedItems.filter((s) => s.entityType === entityType && s.entityId === entityId)
      .first();
  },

  async isSaved(entityType: SavedEntityType, entityId: string): Promise<boolean> {
    const item = await this.getByEntity(entityType, entityId);
    return !!item;
  },

  async save(entityType: SavedEntityType, entityId: string): Promise<SavedItem> {
    const existing = await this.getByEntity(entityType, entityId);
    if (existing) return existing;

    const item: SavedItem = {
      id: createId(),
      entityType,
      entityId,
      savedAt: Date.now(),
    };
    await getDb().savedItems.add(item);
    return item;
  },

  async remove(entityType: SavedEntityType, entityId: string): Promise<void> {
    const item = await this.getByEntity(entityType, entityId);
    if (item) await getDb().savedItems.delete(item.id);
  },

  async clearAll(): Promise<void> {
    await getDb().savedItems.clear();
  },
};
