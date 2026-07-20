"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";

interface SettingsRowProps {
  label: string;
  value?: string;
  onClick?: () => void;
  destructive?: boolean;
  className?: string;
}

export function SettingsRow({
  label,
  value,
  onClick,
  destructive,
  className,
}: SettingsRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-[3.75rem] w-full items-center justify-between gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] px-5 text-left text-lg font-medium",
        destructive ? "text-danger" : "text-foreground",
        className,
      )}
    >
      <span>{label}</span>
      <span className="flex items-center gap-2 text-base text-muted">
        {value && <span>{value}</span>}
        <ChevronRight className="h-5 w-5 shrink-0" aria-hidden />
      </span>
    </button>
  );
}
