import { getDb } from "@/data/database/db";
import { createId } from "@/utils";
import type { RecentEntityType, RecentItem } from "@/types";

const MAX_RECENT_PUMPS = 20;
const MAX_RECENT_PARTS = 30;

export const recentRepository = {
  async getAll(): Promise<RecentItem[]> {
    return getDb().recentItems.orderBy("viewedAt").reverse().toArray();
  },

  async getPumps(limit = MAX_RECENT_PUMPS): Promise<RecentItem[]> {
    const items = await getDb()
      .recentItems.filter((r) => r.entityType === "pumpModel")
      .toArray();
    return items.sort((a, b) => b.viewedAt - a.viewedAt).slice(0, limit);
  },

  async getParts(limit = MAX_RECENT_PARTS): Promise<RecentItem[]> {
    const items = await getDb()
      .recentItems.filter((r) => r.entityType === "part")
      .toArray();
    return items.sort((a, b) => b.viewedAt - a.viewedAt).slice(0, limit);
  },

  async trackView(entityType: RecentEntityType, entityId: string): Promise<void> {
    const db = getDb();
    const existing = await db.recentItems
      .filter((r) => r.entityType === entityType && r.entityId === entityId)
      .first();

    if (existing) {
      const latest = await db.recentItems.orderBy("viewedAt").last();
      const nextViewedAt = Math.max(
        Date.now(),
        existing.viewedAt + 1,
        (latest?.viewedAt ?? 0) + 1,
      );
      await db.recentItems.update(existing.id, {
        viewedAt: nextViewedAt,
      });
    } else {
      await db.recentItems.add({
        id: createId(),
        entityType,
        entityId,
        viewedAt: Date.now(),
      });
    }

    await this.trim(entityType);
  },

  async trim(entityType: RecentEntityType): Promise<void> {
    const max = entityType === "pumpModel" ? MAX_RECENT_PUMPS : MAX_RECENT_PARTS;
    const items = await getDb()
      .recentItems.filter((r) => r.entityType === entityType)
      .toArray();
    const sorted = items.sort((a, b) => b.viewedAt - a.viewedAt);

    if (sorted.length > max) {
      const toRemove = sorted.slice(max);
      await getDb().recentItems.bulkDelete(toRemove.map((i) => i.id));
    }
  },

  async clearAll(): Promise<void> {
    await getDb().recentItems.clear();
  },
};
