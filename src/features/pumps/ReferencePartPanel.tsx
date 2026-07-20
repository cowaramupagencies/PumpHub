"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Bookmark, Copy, X } from "lucide-react";
import { cn } from "@/utils";
import { DAVEY_BASE } from "@/utils/brands";
import { savedRepository } from "@/data/repositories/savedRepository";
import type { HotspotPartOption } from "@/types";

interface ReferencePartPanelProps {
  reference: string;
  pumpName: string;
  parts: HotspotPartOption[];
  onClose: () => void;
  onCopy: (partNumber: string) => void;
  copied?: string | null;
}

export function ReferencePartPanel({
  reference,
  pumpName,
  parts,
  onClose,
  onCopy,
  copied,
}: ReferencePartPanelProps) {
  const currentParts = parts.filter((option) => option.isCurrentModel);
  const otherParts = parts.filter((option) => !option.isCurrentModel);

  return (
    <div
      className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/95 shadow-md backdrop-blur-sm"
      role="dialog"
      aria-label={`Reference ${reference} parts`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-[var(--border-color)] px-2.5 py-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="inline-flex min-w-[1.5rem] items-center justify-center rounded bg-accent px-1.5 py-0.5 text-xs font-bold text-navy">
            {reference}
          </span>
          <p className="truncate text-sm font-semibold">Ref {reference}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border-color)]"
          aria-label="Close reference panel"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="max-h-[9.5rem] overflow-y-auto overscroll-contain px-2.5 py-2">
        {parts.length === 0 ? (
          <p className="py-2 text-center text-xs text-muted">
            No parts in the catalogue for this reference yet.
          </p>
        ) : (
          <div className="space-y-2">
            {currentParts.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                  For {pumpName}
                </p>
                {currentParts.map(({ part, compatibility }) => (
                  <PartRow
                    key={part.id}
                    partNumber={part.partNumber}
                    description={part.description}
                    quantity={part.quantity}
                    note={compatibility.compatibilityNotes}
                    copied={copied}
                    onCopy={onCopy}
                    partId={part.id}
                  />
                ))}
              </div>
            )}

            {otherParts.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                  Other models
                </p>
                {otherParts.map(({ part, compatibility }) => (
                  <PartRow
                    key={part.id}
                    partNumber={part.partNumber}
                    description={part.description}
                    quantity={part.quantity}
                    note={compatibility.compatibilityNotes}
                    copied={copied}
                    onCopy={onCopy}
                    partId={part.id}
                    compact
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PartRow({
  partNumber,
  description,
  quantity,
  note,
  copied,
  onCopy,
  partId,
  compact,
}: {
  partNumber: string;
  description: string;
  quantity: number;
  note?: string;
  copied?: string | null;
  onCopy: (partNumber: string) => void;
  partId: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--border-color)] bg-[var(--background)]/60 px-2 py-1.5",
        compact && "opacity-90",
      )}
    >
      <div className="flex items-start gap-1.5">
        <Link href={`${DAVEY_BASE}/parts/${partId}`} className="min-w-0 flex-1">
          <p className="text-xs font-bold leading-tight text-blue">{partNumber}</p>
          <p className="mt-0.5 line-clamp-2 text-xs leading-snug">{description}</p>
          {note && !compact && <p className="mt-0.5 line-clamp-1 text-[0.65rem] text-muted">{note}</p>}
        </Link>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="text-[0.65rem] tabular-nums text-muted">×{quantity > 0 ? quantity : "—"}</span>
          {!compact && (
            <div className="flex gap-0.5">
              <IconAction
                label={copied === partNumber ? "Copied" : "Copy part number"}
                onClick={() => onCopy(partNumber)}
              >
                <Copy className="h-3.5 w-3.5" />
              </IconAction>
              <IconAction
                label="Save part"
                onClick={() => void savedRepository.save("part", partId)}
              >
                <Bookmark className="h-3.5 w-3.5" />
              </IconAction>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function IconAction({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--card-bg)]"
      aria-label={label}
    >
      {children}
    </button>
  );
}
