import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
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
} from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const xpSeedFamily: PumpFamily = {
  id: "family-xp",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "XP Series",
  slug: "xp-series",
  description: "Compact pressure pumps with pressure switch control for small domestic systems.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_182&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_182&MP1=CE_182&MP=CE_182.cex#CE_182",
  identificationNotes: "Confirm model size (XP25/XP35/XP45) and tank option on the nameplate before ordering parts.",
};

export const xpSeedModels: PumpModel[] = [
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
];

export const xpSeedDiagram: Diagram = {
  id: "diagram-xp",
  familyId: xpSeedFamily.id,
  name: "XP Series Exploded View",
  imageUrl: XP_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: XP_SERIES_DIAGRAM_WIDTH,
  height: XP_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: XP_SERIES_DIAGRAM_SOURCE_URL,
};

export const xpSeedHotspots: DiagramHotspot[] = [
  {
    "id": "xp-ref-1",
    "diagramId": "diagram-xp",
    "reference": "1",
    "x": 0.3443875,
    "y": 0.8522234273318872,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-706",
      "part-777",
      "part-740"
    ]
  },
  {
    "id": "xp-ref-2",
    "diagramId": "diagram-xp",
    "reference": "2",
    "x": 0.4242875,
    "y": 0.8611930585683298,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11670-20sp"
    ]
  },
  {
    "id": "xp-ref-3",
    "diagramId": "diagram-xp",
    "reference": "3",
    "x": 0.4578125,
    "y": 0.8601409978308027,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-45446",
      "part-49108"
    ]
  },
  {
    "id": "xp-ref-4",
    "diagramId": "diagram-xp",
    "reference": "4",
    "x": 0.4779625,
    "y": 0.8606616052060738,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-48802sp"
    ]
  },
  {
    "id": "xp-ref-5",
    "diagramId": "diagram-xp",
    "reference": "5",
    "x": 0.5193875,
    "y": 0.8611930585683298,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11354bsp"
    ]
  },
  {
    "id": "xp-ref-6",
    "diagramId": "diagram-xp",
    "reference": "6",
    "x": 0.6163125,
    "y": 0.8622451193058568,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11253-1sp",
      "part-11253-3",
      "part-11253-2sp"
    ]
  },
  {
    "id": "xp-ref-7",
    "diagramId": "diagram-xp",
    "reference": "7",
    "x": 0.6382874999999999,
    "y": 0.8617136659436009,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11254-1",
      "part-11254-3",
      "part-11254-2"
    ]
  },
  {
    "id": "xp-ref-8",
    "diagramId": "diagram-xp",
    "reference": "8",
    "x": 0.6633000000000001,
    "y": 0.8617136659436009,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-45579"
    ]
  },
  {
    "id": "xp-ref-9",
    "diagramId": "diagram-xp",
    "reference": "9",
    "x": 0.6956125,
    "y": 0.8617136659436009,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-30805"
    ]
  },
  {
    "id": "xp-ref-10",
    "diagramId": "diagram-xp",
    "reference": "10",
    "x": 0.56265,
    "y": 0.7537201735357918,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11255-1r",
      "part-11255-2"
    ]
  },
  {
    "id": "xp-ref-11",
    "diagramId": "diagram-xp",
    "reference": "11",
    "x": 0.6772875,
    "y": 0.759587852494577,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11256"
    ]
  },
  {
    "id": "xp-ref-12",
    "diagramId": "diagram-xp",
    "reference": "12",
    "x": 0.7041250000000001,
    "y": 0.758470715835141,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31346"
    ]
  },
  {
    "id": "xp-ref-13",
    "diagramId": "diagram-xp",
    "reference": "13",
    "x": 0.5291250000000001,
    "y": 0.8278741865509762,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11252-16",
      "part-11252-17"
    ]
  },
  {
    "id": "xp-ref-14",
    "diagramId": "diagram-xp",
    "reference": "14",
    "x": 0.5279,
    "y": 0.7045010845986985,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-10209-204"
    ]
  },
  {
    "id": "xp-ref-15",
    "diagramId": "diagram-xp",
    "reference": "15",
    "x": 0.629775,
    "y": 0.7018546637744035,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31491d"
    ]
  },
  {
    "id": "xp-ref-15",
    "diagramId": "diagram-xp",
    "reference": "15",
    "x": 0.6273375,
    "y": 0.6229501084598699,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31491d"
    ]
  },
  {
    "id": "xp-ref-16",
    "diagramId": "diagram-xp",
    "reference": "16",
    "x": 0.629775,
    "y": 0.6568655097613882,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31300sp",
      "part-32029sp"
    ]
  },
  {
    "id": "xp-ref-17",
    "diagramId": "diagram-xp",
    "reference": "17",
    "x": 0.7181875000000001,
    "y": 0.5499132321041215,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-45527",
      "part-14828"
    ]
  },
  {
    "id": "xp-ref-18",
    "diagramId": "diagram-xp",
    "reference": "18",
    "x": 0.696825,
    "y": 0.5562472885032538,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-43765"
    ]
  },
  {
    "id": "xp-ref-19",
    "diagramId": "diagram-xp",
    "reference": "19",
    "x": 0.6035499999999999,
    "y": 0.6071149674620392,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31330sp",
      "part-31982sp"
    ]
  },
  {
    "id": "xp-ref-20",
    "diagramId": "diagram-xp",
    "reference": "20",
    "x": 0.32363749999999997,
    "y": 0.5567787418655098,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-45523"
    ]
  },
  {
    "id": "xp-ref-21",
    "diagramId": "diagram-xp",
    "reference": "21",
    "x": 0.1809375,
    "y": 0.5594793926247289,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11591-1"
    ]
  },
  {
    "id": "xp-ref-22",
    "diagramId": "diagram-xp",
    "reference": "22",
    "x": 0.1809375,
    "y": 0.5891106290672452,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31372sp"
    ]
  },
  {
    "id": "xp-ref-23",
    "diagramId": "diagram-xp",
    "reference": "23",
    "x": 0.19075,
    "y": 0.6399023861171367,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-11392-10"
    ]
  },
  {
    "id": "xp-ref-24",
    "diagramId": "diagram-xp",
    "reference": "24",
    "x": 0.19682499999999997,
    "y": 0.7008026030368765,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31269"
    ]
  },
  {
    "id": "xp-ref-24",
    "diagramId": "diagram-xp",
    "reference": "24",
    "x": 0.24623749999999997,
    "y": 0.4747722342733189,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31269"
    ]
  },
  {
    "id": "xp-ref-25",
    "diagramId": "diagram-xp",
    "reference": "25",
    "x": 0.3596625,
    "y": 0.7002711496746205,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31492"
    ]
  },
  {
    "id": "xp-ref-25",
    "diagramId": "diagram-xp",
    "reference": "25",
    "x": 0.4096125,
    "y": 0.47582429501084594,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-31492"
    ]
  },
  {
    "id": "xp-ref-26",
    "diagramId": "diagram-xp",
    "reference": "26",
    "x": 0.358375,
    "y": 0.6658351409978309,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-43061",
      "part-401487"
    ]
  },
  {
    "id": "xp-ref-26",
    "diagramId": "diagram-xp",
    "reference": "26",
    "x": 0.4096125,
    "y": 0.43980477223427333,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-43061",
      "part-401487"
    ]
  },
  {
    "id": "xp-ref-27",
    "diagramId": "diagram-xp",
    "reference": "27",
    "x": 0.5047125,
    "y": 0.40806941431670285,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-pc15xj"
    ]
  },
  {
    "id": "xp-ref-28",
    "diagramId": "diagram-xp",
    "reference": "28",
    "x": 0.5066125,
    "y": 0.4652060737527115,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-44992"
    ]
  },
  {
    "id": "xp-ref-28",
    "diagramId": "diagram-xp",
    "reference": "28",
    "x": 0.41942500000000005,
    "y": 0.6955206073752712,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-44992"
    ]
  },
  {
    "id": "xp-ref-29",
    "diagramId": "diagram-xp",
    "reference": "29",
    "x": 0.410225,
    "y": 0.39850325379609547,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-tt45"
    ]
  },
  {
    "id": "xp-ref-29",
    "diagramId": "diagram-xp",
    "reference": "29",
    "x": 0.5474375,
    "y": 0.606594360086768,
    "width": 0.017325,
    "height": 0.015032537960954447,
    "partIds": [
      "part-tt45"
    ]
  }
];

