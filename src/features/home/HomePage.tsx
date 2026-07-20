"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { DaveyQuickLinks } from "@/components/navigation/DaveyQuickLinks";
import { DaveyLogo } from "@/components/brands/DaveyLogo";
import { SearchInput } from "@/components/ui/SearchInput";
import { Button } from "@/components/ui/Button";
import { Card, SectionHeading, EmptyState, LoadingSpinner, PageTitle } from "@/components/ui/Card";
import { useRecentItems } from "@/hooks/useRecentItems";
import { DAVEY_BASE } from "@/utils/brands";

export function HomePage() {
  const router = useRouter();
  const { pumps: recentPumps, loading: recentLoading } = useRecentItems();
  const recentThree = recentPumps.slice(0, 3);

  return (
    <div className="space-y-7 pb-4">
      <div className="rounded-2xl bg-davey-black px-6 py-5 text-center">
        <DaveyLogo variant="wordmark" presentation="hero" priority />
      </div>

      <div>
        <PageTitle>Find a Pump or Part</PageTitle>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => router.push(`${DAVEY_BASE}/search`)}
        onKeyDown={(e) => e.key === "Enter" && router.push(`${DAVEY_BASE}/search`)}
      >
        <SearchInput
          placeholder="Enter pump model or part number"
          readOnly
          className="cursor-pointer"
          aria-label="Search pumps and parts"
        />
      </div>

      <DaveyQuickLinks />

      <section>
        <SectionHeading>Recent Pumps</SectionHeading>
        {recentLoading && <LoadingSpinner label="Loading recent pumps…" />}
        {!recentLoading && recentThree.length === 0 && (
          <EmptyState message="Pumps you open will appear here." />
        )}
        <div className="space-y-3">
          {recentThree.map(({ pump }) => (
            <Card key={pump.id} className="space-y-4">
              <div>
                <p className="text-2xl font-bold">{pump.name}</p>
                <p className="mt-1 text-base text-muted">
                  {pump.brand.name} · {pump.family.name}
                </p>
              </div>
              <Link href={`${DAVEY_BASE}/pumps/${pump.slug}`}>
                <Button fullWidth>Open {pump.name}</Button>
              </Link>
            </Card>
          ))}
        </div>
        {!recentLoading && recentPumps.length > 3 && (
          <Link
            href={`${DAVEY_BASE}/browse`}
            className="mt-3 inline-flex min-h-[3.25rem] items-center text-base font-medium text-blue"
          >
            View all
          </Link>
        )}
      </section>
    </div>
  );
}
