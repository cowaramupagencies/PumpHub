import { getDb } from "@/data/database/db";
import type { AppSettings } from "@/types";

const DEFAULT_SETTINGS: AppSettings = {
  id: "app",
  theme: "system",
  textSize: "standard",
};

export const settingsRepository = {
  async get(): Promise<AppSettings> {
    const settings = await getDb().appSettings.get("app");
    return settings ?? DEFAULT_SETTINGS;
  },

  async update(partial: Partial<Omit<AppSettings, "id">>): Promise<AppSettings> {
    const current = await this.get();
    const updated = { ...current, ...partial };
    await getDb().appSettings.put(updated);
    return updated;
  },
};
