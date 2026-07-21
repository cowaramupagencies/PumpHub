/** Shared product photo for Davey HS50 and HS60 pumps */
export const HS_SERIES_PUMP_IMAGE = "/pumps/hs-series.png";

/** HS Series performance curve chart (both HS50 and HS60 curves) */
export const HS_SERIES_CURVE_IMAGE = "/pumps/hs-series-performance-curve.png";

/** Shared product photo for Davey HP Series pumps */
export const HP_SERIES_PUMP_IMAGE = "/pumps/hp-series.png";

/** HP Series performance curve chart (HP45, HP65 and HP85 curves) */
export const HP_SERIES_CURVE_IMAGE = "/pumps/hp-series-performance-curve.png";

/** Shared product photo for Davey HM Series pumps */
export const HM_SERIES_PUMP_IMAGE = "/pumps/hm-series.png";

/** HM Series performance curve chart (HM60/HM90 and HM160/HM270 curves) */
export const HM_SERIES_CURVE_IMAGE = "/pumps/hm-series-performance-curve.png";

/** Shared product photo for Davey XJ Series pumps */
export const XJ_SERIES_PUMP_IMAGE = "/pumps/families/xj-series.png";

/** XJ50 performance curve (suction lift lines) */
export const XJ50_CURVE_IMAGE = "/pumps/xj50-performance-curve.png";

/** XJ70 performance curve (suction lift lines) */
export const XJ70_CURVE_IMAGE = "/pumps/xj70-performance-curve.png";

/** XJ90 performance curve (suction lift lines) */
export const XJ90_CURVE_IMAGE = "/pumps/xj90-performance-curve.png";

/** Shared product photo for Davey XP Series pumps */
export const XP_SERIES_PUMP_IMAGE = "/pumps/families/xp-series.png";

/** XP25 performance curve (suction lift lines) */
export const XP25_CURVE_IMAGE = "/pumps/xp25-performance-curve.png";

/** XP35 performance curve (suction lift lines) */
export const XP35_CURVE_IMAGE = "/pumps/xp35-performance-curve.png";

/** XP45 performance curve (suction lift lines) */
export const XP45_CURVE_IMAGE = "/pumps/xp45-performance-curve.png";

/** Shallow/Deep Well jet pump product photo */
export const SDW_SERIES_PUMP_IMAGE = "/pumps/families/shallow-well.png";

/** Shallow well jet pump performance datasheet (PDF) */
export const SHALLOW_WELL_CURVE_PDF =
  "https://cdn.intelligencebank.com/au/share/BnKJ1e/73Bzg/0EAMz/original/ShallowWell_Jet_Datasheet";

/** Deep well jet pump performance datasheet (PDF) */
export const DEEP_WELL_CURVE_PDF =
  "https://cdn.intelligencebank.com/au/share/BnKJ1e/73Bzg/739J0/original/DeepWell_Jet_Datasheet";

/** EvoDrive product photo */
export const EVODRIVE_PUMP_IMAGE = "/pumps/families/evodrive.png";

/** EvoDrive performance curve (flow vs total head, factory set point 30 m) */
export const EVODRIVE_CURVE_IMAGE = "/pumps/evodrive-performance-curve.png";

import { getPumpFamilyImageUrl } from "@/utils/pump-families";

function isCurveDocumentUrl(url: string): boolean {
  const lower = url.toLowerCase();
  return lower.includes("datasheet") || lower.includes(".pdf") || lower.includes("intelligencebank");
}

const PUMP_IMAGE_BY_SLUG: Record<string, string> = {
  hs50: HS_SERIES_PUMP_IMAGE,
  hs60: HS_SERIES_PUMP_IMAGE,
  hp45: HP_SERIES_PUMP_IMAGE,
  hp65: HP_SERIES_PUMP_IMAGE,
  hp85: HP_SERIES_PUMP_IMAGE,
  hm60: HM_SERIES_PUMP_IMAGE,
  hm90: HM_SERIES_PUMP_IMAGE,
  hm160: HM_SERIES_PUMP_IMAGE,
  hm270: HM_SERIES_PUMP_IMAGE,
  xj50: XJ_SERIES_PUMP_IMAGE,
  xj70: XJ_SERIES_PUMP_IMAGE,
  xj90: XJ_SERIES_PUMP_IMAGE,
  xp25: XP_SERIES_PUMP_IMAGE,
  xp35: XP_SERIES_PUMP_IMAGE,
  xp45: XP_SERIES_PUMP_IMAGE,
  "95s": SDW_SERIES_PUMP_IMAGE,
  "95d": SDW_SERIES_PUMP_IMAGE,
  "125s": SDW_SERIES_PUMP_IMAGE,
  "125d": SDW_SERIES_PUMP_IMAGE,
  "165s": SDW_SERIES_PUMP_IMAGE,
  "165d": SDW_SERIES_PUMP_IMAGE,
  jt450: SDW_SERIES_PUMP_IMAGE,
  jt750: SDW_SERIES_PUMP_IMAGE,
  "ed60-09": EVODRIVE_PUMP_IMAGE,
};

