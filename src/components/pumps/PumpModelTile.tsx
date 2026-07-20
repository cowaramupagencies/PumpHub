import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import { getPumpFamilyVisual } from "@/utils/pump-families";
import { getPumpImageUrl } from "@/utils/pumps";

interface PumpModelTileProps {
  slug: string;
  name: string;
  modelCode?: string;
  href: string;
  familySlug: string;
  imageUrl?: string;
  priority?: boolean;
}

export function PumpModelTile({
  slug,
  name,
  modelCode,
  href,
  familySlug,
  imageUrl,
  priority = false,
}: PumpModelTileProps) {
  const familyVisual = getPumpFamilyVisual(familySlug);
  const src = getPumpImageUrl(slug, imageUrl, familySlug);

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm transition-transform active:scale-[0.98]"
    >
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden",
          familyVisual?.imageBgClass ?? "bg-davey-yellow",
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={name}
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
        <span className="text-base font-bold leading-tight">{name}</span>
        {modelCode && modelCode !== name && (
          <span className="text-xs text-muted">{modelCode}</span>
        )}
      </div>
    </Link>
  );
}
