"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RotateCw, Smartphone, X } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";

interface PumpCurveProps {
  pumpName: string;
  imageUrl: string;
  seriesLabel: string;
  seriesName?: string;
}

async function tryLockLandscape(): Promise<void> {
  try {
    const orientation = screen.orientation as ScreenOrientation & {
      lock?: (orientation: string) => Promise<void>;
    };
    await orientation.lock?.("landscape");
  } catch {
    // Not supported or requires user gesture — rotation hint still shown.
  }
}

async function tryUnlockOrientation(): Promise<void> {
  try {
    await screen.orientation.unlock?.();
  } catch {
    // Ignore unsupported browsers.
  }
}

export function PumpCurve({ pumpName, imageUrl, seriesLabel, seriesName }: PumpCurveProps) {
  const [landscapeOpen, setLandscapeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeLandscape = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => undefined);
    }
    await tryUnlockOrientation();
    setLandscapeOpen(false);
  }, []);

  const openLandscape = useCallback(async () => {
    setLandscapeOpen(true);
    requestAnimationFrame(async () => {
      const overlay = document.getElementById("pump-curve-landscape");
      if (overlay?.requestFullscreen) {
        try {
          await overlay.requestFullscreen();
        } catch {
          // Fullscreen optional — overlay still works.
        }
      }
      await tryLockLandscape();
    });
  }, []);

  useEffect(() => {
    if (!landscapeOpen) return;

    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        void tryUnlockOrientation();
        setLandscapeOpen(false);
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, [landscapeOpen]);

  useEffect(() => {
    if (!landscapeOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [landscapeOpen]);

  const renderCurveImage = (className?: string) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageUrl}
      alt={`${pumpName} performance curve`}
      className={cn(
        "pointer-events-none max-h-full max-w-full select-none object-contain",
        className,
      )}
      draggable={false}
    />
  );

  const landscapeOverlay =
    mounted && landscapeOpen
      ? createPortal(
          <div
            id="pump-curve-landscape"
            className="fixed inset-0 z-[200] flex flex-col bg-white"
            role="dialog"
            aria-modal="true"
            aria-label={`${pumpName} performance curve landscape view`}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--border-color)] px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-base font-bold">{pumpName} curve</p>
                <p className="truncate text-sm text-muted">{seriesLabel}</p>
              </div>
              <button
                type="button"
                onClick={() => void closeLandscape()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)]"
                aria-label="Close landscape view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="shrink-0 px-4 py-2 text-center text-sm text-muted md:hidden">
              Rotate your phone to landscape — the chart stays fixed in place.
            </p>

            <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:p-6">
              {renderCurveImage()}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="space-y-3">
      <div>
        <p className="text-lg font-bold">{pumpName} Performance Curve</p>
        <p className="mt-1 text-base text-muted">
          Your curve: <span className="font-semibold text-[var(--foreground)]">{seriesLabel}</span>
        </p>
      </div>

      <div
        className={cn(
          "flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white",
          "aspect-square max-h-[min(80vw,24rem)] sm:max-h-[28rem]",
        )}
        style={{ touchAction: "manipulation" }}
      >
        {renderCurveImage("h-full w-full")}
      </div>

      <p className="text-sm text-muted">
        Total head (m) vs flow (lpm).
        {seriesName === "XJ Series" || seriesName === "XP Series"
          ? " Lines show performance at different suction lift heights for this pump."
          : seriesName === "HP Series"
            ? " HP45, HP65 and HP85 curves are shown — follow the line labelled "
            : seriesName === "HM Series"
              ? " HM60/HM90 and HM160/HM270 curves are shown — follow the line labelled "
              : " Both HS50 and HS60 curves are shown — follow the line labelled "}
        {seriesName !== "XJ Series" && seriesName !== "XP Series" && (
          <>
            {seriesLabel} for this pump.
          </>
        )}
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button
          type="button"
          variant="secondary"
          fullWidth
          onClick={() => void openLandscape()}
          className="min-h-[3.5rem] sm:hidden"
        >
          <Smartphone className="h-5 w-5 rotate-90" />
          Landscape View
        </Button>
        <Button
          type="button"
          variant="ghost"
          fullWidth
          onClick={() => void openLandscape()}
          className="hidden min-h-[3.5rem] sm:flex"
        >
          <RotateCw className="h-5 w-5" />
          Open Full Chart View
        </Button>
      </div>

      {landscapeOverlay}
    </div>
  );
}
