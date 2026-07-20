"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, EmptyState, LoadingSpinner } from "@/components/ui/Card";
import { noteRepository } from "@/data/repositories/noteRepository";
import { useNotesForEntity } from "@/hooks/useNotesForEntity";
import type { AttachedEntityType } from "@/types";

interface NotesPanelProps {
  entityType: AttachedEntityType;
  entityId: string;
}

export function NotesPanel({ entityType, entityId }: NotesPanelProps) {
  const { notes, loading, isEmpty } = useNotesForEntity(entityType, entityId);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const resetForm = () => {
    setTitle("");
    setBody("");
    setEditingId(null);
    setShowForm(false);
    setError(null);
  };

  const handleSave = async () => {
    if (!body.trim()) {
      setError("Please enter a note.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const noteTitle = title.trim() || "Note";
      if (editingId) {
        await noteRepository.update(editingId, { title: noteTitle, body: body.trim() });
      } else {
        await noteRepository.create({
          title: noteTitle,
          body: body.trim(),
          attachedEntityType: entityType,
          attachedEntityId: entityId,
        });
      }
      resetForm();
    } catch {
      setError("Could not save note. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (note: { id: string; title: string; body: string }) => {
    setEditingId(note.id);
    setTitle(note.title);
    setBody(note.body);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (deleteConfirm !== id) {
      setDeleteConfirm(id);
      return;
    }
    await noteRepository.delete(id);
    setDeleteConfirm(null);
    if (editingId === id) resetForm();
  };

  return (
    <div className="space-y-4">
      {loading && <LoadingSpinner label="Loading notes…" />}

      {!loading && isEmpty && !showForm && (
        <EmptyState message="No notes added yet." />
      )}

      {!showForm && (
        <Button fullWidth onClick={() => setShowForm(true)}>
          Add Note
        </Button>
      )}

      {showForm && (
        <Card className="space-y-4">
          <h3 className="text-lg font-bold">{editingId ? "Edit Note" : "Add Note"}</h3>
          <input
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full min-h-[3.25rem] rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 text-base"
          />
          <textarea
            placeholder="Write your note here…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-base resize-none"
          />
          {error && <p className="text-base text-danger">{error}</p>}
          <Button fullWidth onClick={handleSave} disabled={saving}>
            {saving ? "Saving…" : "Save Note"}
          </Button>
          <Button variant="ghost" fullWidth onClick={resetForm}>
            Cancel
          </Button>
        </Card>
      )}

      {!loading &&
        notes.map((note) => (
          <Card key={note.id} className="space-y-3">
            <div>
              <p className="text-lg font-bold">{note.title}</p>
              <p className="mt-2 whitespace-pre-wrap text-base">{note.body}</p>
              <p className="mt-3 text-sm text-muted">
                Updated {new Date(note.updatedAt).toLocaleString()}
              </p>
            </div>
            <Button variant="ghost" fullWidth onClick={() => handleEdit(note)}>
              Edit
            </Button>
            <Button
              variant={deleteConfirm === note.id ? "danger" : "ghost"}
              fullWidth
              onClick={() => handleDelete(note.id)}
            >
              {deleteConfirm === note.id ? "Confirm Delete" : "Delete"}
            </Button>
          </Card>
        ))}
    </div>
  );
}
