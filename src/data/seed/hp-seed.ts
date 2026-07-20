import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
  HP_SERIES_DIAGRAM_HEIGHT,
  HP_SERIES_DIAGRAM_PATH,
  HP_SERIES_DIAGRAM_SOURCE_URL,
  HP_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hp-series-diagram";
import { HP_SERIES_CURVE_IMAGE, HP_SERIES_PUMP_IMAGE } from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const hpSeedFamily: PumpFamily = {
  id: "family-hp",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "HP Series",
  slug: "hp-series",
  description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_188&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_188&MP1=CE_188&MP=CE_188.cex#CE_188",
  identificationNotes: "Confirm pump model, Torrium version and nameplate suffix before ordering parts.",
};

export const hpSeedModels: PumpModel[] = [
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
];

export const hpSeedDiagram: Diagram = {
  id: "diagram-hp",
  familyId: hpSeedFamily.id,
  name: "HP Series Exploded View",
  imageUrl: HP_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: HP_SERIES_DIAGRAM_WIDTH,
  height: HP_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: HP_SERIES_DIAGRAM_SOURCE_URL,
};

export const hpSeedHotspots: DiagramHotspot[] = [
  {
    "id": "hp-ref-1",
    "diagramId": "diagram-hp",
    "reference": "1",
    "x": 0.4127625,
    "y": 0.44840785169029446,
    "width": 0.0318,
    "height": 0.027742639040348967,
    "partIds": [
      "part-7000",
      "part-7001",
      "part-7064",
      "part-7065"
    ]
  },
  {
    "id": "hp-ref-2",
    "diagramId": "diagram-hp",
    "reference": "2",
    "x": 0.143225,
    "y": 0.9416139585605234,
    "width": 0.031575,
    "height": 0.027546346782988007,
    "partIds": [
      "part-14406-20"
    ]
  },
  {
    "id": "hp-ref-3",
    "diagramId": "diagram-hp",
    "reference": "3",
    "x": 0.208825,
    "y": 0.6060850599781897,
    "width": 0.0318,
    "height": 0.027546346782988007,
    "partIds": [
      "part-12252sp",
      "part-12252-1sp"
    ]
  },
  {
    "id": "hp-ref-4",
    "diagramId": "diagram-hp",
    "reference": "4",
    "x": 0.2771,
    "y": 0.6489531079607415,
    "width": 0.0318,
    "height": 0.027742639040348967,
    "partIds": [
      "part-48802sp"
    ]
  },
  {
    "id": "hp-ref-5",
    "diagramId": "diagram-hp",
    "reference": "5",
    "x": 0.290225,
    "y": 0.9280370774263904,
    "width": 0.031575,
    "height": 0.027546346782988007,
    "partIds": [
      "part-11448"
    ]
  },
  {
    "id": "hp-ref-6",
    "diagramId": "diagram-hp",
    "reference": "6",
    "x": 0.3273625,
    "y": 0.6505016357688114,
    "width": 0.031575,
    "height": 0.027546346782988007,
    "partIds": [
      "part-12889sp",
      "part-12890sp",
      "part-12891sp"
    ]
  },
  {
    "id": "hp-ref-7",
    "diagramId": "diagram-hp",
    "reference": "7",
    "x": 0.3618375,
    "y": 0.8865321701199564,
    "width": 0.0318,
    "height": 0.027546346782988007,
    "partIds": [
      "part-12548-10"
    ]
  },
  {
    "id": "hp-ref-8",
    "diagramId": "diagram-hp",
    "reference": "8",
    "x": 0.3791875,
    "y": 0.6293565976008724,
    "width": 0.031575,
    "height": 0.027742639040348967,
    "partIds": [
      "part-128066"
    ]
  },
  {
    "id": "hp-ref-9",
    "diagramId": "diagram-hp",
    "reference": "9",
    "x": 0.41366249999999993,
    "y": 0.9280370774263904,
    "width": 0.0318,
    "height": 0.027546346782988007,
    "partIds": [
      "part-10963-10"
    ]
  },
  {
    "id": "hp-ref-10",
    "diagramId": "diagram-hp",
    "reference": "10",
    "x": 0.44835,
    "y": 0.6406106870229007,
    "width": 0.031575,
    "height": 0.027742639040348967,
    "partIds": [
      "part-12883-1"
    ]
  },
  {
    "id": "hp-ref-11",
    "diagramId": "diagram-hp",
    "reference": "11",
    "x": 0.5684375,
    "y": 0.8917775354416576,
    "width": 0.0318,
    "height": 0.027742639040348967,
    "partIds": [
      "part-491076"
    ]
  },
  {
    "id": "hp-ref-12",
    "diagramId": "diagram-hp",
    "reference": "12",
    "x": 0.5537624999999999,
    "y": 0.6512758996728463,
    "width": 0.031575,
    "height": 0.027546346782988007,
    "partIds": [
      "part-40021"
    ]
  },
  {
    "id": "hp-ref-13",
    "diagramId": "diagram-hp",
    "reference": "13",
    "x": 0.6549625,
    "y": 0.632464558342421,
    "width": 0.031575,
    "height": 0.027546346782988007,
    "partIds": [
      "part-42998"
    ]
  },
  {
    "id": "hp-ref-14",
    "diagramId": "diagram-hp",
    "reference": "14",
    "x": 0.6505124999999999,
    "y": 0.9468593238822246,
    "width": 0.0318,
    "height": 0.027546346782988007,
    "partIds": [
      "part-12797-1"
    ]
  },
  {
    "id": "hp-ref-15",
    "diagramId": "diagram-hp",
    "reference": "15",
    "x": 0.7319,
    "y": 0.9468593238822246,
    "width": 0.031575,
    "height": 0.027546346782988007,
    "partIds": [
      "part-12782d"
    ]
  },
  {
    "id": "hp-ref-16",
    "diagramId": "diagram-hp",
    "reference": "16",
    "x": 0.7612625,
    "y": 0.6270338058887678,
    "width": 0.031575,
    "height": 0.027742639040348967,
    "partIds": [
      "part-11091"
    ]
  },
  {
    "id": "hp-ref-17",
    "diagramId": "diagram-hp",
    "reference": "17",
    "x": 0.8112999999999999,
    "y": 0.9429770992366412,
    "width": 0.0318,
    "height": 0.027742639040348967,
    "partIds": [
      "part-45031"
    ]
  },
  {
    "id": "hp-ref-18",
    "diagramId": "diagram-hp",
    "reference": "18",
    "x": 0.8442125,
    "y": 0.6225736095965103,
    "width": 0.031575,
    "height": 0.027742639040348967,
    "partIds": [
      "part-11682",
      "part-11682-1"
    ]
  },
  {
    "id": "hp-ref-19",
    "diagramId": "diagram-hp",
    "reference": "19",
    "x": 0.6807500000000001,
    "y": 0.4951472191930207,
    "width": 0.0318,
    "height": 0.027742639040348967,
    "partIds": [
      "part-31269"
    ]
  },
  {
    "id": "hp-ref-20",
    "diagramId": "diagram-hp",
    "reference": "20",
    "x": 0.8277499999999999,
    "y": 0.5682660850599782,
    "width": 0.0318,
    "height": 0.027742639040348967,
    "partIds": [
      "part-32320-1sp"
    ]
  },
  {
    "id": "hp-ref-21",
    "diagramId": "diagram-hp",
    "reference": "21",
    "x": 0.725675,
    "y": 0.4650817884405671,
    "width": 0.0318,
    "height": 0.027546346782988007,
    "partIds": [
      "part-401487"
    ]
  },
  {
    "id": "hp-ref-22",
    "diagramId": "diagram-hp",
    "reference": "22",
    "x": 0.5381999999999999,
    "y": 0.49748091603053435,
    "width": 0.0318,
    "height": 0.027546346782988007,
    "partIds": [
      "part-tt45"
    ]
  }
];

