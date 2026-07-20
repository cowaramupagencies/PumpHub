"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
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

function hotspotCenter(hotspot: DiagramHotspot, viewWidth: number, viewHeight: number) {
  return {
    cx: hotspot.x * viewWidth + (hotspot.width * viewWidth) / 2,
    cy: hotspot.y * viewHeight + (hotspot.height * viewHeight) / 2,
  };
}

export function PumpDiagram({
  pumpName,
  diagram,
  hotspots,
  selectedReference,
  onSelectReference,
  overlay,
}: PumpDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lastTouchDistance = useRef<number | null>(null);

  const viewWidth = diagram?.width ?? 800;
  const viewHeight = diagram?.height ?? 600;
  const hasDiagramImage = Boolean(diagram?.imageUrl);
  const aspectRatio = `${viewWidth} / ${viewHeight}`;

  const resetView = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    resetView();
  }, [diagram?.imageUrl, resetView]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const zoomIn = () => setScale((s) => Math.min(4, s + 0.25));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.25));

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(4, Math.max(0.5, s - e.deltaY * 0.001)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("[data-hotspot]")) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDistance.current = Math.hypot(dx, dy);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDistance.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const delta = dist - lastTouchDistance.current;
      setScale((s) => Math.min(4, Math.max(0.5, s + delta * 0.005)));
      lastTouchDistance.current = dist;
    }
  };

  const handleTouchEnd = () => {
    lastTouchDistance.current = null;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const renderHotspot = (hotspot: DiagramHotspot) => {
    const { cx, cy } = hotspotCenter(hotspot, viewWidth, viewHeight);
    const selected = selectedReference === hotspot.reference;
    const tapRadius = hasDiagramImage ? 22 : selected ? 28 : 24;

    return (
      <g key={hotspot.id} data-hotspot>
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

  const diagramContent = hasDiagramImage && diagram ? (
    <div className="relative h-full w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={diagram.imageUrl}
        alt={`${pumpName} exploded diagram`}
        className="pointer-events-none h-full w-full select-none object-contain object-center"
        draggable={false}
      />
      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {hotspots.map(renderHotspot)}
      </svg>
    </div>
  ) : (
    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="h-full w-full" aria-label="Pump schematic diagram">
      <rect width={viewWidth} height={viewHeight} fill="#f8fafc" rx="8" />
      <rect x="40" y="250" width="720" height="80" rx="12" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      {hotspots.map(renderHotspot)}
    </svg>
  );

  return (
    <div className="space-y-3">
      <p className="text-lg font-bold">{pumpName} Diagram</p>

      <div
        ref={containerRef}
        className={cn(
          "relative isolate z-0 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white",
          isFullscreen ? "fixed inset-0 z-50 rounded-none" : "h-auto w-full max-h-[36rem]",
        )}
        style={
          isFullscreen
            ? { touchAction: "none", cursor: isDragging ? "grabbing" : "grab" }
            : {
                aspectRatio,
                touchAction: "none",
                cursor: isDragging ? "grabbing" : "grab",
              }
        }
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.1s ease",
            }}
          >
            {diagramContent}
          </div>
        </div>
        {overlay && (
          <div className="pointer-events-none absolute inset-x-2 bottom-2 z-20 sm:inset-x-auto sm:right-3 sm:bottom-3">
            <div className="pointer-events-auto mx-auto w-full max-w-[18rem] sm:mx-0">{overlay}</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { icon: ZoomIn, label: "Zoom in", action: zoomIn },
          { icon: ZoomOut, label: "Zoom out", action: zoomOut },
          { icon: RotateCcw, label: "Reset view", action: resetView },
          {
            icon: isFullscreen ? Minimize2 : Maximize2,
            label: isFullscreen ? "Exit" : "Full screen",
            action: toggleFullscreen,
          },
        ].map(({ icon: Icon, label, action }) => (
          <button
            key={label}
            type="button"
            onClick={action}
            className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
