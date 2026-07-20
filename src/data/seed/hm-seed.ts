import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
  HM_SERIES_DIAGRAM_HEIGHT,
  HM_SERIES_DIAGRAM_PATH,
  HM_SERIES_DIAGRAM_SOURCE_URL,
  HM_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hm-series-diagram";
import { HM_SERIES_CURVE_IMAGE, HM_SERIES_PUMP_IMAGE } from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const hmSeedFamily: PumpFamily = {
  id: "family-hm",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "HM Series",
  slug: "hm-series",
  description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_248&PRF=4&PRNDS=CE_247&PRC=|R|CE_1|CE_111|CE_247|CE_248&MP1=CE_248&MP=CE_248.cex#CE_248",
  identificationNotes: "Confirm pump model, Torrium version and nameplate suffix before ordering parts.",
};

export const hmSeedModels: PumpModel[] = [
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
];

export const hmSeedDiagram: Diagram = {
  id: "diagram-hm",
  familyId: hmSeedFamily.id,
  name: "HM Series Exploded View",
  imageUrl: HM_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: HM_SERIES_DIAGRAM_WIDTH,
  height: HM_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: HM_SERIES_DIAGRAM_SOURCE_URL,
};

export const hmSeedHotspots: DiagramHotspot[] = [
  {
    "id": "hm-ref-1",
    "diagramId": "diagram-hm",
    "reference": "1",
    "x": 0.1733150684931507,
    "y": 0.77722,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13656-5sp",
      "part-13656-6sp",
      "part-13656-7sp",
      "part-13656-8sp"
    ]
  },
  {
    "id": "hm-ref-2",
    "diagramId": "diagram-hm",
    "reference": "2",
    "x": 0.21412328767123287,
    "y": 0.7888200000000001,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-400577sp"
    ]
  },
  {
    "id": "hm-ref-3",
    "diagramId": "diagram-hm",
    "reference": "3",
    "x": 0.3205890410958904,
    "y": 0.77062,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-448533"
    ]
  },
  {
    "id": "hm-ref-4",
    "diagramId": "diagram-hm",
    "reference": "4",
    "x": 0.37156164383561646,
    "y": 0.77062,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13661-1",
      "part-13674-1",
      "part-13670-1"
    ]
  },
  {
    "id": "hm-ref-5",
    "diagramId": "diagram-hm",
    "reference": "5",
    "x": 0.21753424657534248,
    "y": 0.93257,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-s34m06168"
    ]
  },
  {
    "id": "hm-ref-6",
    "diagramId": "diagram-hm",
    "reference": "6",
    "x": 0.33073972602739726,
    "y": 0.90695,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-33479"
    ]
  },
  {
    "id": "hm-ref-7",
    "diagramId": "diagram-hm",
    "reference": "7",
    "x": 0.4337945205479452,
    "y": 0.91686,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13678sp",
      "part-13676sp",
      "part-13672sp",
      "part-13668sp"
    ]
  },
  {
    "id": "hm-ref-7",
    "diagramId": "diagram-hm",
    "reference": "7",
    "x": 0.5561369863013699,
    "y": 0.91605,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13678sp",
      "part-13676sp",
      "part-13672sp",
      "part-13668sp"
    ]
  },
  {
    "id": "hm-ref-7",
    "diagramId": "diagram-hm",
    "reference": "7",
    "x": 0.6761780821917809,
    "y": 0.91605,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13678sp",
      "part-13676sp",
      "part-13672sp",
      "part-13668sp"
    ]
  },
  {
    "id": "hm-ref-8",
    "diagramId": "diagram-hm",
    "reference": "8",
    "x": 0.43720547945205485,
    "y": 0.79212,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-136653",
      "part-136803",
      "part-136813"
    ]
  },
  {
    "id": "hm-ref-8",
    "diagramId": "diagram-hm",
    "reference": "8",
    "x": 0.5595479452054795,
    "y": 0.79293,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-136653",
      "part-136803",
      "part-136813"
    ]
  },
  {
    "id": "hm-ref-8",
    "diagramId": "diagram-hm",
    "reference": "8",
    "x": 0.6761780821917809,
    "y": 0.79293,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-136653",
      "part-136803",
      "part-136813"
    ]
  },
  {
    "id": "hm-ref-9",
    "diagramId": "diagram-hm",
    "reference": "9",
    "x": 0.504054794520548,
    "y": 0.7714200000000001,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-32912",
      "part-32913",
      "part-32914"
    ]
  },
  {
    "id": "hm-ref-10",
    "diagramId": "diagram-hm",
    "reference": "10",
    "x": 0.6217808219178083,
    "y": 0.7723000000000001,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13662-2",
      "part-13673-2",
      "part-13669-2"
    ]
  },
  {
    "id": "hm-ref-11",
    "diagramId": "diagram-hm",
    "reference": "11",
    "x": 0.7384109589041097,
    "y": 0.7714200000000001,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13663",
      "part-13675",
      "part-13671"
    ]
  },
  {
    "id": "hm-ref-12",
    "diagramId": "diagram-hm",
    "reference": "12",
    "x": 0.7248356164383561,
    "y": 0.90452,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13696-1",
      "part-13696",
      "part-13696-2"
    ]
  },
  {
    "id": "hm-ref-13",
    "diagramId": "diagram-hm",
    "reference": "13",
    "x": 0.8336027397260274,
    "y": 0.93096,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13666",
      "part-13693"
    ]
  },
  {
    "id": "hm-ref-14",
    "diagramId": "diagram-hm",
    "reference": "14",
    "x": 0.8415479452054795,
    "y": 0.81357,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13667sp"
    ]
  },
  {
    "id": "hm-ref-15",
    "diagramId": "diagram-hm",
    "reference": "15",
    "x": 0.8618630136986303,
    "y": 0.90203,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-400558sp"
    ]
  },
  {
    "id": "hm-ref-16",
    "diagramId": "diagram-hm",
    "reference": "16",
    "x": 0.8947260273972603,
    "y": 0.77641,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13660sp"
    ]
  },
  {
    "id": "hm-ref-17",
    "diagramId": "diagram-hm",
    "reference": "17",
    "x": 0.06915068493150685,
    "y": 0.56813,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-32283sp",
      "part-32285sp",
      "part-32286sp",
      "part-32287sp",
      "part-32314sp",
      "part-32315",
      "part-32288sp",
      "part-11733-3",
      "part-11971",
      "part-11971-1",
      "part-48035",
      "part-404132sp",
      "part-49034m",
      "part-49034",
      "part-9544-1",
      "part-8573-5"
    ]
  },
  {
    "id": "hm-ref-17a",
    "diagramId": "diagram-hm",
    "reference": "17a",
    "x": 0.18578082191780823,
    "y": 0.426,
    "width": 0.04745205479452055,
    "height": 0.023059999999999997,
    "partIds": [
      "part-11733-3",
      "part-11971",
      "part-11971-1"
    ]
  },
  {
    "id": "hm-ref-17b",
    "diagramId": "diagram-hm",
    "reference": "17b",
    "x": 0.2685068493150685,
    "y": 0.42519000000000007,
    "width": 0.047287671232876714,
    "height": 0.023059999999999997,
    "partIds": [
      "part-48035",
      "part-404132sp"
    ]
  },
  {
    "id": "hm-ref-17c",
    "diagramId": "diagram-hm",
    "reference": "17c",
    "x": 0.3239178082191781,
    "y": 0.42519000000000007,
    "width": 0.04745205479452055,
    "height": 0.023059999999999997,
    "partIds": [
      "part-49034m"
    ]
  },
  {
    "id": "hm-ref-17d",
    "diagramId": "diagram-hm",
    "reference": "17d",
    "x": 0.37154794520547946,
    "y": 0.426,
    "width": 0.047287671232876714,
    "height": 0.023059999999999997,
    "partIds": [
      "part-49034"
    ]
  },
  {
    "id": "hm-ref-17e",
    "diagramId": "diagram-hm",
    "reference": "17e",
    "x": 0.26213698630136983,
    "y": 0.7017700000000001,
    "width": 0.052630136986301375,
    "height": 0.02684,
    "partIds": [
      "part-9544-1",
      "part-8573-5"
    ]
  },
  {
    "id": "hm-ref-18",
    "diagramId": "diagram-hm",
    "reference": "18",
    "x": 0.6886438356164384,
    "y": 0.51689,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-32391",
      "part-32392",
      "part-32393",
      "part-49034f",
      "part-13729",
      "part-47920",
      "part-11591-1",
      "part-48466",
      "part-400622",
      "part-48492"
    ]
  },
  {
    "id": "hm-ref-18a",
    "diagramId": "diagram-hm",
    "reference": "18a",
    "x": 0.5063698630136987,
    "y": 0.426,
    "width": 0.047287671232876714,
    "height": 0.023059999999999997,
    "partIds": [
      "part-49034f"
    ]
  },
  {
    "id": "hm-ref-18b",
    "diagramId": "diagram-hm",
    "reference": "18b",
    "x": 0.5595479452054795,
    "y": 0.42519000000000007,
    "width": 0.047287671232876714,
    "height": 0.023059999999999997,
    "partIds": [
      "part-13729",
      "part-47920"
    ]
  },
  {
    "id": "hm-ref-18c",
    "diagramId": "diagram-hm",
    "reference": "18c",
    "x": 0.6173561643835617,
    "y": 0.42849,
    "width": 0.047287671232876714,
    "height": 0.023059999999999997,
    "partIds": [
      "part-11591-1"
    ]
  },
  {
    "id": "hm-ref-18d",
    "diagramId": "diagram-hm",
    "reference": "18d",
    "x": 0.5335068493150685,
    "y": 0.60036,
    "width": 0.047287671232876714,
    "height": 0.023059999999999997,
    "partIds": [
      "part-48466",
      "part-400622"
    ]
  },
  {
    "id": "hm-ref-18e",
    "diagramId": "diagram-hm",
    "reference": "18e",
    "x": 0.5856027397260274,
    "y": 0.60036,
    "width": 0.04745205479452055,
    "height": 0.023059999999999997,
    "partIds": [
      "part-48492"
    ]
  },
  {
    "id": "hm-ref-19",
    "diagramId": "diagram-hm",
    "reference": "19",
    "x": 0.5368356164383562,
    "y": 0.645,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-47932",
      "part-48953",
      "part-49184"
    ]
  },
  {
    "id": "hm-ref-20",
    "diagramId": "diagram-hm",
    "reference": "20",
    "x": 0.5991643835616439,
    "y": 0.64662,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-47914",
      "part-48952",
      "part-403329"
    ]
  },
  {
    "id": "hm-ref-21",
    "diagramId": "diagram-hm",
    "reference": "21",
    "x": 0.8460684931506849,
    "y": 0.71688,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-32320-1sp"
    ]
  },
  {
    "id": "hm-ref-22",
    "diagramId": "diagram-hm",
    "reference": "22",
    "x": 0.7735890410958904,
    "y": 0.68714,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-tt45",
      "part-tt70"
    ]
  },
  {
    "id": "hm-ref-22",
    "diagramId": "diagram-hm",
    "reference": "22",
    "x": 0.7645342465753425,
    "y": 0.5235,
    "width": 0.03158904109589041,
    "height": 0.023059999999999997,
    "partIds": [
      "part-tt45",
      "part-tt70"
    ]
  }
];

