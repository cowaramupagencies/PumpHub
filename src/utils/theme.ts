import type { AppSettings } from "@/types";

export function resolveTheme(settings: AppSettings): "light" | "dark" {
  if (settings.theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return settings.theme;
}

export function applyDocumentTheme(settings: AppSettings, inDavey: boolean) {
  const root = document.documentElement;
  root.classList.remove("light", "dark", "text-large");

  const theme = inDavey ? "dark" : resolveTheme(settings);
  root.classList.add(theme);

  if (settings.textSize === "large") {
    root.classList.add("text-large");
  }
}
