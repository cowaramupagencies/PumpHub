import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";

interface ActionCardProps {
  href?: string;
  onClick?: () => void;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ActionCard({
  href,
  onClick,
  icon: Icon,
  title,
  description,
  className,
}: ActionCardProps) {
  const content = (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-navy dark:text-davey-yellow">
        <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-lg font-bold leading-tight">{title}</p>
        <p className="mt-0.5 text-base text-muted leading-snug">{description}</p>
      </div>
      <ChevronRight className="h-6 w-6 shrink-0 text-muted" aria-hidden />
    </>
  );

  const classes = cn(
    "flex min-h-[5.5rem] w-full items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 text-left shadow-sm transition-colors active:bg-black/[0.03] dark:active:bg-white/[0.03]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
