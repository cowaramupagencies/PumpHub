export type VerificationStatus = "verified" | "requires_verification" | "excluded" | "pending";
export type ReviewStatus = "pending" | "approved" | "excluded" | "edited";
export type CompatibilityScope =
  | "hs50"
  | "hs60"
  | "hp45"
  | "hp65"
  | "hp85"
  | "hp45_hp65"
  | "hp_all"
  | "hm60"
  | "hm90"
  | "hm160"
  | "hm270"
  | "hm60_hm90"
  | "hm160_hm270"
  | "hm_all"
  | "xj50"
  | "xj70"
  | "xj90"
  | "xj50_xj70"
  | "xj_all"
  | "xp25"
  | "xp35"
  | "xp45"
  | "xp25_xp35"
  | "xp35_xp45"
  | "xp_all"
  | "both"
  | "family"
  | "verify";

export interface PartSourceMetadata {
  sourceDescription?: string;
  sourceCompatibilityText?: string;
  sourceAvailabilityText?: string;
  sourceQuantityText?: string;
  sourcePriceText?: string;
  sourceUrl?: string;
  importedAt?: string;
  lastReviewedAt?: string;
  verificationStatus: VerificationStatus;
  rawCatalogueText?: string;
}

export interface DraftPartRecord {
  partNumber: string;
  description: string;
  diagramReference?: string | null;
  illustrated: boolean;
  compatibilityScope: CompatibilityScope;
  sourceDescription: string;
  sourceCompatibilityText?: string;
  sourceNoteText?: string;
  sourceQuantityText?: string;
  sourcePriceText?: string;
  reviewStatus: ReviewStatus;
  verificationStatus?: VerificationStatus;
  partCategory?: string;
  quantity?: number;
  existingPartId?: string;
}

export interface DraftHotspotRecord {
  reference: string;
  x: number;
  y: number;
  width: number;
  height: number;
  partNumbers: string[];
}

export interface HpSeriesImportDraft {
  id: string;
  familyId: string;
  status: "draft" | "approved" | "failed";
  sourceUrl: string;
  diagramSourceUrl?: string;
  diagramLocalPath?: string;
  diagramWidth: number;
  diagramHeight: number;
  cataloguePageTitle?: string;
  importedAt: string;
  parts: DraftPartRecord[];
  hotspots: DraftHotspotRecord[];
  parseReport?: ImportParseReport;
}

export interface HmSeriesImportDraft {
  id: string;
  familyId: string;
  status: "draft" | "approved" | "failed";
  sourceUrl: string;
  diagramSourceUrl?: string;
  diagramLocalPath?: string;
  diagramWidth: number;
  diagramHeight: number;
  cataloguePageTitle?: string;
  importedAt: string;
  parts: DraftPartRecord[];
  hotspots: DraftHotspotRecord[];
  parseReport?: ImportParseReport;
}

export interface XjSeriesImportDraft {
  id: string;
  familyId: string;
  status: "draft" | "approved" | "failed";
  sourceUrl: string;
  diagramSourceUrl?: string;
  diagramLocalPath?: string;
  diagramWidth: number;
  diagramHeight: number;
  cataloguePageTitle?: string;
  importedAt: string;
  parts: DraftPartRecord[];
  hotspots: DraftHotspotRecord[];
  parseReport?: ImportParseReport;
}

export interface XpSeriesImportDraft {
  id: string;
  familyId: string;
  status: "draft" | "approved" | "failed";
  sourceUrl: string;
  diagramSourceUrl?: string;
  diagramLocalPath?: string;
  diagramWidth: number;
  diagramHeight: number;
  cataloguePageTitle?: string;
  importedAt: string;
  parts: DraftPartRecord[];
  hotspots: DraftHotspotRecord[];
  parseReport?: ImportParseReport;
}

export type SeriesImportDraft =
  | HsSeriesImportDraft
  | HpSeriesImportDraft
  | HmSeriesImportDraft
  | XjSeriesImportDraft
  | XpSeriesImportDraft;

export interface HsSeriesImportDraft {
  id: string;
  familyId: string;
  status: "draft" | "approved" | "failed";
  sourceUrl: string;
  diagramSourceUrl?: string;
  diagramLocalPath?: string;
  diagramWidth: number;
  diagramHeight: number;
  cataloguePageTitle?: string;
  importedAt: string;
  parts: DraftPartRecord[];
  hotspots: DraftHotspotRecord[];
  parseReport?: ImportParseReport;
}

export interface ImportParseReport {
  partsDetected: number;
  hotspotsDetected: number;
  missingDescriptions: number;
  unknownCompatibility: number;
  duplicatePartNumbers: number;
  diagramStatus: "retrieved" | "missing" | "manual";
  warnings: string[];
}

export interface ImportHistoryRecord {
  id: string;
  familyId: string;
  sourceUrl: string;
  importedAt: string;
  partsApproved: number;
  partsExcluded: number;
  partsRequireVerification: number;
  mappedReferences: number;
  diagramStatus: string;
  catalogueVersion: number;
}

export interface CatalogueMeta {
  id: "catalogue";
  hsSeriesVersion: number;
  hpSeriesVersion?: number;
  hmSeriesVersion?: number;
  xjSeriesVersion?: number;
  xpSeriesVersion?: number;
  lastHsReviewAt?: string;
  lastHpReviewAt?: string;
  lastHmReviewAt?: string;
  lastXjReviewAt?: string;
  lastXpReviewAt?: string;
  liveDataSource: "demonstration" | "ricambio";
}
