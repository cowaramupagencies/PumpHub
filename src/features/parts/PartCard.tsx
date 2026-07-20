"use client";

import Link from "next/link";
import { Bookmark, Copy, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DAVEY_BASE } from "@/utils/brands";
import { savedRepository } from "@/data/repositories/savedRepository";
import type { Part, PartCompatibility } from "@/types";

interface PartCardProps {
  part: Part;
  compatibility?: PartCompatibility;
  modelName?: string;
  onCopy: (partNumber: string) => void;
  onFindOnDiagram?: (reference: string) => void;
  copied?: string | null;
}

export function PartCard({
  part,
  compatibility,
  modelName,
  onCopy,
  onFindOnDiagram,
  copied,
}: PartCardProps) {
  const ref = compatibility?.diagramReference;
  const showRef = ref && ref !== "—";

  const handleSave = async () => {
    await savedRepository.save("part", part.id);
  };

  return (
    <Card className="relative space-y-4">
      <button
        type="button"
        onClick={handleSave}
        className="absolute right-4 top-4 flex min-h-[3.25rem] min-w-[3.25rem] items-center justify-center rounded-xl border border-[var(--border-color)]"
        aria-label="Save part"
      >
        <Bookmark className="h-5 w-5" />
      </button>

      <Link href={`${DAVEY_BASE}/parts/${part.id}`} className="block pr-14">
        <p className="text-2xl font-bold text-blue">{part.partNumber}</p>
        <p className="mt-1 text-lg">{part.description}</p>
        {showRef && <p className="mt-2 text-base text-muted">Reference {ref}</p>}
        {modelName && <p className="mt-1 text-base text-muted">Fits {modelName}</p>}
      </Link>

      <div className="grid gap-3">
        <Button fullWidth variant="ghost" onClick={() => onCopy(part.partNumber)}>
          <Copy className="h-5 w-5" />
          {copied === part.partNumber ? "Copied!" : "Copy Number"}
        </Button>
        {showRef && onFindOnDiagram && (
          <Button fullWidth variant="ghost" onClick={() => onFindOnDiagram(ref!)}>
            <MapPin className="h-5 w-5" />
            Find on Diagram
          </Button>
        )}
      </div>
    </Card>
  );
}
