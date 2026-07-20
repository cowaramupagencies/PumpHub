import { getDb } from "@/data/database/db";
import { normalizeSearchText } from "@/utils";
import type { SearchFilter, SearchResult, SearchResultPart, SearchResultPump } from "@/types";

function scoreMatch(normalizedQuery: string, ...candidates: string[]): number {
  if (!normalizedQuery) return 0;

  for (const candidate of candidates) {
    const normalized = normalizeSearchText(candidate);
    if (!normalized) continue;
    if (normalized === normalizedQuery) return 100;
  }

  for (const candidate of candidates) {
    const normalized = normalizeSearchText(candidate);
    if (!normalized) continue;
    if (normalized.startsWith(normalizedQuery)) return 80;
  }

  for (const candidate of candidates) {
    const normalized = normalizeSearchText(candidate);
    if (!normalized) continue;
    if (normalized.includes(normalizedQuery)) return 60;
  }

  return 0;
}

export async function searchCatalog(
  query: string,
  filter: SearchFilter = "all",
): Promise<SearchResult[]> {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  const db = getDb();
  const results: SearchResult[] = [];

  if (filter === "all" || filter === "pumps") {
    const models = await db.pumpModels.toArray();
    const families = await db.pumpFamilies.toArray();
    const categories = await db.categories.toArray();
    const brands = await db.brands.toArray();

    const familyMap = new Map(families.map((f) => [f.id, f]));
    const categoryMap = new Map(categories.map((c) => [c.id, c]));
    const brandMap = new Map(brands.map((b) => [b.id, b]));

    for (const model of models) {
      const family = familyMap.get(model.familyId);
      if (!family) continue;
      const brand = brandMap.get(family.brandId);
      const category = categoryMap.get(family.categoryId);

      const score = Math.max(
        scoreMatch(normalizedQuery, model.name, model.modelCode, ...model.aliases),
        scoreMatch(normalizedQuery, family.name, ...(family.description ? [family.description] : [])),
      );

      if (score > 0) {
        results.push({
          type: "pump",
          id: model.id,
          brand: brand?.name ?? "",
          model: model.name,
          family: family.name,
          category: category?.name ?? "",
          score,
        } satisfies SearchResultPump);
      }
    }
  }

  if (filter === "all" || filter === "parts") {
    const parts = await db.parts.toArray();
    const compatibilities = await db.partCompatibilities.toArray();
    const models = await db.pumpModels.toArray();
    const families = await db.pumpFamilies.toArray();

    const modelMap = new Map(models.map((m) => [m.id, m]));
    const familyMap = new Map(families.map((f) => [f.id, f]));
    const compatByPart = new Map<string, typeof compatibilities>();

    for (const c of compatibilities) {
      const list = compatByPart.get(c.partId) ?? [];
      list.push(c);
      compatByPart.set(c.partId, list);
    }

    for (const part of parts) {
      const score = Math.max(
        scoreMatch(normalizedQuery, part.partNumber, ...part.aliases),
        scoreMatch(normalizedQuery, part.description, part.partCategory),
      );

      if (score > 0) {
        const compats = compatByPart.get(part.id) ?? [];
        const familyNames = [
          ...new Set(
            compats
              .map((c) => familyMap.get(c.familyId)?.name)
              .filter((name): name is string => Boolean(name)),
          ),
        ];
        const modelNames = [
          ...new Set(
            compats
              .map((c) => (c.modelId ? modelMap.get(c.modelId)?.name : undefined))
              .filter((name): name is string => Boolean(name)),
          ),
        ];
        const diagramRefs = [
          ...new Set(compats.map((c) => c.diagramReference).filter((ref): ref is string => Boolean(ref))),
        ];

        results.push({
          type: "part",
          id: part.id,
          partNumber: part.partNumber,
          description: part.description,
          pumpModel: modelNames.length > 0 ? modelNames.join(", ") : undefined,
          family: familyNames.length > 0 ? familyNames.join(", ") : undefined,
          diagramReference: diagramRefs.length === 1 ? diagramRefs[0] : undefined,
          score,
        } satisfies SearchResultPart);
      }
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