export const xpSeedParts: Part[] = [
  {
    "id": "part-706",
    "brandId": "brand-davey",
    "partNumber": "706",
    "description": "Motor - 0.35kW 220/1/50",
    "aliases": [
      "706",
      "706"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-777",
    "brandId": "brand-davey",
    "partNumber": "777",
    "description": "Motor - 0.58kW 240/1/50",
    "aliases": [
      "777",
      "777"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "verify",
    "illustrated": true
  },
  {
    "id": "part-740",
    "brandId": "brand-davey",
    "partNumber": "740",
    "description": "Motor - 0.58kW 220/1/50",
    "aliases": [
      "740",
      "740"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11670-20sp",
    "brandId": "brand-davey",
    "partNumber": "11670-20SP",
    "description": "Casing Assy - Rear c/w oring",
    "aliases": [
      "11670-20",
      "11670-20sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-45446",
    "brandId": "brand-davey",
    "partNumber": "45446",
    "description": "O-ring",
    "aliases": [
      "45446",
      "45446"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49108",
    "brandId": "brand-davey",
    "partNumber": "49108",
    "description": "O-ring - Encapsulated rear casing Post S/No 03084",
    "aliases": [
      "49108",
      "49108"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48802sp",
    "brandId": "brand-davey",
    "partNumber": "48802SP",
    "description": "Seal - Mechanical 1/2\"",
    "aliases": [
      "48802",
      "48802sp"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11354bsp",
    "brandId": "brand-davey",
    "partNumber": "11354BSP",
    "description": "Impeller",
    "aliases": [
      "11354B",
      "11354bsp"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11253-1sp",
    "brandId": "brand-davey",
    "partNumber": "11253-1SP",
    "description": "Venturi - Coverplate 72111",
    "aliases": [
      "11253-1",
      "11253-1sp"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11253-3",
    "brandId": "brand-davey",
    "partNumber": "11253-3",
    "description": "Venturi - Coverplate XP450T",
    "aliases": [
      "11253-3",
      "11253-3"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11253-2sp",
    "brandId": "brand-davey",
    "partNumber": "11253-2SP",
    "description": "Venturi - Coverplate All other models not specified",
    "aliases": [
      "11253-2",
      "11253-2sp"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11254-1",
    "brandId": "brand-davey",
    "partNumber": "11254-1",
    "description": "Jet - White 72111",
    "aliases": [
      "11254-1",
      "11254-1"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11254-3",
    "brandId": "brand-davey",
    "partNumber": "11254-3",
    "description": "Jet XP450T",
    "aliases": [
      "11254-3",
      "11254-3"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11254-2",
    "brandId": "brand-davey",
    "partNumber": "11254-2",
    "description": "Jet - Black All other models not specified",
    "aliases": [
      "11254-2",
      "11254-2"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-45579",
    "brandId": "brand-davey",
    "partNumber": "45579",
    "description": "O-ring",
    "aliases": [
      "45579",
      "45579"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-30805",
    "brandId": "brand-davey",
    "partNumber": "30805",
    "description": "Checkvalve Assy",
    "aliases": [
      "30805",
      "30805"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11255-1r",
    "brandId": "brand-davey",
    "partNumber": "11255-1R",
    "description": "Cap - Accumulator 72151PC 72161 72171",
    "aliases": [
      "11255-1R",
      "11255-1r"
    ],
    "partCategory": "Tank",
    "quantity": 1,
    "availability": "verify",
    "illustrated": true
  },
  {
    "id": "part-11255-2",
    "brandId": "brand-davey",
    "partNumber": "11255-2",
    "description": "Accumulator cap XP450T",
    "aliases": [
      "11255-2",
      "11255-2"
    ],
    "partCategory": "Tank",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11256",
    "brandId": "brand-davey",
    "partNumber": "11256",
    "description": "Diaphragm 72111 72181",
    "aliases": [
      "11256",
      "11256"
    ],
    "partCategory": "Tank",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31346",
    "brandId": "brand-davey",
    "partNumber": "31346",
    "description": "Cap - Accumulator assy XP350T 72111 72181",
    "aliases": [
      "31346",
      "31346"
    ],
    "partCategory": "Tank",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11252-16",
    "brandId": "brand-davey",
    "partNumber": "11252-16",
    "description": "Casing - Front",
    "aliases": [
      "11252-16",
      "11252-16"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11252-17",
    "brandId": "brand-davey",
    "partNumber": "11252-17",
    "description": "Casing - Front",
    "aliases": [
      "11252-17",
      "11252-17"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10209-204",
    "brandId": "brand-davey",
    "partNumber": "10209-204",
    "description": "Screw - Front case 44mm (pk4)",
    "aliases": [
      "10209-204",
      "10209-204"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31491d",
    "brandId": "brand-davey",
    "partNumber": "31491D",
    "description": "Kit - Connection P/switch",
    "aliases": [
      "31491D",
      "31491d"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31300sp",
    "brandId": "brand-davey",
    "partNumber": "31300SP",
    "description": "Switch - Pressure 140-280kPa 72111",
    "aliases": [
      "31300",
      "31300sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32029sp",
    "brandId": "brand-davey",
    "partNumber": "32029SP",
    "description": "Pressure Switch Assy - 140-280 LOP 72111/LOP only Vertical",
    "aliases": [
      "32029",
      "32029sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-45527",
    "brandId": "brand-davey",
    "partNumber": "45527",
    "description": "Tee piece - 1\"",
    "aliases": [
      "45527",
      "45527"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-14828",
    "brandId": "brand-davey",
    "partNumber": "14828",
    "description": "Tee Piece - Brass",
    "aliases": [
      "14828",
      "14828"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43765",
    "brandId": "brand-davey",
    "partNumber": "43765",
    "description": "Elbow - (brass)",
    "aliases": [
      "43765",
      "43765"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31330sp",
    "brandId": "brand-davey",
    "partNumber": "31330SP",
    "description": "Switch - Pressure 140-280kPa 72101 72171 72161",
    "aliases": [
      "31330",
      "31330sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31982sp",
    "brandId": "brand-davey",
    "partNumber": "31982SP",
    "description": "P/switch Assy LOP 140-280kPa 72101/LOP only Horizontal",
    "aliases": [
      "31982",
      "31982sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-45523",
    "brandId": "brand-davey",
    "partNumber": "45523",
    "description": "Checkvalve",
    "aliases": [
      "45523",
      "45523"
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
    "id": "part-31372sp",
    "brandId": "brand-davey",
    "partNumber": "31372SP",
    "description": "Hydrascan - Adjustable",
    "aliases": [
      "31372",
      "31372sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11392-10",
    "brandId": "brand-davey",
    "partNumber": "11392-10",
    "description": "Flow kohn",
    "aliases": [
      "11392-10",
      "11392-10"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31269",
    "brandId": "brand-davey",
    "partNumber": "31269",
    "description": "Cap & O-ring - Blanking",
    "aliases": [
      "31269",
      "31269"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31492",
    "brandId": "brand-davey",
    "partNumber": "31492",
    "description": "Kit - Adaptor XP350T XP450T 72181",
    "aliases": [
      "31492",
      "31492"
    ],
    "partCategory": "Adaptor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43061",
    "brandId": "brand-davey",
    "partNumber": "43061",
    "description": "O-ring - Torrium Pre S/N 08114",
    "aliases": [
      "43061",
      "43061"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-401487",
    "brandId": "brand-davey",
    "partNumber": "401487",
    "description": "O-ring - Torrium Post S/N 08114",
    "aliases": [
      "401487",
      "401487"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-pc15xj",
    "brandId": "brand-davey",
    "partNumber": "PC15XJ",
    "description": "Press Control",
    "aliases": [
      "PC15XJ",
      "pc15xj"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-44992",
    "brandId": "brand-davey",
    "partNumber": "44992",
    "description": "Socket - 1\"",
    "aliases": [
      "44992",
      "44992"
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
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32323",
    "brandId": "brand-davey",
    "partNumber": "32323",
    "description": "Checkvalve Assy - Torrium",
    "aliases": [
      "32323",
      "32323"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32693",
    "brandId": "brand-davey",
    "partNumber": "32693",
    "description": "Checkvalve Assy - Torrium 2",
    "aliases": [
      "32693",
      "32693"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32694",
    "brandId": "brand-davey",
    "partNumber": "32694",
    "description": "Priming Cap Assy - Torrium 2",
    "aliases": [
      "32694",
      "32694"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32518",
    "brandId": "brand-davey",
    "partNumber": "32518",
    "description": "Plate - Orifice 72101/LOP only Not Illustrated",
    "aliases": [
      "32518",
      "32518"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32519",
    "brandId": "brand-davey",
    "partNumber": "32519",
    "description": "Plate - Orifice 72111/LOP only Not Illustrated",
    "aliases": [
      "32519",
      "32519"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32574",
    "brandId": "brand-davey",
    "partNumber": "32574",
    "description": "Flange Assy - Presscontrol",
    "aliases": [
      "32574",
      "32574"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32754",
    "brandId": "brand-davey",
    "partNumber": "32754",
    "description": "Seal Kit",
    "aliases": [
      "32754",
      "32754"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-48871",
    "brandId": "brand-davey",
    "partNumber": "48871",
    "description": "Reducing Bush - XP25P2-1 Only - Not Illustrated",
    "aliases": [
      "48871",
      "48871"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-24002c",
    "brandId": "brand-davey",
    "partNumber": "24002C",
    "description": "Tank - 2lt Silver",
    "aliases": [
      "24002C",
      "24002c"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-24008p",
    "brandId": "brand-davey",
    "partNumber": "24008P",
    "description": "Pressure Tank - 8L",
    "aliases": [
      "24008P",
      "24008p"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  }
];

export const xpSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-xp25-706",
    "partId": "part-706",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "1",
    "compatibilityNotes": "XP25"
  },
  {
    "id": "compat-verify-777",
    "partId": "part-777",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "1",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-family-740",
    "partId": "part-740",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "1",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-11670-20sp",
    "partId": "part-11670-20sp",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "2",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-45446",
    "partId": "part-45446",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "3",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-49108",
    "partId": "part-49108",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "3",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-48802sp",
    "partId": "part-48802sp",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "4",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-11354bsp",
    "partId": "part-11354bsp",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "5",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp25-11253-1sp",
    "partId": "part-11253-1sp",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "6",
    "compatibilityNotes": "XP25"
  },
  {
    "id": "compat-xp45-11253-3",
    "partId": "part-11253-3",
    "familyId": "family-xp",
    "modelId": "model-xp45",
    "diagramId": "diagram-xp",
    "diagramReference": "6",
    "compatibilityNotes": "XP45"
  },
  {
    "id": "compat-family-11253-2sp",
    "partId": "part-11253-2sp",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "6",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp25-11254-1",
    "partId": "part-11254-1",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "7",
    "compatibilityNotes": "XP25"
  },
  {
    "id": "compat-xp45-11254-3",
    "partId": "part-11254-3",
    "familyId": "family-xp",
    "modelId": "model-xp45",
    "diagramId": "diagram-xp",
    "diagramReference": "7",
    "compatibilityNotes": "XP45"
  },
  {
    "id": "compat-family-11254-2",
    "partId": "part-11254-2",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "7",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-45579",
    "partId": "part-45579",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "8",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-30805",
    "partId": "part-30805",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "9",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-verify-11255-1r",
    "partId": "part-11255-1r",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "10",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-xp45-11255-2",
    "partId": "part-11255-2",
    "familyId": "family-xp",
    "modelId": "model-xp45",
    "diagramId": "diagram-xp",
    "diagramReference": "10",
    "compatibilityNotes": "XP45"
  },
  {
    "id": "compat-family-11256",
    "partId": "part-11256",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "11",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp35-31346",
    "partId": "part-31346",
    "familyId": "family-xp",
    "modelId": "model-xp35",
    "diagramId": "diagram-xp",
    "diagramReference": "12",
    "compatibilityNotes": "XP35"
  },
  {
    "id": "compat-family-11252-16",
    "partId": "part-11252-16",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "13",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-11252-17",
    "partId": "part-11252-17",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "13",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-10209-204",
    "partId": "part-10209-204",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "14",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp25-31491d",
    "partId": "part-31491d",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "15",
    "compatibilityNotes": "XP25 and XP35"
  },
  {
    "id": "compat-xp35-31491d",
    "partId": "part-31491d",
    "familyId": "family-xp",
    "modelId": "model-xp35",
    "diagramId": "diagram-xp",
    "diagramReference": "15",
    "compatibilityNotes": "XP25 and XP35"
  },
  {
    "id": "compat-xp25-31300sp",
    "partId": "part-31300sp",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "16",
    "compatibilityNotes": "XP25"
  },
  {
    "id": "compat-xp25-32029sp",
    "partId": "part-32029sp",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "16",
    "compatibilityNotes": "XP25"
  },
  {
    "id": "compat-family-45527",
    "partId": "part-45527",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "17",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp25-14828",
    "partId": "part-14828",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "17",
    "compatibilityNotes": "XP25, XP35 and XP45"
  },
  {
    "id": "compat-xp35-14828",
    "partId": "part-14828",
    "familyId": "family-xp",
    "modelId": "model-xp35",
    "diagramId": "diagram-xp",
    "diagramReference": "17",
    "compatibilityNotes": "XP25, XP35 and XP45"
  },
  {
    "id": "compat-xp45-14828",
    "partId": "part-14828",
    "familyId": "family-xp",
    "modelId": "model-xp45",
    "diagramId": "diagram-xp",
    "diagramReference": "17",
    "compatibilityNotes": "XP25, XP35 and XP45"
  },
  {
    "id": "compat-family-43765",
    "partId": "part-43765",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "18",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp25-31330sp",
    "partId": "part-31330sp",
    "familyId": "family-xp",
    "modelId": "model-xp25",
    "diagramId": "diagram-xp",
    "diagramReference": "19",
    "compatibilityNotes": "XP25 and XP35"
  },
  {
    "id": "compat-xp35-31330sp",
    "partId": "part-31330sp",
    "familyId": "family-xp",
    "modelId": "model-xp35",
    "diagramId": "diagram-xp",
    "diagramReference": "19",
    "compatibilityNotes": "XP25 and XP35"
  },
  {
    "id": "compat-xp35-31982sp",
    "partId": "part-31982sp",
    "familyId": "family-xp",
    "modelId": "model-xp35",
    "diagramId": "diagram-xp",
    "diagramReference": "19",
    "compatibilityNotes": "XP35"
  },
  {
    "id": "compat-family-45523",
    "partId": "part-45523",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "20",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-11591-1",
    "partId": "part-11591-1",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "21",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-31372sp",
    "partId": "part-31372sp",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "22",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-11392-10",
    "partId": "part-11392-10",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "23",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-31269",
    "partId": "part-31269",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "24",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-xp35-31492",
    "partId": "part-31492",
    "familyId": "family-xp",
    "modelId": "model-xp35",
    "diagramId": "diagram-xp",
    "diagramReference": "25",
    "compatibilityNotes": "XP35 and XP45"
  },
  {
    "id": "compat-xp45-31492",
    "partId": "part-31492",
    "familyId": "family-xp",
    "modelId": "model-xp45",
    "diagramId": "diagram-xp",
    "diagramReference": "25",
    "compatibilityNotes": "XP35 and XP45"
  },
  {
    "id": "compat-family-43061",
    "partId": "part-43061",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "26",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-401487",
    "partId": "part-401487",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "26",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-pc15xj",
    "partId": "part-pc15xj",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "27",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-44992",
    "partId": "part-44992",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "28",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-family-tt45",
    "partId": "part-tt45",
    "familyId": "family-xp",
    "diagramId": "diagram-xp",
    "diagramReference": "29",
    "compatibilityNotes": "XP Series — model not confirmed"
  },
  {
    "id": "compat-verify-32323",
    "partId": "part-32323",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32693",
    "partId": "part-32693",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32694",
    "partId": "part-32694",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32518",
    "partId": "part-32518",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32519",
    "partId": "part-32519",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32574",
    "partId": "part-32574",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32754",
    "partId": "part-32754",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-48871",
    "partId": "part-48871",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-24002c",
    "partId": "part-24002c",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-24008p",
    "partId": "part-24008p",
    "familyId": "family-xp",
    "compatibilityNotes": "Requires verification"
  }
];
