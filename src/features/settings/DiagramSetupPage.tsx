"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, LoadingSpinner } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { PumpDiagram } from "@/features/pumps/PumpDiagram";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import { pumpRepository } from "@/data/repositories/pumpRepository";
import { getDb } from "@/data/database/db";
import { DAVEY_BASE } from "@/utils/brands";
import type { DiagramHotspot } from "@/types";

const FAMILY_ID = "family-hs";
const DIAGRAM_ID = "diagram-hs";

export function DiagramSetupPage() {
  const router = useRouter();
  const [reference, setReference] = useState("1");
  const [message, setMessage] = useState<string | null>(null);

  const diagram = useDbLiveQuery(
    () => pumpRepository.getDiagramForFamily(FAMILY_ID),
    [],
    undefined,
  );

  const hotspots = useDbLiveQuery(
    () => pumpRepository.getHotspotsForDiagram(DIAGRAM_ID),
    [],
    [],
  );

  const diagramProps = useMemo(
    () =>
      diagram?.imageUrl
        ? { imageUrl: diagram.imageUrl, width: diagram.width, height: diagram.height }
        : undefined,
    [diagram],
  );

  const saveMarker = async (ref: string, x: number, y: number) => {
    const db = getDb();
    const id = `hs-ref-${ref.replace(/[^a-z0-9]/gi, "")}`;
    const existing = await db.diagramHotspots.get(id);
    const hotspot: DiagramHotspot = {
      id,
      diagramId: DIAGRAM_ID,
      reference: ref,
      x: Math.max(0, Math.min(0.92, x - 0.04)),
      y: Math.max(0, Math.min(0.92, y - 0.04)),
      width: existing?.width ?? 0.08,
      height: existing?.height ?? 0.08,
      partIds: existing?.partIds ?? [],
    };
    await db.diagramHotspots.put(hotspot);
    setMessage(`Saved marker for reference ${ref}.`);
  };

  if (diagram === undefined) return <LoadingSpinner label="Loading diagram…" />;

  return (
    <div className="space-y-5 pb-8">
      <PageHeader title="Diagram Setup" onBack={() => router.push(`${DAVEY_BASE}/settings`)} />

      {message && <Card className="text-base">{message}</Card>}

      <Card className="space-y-3">
        <label className="block text-base font-semibold" htmlFor="diagram-ref">
          Reference number
        </label>
        <input
          id="diagram-ref"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="min-h-[3.25rem] w-full rounded-xl border border-[var(--border-color)] px-4 text-lg"
        />
        <p className="text-sm text-muted">
          Tap a location on the diagram preview below to place or move the selected reference
          marker.
        </p>
      </Card>

      <PumpDiagram
        pumpName="HS Series"
        diagram={diagramProps}
        hotspots={hotspots ?? []}
        selectedReference={reference}
        onSelectReference={(ref) => {
          setReference(ref);
          setMessage(`Selected reference ${ref}.`);
        }}
      />

      <Button
        fullWidth
        onClick={() => saveMarker(reference, 0.5, 0.5)}
        variant="ghost"
      >
        Centre Marker on Diagram
      </Button>
    </div>
  );
}
