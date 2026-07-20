import { NextResponse } from "next/server";
import {
  assertResponseWithinLimit,
  getRicambioSeriesConfig,
  validateCatalogueUrl,
  type RicambioSeriesKey,
} from "@/lib/ricambio/url-validator";
import { createImportDraft as createHsDraft, parseHsSeriesHtml } from "@/lib/ricambio/parse-hs-series";
import { createImportDraft as createHpDraft, parseHpSeriesHtml } from "@/lib/ricambio/parse-hp-series";
import { createImportDraft as createHmDraft, parseHmSeriesHtml } from "@/lib/ricambio/parse-hm-series";
import { createImportDraft as createXjDraft, parseXjSeriesHtml } from "@/lib/ricambio/parse-xj-series";
import { createImportDraft as createXpDraft, parseXpSeriesHtml } from "@/lib/ricambio/parse-xp-series";
import { createImportDraft as createSdwDraft, parseSdwSeriesHtml } from "@/lib/ricambio/parse-sdw-series";
import { processRicambioDiagram } from "@/lib/ricambio/process-ricambio-diagram";

export const runtime = "nodejs";

const FETCH_TIMEOUT_MS = 30_000;

type CatalogueFamily = RicambioSeriesKey;

const FAMILY_CONFIG: Record<
  CatalogueFamily,
  {
    parse: (html: string) => ReturnType<typeof parseHsSeriesHtml>;
    createDraft: typeof createHsDraft;
  }
> = {
  hs: {
    parse: parseHsSeriesHtml,
    createDraft: createHsDraft,
  },
  hp: {
    parse: parseHpSeriesHtml,
    createDraft: createHpDraft,
  },
  hm: {
    parse: parseHmSeriesHtml,
    createDraft: createHmDraft,
  },
  xj: {
    parse: parseXjSeriesHtml,
    createDraft: createXjDraft,
  },
  xp: {
    parse: parseXpSeriesHtml,
    createDraft: createXpDraft,
  },
  sdw: {
    parse: parseSdwSeriesHtml,
    createDraft: createSdwDraft,
  },
};

async function fetchWithTimeout(url: string): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "PumpHub-Importer/1.0",
        Accept: "text/html,application/xhtml+xml,text/plain,image/svg+xml",
      },
      redirect: "follow",
    });
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      url?: string;
      includeDiagram?: boolean;
      family?: CatalogueFamily;
    };
    const familyKey = body.family ?? "hs";
    const seriesConfig = getRicambioSeriesConfig(familyKey);
    const config = FAMILY_CONFIG[familyKey];
    const pageUrl = validateCatalogueUrl(body.url ?? seriesConfig.sourceUrl);

    const pageResponse = await fetchWithTimeout(pageUrl.toString());
    if (!pageResponse.ok) {
      return NextResponse.json(
        { error: "The Davey catalogue page could not be fetched." },
        { status: 502 },
      );
    }

    const html = await pageResponse.text();
    assertResponseWithinLimit(pageResponse.headers.get("content-length"), html.length);

    const payload = config.parse(html);
    payload.sourceUrl = pageUrl.toString();

    if (body.includeDiagram !== false) {
      const diagramUrl = validateCatalogueUrl(seriesConfig.diagramSourceUrl);
      const diagramResponse = await fetchWithTimeout(diagramUrl.toString());
      if (diagramResponse.ok) {
        const rawSvg = await diagramResponse.text();
        assertResponseWithinLimit(
          diagramResponse.headers.get("content-length"),
          rawSvg.length,
        );
        const processed = processRicambioDiagram(html, rawSvg, seriesConfig);
        payload.diagramSourceUrl = diagramUrl.toString();
        payload.diagramLocalPath = seriesConfig.diagramLocalPath;
        payload.diagramWidth = processed.width;
        payload.diagramHeight = processed.height;
        payload.hotspots = processed.hotspots;
      } else {
        payload.diagramLocalPath = undefined;
      }
    }

    const draft = config.createDraft(payload);
    return NextResponse.json({ draft });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Catalogue fetch failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
