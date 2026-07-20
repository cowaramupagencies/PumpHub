import { cn } from "@/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const base = cn(
    "rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-sm",
    onClick && "cursor-pointer active:bg-black/[0.02] dark:active:bg-white/[0.02]",
    className,
  );

  if (onClick) {
    return (
      <button type="button" className={cn(base, "w-full text-left")} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <div className={base}>{children}</div>;
}

export function EmptyState({ message, action }: { message: string; action?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center">
      <p className="text-base text-muted">{message}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 text-xl font-bold md:text-2xl">{children}</h2>;
}

export function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-bold leading-tight md:text-3xl">{children}</h1>;
}

export function LoadingSpinner({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />
      {label && <p className="text-base text-muted">{label}</p>}
    </div>
  );
}
