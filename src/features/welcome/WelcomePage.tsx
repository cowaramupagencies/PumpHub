"use client";

import Link from "next/link";
import { AppIcon } from "@/components/ui/AppIcon";
import { DaveyLogo } from "@/components/brands/DaveyLogo";
import { AVAILABLE_BRANDS } from "@/utils/brands";
import { APP_NAME } from "@/utils";

export function WelcomePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center py-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-3">
          <AppIcon className="mx-auto h-[4.9rem] w-auto max-w-[min(100%,28rem)]" priority />
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            WELCOME TO {APP_NAME.toUpperCase()}!
          </h1>
          <p className="text-lg text-muted">Choose your Pump Brand!</p>
        </div>

        <div className="space-y-3">
          {AVAILABLE_BRANDS.map((brand) => (
            <Link key={brand.slug} href={brand.href} className="block">
              <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 text-left shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99]">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-davey-black p-2">
                  <DaveyLogo variant="square" className="rounded-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-bold">{brand.name}</p>
                  <p className="text-sm text-muted">{brand.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
