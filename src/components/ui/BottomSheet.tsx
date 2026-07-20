"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/utils";
import type { ReactNode } from "react";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  /** Bottom sheets for large content; center for compact pickers like settings */
  placement?: "bottom" | "center";
}

export function BottomSheet({
  open,
  onClose,
  title,
  children,
  placement = "bottom",
}: BottomSheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[100] flex justify-center p-5",
        placement === "center" ? "items-center" : "items-end pb-8",
      )}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close"
      />
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-lg bg-[var(--card-bg)] p-6 shadow-xl",
          placement === "center"
            ? "rounded-3xl max-h-[min(80dvh,calc(100dvh-2.5rem))]"
            : "rounded-t-3xl max-h-[min(75dvh,calc(100dvh-env(safe-area-inset-bottom)-6rem))]",
          "overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))]",
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          {title && <h3 className="text-2xl font-bold">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex min-h-[3.25rem] min-w-[3.25rem] shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)]"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
