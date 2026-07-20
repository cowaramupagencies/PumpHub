import type { PumpFamily, PumpModel } from "@/types";
import { getPumpFamilyImageUrl } from "@/utils/pump-families";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

function familyImage(slug: string): string | undefined {
  return getPumpFamilyImageUrl(slug);
}

export const shallowWellSeedFamily: PumpFamily = {
  id: "family-shallow-well",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "Shallow Well Jets",
  slug: "shallow-well",
  description: "Jet-assisted pumps for shallow wells, sand spears and water transfer.",
  identificationNotes: "Confirm jet model and injector type on the nameplate before ordering parts.",
};

export const shallowWellSeedModels: PumpModel[] = [
  {
    id: "model-jt450",
    familyId: shallowWellSeedFamily.id,
    name: "JT450",
    slug: "jt450",
    modelCode: "JT450",
    aliases: ["JT 450"],
    description: "43 lpm jet transfer pump, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Catalogue and parts data will be added in a future update.",
    imageUrl: familyImage("shallow-well"),
  },
  {
    id: "model-jt750",
    familyId: shallowWellSeedFamily.id,
    name: "JT750",
    slug: "jt750",
    modelCode: "JT750",
    aliases: ["JT 750"],
    description: "67 lpm jet transfer pump, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Catalogue and parts data will be added in a future update.",
    imageUrl: familyImage("shallow-well"),
  },
];

export const evodriveSeedFamily: PumpFamily = {
  id: "family-evodrive",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "EvoDrive",
  slug: "evodrive",
  description: "Variable speed drive constant pressure pumps for modern homes.",
  identificationNotes: "Confirm exact EvoDrive model code on the controller nameplate.",
};

export const evodriveSeedModels: PumpModel[] = [
  {
    id: "model-ed60-09",
    familyId: evodriveSeedFamily.id,
    name: "ED60-09",
    slug: "ed60-09",
    modelCode: "ED60-09",
    aliases: ["EvoDrive", "ED60-09G"],
    description: "Variable speed constant pressure pump, 50/60 Hz.",
    frequency: "50 / 60 Hz",
    status: "active",
    identificationNotes: "Catalogue and parts data will be added in a future update.",
    imageUrl: familyImage("evodrive"),
  },
];

export const extendedSeedFamilies = [shallowWellSeedFamily, evodriveSeedFamily];

export const extendedSeedModels = [...shallowWellSeedModels, ...evodriveSeedModels];
