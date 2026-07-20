"use client";

import { cn } from "@/utils";

interface FilterToggleProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterToggle({ options, value, onChange }: FilterToggleProps) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }} role="group">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "min-h-[3.25rem] rounded-xl border-2 px-2 text-base font-semibold transition-colors",
            value === opt.value
              ? "border-blue bg-blue/10 text-blue"
              : "border-[var(--border-color)] bg-[var(--card-bg)] text-muted",
          )}
          aria-pressed={value === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