export const hmSeedParts: Part[] = [
  {
    "id": "part-7049",
    "brandId": "brand-davey",
    "partNumber": "7049",
    "description": "Motor - 0.6kW 240V",
    "aliases": [
      "7049",
      "7049"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7050",
    "brandId": "brand-davey",
    "partNumber": "7050",
    "description": "Motor - 0.72kW 240V",
    "aliases": [
      "7050",
      "7050"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7051",
    "brandId": "brand-davey",
    "partNumber": "7051",
    "description": "Service motor - 1kW 240V 1 phase",
    "aliases": [
      "7051",
      "7051"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7052",
    "brandId": "brand-davey",
    "partNumber": "7052",
    "description": "Motor - 0.78kW 240V",
    "aliases": [
      "7052",
      "7052"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-844",
    "brandId": "brand-davey",
    "partNumber": "844",
    "description": "Motor - 1.3kW 240V",
    "aliases": [
      "844",
      "844"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-845",
    "brandId": "brand-davey",
    "partNumber": "845",
    "description": "Motor - 1.8kW 240V",
    "aliases": [
      "845",
      "845"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-851",
    "brandId": "brand-davey",
    "partNumber": "851",
    "description": "Motor - 2.5kW 240V",
    "aliases": [
      "851",
      "851"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7054",
    "brandId": "brand-davey",
    "partNumber": "7054",
    "description": "Motor - 0.6kW 415V",
    "aliases": [
      "7054",
      "7054"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7057",
    "brandId": "brand-davey",
    "partNumber": "7057",
    "description": "Motor - 0.72kW 415V",
    "aliases": [
      "7057",
      "7057"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7055",
    "brandId": "brand-davey",
    "partNumber": "7055",
    "description": "Service motor - 1.1kW 415V 3 phase",
    "aliases": [
      "7055",
      "7055"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-7053",
    "brandId": "brand-davey",
    "partNumber": "7053",
    "description": "Motor - 0.78kW 415V",
    "aliases": [
      "7053",
      "7053"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-852",
    "brandId": "brand-davey",
    "partNumber": "852",
    "description": "Motor - 1.3kW 415V",
    "aliases": [
      "852",
      "852"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-858",
    "brandId": "brand-davey",
    "partNumber": "858",
    "description": "Motor - 1.8kW 415V",
    "aliases": [
      "858",
      "858"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-869",
    "brandId": "brand-davey",
    "partNumber": "869",
    "description": "Motor - 1.9kW 415V",
    "aliases": [
      "869",
      "869"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-864",
    "brandId": "brand-davey",
    "partNumber": "864",
    "description": "Motor - 2.5kW 415V",
    "aliases": [
      "864",
      "864"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  },
  {
    "id": "part-13656-5sp",
    "brandId": "brand-davey",
    "partNumber": "13656-5SP",
    "description": "Casing - Front",
    "aliases": [
      "13656-5",
      "13656-5sp"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13656-6sp",
    "brandId": "brand-davey",
    "partNumber": "13656-6SP",
    "description": "Casing - Front",
    "aliases": [
      "13656-6",
      "13656-6sp"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13656-7sp",
    "brandId": "brand-davey",
    "partNumber": "13656-7SP",
    "description": "Casing - Front",
    "aliases": [
      "13656-7",
      "13656-7sp"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13656-8sp",
    "brandId": "brand-davey",
    "partNumber": "13656-8SP",
    "description": "Casing - Front",
    "aliases": [
      "13656-8",
      "13656-8sp"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-400577sp",
    "brandId": "brand-davey",
    "partNumber": "400577SP",
    "description": "Drain Plug & O-ring",
    "aliases": [
      "400577",
      "400577sp"
    ],
    "partCategory": "Seal",
    "quantity": 3,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-400577sp",
    "brandId": "brand-davey",
    "partNumber": "400577SP",
    "description": "Drain Plug & O-ring",
    "aliases": [
      "400577",
      "400577sp"
    ],
    "partCategory": "Seal",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-448533",
    "brandId": "brand-davey",
    "partNumber": "448533",
    "description": "O-ring - Casing",
    "aliases": [
      "448533",
      "448533"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13661-1",
    "brandId": "brand-davey",
    "partNumber": "13661-1",
    "description": "Stage body - 1st stage",
    "aliases": [
      "13661-1",
      "13661-1"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13674-1",
    "brandId": "brand-davey",
    "partNumber": "13674-1",
    "description": "Stage body - 1st stage",
    "aliases": [
      "13674-1",
      "13674-1"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13670-1",
    "brandId": "brand-davey",
    "partNumber": "13670-1",
    "description": "Stage body - 1st stage",
    "aliases": [
      "13670-1",
      "13670-1"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-s34m06168",
    "brandId": "brand-davey",
    "partNumber": "S34M06168",
    "description": "Screw - Casing (Pack of 8)",
    "aliases": [
      "S34M06168",
      "s34m06168"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33479",
    "brandId": "brand-davey",
    "partNumber": "33479",
    "description": "Impeller Nut Assembly",
    "aliases": [
      "33479",
      "33479"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13678sp",
    "brandId": "brand-davey",
    "partNumber": "13678SP",
    "description": "Impeller",
    "aliases": [
      "13678",
      "13678sp"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13676sp",
    "brandId": "brand-davey",
    "partNumber": "13676SP",
    "description": "Impeller",
    "aliases": [
      "13676",
      "13676sp"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13672sp",
    "brandId": "brand-davey",
    "partNumber": "13672SP",
    "description": "Impeller",
    "aliases": [
      "13672",
      "13672sp"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13668sp",
    "brandId": "brand-davey",
    "partNumber": "13668SP",
    "description": "Impeller",
    "aliases": [
      "13668",
      "13668sp"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-136653",
    "brandId": "brand-davey",
    "partNumber": "136653",
    "description": "Spacer - Impeller",
    "aliases": [
      "136653",
      "136653"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-136803",
    "brandId": "brand-davey",
    "partNumber": "136803",
    "description": "Spacer - Impeller",
    "aliases": [
      "136803",
      "136803"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-136813",
    "brandId": "brand-davey",
    "partNumber": "136813",
    "description": "Spacer - Impeller",
    "aliases": [
      "136813",
      "136813"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32912",
    "brandId": "brand-davey",
    "partNumber": "32912",
    "description": "Stage Body - 2nd stage with valve assy",
    "aliases": [
      "32912",
      "32912"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32913",
    "brandId": "brand-davey",
    "partNumber": "32913",
    "description": "Stage Body - 2nd stage with valve assy",
    "aliases": [
      "32913",
      "32913"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32914",
    "brandId": "brand-davey",
    "partNumber": "32914",
    "description": "Stage Body - 2nd stage with valve assy",
    "aliases": [
      "32914",
      "32914"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13662-2",
    "brandId": "brand-davey",
    "partNumber": "13662-2",
    "description": "Stage body - Inner stages",
    "aliases": [
      "13662-2",
      "13662-2"
    ],
    "partCategory": "Stage Body",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13673-2",
    "brandId": "brand-davey",
    "partNumber": "13673-2",
    "description": "Stage body - Inner stages",
    "aliases": [
      "13673-2",
      "13673-2"
    ],
    "partCategory": "Stage Body",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13669-2",
    "brandId": "brand-davey",
    "partNumber": "13669-2",
    "description": "Stage body - Inner stages",
    "aliases": [
      "13669-2",
      "13669-2"
    ],
    "partCategory": "Stage Body",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13663",
    "brandId": "brand-davey",
    "partNumber": "13663",
    "description": "Stage body - Final",
    "aliases": [
      "13663",
      "13663"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13675",
    "brandId": "brand-davey",
    "partNumber": "13675",
    "description": "Stage body - Final",
    "aliases": [
      "13675",
      "13675"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13671",
    "brandId": "brand-davey",
    "partNumber": "13671",
    "description": "Stage body - Final",
    "aliases": [
      "13671",
      "13671"
    ],
    "partCategory": "Stage Body",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13696-1",
    "brandId": "brand-davey",
    "partNumber": "13696-1",
    "description": "Spacer - Destage",
    "aliases": [
      "13696-1",
      "13696-1"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13696",
    "brandId": "brand-davey",
    "partNumber": "13696",
    "description": "Spacer - Destage",
    "aliases": [
      "13696",
      "13696"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13696-2",
    "brandId": "brand-davey",
    "partNumber": "13696-2",
    "description": "Spacer - Destage",
    "aliases": [
      "13696-2",
      "13696-2"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13666",
    "brandId": "brand-davey",
    "partNumber": "13666",
    "description": "Washer - Cup",
    "aliases": [
      "13666",
      "13666"
    ],
    "partCategory": "Part",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13693",
    "brandId": "brand-davey",
    "partNumber": "13693",
    "description": "Washer - Cup",
    "aliases": [
      "13693",
      "13693"
    ],
    "partCategory": "Part",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13667sp",
    "brandId": "brand-davey",
    "partNumber": "13667SP",
    "description": "Clip spring",
    "aliases": [
      "13667",
      "13667sp"
    ],
    "partCategory": "Part",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-400558sp",
    "brandId": "brand-davey",
    "partNumber": "400558SP",
    "description": "Seal - Mechanical",
    "aliases": [
      "400558",
      "400558sp"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13660sp",
    "brandId": "brand-davey",
    "partNumber": "13660SP",
    "description": "Backplate",
    "aliases": [
      "13660",
      "13660sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32283sp",
    "brandId": "brand-davey",
    "partNumber": "32283SP",
    "description": "Pressure switch assy 10A 250-400kPa",
    "aliases": [
      "32283",
      "32283sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32285sp",
    "brandId": "brand-davey",
    "partNumber": "32285SP",
    "description": "Pressure switch assy 10A 300-500kPa",
    "aliases": [
      "32285",
      "32285sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32286sp",
    "brandId": "brand-davey",
    "partNumber": "32286SP",
    "description": "Pressure switch assy 10A 350-620kPa",
    "aliases": [
      "32286",
      "32286sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32287sp",
    "brandId": "brand-davey",
    "partNumber": "32287SP",
    "description": "Pressure switch assy 10A 350-620kPa",
    "aliases": [
      "32287",
      "32287sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32314sp",
    "brandId": "brand-davey",
    "partNumber": "32314SP",
    "description": "Pressure switch assy 10A 300-500kPa",
    "aliases": [
      "32314",
      "32314sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32315",
    "brandId": "brand-davey",
    "partNumber": "32315",
    "description": "Pressure switch assy 10A 200-300kPa",
    "aliases": [
      "32315",
      "32315"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32288sp",
    "brandId": "brand-davey",
    "partNumber": "32288SP",
    "description": "Pressure switch assy 15A 250-400kPa",
    "aliases": [
      "32288",
      "32288sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11733-3",
    "brandId": "brand-davey",
    "partNumber": "11733-3",
    "description": "Loom HM60 Series & up to HM90-11P",
    "aliases": [
      "11733-3",
      "11733-3"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11971",
    "brandId": "brand-davey",
    "partNumber": "11971",
    "description": "Loom - P/switch assy",
    "aliases": [
      "11971",
      "11971"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11971-1",
    "brandId": "brand-davey",
    "partNumber": "11971-1",
    "description": "Loom - P/switch",
    "aliases": [
      "11971-1",
      "11971-1"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48035",
    "brandId": "brand-davey",
    "partNumber": "48035",
    "description": "Switch - Pressure 210-330 kPa HM270-19P only",
    "aliases": [
      "48035",
      "48035"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404132sp",
    "brandId": "brand-davey",
    "partNumber": "404132SP",
    "description": "Pressure Switch 260-450kpa, 38-65psi",
    "aliases": [
      "404132",
      "404132sp"
    ],
    "partCategory": "Pressure Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49034m",
    "brandId": "brand-davey",
    "partNumber": "49034M",
    "description": "Union - 1/4\" male",
    "aliases": [
      "49034M",
      "49034m"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49034",
    "brandId": "brand-davey",
    "partNumber": "49034",
    "description": "Union",
    "aliases": [
      "49034",
      "49034"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9544-1",
    "brandId": "brand-davey",
    "partNumber": "9544-1",
    "description": "Lead & 3 Pin Plug - 4850 HM160 series & HM270-25P",
    "aliases": [
      "9544-1",
      "9544-1"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8573-5",
    "brandId": "brand-davey",
    "partNumber": "8573-5",
    "description": "Lead & 3 Pin Plug - Sqd P/swtch All other models not specified",
    "aliases": [
      "8573-5",
      "8573-5"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32391",
    "brandId": "brand-davey",
    "partNumber": "32391",
    "description": "Tee piece assy HM60 & HM90 Series",
    "aliases": [
      "32391",
      "32391"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32392",
    "brandId": "brand-davey",
    "partNumber": "32392",
    "description": "Tee piece assy HM160 Series",
    "aliases": [
      "32392",
      "32392"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32393",
    "brandId": "brand-davey",
    "partNumber": "32393",
    "description": "Tee piece assy HM270 Series",
    "aliases": [
      "32393",
      "32393"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49034f",
    "brandId": "brand-davey",
    "partNumber": "49034F",
    "description": "Union - 1/4\" brass F",
    "aliases": [
      "49034F",
      "49034f"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13729",
    "brandId": "brand-davey",
    "partNumber": "13729",
    "description": "Connector HM270 Series",
    "aliases": [
      "13729",
      "13729"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-47920",
    "brandId": "brand-davey",
    "partNumber": "47920",
    "description": "Connector - 5 way bronze",
    "aliases": [
      "47920",
      "47920"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11591-1",
    "brandId": "brand-davey",
    "partNumber": "11591-1",
    "description": "Plug & O-ring - Priming",
    "aliases": [
      "11591-1",
      "11591-1"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48466",
    "brandId": "brand-davey",
    "partNumber": "48466",
    "description": "Reducer - 1\" F - 1.25\" M HM160 Series",
    "aliases": [
      "48466",
      "48466"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-400622",
    "brandId": "brand-davey",
    "partNumber": "400622",
    "description": "Reducing bush HM270 Series",
    "aliases": [
      "400622",
      "400622"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48492",
    "brandId": "brand-davey",
    "partNumber": "48492",
    "description": "Gauge - Backmount 1000kpa",
    "aliases": [
      "48492",
      "48492"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-47932",
    "brandId": "brand-davey",
    "partNumber": "47932",
    "description": "Nipple - Hex 11/4\" x11/4\" BSPM HM60 & HM90 Series",
    "aliases": [
      "47932",
      "47932"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48953",
    "brandId": "brand-davey",
    "partNumber": "48953",
    "description": "Nipple - Hex 1.5\" (suction) HM160 Series",
    "aliases": [
      "48953",
      "48953"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49184",
    "brandId": "brand-davey",
    "partNumber": "49184",
    "description": "Nipple - 50mm brass HM270 Series",
    "aliases": [
      "49184",
      "49184"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49537",
    "brandId": "brand-davey",
    "partNumber": "49537",
    "description": "Nipple - 1/4\" x 1/4\" BSPT brass",
    "aliases": [
      "49537",
      "49537"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-47914",
    "brandId": "brand-davey",
    "partNumber": "47914",
    "description": "Checkvalve 1.25\" (suction) HM60 & HM90 Series",
    "aliases": [
      "47914",
      "47914"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48952",
    "brandId": "brand-davey",
    "partNumber": "48952",
    "description": "Checkvalve - 1.5\" (suction) HM160 Series",
    "aliases": [
      "48952",
      "48952"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-403329",
    "brandId": "brand-davey",
    "partNumber": "403329",
    "description": "Checkvalve 2\" F/F",
    "aliases": [
      "403329",
      "403329"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32320-1sp",
    "brandId": "brand-davey",
    "partNumber": "32320-1SP",
    "description": "Coupling Assy",
    "aliases": [
      "32320-1",
      "32320-1sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-tt45",
    "brandId": "brand-davey",
    "partNumber": "TT45",
    "description": "Torrium 2 - 450kPa Max",
    "aliases": [
      "TT45",
      "tt45"
    ],
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-tt70",
    "brandId": "brand-davey",
    "partNumber": "TT70",
    "description": "Torrium 2 - 700kPa",
    "aliases": [
      "TT70",
      "tt70"
    ],
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-33485",
    "brandId": "brand-davey",
    "partNumber": "33485",
    "description": "Seal Kit",
    "aliases": [
      "33485",
      "33485"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-13551sp",
    "brandId": "brand-davey",
    "partNumber": "13551SP",
    "description": "Adaptor - Dynajet (Torrium) XJ50T XJ70T XJ90T",
    "aliases": [
      "13551",
      "13551sp"
    ],
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-13648",
    "brandId": "brand-davey",
    "partNumber": "13648",
    "description": "Slinger - Water",
    "aliases": [
      "13648",
      "13648"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-48724",
    "brandId": "brand-davey",
    "partNumber": "48724",
    "description": "Overload - Thermal",
    "aliases": [
      "48724",
      "48724"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  }
];

export const hmSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-hm60-7049",
    "partId": "part-7049",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm60-7050",
    "partId": "part-7050",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm60-7051",
    "partId": "part-7051",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-7051",
    "partId": "part-7051",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-7052",
    "partId": "part-7052",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm90-844",
    "partId": "part-844",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm160-845",
    "partId": "part-845",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-851",
    "partId": "part-851",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-7054",
    "partId": "part-7054",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm60-7057",
    "partId": "part-7057",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm60-7055",
    "partId": "part-7055",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-7055",
    "partId": "part-7055",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-7053",
    "partId": "part-7053",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm90-852",
    "partId": "part-852",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm160-858",
    "partId": "part-858",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-869",
    "partId": "part-869",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm270-864",
    "partId": "part-864",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-13656-5sp",
    "partId": "part-13656-5sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "1",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-13656-5sp",
    "partId": "part-13656-5sp",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "1",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm60-13656-6sp",
    "partId": "part-13656-6sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "1",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm160-13656-7sp",
    "partId": "part-13656-7sp",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "1",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-13656-8sp",
    "partId": "part-13656-8sp",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "1",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-400577sp",
    "partId": "part-400577sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "2",
    "compatibilityNotes": "HM60, HM90, HM160 and HM270"
  },
  {
    "id": "compat-hm90-400577sp",
    "partId": "part-400577sp",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "2",
    "compatibilityNotes": "HM60, HM90, HM160 and HM270"
  },
  {
    "id": "compat-hm160-400577sp",
    "partId": "part-400577sp",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "2",
    "compatibilityNotes": "HM60, HM90, HM160 and HM270"
  },
  {
    "id": "compat-hm270-400577sp",
    "partId": "part-400577sp",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "2",
    "compatibilityNotes": "HM60, HM90, HM160 and HM270"
  },
  {
    "id": "compat-hm160-400577sp",
    "partId": "part-400577sp",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "2",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-family-448533",
    "partId": "part-448533",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "3",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm60-13661-1",
    "partId": "part-13661-1",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "4",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-13661-1",
    "partId": "part-13661-1",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "4",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-13674-1",
    "partId": "part-13674-1",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "4",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-13670-1",
    "partId": "part-13670-1",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "4",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-family-s34m06168",
    "partId": "part-s34m06168",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "5",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-family-33479",
    "partId": "part-33479",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "6",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm60-13678sp",
    "partId": "part-13678sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "7",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm90-13676sp",
    "partId": "part-13676sp",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "7",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm160-13672sp",
    "partId": "part-13672sp",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "7",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-13668sp",
    "partId": "part-13668sp",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "7",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-136653",
    "partId": "part-136653",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "8",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm160-136803",
    "partId": "part-136803",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "8",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-136813",
    "partId": "part-136813",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "8",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-32912",
    "partId": "part-32912",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "9",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-32912",
    "partId": "part-32912",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "9",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-32913",
    "partId": "part-32913",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "9",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-32914",
    "partId": "part-32914",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "9",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-13662-2",
    "partId": "part-13662-2",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "10",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-13662-2",
    "partId": "part-13662-2",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "10",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-13673-2",
    "partId": "part-13673-2",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "10",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-13669-2",
    "partId": "part-13669-2",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "10",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-13663",
    "partId": "part-13663",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "11",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-13663",
    "partId": "part-13663",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "11",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-13675",
    "partId": "part-13675",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "11",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-13671",
    "partId": "part-13671",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "11",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-13696-1",
    "partId": "part-13696-1",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "12",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-13696-1",
    "partId": "part-13696-1",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "12",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-13696",
    "partId": "part-13696",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "12",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-13696-2",
    "partId": "part-13696-2",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "12",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-13666",
    "partId": "part-13666",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "13",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-13666",
    "partId": "part-13666",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "13",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-13693",
    "partId": "part-13693",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "13",
    "compatibilityNotes": "HM160 and HM270"
  },
  {
    "id": "compat-hm270-13693",
    "partId": "part-13693",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "13",
    "compatibilityNotes": "HM160 and HM270"
  },
  {
    "id": "compat-family-13667sp",
    "partId": "part-13667sp",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "14",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-family-400558sp",
    "partId": "part-400558sp",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "15",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-family-13660sp",
    "partId": "part-13660sp",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "16",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm60-32283sp",
    "partId": "part-32283sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-32283sp",
    "partId": "part-32283sp",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm60-32285sp",
    "partId": "part-32285sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-32285sp",
    "partId": "part-32285sp",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm60-32286sp",
    "partId": "part-32286sp",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm90-32287sp",
    "partId": "part-32287sp",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm160-32314sp",
    "partId": "part-32314sp",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-32315",
    "partId": "part-32315",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm270-32288sp",
    "partId": "part-32288sp",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "17",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-hm60-11733-3",
    "partId": "part-11733-3",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "17a",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-11733-3",
    "partId": "part-11733-3",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "17a",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-11971",
    "partId": "part-11971",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "17a",
    "compatibilityNotes": "HM90"
  },
  {
    "id": "compat-hm160-11971-1",
    "partId": "part-11971-1",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "17a",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-48035",
    "partId": "part-48035",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "17b",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-family-404132sp",
    "partId": "part-404132sp",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "17b",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-family-49034m",
    "partId": "part-49034m",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "17c",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-family-49034",
    "partId": "part-49034",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "17d",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm160-9544-1",
    "partId": "part-9544-1",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "17e",
    "compatibilityNotes": "HM160 and HM270"
  },
  {
    "id": "compat-hm270-9544-1",
    "partId": "part-9544-1",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "17e",
    "compatibilityNotes": "HM160 and HM270"
  },
  {
    "id": "compat-family-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "17e",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm60-32391",
    "partId": "part-32391",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "18",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-32391",
    "partId": "part-32391",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "18",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-32392",
    "partId": "part-32392",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "18",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-32393",
    "partId": "part-32393",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "18",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-family-49034f",
    "partId": "part-49034f",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "18a",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm270-13729",
    "partId": "part-13729",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "18b",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-family-47920",
    "partId": "part-47920",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "18b",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-family-11591-1",
    "partId": "part-11591-1",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "18c",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm160-48466",
    "partId": "part-48466",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "18d",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-400622",
    "partId": "part-400622",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "18d",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-family-48492",
    "partId": "part-48492",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "18e",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm60-47932",
    "partId": "part-47932",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "19",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-47932",
    "partId": "part-47932",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "19",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-48953",
    "partId": "part-48953",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "19",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-49184",
    "partId": "part-49184",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "19",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-verify-49537",
    "partId": "part-49537",
    "familyId": "family-hm",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-hm60-47914",
    "partId": "part-47914",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "20",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm90-47914",
    "partId": "part-47914",
    "familyId": "family-hm",
    "modelId": "model-hm90",
    "diagramId": "diagram-hm",
    "diagramReference": "20",
    "compatibilityNotes": "HM60 and HM90"
  },
  {
    "id": "compat-hm160-48952",
    "partId": "part-48952",
    "familyId": "family-hm",
    "modelId": "model-hm160",
    "diagramId": "diagram-hm",
    "diagramReference": "20",
    "compatibilityNotes": "HM160"
  },
  {
    "id": "compat-hm270-403329",
    "partId": "part-403329",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "20",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-family-32320-1sp",
    "partId": "part-32320-1sp",
    "familyId": "family-hm",
    "diagramId": "diagram-hm",
    "diagramReference": "21",
    "compatibilityNotes": "HM Series — model not confirmed"
  },
  {
    "id": "compat-hm60-tt45",
    "partId": "part-tt45",
    "familyId": "family-hm",
    "modelId": "model-hm60",
    "diagramId": "diagram-hm",
    "diagramReference": "22",
    "compatibilityNotes": "HM60"
  },
  {
    "id": "compat-hm270-tt70",
    "partId": "part-tt70",
    "familyId": "family-hm",
    "modelId": "model-hm270",
    "diagramId": "diagram-hm",
    "diagramReference": "22",
    "compatibilityNotes": "HM270"
  },
  {
    "id": "compat-verify-33485",
    "partId": "part-33485",
    "familyId": "family-hm",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-13551sp",
    "partId": "part-13551sp",
    "familyId": "family-hm",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-13648",
    "partId": "part-13648",
    "familyId": "family-hm",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-48724",
    "partId": "part-48724",
    "familyId": "family-hm",
    "compatibilityNotes": "Requires verification"
  }
];
