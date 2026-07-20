import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
  XJ_SERIES_DIAGRAM_HEIGHT,
  XJ_SERIES_DIAGRAM_PATH,
  XJ_SERIES_DIAGRAM_SOURCE_URL,
  XJ_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/xj-series-diagram";
import {
  XJ50_CURVE_IMAGE,
  XJ70_CURVE_IMAGE,
  XJ90_CURVE_IMAGE,
  XJ_SERIES_PUMP_IMAGE,
} from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const xjSeedFamily: PumpFamily = {
  id: "family-xj",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "XJ Series",
  slug: "xj-series",
  description: "Single-stage jet-assisted centrifugal pumps with Torrium2 or pressure switch options.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_197&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_197&MP1=CE_197&MP=CE_197.cex#CE_197",
  identificationNotes: "Confirm Torrium (T) or pressure switch (P) suffix and model size on the nameplate before ordering parts.",
};

export const xjSeedModels: PumpModel[] = [
  {
    id: "model-xj50",
    familyId: xjSeedFamily.id,
    name: "XJ50",
    slug: "xj50",
    modelCode: "XJ50T",
    aliases: ["XJ 50", "XJ50T", "XJ50P"],
    description: "50 lpm DynaJet pressure system, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
    imageUrl: XJ_SERIES_PUMP_IMAGE,
    curveImageUrl: XJ50_CURVE_IMAGE,
    curveLabel: "XJ50",
  },
  {
    id: "model-xj70",
    familyId: xjSeedFamily.id,
    name: "XJ70",
    slug: "xj70",
    modelCode: "XJ70T",
    aliases: ["XJ 70", "XJ70T", "XJ70P"],
    description: "70 lpm DynaJet pressure system, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
    imageUrl: XJ_SERIES_PUMP_IMAGE,
    curveImageUrl: XJ70_CURVE_IMAGE,
    curveLabel: "XJ70",
  },
  {
    id: "model-xj90",
    familyId: xjSeedFamily.id,
    name: "XJ90",
    slug: "xj90",
    modelCode: "XJ90T",
    aliases: ["XJ 90", "XJ90T", "XJ90P"],
    description: "90 lpm DynaJet pressure system, 50 Hz.",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
    imageUrl: XJ_SERIES_PUMP_IMAGE,
    curveImageUrl: XJ90_CURVE_IMAGE,
    curveLabel: "XJ90",
  },
];

export const xjSeedDiagram: Diagram = {
  id: "diagram-xj",
  familyId: xjSeedFamily.id,
  name: "XJ Series Exploded View",
  imageUrl: XJ_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: XJ_SERIES_DIAGRAM_WIDTH,
  height: XJ_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: XJ_SERIES_DIAGRAM_SOURCE_URL,
};

