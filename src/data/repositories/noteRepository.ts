import { getDb } from "@/data/database/db";
import { createId } from "@/utils";
import type { AttachedEntityType, UserNote } from "@/types";

export const noteRepository = {
  async getForEntity(
    entityType: AttachedEntityType,
    entityId: string,
  ): Promise<UserNote[]> {
    return getDb()
      .userNotes.filter(
        (n) => n.attachedEntityType === entityType && n.attachedEntityId === entityId,
      )
      .reverse()
      .sortBy("updatedAt");
  },

  async getById(id: string): Promise<UserNote | undefined> {
    return getDb().userNotes.get(id);
  },

  async create(
    data: Omit<UserNote, "id" | "createdAt" | "updatedAt">,
  ): Promise<UserNote> {
    const now = Date.now();
    const note: UserNote = {
      ...data,
      id: createId(),
      createdAt: now,
      updatedAt: now,
    };
    await getDb().userNotes.add(note);
    return note;
  },

  async update(
    id: string,
    data: Pick<UserNote, "title" | "body">,
  ): Promise<void> {
    await getDb().userNotes.update(id, { ...data, updatedAt: Date.now() });
  },

  async delete(id: string): Promise<void> {
    await getDb().userNotes.delete(id);
  },
};
