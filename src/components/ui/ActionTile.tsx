import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";

interface ActionTileProps {
  href?: string;
  onClick?: () => void;
  icon: LucideIcon;
  title: string;
  description?: string;
  iconBgClass?: string;
  className?: string;
}

export function ActionTile({
  href,
  onClick,
  icon: Icon,
  title,
  description,
  iconBgClass = "bg-davey-yellow",
  className,
}: ActionTileProps) {
  const classes = cn(
    "group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm transition-transform active:scale-[0.98]",
    className,
  );

  const content = (
    <>
      <div
        className={cn(
          "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden",
          iconBgClass,
        )}
      >
        <Icon className="h-12 w-12 text-navy" strokeWidth={2} aria-hidden />
      </div>
      <div className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-2 py-3 text-center">
        <span className="text-base font-bold leading-tight">{title}</span>
        {description && <span className="line-clamp-2 text-xs text-muted">{description}</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cn(classes, "text-left")}>
      {content}
    </button>
  );
}

export function ActionTileGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("grid grid-cols-2 gap-3", className)}>{children}</div>;
}
