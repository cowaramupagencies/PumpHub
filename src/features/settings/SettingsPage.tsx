"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, SectionHeading } from "@/components/ui/Card";
import { SettingsRow } from "@/components/ui/SettingsRow";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { useSettings } from "@/hooks/useSettings";
import { recentRepository } from "@/data/repositories/recentRepository";
import { savedRepository } from "@/data/repositories/savedRepository";
import { resetDemonstrationData } from "@/data/seed/seed-manager";
import { DAVEY_BASE, isBrandSection } from "@/utils/brands";
import { APP_NAME, APP_TAGLINE } from "@/utils";
import { AppIcon } from "@/components/ui/AppIcon";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type Sheet = "appearance" | "textSize" | "about" | null;

export function SettingsPage() {
  const pathname = usePathname();
  const inDavey = isBrandSection(pathname);
  const { settings, updateSettings } = useSettings();
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [sheet, setSheet] = useState<Sheet>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleInstall = async () => {
    if (!installPrompt) {
      showMessage("Install is not available on this browser yet.");
      return;
    }
    await installPrompt.prompt();
    setInstallPrompt(null);
  };

  const themeLabel = inDavey
    ? "Dark (Davey)"
    : settings.theme === "system"
      ? "System"
      : settings.theme === "light"
        ? "Light"
        : "Dark";
  const textLabel = settings.textSize === "standard" ? "Standard" : "Large";

  return (
    <div className="space-y-5 pb-8">
      <SectionHeading>Settings</SectionHeading>

      {message && <Card className="text-base">{message}</Card>}

      <div className="space-y-3">
        <SettingsRow
          label="Appearance"
          value={themeLabel}
          onClick={inDavey ? undefined : () => setSheet("appearance")}
        />
        <SettingsRow label="Text Size" value={textLabel} onClick={() => setSheet("textSize")} />
        {installPrompt && (
          <Button fullWidth onClick={handleInstall}>
            <Download className="h-5 w-5" />
            Install App
          </Button>
        )}
        <SettingsRow label="About PumpHub" onClick={() => setSheet("about")} />
      </div>

      <div className="space-y-3 border-t border-[var(--border-color)] pt-5">
        <p className="text-base font-semibold text-muted">Catalogue Setup</p>
        <Link href={`${DAVEY_BASE}/settings/catalogue-review`}>
          <Button fullWidth variant="ghost" className="justify-between text-left">
            HS Series Review
          </Button>
        </Link>
        <Link href={`${DAVEY_BASE}/settings/hp-catalogue-review`}>
          <Button fullWidth variant="ghost" className="justify-between text-left">
            HP Series Review
          </Button>
        </Link>
        <Link href={`${DAVEY_BASE}/settings/hm-catalogue-review`}>
          <Button fullWidth variant="ghost" className="justify-between text-left">
            HM Series Review
          </Button>
        </Link>
        <Link href={`${DAVEY_BASE}/settings/xj-catalogue-review`}>
          <Button fullWidth variant="ghost" className="justify-between text-left">
            XJ Series Review
          </Button>
        </Link>
        <Link href={`${DAVEY_BASE}/settings/xp-catalogue-review`}>
          <Button fullWidth variant="ghost" className="justify-between text-left">
            XP Series Review
          </Button>
        </Link>
        <Link href={`${DAVEY_BASE}/settings/diagram-setup`}>
          <Button fullWidth variant="ghost" className="justify-between text-left">
            Diagram Setup
          </Button>
        </Link>
      </div>

      <div className="space-y-3 border-t border-[var(--border-color)] pt-5">
        <Button
          variant="ghost"
          fullWidth
          onClick={async () => {
            await recentRepository.clearAll();
            showMessage("Recent items cleared.");
          }}
        >
          Clear Recent Items
        </Button>
        <Button
          variant="ghost"
          fullWidth
          onClick={async () => {
            await savedRepository.clearAll();
            showMessage("Saved items cleared.");
          }}
        >
          Clear Saved Items
        </Button>
        <Button
          variant="danger"
          fullWidth
          onClick={async () => {
            await resetDemonstrationData();
            showMessage("App data reset.");
          }}
        >
          Reset App Data
        </Button>
      </div>

      <Link
        href={DAVEY_BASE}
        className="flex min-h-[3.75rem] items-center justify-center rounded-2xl border border-[var(--border-color)] text-base font-medium"
      >
        Back to Home
      </Link>

      <BottomSheet
        open={sheet === "appearance"}
        onClose={() => setSheet(null)}
        title="Appearance"
        placement="center"
      >
        <div className="space-y-3">
          {(["system", "light", "dark"] as const).map((theme) => (
            <Button
              key={theme}
              fullWidth
              variant={settings.theme === theme ? "primary" : "ghost"}
              onClick={async () => {
                await updateSettings({ theme });
                setSheet(null);
              }}
            >
              {theme === "system" ? "System" : theme === "light" ? "Light" : "Dark"}
            </Button>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet
        open={sheet === "textSize"}
        onClose={() => setSheet(null)}
        title="Text Size"
        placement="center"
      >
        <div className="space-y-3">
          {(["standard", "large"] as const).map((size) => (
            <Button
              key={size}
              fullWidth
              variant={settings.textSize === size ? "primary" : "ghost"}
              onClick={async () => {
                await updateSettings({ textSize: size });
                setSheet(null);
              }}
            >
              {size === "standard" ? "Standard" : "Large"}
            </Button>
          ))}
        </div>
      </BottomSheet>

      <BottomSheet
        open={sheet === "about"}
        onClose={() => setSheet(null)}
        title="About"
        placement="center"
      >
        <div className="space-y-4 text-center">
          <AppIcon className="mx-auto h-12 w-auto max-w-[14rem]" />
          <p className="text-xl font-bold">{APP_NAME}</p>
          <p className="text-base text-muted">{APP_TAGLINE}</p>
          <p className="text-base text-muted">
            {APP_NAME} is a reference tool. Always confirm the pump model, version and
            manufacturer information before ordering or installing spare parts.
          </p>
          <p className="text-base text-muted">Internet required to open the Davey catalogue.</p>
        </div>
      </BottomSheet>
    </div>
  );
}
