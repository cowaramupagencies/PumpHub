import Dexie, { type EntityTable } from "dexie";
import type {
  AppSettings,
  Brand,
  Category,
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
  RecentItem,
  SavedItem,
  UserNote,
} from "@/types";
import type { CatalogueMeta, SeriesImportDraft, ImportHistoryRecord } from "@/types/catalogue-import";

export class PumpHubDatabase extends Dexie {
  brands!: EntityTable<Brand, "id">;
  categories!: EntityTable<Category, "id">;
  pumpFamilies!: EntityTable<PumpFamily, "id">;
  pumpModels!: EntityTable<PumpModel, "id">;
  diagrams!: EntityTable<Diagram, "id">;
  diagramHotspots!: EntityTable<DiagramHotspot, "id">;
  parts!: EntityTable<Part, "id">;
  partCompatibilities!: EntityTable<PartCompatibility, "id">;
  userNotes!: EntityTable<UserNote, "id">;
  savedItems!: EntityTable<SavedItem, "id">;
  recentItems!: EntityTable<RecentItem, "id">;
  appSettings!: EntityTable<AppSettings, "id">;
  importDrafts!: EntityTable<SeriesImportDraft, "id">;
  importHistory!: EntityTable<ImportHistoryRecord, "id">;
  catalogueMeta!: EntityTable<CatalogueMeta, "id">;

  constructor() {
    super("PumpHubDB");
    this.version(1).stores({
      brands: "id, slug, name",
      categories: "id, brandId, slug",
      pumpFamilies: "id, brandId, categoryId, slug",
      pumpModels: "id, familyId, slug, modelCode",
      diagrams: "id, familyId, modelId",
      diagramHotspots: "id, diagramId, reference",
      parts: "id, brandId, partNumber",
      partCompatibilities: "id, partId, familyId, modelId, diagramReference",
      userNotes: "id, attachedEntityType, attachedEntityId, updatedAt",
      savedItems: "id, entityType, entityId, savedAt",
      recentItems: "id, entityType, entityId, viewedAt",
      appSettings: "id",
    });

    this.version(2).stores({
      brands: "id, slug, name",
      categories: "id, brandId, slug",
      pumpFamilies: "id, brandId, categoryId, slug",
      pumpModels: "id, familyId, slug, modelCode",
      diagrams: "id, familyId, modelId",
      diagramHotspots: "id, diagramId, reference",
      parts: "id, brandId, partNumber",
      partCompatibilities: "id, partId, familyId, modelId, diagramReference",
      userNotes: "id, attachedEntityType, attachedEntityId, updatedAt",
      savedItems: "id, entityType, entityId, savedAt",
      recentItems: "id, entityType, entityId, viewedAt",
      appSettings: "id",
      importDrafts: "id, familyId, status, importedAt",
      importHistory: "id, familyId, importedAt",
      catalogueMeta: "id",
    });
  }
}

let dbInstance: PumpHubDatabase | null = null;

export function getDb(): PumpHubDatabase {
  if (typeof indexedDB === "undefined") {
    throw new Error("Database is only available where IndexedDB is supported");
  }
  if (!dbInstance) {
    dbInstance = new PumpHubDatabase();
  }
  return dbInstance;
}

export function setDbInstance(instance: PumpHubDatabase | null): void {
  dbInstance = instance;
}

export async function clearAllUserData(): Promise<void> {
  const db = getDb();
  await db.transaction(
    "rw",
    [db.userNotes, db.savedItems, db.recentItems],
    async () => {
      await db.userNotes.clear();
      await db.savedItems.clear();
      await db.recentItems.clear();
    },
  );
}

export async function clearCatalogueData(): Promise<void> {
  const db = getDb();
  await db.transaction(
    "rw",
    [
      db.brands,
      db.categories,
      db.pumpFamilies,
      db.pumpModels,
      db.diagrams,
      db.diagramHotspots,
      db.parts,
      db.partCompatibilities,
    ],
    async () => {
      await db.brands.clear();
      await db.categories.clear();
      await db.pumpFamilies.clear();
      await db.pumpModels.clear();
      await db.diagrams.clear();
      await db.diagramHotspots.clear();
      await db.parts.clear();
      await db.partCompatibilities.clear();
    },
  );
}
