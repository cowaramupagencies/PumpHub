"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card, LoadingSpinner } from "@/components/ui/Card";
import { PumpFamilyTile } from "@/components/pumps/PumpFamilyTile";
import { PumpImage } from "@/components/pumps/PumpImage";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import { pumpRepository } from "@/data/repositories/pumpRepository";
import { getDb } from "@/data/database/db";
import { DAVEY_BASE } from "@/utils/brands";
import { getPumpFamilyBrowseLabel, sortPumpFamiliesForBrowse } from "@/utils/pump-families";
import type { PumpFamily } from "@/types";

function resolveFamilySlug(slug: string[] | undefined): string | undefined {
  if (!slug?.length) return undefined;
  if (slug.length === 1 && slug[0] !== "davey") return slug[0];
  if (slug.length >= 3) return slug[2];
  return undefined;
}

export function BrowsePumpsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string[] | undefined;
  const familySlug = resolveFamilySlug(slug);
  const isFamilyView = Boolean(familySlug);

  const families = useDbLiveQuery(async () => {
    const db = getDb();
    const brand = await db.brands.where("slug").equals("davey").first();
    if (!brand) return [];
    const categories = await db.categories.where("brandId").equals(brand.id).toArray();
    const categoryIds = categories.map((cat) => cat.id);
    const allFamilies: PumpFamily[] = [];
    for (const categoryId of categoryIds) {
      const rows = await db.pumpFamilies.where("categoryId").equals(categoryId).toArray();
      allFamilies.push(...rows);
    }
    return sortPumpFamiliesForBrowse(allFamilies);
  }, [], []);

  const activeFamily = useDbLiveQuery(
    () =>
      familySlug
        ? getDb().pumpFamilies.where("slug").equals(familySlug).first()
        : Promise.resolve(undefined),
    [familySlug],
    undefined,
  );

  const models = useDbLiveQuery(
    () =>
      activeFamily ? pumpRepository.getModelsByFamily(activeFamily.id) : Promise.resolve([]),
    [activeFamily?.id],
    [],
  );

  useEffect(() => {
    if (!slug?.length) return;
    if (slug.length === 1 && slug[0] === "davey") {
      router.replace(`${DAVEY_BASE}/browse`);
      return;
    }
    if (slug.length === 2) {
      router.replace(`${DAVEY_BASE}/browse`);
    }
  }, [slug, router]);

  if (families === undefined || (isFamilyView && activeFamily === undefined)) {
    return <LoadingSpinner label="Loading pumps…" />;
  }

  if (isFamilyView && !activeFamily) {
    return (
      <div className="space-y-5 pb-4">
        <PageHeader title="Browse Pumps" onBack={() => router.push(`${DAVEY_BASE}/browse`)} />
        <Card className="text-base">That pump range could not be found.</Card>
      </div>
    );
  }

  if (isFamilyView && activeFamily) {
    const rangeLabel = getPumpFamilyBrowseLabel(activeFamily.slug, activeFamily.name);

    return (
      <div className="space-y-5 pb-4">
        <PageHeader
          title={rangeLabel}
          subtitle="Choose a model"
          onBack={() => router.push(`${DAVEY_BASE}/browse`)}
        />

        <div className="space-y-3">
          {(models ?? []).map((model) => (
            <Link key={model.id} href={`${DAVEY_BASE}/pumps/${model.slug}`}>
              <Button fullWidth variant="ghost" className="h-auto justify-between gap-3 py-3 text-left">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <PumpImage
                    slug={model.slug}
                    name={model.name}
                    imageUrl={model.imageUrl}
                    familySlug={activeFamily.slug}
                    size="sm"
                  />
                  <div className="min-w-0">
                    <span className="block text-xl font-bold">{model.name}</span>
                    {model.modelCode && (
                      <span className="block text-sm font-normal text-muted">{model.modelCode}</span>
                    )}
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 shrink-0" />
              </Button>
            </Link>
          ))}
        </div>

        {activeFamily.sourceUrl && (
          <Card className="space-y-3 text-base">
            <h2 className="text-lg font-bold">Manufacturer Catalogue</h2>
            <p className="text-muted">Davey Ricambio</p>
            <p className="text-sm text-muted">
              PumpHub is an independent reference tool. Confirm current manufacturer information
              before ordering.
            </p>
            <a href={activeFamily.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Button fullWidth variant="ghost">
                Open Davey Catalogue
              </Button>
            </a>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-4">
      <PageHeader title="Browse Pumps" subtitle="Choose a pump range" onBack={() => router.push(DAVEY_BASE)} />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {(families ?? []).map((family, index) => (
          <PumpFamilyTile
            key={family.id}
            familySlug={family.slug}
            familyName={family.name}
            href={`${DAVEY_BASE}/browse/${family.slug}`}
            priority={index < 3}
            catalogueReady={Boolean(family.sourceUrl)}
          />
        ))}
      </div>
    </div>
  );
}
