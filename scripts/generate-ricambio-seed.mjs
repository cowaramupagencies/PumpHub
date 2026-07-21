/**
 * Generate seed TS files from bundled Ricambio draft JSON + parse-*-series inference.
 *
 * Usage:
 *   node scripts/generate-ricambio-seed.mjs
 *   node scripts/generate-ricambio-seed.mjs hs hp hm
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const tsModuleCache = new Map();

function loadTsModule(relativePath) {
  if (tsModuleCache.has(relativePath)) return tsModuleCache.get(relativePath);
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
      if (rel.endsWith(".json")) {
        return JSON.parse(readFileSync(join(root, rel), "utf8"));
      }
      const withExt = rel.endsWith(".ts") || rel.endsWith(".tsx") ? rel : `${rel}.ts`;
      return loadTsModule(withExt);
    }
    return require(id);
  };
  new Function("require", "module", "exports", "__dirname", "__filename", transpiled)(
    localRequire,
    module,
    module.exports,
    dirname(filePath),
    filePath,
  );
  tsModuleCache.set(relativePath, module.exports);
  return module.exports;
}

function partIdFromNumber(partNumber) {
  const { partIdFromNumber: idFromNumber } = loadTsModule("src/lib/ricambio/part-id.ts");
  return idFromNumber(partNumber);
}

function buildSeriesCompatibilitiesForSeed(series, partId, draftPart) {
  const { buildSeriesCompatibilities } = loadTsModule("src/lib/ricambio/build-compatibilities.ts");
  return buildSeriesCompatibilities(series, partId, draftPart);
}

const FAMILY_ID = {
  hs: "family-hs",
  hp: "family-hp",
  hm: "family-hm",
  xj: "family-xj",
  xp: "family-xp",
  sdw: "family-shallow-well",
  evo: "family-evodrive",
};

const DIAGRAM_ID = {
  hs: "diagram-hs",
  hp: "diagram-hp",
  hm: "diagram-hm",
  xj: "diagram-xj",
  xp: "diagram-xp",
  sdw: "diagram-sdw",
  evo: "diagram-evo",
};

const SERIES = {
  hs: {
    parseModule: "src/lib/ricambio/parse-hs-series.ts",
    seedFile: "src/data/seed/hs-seed.ts",
    prefix: "hs",
    diagramImports: `import {
  HS_SERIES_DIAGRAM_HEIGHT,
  HS_SERIES_DIAGRAM_PATH,
  HS_SERIES_DIAGRAM_SOURCE_URL,
  HS_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hs-series-diagram";
import { HS_SERIES_CURVE_IMAGE, HS_SERIES_PUMP_IMAGE } from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const hsSeedFamily: PumpFamily = {
  id: "family-hs",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "HS Series",
  slug: "hs-series",
  description: "Horizontal multistage pressure pumps for domestic and light commercial use.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Check nameplate for model, frequency and version before ordering parts.",
};`,
    modelsBlock: `export const hsSeedModels: PumpModel[] = [
  {
    id: "model-hs50",
    familyId: hsSeedFamily.id,
    name: "HS50",
    slug: "hs50",
    modelCode: "HS50",
    aliases: ["HS 50", "HS-50"],
    description: "5-stage horizontal multistage pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm version suffix on nameplate before ordering model-specific parts.",
    imageUrl: HS_SERIES_PUMP_IMAGE,
    curveImageUrl: HS_SERIES_CURVE_IMAGE,
    curveLabel: "L4T (HS50-06T)",
  },
  {
    id: "model-hs60",
    familyId: hsSeedFamily.id,
    name: "HS60",
    slug: "hs60",
    modelCode: "HS60",
    aliases: ["HS 60", "HS-60"],
    description: "6-stage horizontal multistage pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm pump version before ordering model-specific parts.",
    imageUrl: HS_SERIES_PUMP_IMAGE,
    curveImageUrl: HS_SERIES_CURVE_IMAGE,
    curveLabel: "L5T (HS60-08T)",
  },
];`,
    diagramBlock: `export const hsSeedDiagram: Diagram = {
  id: "diagram-hs",
  familyId: hsSeedFamily.id,
  name: "HS Series Exploded View",
  imageUrl: HS_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: HS_SERIES_DIAGRAM_WIDTH,
  height: HS_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: HS_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
  hp: {
    parseModule: "src/lib/ricambio/parse-hp-series.ts",
    seedFile: "src/data/seed/hp-seed.ts",
    prefix: "hp",
    diagramImports: `import {
  HP_SERIES_DIAGRAM_HEIGHT,
  HP_SERIES_DIAGRAM_PATH,
  HP_SERIES_DIAGRAM_SOURCE_URL,
  HP_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hp-series-diagram";
import { HP_SERIES_CURVE_IMAGE, HP_SERIES_PUMP_IMAGE } from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const hpSeedFamily: PumpFamily = {
  id: "family-hp",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "HP Series",
  slug: "hp-series",
  description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Confirm pump model, Torrium version and nameplate suffix before ordering parts.",
};`,
    modelsBlock: `export const hpSeedModels: PumpModel[] = [
  {
    id: "model-hp45",
    familyId: hpSeedFamily.id,
    name: "HP45",
    slug: "hp45",
    modelCode: "HP45-05T",
    aliases: ["HP 45", "HP45-05T", "HP45-05"],
    description: "5-stage HP pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HP_SERIES_PUMP_IMAGE,
    curveImageUrl: HP_SERIES_CURVE_IMAGE,
    curveLabel: "HP45-05T",
  },
  {
    id: "model-hp65",
    familyId: hpSeedFamily.id,
    name: "HP65",
    slug: "hp65",
    modelCode: "HP65-06T",
    aliases: ["HP 65", "HP65-06T", "HP65-06"],
    description: "6-stage HP pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HP_SERIES_PUMP_IMAGE,
    curveImageUrl: HP_SERIES_CURVE_IMAGE,
    curveLabel: "HP65-06T",
  },
  {
    id: "model-hp85",
    familyId: hpSeedFamily.id,
    name: "HP85",
    slug: "hp85",
    modelCode: "HP85-08T",
    aliases: ["HP 85", "HP85-08T", "HP85-08"],
    description: "8-stage HP pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HP_SERIES_PUMP_IMAGE,
    curveImageUrl: HP_SERIES_CURVE_IMAGE,
    curveLabel: "HP85-08T",
  },
];`,
    diagramBlock: `export const hpSeedDiagram: Diagram = {
  id: "diagram-hp",
  familyId: hpSeedFamily.id,
  name: "HP Series Exploded View",
  imageUrl: HP_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: HP_SERIES_DIAGRAM_WIDTH,
  height: HP_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: HP_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
  hm: {
    parseModule: "src/lib/ricambio/parse-hm-series.ts",
    seedFile: "src/data/seed/hm-seed.ts",
    prefix: "hm",
    diagramImports: `import {
  HM_SERIES_DIAGRAM_HEIGHT,
  HM_SERIES_DIAGRAM_PATH,
  HM_SERIES_DIAGRAM_SOURCE_URL,
  HM_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hm-series-diagram";
import { HM_SERIES_CURVE_IMAGE, HM_SERIES_PUMP_IMAGE } from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const hmSeedFamily: PumpFamily = {
  id: "family-hm",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "HM Series",
  slug: "hm-series",
  description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Confirm pump model, Torrium version and nameplate suffix before ordering parts.",
};`,
    modelsBlock: `export const hmSeedModels: PumpModel[] = [
  {
    id: "model-hm60",
    familyId: hmSeedFamily.id,
    name: "HM60",
    slug: "hm60",
    modelCode: "HM60-06T",
    aliases: ["HM 60", "HM60-06T", "HM60-08T", "HM60-10T"],
    description: "Compact HM pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HM_SERIES_PUMP_IMAGE,
    curveImageUrl: HM_SERIES_CURVE_IMAGE,
    curveLabel: "HM60-10T",
  },
  {
    id: "model-hm90",
    familyId: hmSeedFamily.id,
    name: "HM90",
    slug: "hm90",
    modelCode: "HM90-08T",
    aliases: ["HM 90", "HM90-08T", "HM90-11T", "HM90-13T"],
    description: "Mid-size HM pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HM_SERIES_PUMP_IMAGE,
    curveImageUrl: HM_SERIES_CURVE_IMAGE,
    curveLabel: "HM90-13T",
  },
  {
    id: "model-hm160",
    familyId: hmSeedFamily.id,
    name: "HM160",
    slug: "hm160",
    modelCode: "HM160-15T",
    aliases: ["HM 160", "HM160-15T", "HM160-19T"],
    description: "Large HM pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HM_SERIES_PUMP_IMAGE,
    curveImageUrl: HM_SERIES_CURVE_IMAGE,
    curveLabel: "HM160-19T",
  },
  {
    id: "model-hm270",
    familyId: hmSeedFamily.id,
    name: "HM270",
    slug: "hm270",
    modelCode: "HM270-19",
    aliases: ["HM 270", "HM270-19", "HM270-25"],
    description: "High-flow HM pressure pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
    imageUrl: HM_SERIES_PUMP_IMAGE,
    curveImageUrl: HM_SERIES_CURVE_IMAGE,
    curveLabel: "HM270-25",
  },
];`,
    diagramBlock: `export const hmSeedDiagram: Diagram = {
  id: "diagram-hm",
  familyId: hmSeedFamily.id,
  name: "HM Series Exploded View",
  imageUrl: HM_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: HM_SERIES_DIAGRAM_WIDTH,
  height: HM_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: HM_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
  xj: {
    parseModule: "src/lib/ricambio/parse-xj-series.ts",
    seedFile: "src/data/seed/xj-seed.ts",
    prefix: "xj",
    diagramImports: `import {
  XJ_SERIES_DIAGRAM_HEIGHT,
  XJ_SERIES_DIAGRAM_PATH,
  XJ_SERIES_DIAGRAM_SOURCE_URL,
  XJ_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/xj-series-diagram";
import {
  XJ50_CURVE_IMAGE,
  XJ70_CURVE_IMAGE,
  XJ90_CURVE_IMAGE,
  XJ_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const xjSeedFamily: PumpFamily = {
  id: "family-xj",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "XJ Series",
  slug: "xj-series",
  description: "Single-stage jet-assisted centrifugal pumps with Torrium2 or pressure switch options.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Confirm Torrium (T) or pressure switch (P) suffix and model size on the nameplate before ordering parts.",
};`,
    modelsBlock: `export const xjSeedModels: PumpModel[] = [
  {
    id: "model-xj50",
    familyId: xjSeedFamily.id,
    name: "XJ50",
    slug: "xj50",
    modelCode: "XJ50T",
    aliases: ["XJ 50", "XJ50T", "XJ50P"],
    description: "50 lpm DynaJet pressure system, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
    imageUrl: XJ_SERIES_PUMP_IMAGE,
    curveImageUrl: XJ50_CURVE_IMAGE,
    curveLabel: "XJ50",
  },
  {
    id: "model-xj70",
    familyId: xjSeedFamily.id,
    name: "XJ70",
    slug: "xj70",
    modelCode: "XJ70T",
    aliases: ["XJ 70", "XJ70T", "XJ70P"],
    description: "70 lpm DynaJet pressure system, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
    imageUrl: XJ_SERIES_PUMP_IMAGE,
    curveImageUrl: XJ70_CURVE_IMAGE,
    curveLabel: "XJ70",
  },
  {
    id: "model-xj90",
    familyId: xjSeedFamily.id,
    name: "XJ90",
    slug: "xj90",
    modelCode: "XJ90T",
    aliases: ["XJ 90", "XJ90T", "XJ90P"],
    description: "90 lpm DynaJet pressure system, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
    imageUrl: XJ_SERIES_PUMP_IMAGE,
    curveImageUrl: XJ90_CURVE_IMAGE,
    curveLabel: "XJ90",
  },
];`,
    diagramBlock: `export const xjSeedDiagram: Diagram = {
  id: "diagram-xj",
  familyId: xjSeedFamily.id,
  name: "XJ Series Exploded View",
  imageUrl: XJ_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: XJ_SERIES_DIAGRAM_WIDTH,
  height: XJ_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: XJ_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
  xp: {
    parseModule: "src/lib/ricambio/parse-xp-series.ts",
    seedFile: "src/data/seed/xp-seed.ts",
    prefix: "xp",
    diagramImports: `import {
  XP_SERIES_DIAGRAM_HEIGHT,
  XP_SERIES_DIAGRAM_PATH,
  XP_SERIES_DIAGRAM_SOURCE_URL,
  XP_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/xp-series-diagram";
import {
  XP25_CURVE_IMAGE,
  XP35_CURVE_IMAGE,
  XP45_CURVE_IMAGE,
  XP_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const xpSeedFamily: PumpFamily = {
  id: "family-xp",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "XP Series",
  slug: "xp-series",
  description: "Compact pressure pumps with pressure switch control for small domestic systems.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Confirm model size (XP25/XP35/XP45) and tank option on the nameplate before ordering parts.",
};`,
    modelsBlock: `export const xpSeedModels: PumpModel[] = [
  {
    id: "model-xp25",
    familyId: xpSeedFamily.id,
    name: "XP25",
    slug: "xp25",
    modelCode: "XP25P8",
    aliases: ["XP 25", "XP25P8", "XP25P2"],
    description: "25 lpm compact pressure pump, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
    imageUrl: XP_SERIES_PUMP_IMAGE,
    curveImageUrl: XP25_CURVE_IMAGE,
    curveLabel: "XP25P8",
  },
  {
    id: "model-xp35",
    familyId: xpSeedFamily.id,
    name: "XP35",
    slug: "xp35",
    modelCode: "XP35P8",
    aliases: ["XP 35", "XP35P8"],
    description: "35 lpm compact pressure pump, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
    imageUrl: XP_SERIES_PUMP_IMAGE,
    curveImageUrl: XP35_CURVE_IMAGE,
    curveLabel: "XP35P8",
  },
  {
    id: "model-xp45",
    familyId: xpSeedFamily.id,
    name: "XP45",
    slug: "xp45",
    modelCode: "XP45P8",
    aliases: ["XP 45", "XP45P8"],
    description: "45 lpm compact pressure pump, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
    imageUrl: XP_SERIES_PUMP_IMAGE,
    curveImageUrl: XP45_CURVE_IMAGE,
    curveLabel: "XP45P8",
  },
];`,
    diagramBlock: `export const xpSeedDiagram: Diagram = {
  id: "diagram-xp",
  familyId: xpSeedFamily.id,
  name: "XP Series Exploded View",
  imageUrl: XP_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: XP_SERIES_DIAGRAM_WIDTH,
  height: XP_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: XP_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
  sdw: {
    parseModule: "src/lib/ricambio/parse-sdw-series.ts",
    seedFile: "src/data/seed/sdw-seed.ts",
    prefix: "sdw",
    diagramImports: `import {
  SDW_SERIES_DIAGRAM_HEIGHT,
  SDW_SERIES_DIAGRAM_PATH,
  SDW_SERIES_DIAGRAM_SOURCE_URL,
  SDW_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/sdw-series-diagram";
import {
  DEEP_WELL_CURVE_PDF,
  SHALLOW_WELL_CURVE_PDF,
  SDW_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const sdwSeedFamily: PumpFamily = {
  id: "family-shallow-well",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "Shallow/Deep Well Jets",
  slug: "shallow-well",
  description: "Jet pumps for shallow wells, deep wells, sand spears and water transfer.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Confirm shallow (S) or deep (D) model and size (95, 125 or 165) on the nameplate before ordering parts.",
};`,
    modelsBlock: `export const sdwSeedModels: PumpModel[] = [
  {
    id: "model-95s",
    familyId: sdwSeedFamily.id,
    name: "95S",
    slug: "95s",
    modelCode: "95S",
    aliases: ["095S", "95 S"],
    description: "Shallow well jet pump, 95 series.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Shallow well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
    imageUrl: SDW_SERIES_PUMP_IMAGE,
    curveImageUrl: SHALLOW_WELL_CURVE_PDF,
    curveLabel: "95S",
  },
  {
    id: "model-95d",
    familyId: sdwSeedFamily.id,
    name: "95D",
    slug: "95d",
    modelCode: "95D",
    aliases: ["095D", "95 D"],
    description: "Deep well jet pump, 95 series.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Deep well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
    imageUrl: SDW_SERIES_PUMP_IMAGE,
    curveImageUrl: DEEP_WELL_CURVE_PDF,
    curveLabel: "95D",
  },
  {
    id: "model-125s",
    familyId: sdwSeedFamily.id,
    name: "125S",
    slug: "125s",
    modelCode: "125S",
    aliases: ["125 S"],
    description: "Shallow well jet pump, 125 series.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Shallow well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
    imageUrl: SDW_SERIES_PUMP_IMAGE,
    curveImageUrl: SHALLOW_WELL_CURVE_PDF,
    curveLabel: "125S",
  },
  {
    id: "model-125d",
    familyId: sdwSeedFamily.id,
    name: "125D",
    slug: "125d",
    modelCode: "125D",
    aliases: ["125 D"],
    description: "Deep well jet pump, 125 series.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Deep well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
    imageUrl: SDW_SERIES_PUMP_IMAGE,
    curveImageUrl: DEEP_WELL_CURVE_PDF,
    curveLabel: "125D",
  },
  {
    id: "model-165s",
    familyId: sdwSeedFamily.id,
    name: "165S",
    slug: "165s",
    modelCode: "165S",
    aliases: ["165 S", "165S3"],
    description: "Shallow well jet pump, 165 series.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Shallow well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
    imageUrl: SDW_SERIES_PUMP_IMAGE,
    curveImageUrl: SHALLOW_WELL_CURVE_PDF,
    curveLabel: "165S",
  },
  {
    id: "model-165d",
    familyId: sdwSeedFamily.id,
    name: "165D",
    slug: "165d",
    modelCode: "165D",
    aliases: ["165 D", "165D3"],
    description: "Deep well jet pump, 165 series.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Deep well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
    imageUrl: SDW_SERIES_PUMP_IMAGE,
    curveImageUrl: DEEP_WELL_CURVE_PDF,
    curveLabel: "165D",
  },
];`,
    diagramBlock: `export const sdwSeedDiagram: Diagram = {
  id: "diagram-sdw",
  familyId: sdwSeedFamily.id,
  name: "Shallow/Deep Well Exploded View",
  imageUrl: SDW_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: SDW_SERIES_DIAGRAM_WIDTH,
  height: SDW_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: SDW_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
  evo: {
    parseModule: "src/lib/ricambio/parse-evo-series.ts",
    seedFile: "src/data/seed/evo-seed.ts",
    prefix: "evo",
    diagramImports: `import {
  EVO_SERIES_DIAGRAM_HEIGHT,
  EVO_SERIES_DIAGRAM_PATH,
  EVO_SERIES_DIAGRAM_SOURCE_URL,
  EVO_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/evo-series-diagram";
import { EVODRIVE_CURVE_IMAGE, EVODRIVE_PUMP_IMAGE } from "@/utils/pumps";`,
    familyBlock: (sourceUrl) => `export const evoSeedFamily: PumpFamily = {
  id: "family-evodrive",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "EvoDrive",
  slug: "evodrive",
  description: "Variable speed drive constant pressure pumps for modern homes.",
  sourceUrl: ${JSON.stringify(sourceUrl)},
  identificationNotes: "Confirm exact EvoDrive model code on the controller nameplate before ordering parts.",
};`,
    modelsBlock: `export const evoSeedModels: PumpModel[] = [
  {
    id: "model-ed60-09",
    familyId: evoSeedFamily.id,
    name: "ED60-09",
    slug: "ed60-09",
    modelCode: "ED60-09",
    aliases: ["EvoDrive", "ED60-09G", "ED 60-09"],
    description: "Variable speed constant pressure pump with integrated VSD controller.",
    frequency: "50 / 60 Hz",
    status: "active",
    identificationNotes: "Factory set point is typically 30 m (3 bar) — confirm on the controller display.",
    imageUrl: EVODRIVE_PUMP_IMAGE,
    curveImageUrl: EVODRIVE_CURVE_IMAGE,
    curveLabel: "ED60-09",
  },
];`,
    diagramBlock: `export const evoSeedDiagram: Diagram = {
  id: "diagram-evo",
  familyId: evoSeedFamily.id,
  name: "EvoDrive Exploded View",
  imageUrl: EVO_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: EVO_SERIES_DIAGRAM_WIDTH,
  height: EVO_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: EVO_SERIES_DIAGRAM_SOURCE_URL,
};`,
  },
};

function generateSeries(key) {
  const config = SERIES[key];
  const draftPath = join(root, `src/data/import/${key}-series-ricambio-draft.json`);
  const bundled = JSON.parse(readFileSync(draftPath, "utf8"));
  const { buildDraftPayload } = loadTsModule(config.parseModule);
  const payload = buildDraftPayload(bundled.parts);
  const hotspotsSource = bundled.hotspots ?? payload.hotspots ?? [];

  const draftParts = payload.parts.map((part) => ({
    ...part,
    reviewStatus: "approved",
    verificationStatus: part.compatibilityScope === "verify" ? "requires_verification" : "verified",
  }));

  const parts = draftParts.map((draftPart) => ({
    id: partIdFromNumber(draftPart.partNumber),
    brandId: "brand-davey",
    partNumber: draftPart.partNumber,
    description: draftPart.description,
    aliases: [draftPart.partNumber.replace(/SP$/i, ""), draftPart.partNumber.toLowerCase()],
    partCategory: draftPart.partCategory ?? "Part",
    quantity: draftPart.quantity ?? 1,
    availability: draftPart.compatibilityScope === "verify" ? "verify" : "unknown",
    illustrated: draftPart.illustrated,
  }));

  const compatibilities = draftParts.flatMap((draftPart) =>
    buildSeriesCompatibilitiesForSeed(key, partIdFromNumber(draftPart.partNumber), draftPart),
  );

  const partIdByNumber = new Map(parts.map((p) => [p.partNumber, p.id]));
  const prefix = config.prefix;
  const hotspots = hotspotsSource.map((hs) => ({
    id: `${prefix}-ref-${hs.reference.replace(/[^a-z0-9]/gi, "")}`,
    diagramId: DIAGRAM_ID[key],
    reference: hs.reference,
    x: hs.x,
    y: hs.y,
    width: hs.width,
    height: hs.height,
    partIds: hs.partNumbers.map((pn) => partIdByNumber.get(pn)).filter(Boolean),
  }));

  const P = prefix;
  const file = `import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
${config.diagramImports}

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

${config.familyBlock(bundled.sourceUrl)}

${config.modelsBlock}

${config.diagramBlock}

export const ${P}SeedHotspots: DiagramHotspot[] = ${JSON.stringify(hotspots, null, 2)};

export const ${P}SeedParts: Part[] = ${JSON.stringify(parts, null, 2)};

export const ${P}SeedCompatibilities: PartCompatibility[] = ${JSON.stringify(compatibilities, null, 2)};
`;

  writeFileSync(join(root, config.seedFile), file);
  const missingHotspotParts = hotspotsSource.flatMap((hs) =>
    hs.partNumbers.filter((pn) => !partIdByNumber.has(pn)),
  );
  console.log(
    `  ✓ ${key.toUpperCase()}: ${parts.length} parts, ${hotspots.length} hotspots, ${compatibilities.length} compat rows` +
      (missingHotspotParts.length
        ? ` (${missingHotspotParts.length} hotspot part refs unmatched)`
        : ""),
  );
  return { parts: parts.length, hotspots: hotspots.length, missingHotspotParts };
}

const keys = process.argv.slice(2);
const targets = keys.length > 0 ? keys : Object.keys(SERIES);

console.log("Generating Ricambio seeds…");
for (const key of targets) {
  if (!SERIES[key]) throw new Error(`Unknown series "${key}"`);
  generateSeries(key);
}
console.log("Done.");
