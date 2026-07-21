import type { PartCompatibility } from "@/types";
import type { DraftPartRecord } from "@/types/catalogue-import";
import type { RicambioSeriesKey } from "@/lib/ricambio/url-validator";

const FAMILY_ID: Record<RicambioSeriesKey, string> = {
  hs: "family-hs",
  hp: "family-hp",
  hm: "family-hm",
  xj: "family-xj",
  xp: "family-xp",
  sdw: "family-shallow-well",
  evo: "family-evodrive",
};

const DIAGRAM_ID: Record<RicambioSeriesKey, string> = {
  hs: "diagram-hs",
  hp: "diagram-hp",
  hm: "diagram-hm",
  xj: "diagram-xj",
  xp: "diagram-xp",
  sdw: "diagram-sdw",
  evo: "diagram-evo",
};

const MODEL_ID: Record<RicambioSeriesKey, Record<string, string>> = {
  hs: { hs50: "model-hs50", hs60: "model-hs60" },
  hp: { hp45: "model-hp45", hp65: "model-hp65", hp85: "model-hp85" },
  hm: {
    hm60: "model-hm60",
    hm90: "model-hm90",
    hm160: "model-hm160",
    hm270: "model-hm270",
  },
  xj: { xj50: "model-xj50", xj70: "model-xj70", xj90: "model-xj90" },
  xp: { xp25: "model-xp25", xp35: "model-xp35", xp45: "model-xp45" },
  sdw: {
    "95s": "model-95s",
    "95d": "model-95d",
    "125s": "model-125s",
    "125d": "model-125d",
    "165s": "model-165s",
    "165d": "model-165d",
  },
  evo: { "ed60-09": "model-ed60-09" },
};

const ALL_MODEL_KEYS: Record<RicambioSeriesKey, string[]> = {
  hs: ["hs50", "hs60"],
  hp: ["hp45", "hp65", "hp85"],
  hm: ["hm60", "hm90", "hm160", "hm270"],
  xj: ["xj50", "xj70", "xj90"],
  xp: ["xp25", "xp35", "xp45"],
  sdw: ["95s", "95d", "125s", "125d", "165s", "165d"],
  evo: ["ed60-09"],
};

const ALL_SCOPE: Record<RicambioSeriesKey, DraftPartRecord["compatibilityScope"]> = {
  hs: "both",
  hp: "hp_all",
  hm: "hm_all",
  xj: "xj_all",
  xp: "xp_all",
  sdw: "sdw_all",
  evo: "family",
};
export function compatibilityLabel(
  scope: DraftPartRecord["compatibilityScope"] | undefined,
  series: RicambioSeriesKey,
): string {
  const notes: Record<RicambioSeriesKey, Record<string, string>> = {
    hs: {
      hs50: "HS50",
      hs60: "HS60",
      both: "HS50 and HS60",
      family: "HS50 and HS60",
      verify: "HS50 and HS60 — requires verification",
    },
    hp: {
      hp45: "HP45",
      hp65: "HP65",
      hp85: "HP85",
      hp45_hp65: "HP45 and HP65",
      hp_all: "HP45, HP65 and HP85",
      both: "HP45, HP65 and HP85",
      family: "HP45, HP65 and HP85",
      verify: "HP45, HP65 and HP85 — requires verification",
    },
    hm: {
      hm60: "HM60",
      hm90: "HM90",
      hm160: "HM160",
      hm270: "HM270",
      hm60_hm90: "HM60 and HM90",
      hm160_hm270: "HM160 and HM270",
      hm_all: "HM60, HM90, HM160 and HM270",
      family: "HM60, HM90, HM160 and HM270",
      verify: "HM60, HM90, HM160 and HM270 — requires verification",
    },
    xj: {
      xj50: "XJ50",
      xj70: "XJ70",
      xj90: "XJ90",
      xj50_xj70: "XJ50 and XJ70",
      xj_all: "XJ50, XJ70 and XJ90",
      both: "XJ50, XJ70 and XJ90",
      family: "XJ50, XJ70 and XJ90",
      verify: "XJ50, XJ70 and XJ90 — requires verification",
    },
    xp: {
      xp25: "XP25",
      xp35: "XP35",
      xp45: "XP45",
      xp25_xp35: "XP25 and XP35",
      xp35_xp45: "XP35 and XP45",
      xp_all: "XP25, XP35 and XP45",
      family: "XP25, XP35 and XP45",
      verify: "XP25, XP35 and XP45 — requires verification",
    },
    sdw: {
      sdw95s: "95S",
      sdw95d: "95D",
      sdw125s: "125S",
      sdw125d: "125D",
      sdw165s: "165S",
      sdw165d: "165D",
      sdw95_both: "95S and 95D",
      sdw95s_125s: "95S and 125S",
      sdw125_165: "125S, 125D, 165S and 165D",
      shallow_all: "95S, 125S and 165S",
      deep_all: "95D, 125D and 165D",
      sdw_all: "95S, 95D, 125S, 125D, 165S and 165D",
      family: "95S, 95D, 125S, 125D, 165S and 165D",
      verify: "Shallow/Deep Well — requires verification",
    },
    evo: {
      family: "ED60-09",
      both: "ED60-09",
      verify: "EvoDrive — requires verification",
    },
  };

  if (!scope) return notes[series][ALL_SCOPE[series] as string] ?? "Requires verification";
  return notes[series][scope] ?? "Requires verification";
}

