import type {
  Diagram,
  DiagramHotspot,
  Part,
  PartCompatibility,
  PumpFamily,
  PumpModel,
} from "@/types";
import {
  HS_SERIES_DIAGRAM_HEIGHT,
  HS_SERIES_DIAGRAM_PATH,
  HS_SERIES_DIAGRAM_SOURCE_URL,
  HS_SERIES_DIAGRAM_WIDTH,
} from "@/data/diagrams/hs-series-diagram";
import { HS_SERIES_CURVE_IMAGE, HS_SERIES_PUMP_IMAGE } from "@/utils/pumps";

const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";

export const hsSeedFamily: PumpFamily = {
  id: "family-hs",
  brandId: BRAND_ID,
  categoryId: CATEGORY_ID,
  name: "HS Series",
  slug: "hs-series",
  description: "Horizontal multistage pressure pumps for domestic and light commercial use.",
  sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_190&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_190&MP1=CE_190&MP=CE_190.cex#CE_190",
  identificationNotes: "Check nameplate for model, frequency and version before ordering parts.",
};

export const hsSeedModels: PumpModel[] = [
  {
    id: "model-hs50",
    familyId: hsSeedFamily.id,
    name: "HS50",
    slug: "hs50",
    modelCode: "HS50",
    aliases: ["HS 50", "HS-50"],
    description: "5-stage horizontal multistage pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm version suffix on nameplate before ordering model-specific parts.",
    imageUrl: HS_SERIES_PUMP_IMAGE,
    curveImageUrl: HS_SERIES_CURVE_IMAGE,
    curveLabel: "L4T (HS50-06T)",
  },
  {
    id: "model-hs60",
    familyId: hsSeedFamily.id,
    name: "HS60",
    slug: "hs60",
    modelCode: "HS60",
    aliases: ["HS 60", "HS-60"],
    description: "6-stage horizontal multistage pump, 50 Hz.",
    version: "–0 / –1 / –2",
    frequency: "50 Hz",
    status: "active",
    identificationNotes: "Confirm pump version before ordering model-specific parts.",
    imageUrl: HS_SERIES_PUMP_IMAGE,
    curveImageUrl: HS_SERIES_CURVE_IMAGE,
    curveLabel: "L5T (HS60-08T)",
  },
];

export const hsSeedDiagram: Diagram = {
  id: "diagram-hs",
  familyId: hsSeedFamily.id,
  name: "HS Series Exploded View",
  imageUrl: HS_SERIES_DIAGRAM_PATH,
  imageType: "svg",
  width: HS_SERIES_DIAGRAM_WIDTH,
  height: HS_SERIES_DIAGRAM_HEIGHT,
  sourceUrl: HS_SERIES_DIAGRAM_SOURCE_URL,
};

