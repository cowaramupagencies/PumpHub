"use client";

import { pumpRepository } from "@/data/repositories/pumpRepository";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import type { PumpModelDetail } from "@/types";

export function usePumpModel(modelId: string | undefined) {
  return useDbLiveQuery<PumpModelDetail | undefined>(
    () => (modelId ? pumpRepository.getModelDetail(modelId) : Promise.resolve(undefined)),
    [modelId],
    undefined,
  );
}
