"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { Home, Search, Bookmark, Settings } from "lucide-react";
import { cn } from "@/utils";
import { DAVEY_BASE } from "@/utils/brands";

const NAV_HEIGHT = "4rem";

const navItems: { href: string; label: string; icon: LucideIcon; match: (path: string) => boolean }[] = [
  {
    href: DAVEY_BASE,
    label: "Home",
    icon: Home,
    match: (path) => path === DAVEY_BASE,
  },
  {
    href: `${DAVEY_BASE}/search`,
    label: "Search",
    icon: Search,
    match: (path) => path.startsWith(`${DAVEY_BASE}/search`),
  },
  {
    href: `${DAVEY_BASE}/saved`,
    label: "Saved",
    icon: Bookmark,
    match: (path) => path.startsWith(`${DAVEY_BASE}/saved`),
  },
  {
    href: `${DAVEY_BASE}/settings`,
    label: "Settings",
    icon: Settings,
    match: (path) => path.startsWith(`${DAVEY_BASE}/settings`) || path === "/settings",
  },
];

export function shouldShowBottomNav(pathname: string): boolean {
  if (pathname === "/") return false;
  return pathname === DAVEY_BASE || pathname.startsWith(`${DAVEY_BASE}/`) || pathname === "/settings";
}

export function bottomNavPaddingClass(show: boolean): string {
  return show ? "pb-[calc(4rem+env(safe-area-inset-bottom)+0.5rem)]" : "pb-5";
}

export function BottomNav() {
  const pathname = usePathname();

  if (!shouldShowBottomNav(pathname)) return null;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#333] bg-davey-black pb-[env(safe-area-inset-bottom)]"
      style={{ height: `calc(${NAV_HEIGHT} + env(safe-area-inset-bottom))` }}
      aria-label="Main navigation"
    >
      <ul
        className="mx-auto grid h-16 max-w-lg grid-cols-4 md:max-w-2xl"
        style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
      >
        {navItems.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <li key={href} className="h-full min-w-0">
              <Link
                href={href}
                className={cn(
                  "relative flex h-full w-full flex-col items-center justify-center gap-1 px-1",
                  active ? "text-davey-yellow" : "text-white/50",
                )}
                aria-current={active ? "page" : undefined}
              >
                <span
                  className={cn(
                    "absolute top-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-davey-yellow transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />
                <Icon className="h-7 w-7 shrink-0" strokeWidth={2} aria-hidden />
                <span className="h-4 w-full truncate text-center text-sm font-semibold leading-4">
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