export const hpSeedParts: Part[] = [
  {
    "id": "part-7000",
    "brandId": "brand-davey",
    "partNumber": "7000",
    "description": "Motor - 0.58kW 220/1/50",
    "aliases": [
      "7000",
      "7000"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-7001",
    "brandId": "brand-davey",
    "partNumber": "7001",
    "description": "Motor - 0.80kW 220/1/50",
    "aliases": [
      "7001",
      "7001"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-7064",
    "brandId": "brand-davey",
    "partNumber": "7064",
    "description": "Motor - 0.58kW 220/1/50",
    "aliases": [
      "7064",
      "7064"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-7065",
    "brandId": "brand-davey",
    "partNumber": "7065",
    "description": "Motor - 0.80kW 220/1/50",
    "aliases": [
      "7065",
      "7065"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-14406-20",
    "brandId": "brand-davey",
    "partNumber": "14406-20",
    "description": "Yoke",
    "aliases": [
      "14406-20",
      "14406-20"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12252sp",
    "brandId": "brand-davey",
    "partNumber": "12252SP",
    "description": "Casing Assy & Spacers",
    "aliases": [
      "12252",
      "12252sp"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12252-1sp",
    "brandId": "brand-davey",
    "partNumber": "12252-1SP",
    "description": "Casing Assy incl Yoke",
    "aliases": [
      "12252-1",
      "12252-1sp"
    ],
    "partCategory": "Casing",
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
    "id": "part-11448",
    "brandId": "brand-davey",
    "partNumber": "11448",
    "description": "Diffuser",
    "aliases": [
      "11448",
      "11448"
    ],
    "partCategory": "Diffuser",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12889sp",
    "brandId": "brand-davey",
    "partNumber": "12889SP",
    "description": "Impeller HP45-05",
    "aliases": [
      "12889",
      "12889sp"
    ],
    "partCategory": "Impeller",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12890sp",
    "brandId": "brand-davey",
    "partNumber": "12890SP",
    "description": "Impeller",
    "aliases": [
      "12890",
      "12890sp"
    ],
    "partCategory": "Impeller",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12891sp",
    "brandId": "brand-davey",
    "partNumber": "12891SP",
    "description": "Impeller HP85-08",
    "aliases": [
      "12891",
      "12891sp"
    ],
    "partCategory": "Impeller",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12548-10",
    "brandId": "brand-davey",
    "partNumber": "12548-10",
    "description": "Ring - Wear",
    "aliases": [
      "12548-10",
      "12548-10"
    ],
    "partCategory": "Part",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-128066",
    "brandId": "brand-davey",
    "partNumber": "128066",
    "description": "Spacer - 2 stage (pk6)",
    "aliases": [
      "128066",
      "128066"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10963-10",
    "brandId": "brand-davey",
    "partNumber": "10963-10",
    "description": "Blanking Ring",
    "aliases": [
      "10963-10",
      "10963-10"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12883-1",
    "brandId": "brand-davey",
    "partNumber": "12883-1",
    "description": "Diffuser Assy",
    "aliases": [
      "12883-1",
      "12883-1"
    ],
    "partCategory": "Diffuser",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-491076",
    "brandId": "brand-davey",
    "partNumber": "491076",
    "description": "Nut - M8 purlin s/s (pk6)",
    "aliases": [
      "491076",
      "491076"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-40021",
    "brandId": "brand-davey",
    "partNumber": "40021",
    "description": "O-ring - Diffuser",
    "aliases": [
      "40021",
      "40021"
    ],
    "partCategory": "Diffuser",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-42998",
    "brandId": "brand-davey",
    "partNumber": "42998",
    "description": "O-ring - Casing",
    "aliases": [
      "42998",
      "42998"
    ],
    "partCategory": "Casing",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12797-1",
    "brandId": "brand-davey",
    "partNumber": "12797-1",
    "description": "Ring adaptor",
    "aliases": [
      "12797-1",
      "12797-1"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12782d",
    "brandId": "brand-davey",
    "partNumber": "12782D",
    "description": "Cover - Suction",
    "aliases": [
      "12782D",
      "12782d"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11091",
    "brandId": "brand-davey",
    "partNumber": "11091-1",
    "description": "Priming Plug & O-ring",
    "aliases": [
      "11091-1",
      "11091-1"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-45031",
    "brandId": "brand-davey",
    "partNumber": "45031",
    "description": "Cap screw & nut",
    "aliases": [
      "45031",
      "45031"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11682",
    "brandId": "brand-davey",
    "partNumber": "11682",
    "description": "V Band Assy - Hvy Duty 7.5",
    "aliases": [
      "11682",
      "11682"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11682-1",
    "brandId": "brand-davey",
    "partNumber": "11682-1",
    "description": "V Band Assy - Hvy Duty 10",
    "aliases": [
      "11682-1",
      "11682-1"
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
    "id": "part-401487",
    "brandId": "brand-davey",
    "partNumber": "401487",
    "description": "O-ring - Torrium Post S/N 08114",
    "aliases": [
      "401487",
      "401487"
    ],
    "partCategory": "Controller",
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
    "id": "part-32323",
    "brandId": "brand-davey",
    "partNumber": "32323",
    "description": "Checkvalve Assy - Torrium",
    "aliases": [
      "32323",
      "32323"
    ],
    "partCategory": "Controller",
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
    "partCategory": "Controller",
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
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-w35m10026",
    "brandId": "brand-davey",
    "partNumber": "W35M10026",
    "description": "Washer - s/s (pk6)",
    "aliases": [
      "W35M10026",
      "w35m10026"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32753",
    "brandId": "brand-davey",
    "partNumber": "32753",
    "description": "Seal Kit HP Series",
    "aliases": [
      "32753",
      "32753"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32579",
    "brandId": "brand-davey",
    "partNumber": "32579",
    "description": "Wet End Kit - HP45-05 Not Illustrated",
    "aliases": [
      "32579",
      "32579"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-pcsj15",
    "brandId": "brand-davey",
    "partNumber": "PCSJ15",
    "description": "Pressure controller - 1.5 bar silver",
    "aliases": [
      "PCSJ15",
      "pcsj15"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32832",
    "brandId": "brand-davey",
    "partNumber": "32832",
    "description": "HP45 & HP65 Upgrade Kit",
    "aliases": [
      "32832",
      "32832"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32909",
    "brandId": "brand-davey",
    "partNumber": "32909",
    "description": "HP85 Upgrade Kit",
    "aliases": [
      "32909",
      "32909"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  }
];

export const hpSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-hp45-7000",
    "partId": "part-7000",
    "familyId": "family-hp",
    "modelId": "model-hp45",
    "diagramId": "diagram-hp",
    "diagramReference": "1",
    "compatibilityNotes": "HP45 and HP65"
  },
  {
    "id": "compat-hp65-7000",
    "partId": "part-7000",
    "familyId": "family-hp",
    "modelId": "model-hp65",
    "diagramId": "diagram-hp",
    "diagramReference": "1",
    "compatibilityNotes": "HP45 and HP65"
  },
  {
    "id": "compat-hp85-7001",
    "partId": "part-7001",
    "familyId": "family-hp",
    "modelId": "model-hp85",
    "diagramId": "diagram-hp",
    "diagramReference": "1",
    "compatibilityNotes": "HP85"
  },
  {
    "id": "compat-hp45-7064",
    "partId": "part-7064",
    "familyId": "family-hp",
    "modelId": "model-hp45",
    "diagramId": "diagram-hp",
    "diagramReference": "1",
    "compatibilityNotes": "HP45 and HP65"
  },
  {
    "id": "compat-hp65-7064",
    "partId": "part-7064",
    "familyId": "family-hp",
    "modelId": "model-hp65",
    "diagramId": "diagram-hp",
    "diagramReference": "1",
    "compatibilityNotes": "HP45 and HP65"
  },
  {
    "id": "compat-hp85-7065",
    "partId": "part-7065",
    "familyId": "family-hp",
    "modelId": "model-hp85",
    "diagramId": "diagram-hp",
    "diagramReference": "1",
    "compatibilityNotes": "HP85"
  },
  {
    "id": "compat-family-14406-20",
    "partId": "part-14406-20",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "2",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-12252sp",
    "partId": "part-12252sp",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "3",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-12252-1sp",
    "partId": "part-12252-1sp",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "3",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-48802sp",
    "partId": "part-48802sp",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "4",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-11448",
    "partId": "part-11448",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "5",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-hp45-12889sp",
    "partId": "part-12889sp",
    "familyId": "family-hp",
    "modelId": "model-hp45",
    "diagramId": "diagram-hp",
    "diagramReference": "6",
    "compatibilityNotes": "HP45"
  },
  {
    "id": "compat-hp65-12890sp",
    "partId": "part-12890sp",
    "familyId": "family-hp",
    "modelId": "model-hp65",
    "diagramId": "diagram-hp",
    "diagramReference": "6",
    "compatibilityNotes": "HP65"
  },
  {
    "id": "compat-hp85-12891sp",
    "partId": "part-12891sp",
    "familyId": "family-hp",
    "modelId": "model-hp85",
    "diagramId": "diagram-hp",
    "diagramReference": "6",
    "compatibilityNotes": "HP85"
  },
  {
    "id": "compat-family-12548-10",
    "partId": "part-12548-10",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "7",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-128066",
    "partId": "part-128066",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "8",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-10963-10",
    "partId": "part-10963-10",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "9",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-12883-1",
    "partId": "part-12883-1",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "10",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-491076",
    "partId": "part-491076",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "11",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-40021",
    "partId": "part-40021",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "12",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-42998",
    "partId": "part-42998",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "13",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-12797-1",
    "partId": "part-12797-1",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "14",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-12782d",
    "partId": "part-12782d",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "15",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-11091",
    "partId": "part-11091",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "16",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-45031",
    "partId": "part-45031",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "17",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-11682",
    "partId": "part-11682",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "18",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-11682-1",
    "partId": "part-11682-1",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "18",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-31269",
    "partId": "part-31269",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "19",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-32320-1sp",
    "partId": "part-32320-1sp",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "20",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-401487",
    "partId": "part-401487",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "21",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-family-tt45",
    "partId": "part-tt45",
    "familyId": "family-hp",
    "diagramId": "diagram-hp",
    "diagramReference": "22",
    "compatibilityNotes": "HP Series — model not confirmed"
  },
  {
    "id": "compat-verify-32323",
    "partId": "part-32323",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32693",
    "partId": "part-32693",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32694",
    "partId": "part-32694",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-w35m10026",
    "partId": "part-w35m10026",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32753",
    "partId": "part-32753",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32579",
    "partId": "part-32579",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-pcsj15",
    "partId": "part-pcsj15",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32832",
    "partId": "part-32832",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32909",
    "partId": "part-32909",
    "familyId": "family-hp",
    "compatibilityNotes": "Requires verification"
  }
];
