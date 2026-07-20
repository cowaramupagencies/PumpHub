import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
  SDW_SERIES_DIAGRAM_HEIGHT,
  SDW_SERIES_DIAGRAM_PATH,
  SDW_SERIES_DIAGRAM_SOURCE_URL,
  SDW_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/sdw-series-diagram";
import {
  DEEP_WELL_CURVE_PDF,
  SHALLOW_WELL_CURVE_PDF,
  SDW_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const sdwSeedFamily: PumpFamily = {
  id: "family-shallow-well",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "Shallow/Deep Well Jets",
  slug: "shallow-well",
  description: "Jet pumps for shallow wells, deep wells, sand spears and water transfer.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_201&PRF=4&PRNDS=CE_200&PRC=|R|CE_1|CE_111|CE_200|CE_201&MP1=CE_201&MP=CE_201.cex#CE_201",
  identificationNotes: "Confirm shallow (S) or deep (D) model and size (95, 125 or 165) on the nameplate before ordering parts.",
};

export const sdwSeedModels: PumpModel[] = [
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
];

export const sdwSeedDiagram: Diagram = {
  id: "diagram-sdw",
  familyId: sdwSeedFamily.id,
  name: "Shallow/Deep Well Exploded View",
  imageUrl: SDW_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: SDW_SERIES_DIAGRAM_WIDTH,
  height: SDW_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: SDW_SERIES_DIAGRAM_SOURCE_URL,
};

export const sdwSeedHotspots: DiagramHotspot[] = [
  {
    "id": "sdw-ref-1",
    "diagramId": "diagram-sdw",
    "reference": "1",
    "x": 0.47375,
    "y": 0.31641237113402065,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-800",
      "part-807",
      "part-859"
    ]
  },
  {
    "id": "sdw-ref-2",
    "diagramId": "diagram-sdw",
    "reference": "2",
    "x": 0.17505000000000004,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-31383"
    ]
  },
  {
    "id": "sdw-ref-3",
    "diagramId": "diagram-sdw",
    "reference": "3",
    "x": 0.223275,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-11971"
    ]
  },
  {
    "id": "sdw-ref-4",
    "diagramId": "diagram-sdw",
    "reference": "4",
    "x": 0.28040000000000004,
    "y": 0.4103814432989691,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-404131sp",
      "part-404130sp"
    ]
  },
  {
    "id": "sdw-ref-5",
    "diagramId": "diagram-sdw",
    "reference": "5",
    "x": 0.322875,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-31382d"
    ]
  },
  {
    "id": "sdw-ref-6",
    "diagramId": "diagram-sdw",
    "reference": "6",
    "x": 0.395175,
    "y": 0.4108144329896907,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-w21100610"
    ]
  },
  {
    "id": "sdw-ref-6",
    "diagramId": "diagram-sdw",
    "reference": "6",
    "x": 0.1189625,
    "y": 0.8799381443298969,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-w21100610"
    ]
  },
  {
    "id": "sdw-ref-6",
    "diagramId": "diagram-sdw",
    "reference": "6",
    "x": 0.5644625,
    "y": 0.9188247422680412,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-w21100610"
    ]
  },
  {
    "id": "sdw-ref-7",
    "diagramId": "diagram-sdw",
    "reference": "7",
    "x": 0.4167125,
    "y": 0.4095154639175258,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-n041010"
    ]
  },
  {
    "id": "sdw-ref-7",
    "diagramId": "diagram-sdw",
    "reference": "7",
    "x": 0.1184375,
    "y": 0.9179690721649484,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-n041010"
    ]
  },
  {
    "id": "sdw-ref-7",
    "diagramId": "diagram-sdw",
    "reference": "7",
    "x": 0.5231125,
    "y": 0.8989175257731958,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-n041010"
    ]
  },
  {
    "id": "sdw-ref-8",
    "diagramId": "diagram-sdw",
    "reference": "8",
    "x": 0.4407875,
    "y": 0.4103814432989691,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-12098sp",
      "part-8890-2sp"
    ]
  },
  {
    "id": "sdw-ref-9",
    "diagramId": "diagram-sdw",
    "reference": "9",
    "x": 0.470175,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-49090"
    ]
  },
  {
    "id": "sdw-ref-10",
    "diagramId": "diagram-sdw",
    "reference": "10",
    "x": 0.49896250000000003,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9665sp",
      "part-9447"
    ]
  },
  {
    "id": "sdw-ref-10a",
    "diagramId": "diagram-sdw",
    "reference": "10a",
    "x": 0.3853125,
    "y": 0.5129072164948454,
    "width": 0.02495,
    "height": 0.02041237113402062,
    "partIds": [
      "part-9447"
    ]
  },
  {
    "id": "sdw-ref-11",
    "diagramId": "diagram-sdw",
    "reference": "11",
    "x": 0.5294000000000001,
    "y": 0.4095154639175258,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-43067"
    ]
  },
  {
    "id": "sdw-ref-12",
    "diagramId": "diagram-sdw",
    "reference": "12",
    "x": 0.558175,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10291sp",
      "part-31035sp"
    ]
  },
  {
    "id": "sdw-ref-12",
    "diagramId": "diagram-sdw",
    "reference": "12",
    "x": 0.403025,
    "y": 0.7991237113402062,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10291sp",
      "part-31035sp"
    ]
  },
  {
    "id": "sdw-ref-13",
    "diagramId": "diagram-sdw",
    "reference": "13",
    "x": 0.5901875000000001,
    "y": 0.40994845360824744,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-404365"
    ]
  },
  {
    "id": "sdw-ref-14",
    "diagramId": "diagram-sdw",
    "reference": "14",
    "x": 0.6194875000000001,
    "y": 0.4768865979381443,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": []
  },
  {
    "id": "sdw-ref-15",
    "diagramId": "diagram-sdw",
    "reference": "15",
    "x": 0.6205375,
    "y": 0.4955051546391752,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": []
  },
  {
    "id": "sdw-ref-16",
    "diagramId": "diagram-sdw",
    "reference": "16",
    "x": 0.38732500000000003,
    "y": 0.534762886597938,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10046-34"
    ]
  },
  {
    "id": "sdw-ref-17",
    "diagramId": "diagram-sdw",
    "reference": "17",
    "x": 0.3868,
    "y": 0.5516597938144329,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10046-24"
    ]
  },
  {
    "id": "sdw-ref-18",
    "diagramId": "diagram-sdw",
    "reference": "18",
    "x": 0.5262625,
    "y": 0.501979381443299,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-103244"
    ]
  },
  {
    "id": "sdw-ref-19",
    "diagramId": "diagram-sdw",
    "reference": "19",
    "x": 0.6469499999999999,
    "y": 0.46789690721649485,
    "width": 0.18735,
    "height": 0.2744948453608248,
    "partIds": [
      "part-32768",
      "part-32770",
      "part-32769",
      "part-32771",
      "part-43473",
      "part-9210-1",
      "part-43402",
      "part-47863",
      "part-48801sp"
    ]
  },
  {
    "id": "sdw-ref-20",
    "diagramId": "diagram-sdw",
    "reference": "20",
    "x": 0.7542375,
    "y": 0.7222680412371133,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9243",
      "part-9243-2sp"
    ]
  },
  {
    "id": "sdw-ref-21",
    "diagramId": "diagram-sdw",
    "reference": "21",
    "x": 0.6111125,
    "y": 0.7218350515463917,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9855-3sp",
      "part-10218sp"
    ]
  },
  {
    "id": "sdw-ref-22",
    "diagramId": "diagram-sdw",
    "reference": "22",
    "x": 0.5566125000000001,
    "y": 0.7218350515463917,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9796sp"
    ]
  },
  {
    "id": "sdw-ref-23",
    "diagramId": "diagram-sdw",
    "reference": "23",
    "x": 0.5320125,
    "y": 0.7222680412371133,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-96376"
    ]
  },
  {
    "id": "sdw-ref-24",
    "diagramId": "diagram-sdw",
    "reference": "24",
    "x": 0.5041875,
    "y": 0.722701030927835,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-43596"
    ]
  },
  {
    "id": "sdw-ref-25",
    "diagramId": "diagram-sdw",
    "reference": "25",
    "x": 0.46285000000000004,
    "y": 0.722701030927835,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-31498"
    ]
  },
  {
    "id": "sdw-ref-26",
    "diagramId": "diagram-sdw",
    "reference": "26",
    "x": 0.43346250000000003,
    "y": 0.722701030927835,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10292sp"
    ]
  },
  {
    "id": "sdw-ref-27",
    "diagramId": "diagram-sdw",
    "reference": "27",
    "x": 0.3988375,
    "y": 0.722701030927835,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-102416",
      "part-10046-16"
    ]
  },
  {
    "id": "sdw-ref-28",
    "diagramId": "diagram-sdw",
    "reference": "28",
    "x": 0.485875,
    "y": 0.7132061855670102,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": []
  },
  {
    "id": "sdw-ref-29",
    "diagramId": "diagram-sdw",
    "reference": "29",
    "x": 0.492675,
    "y": 0.6881134020618556,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10353sp",
      "part-12078"
    ]
  },
  {
    "id": "sdw-ref-29a",
    "diagramId": "diagram-sdw",
    "reference": "29a",
    "x": 0.35129999999999995,
    "y": 0.7198247422680413,
    "width": 0.02495,
    "height": 0.02041237113402062,
    "partIds": [
      "part-12078"
    ]
  },
  {
    "id": "sdw-ref-30",
    "diagramId": "diagram-sdw",
    "reference": "30",
    "x": 0.8244374999999999,
    "y": 0.9188247422680412,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10112"
    ]
  },
  {
    "id": "sdw-ref-31",
    "diagramId": "diagram-sdw",
    "reference": "31",
    "x": 0.77255,
    "y": 0.9192577319587628,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9439"
    ]
  },
  {
    "id": "sdw-ref-32",
    "diagramId": "diagram-sdw",
    "reference": "32",
    "x": 0.7201374999999999,
    "y": 0.9192577319587628,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-43067"
    ]
  },
  {
    "id": "sdw-ref-33",
    "diagramId": "diagram-sdw",
    "reference": "33",
    "x": 0.6840249999999999,
    "y": 0.9179690721649484,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9952-36",
      "part-9952-33",
      "part-9952-38",
      "part-9952-41",
      "part-9952-43",
      "part-9952-47"
    ]
  },
  {
    "id": "sdw-ref-34",
    "diagramId": "diagram-sdw",
    "reference": "34",
    "x": 0.6310875,
    "y": 0.9196907216494844,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-8816-8",
      "part-8816-7",
      "part-8816-5",
      "part-8816-9",
      "part-8816-3",
      "part-8816-6"
    ]
  },
  {
    "id": "sdw-ref-35",
    "diagramId": "diagram-sdw",
    "reference": "35",
    "x": 0.610075,
    "y": 0.9188247422680412,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10113"
    ]
  },
  {
    "id": "sdw-ref-36",
    "diagramId": "diagram-sdw",
    "reference": "36",
    "x": 0.5839,
    "y": 0.9188247422680412,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9446sp"
    ]
  },
  {
    "id": "sdw-ref-37",
    "diagramId": "diagram-sdw",
    "reference": "37",
    "x": 0.26051250000000004,
    "y": 0.9114226804123711,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10220sp"
    ]
  },
  {
    "id": "sdw-ref-38",
    "diagramId": "diagram-sdw",
    "reference": "38",
    "x": 0.3165875,
    "y": 0.9101340206185566,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-9448"
    ]
  },
  {
    "id": "sdw-ref-39",
    "diagramId": "diagram-sdw",
    "reference": "39",
    "x": 0.23740000000000003,
    "y": 0.9101340206185566,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10224"
    ]
  },
  {
    "id": "sdw-ref-40",
    "diagramId": "diagram-sdw",
    "reference": "40",
    "x": 0.15777499999999997,
    "y": 0.8012783505154639,
    "width": 0.019875,
    "height": 0.016391752577319587,
    "partIds": [
      "part-10222",
      "part-10221"
    ]
  }
];