const CURVE_LABELS: Record<string, string> = {
  hs50: "L4T (HS50-06T)",
  hs60: "L5T (HS60-08T)",
  hp45: "HP45-05T",
  hp65: "HP65-06T",
  hp85: "HP85-08T",
  hm60: "HM60-10T",
  hm90: "HM90-13T",
  hm160: "HM160-19T",
  hm270: "HM270-25",
  xj50: "XJ50",
  xj70: "XJ70",
  xj90: "XJ90",
  xp25: "XP25P8",
  xp35: "XP35P8",
  xp45: "XP45P8",
  "95s": "95S",
  "95d": "95D",
  "125s": "125S",
  "125d": "125D",
  "165s": "165S",
  "165d": "165D",
  "ed60-09": "ED60-09",
};

const CURVE_IMAGES: Record<string, string> = {
  hs50: HS_SERIES_CURVE_IMAGE,
  hs60: HS_SERIES_CURVE_IMAGE,
  hp45: HP_SERIES_CURVE_IMAGE,
  hp65: HP_SERIES_CURVE_IMAGE,
  hp85: HP_SERIES_CURVE_IMAGE,
  hm60: HM_SERIES_CURVE_IMAGE,
  hm90: HM_SERIES_CURVE_IMAGE,
  hm160: HM_SERIES_CURVE_IMAGE,
  hm270: HM_SERIES_CURVE_IMAGE,
  xj50: XJ50_CURVE_IMAGE,
  xj70: XJ70_CURVE_IMAGE,
  xj90: XJ90_CURVE_IMAGE,
  xp25: XP25_CURVE_IMAGE,
  xp35: XP35_CURVE_IMAGE,
  xp45: XP45_CURVE_IMAGE,
  "ed60-09": EVODRIVE_CURVE_IMAGE,
};

export function getPumpImageUrl(slug: string, imageUrl?: string, familySlug?: string): string | undefined {
  if (imageUrl) return imageUrl;
  const byModel = PUMP_IMAGE_BY_SLUG[slug.toLowerCase()];
  if (byModel) return byModel;
  if (familySlug) return getPumpFamilyImageUrl(familySlug);
  return undefined;
}

export interface PumpCurveInfo {
  imageUrl: string;
  seriesLabel: string;
  seriesName?: string;
  isDocument?: boolean;
}

export function getPumpCurveInfo(
  slug: string,
  curveImageUrl?: string,
  curveLabel?: string,
  familySlug?: string,
): PumpCurveInfo | undefined {
  if (curveImageUrl && curveLabel) {
    return {
      imageUrl: curveImageUrl,
      seriesLabel: curveLabel,
      isDocument: isCurveDocumentUrl(curveImageUrl),
      seriesName:
        familySlug === "hp-series"
          ? "HP Series"
          : familySlug === "hs-series"
            ? "HS Series"
            : familySlug === "hm-series"
              ? "HM Series"
              : familySlug === "xj-series"
                ? "XJ Series"
                : familySlug === "xp-series"
                  ? "XP Series"
                  : familySlug === "shallow-well"
                    ? "Shallow/Deep Well Jets"
                    : familySlug === "evodrive"
                      ? "EvoDrive"
                      : undefined,
    };
  }

  const normalized = slug.toLowerCase();
  const seriesLabel = CURVE_LABELS[normalized];
  if (!seriesLabel) return undefined;

  return {
    imageUrl: CURVE_IMAGES[normalized],
    seriesLabel,
    seriesName: normalized.startsWith("hp")
      ? "HP Series"
      : normalized.startsWith("hm")
        ? "HM Series"
        : normalized.startsWith("xj")
          ? "XJ Series"
          : normalized.startsWith("xp")
            ? "XP Series"
            : normalized.startsWith("ed")
              ? "EvoDrive"
              : "HS Series",
  };
}
