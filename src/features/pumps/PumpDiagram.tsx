"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/utils";
import type { DiagramHotspot } from "@/types";

interface PumpDiagramProps {
  pumpName: string;
  diagram?: {
    imageUrl: string;
    width: number;
    height: number;
    imageType?: "svg" | "png" | "jpg";
  };
  hotspots: DiagramHotspot[];
  selectedReference?: string;
  onSelectReference: (reference: string) => void;
  overlay?: ReactNode;
}

interface PanZoomState {
  scale: number;
  offset: { x: number; y: number };
}

function hotspotCenter(hotspot: DiagramHotspot, viewWidth: number, viewHeight: number) {
  return {
    cx: hotspot.x * viewWidth + (hotspot.width * viewWidth) / 2,
    cy: hotspot.y * viewHeight + (hotspot.height * viewHeight) / 2,
  };
}

function clampOffset(
  offset: { x: number; y: number },
  scale: number,
  width: number,
  height: number,
): { x: number; y: number } {
  if (scale <= 1 || width <= 0 || height <= 0) {
    return { x: 0, y: 0 };
  }

  const maxX = (width * (scale - 1)) / 2;
  const maxY = (height * (scale - 1)) / 2;
  return {
    x: Math.max(-maxX, Math.min(maxX, offset.x)),
    y: Math.max(-maxY, Math.min(maxY, offset.y)),
  };
}

function usePanZoom(enabled: boolean) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<PanZoomState>({ scale: 1, offset: { x: 0, y: 0 } });
  const stateRef = useRef(state);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });
  const touchPanStart = useRef<{ x: number; y: number; offsetX: number; offsetY: number } | null>(
    null,
  );
  const lastTouchDistance = useRef<number | null>(null);
  const pinching = useRef(false);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const isHotspotTarget = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest("[data-hotspot]"));

  const getViewportSize = useCallback(() => {
    const rect = viewportRef.current?.getBoundingClientRect();
    return {
      width: rect?.width ?? 0,
      height: rect?.height ?? 0,
    };
  }, []);

  const applyState = useCallback(
    (updater: (current: PanZoomState) => PanZoomState) => {
      setState((current) => {
        const next = updater(current);
        const { width, height } = getViewportSize();
        const clamped = {
          scale: next.scale,
          offset: clampOffset(next.offset, next.scale, width, height),
        };
        stateRef.current = clamped;
        return clamped;
      });
    },
    [getViewportSize],
  );

  const resetView = useCallback(() => {
    const reset = { scale: 1, offset: { x: 0, y: 0 } };
    stateRef.current = reset;
    setState(reset);
  }, []);

  const zoomIn = useCallback(() => {
    applyState((current) => ({
      scale: Math.min(4, current.scale + 0.25),
      offset: current.offset,
    }));
  }, [applyState]);

  const zoomOut = useCallback(() => {
    applyState((current) => ({
      scale: Math.max(1, current.scale - 0.25),
      offset: current.offset,
    }));
  }, [applyState]);

  useEffect(() => {
    if (!enabled) {
      resetView();
    }
  }, [enabled, resetView]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node || !enabled) return;

    const onTouchStart = (event: TouchEvent) => {
      if (isHotspotTarget(event.target)) return;

      if (event.touches.length === 2) {
        pinching.current = true;
        touchPanStart.current = null;
        setIsDragging(false);
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        lastTouchDistance.current = Math.hypot(dx, dy);
        return;
      }

      if (event.touches.length === 1 && stateRef.current.scale > 1) {
        const touch = event.touches[0];
        touchPanStart.current = {
          x: touch.clientX,
          y: touch.clientY,
          offsetX: stateRef.current.offset.x,
          offsetY: stateRef.current.offset.y,
        };
        setIsDragging(true);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2 && lastTouchDistance.current !== null) {
        event.preventDefault();
        pinching.current = true;
        touchPanStart.current = null;
        setIsDragging(false);

        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const delta = dist - lastTouchDistance.current;
        lastTouchDistance.current = dist;

        applyState((current) => ({
          scale: Math.min(4, Math.max(1, current.scale + delta * 0.008)),
          offset: current.offset,
        }));
        return;
      }

      if (
        event.touches.length === 1 &&
        touchPanStart.current &&
        !pinching.current &&
        stateRef.current.scale > 1
      ) {
        event.preventDefault();
        const touch = event.touches[0];
        const start = touchPanStart.current;

        applyState((current) => ({
          scale: current.scale,
          offset: {
            x: start.offsetX + (touch.clientX - start.x),
            y: start.offsetY + (touch.clientY - start.y),
          },
        }));
      }
    };

    const onTouchEnd = () => {
      lastTouchDistance.current = null;
      pinching.current = false;
      touchPanStart.current = null;
      setIsDragging(false);
    };

    node.addEventListener("touchstart", onTouchStart, { passive: true });
    node.addEventListener("touchmove", onTouchMove, { passive: false });
    node.addEventListener("touchend", onTouchEnd);
    node.addEventListener("touchcancel", onTouchEnd);

    return () => {
      node.removeEventListener("touchstart", onTouchStart);
      node.removeEventListener("touchmove", onTouchMove);
      node.removeEventListener("touchend", onTouchEnd);
      node.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [applyState, enabled]);

  const handlePointerDown = (event: React.PointerEvent) => {
    if (!enabled || pinching.current || event.pointerType === "touch") return;
    if (isHotspotTarget(event.target)) return;
    if (stateRef.current.scale <= 1) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      offsetX: stateRef.current.offset.x,
      offsetY: stateRef.current.offset.y,
    };
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging) return;

    applyState((current) => ({
      scale: current.scale,
      offset: {
        x: dragStart.current.offsetX + (event.clientX - dragStart.current.x),
        y: dragStart.current.offsetY + (event.clientY - dragStart.current.y),
      },
    }));
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (!enabled) return;
    event.preventDefault();
    applyState((current) => ({
      scale: Math.min(4, Math.max(1, current.scale - event.deltaY * 0.001)),
      offset: current.offset,
    }));
  };

  return {
    viewportRef,
    state,
    isDragging,
    resetView,
    zoomIn,
    zoomOut,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleWheel,
  };
}

