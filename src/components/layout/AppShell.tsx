"use client";

import { useEffect } from "react";
import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav, bottomNavPaddingClass, shouldShowBottomNav } from "@/components/layout/BottomNav";
import { LoadingSpinner } from "@/components/ui/Card";
import { useDatabaseReady } from "@/hooks/useDatabase";
import { useSettings } from "@/hooks/useSettings";
import { isBrandSection } from "@/utils/brands";
import { applyDocumentTheme } from "@/utils/theme";
import { usePathname } from "next/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { settings } = useSettings();
  const ready = useDatabaseReady();
  const showBottomNav = shouldShowBottomNav(pathname);
  const inDavey = isBrandSection(pathname);

  useEffect(() => {
    document.documentElement.classList.toggle("davey-section", inDavey);
    applyDocumentTheme(settings, inDavey);
  }, [inDavey, settings]);

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--background)] text-[var(--foreground)]">
      {pathname !== "/" && <AppHeader />}
      <main
        className={`mx-auto w-full max-w-lg flex-1 px-5 md:max-w-2xl ${pathname === "/" ? "pt-8" : "pt-5"} ${bottomNavPaddingClass(showBottomNav)}`}
      >
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
