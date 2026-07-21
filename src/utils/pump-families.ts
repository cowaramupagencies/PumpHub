/** Product photo shown in browse grid and on pump detail pages */
export interface PumpFamilyVisual {
  imageUrl: string;
  browseLabel: string;
  /** Tailwind background class for the image well (helps dark-background product shots) */
  imageBgClass?: string;
}

const FAMILY_VISUALS: Record<string, PumpFamilyVisual> = {
  "hs-series": {
    imageUrl: "/pumps/hs-series.png",
    browseLabel: "HS Range",
    imageBgClass: "bg-davey-yellow",
  },
  "hp-series": {
    imageUrl: "/pumps/hp-series.png",
    browseLabel: "HP Range",
    imageBgClass: "bg-davey-yellow",
  },
  "hm-series": {
    imageUrl: "/pumps/hm-series.png",
    browseLabel: "HM Range",
    imageBgClass: "bg-davey-yellow",
  },
  "xj-series": {
    imageUrl: "/pumps/families/xj-series.png",
    browseLabel: "XJ Range",
    imageBgClass: "bg-davey-yellow",
  },
  "xp-series": {
    imageUrl: "/pumps/families/xp-series.png",
    browseLabel: "XP Range",
    imageBgClass: "bg-davey-yellow",
  },
  // Additional ranges:
  "shallow-well": {
    imageUrl: "/pumps/families/shallow-well.png",
    browseLabel: "Shallow/Deep Well",
    imageBgClass: "bg-davey-yellow",
  },
  evodrive: {
    imageUrl: "/pumps/families/evodrive.png",
    browseLabel: "EvoDrive",
    imageBgClass: "bg-davey-yellow",
  },
};

/** Preferred display order for the browse grid (unknown families sort alphabetically after these) */
export const PUMP_FAMILY_BROWSE_ORDER = [
  "hs-series",
  "hp-series",
  "hm-series",
  "xj-series",
  "xp-series",
  "shallow-well",
  "evodrive",
];

export function getPumpFamilyVisual(familySlug: string): PumpFamilyVisual | undefined {
  return FAMILY_VISUALS[familySlug];
}

export function getPumpFamilyBrowseLabel(familySlug: string, fallbackName: string): string {
  return FAMILY_VISUALS[familySlug]?.browseLabel ?? fallbackName;
}

export function getPumpFamilyImageUrl(familySlug: string): string | undefined {
  return FAMILY_VISUALS[familySlug]?.imageUrl;
}

export function sortPumpFamiliesForBrowse<T extends { slug: string; name: string }>(families: T[]): T[] {
  return [...families].sort((a, b) => {
    const aIndex = PUMP_FAMILY_BROWSE_ORDER.indexOf(a.slug);
    const bIndex = PUMP_FAMILY_BROWSE_ORDER.indexOf(b.slug);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.name.localeCompare(b.name);
  });
}