export const hsSeedHotspots: DiagramHotspot[] = [
  {
    "id": "hs-ref-1",
    "diagramId": "diagram-hs",
    "reference": "1",
    "x": 0.2150875,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-781",
      "part-782"
    ]
  },
  {
    "id": "hs-ref-2",
    "diagramId": "diagram-hs",
    "reference": "2",
    "x": 0.3652375,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-31618",
      "part-12551",
      "part-43403",
      "part-49771",
      "part-40019",
      "part-401573"
    ]
  },
  {
    "id": "hs-ref-2",
    "diagramId": "diagram-hs",
    "reference": "2",
    "x": 0.7048375,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-31618",
      "part-12551",
      "part-43403",
      "part-49771",
      "part-40019",
      "part-401573"
    ]
  },
  {
    "id": "hs-ref-2",
    "diagramId": "diagram-hs",
    "reference": "2",
    "x": 0.7048375,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-31618",
      "part-12551",
      "part-43403",
      "part-49771",
      "part-40019",
      "part-401573"
    ]
  },
  {
    "id": "hs-ref-2a",
    "diagramId": "diagram-hs",
    "reference": "2a",
    "x": 0.326025,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12551"
    ]
  },
  {
    "id": "hs-ref-2b",
    "diagramId": "diagram-hs",
    "reference": "2b",
    "x": 0.3750875,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-43403"
    ]
  },
  {
    "id": "hs-ref-2c",
    "diagramId": "diagram-hs",
    "reference": "2c",
    "x": 0.40254999999999996,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-49771"
    ]
  },
  {
    "id": "hs-ref-2d",
    "diagramId": "diagram-hs",
    "reference": "2d",
    "x": 0.7048375,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-40019"
    ]
  },
  {
    "id": "hs-ref-2e",
    "diagramId": "diagram-hs",
    "reference": "2e",
    "x": 0.7048375,
    "y": 0.8264204545454544,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-401573"
    ]
  },
  {
    "id": "hs-ref-3",
    "diagramId": "diagram-hs",
    "reference": "3",
    "x": 0.35506249999999995,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12538sp"
    ]
  },
  {
    "id": "hs-ref-4",
    "diagramId": "diagram-hs",
    "reference": "4",
    "x": 0.4032125,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12545",
      "part-12559"
    ]
  },
  {
    "id": "hs-ref-4",
    "diagramId": "diagram-hs",
    "reference": "4",
    "x": 0.46046249999999994,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12545",
      "part-12559"
    ]
  },
  {
    "id": "hs-ref-4",
    "diagramId": "diagram-hs",
    "reference": "4",
    "x": 0.52035,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12545",
      "part-12559"
    ]
  },
  {
    "id": "hs-ref-5",
    "diagramId": "diagram-hs",
    "reference": "5",
    "x": 0.4243875,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12548-10"
    ]
  },
  {
    "id": "hs-ref-5",
    "diagramId": "diagram-hs",
    "reference": "5",
    "x": 0.48246249999999996,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12548-10"
    ]
  },
  {
    "id": "hs-ref-5",
    "diagramId": "diagram-hs",
    "reference": "5",
    "x": 0.5432625,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12548-10"
    ]
  },
  {
    "id": "hs-ref-6",
    "diagramId": "diagram-hs",
    "reference": "6",
    "x": 0.54385,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-32015",
      "part-12543-10",
      "part-12541-10",
      "part-13197",
      "part-12544-30",
      "part-12695"
    ]
  },
  {
    "id": "hs-ref-6a",
    "diagramId": "diagram-hs",
    "reference": "6a",
    "x": 0.426125,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12543-10"
    ]
  },
  {
    "id": "hs-ref-6b",
    "diagramId": "diagram-hs",
    "reference": "6b",
    "x": 0.48891249999999997,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12541-10"
    ]
  },
  {
    "id": "hs-ref-6b",
    "diagramId": "diagram-hs",
    "reference": "6b",
    "x": 0.5488124999999999,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12541-10"
    ]
  },
  {
    "id": "hs-ref-6c",
    "diagramId": "diagram-hs",
    "reference": "6c",
    "x": 0.4490375,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-13197"
    ]
  },
  {
    "id": "hs-ref-6c",
    "diagramId": "diagram-hs",
    "reference": "6c",
    "x": 0.5105124999999999,
    "y": 0.535151515151515,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-13197"
    ]
  },
  {
    "id": "hs-ref-6c",
    "diagramId": "diagram-hs",
    "reference": "6c",
    "x": 0.5718125,
    "y": 0.535151515151515,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-13197"
    ]
  },
  {
    "id": "hs-ref-6d",
    "diagramId": "diagram-hs",
    "reference": "6d",
    "x": 0.66165,
    "y": 0.5352840909090909,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12544-30"
    ]
  },
  {
    "id": "hs-ref-6e",
    "diagramId": "diagram-hs",
    "reference": "6e",
    "x": 0.6537875,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12695"
    ]
  },
  {
    "id": "hs-ref-7",
    "diagramId": "diagram-hs",
    "reference": "7",
    "x": 0.7323,
    "y": 0.9143939393939393,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-s34m06208"
    ]
  },
  {
    "id": "hs-ref-8",
    "diagramId": "diagram-hs",
    "reference": "8",
    "x": 0.7666249999999999,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-31623"
    ]
  },
  {
    "id": "hs-ref-9",
    "diagramId": "diagram-hs",
    "reference": "9",
    "x": 0.829425,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-11091"
    ]
  },
  {
    "id": "hs-ref-10",
    "diagramId": "diagram-hs",
    "reference": "10",
    "x": 0.8687125,
    "y": 0.47136363636363643,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-31573"
    ]
  },
  {
    "id": "hs-ref-11",
    "diagramId": "diagram-hs",
    "reference": "11",
    "x": 0.8678874999999999,
    "y": 0.7844318181818181,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12665sp"
    ]
  },
  {
    "id": "hs-ref-12",
    "diagramId": "diagram-hs",
    "reference": "12",
    "x": 0.5571625,
    "y": 0.8235416666666666,
    "width": 0.021175000000000003,
    "height": 0.03208333333333334,
    "partIds": [
      "part-12618d"
    ]
  }
];

