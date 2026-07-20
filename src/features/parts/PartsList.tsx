"use client";

import Link from "next/link";
import { Bookmark, ChevronRight, Copy, MapPin } from "lucide-react";
import { cn } from "@/utils";
import { DAVEY_BASE } from "@/utils/brands";
import { savedRepository } from "@/data/repositories/savedRepository";
import type { Part, PartCompatibility } from "@/types";

interface PartsListProps {
  parts: Part[];
  getCompatibility: (part: Part) => PartCompatibility | undefined;
  selectedReference?: string;
  onCopy: (partNumber: string) => void;
  onFindOnDiagram?: (reference: string) => void;
  copied?: string | null;
}

function compareDiagramRefs(a?: string | null, b?: string | null): number {
  const parse = (value: string) => {
    const match = value.match(/^(\d+)([a-z]*)$/i);
    if (!match) return [9999, value] as const;
    return [Number(match[1]), match[2] ?? ""] as const;
  };

  const refA = a && a !== "—" ? a : null;
  const refB = b && b !== "—" ? b : null;
  if (!refA && !refB) return 0;
  if (!refA) return 1;
  if (!refB) return -1;

  const [numA, suffixA] = parse(refA);
  const [numB, suffixB] = parse(refB);
  if (numA !== numB) return numA - numB;
  return suffixA.localeCompare(suffixB);
}

function sortParts(
  parts: Part[],
  getCompatibility: PartsListProps["getCompatibility"],
): Part[] {
  return [...parts].sort((left, right) => {
    const refCompare = compareDiagramRefs(
      getCompatibility(left)?.diagramReference,
      getCompatibility(right)?.diagramReference,
    );
    if (refCompare !== 0) return refCompare;
    return left.partNumber.localeCompare(right.partNumber);
  });
}

function ActionButton({
  label,
  onClick,
  children,
  active,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClick();
      }}
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors",
        "hover:bg-black/[0.05] hover:text-[var(--foreground)]",
        active && "bg-accent/20 text-[var(--foreground)]",
      )}
    >
      {children}
    </button>
  );
}

export function PartsList({
  parts,
  getCompatibility,
  selectedReference,
  onCopy,
  onFindOnDiagram,
  copied,
}: PartsListProps) {
  const sortedParts = sortParts(parts, getCompatibility);

  if (sortedParts.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-[var(--border-color)] px-4 py-8 text-center text-base text-muted">
        No parts match your search.
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm">
      <div className="hidden border-b border-[var(--border-color)] bg-navy/[0.04] px-3 py-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted sm:grid sm:grid-cols-[2.75rem_6.5rem_minmax(0,1fr)_2.25rem_6.75rem] sm:gap-3">
        <span className="text-center">Ref</span>
        <span>Part No.</span>
        <span>Description</span>
        <span className="text-center">Qty</span>
        <span className="sr-only">Actions</span>
      </div>

      <ul className="divide-y divide-[var(--border-color)]">
        {sortedParts.map((part) => {
          const compatibility = getCompatibility(part);
          const reference = compatibility?.diagramReference;
          const showRef = reference && reference !== "—";
          const isHighlighted = showRef && selectedReference === reference;
          const spec =
            compatibility?.compatibilityNotes ??
            (compatibility?.modelId ? undefined : part.notes);

          return (
            <li
              key={part.id}
              className={cn(
                "transition-colors",
                isHighlighted ? "bg-accent/25" : "hover:bg-black/[0.015]",
              )}
            >
              <div className="flex items-start gap-2.5 px-3 py-2 sm:grid sm:grid-cols-[2.75rem_6.5rem_minmax(0,1fr)_2.25rem_6.75rem] sm:items-center sm:gap-3 sm:py-1.5">
                <div className="flex w-10 shrink-0 justify-center pt-0.5 sm:w-auto sm:pt-0">
                  {showRef ? (
                    <span
                      className={cn(
                        "inline-flex min-w-[1.75rem] items-center justify-center rounded px-1 py-0.5 text-xs font-bold tabular-nums sm:text-sm",
                        isHighlighted
                          ? "bg-accent text-navy"
                          : "bg-[var(--background)] text-[var(--foreground)] ring-1 ring-[var(--border-color)]",
                      )}
                    >
                      {reference}
                    </span>
                  ) : (
                    <span className="text-xs text-muted sm:text-sm">—</span>
                  )}
                </div>

                <Link href={`${DAVEY_BASE}/parts/${part.id}`} className="min-w-0 flex-1 sm:contents">
                  <p className="truncate text-sm font-bold text-blue sm:col-start-2">{part.partNumber}</p>
                  <div className="min-w-0 sm:col-start-3">
                    <p className="line-clamp-2 text-sm leading-snug text-[var(--foreground)] sm:truncate sm:whitespace-nowrap">
                      {part.description}
                    </p>
                    {spec && <p className="mt-0.5 truncate text-xs text-muted">{spec}</p>}
                  </div>
                </Link>

                <span className="hidden text-center text-sm tabular-nums text-muted sm:col-start-4 sm:block">
                  {part.quantity > 0 ? part.quantity : "—"}
                </span>

                <div className="flex shrink-0 items-center gap-0 sm:col-start-5 sm:justify-end">
                  <span className="mr-1 text-xs tabular-nums text-muted sm:hidden">
                    ×{part.quantity > 0 ? part.quantity : "—"}
                  </span>
                  <ActionButton
                    label={copied === part.partNumber ? "Copied" : `Copy ${part.partNumber}`}
                    active={copied === part.partNumber}
                    onClick={() => onCopy(part.partNumber)}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </ActionButton>
                  {showRef && onFindOnDiagram && (
                    <ActionButton
                      label={`Find reference ${reference} on diagram`}
                      onClick={() => onFindOnDiagram(reference!)}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                    </ActionButton>
                  )}
                  <ActionButton
                    label={`Save ${part.partNumber}`}
                    onClick={() => void savedRepository.save("part", part.id)}
                  >
                    <Bookmark className="h-3.5 w-3.5" />
                  </ActionButton>
                  <Link
                    href={`${DAVEY_BASE}/parts/${part.id}`}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-black/[0.05] hover:text-[var(--foreground)]"
                    aria-label={`View ${part.partNumber} details`}
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