export const sdwSeedParts: Part[] = [
  {
    "id": "part-800",
    "brandId": "brand-davey",
    "partNumber": "800",
    "description": "Motor - 1.2kW 220/1/50",
    "aliases": [
      "800",
      "800"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-807",
    "brandId": "brand-davey",
    "partNumber": "807",
    "description": "Motor - 1.8kW 220/1/50",
    "aliases": [
      "807",
      "807"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-859",
    "brandId": "brand-davey",
    "partNumber": "859",
    "description": "Motor - 1.8kW 415/3/50 MEPS",
    "aliases": [
      "859",
      "859"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31383",
    "brandId": "brand-davey",
    "partNumber": "31383",
    "description": "Bracket Assy - P/switch",
    "aliases": [
      "31383",
      "31383"
    ],
    "partCategory": "Switch",
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
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404131sp",
    "brandId": "brand-davey",
    "partNumber": "404131SP",
    "description": "Pressure Switch 260-380kpa, 38-55psi",
    "aliases": [
      "404131",
      "404131sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404130sp",
    "brandId": "brand-davey",
    "partNumber": "404130SP",
    "description": "Pressure Switch 207-345kpa, 30-50psi",
    "aliases": [
      "404130",
      "404130sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31382d",
    "brandId": "brand-davey",
    "partNumber": "31382D",
    "description": "Tube Assy - P/switch TEFC",
    "aliases": [
      "31382D",
      "31382d"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-w21100610",
    "brandId": "brand-davey",
    "partNumber": "W21100610",
    "description": "Washer - Spring (pk10)",
    "aliases": [
      "W21100610",
      "w21100610"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-n041010",
    "brandId": "brand-davey",
    "partNumber": "N041010",
    "description": "Nut - (pk10)",
    "aliases": [
      "N041010",
      "n041010"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12098sp",
    "brandId": "brand-davey",
    "partNumber": "12098SP",
    "description": "Plug & O-ring - 1\" priming For pressure gauge",
    "aliases": [
      "12098",
      "12098sp"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8890-2sp",
    "brandId": "brand-davey",
    "partNumber": "8890-2SP",
    "description": "Plug & O-ring - Priming",
    "aliases": [
      "8890-2",
      "8890-2sp"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49090",
    "brandId": "brand-davey",
    "partNumber": "49090",
    "description": "Gauge - Pressure 1000kPa btm/mt.",
    "aliases": [
      "49090",
      "49090"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9665sp",
    "brandId": "brand-davey",
    "partNumber": "9665SP",
    "description": "Cover - Outlet",
    "aliases": [
      "9665",
      "9665sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9447",
    "brandId": "brand-davey",
    "partNumber": "9447",
    "description": "Gasket - Outlet",
    "aliases": [
      "9447",
      "9447"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43067",
    "brandId": "brand-davey",
    "partNumber": "43067",
    "description": "O-ring",
    "aliases": [
      "43067",
      "43067"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10291sp",
    "brandId": "brand-davey",
    "partNumber": "10291SP",
    "description": "Tee - Discharge Shallow Well",
    "aliases": [
      "10291",
      "10291sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31035sp",
    "brandId": "brand-davey",
    "partNumber": "31035SP",
    "description": "A.D.R. Valve assy - Deep well",
    "aliases": [
      "31035",
      "31035sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-404365",
    "brandId": "brand-davey",
    "partNumber": "404365",
    "description": "Plug .25\" BSP (Pack of 5)",
    "aliases": [
      "404365",
      "404365"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10046-34",
    "brandId": "brand-davey",
    "partNumber": "10046-34",
    "description": "Stud - (pk4)",
    "aliases": [
      "10046-34",
      "10046-34"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10046-24",
    "brandId": "brand-davey",
    "partNumber": "10046-24",
    "description": "Stud - (pk4)",
    "aliases": [
      "10046-24",
      "10046-24"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-103244",
    "brandId": "brand-davey",
    "partNumber": "103244",
    "description": "Stud - (pk4)",
    "aliases": [
      "103244",
      "103244"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32768",
    "brandId": "brand-davey",
    "partNumber": "32768",
    "description": "Seal Kit Shallow Well -0/-1",
    "aliases": [
      "32768",
      "32768"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32770",
    "brandId": "brand-davey",
    "partNumber": "32770",
    "description": "Seal Kit Deepwell -0/-1",
    "aliases": [
      "32770",
      "32770"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43473",
    "brandId": "brand-davey",
    "partNumber": "43473",
    "description": "O-ring - Sleeve/impeller",
    "aliases": [
      "43473",
      "43473"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9210-1",
    "brandId": "brand-davey",
    "partNumber": "9210-1",
    "description": "Sleeve - Shaft s/s",
    "aliases": [
      "9210-1",
      "9210-1"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43402",
    "brandId": "brand-davey",
    "partNumber": "43402",
    "description": "O-ring - Casing",
    "aliases": [
      "43402",
      "43402"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-47863",
    "brandId": "brand-davey",
    "partNumber": "47863",
    "description": "Seal - Mechanical 5/8\"",
    "aliases": [
      "47863",
      "47863"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32769",
    "brandId": "brand-davey",
    "partNumber": "32769",
    "description": "Seal Kit Shallow Well -2",
    "aliases": [
      "32769",
      "32769"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32771",
    "brandId": "brand-davey",
    "partNumber": "32771",
    "description": "Seal Kit Deepwell -2",
    "aliases": [
      "32771",
      "32771"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-48801sp",
    "brandId": "brand-davey",
    "partNumber": "48801SP",
    "description": "Seal - Mechanical 5/8\"",
    "aliases": [
      "48801",
      "48801sp"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9243",
    "brandId": "brand-davey",
    "partNumber": "9243",
    "description": "Backplate",
    "aliases": [
      "9243",
      "9243"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9243-2sp",
    "brandId": "brand-davey",
    "partNumber": "9243-2SP",
    "description": "Backplate",
    "aliases": [
      "9243-2",
      "9243-2sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9855-3sp",
    "brandId": "brand-davey",
    "partNumber": "9855-3SP",
    "description": "Impeller Assy 095S 095D",
    "aliases": [
      "9855-3",
      "9855-3sp"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10218sp",
    "brandId": "brand-davey",
    "partNumber": "10218SP",
    "description": "Impeller Assy 125S 125D 165S 165D",
    "aliases": [
      "10218",
      "10218sp"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9796sp",
    "brandId": "brand-davey",
    "partNumber": "9796SP",
    "description": "Cover - Front",
    "aliases": [
      "9796",
      "9796sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-96376",
    "brandId": "brand-davey",
    "partNumber": "96376",
    "description": "Screw - (pk6)",
    "aliases": [
      "96376",
      "96376"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43596",
    "brandId": "brand-davey",
    "partNumber": "43596",
    "description": "O-ring - Diffuser",
    "aliases": [
      "43596",
      "43596"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31498",
    "brandId": "brand-davey",
    "partNumber": "31498",
    "description": "Kit - Bolt S/W & D/W",
    "aliases": [
      "31498",
      "31498"
    ],
    "partCategory": "Part",
    "quantity": 4,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10292sp",
    "brandId": "brand-davey",
    "partNumber": "10292SP",
    "description": "Casing - Incl. studs",
    "aliases": [
      "10292",
      "10292sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-102416",
    "brandId": "brand-davey",
    "partNumber": "102416",
    "description": "Stud - Shallow Well (pk6)",
    "aliases": [
      "102416",
      "102416"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10046-16",
    "brandId": "brand-davey",
    "partNumber": "10046-16",
    "description": "Stud - Deep Well (pk6)",
    "aliases": [
      "10046-16",
      "10046-16"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10353sp",
    "brandId": "brand-davey",
    "partNumber": "10353SP",
    "description": "Base",
    "aliases": [
      "10353",
      "10353sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12078",
    "brandId": "brand-davey",
    "partNumber": "12078",
    "description": "Support",
    "aliases": [
      "12078",
      "12078"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10112",
    "brandId": "brand-davey",
    "partNumber": "10112",
    "description": "Gasket - Jet Housing S/W",
    "aliases": [
      "10112",
      "10112"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9439",
    "brandId": "brand-davey",
    "partNumber": "9439",
    "description": "Housing - S/W press pump",
    "aliases": [
      "9439",
      "9439"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9952-36",
    "brandId": "brand-davey",
    "partNumber": "9952-36",
    "description": "Venturi - Green",
    "aliases": [
      "9952-36",
      "9952-36"
    ],
    "partCategory": "Venturi",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9952-33",
    "brandId": "brand-davey",
    "partNumber": "9952-33",
    "description": "Venturi - White",
    "aliases": [
      "9952-33",
      "9952-33"
    ],
    "partCategory": "Venturi",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9952-38",
    "brandId": "brand-davey",
    "partNumber": "9952-38",
    "description": "Venturi - Brown",
    "aliases": [
      "9952-38",
      "9952-38"
    ],
    "partCategory": "Venturi",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9952-41",
    "brandId": "brand-davey",
    "partNumber": "9952-41",
    "description": "Venturi - Black",
    "aliases": [
      "9952-41",
      "9952-41"
    ],
    "partCategory": "Venturi",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9952-43",
    "brandId": "brand-davey",
    "partNumber": "9952-43",
    "description": "Venturi - Red",
    "aliases": [
      "9952-43",
      "9952-43"
    ],
    "partCategory": "Venturi",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9952-47",
    "brandId": "brand-davey",
    "partNumber": "9952-47",
    "description": "Venturi - Yellow",
    "aliases": [
      "9952-47",
      "9952-47"
    ],
    "partCategory": "Venturi",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8816-8",
    "brandId": "brand-davey",
    "partNumber": "8816-8",
    "description": "Jet - Brown",
    "aliases": [
      "8816-8",
      "8816-8"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8816-7",
    "brandId": "brand-davey",
    "partNumber": "8816-7",
    "description": "Jet - Black",
    "aliases": [
      "8816-7",
      "8816-7"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8816-5",
    "brandId": "brand-davey",
    "partNumber": "8816-5",
    "description": "Jet - Green",
    "aliases": [
      "8816-5",
      "8816-5"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8816-9",
    "brandId": "brand-davey",
    "partNumber": "8816-9",
    "description": "Jet - Yellow",
    "aliases": [
      "8816-9",
      "8816-9"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8816-3",
    "brandId": "brand-davey",
    "partNumber": "8816-3",
    "description": "Jet - White",
    "aliases": [
      "8816-3",
      "8816-3"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8816-6",
    "brandId": "brand-davey",
    "partNumber": "8816-6",
    "description": "Jet - Red",
    "aliases": [
      "8816-6",
      "8816-6"
    ],
    "partCategory": "Jet",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10113",
    "brandId": "brand-davey",
    "partNumber": "10113",
    "description": "Gasket suction cover S/W",
    "aliases": [
      "10113",
      "10113"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9446sp",
    "brandId": "brand-davey",
    "partNumber": "9446SP",
    "description": "Cover - Suction S/W",
    "aliases": [
      "9446",
      "9446sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10220sp",
    "brandId": "brand-davey",
    "partNumber": "10220SP",
    "description": "Cover - Suction D/W",
    "aliases": [
      "10220",
      "10220sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9448",
    "brandId": "brand-davey",
    "partNumber": "9448",
    "description": "Gasket - Suction cover",
    "aliases": [
      "9448",
      "9448"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10224",
    "brandId": "brand-davey",
    "partNumber": "10224",
    "description": "Elbow - 1\" BSP M/F",
    "aliases": [
      "10224",
      "10224"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10222",
    "brandId": "brand-davey",
    "partNumber": "10222",
    "description": "Elbow - 1.5\" Poly (4\" injector)",
    "aliases": [
      "10222",
      "10222"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-10221",
    "brandId": "brand-davey",
    "partNumber": "10221",
    "description": "Elbow - 2\" Poly (5\" injector)",
    "aliases": [
      "10221",
      "10221"
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
    "availability": "verify",
    "illustrated": false
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
    "availability": "verify",
    "illustrated": false
  }
];

export const sdwSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-sdw-95s-800",
    "partId": "part-800",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "95S and 95D"
  },
  {
    "id": "compat-sdw-95d-800",
    "partId": "part-800",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "95S and 95D"
  },
  {
    "id": "compat-sdw-125s-807",
    "partId": "part-807",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-807",
    "partId": "part-807",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-807",
    "partId": "part-807",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-807",
    "partId": "part-807",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-859",
    "partId": "part-859",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-859",
    "partId": "part-859",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-859",
    "partId": "part-859",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-859",
    "partId": "part-859",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "1",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-31383",
    "partId": "part-31383",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "2",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-31383",
    "partId": "part-31383",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "2",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-31383",
    "partId": "part-31383",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "2",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-31383",
    "partId": "part-31383",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "2",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-31383",
    "partId": "part-31383",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "2",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-31383",
    "partId": "part-31383",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "2",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-11971",
    "partId": "part-11971",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "3",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-11971",
    "partId": "part-11971",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "3",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-11971",
    "partId": "part-11971",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "3",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-11971",
    "partId": "part-11971",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "3",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-11971",
    "partId": "part-11971",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "3",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-11971",
    "partId": "part-11971",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "3",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-404131sp",
    "partId": "part-404131sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "4",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-404131sp",
    "partId": "part-404131sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "4",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-404131sp",
    "partId": "part-404131sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "4",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95d-404130sp",
    "partId": "part-404130sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "4",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-404130sp",
    "partId": "part-404130sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "4",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-404130sp",
    "partId": "part-404130sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "4",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95s-31382d",
    "partId": "part-31382d",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "5",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-31382d",
    "partId": "part-31382d",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "5",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-31382d",
    "partId": "part-31382d",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "5",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-31382d",
    "partId": "part-31382d",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "5",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-31382d",
    "partId": "part-31382d",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "5",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-31382d",
    "partId": "part-31382d",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "5",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-w21100610",
    "partId": "part-w21100610",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "6",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-w21100610",
    "partId": "part-w21100610",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "6",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-w21100610",
    "partId": "part-w21100610",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "6",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-w21100610",
    "partId": "part-w21100610",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "6",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-w21100610",
    "partId": "part-w21100610",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "6",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-w21100610",
    "partId": "part-w21100610",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "6",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-n041010",
    "partId": "part-n041010",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "7",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-n041010",
    "partId": "part-n041010",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "7",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-n041010",
    "partId": "part-n041010",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "7",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-n041010",
    "partId": "part-n041010",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "7",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-n041010",
    "partId": "part-n041010",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "7",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-n041010",
    "partId": "part-n041010",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "7",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-12098sp",
    "partId": "part-12098sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-12098sp",
    "partId": "part-12098sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-12098sp",
    "partId": "part-12098sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-12098sp",
    "partId": "part-12098sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-12098sp",
    "partId": "part-12098sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-12098sp",
    "partId": "part-12098sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "8",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-49090",
    "partId": "part-49090",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "9",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-49090",
    "partId": "part-49090",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "9",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-49090",
    "partId": "part-49090",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "9",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-49090",
    "partId": "part-49090",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "9",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-49090",
    "partId": "part-49090",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "9",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-49090",
    "partId": "part-49090",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "9",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9665sp",
    "partId": "part-9665sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "10",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-9665sp",
    "partId": "part-9665sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "10",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-9665sp",
    "partId": "part-9665sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "10",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-9665sp",
    "partId": "part-9665sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "10",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-9665sp",
    "partId": "part-9665sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "10",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-9665sp",
    "partId": "part-9665sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "10",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9447",
    "partId": "part-9447",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "10a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-9447",
    "partId": "part-9447",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "10a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-9447",
    "partId": "part-9447",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "10a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-9447",
    "partId": "part-9447",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "10a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-9447",
    "partId": "part-9447",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "10a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-9447",
    "partId": "part-9447",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "10a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-43067",
    "partId": "part-43067",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "11",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-43067",
    "partId": "part-43067",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "11",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-43067",
    "partId": "part-43067",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "11",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-43067",
    "partId": "part-43067",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "11",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-43067",
    "partId": "part-43067",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "11",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-43067",
    "partId": "part-43067",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "11",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10291sp",
    "partId": "part-10291sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "12",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-10291sp",
    "partId": "part-10291sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "12",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-10291sp",
    "partId": "part-10291sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "12",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95d-31035sp",
    "partId": "part-31035sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "12",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-31035sp",
    "partId": "part-31035sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "12",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-31035sp",
    "partId": "part-31035sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "12",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95s-404365",
    "partId": "part-404365",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "13",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-404365",
    "partId": "part-404365",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "13",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-404365",
    "partId": "part-404365",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "13",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-404365",
    "partId": "part-404365",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "13",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-404365",
    "partId": "part-404365",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "13",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-404365",
    "partId": "part-404365",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "13",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10046-34",
    "partId": "part-10046-34",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "16",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10046-34",
    "partId": "part-10046-34",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "16",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10046-34",
    "partId": "part-10046-34",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "16",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10046-34",
    "partId": "part-10046-34",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "16",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10046-34",
    "partId": "part-10046-34",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "16",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10046-34",
    "partId": "part-10046-34",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "16",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10046-24",
    "partId": "part-10046-24",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "17",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10046-24",
    "partId": "part-10046-24",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "17",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10046-24",
    "partId": "part-10046-24",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "17",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10046-24",
    "partId": "part-10046-24",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "17",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10046-24",
    "partId": "part-10046-24",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "17",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10046-24",
    "partId": "part-10046-24",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "17",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-103244",
    "partId": "part-103244",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "18",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-103244",
    "partId": "part-103244",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "18",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-103244",
    "partId": "part-103244",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "18",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-103244",
    "partId": "part-103244",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "18",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-103244",
    "partId": "part-103244",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "18",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-103244",
    "partId": "part-103244",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "18",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-32768",
    "partId": "part-32768",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-32768",
    "partId": "part-32768",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-32768",
    "partId": "part-32768",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95d-32770",
    "partId": "part-32770",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-32770",
    "partId": "part-32770",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-32770",
    "partId": "part-32770",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95s-43473",
    "partId": "part-43473",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-43473",
    "partId": "part-43473",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-43473",
    "partId": "part-43473",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-43473",
    "partId": "part-43473",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-43473",
    "partId": "part-43473",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-43473",
    "partId": "part-43473",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9210-1",
    "partId": "part-9210-1",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19b",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-9210-1",
    "partId": "part-9210-1",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19b",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-9210-1",
    "partId": "part-9210-1",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19b",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-9210-1",
    "partId": "part-9210-1",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19b",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-9210-1",
    "partId": "part-9210-1",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19b",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-9210-1",
    "partId": "part-9210-1",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19b",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-43402",
    "partId": "part-43402",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19c",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-43402",
    "partId": "part-43402",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19c",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-43402",
    "partId": "part-43402",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19c",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-43402",
    "partId": "part-43402",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19c",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-43402",
    "partId": "part-43402",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19c",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-43402",
    "partId": "part-43402",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19c",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-47863",
    "partId": "part-47863",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-47863",
    "partId": "part-47863",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-47863",
    "partId": "part-47863",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-47863",
    "partId": "part-47863",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-47863",
    "partId": "part-47863",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-47863",
    "partId": "part-47863",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-32769",
    "partId": "part-32769",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-32769",
    "partId": "part-32769",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-32769",
    "partId": "part-32769",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95d-32771",
    "partId": "part-32771",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-32771",
    "partId": "part-32771",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-32771",
    "partId": "part-32771",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95s-48801sp",
    "partId": "part-48801sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-48801sp",
    "partId": "part-48801sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-48801sp",
    "partId": "part-48801sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-48801sp",
    "partId": "part-48801sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-48801sp",
    "partId": "part-48801sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-48801sp",
    "partId": "part-48801sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "19d",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9243",
    "partId": "part-9243",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-9243",
    "partId": "part-9243",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-9243",
    "partId": "part-9243",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-9243",
    "partId": "part-9243",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-9243",
    "partId": "part-9243",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-9243",
    "partId": "part-9243",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9243-2sp",
    "partId": "part-9243-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-9243-2sp",
    "partId": "part-9243-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-9243-2sp",
    "partId": "part-9243-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-9243-2sp",
    "partId": "part-9243-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-9243-2sp",
    "partId": "part-9243-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-9243-2sp",
    "partId": "part-9243-2sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "20",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9855-3sp",
    "partId": "part-9855-3sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "21",
    "compatibilityNotes": "95S and 95D"
  },
  {
    "id": "compat-sdw-95d-9855-3sp",
    "partId": "part-9855-3sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "21",
    "compatibilityNotes": "95S and 95D"
  },
  {
    "id": "compat-sdw-125s-10218sp",
    "partId": "part-10218sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "21",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10218sp",
    "partId": "part-10218sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "21",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10218sp",
    "partId": "part-10218sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "21",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10218sp",
    "partId": "part-10218sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "21",
    "compatibilityNotes": "125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-9796sp",
    "partId": "part-9796sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "22",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-9796sp",
    "partId": "part-9796sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "22",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-9796sp",
    "partId": "part-9796sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "22",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-9796sp",
    "partId": "part-9796sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "22",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-9796sp",
    "partId": "part-9796sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "22",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-9796sp",
    "partId": "part-9796sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "22",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-96376",
    "partId": "part-96376",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "23",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-96376",
    "partId": "part-96376",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "23",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-96376",
    "partId": "part-96376",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "23",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-96376",
    "partId": "part-96376",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "23",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-96376",
    "partId": "part-96376",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "23",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-96376",
    "partId": "part-96376",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "23",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-43596",
    "partId": "part-43596",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "24",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-43596",
    "partId": "part-43596",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "24",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-43596",
    "partId": "part-43596",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "24",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-43596",
    "partId": "part-43596",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "24",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-43596",
    "partId": "part-43596",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "24",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-43596",
    "partId": "part-43596",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "24",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-31498",
    "partId": "part-31498",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "25",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-31498",
    "partId": "part-31498",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "25",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-31498",
    "partId": "part-31498",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "25",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-31498",
    "partId": "part-31498",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "25",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-31498",
    "partId": "part-31498",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "25",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-31498",
    "partId": "part-31498",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "25",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10292sp",
    "partId": "part-10292sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "26",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10292sp",
    "partId": "part-10292sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "26",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10292sp",
    "partId": "part-10292sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "26",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10292sp",
    "partId": "part-10292sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "26",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10292sp",
    "partId": "part-10292sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "26",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10292sp",
    "partId": "part-10292sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "26",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-102416",
    "partId": "part-102416",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "27",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-102416",
    "partId": "part-102416",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "27",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-102416",
    "partId": "part-102416",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "27",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95d-10046-16",
    "partId": "part-10046-16",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "27",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-10046-16",
    "partId": "part-10046-16",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "27",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-10046-16",
    "partId": "part-10046-16",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "27",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95s-10353sp",
    "partId": "part-10353sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "29",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10353sp",
    "partId": "part-10353sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "29",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10353sp",
    "partId": "part-10353sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "29",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10353sp",
    "partId": "part-10353sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "29",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10353sp",
    "partId": "part-10353sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "29",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10353sp",
    "partId": "part-10353sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "29",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-12078",
    "partId": "part-12078",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "29a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-12078",
    "partId": "part-12078",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "29a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-12078",
    "partId": "part-12078",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "29a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-12078",
    "partId": "part-12078",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "29a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-12078",
    "partId": "part-12078",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "29a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-12078",
    "partId": "part-12078",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "29a",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10112",
    "partId": "part-10112",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "30",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-10112",
    "partId": "part-10112",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "30",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-10112",
    "partId": "part-10112",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "30",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95s-9439",
    "partId": "part-9439",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "31",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-9439",
    "partId": "part-9439",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "31",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-9439",
    "partId": "part-9439",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "31",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95s-9952-36",
    "partId": "part-9952-36",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "95S"
  },
  {
    "id": "compat-sdw-95s-9952-33",
    "partId": "part-9952-33",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "95S and 125S"
  },
  {
    "id": "compat-sdw-125s-9952-33",
    "partId": "part-9952-33",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "95S and 125S"
  },
  {
    "id": "compat-sdw-125s-9952-38",
    "partId": "part-9952-38",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "125S"
  },
  {
    "id": "compat-sdw-125s-9952-41",
    "partId": "part-9952-41",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "125S"
  },
  {
    "id": "compat-sdw-165s-9952-43",
    "partId": "part-9952-43",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "165S"
  },
  {
    "id": "compat-sdw-165s-9952-47",
    "partId": "part-9952-47",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "33",
    "compatibilityNotes": "165S"
  },
  {
    "id": "compat-sdw-95s-8816-8",
    "partId": "part-8816-8",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "95S"
  },
  {
    "id": "compat-sdw-95s-8816-7",
    "partId": "part-8816-7",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "95S and 125S"
  },
  {
    "id": "compat-sdw-125s-8816-7",
    "partId": "part-8816-7",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "95S and 125S"
  },
  {
    "id": "compat-sdw-125s-8816-5",
    "partId": "part-8816-5",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "125S"
  },
  {
    "id": "compat-sdw-125s-8816-9",
    "partId": "part-8816-9",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "125S"
  },
  {
    "id": "compat-sdw-165s-8816-3",
    "partId": "part-8816-3",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "165S"
  },
  {
    "id": "compat-sdw-165s-8816-6",
    "partId": "part-8816-6",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "34",
    "compatibilityNotes": "165S"
  },
  {
    "id": "compat-sdw-95s-10113",
    "partId": "part-10113",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "35",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-10113",
    "partId": "part-10113",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "35",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-10113",
    "partId": "part-10113",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "35",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95s-9446sp",
    "partId": "part-9446sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "36",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-125s-9446sp",
    "partId": "part-9446sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "36",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-165s-9446sp",
    "partId": "part-9446sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "36",
    "compatibilityNotes": "95S, 125S and 165S"
  },
  {
    "id": "compat-sdw-95d-10220sp",
    "partId": "part-10220sp",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "37",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-10220sp",
    "partId": "part-10220sp",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "37",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-10220sp",
    "partId": "part-10220sp",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "37",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95d-9448",
    "partId": "part-9448",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "38",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-125d-9448",
    "partId": "part-9448",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "38",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-165d-9448",
    "partId": "part-9448",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "38",
    "compatibilityNotes": "95D, 125D and 165D"
  },
  {
    "id": "compat-sdw-95s-10224",
    "partId": "part-10224",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "39",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10224",
    "partId": "part-10224",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "39",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10224",
    "partId": "part-10224",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "39",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10224",
    "partId": "part-10224",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "39",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10224",
    "partId": "part-10224",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "39",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10224",
    "partId": "part-10224",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "39",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10222",
    "partId": "part-10222",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10222",
    "partId": "part-10222",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10222",
    "partId": "part-10222",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10222",
    "partId": "part-10222",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10222",
    "partId": "part-10222",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10222",
    "partId": "part-10222",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-10221",
    "partId": "part-10221",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95d-10221",
    "partId": "part-10221",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125s-10221",
    "partId": "part-10221",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-125d-10221",
    "partId": "part-10221",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165s-10221",
    "partId": "part-10221",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-165d-10221",
    "partId": "part-10221",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "diagramId": "diagram-sdw",
    "diagramReference": "40",
    "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
  },
  {
    "id": "compat-sdw-95s-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-95d-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-125s-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-125d-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-165s-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-165d-8573-5",
    "partId": "part-8573-5",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-95s-tt70",
    "partId": "part-tt70",
    "familyId": "family-shallow-well",
    "modelId": "model-95s",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-95d-tt70",
    "partId": "part-tt70",
    "familyId": "family-shallow-well",
    "modelId": "model-95d",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-125s-tt70",
    "partId": "part-tt70",
    "familyId": "family-shallow-well",
    "modelId": "model-125s",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-125d-tt70",
    "partId": "part-tt70",
    "familyId": "family-shallow-well",
    "modelId": "model-125d",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-165s-tt70",
    "partId": "part-tt70",
    "familyId": "family-shallow-well",
    "modelId": "model-165s",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  },
  {
    "id": "compat-sdw-165d-tt70",
    "partId": "part-tt70",
    "familyId": "family-shallow-well",
    "modelId": "model-165d",
    "compatibilityNotes": "Shallow/Deep Well — requires verification"
  }
];