export const hsSeedParts: Part[] = [
  {
    "id": "part-781",
    "brandId": "brand-davey",
    "partNumber": "781",
    "description": "Motor - 0.58kW 240/1/50",
    "aliases": [
      "781",
      "781"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-782",
    "brandId": "brand-davey",
    "partNumber": "782",
    "description": "Motor - 0.80kW 240/1/50",
    "aliases": [
      "782",
      "782"
    ],
    "partCategory": "Motor",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31618",
    "brandId": "brand-davey",
    "partNumber": "31618",
    "description": "Kit - Seal HS",
    "aliases": [
      "31618",
      "31618"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12551",
    "brandId": "brand-davey",
    "partNumber": "12551",
    "description": "Slinger",
    "aliases": [
      "12551",
      "12551"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-43403",
    "brandId": "brand-davey",
    "partNumber": "43403",
    "description": "O-ring",
    "aliases": [
      "43403",
      "43403"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-49771",
    "brandId": "brand-davey",
    "partNumber": "49771SP",
    "description": "Seal - Mechanical 5/8\"",
    "aliases": [
      "49771",
      "49771sp"
    ],
    "partCategory": "Seal Kit",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-40019",
    "brandId": "brand-davey",
    "partNumber": "40019",
    "description": "O-ring",
    "aliases": [
      "40019",
      "40019"
    ],
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-401573",
    "brandId": "brand-davey",
    "partNumber": "401573",
    "description": "Nut - Half",
    "aliases": [
      "401573",
      "401573"
    ],
    "partCategory": "Part",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12538sp",
    "brandId": "brand-davey",
    "partNumber": "12538SP",
    "description": "Backplate",
    "aliases": [
      "12538",
      "12538sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12545",
    "brandId": "brand-davey",
    "partNumber": "12545SP",
    "description": "Impeller - HS50 50Hz",
    "aliases": [
      "12545",
      "12545sp"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12559",
    "brandId": "brand-davey",
    "partNumber": "12559SP",
    "description": "Impeller - HS60 50Hz",
    "aliases": [
      "12559",
      "12559sp"
    ],
    "partCategory": "Impeller",
    "quantity": 0,
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
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-32015",
    "brandId": "brand-davey",
    "partNumber": "32015SP",
    "description": "Diffuser kit - HS",
    "aliases": [
      "32015",
      "32015sp"
    ],
    "partCategory": "Diffuser",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12543-10",
    "brandId": "brand-davey",
    "partNumber": "12543-10",
    "description": "Stage body - Final stage HS",
    "aliases": [
      "12543-10",
      "12543-10"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12541-10",
    "brandId": "brand-davey",
    "partNumber": "12541-10",
    "description": "Stage body - 2nd stage HS",
    "aliases": [
      "12541-10",
      "12541-10"
    ],
    "partCategory": "Part",
    "quantity": 2,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-13197",
    "brandId": "brand-davey",
    "partNumber": "13197",
    "description": "Baffle return vane",
    "aliases": [
      "13197",
      "13197"
    ],
    "partCategory": "Part",
    "quantity": 3,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12544-30",
    "brandId": "brand-davey",
    "partNumber": "12544-30",
    "description": "Stage body - 1st stage",
    "aliases": [
      "12544-30",
      "12544-30"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12695",
    "brandId": "brand-davey",
    "partNumber": "12695",
    "description": "Valve - Priming",
    "aliases": [
      "12695",
      "12695"
    ],
    "partCategory": "Valve",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-s34m06208",
    "brandId": "brand-davey",
    "partNumber": "S34M06208",
    "description": "Screw - Casing (pk8)",
    "aliases": [
      "S34M06208",
      "s34m06208"
    ],
    "partCategory": "Casing",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-31623",
    "brandId": "brand-davey",
    "partNumber": "31623SP",
    "description": "Casing - Front Assy HS",
    "aliases": [
      "31623",
      "31623sp"
    ],
    "partCategory": "Casing",
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
    "id": "part-31573",
    "brandId": "brand-davey",
    "partNumber": "31573",
    "description": "Checkvalve Assy - HS",
    "aliases": [
      "31573",
      "31573"
    ],
    "partCategory": "Valve",
    "quantity": 1,
    "availability": "verify",
    "illustrated": true
  },
  {
    "id": "part-12665sp",
    "brandId": "brand-davey",
    "partNumber": "12665SP",
    "description": "Support - Foot/tape",
    "aliases": [
      "12665",
      "12665sp"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": true
  },
  {
    "id": "part-12618d",
    "brandId": "brand-davey",
    "partNumber": "12618D",
    "description": "Spacer - 3 stage only",
    "aliases": [
      "12618D",
      "12618d"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
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
    "availability": "verify",
    "illustrated": false
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
    "availability": "verify",
    "illustrated": false
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
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-31610-300",
    "brandId": "brand-davey",
    "partNumber": "31610-300",
    "description": "Hydrascan CL - Plug & Play Not Illustrated",
    "aliases": [
      "31610-300",
      "31610-300"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-pcsj22",
    "brandId": "brand-davey",
    "partNumber": "PCSJ22",
    "description": "Pressure controller - 2.2 bar Plug & Play",
    "aliases": [
      "PCSJ22",
      "pcsj22"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
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
    "partCategory": "Part",
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
    "partCategory": "Valve",
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
    "partCategory": "Seal",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32960",
    "brandId": "brand-davey",
    "partNumber": "32960",
    "description": "HS Strengthening Kit",
    "aliases": [
      "32960",
      "32960"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "verify",
    "illustrated": false
  },
  {
    "id": "part-32578",
    "brandId": "brand-davey",
    "partNumber": "32578",
    "description": "Wet End Kit - HS50-06L",
    "aliases": [
      "32578",
      "32578"
    ],
    "partCategory": "Part",
    "quantity": 1,
    "availability": "unknown",
    "illustrated": false
  }
];

export const hsSeedCompatibilities: PartCompatibility[] = [
  {
    "id": "compat-hs-hs50-781",
    "partId": "part-781",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "1",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-781",
    "partId": "part-781",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "1",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-782",
    "partId": "part-782",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "1",
    "compatibilityNotes": "HS60"
  },
  {
    "id": "compat-hs-hs50-31618",
    "partId": "part-31618",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "2",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-31618",
    "partId": "part-31618",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "2",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12551",
    "partId": "part-12551",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "2a",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12551",
    "partId": "part-12551",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "2a",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-43403",
    "partId": "part-43403",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "2b",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-43403",
    "partId": "part-43403",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "2b",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-49771",
    "partId": "part-49771",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "2c",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-49771",
    "partId": "part-49771",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "2c",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-40019",
    "partId": "part-40019",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "2d",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-40019",
    "partId": "part-40019",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "2d",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-401573",
    "partId": "part-401573",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "2e",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-401573",
    "partId": "part-401573",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "2e",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12538sp",
    "partId": "part-12538sp",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "3",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12538sp",
    "partId": "part-12538sp",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "3",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12545",
    "partId": "part-12545",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "4",
    "compatibilityNotes": "HS50"
  },
  {
    "id": "compat-hs-hs60-12559",
    "partId": "part-12559",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "4",
    "compatibilityNotes": "HS60"
  },
  {
    "id": "compat-hs-hs50-12548-10",
    "partId": "part-12548-10",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "5",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12548-10",
    "partId": "part-12548-10",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "5",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-32015",
    "partId": "part-32015",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "6",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-32015",
    "partId": "part-32015",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "6",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12543-10",
    "partId": "part-12543-10",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "6a",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12543-10",
    "partId": "part-12543-10",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "6a",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12541-10",
    "partId": "part-12541-10",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "6b",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12541-10",
    "partId": "part-12541-10",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "6b",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-13197",
    "partId": "part-13197",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "6c",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-13197",
    "partId": "part-13197",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "6c",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12544-30",
    "partId": "part-12544-30",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "6d",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12544-30",
    "partId": "part-12544-30",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "6d",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12695",
    "partId": "part-12695",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "6e",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12695",
    "partId": "part-12695",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "6e",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-s34m06208",
    "partId": "part-s34m06208",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "7",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-s34m06208",
    "partId": "part-s34m06208",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "7",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-31623",
    "partId": "part-31623",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "8",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-31623",
    "partId": "part-31623",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "8",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-11091",
    "partId": "part-11091",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "9",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-11091",
    "partId": "part-11091",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "9",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-31573",
    "partId": "part-31573",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "10",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-31573",
    "partId": "part-31573",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "10",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-12665sp",
    "partId": "part-12665sp",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "11",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs60-12665sp",
    "partId": "part-12665sp",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "11",
    "compatibilityNotes": "HS50 and HS60"
  },
  {
    "id": "compat-hs-hs50-12618d",
    "partId": "part-12618d",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "diagramId": "diagram-hs",
    "diagramReference": "12",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-12618d",
    "partId": "part-12618d",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "diagramId": "diagram-hs",
    "diagramReference": "12",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-32320-1sp",
    "partId": "part-32320-1sp",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-32320-1sp",
    "partId": "part-32320-1sp",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-11392-10",
    "partId": "part-11392-10",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-11392-10",
    "partId": "part-11392-10",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-11591-1",
    "partId": "part-11591-1",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-11591-1",
    "partId": "part-11591-1",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-31610-300",
    "partId": "part-31610-300",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-31610-300",
    "partId": "part-31610-300",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-pcsj22",
    "partId": "part-pcsj22",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-pcsj22",
    "partId": "part-pcsj22",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-tt45",
    "partId": "part-tt45",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-tt45",
    "partId": "part-tt45",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-tt70",
    "partId": "part-tt70",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-tt70",
    "partId": "part-tt70",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-32323",
    "partId": "part-32323",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-32323",
    "partId": "part-32323",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-401487",
    "partId": "part-401487",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-401487",
    "partId": "part-401487",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-32960",
    "partId": "part-32960",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs60-32960",
    "partId": "part-32960",
    "familyId": "family-hs",
    "modelId": "model-hs60",
    "compatibilityNotes": "HS50 and HS60 — requires verification"
  },
  {
    "id": "compat-hs-hs50-32578",
    "partId": "part-32578",
    "familyId": "family-hs",
    "modelId": "model-hs50",
    "compatibilityNotes": "HS50"
  }
];