interface DiagramCanvasProps {
  pumpName: string;
  diagram?: PumpDiagramProps["diagram"];
  hotspots: DiagramHotspot[];
  selectedReference?: string;
  onSelectReference: (reference: string) => void;
  panZoom: ReturnType<typeof usePanZoom>;
  className?: string;
  style?: React.CSSProperties;
}

function DiagramCanvas({
  pumpName,
  diagram,
  hotspots,
  selectedReference,
  onSelectReference,
  panZoom,
  className,
  style,
}: DiagramCanvasProps) {
  const viewWidth = diagram?.width ?? 800;
  const viewHeight = diagram?.height ?? 600;
  const hasDiagramImage = Boolean(diagram?.imageUrl);

  const renderHotspot = (hotspot: DiagramHotspot) => {
    const { cx, cy } = hotspotCenter(hotspot, viewWidth, viewHeight);
    const selected = selectedReference === hotspot.reference;
    const tapRadius = hasDiagramImage ? 22 : selected ? 28 : 24;

    return (
      <g key={hotspot.id} data-hotspot className="pointer-events-auto">
        <circle
          cx={cx}
          cy={cy}
          r={tapRadius}
          fill={selected ? "rgba(255, 210, 0, 0.45)" : "rgba(59, 130, 246, 0.08)"}
          stroke={selected ? "#ffd200" : hasDiagramImage ? "transparent" : "#3b82f6"}
          strokeWidth={selected ? 4 : 3}
          className="cursor-pointer"
          onClick={() => onSelectReference(hotspot.reference)}
          role="button"
          aria-label={`Diagram reference ${hotspot.reference}`}
        />
        {!hasDiagramImage && (
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fill="#1a2744"
            fontSize="18"
            fontWeight="bold"
            pointerEvents="none"
          >
            {hotspot.reference}
          </text>
        )}
      </g>
    );
  };

  const diagramContent =
    hasDiagramImage && diagram ? (
      <div className="relative h-full min-h-[12rem] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={diagram.imageUrl}
          alt={`${pumpName} exploded diagram`}
          className="pointer-events-none h-full w-full select-none object-contain object-center"
          draggable={false}
        />
        <svg
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          {hotspots.map(renderHotspot)}
        </svg>
      </div>
    ) : (
      <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="h-full w-full min-h-[12rem]" aria-label="Pump schematic diagram">
        <rect width={viewWidth} height={viewHeight} fill="#f8fafc" rx="8" />
        <rect x="40" y="250" width="720" height="80" rx="12" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
        {hotspots.map(renderHotspot)}
      </svg>
    );

  return (
    <div
      ref={panZoom.viewportRef}
      className={cn("relative overflow-hidden bg-white", className)}
      style={{ touchAction: "none", ...style }}
      onWheel={panZoom.handleWheel}
      onPointerDown={panZoom.handlePointerDown}
      onPointerMove={panZoom.handlePointerMove}
      onPointerUp={panZoom.handlePointerUp}
      onPointerLeave={panZoom.handlePointerUp}
      onPointerCancel={panZoom.handlePointerUp}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            transform: `translate3d(${panZoom.state.offset.x}px, ${panZoom.state.offset.y}px, 0) scale(${panZoom.state.scale})`,
            transformOrigin: "center center",
            transition: panZoom.isDragging ? "none" : "transform 0.12s ease-out",
            willChange: "transform",
          }}
        >
          <div className="h-full w-full">{diagramContent}</div>
        </div>
      </div>
    </div>
  );
}

