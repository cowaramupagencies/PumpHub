"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Bookmark, ExternalLink, FileText, Layers, LineChart, Map } from "lucide-react";
import { ActionCard } from "@/components/ui/ActionCard";
import { Button } from "@/components/ui/Button";
import { Card, EmptyState, LoadingSpinner } from "@/components/ui/Card";
import { FilterToggle } from "@/components/ui/FilterToggle";
import { PageHeader } from "@/components/ui/PageHeader";
import { SearchInput } from "@/components/ui/SearchInput";
import { PumpDiagram } from "@/features/pumps/PumpDiagram";
import { PumpImage } from "@/components/pumps/PumpImage";
import { PumpCurve } from "@/features/pumps/PumpCurve";
import { ReferencePartPanel } from "@/features/pumps/ReferencePartPanel";
import { PartsList } from "@/features/parts/PartsList";
import { NotesPanel } from "@/features/notes/NotesPanel";
import { usePumpModel } from "@/hooks/usePumpModel";
import { usePartsForModel } from "@/hooks/usePartsForModel";
import { useIsSaved } from "@/hooks/useSavedItems";
import { useCopyFeedback } from "@/hooks/useDatabase";
import { pumpRepository } from "@/data/repositories/pumpRepository";
import { partRepository } from "@/data/repositories/partRepository";
import { savedRepository } from "@/data/repositories/savedRepository";
import { recentRepository } from "@/data/repositories/recentRepository";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import { DAVEY_BASE } from "@/utils/brands";
import { getCatalogueHotspotsForFamily } from "@/data/diagrams/hp-series-diagram";
import { normalizeSearchText } from "@/utils";
import { getPumpCurveInfo } from "@/utils/pumps";
import type { DiagramHotspot, HotspotPartOption, Part, PartCompatibility } from "@/types";

type Section = "diagram" | "parts" | "notes" | "curve";

