import type { PumpHubDatabase } from "@/data/database/db";
import {
  hpSeedCompatibilities,
  hpSeedDiagram,
  hpSeedFamily,
  hpSeedHotspots,
  hpSeedModels,
  hpSeedParts,
} from "@/data/seed/hp-seed";
import {
  hsSeedCompatibilities,
  hsSeedDiagram,
  hsSeedFamily,
  hsSeedHotspots,
  hsSeedModels,
  hsSeedParts,
} from "@/data/seed/hs-seed";
import {
  extendedSeedFamilies,
  extendedSeedModels,
} from "@/data/seed/extended-families-seed";
import {
  xjSeedCompatibilities,
  xjSeedDiagram,
  xjSeedFamily,
  xjSeedHotspots,
  xjSeedModels,
  xjSeedParts,
} from "@/data/seed/xj-seed";
import {
  xpSeedCompatibilities,
  xpSeedDiagram,
  xpSeedFamily,
  xpSeedHotspots,
  xpSeedModels,
  xpSeedParts,
} from "@/data/seed/xp-seed";
import {
  hmSeedCompatibilities,
  hmSeedDiagram,
  hmSeedFamily,
  hmSeedHotspots,
  hmSeedModels,
  hmSeedParts,
} from "@/data/seed/hm-seed";
import type { Brand, Category, Part } from "@/types";

export const SEED_VERSION = 13;

function dedupePartsById(parts: Part[]): Part[] {
  return [...new Map(parts.map((part) => [part.id, part])).values()];
}

export const seedBrand: Brand = {
  id: "brand-davey",
  name: "Davey",
  slug: "davey",
  aliases: ["Davey Pumps"],
  websiteUrl: "https://www.davey.com.au",
};

export const seedCategory: Category = {
  id: "cat-pressure",
  brandId: seedBrand.id,
  name: "Pressure Pumps",
  slug: "pressure-pumps",
};

/** @deprecated Use hsSeedFamily */
export const seedFamily = hsSeedFamily;
/** @deprecated Use hsSeedModels */
export const seedModels = hsSeedModels;
/** @deprecated Use hsSeedDiagram */
export const seedDiagram = hsSeedDiagram;
/** @deprecated Use hsSeedParts */
export const seedParts = hsSeedParts;
/** @deprecated Use hsSeedHotspots */
export const seedHotspots = hsSeedHotspots;
/** @deprecated Use hsSeedCompatibilities */
export const seedCompatibilities = hsSeedCompatibilities;

export async function seedDatabase(db: PumpHubDatabase): Promise<void> {
  await db.brands.bulkPut([seedBrand]);
  await db.categories.bulkPut([seedCategory]);
  await db.pumpFamilies.bulkPut([
    hsSeedFamily,
    hpSeedFamily,
    hmSeedFamily,
    xjSeedFamily,
    xpSeedFamily,
    ...extendedSeedFamilies,
  ]);
  await db.pumpModels.bulkPut([
    ...hsSeedModels,
    ...hpSeedModels,
    ...hmSeedModels,
    ...xjSeedModels,
    ...xpSeedModels,
    ...extendedSeedModels,
  ]);
  await db.diagrams.bulkPut([hsSeedDiagram, hpSeedDiagram, hmSeedDiagram, xjSeedDiagram, xpSeedDiagram]);
  await db.diagramHotspots.bulkPut([
    ...hsSeedHotspots,
    ...hpSeedHotspots,
    ...hmSeedHotspots,
    ...xjSeedHotspots,
    ...xpSeedHotspots,
  ]);
  await db.parts.bulkPut(
    dedupePartsById([
      ...hsSeedParts,
      ...hpSeedParts,
      ...hmSeedParts,
      ...xjSeedParts,
      ...xpSeedParts,
    ]),
  );
  await db.partCompatibilities.bulkPut([
    ...hsSeedCompatibilities,
    ...hpSeedCompatibilities,
    ...hmSeedCompatibilities,
    ...xjSeedCompatibilities,
    ...xpSeedCompatibilities,
  ]);
  await db.appSettings.put({ id: "app", theme: "system", textSize: "standard" });
}