function ZoomControls({
  onZoomIn,
  onZoomOut,
  onReset,
  compact = false,
}: {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  compact?: boolean;
}) {
  const buttons = [
    { icon: ZoomIn, label: "Zoom in", action: onZoomIn },
    { icon: ZoomOut, label: "Zoom out", action: onZoomOut },
    { icon: RotateCcw, label: "Reset view", action: onReset },
  ] as const;

  return (
    <div className={cn("grid gap-2", compact ? "grid-cols-3" : "grid-cols-3 sm:grid-cols-3")}>
      {buttons.map(({ icon: Icon, label, action }) => (
        <button
          key={label}
          type="button"
          onClick={action}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
          {!compact && <span className="hidden sm:inline">{label}</span>}
        </button>
      ))}
    </div>
  );
}

export function PumpDiagram({
  pumpName,
  diagram,
  hotspots,
  selectedReference,
  onSelectReference,
  overlay,
}: PumpDiagramProps) {
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inlinePanZoom = usePanZoom(true);
  const expandedPanZoom = usePanZoom(expandedOpen);
  const { resetView: resetInlineView } = inlinePanZoom;
  const { resetView: resetExpandedView } = expandedPanZoom;

  const viewWidth = diagram?.width ?? 800;
  const viewHeight = diagram?.height ?? 600;
  const aspectRatio = `${viewWidth} / ${viewHeight}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    resetInlineView();
  }, [diagram?.imageUrl, resetInlineView]);

  useEffect(() => {
    if (!expandedOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [expandedOpen]);

  const openExpanded = useCallback(() => {
    resetExpandedView();
    setExpandedOpen(true);
  }, [resetExpandedView]);

  const closeExpanded = useCallback(() => {
    setExpandedOpen(false);
    resetExpandedView();
  }, [resetExpandedView]);

  const expandedOverlay =
    mounted && expandedOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-white"
            role="dialog"
            aria-modal="true"
            aria-label={`${pumpName} diagram expanded view`}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--border-color)] px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-base font-bold">{pumpName} diagram</p>
                <p className="text-sm text-muted">Pinch to zoom · drag with one finger when zoomed in</p>
              </div>
              <button
                type="button"
                onClick={closeExpanded}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)]"
                aria-label="Close expanded diagram"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1">
              <DiagramCanvas
                pumpName={pumpName}
                diagram={diagram}
                hotspots={hotspots}
                selectedReference={selectedReference}
                onSelectReference={onSelectReference}
                panZoom={expandedPanZoom}
                className="h-full w-full"
              />
            </div>

            <div className="shrink-0 border-t border-[var(--border-color)] p-3">
              <ZoomControls
                onZoomIn={expandedPanZoom.zoomIn}
                onZoomOut={expandedPanZoom.zoomOut}
                onReset={expandedPanZoom.resetView}
                compact
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="space-y-3">
      <p className="text-lg font-bold">{pumpName} Diagram</p>

      <div className="relative isolate overflow-hidden rounded-2xl border border-[var(--border-color)]">
        <DiagramCanvas
          pumpName={pumpName}
          diagram={diagram}
          hotspots={hotspots}
          selectedReference={selectedReference}
          onSelectReference={onSelectReference}
          panZoom={inlinePanZoom}
          className="w-full max-h-[36rem]"
          style={{ aspectRatio, cursor: inlinePanZoom.isDragging ? "grabbing" : "grab" }}
        />
        {overlay && (
          <div className="pointer-events-none absolute inset-x-2 bottom-2 z-20 sm:inset-x-auto sm:right-3 sm:bottom-3">
            <div className="pointer-events-auto mx-auto w-full max-w-[18rem] sm:mx-0">{overlay}</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button
          type="button"
          onClick={inlinePanZoom.zoomIn}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-5 w-5" />
          <span className="hidden sm:inline">Zoom in</span>
        </button>
        <button
          type="button"
          onClick={inlinePanZoom.zoomOut}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-5 w-5" />
          <span className="hidden sm:inline">Zoom out</span>
        </button>
        <button
          type="button"
          onClick={inlinePanZoom.resetView}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium"
          aria-label="Reset view"
        >
          <RotateCcw className="h-5 w-5" />
          <span className="hidden sm:inline">Reset view</span>
        </button>
        <button
          type="button"
          onClick={openExpanded}
          className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium"
          aria-label="Expand diagram"
        >
          <Maximize2 className="h-5 w-5" />
          <span className="hidden sm:inline">Expand</span>
        </button>
      </div>

      {expandedOverlay}
    </div>
  );
}
