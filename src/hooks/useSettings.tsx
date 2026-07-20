"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { settingsRepository } from "@/data/repositories/settingsRepository";
import type { AppSettings } from "@/types";
import { applyDocumentTheme } from "@/utils/theme";

interface SettingsContextValue {
  settings: AppSettings;
  updateSettings: (partial: Partial<Omit<AppSettings, "id">>) => Promise<void>;
  loading: boolean;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>({
    id: "app",
    theme: "system",
    textSize: "standard",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    settingsRepository.get().then((s) => {
      setSettings(s);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const inDavey = document.documentElement.classList.contains("davey-section");
    applyDocumentTheme(settings, inDavey);
  }, [settings]);

  const updateSettings = async (partial: Partial<Omit<AppSettings, "id">>) => {
    const updated = await settingsRepository.update(partial);
    setSettings(updated);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
