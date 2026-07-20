import { cn } from "@/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "md" | "lg";
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-xl px-5 font-semibold transition-colors disabled:opacity-50",
        fullWidth && "w-full",
        size === "lg" && "min-h-[3.75rem] text-lg",
        size === "md" && "min-h-[3.25rem] text-base",
        variant === "primary" && "bg-accent text-navy hover:bg-accent-hover",
        variant === "secondary" && "bg-blue text-white hover:bg-blue/90",
        variant === "ghost" &&
          "border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-black/[0.03] dark:hover:bg-white/[0.03]",
        variant === "danger" && "bg-danger/10 text-danger hover:bg-danger/20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
