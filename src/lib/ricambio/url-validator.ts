const APPROVED_HOSTS = new Set(["davey.ricambio.net"]);
const MAX_RESPONSE_BYTES = 2 * 1024 * 1024;

export const HS_SERIES_SOURCE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_190&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_190&MP1=CE_190&MP=CE_190.cex#CE_190";

export const HS_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_190_1.SVG";

export const HP_SERIES_SOURCE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_188&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_188&MP1=CE_188&MP=CE_188.cex#CE_188";

export const HP_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_188_1.SVG";

export const HM_SERIES_SOURCE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_248&PRF=4&PRNDS=CE_247&PRC=|R|CE_1|CE_111|CE_247|CE_248&MP1=CE_248&MP=CE_248.cex#CE_248";

export const HM_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_248_1.SVG";

export const XJ_SERIES_SOURCE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_197&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_197&MP1=CE_197&MP=CE_197.cex#CE_197";

export const XJ_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_197_1.SVG";

export const XP_SERIES_SOURCE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_182&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_182&MP1=CE_182&MP=CE_182.cex#CE_182";

export const XP_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_182_1.SVG";

export const SDW_SERIES_SOURCE_URL =
  "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_201&PRF=4&PRNDS=CE_200&PRC=|R|CE_1|CE_111|CE_200|CE_201&MP1=CE_201&MP=CE_201.cex#CE_201";

export const SDW_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_201_1.SVG";

export {
  RICAMBIO_SERIES,
  getRicambioSeriesConfig,
  type RicambioSeriesKey,
  type RicambioSeriesConfig,
} from "@/lib/ricambio/ricambio-series-config";

export function validateCatalogueUrl(rawUrl: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error("Invalid catalogue URL.");
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("Unsupported catalogue URL protocol.");
  }

  if (parsed.hostname === "localhost" || parsed.hostname.endsWith(".local")) {
    throw new Error("Local catalogue URLs are not permitted.");
  }

  if (!APPROVED_HOSTS.has(parsed.hostname)) {
    throw new Error("Catalogue host is not approved.");
  }

  return parsed;
}

export function assertResponseWithinLimit(contentLength: string | null, bodyLength: number): void {
  const length = contentLength ? Number(contentLength) : bodyLength;
  if (Number.isFinite(length) && length > MAX_RESPONSE_BYTES) {
    throw new Error("Catalogue response is too large.");
  }
  if (bodyLength > MAX_RESPONSE_BYTES) {
    throw new Error("Catalogue response is too large.");
  }
}
