"use client";

import { savedRepository } from "@/data/repositories/savedRepository";
import { pumpRepository } from "@/data/repositories/pumpRepository";
import { partRepository } from "@/data/repositories/partRepository";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import type { PartDetail, PumpModelDetail, SavedItem } from "@/types";

export interface SavedPumpItem {
  saved: SavedItem;
  pump: PumpModelDetail;
}

export interface SavedPartItem {
  saved: SavedItem;
  part: PartDetail;
}

export function useSavedItems() {
  const saved = useDbLiveQuery<SavedItem[]>(
    () => savedRepository.getAll(),
    [],
    undefined,
  );

  const enriched = useDbLiveQuery<{ pumps: SavedPumpItem[]; parts: SavedPartItem[] }>(
    async () => {
      const items = saved ?? [];
      const pumps: SavedPumpItem[] = [];
      const parts: SavedPartItem[] = [];

      for (const item of items) {
        if (item.entityType === "pumpModel") {
          const pump = await pumpRepository.getModelDetail(item.entityId);
          if (pump) pumps.push({ saved: item, pump });
        } else {
          const part = await partRepository.getPartDetail(item.entityId);
          if (part) parts.push({ saved: item, part });
        }
      }

      return { pumps, parts };
    },
    [saved?.length, saved?.map((s) => s.id).join(",")],
    { pumps: [], parts: [] },
  );

  return {
    loading: saved === undefined,
    pumps: enriched?.pumps ?? [],
    parts: enriched?.parts ?? [],
  };
}

export function useIsSaved(entityType: "pumpModel" | "part", entityId: string) {
  return useDbLiveQuery<boolean>(
    () => savedRepository.isSaved(entityType, entityId),
    [entityType, entityId],
    false,
  );
}
