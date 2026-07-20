"use client";

import { partRepository } from "@/data/repositories/partRepository";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import type { Part } from "@/types";

export function usePartsForModel(modelId: string | undefined, familyId: string | undefined) {
  return useDbLiveQuery<Part[]>(
    () =>
      modelId && familyId
        ? partRepository.getPartsForModel(modelId, familyId)
        : Promise.resolve([]),
    [modelId, familyId],
    [],
  );
}
