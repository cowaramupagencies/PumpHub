import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
  EVO_SERIES_DIAGRAM_HEIGHT,
  EVO_SERIES_DIAGRAM_PATH,
  EVO_SERIES_DIAGRAM_SOURCE_URL,
  EVO_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/evo-series-diagram";
import { EVODRIVE_CURVE_IMAGE, EVODRIVE_PUMP_IMAGE } from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const evoSeedFamily: PumpFamily = {
  id: "family-evodrive",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "EvoDrive",
  slug: "evodrive",
  description: "Variable speed drive constant pressure pumps for modern homes.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_564&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_564&MP1=CE_564&MP=CE_564.cex#CE_564",
  identificationNotes: "Confirm exact EvoDrive model code on the controller nameplate before ordering parts.",
};

export const evoSeedModels: PumpModel[] = [
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
];

export const evoSeedDiagram: Diagram = {
  id: "diagram-evo",
  familyId: evoSeedFamily.id,
  name: "EvoDrive Exploded View",
  imageUrl: EVO_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: EVO_SERIES_DIAGRAM_WIDTH,
  height: EVO_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: EVO_SERIES_DIAGRAM_SOURCE_URL,
};

export const evoSeedHotspots: DiagramHotspot[] = [
  {
    "id": "evo-ref-1",
    "diagramId": "diagram-evo",
    "reference": "1",
    "x": 0.16325000000000003,
    "y": 0.4764984227129338,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16426"
    ]
  },
  {
    "id": "evo-ref-1",
    "diagramId": "diagram-evo",
    "reference": "1",
    "x": 0.16325000000000003,
    "y": 0.4764984227129338,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16426"
    ]
  },
  {
    "id": "evo-ref-2",
    "diagramId": "diagram-evo",
    "reference": "2",
    "x": 0.20887500000000003,
    "y": 0.22870662460567823,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404259"
    ]
  },
  {
    "id": "evo-ref-2",
    "diagramId": "diagram-evo",
    "reference": "2",
    "x": 0.20887500000000003,
    "y": 0.22870662460567823,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404259"
    ]
  },
  {
    "id": "evo-ref-3",
    "diagramId": "diagram-evo",
    "reference": "3",
    "x": 0.23450000000000004,
    "y": 0.172397476340694,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33475"
    ]
  },
  {
    "id": "evo-ref-3",
    "diagramId": "diagram-evo",
    "reference": "3",
    "x": 0.23450000000000004,
    "y": 0.172397476340694,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33475"
    ]
  },
  {
    "id": "evo-ref-4",
    "diagramId": "diagram-evo",
    "reference": "4",
    "x": 0.28300000000000003,
    "y": 0.14842271293375395,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404287"
    ]
  },
  {
    "id": "evo-ref-4",
    "diagramId": "diagram-evo",
    "reference": "4",
    "x": 0.28300000000000003,
    "y": 0.14842271293375395,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404287"
    ]
  },
  {
    "id": "evo-ref-5",
    "diagramId": "diagram-evo",
    "reference": "5",
    "x": 0.30862500000000004,
    "y": 0.1854889589905363,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404289"
    ]
  },
  {
    "id": "evo-ref-5",
    "diagramId": "diagram-evo",
    "reference": "5",
    "x": 0.30862500000000004,
    "y": 0.1854889589905363,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404289"
    ]
  },
  {
    "id": "evo-ref-6",
    "diagramId": "diagram-evo",
    "reference": "6",
    "x": 0.3865,
    "y": 0.15205047318611986,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404290"
    ]
  },
  {
    "id": "evo-ref-6",
    "diagramId": "diagram-evo",
    "reference": "6",
    "x": 0.3865,
    "y": 0.15205047318611986,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404290"
    ]
  },
  {
    "id": "evo-ref-7",
    "diagramId": "diagram-evo",
    "reference": "7",
    "x": 0.46625,
    "y": 0.13769716088328074,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404308"
    ]
  },
  {
    "id": "evo-ref-7",
    "diagramId": "diagram-evo",
    "reference": "7",
    "x": 0.46625,
    "y": 0.13769716088328074,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404308"
    ]
  },
  {
    "id": "evo-ref-8",
    "diagramId": "diagram-evo",
    "reference": "8",
    "x": 0.547875,
    "y": 0.12334384858044165,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404291"
    ]
  },
  {
    "id": "evo-ref-8",
    "diagramId": "diagram-evo",
    "reference": "8",
    "x": 0.547875,
    "y": 0.12334384858044165,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404291"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.49950000000000006,
    "y": 0.12570977917981074,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.49950000000000006,
    "y": 0.12570977917981074,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.26587500000000003,
    "y": 0.2657728706624606,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.26587500000000003,
    "y": 0.2657728706624606,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.45387500000000003,
    "y": 0.48738170347003157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.45387500000000003,
    "y": 0.48738170347003157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.501375,
    "y": 0.48564668769716096,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.501375,
    "y": 0.48564668769716096,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.696,
    "y": 0.48974763406940064,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.696,
    "y": 0.48974763406940064,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.41575,
    "y": 0.12239747634069399,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-9",
    "diagramId": "diagram-evo",
    "reference": "9",
    "x": 0.41575,
    "y": 0.12239747634069399,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33467"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.38075000000000003,
    "y": 0.2526813880126183,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.38075000000000003,
    "y": 0.2526813880126183,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.23162500000000003,
    "y": 0.46703470031545746,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.23162500000000003,
    "y": 0.46703470031545746,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.40737500000000004,
    "y": 0.4910094637223975,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.40737500000000004,
    "y": 0.4910094637223975,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.8242499999999999,
    "y": 0.47050473186119873,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.8242499999999999,
    "y": 0.47050473186119873,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.7264999999999999,
    "y": 0.6094637223974764,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.7264999999999999,
    "y": 0.6094637223974764,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.727375,
    "y": 0.9088328075709778,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.727375,
    "y": 0.9088328075709778,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.492875,
    "y": 0.9436908517350157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.492875,
    "y": 0.9436908517350157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.373125,
    "y": 0.6753943217665614,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-10",
    "diagramId": "diagram-evo",
    "reference": "10",
    "x": 0.373125,
    "y": 0.6753943217665614,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33471"
    ]
  },
  {
    "id": "evo-ref-11",
    "diagramId": "diagram-evo",
    "reference": "11",
    "x": 0.30575,
    "y": 0.46813880126182966,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33473"
    ]
  },
  {
    "id": "evo-ref-11",
    "diagramId": "diagram-evo",
    "reference": "11",
    "x": 0.30575,
    "y": 0.46813880126182966,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33473"
    ]
  },
  {
    "id": "evo-ref-12",
    "diagramId": "diagram-evo",
    "reference": "12",
    "x": 0.533625,
    "y": 0.48738170347003157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33472"
    ]
  },
  {
    "id": "evo-ref-12",
    "diagramId": "diagram-evo",
    "reference": "12",
    "x": 0.533625,
    "y": 0.48738170347003157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33472"
    ]
  },
  {
    "id": "evo-ref-12",
    "diagramId": "diagram-evo",
    "reference": "12",
    "x": 0.73875,
    "y": 0.48738170347003157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33472"
    ]
  },
  {
    "id": "evo-ref-12",
    "diagramId": "diagram-evo",
    "reference": "12",
    "x": 0.73875,
    "y": 0.48738170347003157,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33472"
    ]
  },
  {
    "id": "evo-ref-13",
    "diagramId": "diagram-evo",
    "reference": "13",
    "x": 0.565,
    "y": 0.26813880126182965,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33466"
    ]
  },
  {
    "id": "evo-ref-13",
    "diagramId": "diagram-evo",
    "reference": "13",
    "x": 0.565,
    "y": 0.26813880126182965,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33466"
    ]
  },
  {
    "id": "evo-ref-14",
    "diagramId": "diagram-evo",
    "reference": "14",
    "x": 0.638125,
    "y": 0.2298107255520505,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404292"
    ]
  },
  {
    "id": "evo-ref-14",
    "diagramId": "diagram-evo",
    "reference": "14",
    "x": 0.638125,
    "y": 0.2298107255520505,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404292"
    ]
  },
  {
    "id": "evo-ref-15",
    "diagramId": "diagram-evo",
    "reference": "15",
    "x": 0.7463749999999999,
    "y": 0.2466876971608833,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33468"
    ]
  },
  {
    "id": "evo-ref-15",
    "diagramId": "diagram-evo",
    "reference": "15",
    "x": 0.7463749999999999,
    "y": 0.2466876971608833,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33468"
    ]
  },
  {
    "id": "evo-ref-16",
    "diagramId": "diagram-evo",
    "reference": "16",
    "x": 0.761625,
    "y": 0.19274447949526816,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33470"
    ]
  },
  {
    "id": "evo-ref-16",
    "diagramId": "diagram-evo",
    "reference": "16",
    "x": 0.761625,
    "y": 0.19274447949526816,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33470"
    ]
  },
  {
    "id": "evo-ref-17",
    "diagramId": "diagram-evo",
    "reference": "17",
    "x": 0.8413749999999999,
    "y": 0.2011041009463722,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404294"
    ]
  },
  {
    "id": "evo-ref-17",
    "diagramId": "diagram-evo",
    "reference": "17",
    "x": 0.8413749999999999,
    "y": 0.2011041009463722,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404294"
    ]
  },
  {
    "id": "evo-ref-18",
    "diagramId": "diagram-evo",
    "reference": "18",
    "x": 0.808125,
    "y": 0.2406940063091483,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404295"
    ]
  },
  {
    "id": "evo-ref-18",
    "diagramId": "diagram-evo",
    "reference": "18",
    "x": 0.808125,
    "y": 0.2406940063091483,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404295"
    ]
  },
  {
    "id": "evo-ref-18",
    "diagramId": "diagram-evo",
    "reference": "18",
    "x": 0.29912500000000003,
    "y": 0.6970031545741325,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404295"
    ]
  },
  {
    "id": "evo-ref-18",
    "diagramId": "diagram-evo",
    "reference": "18",
    "x": 0.29912500000000003,
    "y": 0.6970031545741325,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404295"
    ]
  },
  {
    "id": "evo-ref-18",
    "diagramId": "diagram-evo",
    "reference": "18",
    "x": 0.516625,
    "y": 0.8753943217665615,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404295"
    ]
  },
  {
    "id": "evo-ref-18",
    "diagramId": "diagram-evo",
    "reference": "18",
    "x": 0.516625,
    "y": 0.8753943217665615,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404295"
    ]
  },
  {
    "id": "evo-ref-19",
    "diagramId": "diagram-evo",
    "reference": "19",
    "x": 0.289625,
    "y": 0.8657728706624606,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33474"
    ]
  },
  {
    "id": "evo-ref-19",
    "diagramId": "diagram-evo",
    "reference": "19",
    "x": 0.289625,
    "y": 0.8657728706624606,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33474"
    ]
  },
  {
    "id": "evo-ref-19",
    "diagramId": "diagram-evo",
    "reference": "19",
    "x": 0.35325,
    "y": 0.8656151419558359,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33474"
    ]
  },
  {
    "id": "evo-ref-19",
    "diagramId": "diagram-evo",
    "reference": "19",
    "x": 0.35325,
    "y": 0.8656151419558359,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33474"
    ]
  },
  {
    "id": "evo-ref-20",
    "diagramId": "diagram-evo",
    "reference": "20",
    "x": 0.424375,
    "y": 0.8735015772870661,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404297"
    ]
  },
  {
    "id": "evo-ref-20",
    "diagramId": "diagram-evo",
    "reference": "20",
    "x": 0.424375,
    "y": 0.8735015772870661,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404297"
    ]
  },
  {
    "id": "evo-ref-21",
    "diagramId": "diagram-evo",
    "reference": "21",
    "x": 0.48425000000000007,
    "y": 0.8910094637223974,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404299"
    ]
  },
  {
    "id": "evo-ref-21",
    "diagramId": "diagram-evo",
    "reference": "21",
    "x": 0.48425000000000007,
    "y": 0.8910094637223974,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404299"
    ]
  },
  {
    "id": "evo-ref-22",
    "diagramId": "diagram-evo",
    "reference": "22",
    "x": 0.535625,
    "y": 0.6157728706624607,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404300"
    ]
  },
  {
    "id": "evo-ref-22",
    "diagramId": "diagram-evo",
    "reference": "22",
    "x": 0.535625,
    "y": 0.6157728706624607,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-404300"
    ]
  },
  {
    "id": "evo-ref-23",
    "diagramId": "diagram-evo",
    "reference": "23",
    "x": 0.613375,
    "y": 0.6227129337539432,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16427"
    ]
  },
  {
    "id": "evo-ref-23",
    "diagramId": "diagram-evo",
    "reference": "23",
    "x": 0.613375,
    "y": 0.6227129337539432,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16427"
    ]
  },
  {
    "id": "evo-ref-24",
    "diagramId": "diagram-evo",
    "reference": "24",
    "x": 0.72175,
    "y": 0.8537854889589904,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16428"
    ]
  },
  {
    "id": "evo-ref-24",
    "diagramId": "diagram-evo",
    "reference": "24",
    "x": 0.72175,
    "y": 0.8537854889589904,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16428"
    ]
  },
  {
    "id": "evo-ref-25",
    "diagramId": "diagram-evo",
    "reference": "25",
    "x": 0.23950000000000002,
    "y": 0.9162460567823344,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16429"
    ]
  },
  {
    "id": "evo-ref-25",
    "diagramId": "diagram-evo",
    "reference": "25",
    "x": 0.23950000000000002,
    "y": 0.9162460567823344,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-16429"
    ]
  },
  {
    "id": "evo-ref-26",
    "diagramId": "diagram-evo",
    "reference": "26",
    "x": 0.5473750000000001,
    "y": 0.5679810725552051,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33482"
    ]
  },
  {
    "id": "evo-ref-26",
    "diagramId": "diagram-evo",
    "reference": "26",
    "x": 0.5473750000000001,
    "y": 0.5679810725552051,
    "width": 0.0305,
    "height": 0.038485804416403785,
    "partIds": [
      "part-33482"
    ]
  }
];

