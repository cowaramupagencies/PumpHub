"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";
import { DaveyLogo } from "@/components/brands/DaveyLogo";
import { AppIcon } from "@/components/ui/AppIcon";
import { DAVEY_BASE, isBrandSection } from "@/utils/brands";

export function AppHeader() {
  const pathname = usePathname();
  const inDavey = isBrandSection(pathname);
  const isDaveyHome = pathname === DAVEY_BASE;
  const homeHref = inDavey ? DAVEY_BASE : "/";

  return (
    <header className="sticky top-0 z-40 bg-[var(--header-bg)] text-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-5 md:max-w-2xl">
        <Link href={homeHref} className="flex min-h-12 min-w-0 flex-1 items-center gap-2.5">
          {inDavey ? (
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <AppIcon className="h-7 w-auto max-w-[6.5rem] shrink-0" />
              <span className="h-6 w-px shrink-0 bg-white/25" aria-hidden />
              <div className="h-6 min-w-0 max-w-[7rem] shrink">
                <DaveyLogo variant="wordmark" className="max-h-6" priority={isDaveyHome} />
              </div>
            </div>
          ) : (
            <AppIcon className="h-8 w-auto max-w-[9rem] shrink-0" />
          )}
        </Link>
        {inDavey ? (
          <Link
            href={`${DAVEY_BASE}/settings`}
            className="flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-xl text-davey-yellow hover:bg-white/10"
            aria-label="Settings"
          >
            <Settings className="h-6 w-6" />
          </Link>
        ) : (
          <Link
            href={`${DAVEY_BASE}/settings`}
            className="flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-xl hover:bg-white/10"
            aria-label="Settings"
          >
            <Settings className="h-6 w-6" />
          </Link>
        )}
      </div>
    </header>
  );
}