function scopeModelKeys(
  series: RicambioSeriesKey,
  scope: DraftPartRecord["compatibilityScope"] | undefined,
): string[] {
  const all = ALL_MODEL_KEYS[series];

  if (!scope || scope === "family" || scope === "verify") {
    return all;
  }

  switch (scope) {
    case "hs50":
      return ["hs50"];
    case "hs60":
      return ["hs60"];
    case "both":
      return series === "hs" ? all : all;
    case "hp45":
      return ["hp45"];
    case "hp65":
      return ["hp65"];
    case "hp85":
      return ["hp85"];
    case "hp45_hp65":
      return ["hp45", "hp65"];
    case "hp_all":
      return all;
    case "hm60":
      return ["hm60"];
    case "hm90":
      return ["hm90"];
    case "hm160":
      return ["hm160"];
    case "hm270":
      return ["hm270"];
    case "hm60_hm90":
      return ["hm60", "hm90"];
    case "hm160_hm270":
      return ["hm160", "hm270"];
    case "hm_all":
      return all;
    case "xj50":
      return ["xj50"];
    case "xj70":
      return ["xj70"];
    case "xj90":
      return ["xj90"];
    case "xj50_xj70":
      return ["xj50", "xj70"];
    case "xj_all":
      return all;
    case "xp25":
      return ["xp25"];
    case "xp35":
      return ["xp35"];
    case "xp45":
      return ["xp45"];
    case "xp25_xp35":
      return ["xp25", "xp35"];
    case "xp35_xp45":
      return ["xp35", "xp45"];
    case "xp_all":
      return all;
    case "sdw95s":
      return ["95s"];
    case "sdw95d":
      return ["95d"];
    case "sdw125s":
      return ["125s"];
    case "sdw125d":
      return ["125d"];
    case "sdw165s":
      return ["165s"];
    case "sdw165d":
      return ["165d"];
    case "sdw95_both":
      return ["95s", "95d"];
    case "sdw95s_125s":
      return ["95s", "125s"];
    case "sdw125_165":
      return ["125s", "125d", "165s", "165d"];
    case "shallow_all":
      return ["95s", "125s", "165s"];
    case "deep_all":
      return ["95d", "125d", "165d"];
    case "sdw_all":
      return all;
    default:
      return all;
  }
}

export function buildSeriesCompatibilities(
  series: RicambioSeriesKey,
  partId: string,
  draftPart: DraftPartRecord,
): PartCompatibility[] {
  const ref = draftPart.diagramReference ?? undefined;
  const note = compatibilityLabel(draftPart.compatibilityScope, series);
  const familyId = FAMILY_ID[series];
  const diagramId = DIAGRAM_ID[series];
  const partSlug = partId.replace("part-", "");
  const modelKeys = scopeModelKeys(series, draftPart.compatibilityScope);

  return modelKeys.map((modelKey) => ({
    id: `compat-${series}-${modelKey}-${partSlug}`,
    partId,
    familyId,
    modelId: MODEL_ID[series][modelKey],
    diagramId: ref ? diagramId : undefined,
    diagramReference: ref,
    compatibilityNotes: note,
  }));
}
