"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { ActionCard } from "@/components/ui/ActionCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterToggle } from "@/components/ui/FilterToggle";
import { Button } from "@/components/ui/Button";
import { EmptyState, LoadingSpinner, Card } from "@/components/ui/Card";
import { usePumpSearch } from "@/hooks/usePumpSearch";
import { DAVEY_BASE } from "@/utils/brands";
import type { SearchFilter } from "@/types";
import { Bookmark, Package } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") ?? "";
  const initialFilter = (searchParams.get("filter") as SearchFilter) ?? "all";

  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState<SearchFilter>(
    ["all", "pumps", "parts"].includes(initialFilter) ? initialFilter : "all",
  );

  const { loading, pumps, parts } = usePumpSearch(query, filter);
  const hasQuery = query.trim().length > 0;

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const f = searchParams.get("filter") as SearchFilter;
    if (f && ["all", "pumps", "parts"].includes(f)) setFilter(f);
  }, [searchParams]);

  const syncUrl = (q: string, f: SearchFilter) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (f !== "all") params.set("filter", f);
    router.replace(`${DAVEY_BASE}/search?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-5 pb-4">
      <SearchInput
        placeholder="Enter pump model or part number"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          syncUrl(e.target.value, filter);
        }}
        autoFocus
        aria-label="Search"
      />

      <FilterToggle
        options={[
          { value: "all", label: "Everything" },
          { value: "pumps", label: "Pumps" },
          { value: "parts", label: "Parts" },
        ]}
        value={filter}
        onChange={(v) => {
          setFilter(v as SearchFilter);
          syncUrl(query, v as SearchFilter);
        }}
      />

      {!hasQuery && (
        <div className="space-y-3 pt-2">
          <ActionCard
            href={`${DAVEY_BASE}/browse`}
            icon={Package}
            title="Browse Pumps"
            description="View available pump models"
          />
          <ActionCard
            href={`${DAVEY_BASE}/saved`}
            icon={Bookmark}
            title="View Saved Items"
            description="Open saved pumps and parts"
          />
        </div>
      )}

      {loading && hasQuery && <LoadingSpinner label="Searching…" />}

      {!loading && hasQuery && pumps.length === 0 && parts.length === 0 && (
        <EmptyState message="No matching pumps or parts were found." />
      )}

      {!loading && pumps.length > 0 && (filter === "all" || filter === "pumps") && (
        <section className="space-y-3">
          <h3 className="text-xl font-bold">Pumps</h3>
          {pumps.map((pump) => (
            <Card key={pump.id} className="space-y-4">
              <div>
                <p className="text-2xl font-bold">{pump.model}</p>
                <p className="mt-1 text-base text-muted">
                  {pump.brand} · {pump.family}
                </p>
                <p className="mt-1 text-base text-muted">{pump.category}</p>
              </div>
              <Link href={`${DAVEY_BASE}/pumps/${pump.model.toLowerCase()}`}>
                <Button fullWidth>Open Pump</Button>
              </Link>
            </Card>
          ))}
        </section>
      )}

      {!loading && parts.length > 0 && (filter === "all" || filter === "parts") && (
        <section className="space-y-3">
          <h3 className="text-xl font-bold">Parts</h3>
          {parts.map((part) => (
            <Card key={part.id} className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-blue">{part.partNumber}</p>
                <p className="mt-1 text-lg">{part.description}</p>
                <p className="mt-1 text-base text-muted">
                  {[part.pumpModel, part.family, part.diagramReference && `Reference ${part.diagramReference}`]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <Link href={`${DAVEY_BASE}/parts/${part.id}`}>
                <Button fullWidth>Open Part</Button>
              </Link>
            </Card>
          ))}
        </section>
      )}
    </div>
  );
}

export function SearchPage() {
  return (
    <Suspense fallback={<LoadingSpinner label="Loading search…" />}>
      <SearchContent />
    </Suspense>
  );
}
