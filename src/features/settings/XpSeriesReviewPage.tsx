"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, LoadingSpinner, SectionHeading } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { getBundledXpDraft } from "@/lib/ricambio/parse-xp-series";
import {
  approveXpSeriesImport,
  getLatestXpDraft,
  saveXpImportDraft,
} from "@/services/xpSeriesImportService";
import { DAVEY_BASE } from "@/utils/brands";
import type { DraftPartRecord, XpSeriesImportDraft } from "@/types/catalogue-import";

export function XpSeriesReviewPage() {
  const router = useRouter();
  const [draft, setDraft] = useState<XpSeriesImportDraft | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      let existing = await getLatestXpDraft();
      if (!existing) {
        existing = getBundledXpDraft();
        await saveXpImportDraft(existing);
      }
      if (active) {
        setDraft(existing);
        setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => {
    if (!draft) return null;
    const report = draft.parseReport;
    return {
      models: 3,
      parts: draft.parts.length,
      approved: draft.parts.filter((p) => p.reviewStatus === "approved").length,
      excluded: draft.parts.filter((p) => p.reviewStatus === "excluded").length,
      verify: draft.parts.filter((p) => p.compatibilityScope === "verify").length,
      hotspots: draft.hotspots.length,
      missingDescriptions: report?.missingDescriptions ?? 0,
      duplicates: report?.duplicatePartNumbers ?? 0,
      diagramStatus: report?.diagramStatus ?? "missing",
    };
  }, [draft]);

  const updatePart = (partNumber: string, patch: Partial<DraftPartRecord>) => {
    if (!draft) return;
    setDraft({
      ...draft,
      parts: draft.parts.map((p) =>
        p.partNumber === partNumber ? { ...p, ...patch, reviewStatus: patch.reviewStatus ?? "edited" } : p,
      ),
    });
  };

  const fetchLive = async () => {
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch("/api/catalogue/fetch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ includeDiagram: true, family: "xp" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Fetch failed");
      await saveXpImportDraft(data.draft);
      setDraft(data.draft);
      setMessage("Live catalogue fetched.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not fetch catalogue.");
    } finally {
      setLoading(false);
    }
  };

  const approveAllIllustrated = async () => {
    if (!draft) return;
    const next: XpSeriesImportDraft = {
      ...draft,
      parts: draft.parts.map((p) =>
        p.reviewStatus === "excluded"
          ? p
          : {
              ...p,
              reviewStatus: "approved" as const,
              verificationStatus:
                p.compatibilityScope === "verify" ? "requires_verification" : "verified",
            },
      ),
    };
    setDraft(next);
    await saveXpImportDraft(next);
  };

  const approveImport = async () => {
    if (!draft) return;
    setLoading(true);
    setMessage(null);
    try {
      const approvedCount = draft.parts.filter((p) => p.reviewStatus === "approved").length;
      if (approvedCount === 0) {
        throw new Error("Approve at least one part before importing.");
      }
      await saveXpImportDraft(draft);
      const history = await approveXpSeriesImport(draft);
      setMessage(
        `Import complete. ${history.partsApproved} parts approved, ${history.mappedReferences} references mapped.`,
      );
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Import failed.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !draft) return <LoadingSpinner label="Loading XP Series review…" />;

  return (
    <div className="space-y-5 pb-8">
      <PageHeader title="XP Series Review" onBack={() => router.push(`${DAVEY_BASE}/settings`)} />

      {message && <Card className="text-base">{message}</Card>}

      {stats && (
        <Card className="space-y-2 text-base">
          <p>Models: {stats.models}</p>
          <p>Parts detected: {stats.parts}</p>
          <p>Approved: {stats.approved}</p>
          <p>Excluded: {stats.excluded}</p>
          <p>Requires verification: {stats.verify}</p>
          <p>Mapped diagram references: {stats.hotspots}</p>
          <p>Diagram status: {stats.diagramStatus}</p>
          {stats.duplicates > 0 && <p>Duplicate part numbers: {stats.duplicates}</p>}
        </Card>
      )}

      <div className="space-y-3">
        <Button fullWidth variant="ghost" onClick={fetchLive}>
          Fetch Live Davey Catalogue
        </Button>
        <Button fullWidth variant="ghost" onClick={approveAllIllustrated}>
          Approve All Illustrated Parts
        </Button>
        <Button fullWidth onClick={approveImport}>
          Approve & Update Live Catalogue
        </Button>
      </div>

      <SectionHeading>Parts</SectionHeading>
      <div className="space-y-3">
        {(draft?.parts ?? []).map((part) => (
          <Card key={part.partNumber} className="space-y-3">
            <button
              type="button"
              className="w-full text-left"
              onClick={() =>
                setExpanded(expanded === part.partNumber ? null : part.partNumber)
              }
            >
              <p className="text-xl font-bold">{part.partNumber}</p>
              <p className="text-base">{part.description}</p>
              <p className="mt-1 text-sm text-muted">
                Ref {part.diagramReference ?? "—"} · {part.compatibilityScope} · {part.reviewStatus}
              </p>
            </button>
            {expanded === part.partNumber && (
              <div className="space-y-2">
                <Button
                  fullWidth
                  variant={part.reviewStatus === "approved" ? "primary" : "ghost"}
                  onClick={() => updatePart(part.partNumber, { reviewStatus: "approved" })}
                >
                  Approve
                </Button>
                <Button
                  fullWidth
                  variant="ghost"
                  onClick={() =>
                    updatePart(part.partNumber, {
                      reviewStatus: "excluded",
                      verificationStatus: "excluded",
                    })
                  }
                >
                  Exclude
                </Button>
                <Button
                  fullWidth
                  variant="ghost"
                  onClick={() =>
                    updatePart(part.partNumber, {
                      compatibilityScope: "verify",
                      verificationStatus: "requires_verification",
                    })
                  }
                >
                  Mark Requires Verification
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>

      <p className="text-sm text-muted">
        PumpHub is an independent reference tool. Confirm current manufacturer information before
        ordering.
      </p>
    </div>
  );
}