export const xjSeedHotspots: DiagramHotspot[] = [
  {
    "id": "xj-ref-1",
    "diagramId": "diagram-xj",
    "reference": "1",
    "x": 0.10895000000000002,
    "y": 0.5610377358490566,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-766",
      "part-767",
      "part-744",
      "part-720",
      "part-7060"
    ]
  },
  {
    "id": "xj-ref-2",
    "diagramId": "diagram-xj",
    "reference": "2",
    "x": 0.36393749999999997,
    "y": 0.574685534591195,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-11620-3sp"
    ]
  },
  {
    "id": "xj-ref-3",
    "diagramId": "diagram-xj",
    "reference": "3",
    "x": 0.4197874999999999,
    "y": 0.574685534591195,
    "width": 0.09931249999999998,
    "height": 0.023238993710691783,
    "partIds": [
      "part-32767",
      "part-11196",
      "part-430645",
      "part-30736",
      "part-43062"
    ]
  },
  {
    "id": "xj-ref-4",
    "diagramId": "diagram-xj",
    "reference": "4",
    "x": 0.534,
    "y": 0.7290566037735849,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-9859sp",
      "part-9856-5sp",
      "part-9856sp"
    ]
  },
  {
    "id": "xj-ref-5",
    "diagramId": "diagram-xj",
    "reference": "5",
    "x": 0.564025,
    "y": 0.574685534591195,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-31302sp",
      "part-31303sp",
      "part-31321sp"
    ]
  },
  {
    "id": "xj-ref-6",
    "diagramId": "diagram-xj",
    "reference": "6",
    "x": 0.6214999999999999,
    "y": 0.574685534591195,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-11591-1"
    ]
  },
  {
    "id": "xj-ref-7",
    "diagramId": "diagram-xj",
    "reference": "7",
    "x": 0.7157250000000001,
    "y": 0.6031132075471699,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-31283"
    ]
  },
  {
    "id": "xj-ref-8",
    "diagramId": "diagram-xj",
    "reference": "8",
    "x": 0.7523875,
    "y": 0.6031132075471699,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-30805"
    ]
  },
  {
    "id": "xj-ref-9",
    "diagramId": "diagram-xj",
    "reference": "9",
    "x": 0.706575,
    "y": 0.6409119496855346,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-43060",
      "part-43067"
    ]
  },
  {
    "id": "xj-ref-10",
    "diagramId": "diagram-xj",
    "reference": "10",
    "x": 0.8790749999999999,
    "y": 0.6724056603773585,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-9636sp"
    ]
  },
  {
    "id": "xj-ref-11",
    "diagramId": "diagram-xj",
    "reference": "11",
    "x": 0.8790749999999999,
    "y": 0.7480031446540881,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-8923-3sp",
      "part-9103-3sp"
    ]
  },
  {
    "id": "xj-ref-12",
    "diagramId": "diagram-xj",
    "reference": "12",
    "x": 0.868225,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-8816-3",
      "part-8816-6",
      "part-8816-5"
    ]
  },
  {
    "id": "xj-ref-13",
    "diagramId": "diagram-xj",
    "reference": "13",
    "x": 0.848225,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-11231-106"
    ]
  },
  {
    "id": "xj-ref-15",
    "diagramId": "diagram-xj",
    "reference": "15",
    "x": 0.8007125,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-8818-4",
      "part-9952-36",
      "part-9952-41"
    ]
  },
  {
    "id": "xj-ref-16",
    "diagramId": "diagram-xj",
    "reference": "16",
    "x": 0.781525,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-40010"
    ]
  },
  {
    "id": "xj-ref-17",
    "diagramId": "diagram-xj",
    "reference": "17",
    "x": 0.7615375,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-8927"
    ]
  },
  {
    "id": "xj-ref-18",
    "diagramId": "diagram-xj",
    "reference": "18",
    "x": 0.7307000000000001,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-8922-3",
      "part-8922-1"
    ]
  },
  {
    "id": "xj-ref-19",
    "diagramId": "diagram-xj",
    "reference": "19",
    "x": 0.7082,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-11521-106",
      "part-b03m0835sp",
      "part-491076"
    ]
  },
  {
    "id": "xj-ref-20",
    "diagramId": "diagram-xj",
    "reference": "20",
    "x": 0.6131625,
    "y": 0.9338679245283019,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-96376"
    ]
  },
  {
    "id": "xj-ref-21",
    "diagramId": "diagram-xj",
    "reference": "21",
    "x": 0.5756875,
    "y": 0.7280345911949686,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-9953-10sp"
    ]
  },
  {
    "id": "xj-ref-22",
    "diagramId": "diagram-xj",
    "reference": "22",
    "x": 0.54735,
    "y": 0.5263836477987421,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-pc15xj"
    ]
  },
  {
    "id": "xj-ref-23",
    "diagramId": "diagram-xj",
    "reference": "23",
    "x": 0.52485,
    "y": 0.4896069182389937,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-tt45",
      "part-tt70"
    ]
  },
  {
    "id": "xj-ref-23",
    "diagramId": "diagram-xj",
    "reference": "23",
    "x": 0.8790749999999999,
    "y": 0.5274056603773585,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-tt45",
      "part-tt70"
    ]
  },
  {
    "id": "xj-ref-24",
    "diagramId": "diagram-xj",
    "reference": "24",
    "x": 0.8790749999999999,
    "y": 0.6031132075471699,
    "width": 0.01845,
    "height": 0.023238993710691824,
    "partIds": [
      "part-13551sp"
    ]
  }
];

