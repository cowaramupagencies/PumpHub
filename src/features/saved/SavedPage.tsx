"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, SectionHeading, EmptyState, LoadingSpinner } from "@/components/ui/Card";
import { FilterToggle } from "@/components/ui/FilterToggle";
import { useSavedItems } from "@/hooks/useSavedItems";
import { useCopyFeedback } from "@/hooks/useDatabase";
import { DAVEY_BASE } from "@/utils/brands";
import { savedRepository } from "@/data/repositories/savedRepository";

export function SavedPage() {
  const { loading, pumps, parts } = useSavedItems();
  const { copied, copy } = useCopyFeedback();
  const [tab, setTab] = useState<"pumps" | "parts">("pumps");

  const handleRemovePump = async (id: string) => {
    await savedRepository.remove("pumpModel", id);
  };

  const handleRemovePart = async (id: string) => {
    await savedRepository.remove("part", id);
  };

  if (loading) return <LoadingSpinner label="Loading saved items…" />;

  const isEmpty = pumps.length === 0 && parts.length === 0;

  return (
    <div className="space-y-5 pb-4">
      <SectionHeading>Saved</SectionHeading>

      {isEmpty && (
        <EmptyState message="Save pumps and parts to find them quickly later." />
      )}

      {!isEmpty && (
        <>
          <FilterToggle
            options={[
              { value: "pumps", label: "Saved Pumps" },
              { value: "parts", label: "Saved Parts" },
            ]}
            value={tab}
            onChange={(v) => setTab(v as "pumps" | "parts")}
          />

          {tab === "pumps" && (
            <div className="space-y-4">
              {pumps.length === 0 && (
                <EmptyState message="No saved pumps yet." />
              )}
              {pumps.map(({ pump }) => (
                <Card key={pump.id} className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold">{pump.name}</p>
                    <p className="mt-1 text-base text-muted">
                      {pump.brand.name} · {pump.family.name}
                    </p>
                  </div>
                  <Link href={`${DAVEY_BASE}/pumps/${pump.slug}`}>
                    <Button fullWidth>Open Pump</Button>
                  </Link>
                  <Button variant="ghost" fullWidth onClick={() => handleRemovePump(pump.id)}>
                    Remove
                  </Button>
                </Card>
              ))}
            </div>
          )}

          {tab === "parts" && (
            <div className="space-y-4">
              {parts.length === 0 && (
                <EmptyState message="No saved parts yet." />
              )}
              {parts.map(({ part }) => (
                <Card key={part.id} className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-blue">{part.partNumber}</p>
                    <p className="mt-1 text-lg">{part.description}</p>
                  </div>
                  <Button fullWidth variant="ghost" onClick={() => copy(part.partNumber)}>
                    <Copy className="h-5 w-5" />
                    {copied === part.partNumber ? "Copied!" : "Copy Number"}
                  </Button>
                  <Link href={`${DAVEY_BASE}/parts/${part.id}`}>
                    <Button fullWidth variant="ghost">
                      Open Part
                    </Button>
                  </Link>
                  <Button variant="ghost" fullWidth onClick={() => handleRemovePart(part.id)}>
                    Remove
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
