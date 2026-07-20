"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Bookmark } from "lucide-react";
import { cn } from "@/utils";

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  showSave?: boolean;
  isSaved?: boolean;
  onSave?: () => void;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  onBack,
  showSave,
  isSaved,
  onSave,
  className,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className={cn("flex items-start gap-3", className)}>
      <button
        type="button"
        onClick={onBack ?? (() => router.back())}
        className="flex min-h-[3.25rem] min-w-[3.25rem] shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]"
        aria-label="Go back"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      {(title || subtitle) && (
        <div className="min-w-0 flex-1 pt-1">
          {title && <h1 className="text-2xl font-bold leading-tight md:text-3xl">{title}</h1>}
          {subtitle && <p className="mt-1 text-base text-muted">{subtitle}</p>}
        </div>
      )}
      {showSave && (
        <button
          type="button"
          onClick={onSave}
          className="flex min-h-[3.25rem] min-w-[3.25rem] shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]"
          aria-label={isSaved ? "Saved" : "Save"}
        >
          <Bookmark className={cn("h-6 w-6", isSaved && "fill-accent text-accent")} />
        </button>
      )}
    </div>
  );
}
