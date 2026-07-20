import type { Metadata, Viewport } from "next";
import { APP_NAME, APP_TAGLINE } from "@/utils";
import { AppShell } from "@/components/layout/AppShell";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { SettingsProvider } from "@/hooks/useSettings";
import "./globals.css";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_TAGLINE,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="antialiased">
        <SettingsProvider>
          <ServiceWorkerRegister />
          <AppShell>{children}</AppShell>
        </SettingsProvider>
      </body>
    </html>
  );
}