export function PumpDetailPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = params.slug as string;

  const modelBySlug = useDbLiveQuery(
    () => pumpRepository.getModelBySlug(slug),
    [slug],
    undefined,
  );

  const modelId = modelBySlug?.id;
  const pump = usePumpModel(modelId);
  const parts = usePartsForModel(modelId, pump?.familyId);
  const isSaved = useIsSaved("pumpModel", modelId ?? "");
  const { copied, copy } = useCopyFeedback();

  const initialTab = searchParams.get("tab") as Section | null;
  const initialRef = searchParams.get("ref") ?? undefined;

  const pumpCurve = pump
    ? getPumpCurveInfo(pump.slug, pump.curveImageUrl, pump.curveLabel, pump.family.slug)
    : undefined;

  const [section, setSection] = useState<Section | null>(
    initialTab && ["diagram", "parts", "notes", "curve"].includes(initialTab) ? initialTab : null,
  );
  const [selectedRef, setSelectedRef] = useState<string | undefined>(initialRef);
  const [sheetOpen, setSheetOpen] = useState(!!initialRef);
  const [partsFilter, setPartsFilter] = useState("all");
  const [partsSearch, setPartsSearch] = useState("");

  const hotspots = useDbLiveQuery<DiagramHotspot[]>(
    async () => {
      if (!pump) return [];
      const diagram = await pumpRepository.getDiagramForFamily(pump.familyId);
      if (!diagram) return [];
      return pumpRepository.getHotspotsForDiagram(diagram.id);
    },
    [pump?.familyId],
    [],
  );

  const diagram = useDbLiveQuery(
    () => (pump ? pumpRepository.getDiagramForFamily(pump.familyId) : Promise.resolve(undefined)),
    [pump?.familyId],
    undefined,
  );

  const compatibilities = useDbLiveQuery<PartCompatibility[]>(
    () =>
      modelId && pump?.familyId
        ? partRepository.getCompatibilitiesForModel(modelId, pump.familyId)
        : Promise.resolve([]),
    [modelId, pump?.familyId],
    [],
  );

  useEffect(() => {
    if (modelId) recentRepository.trackView("pumpModel", modelId);
  }, [modelId]);

  const handleSelectReference = useCallback((reference: string) => {
    setSelectedRef(reference);
    setSheetOpen(true);
  }, []);

  const [hotspotParts, setHotspotParts] = useState<HotspotPartOption[]>([]);

  useEffect(() => {
    async function loadHotspotParts() {
      if (!selectedRef || !pump || !modelId) {
        setHotspotParts([]);
        return;
      }

      const options: HotspotPartOption[] = [];
      const seen = new Set<string>();

      const addOption = (part: Part, compat: PartCompatibility) => {
        if (seen.has(part.id)) return;
        seen.add(part.id);
        options.push({
          part,
          compatibility: compat,
          isCurrentModel: !compat.modelId || compat.modelId === pump.id,
        });
      };

      for (const compat of compatibilities ?? []) {
        if (compat.diagramReference !== selectedRef) continue;
        const part =
          (parts ?? []).find((entry) => entry.id === compat.partId) ??
          (await partRepository.getById(compat.partId));
        if (part) addOption(part, compat);
      }

      const hotspot = hotspots?.find((entry) => entry.reference === selectedRef);
      if (hotspot?.partIds.length) {
        const linkedParts = await partRepository.getPartsByHotspot(hotspot.partIds);
        for (const part of linkedParts) {
          const compat = (compatibilities ?? []).find((entry) => entry.partId === part.id) ?? {
            id: `compat-hotspot-${part.id}`,
            partId: part.id,
            familyId: pump.familyId,
            diagramReference: selectedRef,
          };
          addOption(part, compat);
        }
      }

      const catalogueHotspot = getCatalogueHotspotsForFamily(pump.family.slug).find(
        (entry) => entry.reference === selectedRef,
      );
      for (const partNumber of catalogueHotspot?.partNumbers ?? []) {
        const part = await partRepository.getByPartNumber(partNumber);
        if (!part) continue;
        const compat = (compatibilities ?? []).find((entry) => entry.partId === part.id) ?? {
          id: `compat-catalogue-${part.id}`,
          partId: part.id,
          familyId: pump.familyId,
          diagramReference: selectedRef,
        };
        addOption(part, compat);
      }

      setHotspotParts(
        options.sort((left, right) => {
          if (left.isCurrentModel && !right.isCurrentModel) return -1;
          if (!left.isCurrentModel && right.isCurrentModel) return 1;
          return left.part.partNumber.localeCompare(right.part.partNumber);
        }),
      );
    }

    void loadHotspotParts();
  }, [selectedRef, hotspots, compatibilities, pump, parts, modelId]);

  const filteredParts = useMemo(() => {
    if (!parts) return [];
    let filtered = parts;
    if (partsFilter === "specific") {
      filtered = filtered.filter((p) => {
        const compat = (compatibilities ?? []).find((c) => c.partId === p.id);
        return compat?.modelId === modelId;
      });
    } else if (partsFilter === "kits") {
      filtered = filtered.filter(
        (p) =>
          p.partCategory.toLowerCase().includes("seal") ||
          p.partCategory.toLowerCase().includes("kit"),
      );
    }
    if (partsSearch.trim()) {
      const q = normalizeSearchText(partsSearch);
      filtered = filtered.filter(
        (p) =>
          normalizeSearchText(p.partNumber).includes(q) ||
          normalizeSearchText(p.description).includes(q),
      );
    }
    return filtered;
  }, [parts, partsFilter, partsSearch, compatibilities, modelId]);

  const getCompatForPart = (part: Part) =>
    (compatibilities ?? []).find((c) => c.partId === part.id);

  const handleFindOnDiagram = (reference: string) => {
    setSection("diagram");
    handleSelectReference(reference);
  };

  const handleSavePump = async () => {
    if (modelId) await savedRepository.save("pumpModel", modelId);
  };

  if (modelBySlug === undefined) return <LoadingSpinner label="Loading pump…" />;
  if (!pump) {
    return (
      <EmptyState
        message="This pump could not be opened."
        action={
          <Button variant="ghost" fullWidth onClick={() => router.push(`${DAVEY_BASE}/search`)}>
            Try Again
          </Button>
        }
      />
    );
  }

  return (
    <div className="space-y-5 pb-8">
      <PageHeader
        title={pump.name}
        subtitle={`${pump.brand.name} · ${pump.family.name}`}
        onBack={() => router.back()}
        showSave
        isSaved={isSaved}
        onSave={handleSavePump}
      />

      <Card className="border-warning/40 bg-warning/5">
        <p className="text-base">
          Confirm the exact pump version before ordering model-specific parts.
        </p>
      </Card>

      {!section && !pump.family.sourceUrl && (
        <Card className="text-base text-muted">
          Parts catalogue and diagram setup for this range is coming next. You can still save notes
          and browse model details.
        </Card>
      )}

      {!section && (
        <PumpImage
          slug={pump.slug}
          name={pump.name}
          imageUrl={pump.imageUrl}
          familySlug={pump.family.slug}
          size="hero"
          priority
        />
      )}

      {!section && (
        <div className="space-y-3">
          <ActionCard
            icon={Map}
            title="View Diagram"
            description="Tap a numbered reference to find parts"
            onClick={() => setSection("diagram")}
          />
          {pumpCurve && (
            <ActionCard
              icon={LineChart}
              title="View Pump Curve"
              description={`Performance chart — ${pumpCurve.seriesLabel}`}
              onClick={() => setSection("curve")}
            />
          )}
          <ActionCard
            icon={Layers}
            title="View Parts"
            description="Search and browse parts for this pump"
            onClick={() => setSection("parts")}
          />
          <ActionCard
            icon={FileText}
            title="My Notes"
            description="Record version checks and site findings"
            onClick={() => setSection("notes")}
          />
        </div>
      )}

      {section && (
        <FilterToggle
          options={[
            { value: "diagram", label: "Diagram" },
            ...(pumpCurve ? [{ value: "curve" as const, label: "Curve" }] : []),
            { value: "parts", label: "Parts" },
            { value: "notes", label: "Notes" },
          ]}
          value={section}
          onChange={(v) => setSection(v as Section)}
        />
      )}

      {section === "diagram" && (
        <>
          {(hotspots ?? []).length > 0 ? (
            <PumpDiagram
              pumpName={pump.name}
              diagram={
                diagram?.imageUrl
                  ? {
                      imageUrl: diagram.imageUrl,
                      width: diagram.width,
                      height: diagram.height,
                      imageType: diagram.imageType,
                    }
                  : undefined
              }
              hotspots={hotspots ?? []}
              selectedReference={selectedRef}
              onSelectReference={handleSelectReference}
              overlay={
                sheetOpen && selectedRef ? (
                  <ReferencePartPanel
                    reference={selectedRef}
                    pumpName={pump.name}
                    parts={hotspotParts}
                    onClose={() => setSheetOpen(false)}
                    onCopy={copy}
                    copied={copied}
                  />
                ) : undefined
              }
            />
          ) : (
            <EmptyState message="A schematic has not been added for this pump yet." />
          )}
        </>
      )}

      {section === "curve" && pumpCurve && (
        <PumpCurve
          pumpName={pump.name}
          imageUrl={pumpCurve.imageUrl}
          seriesLabel={pumpCurve.seriesLabel}
          seriesName={pumpCurve.seriesName}
        />
      )}

      {section === "parts" && (
        <div className="space-y-3">
          <SearchInput
            placeholder={`Search ${pump.name} parts`}
            value={partsSearch}
            onChange={(e) => setPartsSearch(e.target.value)}
            large={false}
            aria-label={`Search ${pump.name} parts`}
          />
          <FilterToggle
            options={[
              { value: "all", label: "All Parts" },
              { value: "kits", label: "Kits & Seals" },
              { value: "specific", label: "Pump Specific" },
            ]}
            value={partsFilter}
            onChange={setPartsFilter}
          />
          <PartsList
            parts={filteredParts}
            getCompatibility={getCompatForPart}
            selectedReference={selectedRef}
            onCopy={copy}
            onFindOnDiagram={handleFindOnDiagram}
            copied={copied}
          />
        </div>
      )}

      {section === "notes" && <NotesPanel entityType="pumpModel" entityId={pump.id} />}

      <div className="space-y-3 border-t border-[var(--border-color)] pt-5">
        <Button variant="ghost" fullWidth onClick={handleSavePump}>
          <Bookmark className="h-5 w-5" />
          {isSaved ? "Pump Saved" : "Save Pump"}
        </Button>
        <a href={pump.family.sourceUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" fullWidth className="flex-col gap-1 py-4">
            <span className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Open Davey Catalogue
            </span>
            <span className="text-sm font-normal text-muted">Internet required</span>
          </Button>
        </a>
      </div>

    </div>
  );
}
