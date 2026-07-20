import { z } from "zod";
import type { PartSourceMetadata } from "@/types/catalogue-import";

export const AttachedEntityTypeSchema = z.enum([
  "pumpFamily",
  "pumpModel",
  "part",
  "general",
]);
export type AttachedEntityType = z.infer<typeof AttachedEntityTypeSchema>;

export const SavedEntityTypeSchema = z.enum(["pumpModel", "part"]);
export type SavedEntityType = z.infer<typeof SavedEntityTypeSchema>;

export const RecentEntityTypeSchema = z.enum(["pumpModel", "part"]);
export type RecentEntityType = z.infer<typeof RecentEntityTypeSchema>;

export const AvailabilitySchema = z.enum([
  "available",
  "limited",
  "unavailable",
  "discontinued",
  "verify",
  "unknown",
]);
export type Availability = z.infer<typeof AvailabilitySchema>;

export const PumpStatusSchema = z.enum(["active", "discontinued", "legacy"]);
export type PumpStatus = z.infer<typeof PumpStatusSchema>;

export interface Brand {
  id: string;
  name: string;
  slug: string;
  aliases: string[];
  websiteUrl?: string;
}

export interface Category {
  id: string;
  brandId: string;
  name: string;
  slug: string;
}

export interface PumpFamily {
  id: string;
  brandId: string;
  categoryId: string;
  name: string;
  slug: string;
  description?: string;
  sourceUrl?: string;
  identificationNotes?: string;
}

export interface PumpModel {
  id: string;
  familyId: string;
  name: string;
  slug: string;
  modelCode: string;
  aliases: string[];
  description?: string;
  version?: string;
  frequency?: string;
  status: PumpStatus;
  identificationNotes?: string;
  sourceUrl?: string;
  imageUrl?: string;
  curveImageUrl?: string;
  curveLabel?: string;
}

export interface Diagram {
  id: string;
  familyId: string;
  modelId?: string;
  name: string;
  imageUrl?: string;
  imageType: "svg" | "png" | "jpg";
  width: number;
  height: number;
  sourceUrl?: string;
}

export interface DiagramHotspot {
  id: string;
  diagramId: string;
  reference: string;
  x: number;
  y: number;
  width: number;
  height: number;
  partIds: string[];
}

export interface Part {
  id: string;
  brandId: string;
  partNumber: string;
  description: string;
  aliases: string[];
  partCategory: string;
  quantity: number;
  availability: Availability;
  illustrated: boolean;
  sourceUrl?: string;
  notes?: string;
  source?: PartSourceMetadata;
}

export interface PartCompatibility {
  id: string;
  partId: string;
  familyId: string;
  modelId?: string;
  diagramId?: string;
  diagramReference?: string;
  compatibilityNotes?: string;
}

export interface UserNote {
  id: string;
  title: string;
  body: string;
  attachedEntityType: AttachedEntityType;
  attachedEntityId: string;
  createdAt: number;
  updatedAt: number;
}

export interface SavedItem {
  id: string;
  entityType: SavedEntityType;
  entityId: string;
  savedAt: number;
}

export interface RecentItem {
  id: string;
  entityType: RecentEntityType;
  entityId: string;
  viewedAt: number;
}

export interface AppSettings {
  id: "app";
  theme: "system" | "light" | "dark";
  textSize: "standard" | "large";
}

export interface PumpModelDetail extends PumpModel {
  brand: Brand;
  family: PumpFamily;
  category: Category;
}

export interface PartDetail extends Part {
  brand: Brand;
  compatibilities: PartCompatibility[];
  pumpModels: PumpModel[];
  families: PumpFamily[];
}

export type SearchFilter = "all" | "pumps" | "parts";

export interface SearchResultPump {
  type: "pump";
  id: string;
  brand: string;
  model: string;
  family: string;
  category: string;
  score: number;
}

export interface SearchResultPart {
  type: "part";
  id: string;
  partNumber: string;
  description: string;
  pumpModel?: string;
  family?: string;
  diagramReference?: string;
  score: number;
}

export type SearchResult = SearchResultPump | SearchResultPart;

export interface HotspotPartOption {
  part: Part;
  compatibility: PartCompatibility;
  isCurrentModel: boolean;
}