export const xjSeedParts: Part[] = [
  {
    "id": "part-766",
    "brandId": "brand-davey",
    "partNumber": "766",
    "description": "Motor - 0.58kW 240/1/50",
    "aliases": [
      "766",
      "766"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-767",
    "brandId": "brand-davey",
    "partNumber": "767",
    "description": "Motor - 0.80kW 240/1/50",
    "aliases": [
      "767",
      "767"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-744",
    "brandId": "brand-davey",
    "partNumber": "744",
    "description": "Motor - 0.58kW 220/1/50",
    "aliases": [
      "744",
      "744"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-720",
    "brandId": "brand-davey",
    "partNumber": "720",
    "description": "Motor - 0.80kW 220/1/50",
    "aliases": [
      "720",
      "720"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-7060",
    "brandId": "brand-davey",
    "partNumber": "7060",
    "description": "Motor - 1.1kW 1ph",
    "aliases": [
      "7060",
      "7060"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11620-3sp",
    "brandId": "brand-davey",
    "partNumber": "11620-3SP",
    "description": "Adaptor",
    "aliases": [
      "11620-3",
      "11620-3sp"
    ],
    "partCategory": "Adaptor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32767",
    "brandId": "brand-davey",
    "partNumber": "32767",
    "description": "Seal Kit",
    "aliases": [
      "32767",
      "32767"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11196",
    "brandId": "brand-davey",
    "partNumber": "11196",
    "description": "Sleeve - Painted brass",
    "aliases": [
      "11196",
      "11196"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-430645",
    "brandId": "brand-davey",
    "partNumber": "430645",
    "description": "O-ring - Pack of 5",
    "aliases": [
      "430645",
      "430645"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-30736",
    "brandId": "brand-davey",
    "partNumber": "30736",
    "description": "Seal - Mechanical",
    "aliases": [
      "30736",
      "30736"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43062",
    "brandId": "brand-davey",
    "partNumber": "43062",
    "description": "O-ring - Casing",
    "aliases": [
      "43062",
      "43062"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9859sp",
    "brandId": "brand-davey",
    "partNumber": "9859SP",
    "description": "Impeller",
    "aliases": [
      "9859",
      "9859sp"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9856-5sp",
    "brandId": "brand-davey",
    "partNumber": "9856-5SP",
    "description": "Impeller",
    "aliases": [
      "9856-5",
      "9856-5sp"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9856sp",
    "brandId": "brand-davey",
    "partNumber": "9856SP",
    "description": "Impeller",
    "aliases": [
      "9856",
      "9856sp"
    ],
    "partCategory": "Impeller",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31302sp",
    "brandId": "brand-davey",
    "partNumber": "31302SP",
    "description": "Switch - Pressure 180-390kPa",
    "aliases": [
      "31302",
      "31302sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31303sp",
    "brandId": "brand-davey",
    "partNumber": "31303SP",
    "description": "Switch - Pressure 210-420 kPa",
    "aliases": [
      "31303",
      "31303sp"
    ],
    "partCategory": "Switch",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31321sp",
    "brandId": "brand-davey",
    "partNumber": "31321SP",
    "description": "Switch - Pressure 210-350kPa",
    "aliases": [
      "31321",
      "31321sp"
    ],
    "partCategory": "Switch",
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
    "id": "part-31283",
    "brandId": "brand-davey",
    "partNumber": "31283",
    "description": "Kit - Tee piece assy",
    "aliases": [
      "31283",
      "31283"
    ],
    "partCategory": "Part",
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
    "id": "part-43060",
    "brandId": "brand-davey",
    "partNumber": "43060",
    "description": "O-ring",
    "aliases": [
      "43060",
      "43060"
    ],
    "partCategory": "Seal",
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
    "id": "part-9636sp",
    "brandId": "brand-davey",
    "partNumber": "9636SP",
    "description": "Screw & O-ring - Airbleed",
    "aliases": [
      "9636",
      "9636sp"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8923-3sp",
    "brandId": "brand-davey",
    "partNumber": "8923-3SP",
    "description": "Cover - Entry deluxe foot",
    "aliases": [
      "8923-3",
      "8923-3sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-9103-3sp",
    "brandId": "brand-davey",
    "partNumber": "9103-3SP",
    "description": "Port - Inlet",
    "aliases": [
      "9103-3",
      "9103-3sp"
    ],
    "partCategory": "Part",
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
    "partCategory": "Part",
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
    "partCategory": "Part",
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
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11231-106",
    "brandId": "brand-davey",
    "partNumber": "11231-106",
    "description": "Screw - (pk6)",
    "aliases": [
      "11231-106",
      "11231-106"
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
    "id": "part-8818-4",
    "brandId": "brand-davey",
    "partNumber": "8818-4",
    "description": "Venturi - Yellow",
    "aliases": [
      "8818-4",
      "8818-4"
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
    "partCategory": "Part",
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
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-40010",
    "brandId": "brand-davey",
    "partNumber": "40010",
    "description": "O-ring - Venturi/coverplate",
    "aliases": [
      "40010",
      "40010"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8927",
    "brandId": "brand-davey",
    "partNumber": "8927",
    "description": "Gasket - Suction cover",
    "aliases": [
      "8927",
      "8927"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8922-3",
    "brandId": "brand-davey",
    "partNumber": "8922-3",
    "description": "Body - Pump c/w priming port",
    "aliases": [
      "8922-3",
      "8922-3"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-8922-1",
    "brandId": "brand-davey",
    "partNumber": "8922-1",
    "description": "Body - Pump",
    "aliases": [
      "8922-1",
      "8922-1"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-11521-106",
    "brandId": "brand-davey",
    "partNumber": "11521-106",
    "description": "Screw - (pk6)",
    "aliases": [
      "11521-106",
      "11521-106"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-b03m0835sp",
    "brandId": "brand-davey",
    "partNumber": "B03M0835SP",
    "description": "Bolt (pk6) suits Adaptor 11620-3SP",
    "aliases": [
      "B03M0835",
      "b03m0835sp"
    ],
    "partCategory": "Adaptor",
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
    "id": "part-9953-10sp",
    "brandId": "brand-davey",
    "partNumber": "9953-10SP",
    "description": "Coverplate",
    "aliases": [
      "9953-10",
      "9953-10sp"
    ],
    "partCategory": "Part",
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
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-96154",
    "brandId": "brand-davey",
    "partNumber": "96154",
    "description": "Screw - (pk4)",
    "aliases": [
      "96154",
      "96154"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
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
    "availability": "verify",
    "illustrated": false
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
    "id": "part-43061",
    "brandId": "brand-davey",
    "partNumber": "43061",
    "description": "O-ring - Torrium Pre S/N 08114",
    "aliases": [
      "43061",
      "43061"
    ],
    "partCategory": "Controller",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
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
  }
];

export const xjSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-family-766",
    "partId": "part-766",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "1",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-767",
    "partId": "part-767",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "1",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj50-744",
    "partId": "part-744",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "1",
    "compatibilityNotes": "XJ50"
  },
  {
    "id": "compat-xj70-720",
    "partId": "part-720",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "1",
    "compatibilityNotes": "XJ70"
  },
  {
    "id": "compat-xj90-7060",
    "partId": "part-7060",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "1",
    "compatibilityNotes": "XJ90"
  },
  {
    "id": "compat-xj50-11620-3sp",
    "partId": "part-11620-3sp",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "2",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj70-11620-3sp",
    "partId": "part-11620-3sp",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "2",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj90-11620-3sp",
    "partId": "part-11620-3sp",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "2",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-family-32767",
    "partId": "part-32767",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "3",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-11196",
    "partId": "part-11196",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "3a",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-430645",
    "partId": "part-430645",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "3b",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-30736",
    "partId": "part-30736",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "3c",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-43062",
    "partId": "part-43062",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "3d",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj50-9859sp",
    "partId": "part-9859sp",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "4",
    "compatibilityNotes": "XJ50"
  },
  {
    "id": "compat-xj70-9856-5sp",
    "partId": "part-9856-5sp",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "4",
    "compatibilityNotes": "XJ70"
  },
  {
    "id": "compat-xj90-9856sp",
    "partId": "part-9856sp",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "4",
    "compatibilityNotes": "XJ90"
  },
  {
    "id": "compat-xj50-31302sp",
    "partId": "part-31302sp",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "5",
    "compatibilityNotes": "XJ50"
  },
  {
    "id": "compat-xj70-31303sp",
    "partId": "part-31303sp",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "5",
    "compatibilityNotes": "XJ70"
  },
  {
    "id": "compat-xj90-31321sp",
    "partId": "part-31321sp",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "5",
    "compatibilityNotes": "XJ90"
  },
  {
    "id": "compat-family-11591-1",
    "partId": "part-11591-1",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "6",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-31283",
    "partId": "part-31283",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "7",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-30805",
    "partId": "part-30805",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "8",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj50-43060",
    "partId": "part-43060",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "9",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj70-43060",
    "partId": "part-43060",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "9",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj90-43060",
    "partId": "part-43060",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "9",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-family-43067",
    "partId": "part-43067",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "9",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-9636sp",
    "partId": "part-9636sp",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "10",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj50-8923-3sp",
    "partId": "part-8923-3sp",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "11",
    "compatibilityNotes": "XJ50 and XJ70"
  },
  {
    "id": "compat-xj70-8923-3sp",
    "partId": "part-8923-3sp",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "11",
    "compatibilityNotes": "XJ50 and XJ70"
  },
  {
    "id": "compat-xj90-9103-3sp",
    "partId": "part-9103-3sp",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "11",
    "compatibilityNotes": "XJ90"
  },
  {
    "id": "compat-xj50-8816-3",
    "partId": "part-8816-3",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "12",
    "compatibilityNotes": "XJ50"
  },
  {
    "id": "compat-xj70-8816-6",
    "partId": "part-8816-6",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "12",
    "compatibilityNotes": "XJ70"
  },
  {
    "id": "compat-xj90-8816-5",
    "partId": "part-8816-5",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "12",
    "compatibilityNotes": "XJ90"
  },
  {
    "id": "compat-family-11231-106",
    "partId": "part-11231-106",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "13",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-43067",
    "partId": "part-43067",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "14",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj50-8818-4",
    "partId": "part-8818-4",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "15",
    "compatibilityNotes": "XJ50"
  },
  {
    "id": "compat-xj70-9952-36",
    "partId": "part-9952-36",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "15",
    "compatibilityNotes": "XJ70"
  },
  {
    "id": "compat-xj90-9952-41",
    "partId": "part-9952-41",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "15",
    "compatibilityNotes": "XJ90"
  },
  {
    "id": "compat-family-40010",
    "partId": "part-40010",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "16",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-8927",
    "partId": "part-8927",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "17",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj50-8922-3",
    "partId": "part-8922-3",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "18",
    "compatibilityNotes": "XJ50 and XJ70"
  },
  {
    "id": "compat-xj70-8922-3",
    "partId": "part-8922-3",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "18",
    "compatibilityNotes": "XJ50 and XJ70"
  },
  {
    "id": "compat-xj50-8922-1",
    "partId": "part-8922-1",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "18",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj70-8922-1",
    "partId": "part-8922-1",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "18",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj90-8922-1",
    "partId": "part-8922-1",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "18",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-family-11521-106",
    "partId": "part-11521-106",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "19",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-b03m0835sp",
    "partId": "part-b03m0835sp",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "19",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-491076",
    "partId": "part-491076",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "19",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-96376",
    "partId": "part-96376",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "20",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-9953-10sp",
    "partId": "part-9953-10sp",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "21",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-pc15xj",
    "partId": "part-pc15xj",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "22",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-family-tt45",
    "partId": "part-tt45",
    "familyId": "family-xj",
    "diagramId": "diagram-xj",
    "diagramReference": "23",
    "compatibilityNotes": "XJ Series — model not confirmed"
  },
  {
    "id": "compat-xj70-tt70",
    "partId": "part-tt70",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "23",
    "compatibilityNotes": "XJ70"
  },
  {
    "id": "compat-xj50-13551sp",
    "partId": "part-13551sp",
    "familyId": "family-xj",
    "modelId": "model-xj50",
    "diagramId": "diagram-xj",
    "diagramReference": "24",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj70-13551sp",
    "partId": "part-13551sp",
    "familyId": "family-xj",
    "modelId": "model-xj70",
    "diagramId": "diagram-xj",
    "diagramReference": "24",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-xj90-13551sp",
    "partId": "part-13551sp",
    "familyId": "family-xj",
    "modelId": "model-xj90",
    "diagramId": "diagram-xj",
    "diagramReference": "24",
    "compatibilityNotes": "XJ50, XJ70 and XJ90"
  },
  {
    "id": "compat-verify-96154",
    "partId": "part-96154",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-8890-2sp",
    "partId": "part-8890-2sp",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32323",
    "partId": "part-32323",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-43061",
    "partId": "part-43061",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-401487",
    "partId": "part-401487",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32693",
    "partId": "part-32693",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  },
  {
    "id": "compat-verify-32694",
    "partId": "part-32694",
    "familyId": "family-xj",
    "compatibilityNotes": "Requires verification"
  }
];