export const evoSeedParts: Part[] = [
  {
    "id": "part-16426",
    "brandId": "brand-davey",
    "partNumber": "16426",
    "description": "Front Cover",
    "aliases": [
      "16426",
      "16426"
    ],
    "partCategory": "Cover",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404259",
    "brandId": "brand-davey",
    "partNumber": "404259",
    "description": "Casing Assembly",
    "aliases": [
      "404259",
      "404259"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33475",
    "brandId": "brand-davey",
    "partNumber": "33475",
    "description": "Check Valve - Inlet",
    "aliases": [
      "33475",
      "33475"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404287",
    "brandId": "brand-davey",
    "partNumber": "404287",
    "description": "T Kit 5 Way",
    "aliases": [
      "404287",
      "404287"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404289",
    "brandId": "brand-davey",
    "partNumber": "404289",
    "description": "Temperature Sensor (Incl Oring)",
    "aliases": [
      "404289",
      "404289"
    ],
    "partCategory": "Sensor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404290",
    "brandId": "brand-davey",
    "partNumber": "404290",
    "description": "Pressure Sensor",
    "aliases": [
      "404290",
      "404290"
    ],
    "partCategory": "Sensor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404308",
    "brandId": "brand-davey",
    "partNumber": "404308",
    "description": "Tank Bracket",
    "aliases": [
      "404308",
      "404308"
    ],
    "partCategory": "Tank",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404291",
    "brandId": "brand-davey",
    "partNumber": "404291",
    "description": "Pressure Tank (Incl Oring)",
    "aliases": [
      "404291",
      "404291"
    ],
    "partCategory": "Tank",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33467",
    "brandId": "brand-davey",
    "partNumber": "33467",
    "description": "Oring Kit",
    "aliases": [
      "33467",
      "33467"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33471",
    "brandId": "brand-davey",
    "partNumber": "33471",
    "description": "Screw Kit",
    "aliases": [
      "33471",
      "33471"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33473",
    "brandId": "brand-davey",
    "partNumber": "33473",
    "description": "Drain Plug (Incl Oring)",
    "aliases": [
      "33473",
      "33473"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33472",
    "brandId": "brand-davey",
    "partNumber": "33472",
    "description": "Impeller Nut & Washer Assy",
    "aliases": [
      "33472",
      "33472"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33466",
    "brandId": "brand-davey",
    "partNumber": "33466",
    "description": "Impeller",
    "aliases": [
      "33466",
      "33466"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404292",
    "brandId": "brand-davey",
    "partNumber": "404292",
    "description": "Wet End Internal Assembly",
    "aliases": [
      "404292",
      "404292"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33468",
    "brandId": "brand-davey",
    "partNumber": "33468",
    "description": "Mechanical Seal",
    "aliases": [
      "33468",
      "33468"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33470",
    "brandId": "brand-davey",
    "partNumber": "33470",
    "description": "Casing Oring (Pack 3)",
    "aliases": [
      "33470",
      "33470"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404294",
    "brandId": "brand-davey",
    "partNumber": "404294",
    "description": "Motor Bracket",
    "aliases": [
      "404294",
      "404294"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404295",
    "brandId": "brand-davey",
    "partNumber": "404295",
    "description": "Rotor Assembly (Incl Bearings)",
    "aliases": [
      "404295",
      "404295"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33474",
    "brandId": "brand-davey",
    "partNumber": "33474",
    "description": "Bearings Kit",
    "aliases": [
      "33474",
      "33474"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404297",
    "brandId": "brand-davey",
    "partNumber": "404297",
    "description": "Stator & Shell Assembly",
    "aliases": [
      "404297",
      "404297"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404299",
    "brandId": "brand-davey",
    "partNumber": "404299",
    "description": "Fan (Incl Circlip)",
    "aliases": [
      "404299",
      "404299"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404300",
    "brandId": "brand-davey",
    "partNumber": "404300",
    "description": "VSD Controller",
    "aliases": [
      "404300",
      "404300"
    ],
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-16427",
    "brandId": "brand-davey",
    "partNumber": "16427",
    "description": "Rear Cover - Upper",
    "aliases": [
      "16427",
      "16427"
    ],
    "partCategory": "Cover",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-16428",
    "brandId": "brand-davey",
    "partNumber": "16428",
    "description": "Rear Cover - Lower",
    "aliases": [
      "16428",
      "16428"
    ],
    "partCategory": "Cover",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-16429",
    "brandId": "brand-davey",
    "partNumber": "16429",
    "description": "Baseplate",
    "aliases": [
      "16429",
      "16429"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33482",
    "brandId": "brand-davey",
    "partNumber": "33482",
    "description": "Controller Decal",
    "aliases": [
      "33482",
      "33482"
    ],
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33469",
    "brandId": "brand-davey",
    "partNumber": "33469",
    "description": "Seal Kit",
    "aliases": [
      "33469",
      "33469"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-404304",
    "brandId": "brand-davey",
    "partNumber": "404304",
    "description": "Motor & VSD Controller",
    "aliases": [
      "404304",
      "404304"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-404248",
    "brandId": "brand-davey",
    "partNumber": "404248",
    "description": "Connection cable M to M",
    "aliases": [
      "404248",
      "404248"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  }
];

export const evoSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-evo-ed60-09-16426",
    "partId": "part-16426",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "1",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404259",
    "partId": "part-404259",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "2",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33475",
    "partId": "part-33475",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "3",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404287",
    "partId": "part-404287",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "4",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404289",
    "partId": "part-404289",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "5",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404290",
    "partId": "part-404290",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "6",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404308",
    "partId": "part-404308",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "7",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404291",
    "partId": "part-404291",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "8",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33467",
    "partId": "part-33467",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "9",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33471",
    "partId": "part-33471",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "10",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33473",
    "partId": "part-33473",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "11",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33472",
    "partId": "part-33472",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "12",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33466",
    "partId": "part-33466",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "13",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404292",
    "partId": "part-404292",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "14",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33468",
    "partId": "part-33468",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "15",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33470",
    "partId": "part-33470",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "16",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404294",
    "partId": "part-404294",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "17",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404295",
    "partId": "part-404295",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "18",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33474",
    "partId": "part-33474",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "19",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404297",
    "partId": "part-404297",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "20",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404299",
    "partId": "part-404299",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "21",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-404300",
    "partId": "part-404300",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "22",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-16427",
    "partId": "part-16427",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "23",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-16428",
    "partId": "part-16428",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "24",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-16429",
    "partId": "part-16429",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "25",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33482",
    "partId": "part-33482",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "diagramId": "diagram-evo",
    "diagramReference": "26",
    "compatibilityNotes": "ED60-09"
  },
  {
    "id": "compat-evo-ed60-09-33469",
    "partId": "part-33469",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "compatibilityNotes": "EvoDrive — requires verification"
  },
  {
    "id": "compat-evo-ed60-09-404304",
    "partId": "part-404304",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "compatibilityNotes": "EvoDrive — requires verification"
  },
  {
    "id": "compat-evo-ed60-09-404248",
    "partId": "part-404248",
    "familyId": "family-evodrive",
    "modelId": "model-ed60-09",
    "compatibilityNotes": "EvoDrive — requires verification"
  }
];
