"use client";

import { useCallback, useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { ensureSeeded } from "@/data/seed/seed-manager";
import { getDb } from "@/data/database/db";

export function useDatabaseReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureSeeded().then(() => setReady(true));
  }, []);

  return ready;
}

export function useDbLiveQuery<T>(
  queryFn: () => Promise<T>,
  deps: unknown[] = [],
  defaultValue?: T,
): T | undefined {
  const ready = useDatabaseReady();

  return useLiveQuery(
    async () => {
      if (!ready) return defaultValue;
      return queryFn();
    },
    [ready, ...deps],
    defaultValue,
  );
}

export function useCopyFeedback() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (text: string, label?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label ?? text);
      setTimeout(() => setCopied(null), 2000);
      return true;
    } catch {
      return false;
    }
  }, []);

  return { copied, copy };
}

export { getDb };
