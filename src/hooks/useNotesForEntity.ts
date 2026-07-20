"use client";

import { noteRepository } from "@/data/repositories/noteRepository";
import { useDbLiveQuery } from "@/hooks/useDatabase";
import type { AttachedEntityType, UserNote } from "@/types";

export function useNotesForEntity(
  entityType: AttachedEntityType | undefined,
  entityId: string | undefined,
) {
  const notes = useDbLiveQuery<UserNote[]>(
    () =>
      entityType && entityId
        ? noteRepository.getForEntity(entityType, entityId)
        : Promise.resolve([]),
    [entityType, entityId],
    undefined,
  );

  return {
    notes: notes ?? [],
    loading: notes === undefined,
    isEmpty: notes !== undefined && notes.length === 0,
  };
}
