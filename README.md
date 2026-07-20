# PumpHub

**Find the right part, faster.**

PumpHub is a personal mobile-first reference app for finding spare parts for water pumps. It is designed for use on a phone while standing in a shop, workshop, or on-site.

The main workflow:

1. Search for a pump
2. Open the pump
3. View the schematic
4. Select a diagram number
5. See the correct part number
6. Copy the part number

## Tech stack

- **Next.js** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS**
- **Lucide React** icons
- **Dexie** (IndexedDB)
- **Zod** validation
- **Vitest** tests
- **PWA** (manifest + service worker)

## Installation

```bash
npm install
```

Optional — generate PWA PNG icons:

```bash
pip3 install Pillow
node scripts/generate-icons.mjs
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Test at 375px and 430px mobile widths.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run test` | Run Vitest tests |

## Project structure

```
src/
  app/              # Next.js App Router pages
  components/       # Shared UI and layout
  features/         # Feature modules (home, search, pumps, parts, saved, settings)
  data/
    database/       # Dexie schema
    repositories/   # Data access layer
    seed/           # Demonstration data
  hooks/            # React hooks (search, notes, saved, recent)
  services/         # Search index service
  types/            # TypeScript models
  utils/            # Helpers and normalisation
public/
  manifest.json     # PWA manifest
  sw.js             # Service worker
  icons/            # App icons
```

## Local database

All data is stored locally in IndexedDB via Dexie. Components never query the database directly — they use repositories and hooks.

Repositories:

- `brandRepository`
- `pumpRepository`
- `partRepository`
- `noteRepository`
- `savedRepository`
- `recentRepository`
- `settingsRepository`

## Seed data

Demonstration data includes:

- **Brand:** Davey
- **Category:** Pressure Pumps
- **Family:** HS Series
- **Models:** HS50, HS60
- **16 spare parts** including impellers, seal kits, mechanical seals, motor parts, and shared family parts

Reset demonstration data from **Settings → Reset demonstration data**.

## Search behaviour

Search normalises input by lowercasing and removing spaces, hyphens, and punctuation.

Examples:

| Query | Finds |
|-------|-------|
| `HS60`, `HS 60`, `HS-60` | HS60 pump |
| `12559` | 12559SP |
| `seal` | Seal-related parts |
| `impeller` | Impeller parts |

## PWA testing

1. Run `npm run build && npm run start`
2. Open in Chrome
3. Install from **Settings → Install PumpHub** (when supported)
4. Test offline — app shell and local catalogue data work offline
5. Manufacturer catalogue links require internet

## Resetting local data

From Settings:

- **Clear recent items**
- **Clear saved items**
- **Reset demonstration data**

Or clear site data in browser DevTools.

## Current limitations

- Demonstration schematic only (not copied from Ricambio)
- Single brand and pump family seeded
- No live stock, pricing, or ordering
- No authentication or sync
- Manufacturer catalogue opens externally and requires internet

## Future Phase 2

> Import and review real pump catalogue data from individual approved Ricambio pages.

## Disclaimer

PumpHub is a reference tool. Always confirm the pump model, version, serial information and current manufacturer information before ordering or installing spare parts.
