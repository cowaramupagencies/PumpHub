"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Bookmark, Copy, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, LoadingSpinner, EmptyState } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { NotesPanel } from "@/features/notes/NotesPanel";
import { useDbLiveQuery, useCopyFeedback } from "@/hooks/useDatabase";
import { partRepository } from "@/data/repositories/partRepository";
import { savedRepository } from "@/data/repositories/savedRepository";
import { recentRepository } from "@/data/repositories/recentRepository";
import { useIsSaved } from "@/hooks/useSavedItems";
import { DAVEY_BASE } from "@/utils/brands";
import { availabilityLabel } from "@/utils";

export function PartDetailPage() {
  const params = useParams();
  const router = useRouter();
  const partId = params.id as string;

  const part = useDbLiveQuery(
    () => partRepository.getPartDetail(partId),
    [partId],
    undefined,
  );
  const isSaved = useIsSaved("part", partId);
  const { copied, copy } = useCopyFeedback();

  useEffect(() => {
    if (partId) recentRepository.trackView("part", partId);
  }, [partId]);

  if (part === undefined) return <LoadingSpinner label="Loading part…" />;
  if (!part) {
    return (
      <EmptyState
        message="This part could not be opened."
        action={
          <Button variant="ghost" fullWidth onClick={() => router.push(`${DAVEY_BASE}/search`)}>
            Try Again
          </Button>
        }
      />
    );
  }

  const primaryCompat = part.compatibilities[0];
  const pumpModel = part.pumpModels[0];
  const diagramRef = primaryCompat?.diagramReference;
  const fitsLabel =
    part.pumpModels.map((m) => m.name).join(", ") ||
    part.families.map((f) => f.name).join(", ") ||
    "—";

  const catalogueUrl = part.sourceUrl ?? part.families[0]?.sourceUrl;

  const handleSave = async () => {
    await savedRepository.save("part", part.id);
  };

  return (
    <div className="space-y-5 pb-8">
      <PageHeader
        onBack={() => router.back()}
        showSave
        isSaved={isSaved}
        onSave={handleSave}
      />

      <div>
        <h1 className="text-3xl font-bold text-blue">{part.partNumber}</h1>
        <p className="mt-2 text-xl">{part.description}</p>
      </div>

      <div className="space-y-4">
        <Card>
          <p className="text-base font-semibold text-muted">Fits</p>
          <p className="mt-1 text-lg font-medium">{fitsLabel}</p>
        </Card>
        <Card>
          <p className="text-base font-semibold text-muted">Diagram Reference</p>
          <p className="mt-1 text-lg font-medium">
            {diagramRef && diagramRef !== "—" ? diagramRef : "—"}
          </p>
        </Card>
        <Card>
          <p className="text-base font-semibold text-muted">Availability</p>
          <p className="mt-1 text-lg font-medium">{availabilityLabel(part.availability)}</p>
        </Card>
        {part.source && (
          <Card className="space-y-3">
            <h2 className="text-xl font-bold">Catalogue Information</h2>
            {part.source.sourceDescription && (
              <p className="text-base">{part.source.sourceDescription}</p>
            )}
            {part.source.sourceCompatibilityText && (
              <p className="text-base text-muted">{part.source.sourceCompatibilityText}</p>
            )}
            {part.source.sourceQuantityText && (
              <p className="text-base text-muted">Quantity: {part.source.sourceQuantityText}</p>
            )}
            {part.source.lastReviewedAt && (
              <p className="text-sm text-muted">
                Last reviewed: {new Date(part.source.lastReviewedAt).toLocaleDateString()}
              </p>
            )}
            <p className="text-sm text-muted">
              Verification: {part.source.verificationStatus.replace(/_/g, " ")}
            </p>
          </Card>
        )}
      </div>

      <div className="space-y-3">
        <Button fullWidth onClick={() => copy(part.partNumber)}>
          <Copy className="h-5 w-5" />
          {copied === part.partNumber ? "Copied!" : "Copy Part Number"}
        </Button>
        {pumpModel && diagramRef && diagramRef !== "—" && (
          <Link href={`${DAVEY_BASE}/pumps/${pumpModel.slug}?tab=diagram&ref=${diagramRef}`}>
            <Button variant="ghost" fullWidth>
              <MapPin className="h-5 w-5" />
              Find on Diagram
            </Button>
          </Link>
        )}
        <Button variant="ghost" fullWidth onClick={handleSave}>
          <Bookmark className="h-5 w-5" />
          Save Part
        </Button>
        {catalogueUrl && (
          <a href={catalogueUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" fullWidth className="flex-col gap-1 py-4">
              <span className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Open Davey Catalogue
              </span>
              <span className="text-sm font-normal text-muted">Internet required</span>
            </Button>
          </a>
        )}
      </div>

      <section>
        <h2 className="mb-4 text-xl font-bold">My Notes</h2>
        <NotesPanel entityType="part" entityId={part.id} />
      </section>
    </div>
  );
}
