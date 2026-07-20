import { getDb, clearCatalogueData } from "@/data/database/db";
import { seedDatabase, SEED_VERSION } from "@/data/seed/demo-data";

const SEED_KEY = "pumphub-seed-version";

export async function ensureSeeded(): Promise<void> {
  const db = getDb();
  const brandCount = await db.brands.count();
  const storedVersion = localStorage.getItem(SEED_KEY);
  const meta = await db.catalogueMeta.get("catalogue");

  if (meta?.liveDataSource === "ricambio") {
    const settings = await db.appSettings.get("app");
    if (!settings) {
      await db.appSettings.put({ id: "app", theme: "system", textSize: "standard" });
    }
    return;
  }

  if (brandCount === 0 || storedVersion !== String(SEED_VERSION)) {
    await clearCatalogueData();
    await seedDatabase(db);
    localStorage.setItem(SEED_KEY, String(SEED_VERSION));
  }

  const settings = await db.appSettings.get("app");
  if (!settings) {
    await db.appSettings.put({ id: "app", theme: "system", textSize: "standard" });
  }
}

export async function resetDemonstrationData(): Promise<void> {
  await clearCatalogueData();
  const db = getDb();
  await seedDatabase(db);
  localStorage.setItem(SEED_KEY, String(SEED_VERSION));
}
