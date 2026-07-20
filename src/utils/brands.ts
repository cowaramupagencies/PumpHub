export const DAVEY_SLUG = "davey";
export const DAVEY_BASE = `/${DAVEY_SLUG}`;

export const DAVEY_LOGO_WORDMARK_PATH = "/brands/davey/davey-logo.png";
export const DAVEY_LOGO_SQUARE_PATH = "/brands/davey/davey-logo-square.png";

/** Davey brand yellow from official logo */
export const DAVEY_YELLOW = "#ffd200";
export const DAVEY_BLACK = "#1a1a1a";
export const DAVEY_CHARCOAL = "#2a2a2a";

export interface BrandOption {
  slug: string;
  name: string;
  href: string;
  description: string;
  logoSquare: string;
}

export const AVAILABLE_BRANDS: BrandOption[] = [
  {
    slug: DAVEY_SLUG,
    name: "Davey",
    href: DAVEY_BASE,
    description: "Pressure pumps, HS Series and spare parts",
    logoSquare: DAVEY_LOGO_SQUARE_PATH,
  },
];

export function isBrandSection(pathname: string): boolean {
  return pathname === DAVEY_BASE || pathname.startsWith(`${DAVEY_BASE}/`) || pathname === "/settings";
}

export function brandBasePath(pathname: string): string {
  if (pathname.startsWith(DAVEY_BASE)) return DAVEY_BASE;
  return DAVEY_BASE;
}

export function brandPath(pathname: string, segment: string): string {
  const base = brandBasePath(pathname);
  return segment ? `${base}/${segment}` : base;
}
