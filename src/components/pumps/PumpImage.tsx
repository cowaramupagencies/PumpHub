import Image from "next/image";
import { Droplets } from "lucide-react";
import { cn } from "@/utils";
import { getPumpFamilyVisual } from "@/utils/pump-families";
import { getPumpImageUrl } from "@/utils/pumps";

interface PumpImageProps {
  slug: string;
  name: string;
  imageUrl?: string;
  familySlug?: string;
  className?: string;
  imageClassName?: string;
  size?: "sm" | "md" | "lg" | "hero";
  priority?: boolean;
}

const sizeClasses = {
  sm: { box: "h-14 w-14", image: "p-1" },
  md: { box: "h-24 w-24", image: "p-2" },
  lg: { box: "h-32 w-full", image: "p-4" },
  hero: { box: "h-48 w-full", image: "p-6" },
};

export function PumpImage({
  slug,
  name,
  imageUrl,
  familySlug,
  className,
  imageClassName,
  size = "md",
  priority = false,
}: PumpImageProps) {
  const src = getPumpImageUrl(slug, imageUrl, familySlug);
  const sizing = sizeClasses[size];
  const familyVisual = familySlug ? getPumpFamilyVisual(familySlug) : undefined;

  if (!src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5",
          sizing.box,
          className,
        )}
      >
        <Droplets className="h-1/2 w-1/2 text-blue opacity-60" aria-hidden />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        familyVisual?.imageBgClass ?? "bg-white",
        sizing.box,
        className,
      )}
    >
      <Image
        src={src}
        alt={`${name} pump`}
        fill
        priority={priority}
        unoptimized
        className={cn("object-contain", sizing.image, imageClassName)}
        sizes={size === "hero" ? "100vw" : size === "lg" ? "400px" : "96px"}
      />
    </div>
  );
}
