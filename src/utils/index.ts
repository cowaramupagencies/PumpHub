export function normalizeSearchText(input: string): string {
  return input
    .toLowerCase()
    .replace(/[\s\-_.,/\\|]+/g, "")
    .replace(/[^\w]/g, "");
}

export function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** UUID helper that works when `crypto.randomUUID` is unavailable (e.g. non-secure context). */
export function createId(): string {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  const bytes = new Uint8Array(16);
  if (typeof globalThis.crypto?.getRandomValues === "function") {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function availabilityLabel(availability: string): string {
  switch (availability) {
    case "available":
      return "Available";
    case "limited":
      return "Limited";
    case "unavailable":
      return "Unavailable";
    case "discontinued":
      return "Discontinued";
    case "verify":
      return "Verify with manufacturer";
    case "unknown":
      return "Unknown";
    default:
      return availability;
  }
}

export function availabilityColor(availability: string): string {
  switch (availability) {
    case "available":
      return "text-success";
    case "limited":
      return "text-warning";
    case "unavailable":
      return "text-danger";
    default:
      return "text-muted";
  }
}

export const HS_SERIES_CATALOGUE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_190&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_190&MP1=CE_190&MP=CE_190.cex#CE_190";

export const HP_SERIES_CATALOGUE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_188&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_188&MP1=CE_188&MP=CE_188.cex#CE_188";

export const APP_NAME = "PumpHub";
export const APP_TAGLINE = "Find the right part, faster.";
export const PUMPHUB_LOGO_PATH = "/brands/pumphub/pumphub-logo.png";
