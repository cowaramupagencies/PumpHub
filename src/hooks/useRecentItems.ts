"use client";

import { recentRepository } from "@/data/repositories/recentRepository";
import { pumpRepository } from "@/data/repositories/pumpRepository";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import type { PumpModelDetail } from "@/types";

export interface RecentPumpItem {
  pump: PumpModelDetail;
  viewedAt: number;
}

export function useRecentItems() {
  const recentPumps = useDbLiveQuery<RecentPumpItem[]>(
    async () => {
      const items = await recentRepository.getPumps();
      const pumps: RecentPumpItem[] = [];
      for (const item of items) {
        const pump = await pumpRepository.getModelDetail(item.entityId);
        if (pump) pumps.push({ pump, viewedAt: item.viewedAt });
      }
      return pumps;
    },
    [],
    undefined,
  );

  return {
    pumps: recentPumps ?? [],
    loading: recentPumps === undefined,
  };
}
