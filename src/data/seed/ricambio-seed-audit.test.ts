import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { partIdFromNumber } from "@/lib/ricambio/part-id";

const SERIES = ["hs", "hp", "hm", "xj", "xp", "sdw"] as const;

function extractJsonArray(content: string, marker: string): unknown[] {
  const start = content.indexOf(marker);
  if (start === -1) throw new Error(`Missing export: ${marker}`);
  const arrayStart = content.indexOf("= [", start);
  if (arrayStart === -1) throw new Error(`Missing array for: ${marker}`);
  let i = arrayStart + 2;
  let depth = 0;
  for (; i < content.length; i++) {
    if (content[i] === "[") depth++;
    else if (content[i] === "]") {
      depth--;
      if (depth === 0) break;
    }
  }
  return JSON.parse(content.slice(arrayStart + 2, i + 1)) as unknown[];
}

function extractPartNumbersFromSeed(seedPath: string, exportName: string): string[] {
  const content = readFileSync(join(process.cwd(), seedPath), "utf8");
  const parts = extractJsonArray(content, `export const ${exportName}`) as { partNumber: string }[];
  return parts.map((p) => p.partNumber);
}

function extractHotspotPartIds(seedPath: string, exportName: string): string[][] {
  const content = readFileSync(join(process.cwd(), seedPath), "utf8");
  const hotspots = extractJsonArray(content, `export const ${exportName}`) as { partIds: string[] }[];
  return hotspots.map((h) => h.partIds);
}

describe("Ricambio seed catalogue completeness", () => {
  for (const series of SERIES) {
    it(`${series.toUpperCase()} seed includes every Ricambio draft part`, () => {
      const draft = JSON.parse(
        readFileSync(join(process.cwd(), `src/data/import/${series}-series-ricambio-draft.json`), "utf8"),
      );
      const seedParts = extractPartNumbersFromSeed(
        `src/data/seed/${series}-seed.ts`,
        `${series}SeedParts`,
      );
      const draftNumbers = draft.parts.map((p: { partNumber: string }) => p.partNumber);
      const uniqueDraftNumbers = [...new Set(draftNumbers)];
      const missing = uniqueDraftNumbers.filter((pn: string) => !seedParts.includes(pn));
      expect(missing, `missing from ${series}-seed.ts`).toEqual([]);
    });

    it(`${series.toUpperCase()} hotspots link to seeded parts`, () => {
      const draft = JSON.parse(
        readFileSync(join(process.cwd(), `src/data/import/${series}-series-ricambio-draft.json`), "utf8"),
      );
      const seedParts = extractPartNumbersFromSeed(
        `src/data/seed/${series}-seed.ts`,
        `${series}SeedParts`,
      );
      const seedPartIds = new Set(seedParts.map((pn) => partIdFromNumber(pn)));
      const hotspotPartIds = extractHotspotPartIds(
        `src/data/seed/${series}-seed.ts`,
        `${series}SeedHotspots`,
      ).flat();

      for (const partId of hotspotPartIds) {
        expect(seedPartIds.has(partId)).toBe(true);
      }

      const draftHotspotParts = (draft.hotspots ?? []).flatMap(
        (h: { partNumbers: string[] }) => h.partNumbers,
      );
      for (const pn of draftHotspotParts) {
        expect(seedParts).toContain(pn);
      }
    });
  }
});
