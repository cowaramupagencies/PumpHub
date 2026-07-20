export type RicambioSeriesKey = "hs" | "hp" | "hm" | "xj" | "xp" | "sdw";

export interface RicambioSeriesConfig {
  key: RicambioSeriesKey;
  catalogueId: string;
  familyId: string;
  title: string;
  sourceUrl: string;
  diagramSourceUrl: string;
  diagramLocalPath: string;
  hotspotsJsonPath: string;
  draftJsonPath: string;
}

const BASE = "https://davey.ricambio.net";

function catalogueUrl(catalogueId: string, parentId: string): string {
  return `${BASE}/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=${catalogueId}&PRF=4&PRNDS=${parentId}&PRC=|R|CE_1|CE_111|${parentId}|${catalogueId}&MP1=${catalogueId}&MP=${catalogueId}.cex#${catalogueId}`;
}

export const RICAMBIO_SERIES: Record<RicambioSeriesKey, RicambioSeriesConfig> = {
  hs: {
    key: "hs",
    catalogueId: "CE_190",
    familyId: "family-hs",
    title: "HS Series",
    sourceUrl: catalogueUrl("CE_190", "CE_179"),
    diagramSourceUrl: `${BASE}/ce/001/CE_190_1.SVG`,
    diagramLocalPath: "/diagrams/hs-series.svg",
    hotspotsJsonPath: "src/data/diagrams/hs-series-hotspots.json",
    draftJsonPath: "src/data/import/hs-series-ricambio-draft.json",
  },
  hp: {
    key: "hp",
    catalogueId: "CE_188",
    familyId: "family-hp",
    title: "HP Series",
    sourceUrl: catalogueUrl("CE_188", "CE_179"),
    diagramSourceUrl: `${BASE}/ce/001/CE_188_1.SVG`,
    diagramLocalPath: "/diagrams/hp-series.svg",
    hotspotsJsonPath: "src/data/diagrams/hp-series-hotspots.json",
    draftJsonPath: "src/data/import/hp-series-ricambio-draft.json",
  },
  hm: {
    key: "hm",
    catalogueId: "CE_248",
    familyId: "family-hm",
    title: "HM Series",
    sourceUrl: catalogueUrl("CE_248", "CE_247"),
    diagramSourceUrl: `${BASE}/ce/001/CE_248_1.SVG`,
    diagramLocalPath: "/diagrams/hm-series.svg",
    hotspotsJsonPath: "src/data/diagrams/hm-series-hotspots.json",
    draftJsonPath: "src/data/import/hm-series-ricambio-draft.json",
  },
  xj: {
    key: "xj",
    catalogueId: "CE_197",
    familyId: "family-xj",
    title: "XJ Series",
    sourceUrl: catalogueUrl("CE_197", "CE_179"),
    diagramSourceUrl: `${BASE}/ce/001/CE_197_1.SVG`,
    diagramLocalPath: "/diagrams/xj-series.svg",
    hotspotsJsonPath: "src/data/diagrams/xj-series-hotspots.json",
    draftJsonPath: "src/data/import/xj-series-ricambio-draft.json",
  },
  xp: {
    key: "xp",
    catalogueId: "CE_182",
    familyId: "family-xp",
    title: "XP Series",
    sourceUrl: catalogueUrl("CE_182", "CE_179"),
    diagramSourceUrl: `${BASE}/ce/001/CE_182_1.SVG`,
    diagramLocalPath: "/diagrams/xp-series.svg",
    hotspotsJsonPath: "src/data/diagrams/xp-series-hotspots.json",
    draftJsonPath: "src/data/import/xp-series-ricambio-draft.json",
  },
  sdw: {
    key: "sdw",
    catalogueId: "CE_201",
    familyId: "family-shallow-well",
    title: "Shallow/Deep Well Jets",
    sourceUrl: catalogueUrl("CE_201", "CE_200"),
    diagramSourceUrl: `${BASE}/ce/001/CE_201_1.SVG`,
    diagramLocalPath: "/diagrams/sdw-series.svg",
    hotspotsJsonPath: "src/data/diagrams/sdw-series-hotspots.json",
    draftJsonPath: "src/data/import/sdw-series-ricambio-draft.json",
  },
};

export function getRicambioSeriesConfig(key: RicambioSeriesKey): RicambioSeriesConfig {
  return RICAMBIO_SERIES[key];
}
