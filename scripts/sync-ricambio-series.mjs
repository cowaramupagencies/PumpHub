/**
 * Sync Ricambio catalogue HTML + schematic SVG into PumpHub assets.
 *
 * Usage:
 *   npm run sync:diagrams
 *   node scripts/sync-ricambio-series.mjs hp
 *   node scripts/sync-ricambio-series.mjs hs hp hm
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const tsModuleCache = new Map();

function loadTsModule(relativePath) {
  if (tsModuleCache.has(relativePath)) {
    return tsModuleCache.get(relativePath);
  }

  const filePath = join(root, relativePath);
  const source = readFileSync(filePath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filePath,
  }).outputText;

  const module = { exports: {} };
  const localRequire = (id) => {
    if (id.startsWith("@/")) {
      const rel = `src/${id.slice(2)}`;
      const withExt = rel.endsWith(".ts") || rel.endsWith(".tsx") ? rel : `${rel}.ts`;
      return loadTsModule(withExt);
    }
    return require(id);
  };

  const evaluator = new Function(
    "require",
    "module",
    "exports",
    "__dirname",
    "__filename",
    transpiled,
  );
  evaluator(localRequire, module, module.exports, dirname(filePath), filePath);
  tsModuleCache.set(relativePath, module.exports);
  return module.exports;
}

const { RICAMBIO_SERIES } = loadTsModule("src/lib/ricambio/ricambio-series-config.ts");
const { processRicambioDiagram, buildHotspotsJsonPayload, buildDraftJsonPayload } = loadTsModule(
  "src/lib/ricambio/process-ricambio-diagram.ts",
);

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "PumpHub-Diagram-Sync/1.0",
      Accept: "text/html,application/xhtml+xml,text/plain,image/svg+xml",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function syncSeries(key) {
  const config = RICAMBIO_SERIES[key];
  if (!config) {
    throw new Error(`Unknown series "${key}". Use hs, hp, hm, xj, or xp.`);
  }

  console.log(`\nSyncing ${config.title} (${config.catalogueId})…`);

  const html = await fetchText(config.sourceUrl);
  const rawSvg = await fetchText(config.diagramSourceUrl);
  const processed = processRicambioDiagram(html, rawSvg, config);

  const publicSvgPath = join(root, "public", config.diagramLocalPath.replace(/^\//, ""));
  mkdirSync(dirname(publicSvgPath), { recursive: true });
  writeFileSync(publicSvgPath, processed.sanitizedSvg, "utf8");

  const hotspotsPayload = buildHotspotsJsonPayload(processed, config);
  writeFileSync(join(root, config.hotspotsJsonPath), `${JSON.stringify(hotspotsPayload, null, 2)}\n`, "utf8");

  const draftPayload = buildDraftJsonPayload(processed, config);
  writeFileSync(join(root, config.draftJsonPath), `${JSON.stringify(draftPayload, null, 2)}\n`, "utf8");

  console.log(
    `  ✓ ${processed.parts.length} parts, ${processed.hotspotCount} hotspots, ${processed.width}x${processed.height}`,
  );
  console.log(`  ✓ ${publicSvgPath}`);
}

const keys = process.argv.slice(2);
const targets = keys.length > 0 ? keys : ["hs", "hp", "hm", "xj", "xp"];

for (const key of targets) {
  await syncSeries(key);
}

console.log("\nDone.");
