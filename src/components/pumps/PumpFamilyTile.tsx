import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import { getPumpFamilyBrowseLabel, getPumpFamilyVisual } from "@/utils/pump-families";

interface PumpFamilyTileProps {
  familySlug: string;
  familyName: string;
  href: string;
  priority?: boolean;
  catalogueReady?: boolean;
}

export function PumpFamilyTile({
  familySlug,
  familyName,
  href,
  priority = false,
  catalogueReady = true,
}: PumpFamilyTileProps) {
  const visual = getPumpFamilyVisual(familySlug);
  const label = getPumpFamilyBrowseLabel(familySlug, familyName);

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm transition-transform active:scale-[0.98]"
    >
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden",
          visual?.imageBgClass ?? "bg-davey-yellow",
        )}
      >
        {visual?.imageUrl ? (
          <Image
            src={visual.imageUrl}
            alt={label}
            fill
            priority={priority}
            unoptimized
            className="object-contain p-2 transition-transform group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">No image</div>
        )}
      </div>
      <div className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-2 py-3 text-center">
        <span className="text-base font-bold leading-tight">{label}</span>
        {!catalogueReady && <span className="text-xs text-muted">Setup pending</span>}
      </div>
    </Link>
  );
}
