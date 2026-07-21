(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_NAME",
    ()=>APP_NAME,
    "APP_TAGLINE",
    ()=>APP_TAGLINE,
    "HP_SERIES_CATALOGUE_URL",
    ()=>HP_SERIES_CATALOGUE_URL,
    "HS_SERIES_CATALOGUE_URL",
    ()=>HS_SERIES_CATALOGUE_URL,
    "PUMPHUB_LOGO_PATH",
    ()=>PUMPHUB_LOGO_PATH,
    "availabilityColor",
    ()=>availabilityColor,
    "availabilityLabel",
    ()=>availabilityLabel,
    "cn",
    ()=>cn,
    "copyToClipboard",
    ()=>copyToClipboard,
    "createId",
    ()=>createId,
    "formatRelativeTime",
    ()=>formatRelativeTime,
    "normalizeSearchText",
    ()=>normalizeSearchText
]);
function normalizeSearchText(input) {
    return input.toLowerCase().replace(/[\s\-_.,/\\|]+/g, "").replace(/[^\w]/g, "");
}
function formatRelativeTime(timestamp) {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return "".concat(minutes, "m ago");
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return "".concat(hours, "h ago");
    const days = Math.floor(hours / 24);
    if (days < 7) return "".concat(days, "d ago");
    return new Date(timestamp).toLocaleDateString();
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        return false;
    }
}
function cn() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(" ");
}
function createId() {
    var _globalThis_crypto, _globalThis_crypto1;
    if (typeof ((_globalThis_crypto = globalThis.crypto) === null || _globalThis_crypto === void 0 ? void 0 : _globalThis_crypto.randomUUID) === "function") {
        return globalThis.crypto.randomUUID();
    }
    const bytes = new Uint8Array(16);
    if (typeof ((_globalThis_crypto1 = globalThis.crypto) === null || _globalThis_crypto1 === void 0 ? void 0 : _globalThis_crypto1.getRandomValues) === "function") {
        globalThis.crypto.getRandomValues(bytes);
    } else {
        for(let i = 0; i < 16; i++){
            bytes[i] = Math.floor(Math.random() * 256);
        }
    }
    bytes[6] = bytes[6] & 0x0f | 0x40;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    const hex = [
        ...bytes
    ].map((b)=>b.toString(16).padStart(2, "0")).join("");
    return "".concat(hex.slice(0, 8), "-").concat(hex.slice(8, 12), "-").concat(hex.slice(12, 16), "-").concat(hex.slice(16, 20), "-").concat(hex.slice(20));
}
function availabilityLabel(availability) {
    switch(availability){
        case "available":
            return "Available";
        case "limited":
            return "Limited";
        case "unavailable":
            return "Unavailable";
        case "discontinued":
            return "Discontinued";
        case "verify":
            return "Verify with manufacturer";
        case "unknown":
            return "Unknown";
        default:
            return availability;
    }
}
function availabilityColor(availability) {
    switch(availability){
        case "available":
            return "text-success";
        case "limited":
            return "text-warning";
        case "unavailable":
            return "text-danger";
        default:
            return "text-muted";
    }
}
const HS_SERIES_CATALOGUE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_190&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_190&MP1=CE_190&MP=CE_190.cex#CE_190";
const HP_SERIES_CATALOGUE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_188&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_188&MP1=CE_188&MP=CE_188.cex#CE_188";
const APP_NAME = "PumpHub";
const APP_TAGLINE = "Find the right part, faster.";
const PUMPHUB_LOGO_PATH = "/brands/pumphub/pumphub-logo.png";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/brands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_BRANDS",
    ()=>AVAILABLE_BRANDS,
    "DAVEY_BASE",
    ()=>DAVEY_BASE,
    "DAVEY_BLACK",
    ()=>DAVEY_BLACK,
    "DAVEY_CHARCOAL",
    ()=>DAVEY_CHARCOAL,
    "DAVEY_LOGO_SQUARE_PATH",
    ()=>DAVEY_LOGO_SQUARE_PATH,
    "DAVEY_LOGO_WORDMARK_PATH",
    ()=>DAVEY_LOGO_WORDMARK_PATH,
    "DAVEY_SLUG",
    ()=>DAVEY_SLUG,
    "DAVEY_YELLOW",
    ()=>DAVEY_YELLOW,
    "brandBasePath",
    ()=>brandBasePath,
    "brandPath",
    ()=>brandPath,
    "isBrandSection",
    ()=>isBrandSection
]);
const DAVEY_SLUG = "davey";
const DAVEY_BASE = "/".concat(DAVEY_SLUG);
const DAVEY_LOGO_WORDMARK_PATH = "/brands/davey/davey-logo-transp.webp";
const DAVEY_LOGO_SQUARE_PATH = "/brands/davey/davey-logo-square.png";
const DAVEY_YELLOW = "#ffd200";
const DAVEY_BLACK = "#1a1a1a";
const DAVEY_CHARCOAL = "#2a2a2a";
const AVAILABLE_BRANDS = [
    {
        slug: DAVEY_SLUG,
        name: "Davey",
        href: DAVEY_BASE,
        description: "Pressure pumps, HS Series and spare parts",
        logoSquare: DAVEY_LOGO_SQUARE_PATH
    }
];
function isBrandSection(pathname) {
    return pathname === DAVEY_BASE || pathname.startsWith("".concat(DAVEY_BASE, "/")) || pathname === "/settings";
}
function brandBasePath(pathname) {
    if (pathname.startsWith(DAVEY_BASE)) return DAVEY_BASE;
    return DAVEY_BASE;
}
function brandPath(pathname, segment) {
    const base = brandBasePath(pathname);
    return segment ? "".concat(base, "/").concat(segment) : base;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/brands/DaveyLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaveyLogo",
    ()=>DaveyLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-client] (ecmascript)");
;
;
;
;
function DaveyLogo(param) {
    let { variant = "wordmark", presentation = "default", className, priority = false } = param;
    if (variant === "square") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_LOGO_SQUARE_PATH"],
            alt: "Davey",
            width: 696,
            height: 696,
            priority: priority,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full object-contain", className)
        }, void 0, false, {
            fileName: "[project]/src/components/brands/DaveyLogo.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    if (presentation === "hero") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative mx-auto aspect-[13/4] w-full max-w-[28rem]", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_LOGO_WORDMARK_PATH"],
                alt: "Davey",
                fill: true,
                priority: priority,
                unoptimized: true,
                className: "object-cover object-center",
                sizes: "(max-width: 448px) 100vw, 448px"
            }, void 0, false, {
                fileName: "[project]/src/components/brands/DaveyLogo.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/brands/DaveyLogo.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_LOGO_WORDMARK_PATH"],
        alt: "Davey",
        width: 450,
        height: 250,
        priority: priority,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-auto w-full object-contain", className)
    }, void 0, false, {
        fileName: "[project]/src/components/brands/DaveyLogo.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = DaveyLogo;
var _c;
__turbopack_context__.k.register(_c, "DaveyLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AppIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppIcon",
    ()=>AppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
;
function AppIcon(param) {
    let { className = "h-8 w-auto max-w-[9rem]", priority = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUMPHUB_LOGO_PATH"],
        alt: "PumpHub",
        width: 2002,
        height: 612,
        priority: priority,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-auto w-auto object-contain", className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AppIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = AppIcon;
var _c;
__turbopack_context__.k.register(_c, "AppIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppHeader",
    ()=>AppHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brands$2f$DaveyLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brands/DaveyLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AppIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AppIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AppHeader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const inDavey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrandSection"])(pathname);
    const isDaveyHome = pathname === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"];
    const homeHref = inDavey ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"] : "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 bg-[var(--header-bg)] text-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-14 max-w-lg items-center justify-between px-5 md:max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: homeHref,
                    className: "flex min-h-12 min-w-0 flex-1 items-center gap-2.5",
                    children: inDavey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AppIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppIcon"], {
                                className: "h-7 w-auto max-w-[6.5rem] shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-6 w-px shrink-0 bg-white/25",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 min-w-0 max-w-[7rem] shrink",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brands$2f$DaveyLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaveyLogo"], {
                                    variant: "wordmark",
                                    className: "max-h-6",
                                    priority: isDaveyHome
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AppHeader.tsx",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AppIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppIcon"], {
                        className: "h-8 w-auto max-w-[9rem] shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppHeader.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                inDavey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/settings"),
                    className: "flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-xl text-davey-yellow hover:bg-white/10",
                    "aria-label": "Settings",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppHeader.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/settings"),
                    className: "flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-xl hover:bg-white/10",
                    "aria-label": "Settings",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppHeader.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppHeader.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/AppHeader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(AppHeader, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AppHeader;
var _c;
__turbopack_context__.k.register(_c, "AppHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/BottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav,
    "bottomNavPaddingClass",
    ()=>bottomNavPaddingClass,
    "shouldShowBottomNav",
    ()=>shouldShowBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NAV_HEIGHT = "4rem";
const navItems = [
    {
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"],
        label: "Home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        match: (path)=>path === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"]
    },
    {
        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/search"),
        label: "Search",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        match: (path)=>path.startsWith("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/search"))
    },
    {
        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/saved"),
        label: "Saved",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
        match: (path)=>path.startsWith("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/saved"))
    },
    {
        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/settings"),
        label: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        match: (path)=>path.startsWith("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/settings")) || path === "/settings"
    }
];
function shouldShowBottomNav(pathname) {
    if (pathname === "/") return false;
    return pathname === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"] || pathname.startsWith("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/")) || pathname === "/settings";
}
function bottomNavPaddingClass(show) {
    return show ? "pb-[calc(4rem+env(safe-area-inset-bottom)+0.5rem)]" : "pb-5";
}
function BottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!shouldShowBottomNav(pathname)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-50 border-t border-[#333] bg-davey-black pb-[env(safe-area-inset-bottom)]",
        style: {
            height: "calc(".concat(NAV_HEIGHT, " + env(safe-area-inset-bottom))")
        },
        "aria-label": "Main navigation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mx-auto grid h-16 max-w-lg grid-cols-4 md:max-w-2xl",
            style: {
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
            },
            children: navItems.map((param)=>{
                let { href, label, icon: Icon, match } = param;
                const active = match(pathname);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "h-full min-w-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-full w-full flex-col items-center justify-center gap-1 px-1", active ? "text-davey-yellow" : "text-white/50"),
                        "aria-current": active ? "page" : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-davey-yellow transition-opacity", active ? "opacity-100" : "opacity-0"),
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/BottomNav.tsx",
                                lineNumber: 75,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-7 w-7 shrink-0",
                                strokeWidth: 2,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/BottomNav.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-4 w-full truncate text-center text-sm font-semibold leading-4",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/BottomNav.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/BottomNav.tsx",
                        lineNumber: 67,
                        columnNumber: 15
                    }, this)
                }, href, false, {
                    fileName: "[project]/src/components/layout/BottomNav.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/layout/BottomNav.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/BottomNav.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(BottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "EmptyState",
    ()=>EmptyState,
    "LoadingSpinner",
    ()=>LoadingSpinner,
    "PageTitle",
    ()=>PageTitle,
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { children, className, onClick } = param;
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-sm", onClick && "cursor-pointer active:bg-black/[0.02] dark:active:bg-white/[0.02]", className);
    if (onClick) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, "w-full text-left"),
            onClick: onClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: base,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_c = Card;
function EmptyState(param) {
    let { message, action } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-muted",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: action
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 34,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c1 = EmptyState;
function SectionHeading(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "mb-4 text-xl font-bold md:text-2xl",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_c2 = SectionHeading;
function PageTitle(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "text-2xl font-bold leading-tight md:text-3xl",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_c3 = PageTitle;
function LoadingSpinner(param) {
    let { label } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-3 py-10",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c4 = LoadingSpinner;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "EmptyState");
__turbopack_context__.k.register(_c2, "SectionHeading");
__turbopack_context__.k.register(_c3, "PageTitle");
__turbopack_context__.k.register(_c4, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/database/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PumpHubDatabase",
    ()=>PumpHubDatabase,
    "clearAllUserData",
    ()=>clearAllUserData,
    "clearCatalogueData",
    ()=>clearCatalogueData,
    "getDb",
    ()=>getDb,
    "setDbInstance",
    ()=>setDbInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie/import-wrapper.mjs [app-client] (ecmascript)");
;
;
class PumpHubDatabase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super("PumpHubDB"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "brands", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "categories", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pumpFamilies", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "pumpModels", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "diagrams", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "diagramHotspots", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "parts", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "partCompatibilities", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "userNotes", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "savedItems", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "recentItems", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "appSettings", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "importDrafts", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "importHistory", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "catalogueMeta", void 0);
        this.version(1).stores({
            brands: "id, slug, name",
            categories: "id, brandId, slug",
            pumpFamilies: "id, brandId, categoryId, slug",
            pumpModels: "id, familyId, slug, modelCode",
            diagrams: "id, familyId, modelId",
            diagramHotspots: "id, diagramId, reference",
            parts: "id, brandId, partNumber",
            partCompatibilities: "id, partId, familyId, modelId, diagramReference",
            userNotes: "id, attachedEntityType, attachedEntityId, updatedAt",
            savedItems: "id, entityType, entityId, savedAt",
            recentItems: "id, entityType, entityId, viewedAt",
            appSettings: "id"
        });
        this.version(2).stores({
            brands: "id, slug, name",
            categories: "id, brandId, slug",
            pumpFamilies: "id, brandId, categoryId, slug",
            pumpModels: "id, familyId, slug, modelCode",
            diagrams: "id, familyId, modelId",
            diagramHotspots: "id, diagramId, reference",
            parts: "id, brandId, partNumber",
            partCompatibilities: "id, partId, familyId, modelId, diagramReference",
            userNotes: "id, attachedEntityType, attachedEntityId, updatedAt",
            savedItems: "id, entityType, entityId, savedAt",
            recentItems: "id, entityType, entityId, viewedAt",
            appSettings: "id",
            importDrafts: "id, familyId, status, importedAt",
            importHistory: "id, familyId, importedAt",
            catalogueMeta: "id"
        });
    }
}
let dbInstance = null;
function getDb() {
    if (typeof indexedDB === "undefined") {
        throw new Error("Database is only available where IndexedDB is supported");
    }
    if (!dbInstance) {
        dbInstance = new PumpHubDatabase();
    }
    return dbInstance;
}
function setDbInstance(instance) {
    dbInstance = instance;
}
async function clearAllUserData() {
    const db = getDb();
    await db.transaction("rw", [
        db.userNotes,
        db.savedItems,
        db.recentItems
    ], async ()=>{
        await db.userNotes.clear();
        await db.savedItems.clear();
        await db.recentItems.clear();
    });
}
async function clearCatalogueData() {
    const db = getDb();
    await db.transaction("rw", [
        db.brands,
        db.categories,
        db.pumpFamilies,
        db.pumpModels,
        db.diagrams,
        db.diagramHotspots,
        db.parts,
        db.partCompatibilities
    ], async ()=>{
        await db.brands.clear();
        await db.categories.clear();
        await db.pumpFamilies.clear();
        await db.pumpModels.clear();
        await db.diagrams.clear();
        await db.diagramHotspots.clear();
        await db.parts.clear();
        await db.partCompatibilities.clear();
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/hp-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/hp-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_188_1.SVG\",\"width\":800,\"height\":917,\"hotspots\":[{\"reference\":\"1\",\"x\":0.4127625,\"y\":0.44840785169029446,\"width\":0.0318,\"height\":0.027742639040348967,\"partNumbers\":[\"7000\",\"7001\",\"7064\",\"7065\"]},{\"reference\":\"2\",\"x\":0.143225,\"y\":0.9416139585605234,\"width\":0.031575,\"height\":0.027546346782988007,\"partNumbers\":[\"14406-20\"]},{\"reference\":\"3\",\"x\":0.208825,\"y\":0.6060850599781897,\"width\":0.0318,\"height\":0.027546346782988007,\"partNumbers\":[\"12252SP\",\"12252-1SP\"]},{\"reference\":\"4\",\"x\":0.2771,\"y\":0.6489531079607415,\"width\":0.0318,\"height\":0.027742639040348967,\"partNumbers\":[\"48802SP\"]},{\"reference\":\"5\",\"x\":0.290225,\"y\":0.9280370774263904,\"width\":0.031575,\"height\":0.027546346782988007,\"partNumbers\":[\"11448\"]},{\"reference\":\"6\",\"x\":0.3273625,\"y\":0.6505016357688114,\"width\":0.031575,\"height\":0.027546346782988007,\"partNumbers\":[\"12889SP\",\"12890SP\",\"12891SP\"]},{\"reference\":\"7\",\"x\":0.3618375,\"y\":0.8865321701199564,\"width\":0.0318,\"height\":0.027546346782988007,\"partNumbers\":[\"12548-10\"]},{\"reference\":\"8\",\"x\":0.3791875,\"y\":0.6293565976008724,\"width\":0.031575,\"height\":0.027742639040348967,\"partNumbers\":[\"128066\"]},{\"reference\":\"9\",\"x\":0.41366249999999993,\"y\":0.9280370774263904,\"width\":0.0318,\"height\":0.027546346782988007,\"partNumbers\":[\"10963-10\"]},{\"reference\":\"10\",\"x\":0.44835,\"y\":0.6406106870229007,\"width\":0.031575,\"height\":0.027742639040348967,\"partNumbers\":[\"12883-1\"]},{\"reference\":\"11\",\"x\":0.5684375,\"y\":0.8917775354416576,\"width\":0.0318,\"height\":0.027742639040348967,\"partNumbers\":[\"491076\"]},{\"reference\":\"12\",\"x\":0.5537624999999999,\"y\":0.6512758996728463,\"width\":0.031575,\"height\":0.027546346782988007,\"partNumbers\":[\"40021\"]},{\"reference\":\"13\",\"x\":0.6549625,\"y\":0.632464558342421,\"width\":0.031575,\"height\":0.027546346782988007,\"partNumbers\":[\"42998\"]},{\"reference\":\"14\",\"x\":0.6505124999999999,\"y\":0.9468593238822246,\"width\":0.0318,\"height\":0.027546346782988007,\"partNumbers\":[\"12797-1\"]},{\"reference\":\"15\",\"x\":0.7319,\"y\":0.9468593238822246,\"width\":0.031575,\"height\":0.027546346782988007,\"partNumbers\":[\"12782D\"]},{\"reference\":\"16\",\"x\":0.7612625,\"y\":0.6270338058887678,\"width\":0.031575,\"height\":0.027742639040348967,\"partNumbers\":[\"11091-1\"]},{\"reference\":\"17\",\"x\":0.8112999999999999,\"y\":0.9429770992366412,\"width\":0.0318,\"height\":0.027742639040348967,\"partNumbers\":[\"45031\"]},{\"reference\":\"18\",\"x\":0.8442125,\"y\":0.6225736095965103,\"width\":0.031575,\"height\":0.027742639040348967,\"partNumbers\":[\"11682\",\"11682-1\"]},{\"reference\":\"19\",\"x\":0.6807500000000001,\"y\":0.4951472191930207,\"width\":0.0318,\"height\":0.027742639040348967,\"partNumbers\":[\"31269\"]},{\"reference\":\"20\",\"x\":0.8277499999999999,\"y\":0.5682660850599782,\"width\":0.0318,\"height\":0.027742639040348967,\"partNumbers\":[\"32320-1SP\"]},{\"reference\":\"21\",\"x\":0.725675,\"y\":0.4650817884405671,\"width\":0.0318,\"height\":0.027546346782988007,\"partNumbers\":[\"401487\"]},{\"reference\":\"22\",\"x\":0.5381999999999999,\"y\":0.4974809160305343,\"width\":0.0318,\"height\":0.027546346782988007,\"partNumbers\":[\"TT45\"]}]}"));}),
"[project]/src/data/diagrams/hs-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/hs-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_190_1.SVG\",\"width\":800,\"height\":528,\"hotspots\":[{\"reference\":\"1\",\"x\":0.2150875,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"781\",\"782\"]},{\"reference\":\"2\",\"x\":0.3652375,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"31618\",\"12551\",\"43403\",\"49771SP\",\"40019\",\"401573\"]},{\"reference\":\"2\",\"x\":0.7048375,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"31618\",\"12551\",\"43403\",\"49771SP\",\"40019\",\"401573\"]},{\"reference\":\"2\",\"x\":0.7048375,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"31618\",\"12551\",\"43403\",\"49771SP\",\"40019\",\"401573\"]},{\"reference\":\"2a\",\"x\":0.326025,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12551\"]},{\"reference\":\"2b\",\"x\":0.3750875,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"43403\"]},{\"reference\":\"2c\",\"x\":0.40255,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"49771SP\"]},{\"reference\":\"2d\",\"x\":0.7048375,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"40019\"]},{\"reference\":\"2e\",\"x\":0.7048375,\"y\":0.8264204545454544,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"401573\"]},{\"reference\":\"3\",\"x\":0.35506249999999995,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12538SP\"]},{\"reference\":\"4\",\"x\":0.4032125,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12545SP\",\"12559SP\"]},{\"reference\":\"4\",\"x\":0.46046249999999994,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12545SP\",\"12559SP\"]},{\"reference\":\"4\",\"x\":0.52035,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12545SP\",\"12559SP\"]},{\"reference\":\"5\",\"x\":0.4243875,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12548-10\"]},{\"reference\":\"5\",\"x\":0.4824625,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12548-10\"]},{\"reference\":\"5\",\"x\":0.5432625,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12548-10\"]},{\"reference\":\"6\",\"x\":0.54385,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"32015SP\",\"12543-10\",\"12541-10\",\"13197\",\"12544-30\",\"12695\"]},{\"reference\":\"6a\",\"x\":0.426125,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12543-10\"]},{\"reference\":\"6b\",\"x\":0.4889125,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12541-10\"]},{\"reference\":\"6b\",\"x\":0.5488124999999999,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12541-10\"]},{\"reference\":\"6c\",\"x\":0.4490375,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"13197\"]},{\"reference\":\"6c\",\"x\":0.5105124999999999,\"y\":0.535151515151515,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"13197\"]},{\"reference\":\"6c\",\"x\":0.5718125,\"y\":0.535151515151515,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"13197\"]},{\"reference\":\"6d\",\"x\":0.66165,\"y\":0.5352840909090909,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12544-30\"]},{\"reference\":\"6e\",\"x\":0.6537875,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12695\"]},{\"reference\":\"7\",\"x\":0.7323,\"y\":0.9143939393939392,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"S34M06208\"]},{\"reference\":\"8\",\"x\":0.7666249999999999,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"31623SP\"]},{\"reference\":\"9\",\"x\":0.829425,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"11091-1\"]},{\"reference\":\"10\",\"x\":0.8687125,\"y\":0.4713636363636364,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"31573\"]},{\"reference\":\"11\",\"x\":0.8678874999999999,\"y\":0.7844318181818181,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12665SP\"]},{\"reference\":\"12\",\"x\":0.5571625,\"y\":0.8235416666666666,\"width\":0.021175000000000003,\"height\":0.03208333333333334,\"partNumbers\":[\"12618D\"]}]}"));}),
"[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "partIdFromNumber",
    ()=>partIdFromNumber
]);
function partIdFromNumber(partNumber) {
    const legacy = {
        "12559SP": "part-12559",
        "12545SP": "part-12545",
        "12558SP": "part-12545",
        "31618": "part-31618",
        "49771SP": "part-49771",
        "32015SP": "part-32015",
        "31623SP": "part-31623",
        "11091-1": "part-11091"
    };
    if (legacy[partNumber]) return legacy[partNumber];
    const base = partNumber.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return "part-".concat(base);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ricambio/ricambio-series-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RICAMBIO_SERIES",
    ()=>RICAMBIO_SERIES,
    "getRicambioSeriesConfig",
    ()=>getRicambioSeriesConfig
]);
const BASE = "https://davey.ricambio.net";
function catalogueUrl(catalogueId, parentId) {
    return "".concat(BASE, "/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=").concat(catalogueId, "&PRF=4&PRNDS=").concat(parentId, "&PRC=|R|CE_1|CE_111|").concat(parentId, "|").concat(catalogueId, "&MP1=").concat(catalogueId, "&MP=").concat(catalogueId, ".cex#").concat(catalogueId);
}
const RICAMBIO_SERIES = {
    hs: {
        key: "hs",
        catalogueId: "CE_190",
        familyId: "family-hs",
        title: "HS Series",
        sourceUrl: catalogueUrl("CE_190", "CE_179"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_190_1.SVG"),
        diagramLocalPath: "/diagrams/hs-series.svg",
        hotspotsJsonPath: "src/data/diagrams/hs-series-hotspots.json",
        draftJsonPath: "src/data/import/hs-series-ricambio-draft.json"
    },
    hp: {
        key: "hp",
        catalogueId: "CE_188",
        familyId: "family-hp",
        title: "HP Series",
        sourceUrl: catalogueUrl("CE_188", "CE_179"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_188_1.SVG"),
        diagramLocalPath: "/diagrams/hp-series.svg",
        hotspotsJsonPath: "src/data/diagrams/hp-series-hotspots.json",
        draftJsonPath: "src/data/import/hp-series-ricambio-draft.json"
    },
    hm: {
        key: "hm",
        catalogueId: "CE_248",
        familyId: "family-hm",
        title: "HM Series",
        sourceUrl: catalogueUrl("CE_248", "CE_247"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_248_1.SVG"),
        diagramLocalPath: "/diagrams/hm-series.svg",
        hotspotsJsonPath: "src/data/diagrams/hm-series-hotspots.json",
        draftJsonPath: "src/data/import/hm-series-ricambio-draft.json"
    },
    xj: {
        key: "xj",
        catalogueId: "CE_197",
        familyId: "family-xj",
        title: "XJ Series",
        sourceUrl: catalogueUrl("CE_197", "CE_179"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_197_1.SVG"),
        diagramLocalPath: "/diagrams/xj-series.svg",
        hotspotsJsonPath: "src/data/diagrams/xj-series-hotspots.json",
        draftJsonPath: "src/data/import/xj-series-ricambio-draft.json"
    },
    xp: {
        key: "xp",
        catalogueId: "CE_182",
        familyId: "family-xp",
        title: "XP Series",
        sourceUrl: catalogueUrl("CE_182", "CE_179"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_182_1.SVG"),
        diagramLocalPath: "/diagrams/xp-series.svg",
        hotspotsJsonPath: "src/data/diagrams/xp-series-hotspots.json",
        draftJsonPath: "src/data/import/xp-series-ricambio-draft.json"
    },
    sdw: {
        key: "sdw",
        catalogueId: "CE_201",
        familyId: "family-shallow-well",
        title: "Shallow/Deep Well Jets",
        sourceUrl: catalogueUrl("CE_201", "CE_200"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_201_1.SVG"),
        diagramLocalPath: "/diagrams/sdw-series.svg",
        hotspotsJsonPath: "src/data/diagrams/sdw-series-hotspots.json",
        draftJsonPath: "src/data/import/sdw-series-ricambio-draft.json"
    },
    evo: {
        key: "evo",
        catalogueId: "CE_564",
        familyId: "family-evodrive",
        title: "EvoDrive",
        sourceUrl: catalogueUrl("CE_564", "CE_179"),
        diagramSourceUrl: "".concat(BASE, "/ce/001/CE_564_1.SVG"),
        diagramLocalPath: "/diagrams/evo-series.svg",
        hotspotsJsonPath: "src/data/diagrams/evo-series-hotspots.json",
        draftJsonPath: "src/data/import/evo-series-ricambio-draft.json"
    }
};
function getRicambioSeriesConfig(key) {
    return RICAMBIO_SERIES[key];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVO_SERIES_DIAGRAM_URL",
    ()=>EVO_SERIES_DIAGRAM_URL,
    "EVO_SERIES_SOURCE_URL",
    ()=>EVO_SERIES_SOURCE_URL,
    "HM_SERIES_DIAGRAM_URL",
    ()=>HM_SERIES_DIAGRAM_URL,
    "HM_SERIES_SOURCE_URL",
    ()=>HM_SERIES_SOURCE_URL,
    "HP_SERIES_DIAGRAM_URL",
    ()=>HP_SERIES_DIAGRAM_URL,
    "HP_SERIES_SOURCE_URL",
    ()=>HP_SERIES_SOURCE_URL,
    "HS_SERIES_DIAGRAM_URL",
    ()=>HS_SERIES_DIAGRAM_URL,
    "HS_SERIES_SOURCE_URL",
    ()=>HS_SERIES_SOURCE_URL,
    "SDW_SERIES_DIAGRAM_URL",
    ()=>SDW_SERIES_DIAGRAM_URL,
    "SDW_SERIES_SOURCE_URL",
    ()=>SDW_SERIES_SOURCE_URL,
    "XJ_SERIES_DIAGRAM_URL",
    ()=>XJ_SERIES_DIAGRAM_URL,
    "XJ_SERIES_SOURCE_URL",
    ()=>XJ_SERIES_SOURCE_URL,
    "XP_SERIES_DIAGRAM_URL",
    ()=>XP_SERIES_DIAGRAM_URL,
    "XP_SERIES_SOURCE_URL",
    ()=>XP_SERIES_SOURCE_URL,
    "assertResponseWithinLimit",
    ()=>assertResponseWithinLimit,
    "validateCatalogueUrl",
    ()=>validateCatalogueUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$ricambio$2d$series$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/ricambio-series-config.ts [app-client] (ecmascript)");
const APPROVED_HOSTS = new Set([
    "davey.ricambio.net"
]);
const MAX_RESPONSE_BYTES = 2 * 1024 * 1024;
const HS_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_190&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_190&MP1=CE_190&MP=CE_190.cex#CE_190";
const HS_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_190_1.SVG";
const HP_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_188&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_188&MP1=CE_188&MP=CE_188.cex#CE_188";
const HP_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_188_1.SVG";
const HM_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_248&PRF=4&PRNDS=CE_247&PRC=|R|CE_1|CE_111|CE_247|CE_248&MP1=CE_248&MP=CE_248.cex#CE_248";
const HM_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_248_1.SVG";
const XJ_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_197&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_197&MP1=CE_197&MP=CE_197.cex#CE_197";
const XJ_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_197_1.SVG";
const XP_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_182&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_182&MP1=CE_182&MP=CE_182.cex#CE_182";
const XP_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_182_1.SVG";
const SDW_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_201&PRF=4&PRNDS=CE_200&PRC=|R|CE_1|CE_111|CE_200|CE_201&MP1=CE_201&MP=CE_201.cex#CE_201";
const SDW_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_201_1.SVG";
const EVO_SERIES_SOURCE_URL = "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_564&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_564&MP1=CE_564&MP=CE_564.cex#CE_564";
const EVO_SERIES_DIAGRAM_URL = "https://davey.ricambio.net/ce/001/CE_564_1.SVG";
;
function validateCatalogueUrl(rawUrl) {
    let parsed;
    try {
        parsed = new URL(rawUrl);
    } catch (e) {
        throw new Error("Invalid catalogue URL.");
    }
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        throw new Error("Unsupported catalogue URL protocol.");
    }
    if (parsed.hostname === "localhost" || parsed.hostname.endsWith(".local")) {
        throw new Error("Local catalogue URLs are not permitted.");
    }
    if (!APPROVED_HOSTS.has(parsed.hostname)) {
        throw new Error("Catalogue host is not approved.");
    }
    return parsed;
}
function assertResponseWithinLimit(contentLength, bodyLength) {
    const length = contentLength ? Number(contentLength) : bodyLength;
    if (Number.isFinite(length) && length > MAX_RESPONSE_BYTES) {
        throw new Error("Catalogue response is too large.");
    }
    if (bodyLength > MAX_RESPONSE_BYTES) {
        throw new Error("Catalogue response is too large.");
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/hs-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HS_SERIES_DIAGRAM_HEIGHT",
    ()=>HS_SERIES_DIAGRAM_HEIGHT,
    "HS_SERIES_DIAGRAM_PATH",
    ()=>HS_SERIES_DIAGRAM_PATH,
    "HS_SERIES_DIAGRAM_SOURCE_URL",
    ()=>HS_SERIES_DIAGRAM_SOURCE_URL,
    "HS_SERIES_DIAGRAM_WIDTH",
    ()=>HS_SERIES_DIAGRAM_WIDTH,
    "buildHsSeriesDiagramHotspots",
    ()=>buildHsSeriesDiagramHotspots,
    "getHsSeriesSvgHotspots",
    ()=>getHsSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hs-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
const HS_SERIES_DIAGRAM_PATH = "/diagrams/hs-series.svg";
const HS_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const HS_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const HS_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HS_SERIES_DIAGRAM_URL"];
function getHsSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildHsSeriesDiagramHotspots(diagramId, options) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>{
        const partIds = hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber)).filter((partId)=>!(options === null || options === void 0 ? void 0 : options.knownPartIds) || options.knownPartIds.has(partId));
        return {
            id: "hs-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/hm-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/hm-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_248_1.SVG\",\"width\":730,\"height\":1000,\"hotspots\":[{\"reference\":\"1\",\"x\":0.1733150684931507,\"y\":0.77722,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13656-5SP\",\"13656-6SP\",\"13656-7SP\",\"13656-8SP\"]},{\"reference\":\"2\",\"x\":0.21412328767123287,\"y\":0.7888200000000001,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"400577SP\"]},{\"reference\":\"3\",\"x\":0.3205890410958904,\"y\":0.77062,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"448533\"]},{\"reference\":\"4\",\"x\":0.37156164383561646,\"y\":0.77062,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13661-1\",\"13674-1\",\"13670-1\"]},{\"reference\":\"5\",\"x\":0.21753424657534248,\"y\":0.93257,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"S34M06168\"]},{\"reference\":\"6\",\"x\":0.33073972602739726,\"y\":0.90695,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"33479\"]},{\"reference\":\"7\",\"x\":0.4337945205479452,\"y\":0.91686,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13678SP\",\"13676SP\",\"13672SP\",\"13668SP\"]},{\"reference\":\"7\",\"x\":0.5561369863013699,\"y\":0.91605,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13678SP\",\"13676SP\",\"13672SP\",\"13668SP\"]},{\"reference\":\"7\",\"x\":0.6761780821917809,\"y\":0.91605,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13678SP\",\"13676SP\",\"13672SP\",\"13668SP\"]},{\"reference\":\"8\",\"x\":0.4372054794520549,\"y\":0.79212,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"136653\",\"136803\",\"136813\"]},{\"reference\":\"8\",\"x\":0.5595479452054795,\"y\":0.79293,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"136653\",\"136803\",\"136813\"]},{\"reference\":\"8\",\"x\":0.6761780821917809,\"y\":0.79293,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"136653\",\"136803\",\"136813\"]},{\"reference\":\"9\",\"x\":0.504054794520548,\"y\":0.7714200000000001,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"32912\",\"32913\",\"32914\"]},{\"reference\":\"10\",\"x\":0.6217808219178083,\"y\":0.7723000000000001,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13662-2\",\"13673-2\",\"13669-2\"]},{\"reference\":\"11\",\"x\":0.7384109589041097,\"y\":0.7714200000000001,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13663\",\"13675\",\"13671\"]},{\"reference\":\"12\",\"x\":0.7248356164383561,\"y\":0.90452,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13696-1\",\"13696\",\"13696-2\"]},{\"reference\":\"13\",\"x\":0.8336027397260274,\"y\":0.93096,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13666\",\"13693\"]},{\"reference\":\"14\",\"x\":0.8415479452054795,\"y\":0.81357,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13667SP\"]},{\"reference\":\"15\",\"x\":0.8618630136986303,\"y\":0.90203,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"400558SP\"]},{\"reference\":\"16\",\"x\":0.8947260273972603,\"y\":0.77641,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"13660SP\"]},{\"reference\":\"17\",\"x\":0.06915068493150685,\"y\":0.56813,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"32283SP\",\"32285SP\",\"32286SP\",\"32287SP\",\"32314SP\",\"32315\",\"32288SP\",\"11733-3\",\"11971\",\"11971-1\",\"48035\",\"404132SP\",\"49034M\",\"49034\",\"9544-1\",\"8573-5\"]},{\"reference\":\"17a\",\"x\":0.18578082191780823,\"y\":0.426,\"width\":0.04745205479452055,\"height\":0.023059999999999997,\"partNumbers\":[\"11733-3\",\"11971\",\"11971-1\"]},{\"reference\":\"17b\",\"x\":0.2685068493150685,\"y\":0.42519000000000007,\"width\":0.047287671232876714,\"height\":0.023059999999999997,\"partNumbers\":[\"48035\",\"404132SP\"]},{\"reference\":\"17c\",\"x\":0.3239178082191781,\"y\":0.42519000000000007,\"width\":0.04745205479452055,\"height\":0.023059999999999997,\"partNumbers\":[\"49034M\"]},{\"reference\":\"17d\",\"x\":0.37154794520547946,\"y\":0.426,\"width\":0.047287671232876714,\"height\":0.023059999999999997,\"partNumbers\":[\"49034\"]},{\"reference\":\"17e\",\"x\":0.26213698630136983,\"y\":0.7017700000000001,\"width\":0.052630136986301375,\"height\":0.02684,\"partNumbers\":[\"9544-1\",\"8573-5\"]},{\"reference\":\"18\",\"x\":0.6886438356164384,\"y\":0.51689,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"32391\",\"32392\",\"32393\",\"49034F\",\"13729\",\"47920\",\"11591-1\",\"48466\",\"400622\",\"48492\"]},{\"reference\":\"18a\",\"x\":0.5063698630136987,\"y\":0.426,\"width\":0.047287671232876714,\"height\":0.023059999999999997,\"partNumbers\":[\"49034F\"]},{\"reference\":\"18b\",\"x\":0.5595479452054795,\"y\":0.42519000000000007,\"width\":0.047287671232876714,\"height\":0.023059999999999997,\"partNumbers\":[\"13729\",\"47920\"]},{\"reference\":\"18c\",\"x\":0.6173561643835617,\"y\":0.42849,\"width\":0.047287671232876714,\"height\":0.023059999999999997,\"partNumbers\":[\"11591-1\"]},{\"reference\":\"18d\",\"x\":0.5335068493150685,\"y\":0.60036,\"width\":0.047287671232876714,\"height\":0.023059999999999997,\"partNumbers\":[\"48466\",\"400622\"]},{\"reference\":\"18e\",\"x\":0.5856027397260274,\"y\":0.60036,\"width\":0.04745205479452055,\"height\":0.023059999999999997,\"partNumbers\":[\"48492\"]},{\"reference\":\"19\",\"x\":0.5368356164383562,\"y\":0.645,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"47932\",\"48953\",\"49184\"]},{\"reference\":\"20\",\"x\":0.5991643835616439,\"y\":0.64662,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"47914\",\"48952\",\"403329\"]},{\"reference\":\"21\",\"x\":0.8460684931506849,\"y\":0.71688,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"32320-1SP\"]},{\"reference\":\"22\",\"x\":0.7735890410958904,\"y\":0.68714,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"TT45\",\"TT70\"]},{\"reference\":\"22\",\"x\":0.7645342465753425,\"y\":0.5235,\"width\":0.03158904109589041,\"height\":0.023059999999999997,\"partNumbers\":[\"TT45\",\"TT70\"]}]}"));}),
"[project]/src/data/diagrams/hm-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HM_SERIES_DIAGRAM_HEIGHT",
    ()=>HM_SERIES_DIAGRAM_HEIGHT,
    "HM_SERIES_DIAGRAM_PATH",
    ()=>HM_SERIES_DIAGRAM_PATH,
    "HM_SERIES_DIAGRAM_SOURCE_URL",
    ()=>HM_SERIES_DIAGRAM_SOURCE_URL,
    "HM_SERIES_DIAGRAM_WIDTH",
    ()=>HM_SERIES_DIAGRAM_WIDTH,
    "buildHmSeriesDiagramHotspots",
    ()=>buildHmSeriesDiagramHotspots,
    "getHmSeriesSvgHotspots",
    ()=>getHmSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hm-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
const HM_SERIES_DIAGRAM_PATH = "/diagrams/hm-series.svg";
const HM_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const HM_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const HM_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HM_SERIES_DIAGRAM_URL"];
function getHmSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildHmSeriesDiagramHotspots(diagramId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>({
            id: "hm-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds: hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber))
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/xj-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/xj-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_197_1.SVG\",\"width\":800,\"height\":636,\"hotspots\":[{\"reference\":\"1\",\"x\":0.10895000000000002,\"y\":0.5610377358490566,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"766\",\"767\",\"744\",\"720\",\"7060\"]},{\"reference\":\"2\",\"x\":0.3639375,\"y\":0.574685534591195,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"11620-3SP\"]},{\"reference\":\"3\",\"x\":0.4197874999999999,\"y\":0.574685534591195,\"width\":0.09931249999999998,\"height\":0.023238993710691783,\"partNumbers\":[\"32767\",\"11196\",\"430645\",\"30736\",\"43062\"]},{\"reference\":\"4\",\"x\":0.534,\"y\":0.7290566037735849,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"9859SP\",\"9856-5SP\",\"9856SP\"]},{\"reference\":\"5\",\"x\":0.564025,\"y\":0.574685534591195,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"31302SP\",\"31303SP\",\"31321SP\"]},{\"reference\":\"6\",\"x\":0.6214999999999999,\"y\":0.574685534591195,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"11591-1\"]},{\"reference\":\"7\",\"x\":0.7157250000000001,\"y\":0.6031132075471699,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"31283\"]},{\"reference\":\"8\",\"x\":0.7523875,\"y\":0.6031132075471699,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"30805\"]},{\"reference\":\"9\",\"x\":0.706575,\"y\":0.6409119496855346,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"43060\",\"43067\"]},{\"reference\":\"10\",\"x\":0.8790749999999999,\"y\":0.6724056603773585,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"9636SP\"]},{\"reference\":\"11\",\"x\":0.8790749999999999,\"y\":0.7480031446540881,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"8923-3SP\",\"9103-3SP\"]},{\"reference\":\"12\",\"x\":0.868225,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"8816-3\",\"8816-6\",\"8816-5\"]},{\"reference\":\"13\",\"x\":0.848225,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"11231-106\"]},{\"reference\":\"15\",\"x\":0.8007125,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"8818-4\",\"9952-36\",\"9952-41\"]},{\"reference\":\"16\",\"x\":0.781525,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"40010\"]},{\"reference\":\"17\",\"x\":0.7615375,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"8927\"]},{\"reference\":\"18\",\"x\":0.7307000000000001,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"8922-3\",\"8922-1\"]},{\"reference\":\"19\",\"x\":0.7082,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"11521-106\",\"B03M0835SP\",\"491076\"]},{\"reference\":\"20\",\"x\":0.6131625,\"y\":0.933867924528302,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"96376\"]},{\"reference\":\"21\",\"x\":0.5756875,\"y\":0.7280345911949686,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"9953-10SP\"]},{\"reference\":\"22\",\"x\":0.54735,\"y\":0.5263836477987421,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"PC15XJ\"]},{\"reference\":\"23\",\"x\":0.52485,\"y\":0.4896069182389937,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"TT45\",\"TT70\"]},{\"reference\":\"23\",\"x\":0.8790749999999999,\"y\":0.5274056603773585,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"TT45\",\"TT70\"]},{\"reference\":\"24\",\"x\":0.8790749999999999,\"y\":0.6031132075471699,\"width\":0.01845,\"height\":0.023238993710691824,\"partNumbers\":[\"13551SP\"]}]}"));}),
"[project]/src/data/diagrams/xj-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XJ_SERIES_DIAGRAM_HEIGHT",
    ()=>XJ_SERIES_DIAGRAM_HEIGHT,
    "XJ_SERIES_DIAGRAM_PATH",
    ()=>XJ_SERIES_DIAGRAM_PATH,
    "XJ_SERIES_DIAGRAM_SOURCE_URL",
    ()=>XJ_SERIES_DIAGRAM_SOURCE_URL,
    "XJ_SERIES_DIAGRAM_WIDTH",
    ()=>XJ_SERIES_DIAGRAM_WIDTH,
    "buildXjSeriesDiagramHotspots",
    ()=>buildXjSeriesDiagramHotspots,
    "getXjSeriesSvgHotspots",
    ()=>getXjSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/xj-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
const XJ_SERIES_DIAGRAM_PATH = "/diagrams/xj-series.svg";
const XJ_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const XJ_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const XJ_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XJ_SERIES_DIAGRAM_URL"];
function getXjSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildXjSeriesDiagramHotspots(diagramId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>({
            id: "xj-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds: hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber))
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/xp-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/xp-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_182_1.SVG\",\"width\":800,\"height\":922,\"hotspots\":[{\"reference\":\"1\",\"x\":0.3443875,\"y\":0.8522234273318872,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"706\",\"777\",\"740\"]},{\"reference\":\"2\",\"x\":0.4242875,\"y\":0.8611930585683298,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11670-20SP\"]},{\"reference\":\"3\",\"x\":0.4578125,\"y\":0.8601409978308027,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"45446\",\"49108\"]},{\"reference\":\"4\",\"x\":0.4779625,\"y\":0.8606616052060738,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"48802SP\"]},{\"reference\":\"5\",\"x\":0.5193875,\"y\":0.8611930585683298,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11354BSP\"]},{\"reference\":\"6\",\"x\":0.6163125,\"y\":0.8622451193058568,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11253-1SP\",\"11253-3\",\"11253-2SP\"]},{\"reference\":\"7\",\"x\":0.6382874999999999,\"y\":0.8617136659436009,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11254-1\",\"11254-3\",\"11254-2\"]},{\"reference\":\"8\",\"x\":0.6633000000000001,\"y\":0.8617136659436009,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"45579\"]},{\"reference\":\"9\",\"x\":0.6956125,\"y\":0.8617136659436009,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"30805\"]},{\"reference\":\"10\",\"x\":0.56265,\"y\":0.7537201735357918,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11255-1R\",\"11255-2\"]},{\"reference\":\"11\",\"x\":0.6772875,\"y\":0.759587852494577,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11256\"]},{\"reference\":\"12\",\"x\":0.7041250000000001,\"y\":0.758470715835141,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31346\"]},{\"reference\":\"13\",\"x\":0.5291250000000001,\"y\":0.8278741865509762,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11252-16\",\"11252-17\"]},{\"reference\":\"14\",\"x\":0.5279,\"y\":0.7045010845986985,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"10209-204\"]},{\"reference\":\"15\",\"x\":0.629775,\"y\":0.7018546637744035,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31491D\"]},{\"reference\":\"15\",\"x\":0.6273375,\"y\":0.6229501084598699,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31491D\"]},{\"reference\":\"16\",\"x\":0.629775,\"y\":0.6568655097613882,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31300SP\",\"32029SP\"]},{\"reference\":\"17\",\"x\":0.7181875000000001,\"y\":0.5499132321041215,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"45527\",\"14828\"]},{\"reference\":\"18\",\"x\":0.696825,\"y\":0.5562472885032538,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"43765\"]},{\"reference\":\"19\",\"x\":0.6035499999999999,\"y\":0.6071149674620392,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31330SP\",\"31982SP\"]},{\"reference\":\"20\",\"x\":0.32363749999999997,\"y\":0.5567787418655098,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"45523\"]},{\"reference\":\"21\",\"x\":0.1809375,\"y\":0.5594793926247289,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11591-1\"]},{\"reference\":\"22\",\"x\":0.1809375,\"y\":0.5891106290672452,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31372SP\"]},{\"reference\":\"23\",\"x\":0.19075,\"y\":0.6399023861171367,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"11392-10\"]},{\"reference\":\"24\",\"x\":0.19682499999999997,\"y\":0.7008026030368765,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31269\"]},{\"reference\":\"24\",\"x\":0.24623749999999997,\"y\":0.4747722342733189,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31269\"]},{\"reference\":\"25\",\"x\":0.3596625,\"y\":0.7002711496746205,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31492\"]},{\"reference\":\"25\",\"x\":0.4096125,\"y\":0.47582429501084594,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"31492\"]},{\"reference\":\"26\",\"x\":0.358375,\"y\":0.6658351409978309,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"43061\",\"401487\"]},{\"reference\":\"26\",\"x\":0.4096125,\"y\":0.43980477223427333,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"43061\",\"401487\"]},{\"reference\":\"27\",\"x\":0.5047125,\"y\":0.4080694143167029,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"PC15XJ\"]},{\"reference\":\"28\",\"x\":0.5066125,\"y\":0.4652060737527115,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"44992\"]},{\"reference\":\"28\",\"x\":0.4194250000000001,\"y\":0.6955206073752712,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"44992\"]},{\"reference\":\"29\",\"x\":0.410225,\"y\":0.3985032537960954,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"TT45\"]},{\"reference\":\"29\",\"x\":0.5474375,\"y\":0.606594360086768,\"width\":0.017325,\"height\":0.015032537960954448,\"partNumbers\":[\"TT45\"]}]}"));}),
"[project]/src/data/diagrams/xp-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XP_SERIES_DIAGRAM_HEIGHT",
    ()=>XP_SERIES_DIAGRAM_HEIGHT,
    "XP_SERIES_DIAGRAM_PATH",
    ()=>XP_SERIES_DIAGRAM_PATH,
    "XP_SERIES_DIAGRAM_SOURCE_URL",
    ()=>XP_SERIES_DIAGRAM_SOURCE_URL,
    "XP_SERIES_DIAGRAM_WIDTH",
    ()=>XP_SERIES_DIAGRAM_WIDTH,
    "buildXpSeriesDiagramHotspots",
    ()=>buildXpSeriesDiagramHotspots,
    "getXpSeriesSvgHotspots",
    ()=>getXpSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/xp-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
const XP_SERIES_DIAGRAM_PATH = "/diagrams/xp-series.svg";
const XP_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const XP_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const XP_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["XP_SERIES_DIAGRAM_URL"];
function getXpSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildXpSeriesDiagramHotspots(diagramId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>({
            id: "xp-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds: hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber))
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/sdw-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/sdw-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_201_1.SVG\",\"width\":800,\"height\":970,\"hotspots\":[{\"reference\":\"1\",\"x\":0.47375,\"y\":0.31641237113402065,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"800\",\"807\",\"859\"]},{\"reference\":\"2\",\"x\":0.17505000000000004,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"31383\"]},{\"reference\":\"3\",\"x\":0.223275,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"11971\"]},{\"reference\":\"4\",\"x\":0.28040000000000004,\"y\":0.4103814432989691,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"404131SP\",\"404130SP\"]},{\"reference\":\"5\",\"x\":0.322875,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"31382D\"]},{\"reference\":\"6\",\"x\":0.395175,\"y\":0.4108144329896907,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"W21100610\"]},{\"reference\":\"6\",\"x\":0.1189625,\"y\":0.8799381443298969,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"W21100610\"]},{\"reference\":\"6\",\"x\":0.5644625,\"y\":0.9188247422680412,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"W21100610\"]},{\"reference\":\"7\",\"x\":0.4167125,\"y\":0.4095154639175258,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"N041010\"]},{\"reference\":\"7\",\"x\":0.1184375,\"y\":0.9179690721649484,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"N041010\"]},{\"reference\":\"7\",\"x\":0.5231125,\"y\":0.8989175257731958,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"N041010\"]},{\"reference\":\"8\",\"x\":0.4407875,\"y\":0.4103814432989691,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"12098SP\",\"8890-2SP\"]},{\"reference\":\"9\",\"x\":0.470175,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"49090\"]},{\"reference\":\"10\",\"x\":0.4989625,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9665SP\",\"9447\"]},{\"reference\":\"10a\",\"x\":0.3853125,\"y\":0.5129072164948454,\"width\":0.02495,\"height\":0.02041237113402062,\"partNumbers\":[\"9447\"]},{\"reference\":\"11\",\"x\":0.5294000000000001,\"y\":0.4095154639175258,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"43067\"]},{\"reference\":\"12\",\"x\":0.558175,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10291SP\",\"31035SP\"]},{\"reference\":\"12\",\"x\":0.403025,\"y\":0.7991237113402062,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10291SP\",\"31035SP\"]},{\"reference\":\"13\",\"x\":0.5901875000000001,\"y\":0.40994845360824744,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"404365\"]},{\"reference\":\"14\",\"x\":0.6194875000000001,\"y\":0.4768865979381443,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[]},{\"reference\":\"15\",\"x\":0.6205375,\"y\":0.4955051546391752,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[]},{\"reference\":\"16\",\"x\":0.387325,\"y\":0.534762886597938,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10046-34\"]},{\"reference\":\"17\",\"x\":0.3868,\"y\":0.5516597938144329,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10046-24\"]},{\"reference\":\"18\",\"x\":0.5262625,\"y\":0.501979381443299,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"103244\"]},{\"reference\":\"19\",\"x\":0.6469499999999999,\"y\":0.4678969072164949,\"width\":0.18735,\"height\":0.2744948453608248,\"partNumbers\":[\"32768\",\"32770\",\"32769\",\"32771\",\"43473\",\"9210-1\",\"43402\",\"47863\",\"48801SP\"]},{\"reference\":\"20\",\"x\":0.7542375,\"y\":0.7222680412371133,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9243\",\"9243-2SP\"]},{\"reference\":\"21\",\"x\":0.6111125,\"y\":0.7218350515463917,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9855-3SP\",\"10218SP\"]},{\"reference\":\"22\",\"x\":0.5566125000000001,\"y\":0.7218350515463917,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9796SP\"]},{\"reference\":\"23\",\"x\":0.5320125,\"y\":0.7222680412371133,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"96376\"]},{\"reference\":\"24\",\"x\":0.5041875,\"y\":0.722701030927835,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"43596\"]},{\"reference\":\"25\",\"x\":0.46285,\"y\":0.722701030927835,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"31498\"]},{\"reference\":\"26\",\"x\":0.4334625,\"y\":0.722701030927835,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10292SP\"]},{\"reference\":\"27\",\"x\":0.3988375,\"y\":0.722701030927835,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"102416\",\"10046-16\"]},{\"reference\":\"28\",\"x\":0.485875,\"y\":0.7132061855670102,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[]},{\"reference\":\"29\",\"x\":0.492675,\"y\":0.6881134020618556,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10353SP\",\"12078\"]},{\"reference\":\"29a\",\"x\":0.35129999999999995,\"y\":0.7198247422680413,\"width\":0.02495,\"height\":0.02041237113402062,\"partNumbers\":[\"12078\"]},{\"reference\":\"30\",\"x\":0.8244374999999999,\"y\":0.9188247422680412,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10112\"]},{\"reference\":\"31\",\"x\":0.77255,\"y\":0.9192577319587628,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9439\"]},{\"reference\":\"32\",\"x\":0.7201374999999999,\"y\":0.9192577319587628,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"43067\"]},{\"reference\":\"33\",\"x\":0.6840249999999999,\"y\":0.9179690721649484,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9952-36\",\"9952-33\",\"9952-38\",\"9952-41\",\"9952-43\",\"9952-47\"]},{\"reference\":\"34\",\"x\":0.6310875,\"y\":0.9196907216494844,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"8816-8\",\"8816-7\",\"8816-5\",\"8816-9\",\"8816-3\",\"8816-6\"]},{\"reference\":\"35\",\"x\":0.610075,\"y\":0.9188247422680412,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10113\"]},{\"reference\":\"36\",\"x\":0.5839,\"y\":0.9188247422680412,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9446SP\"]},{\"reference\":\"37\",\"x\":0.26051250000000004,\"y\":0.9114226804123712,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10220SP\"]},{\"reference\":\"38\",\"x\":0.3165875,\"y\":0.9101340206185566,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"9448\"]},{\"reference\":\"39\",\"x\":0.23740000000000003,\"y\":0.9101340206185566,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10224\"]},{\"reference\":\"40\",\"x\":0.15777499999999997,\"y\":0.8012783505154639,\"width\":0.019875,\"height\":0.016391752577319587,\"partNumbers\":[\"10222\",\"10221\"]}]}"));}),
"[project]/src/data/diagrams/sdw-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDW_SERIES_DIAGRAM_HEIGHT",
    ()=>SDW_SERIES_DIAGRAM_HEIGHT,
    "SDW_SERIES_DIAGRAM_PATH",
    ()=>SDW_SERIES_DIAGRAM_PATH,
    "SDW_SERIES_DIAGRAM_SOURCE_URL",
    ()=>SDW_SERIES_DIAGRAM_SOURCE_URL,
    "SDW_SERIES_DIAGRAM_WIDTH",
    ()=>SDW_SERIES_DIAGRAM_WIDTH,
    "buildSdwSeriesDiagramHotspots",
    ()=>buildSdwSeriesDiagramHotspots,
    "getSdwSeriesSvgHotspots",
    ()=>getSdwSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/sdw-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
const SDW_SERIES_DIAGRAM_PATH = "/diagrams/sdw-series.svg";
const SDW_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const SDW_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const SDW_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SDW_SERIES_DIAGRAM_URL"];
function getSdwSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildSdwSeriesDiagramHotspots(diagramId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>({
            id: "sdw-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds: hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber))
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/evo-series-hotspots.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"sourceSvg\":\"/diagrams/evo-series.svg\",\"diagramSourceUrl\":\"https://davey.ricambio.net/ce/001/CE_564_1.SVG\",\"width\":800,\"height\":634,\"hotspots\":[{\"reference\":\"1\",\"x\":0.16325000000000003,\"y\":0.4764984227129338,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16426\"]},{\"reference\":\"1\",\"x\":0.16325000000000003,\"y\":0.4764984227129338,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16426\"]},{\"reference\":\"2\",\"x\":0.20887500000000003,\"y\":0.22870662460567823,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404259\"]},{\"reference\":\"2\",\"x\":0.20887500000000003,\"y\":0.22870662460567823,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404259\"]},{\"reference\":\"3\",\"x\":0.23450000000000004,\"y\":0.172397476340694,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33475\"]},{\"reference\":\"3\",\"x\":0.23450000000000004,\"y\":0.172397476340694,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33475\"]},{\"reference\":\"4\",\"x\":0.28300000000000003,\"y\":0.14842271293375395,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404287\"]},{\"reference\":\"4\",\"x\":0.28300000000000003,\"y\":0.14842271293375395,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404287\"]},{\"reference\":\"5\",\"x\":0.30862500000000004,\"y\":0.1854889589905363,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404289\"]},{\"reference\":\"5\",\"x\":0.30862500000000004,\"y\":0.1854889589905363,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404289\"]},{\"reference\":\"6\",\"x\":0.3865,\"y\":0.15205047318611986,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404290\"]},{\"reference\":\"6\",\"x\":0.3865,\"y\":0.15205047318611986,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404290\"]},{\"reference\":\"7\",\"x\":0.46625,\"y\":0.13769716088328074,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404308\"]},{\"reference\":\"7\",\"x\":0.46625,\"y\":0.13769716088328074,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404308\"]},{\"reference\":\"8\",\"x\":0.547875,\"y\":0.12334384858044165,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404291\"]},{\"reference\":\"8\",\"x\":0.547875,\"y\":0.12334384858044165,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404291\"]},{\"reference\":\"9\",\"x\":0.49950000000000006,\"y\":0.12570977917981074,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.49950000000000006,\"y\":0.12570977917981074,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.26587500000000003,\"y\":0.2657728706624606,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.26587500000000003,\"y\":0.2657728706624606,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.453875,\"y\":0.4873817034700316,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.453875,\"y\":0.4873817034700316,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.501375,\"y\":0.48564668769716096,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.501375,\"y\":0.48564668769716096,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.696,\"y\":0.48974763406940064,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.696,\"y\":0.48974763406940064,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.41575,\"y\":0.122397476340694,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"9\",\"x\":0.41575,\"y\":0.122397476340694,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33467\"]},{\"reference\":\"10\",\"x\":0.38075,\"y\":0.2526813880126183,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.38075,\"y\":0.2526813880126183,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.23162500000000005,\"y\":0.46703470031545746,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.23162500000000005,\"y\":0.46703470031545746,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.407375,\"y\":0.4910094637223975,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.407375,\"y\":0.4910094637223975,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.8242499999999999,\"y\":0.47050473186119873,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.8242499999999999,\"y\":0.47050473186119873,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.7264999999999999,\"y\":0.6094637223974764,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.7264999999999999,\"y\":0.6094637223974764,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.727375,\"y\":0.9088328075709778,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.727375,\"y\":0.9088328075709778,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.492875,\"y\":0.9436908517350155,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.492875,\"y\":0.9436908517350155,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.373125,\"y\":0.6753943217665614,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"10\",\"x\":0.373125,\"y\":0.6753943217665614,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33471\"]},{\"reference\":\"11\",\"x\":0.30575,\"y\":0.46813880126182966,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33473\"]},{\"reference\":\"11\",\"x\":0.30575,\"y\":0.46813880126182966,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33473\"]},{\"reference\":\"12\",\"x\":0.533625,\"y\":0.4873817034700316,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33472\"]},{\"reference\":\"12\",\"x\":0.533625,\"y\":0.4873817034700316,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33472\"]},{\"reference\":\"12\",\"x\":0.73875,\"y\":0.4873817034700316,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33472\"]},{\"reference\":\"12\",\"x\":0.73875,\"y\":0.4873817034700316,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33472\"]},{\"reference\":\"13\",\"x\":0.565,\"y\":0.26813880126182965,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33466\"]},{\"reference\":\"13\",\"x\":0.565,\"y\":0.26813880126182965,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33466\"]},{\"reference\":\"14\",\"x\":0.638125,\"y\":0.2298107255520505,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404292\"]},{\"reference\":\"14\",\"x\":0.638125,\"y\":0.2298107255520505,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404292\"]},{\"reference\":\"15\",\"x\":0.7463749999999999,\"y\":0.2466876971608833,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33468\"]},{\"reference\":\"15\",\"x\":0.7463749999999999,\"y\":0.2466876971608833,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33468\"]},{\"reference\":\"16\",\"x\":0.761625,\"y\":0.19274447949526816,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33470\"]},{\"reference\":\"16\",\"x\":0.761625,\"y\":0.19274447949526816,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33470\"]},{\"reference\":\"17\",\"x\":0.8413749999999999,\"y\":0.2011041009463722,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404294\"]},{\"reference\":\"17\",\"x\":0.8413749999999999,\"y\":0.2011041009463722,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404294\"]},{\"reference\":\"18\",\"x\":0.808125,\"y\":0.2406940063091483,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404295\"]},{\"reference\":\"18\",\"x\":0.808125,\"y\":0.2406940063091483,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404295\"]},{\"reference\":\"18\",\"x\":0.29912500000000003,\"y\":0.6970031545741325,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404295\"]},{\"reference\":\"18\",\"x\":0.29912500000000003,\"y\":0.6970031545741325,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404295\"]},{\"reference\":\"18\",\"x\":0.516625,\"y\":0.8753943217665615,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404295\"]},{\"reference\":\"18\",\"x\":0.516625,\"y\":0.8753943217665615,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404295\"]},{\"reference\":\"19\",\"x\":0.289625,\"y\":0.8657728706624606,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33474\"]},{\"reference\":\"19\",\"x\":0.289625,\"y\":0.8657728706624606,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33474\"]},{\"reference\":\"19\",\"x\":0.35325,\"y\":0.8656151419558359,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33474\"]},{\"reference\":\"19\",\"x\":0.35325,\"y\":0.8656151419558359,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33474\"]},{\"reference\":\"20\",\"x\":0.424375,\"y\":0.8735015772870661,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404297\"]},{\"reference\":\"20\",\"x\":0.424375,\"y\":0.8735015772870661,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404297\"]},{\"reference\":\"21\",\"x\":0.48425000000000007,\"y\":0.8910094637223974,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404299\"]},{\"reference\":\"21\",\"x\":0.48425000000000007,\"y\":0.8910094637223974,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404299\"]},{\"reference\":\"22\",\"x\":0.535625,\"y\":0.6157728706624607,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404300\"]},{\"reference\":\"22\",\"x\":0.535625,\"y\":0.6157728706624607,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"404300\"]},{\"reference\":\"23\",\"x\":0.613375,\"y\":0.6227129337539432,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16427\"]},{\"reference\":\"23\",\"x\":0.613375,\"y\":0.6227129337539432,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16427\"]},{\"reference\":\"24\",\"x\":0.72175,\"y\":0.8537854889589904,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16428\"]},{\"reference\":\"24\",\"x\":0.72175,\"y\":0.8537854889589904,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16428\"]},{\"reference\":\"25\",\"x\":0.2395,\"y\":0.9162460567823344,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16429\"]},{\"reference\":\"25\",\"x\":0.2395,\"y\":0.9162460567823344,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"16429\"]},{\"reference\":\"26\",\"x\":0.5473750000000001,\"y\":0.5679810725552051,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33482\"]},{\"reference\":\"26\",\"x\":0.5473750000000001,\"y\":0.5679810725552051,\"width\":0.0305,\"height\":0.038485804416403785,\"partNumbers\":[\"33482\"]}]}"));}),
"[project]/src/data/diagrams/evo-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVO_SERIES_DIAGRAM_HEIGHT",
    ()=>EVO_SERIES_DIAGRAM_HEIGHT,
    "EVO_SERIES_DIAGRAM_PATH",
    ()=>EVO_SERIES_DIAGRAM_PATH,
    "EVO_SERIES_DIAGRAM_SOURCE_URL",
    ()=>EVO_SERIES_DIAGRAM_SOURCE_URL,
    "EVO_SERIES_DIAGRAM_WIDTH",
    ()=>EVO_SERIES_DIAGRAM_WIDTH,
    "buildEvoSeriesDiagramHotspots",
    ()=>buildEvoSeriesDiagramHotspots,
    "getEvoSeriesSvgHotspots",
    ()=>getEvoSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/evo-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
const EVO_SERIES_DIAGRAM_PATH = "/diagrams/evo-series.svg";
const EVO_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const EVO_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const EVO_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EVO_SERIES_DIAGRAM_URL"];
function getEvoSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildEvoSeriesDiagramHotspots(diagramId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>({
            id: "evo-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds: hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber))
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/diagrams/hp-series-diagram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HP_SERIES_DIAGRAM_HEIGHT",
    ()=>HP_SERIES_DIAGRAM_HEIGHT,
    "HP_SERIES_DIAGRAM_PATH",
    ()=>HP_SERIES_DIAGRAM_PATH,
    "HP_SERIES_DIAGRAM_SOURCE_URL",
    ()=>HP_SERIES_DIAGRAM_SOURCE_URL,
    "HP_SERIES_DIAGRAM_WIDTH",
    ()=>HP_SERIES_DIAGRAM_WIDTH,
    "buildHpSeriesDiagramHotspots",
    ()=>buildHpSeriesDiagramHotspots,
    "getCatalogueHotspotsForFamily",
    ()=>getCatalogueHotspotsForFamily,
    "getHpSeriesSvgHotspots",
    ()=>getHpSeriesSvgHotspots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$hotspots$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hp-series-hotspots.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hs-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hm-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/xj-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/xp-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/sdw-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/evo-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ricambio/part-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/ricambio/url-validator.ts [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
const HP_SERIES_DIAGRAM_PATH = "/diagrams/hp-series.svg";
const HP_SERIES_DIAGRAM_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].width;
const HP_SERIES_DIAGRAM_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].height;
const HP_SERIES_DIAGRAM_SOURCE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$url$2d$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HP_SERIES_DIAGRAM_URL"];
function getHpSeriesSvgHotspots() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots;
}
function buildHpSeriesDiagramHotspots(diagramId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$hotspots$2e$json__$28$json$29$__["default"].hotspots.map((hotspot)=>({
            id: "hp-ref-".concat(hotspot.reference.replace(/[^a-z0-9]/gi, "")),
            diagramId,
            reference: hotspot.reference,
            x: hotspot.x,
            y: hotspot.y,
            width: hotspot.width,
            height: hotspot.height,
            partIds: hotspot.partNumbers.map((partNumber)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ricambio$2f$part$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partIdFromNumber"])(partNumber))
        }));
}
function getCatalogueHotspotsForFamily(familySlug) {
    if (familySlug === "hp-series") return getHpSeriesSvgHotspots();
    if (familySlug === "hs-series") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHsSeriesSvgHotspots"])();
    if (familySlug === "hm-series") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHmSeriesSvgHotspots"])();
    if (familySlug === "xj-series") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXjSeriesSvgHotspots"])();
    if (familySlug === "xp-series") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXpSeriesSvgHotspots"])();
    if (familySlug === "shallow-well") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdwSeriesSvgHotspots"])();
    if (familySlug === "evodrive") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvoSeriesSvgHotspots"])();
    return [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/pump-families.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Product photo shown in browse grid and on pump detail pages */ __turbopack_context__.s([
    "PUMP_FAMILY_BROWSE_ORDER",
    ()=>PUMP_FAMILY_BROWSE_ORDER,
    "getPumpFamilyBrowseLabel",
    ()=>getPumpFamilyBrowseLabel,
    "getPumpFamilyImageUrl",
    ()=>getPumpFamilyImageUrl,
    "getPumpFamilyVisual",
    ()=>getPumpFamilyVisual,
    "sortPumpFamiliesForBrowse",
    ()=>sortPumpFamiliesForBrowse
]);
const FAMILY_VISUALS = {
    "hs-series": {
        imageUrl: "/pumps/hs-series.png",
        browseLabel: "HS Range",
        imageBgClass: "bg-davey-yellow"
    },
    "hp-series": {
        imageUrl: "/pumps/hp-series.png",
        browseLabel: "HP Range",
        imageBgClass: "bg-davey-yellow"
    },
    "hm-series": {
        imageUrl: "/pumps/hm-series.png",
        browseLabel: "HM Range",
        imageBgClass: "bg-davey-yellow"
    },
    "xj-series": {
        imageUrl: "/pumps/families/xj-series.png",
        browseLabel: "XJ Range",
        imageBgClass: "bg-davey-yellow"
    },
    "xp-series": {
        imageUrl: "/pumps/families/xp-series.png",
        browseLabel: "XP Range",
        imageBgClass: "bg-davey-yellow"
    },
    // Additional ranges:
    "shallow-well": {
        imageUrl: "/pumps/families/shallow-well.png",
        browseLabel: "Shallow/Deep Well",
        imageBgClass: "bg-davey-yellow"
    },
    evodrive: {
        imageUrl: "/pumps/families/evodrive.png",
        browseLabel: "EvoDrive",
        imageBgClass: "bg-davey-yellow"
    }
};
const PUMP_FAMILY_BROWSE_ORDER = [
    "hs-series",
    "hp-series",
    "hm-series",
    "xj-series",
    "xp-series",
    "shallow-well",
    "evodrive"
];
function getPumpFamilyVisual(familySlug) {
    return FAMILY_VISUALS[familySlug];
}
function getPumpFamilyBrowseLabel(familySlug, fallbackName) {
    var _FAMILY_VISUALS_familySlug;
    var _FAMILY_VISUALS_familySlug_browseLabel;
    return (_FAMILY_VISUALS_familySlug_browseLabel = (_FAMILY_VISUALS_familySlug = FAMILY_VISUALS[familySlug]) === null || _FAMILY_VISUALS_familySlug === void 0 ? void 0 : _FAMILY_VISUALS_familySlug.browseLabel) !== null && _FAMILY_VISUALS_familySlug_browseLabel !== void 0 ? _FAMILY_VISUALS_familySlug_browseLabel : fallbackName;
}
function getPumpFamilyImageUrl(familySlug) {
    var _FAMILY_VISUALS_familySlug;
    return (_FAMILY_VISUALS_familySlug = FAMILY_VISUALS[familySlug]) === null || _FAMILY_VISUALS_familySlug === void 0 ? void 0 : _FAMILY_VISUALS_familySlug.imageUrl;
}
function sortPumpFamiliesForBrowse(families) {
    return [
        ...families
    ].sort((a, b)=>{
        const aIndex = PUMP_FAMILY_BROWSE_ORDER.indexOf(a.slug);
        const bIndex = PUMP_FAMILY_BROWSE_ORDER.indexOf(b.slug);
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return a.name.localeCompare(b.name);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/pumps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Shared product photo for Davey HS50 and HS60 pumps */ __turbopack_context__.s([
    "DEEP_WELL_CURVE_PDF",
    ()=>DEEP_WELL_CURVE_PDF,
    "EVODRIVE_CURVE_IMAGE",
    ()=>EVODRIVE_CURVE_IMAGE,
    "EVODRIVE_PUMP_IMAGE",
    ()=>EVODRIVE_PUMP_IMAGE,
    "HM_SERIES_CURVE_IMAGE",
    ()=>HM_SERIES_CURVE_IMAGE,
    "HM_SERIES_PUMP_IMAGE",
    ()=>HM_SERIES_PUMP_IMAGE,
    "HP_SERIES_CURVE_IMAGE",
    ()=>HP_SERIES_CURVE_IMAGE,
    "HP_SERIES_PUMP_IMAGE",
    ()=>HP_SERIES_PUMP_IMAGE,
    "HS_SERIES_CURVE_IMAGE",
    ()=>HS_SERIES_CURVE_IMAGE,
    "HS_SERIES_PUMP_IMAGE",
    ()=>HS_SERIES_PUMP_IMAGE,
    "SDW_SERIES_PUMP_IMAGE",
    ()=>SDW_SERIES_PUMP_IMAGE,
    "SHALLOW_WELL_CURVE_PDF",
    ()=>SHALLOW_WELL_CURVE_PDF,
    "XJ50_CURVE_IMAGE",
    ()=>XJ50_CURVE_IMAGE,
    "XJ70_CURVE_IMAGE",
    ()=>XJ70_CURVE_IMAGE,
    "XJ90_CURVE_IMAGE",
    ()=>XJ90_CURVE_IMAGE,
    "XJ_SERIES_PUMP_IMAGE",
    ()=>XJ_SERIES_PUMP_IMAGE,
    "XP25_CURVE_IMAGE",
    ()=>XP25_CURVE_IMAGE,
    "XP35_CURVE_IMAGE",
    ()=>XP35_CURVE_IMAGE,
    "XP45_CURVE_IMAGE",
    ()=>XP45_CURVE_IMAGE,
    "XP_SERIES_PUMP_IMAGE",
    ()=>XP_SERIES_PUMP_IMAGE,
    "getPumpCurveInfo",
    ()=>getPumpCurveInfo,
    "getPumpImageUrl",
    ()=>getPumpImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pump$2d$families$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pump-families.ts [app-client] (ecmascript)");
const HS_SERIES_PUMP_IMAGE = "/pumps/hs-series.png";
const HS_SERIES_CURVE_IMAGE = "/pumps/hs-series-performance-curve.png";
const HP_SERIES_PUMP_IMAGE = "/pumps/hp-series.png";
const HP_SERIES_CURVE_IMAGE = "/pumps/hp-series-performance-curve.png";
const HM_SERIES_PUMP_IMAGE = "/pumps/hm-series.png";
const HM_SERIES_CURVE_IMAGE = "/pumps/hm-series-performance-curve.png";
const XJ_SERIES_PUMP_IMAGE = "/pumps/families/xj-series.png";
const XJ50_CURVE_IMAGE = "/pumps/xj50-performance-curve.png";
const XJ70_CURVE_IMAGE = "/pumps/xj70-performance-curve.png";
const XJ90_CURVE_IMAGE = "/pumps/xj90-performance-curve.png";
const XP_SERIES_PUMP_IMAGE = "/pumps/families/xp-series.png";
const XP25_CURVE_IMAGE = "/pumps/xp25-performance-curve.png";
const XP35_CURVE_IMAGE = "/pumps/xp35-performance-curve.png";
const XP45_CURVE_IMAGE = "/pumps/xp45-performance-curve.png";
const SDW_SERIES_PUMP_IMAGE = "/pumps/families/shallow-well.png";
const SHALLOW_WELL_CURVE_PDF = "https://cdn.intelligencebank.com/au/share/BnKJ1e/73Bzg/0EAMz/original/ShallowWell_Jet_Datasheet";
const DEEP_WELL_CURVE_PDF = "https://cdn.intelligencebank.com/au/share/BnKJ1e/73Bzg/739J0/original/DeepWell_Jet_Datasheet";
const EVODRIVE_PUMP_IMAGE = "/pumps/families/evodrive.png";
const EVODRIVE_CURVE_IMAGE = "/pumps/evodrive-performance-curve.png";
;
function isCurveDocumentUrl(url) {
    const lower = url.toLowerCase();
    return lower.includes("datasheet") || lower.includes(".pdf") || lower.includes("intelligencebank");
}
const PUMP_IMAGE_BY_SLUG = {
    hs50: HS_SERIES_PUMP_IMAGE,
    hs60: HS_SERIES_PUMP_IMAGE,
    hp45: HP_SERIES_PUMP_IMAGE,
    hp65: HP_SERIES_PUMP_IMAGE,
    hp85: HP_SERIES_PUMP_IMAGE,
    hm60: HM_SERIES_PUMP_IMAGE,
    hm90: HM_SERIES_PUMP_IMAGE,
    hm160: HM_SERIES_PUMP_IMAGE,
    hm270: HM_SERIES_PUMP_IMAGE,
    xj50: XJ_SERIES_PUMP_IMAGE,
    xj70: XJ_SERIES_PUMP_IMAGE,
    xj90: XJ_SERIES_PUMP_IMAGE,
    xp25: XP_SERIES_PUMP_IMAGE,
    xp35: XP_SERIES_PUMP_IMAGE,
    xp45: XP_SERIES_PUMP_IMAGE,
    "95s": SDW_SERIES_PUMP_IMAGE,
    "95d": SDW_SERIES_PUMP_IMAGE,
    "125s": SDW_SERIES_PUMP_IMAGE,
    "125d": SDW_SERIES_PUMP_IMAGE,
    "165s": SDW_SERIES_PUMP_IMAGE,
    "165d": SDW_SERIES_PUMP_IMAGE,
    jt450: SDW_SERIES_PUMP_IMAGE,
    jt750: SDW_SERIES_PUMP_IMAGE,
    "ed60-09": EVODRIVE_PUMP_IMAGE
};
const CURVE_LABELS = {
    hs50: "L4T (HS50-06T)",
    hs60: "L5T (HS60-08T)",
    hp45: "HP45-05T",
    hp65: "HP65-06T",
    hp85: "HP85-08T",
    hm60: "HM60-10T",
    hm90: "HM90-13T",
    hm160: "HM160-19T",
    hm270: "HM270-25",
    xj50: "XJ50",
    xj70: "XJ70",
    xj90: "XJ90",
    xp25: "XP25P8",
    xp35: "XP35P8",
    xp45: "XP45P8",
    "95s": "95S",
    "95d": "95D",
    "125s": "125S",
    "125d": "125D",
    "165s": "165S",
    "165d": "165D",
    "ed60-09": "ED60-09"
};
const CURVE_IMAGES = {
    hs50: HS_SERIES_CURVE_IMAGE,
    hs60: HS_SERIES_CURVE_IMAGE,
    hp45: HP_SERIES_CURVE_IMAGE,
    hp65: HP_SERIES_CURVE_IMAGE,
    hp85: HP_SERIES_CURVE_IMAGE,
    hm60: HM_SERIES_CURVE_IMAGE,
    hm90: HM_SERIES_CURVE_IMAGE,
    hm160: HM_SERIES_CURVE_IMAGE,
    hm270: HM_SERIES_CURVE_IMAGE,
    xj50: XJ50_CURVE_IMAGE,
    xj70: XJ70_CURVE_IMAGE,
    xj90: XJ90_CURVE_IMAGE,
    xp25: XP25_CURVE_IMAGE,
    xp35: XP35_CURVE_IMAGE,
    xp45: XP45_CURVE_IMAGE,
    "ed60-09": EVODRIVE_CURVE_IMAGE
};
function getPumpImageUrl(slug, imageUrl, familySlug) {
    if (imageUrl) return imageUrl;
    const byModel = PUMP_IMAGE_BY_SLUG[slug.toLowerCase()];
    if (byModel) return byModel;
    if (familySlug) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pump$2d$families$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPumpFamilyImageUrl"])(familySlug);
    return undefined;
}
function getPumpCurveInfo(slug, curveImageUrl, curveLabel, familySlug) {
    if (curveImageUrl && curveLabel) {
        return {
            imageUrl: curveImageUrl,
            seriesLabel: curveLabel,
            isDocument: isCurveDocumentUrl(curveImageUrl),
            seriesName: familySlug === "hp-series" ? "HP Series" : familySlug === "hs-series" ? "HS Series" : familySlug === "hm-series" ? "HM Series" : familySlug === "xj-series" ? "XJ Series" : familySlug === "xp-series" ? "XP Series" : familySlug === "shallow-well" ? "Shallow/Deep Well Jets" : familySlug === "evodrive" ? "EvoDrive" : undefined
        };
    }
    const normalized = slug.toLowerCase();
    const seriesLabel = CURVE_LABELS[normalized];
    if (!seriesLabel) return undefined;
    return {
        imageUrl: CURVE_IMAGES[normalized],
        seriesLabel,
        seriesName: normalized.startsWith("hp") ? "HP Series" : normalized.startsWith("hm") ? "HM Series" : normalized.startsWith("xj") ? "XJ Series" : normalized.startsWith("xp") ? "XP Series" : normalized.startsWith("ed") ? "EvoDrive" : "HS Series"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/hp-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hpSeedCompatibilities",
    ()=>hpSeedCompatibilities,
    "hpSeedDiagram",
    ()=>hpSeedDiagram,
    "hpSeedFamily",
    ()=>hpSeedFamily,
    "hpSeedHotspots",
    ()=>hpSeedHotspots,
    "hpSeedModels",
    ()=>hpSeedModels,
    "hpSeedParts",
    ()=>hpSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hp-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const hpSeedFamily = {
    id: "family-hp",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "HP Series",
    slug: "hp-series",
    description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_188&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_188&MP1=CE_188&MP=CE_188.cex#CE_188",
    identificationNotes: "Confirm pump model, Torrium version and nameplate suffix before ordering parts."
};
const hpSeedModels = [
    {
        id: "model-hp45",
        familyId: hpSeedFamily.id,
        name: "HP45",
        slug: "hp45",
        modelCode: "HP45-05T",
        aliases: [
            "HP 45",
            "HP45-05T",
            "HP45-05"
        ],
        description: "5-stage HP pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_CURVE_IMAGE"],
        curveLabel: "HP45-05T"
    },
    {
        id: "model-hp65",
        familyId: hpSeedFamily.id,
        name: "HP65",
        slug: "hp65",
        modelCode: "HP65-06T",
        aliases: [
            "HP 65",
            "HP65-06T",
            "HP65-06"
        ],
        description: "6-stage HP pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_CURVE_IMAGE"],
        curveLabel: "HP65-06T"
    },
    {
        id: "model-hp85",
        familyId: hpSeedFamily.id,
        name: "HP85",
        slug: "hp85",
        modelCode: "HP85-08T",
        aliases: [
            "HP 85",
            "HP85-08T",
            "HP85-08"
        ],
        description: "8-stage HP pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_CURVE_IMAGE"],
        curveLabel: "HP85-08T"
    }
];
const hpSeedDiagram = {
    id: "diagram-hp",
    familyId: hpSeedFamily.id,
    name: "HP Series Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HP_SERIES_DIAGRAM_SOURCE_URL"]
};
const hpSeedHotspots = [
    {
        "id": "hp-ref-1",
        "diagramId": "diagram-hp",
        "reference": "1",
        "x": 0.4127625,
        "y": 0.44840785169029446,
        "width": 0.0318,
        "height": 0.027742639040348967,
        "partIds": [
            "part-7000",
            "part-7001",
            "part-7064",
            "part-7065"
        ]
    },
    {
        "id": "hp-ref-2",
        "diagramId": "diagram-hp",
        "reference": "2",
        "x": 0.143225,
        "y": 0.9416139585605234,
        "width": 0.031575,
        "height": 0.027546346782988007,
        "partIds": [
            "part-14406-20"
        ]
    },
    {
        "id": "hp-ref-3",
        "diagramId": "diagram-hp",
        "reference": "3",
        "x": 0.208825,
        "y": 0.6060850599781897,
        "width": 0.0318,
        "height": 0.027546346782988007,
        "partIds": [
            "part-12252sp",
            "part-12252-1sp"
        ]
    },
    {
        "id": "hp-ref-4",
        "diagramId": "diagram-hp",
        "reference": "4",
        "x": 0.2771,
        "y": 0.6489531079607415,
        "width": 0.0318,
        "height": 0.027742639040348967,
        "partIds": [
            "part-48802sp"
        ]
    },
    {
        "id": "hp-ref-5",
        "diagramId": "diagram-hp",
        "reference": "5",
        "x": 0.290225,
        "y": 0.9280370774263904,
        "width": 0.031575,
        "height": 0.027546346782988007,
        "partIds": [
            "part-11448"
        ]
    },
    {
        "id": "hp-ref-6",
        "diagramId": "diagram-hp",
        "reference": "6",
        "x": 0.3273625,
        "y": 0.6505016357688114,
        "width": 0.031575,
        "height": 0.027546346782988007,
        "partIds": [
            "part-12889sp",
            "part-12890sp",
            "part-12891sp"
        ]
    },
    {
        "id": "hp-ref-7",
        "diagramId": "diagram-hp",
        "reference": "7",
        "x": 0.3618375,
        "y": 0.8865321701199564,
        "width": 0.0318,
        "height": 0.027546346782988007,
        "partIds": [
            "part-12548-10"
        ]
    },
    {
        "id": "hp-ref-8",
        "diagramId": "diagram-hp",
        "reference": "8",
        "x": 0.3791875,
        "y": 0.6293565976008724,
        "width": 0.031575,
        "height": 0.027742639040348967,
        "partIds": [
            "part-128066"
        ]
    },
    {
        "id": "hp-ref-9",
        "diagramId": "diagram-hp",
        "reference": "9",
        "x": 0.41366249999999993,
        "y": 0.9280370774263904,
        "width": 0.0318,
        "height": 0.027546346782988007,
        "partIds": [
            "part-10963-10"
        ]
    },
    {
        "id": "hp-ref-10",
        "diagramId": "diagram-hp",
        "reference": "10",
        "x": 0.44835,
        "y": 0.6406106870229007,
        "width": 0.031575,
        "height": 0.027742639040348967,
        "partIds": [
            "part-12883-1"
        ]
    },
    {
        "id": "hp-ref-11",
        "diagramId": "diagram-hp",
        "reference": "11",
        "x": 0.5684375,
        "y": 0.8917775354416576,
        "width": 0.0318,
        "height": 0.027742639040348967,
        "partIds": [
            "part-491076"
        ]
    },
    {
        "id": "hp-ref-12",
        "diagramId": "diagram-hp",
        "reference": "12",
        "x": 0.5537624999999999,
        "y": 0.6512758996728463,
        "width": 0.031575,
        "height": 0.027546346782988007,
        "partIds": [
            "part-40021"
        ]
    },
    {
        "id": "hp-ref-13",
        "diagramId": "diagram-hp",
        "reference": "13",
        "x": 0.6549625,
        "y": 0.632464558342421,
        "width": 0.031575,
        "height": 0.027546346782988007,
        "partIds": [
            "part-42998"
        ]
    },
    {
        "id": "hp-ref-14",
        "diagramId": "diagram-hp",
        "reference": "14",
        "x": 0.6505124999999999,
        "y": 0.9468593238822246,
        "width": 0.0318,
        "height": 0.027546346782988007,
        "partIds": [
            "part-12797-1"
        ]
    },
    {
        "id": "hp-ref-15",
        "diagramId": "diagram-hp",
        "reference": "15",
        "x": 0.7319,
        "y": 0.9468593238822246,
        "width": 0.031575,
        "height": 0.027546346782988007,
        "partIds": [
            "part-12782d"
        ]
    },
    {
        "id": "hp-ref-16",
        "diagramId": "diagram-hp",
        "reference": "16",
        "x": 0.7612625,
        "y": 0.6270338058887678,
        "width": 0.031575,
        "height": 0.027742639040348967,
        "partIds": [
            "part-11091"
        ]
    },
    {
        "id": "hp-ref-17",
        "diagramId": "diagram-hp",
        "reference": "17",
        "x": 0.8112999999999999,
        "y": 0.9429770992366412,
        "width": 0.0318,
        "height": 0.027742639040348967,
        "partIds": [
            "part-45031"
        ]
    },
    {
        "id": "hp-ref-18",
        "diagramId": "diagram-hp",
        "reference": "18",
        "x": 0.8442125,
        "y": 0.6225736095965103,
        "width": 0.031575,
        "height": 0.027742639040348967,
        "partIds": [
            "part-11682",
            "part-11682-1"
        ]
    },
    {
        "id": "hp-ref-19",
        "diagramId": "diagram-hp",
        "reference": "19",
        "x": 0.6807500000000001,
        "y": 0.4951472191930207,
        "width": 0.0318,
        "height": 0.027742639040348967,
        "partIds": [
            "part-31269"
        ]
    },
    {
        "id": "hp-ref-20",
        "diagramId": "diagram-hp",
        "reference": "20",
        "x": 0.8277499999999999,
        "y": 0.5682660850599782,
        "width": 0.0318,
        "height": 0.027742639040348967,
        "partIds": [
            "part-32320-1sp"
        ]
    },
    {
        "id": "hp-ref-21",
        "diagramId": "diagram-hp",
        "reference": "21",
        "x": 0.725675,
        "y": 0.4650817884405671,
        "width": 0.0318,
        "height": 0.027546346782988007,
        "partIds": [
            "part-401487"
        ]
    },
    {
        "id": "hp-ref-22",
        "diagramId": "diagram-hp",
        "reference": "22",
        "x": 0.5381999999999999,
        "y": 0.49748091603053435,
        "width": 0.0318,
        "height": 0.027546346782988007,
        "partIds": [
            "part-tt45"
        ]
    }
];
const hpSeedParts = [
    {
        "id": "part-7000",
        "brandId": "brand-davey",
        "partNumber": "7000",
        "description": "Motor - 0.58kW 220/1/50",
        "aliases": [
            "7000",
            "7000"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-7001",
        "brandId": "brand-davey",
        "partNumber": "7001",
        "description": "Motor - 0.80kW 220/1/50",
        "aliases": [
            "7001",
            "7001"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-7064",
        "brandId": "brand-davey",
        "partNumber": "7064",
        "description": "Motor - 0.58kW 220/1/50",
        "aliases": [
            "7064",
            "7064"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-7065",
        "brandId": "brand-davey",
        "partNumber": "7065",
        "description": "Motor - 0.80kW 220/1/50",
        "aliases": [
            "7065",
            "7065"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-14406-20",
        "brandId": "brand-davey",
        "partNumber": "14406-20",
        "description": "Yoke",
        "aliases": [
            "14406-20",
            "14406-20"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12252sp",
        "brandId": "brand-davey",
        "partNumber": "12252SP",
        "description": "Casing Assy & Spacers",
        "aliases": [
            "12252",
            "12252sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12252-1sp",
        "brandId": "brand-davey",
        "partNumber": "12252-1SP",
        "description": "Casing Assy incl Yoke",
        "aliases": [
            "12252-1",
            "12252-1sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48802sp",
        "brandId": "brand-davey",
        "partNumber": "48802SP",
        "description": "Seal - Mechanical 1/2\"",
        "aliases": [
            "48802",
            "48802sp"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11448",
        "brandId": "brand-davey",
        "partNumber": "11448",
        "description": "Diffuser",
        "aliases": [
            "11448",
            "11448"
        ],
        "partCategory": "Diffuser",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12889sp",
        "brandId": "brand-davey",
        "partNumber": "12889SP",
        "description": "Impeller HP45-05",
        "aliases": [
            "12889",
            "12889sp"
        ],
        "partCategory": "Impeller",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12890sp",
        "brandId": "brand-davey",
        "partNumber": "12890SP",
        "description": "Impeller",
        "aliases": [
            "12890",
            "12890sp"
        ],
        "partCategory": "Impeller",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12891sp",
        "brandId": "brand-davey",
        "partNumber": "12891SP",
        "description": "Impeller HP85-08",
        "aliases": [
            "12891",
            "12891sp"
        ],
        "partCategory": "Impeller",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12548-10",
        "brandId": "brand-davey",
        "partNumber": "12548-10",
        "description": "Ring - Wear",
        "aliases": [
            "12548-10",
            "12548-10"
        ],
        "partCategory": "Part",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-128066",
        "brandId": "brand-davey",
        "partNumber": "128066",
        "description": "Spacer - 2 stage (pk6)",
        "aliases": [
            "128066",
            "128066"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10963-10",
        "brandId": "brand-davey",
        "partNumber": "10963-10",
        "description": "Blanking Ring",
        "aliases": [
            "10963-10",
            "10963-10"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12883-1",
        "brandId": "brand-davey",
        "partNumber": "12883-1",
        "description": "Diffuser Assy",
        "aliases": [
            "12883-1",
            "12883-1"
        ],
        "partCategory": "Diffuser",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-491076",
        "brandId": "brand-davey",
        "partNumber": "491076",
        "description": "Nut - M8 purlin s/s (pk6)",
        "aliases": [
            "491076",
            "491076"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-40021",
        "brandId": "brand-davey",
        "partNumber": "40021",
        "description": "O-ring - Diffuser",
        "aliases": [
            "40021",
            "40021"
        ],
        "partCategory": "Diffuser",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-42998",
        "brandId": "brand-davey",
        "partNumber": "42998",
        "description": "O-ring - Casing",
        "aliases": [
            "42998",
            "42998"
        ],
        "partCategory": "Casing",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12797-1",
        "brandId": "brand-davey",
        "partNumber": "12797-1",
        "description": "Ring adaptor",
        "aliases": [
            "12797-1",
            "12797-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12782d",
        "brandId": "brand-davey",
        "partNumber": "12782D",
        "description": "Cover - Suction",
        "aliases": [
            "12782D",
            "12782d"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11091",
        "brandId": "brand-davey",
        "partNumber": "11091-1",
        "description": "Priming Plug & O-ring",
        "aliases": [
            "11091-1",
            "11091-1"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-45031",
        "brandId": "brand-davey",
        "partNumber": "45031",
        "description": "Cap screw & nut",
        "aliases": [
            "45031",
            "45031"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11682",
        "brandId": "brand-davey",
        "partNumber": "11682",
        "description": "V Band Assy - Hvy Duty 7.5",
        "aliases": [
            "11682",
            "11682"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11682-1",
        "brandId": "brand-davey",
        "partNumber": "11682-1",
        "description": "V Band Assy - Hvy Duty 10",
        "aliases": [
            "11682-1",
            "11682-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31269",
        "brandId": "brand-davey",
        "partNumber": "31269",
        "description": "Cap & O-ring - Blanking",
        "aliases": [
            "31269",
            "31269"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32320-1sp",
        "brandId": "brand-davey",
        "partNumber": "32320-1SP",
        "description": "Coupling Assy",
        "aliases": [
            "32320-1",
            "32320-1sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-401487",
        "brandId": "brand-davey",
        "partNumber": "401487",
        "description": "O-ring - Torrium Post S/N 08114",
        "aliases": [
            "401487",
            "401487"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-tt45",
        "brandId": "brand-davey",
        "partNumber": "TT45",
        "description": "Torrium 2 - 450kPa Max",
        "aliases": [
            "TT45",
            "tt45"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32323",
        "brandId": "brand-davey",
        "partNumber": "32323",
        "description": "Checkvalve Assy - Torrium",
        "aliases": [
            "32323",
            "32323"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32693",
        "brandId": "brand-davey",
        "partNumber": "32693",
        "description": "Checkvalve Assy - Torrium 2",
        "aliases": [
            "32693",
            "32693"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32694",
        "brandId": "brand-davey",
        "partNumber": "32694",
        "description": "Priming Cap Assy - Torrium 2",
        "aliases": [
            "32694",
            "32694"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-w35m10026",
        "brandId": "brand-davey",
        "partNumber": "W35M10026",
        "description": "Washer - s/s (pk6)",
        "aliases": [
            "W35M10026",
            "w35m10026"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32753",
        "brandId": "brand-davey",
        "partNumber": "32753",
        "description": "Seal Kit HP Series",
        "aliases": [
            "32753",
            "32753"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32579",
        "brandId": "brand-davey",
        "partNumber": "32579",
        "description": "Wet End Kit - HP45-05 Not Illustrated",
        "aliases": [
            "32579",
            "32579"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-pcsj15",
        "brandId": "brand-davey",
        "partNumber": "PCSJ15",
        "description": "Pressure controller - 1.5 bar silver",
        "aliases": [
            "PCSJ15",
            "pcsj15"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32832",
        "brandId": "brand-davey",
        "partNumber": "32832",
        "description": "HP45 & HP65 Upgrade Kit",
        "aliases": [
            "32832",
            "32832"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32909",
        "brandId": "brand-davey",
        "partNumber": "32909",
        "description": "HP85 Upgrade Kit",
        "aliases": [
            "32909",
            "32909"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    }
];
const hpSeedCompatibilities = [
    {
        "id": "compat-hp-hp45-7000",
        "partId": "part-7000",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "1",
        "compatibilityNotes": "HP45 and HP65"
    },
    {
        "id": "compat-hp-hp65-7000",
        "partId": "part-7000",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "1",
        "compatibilityNotes": "HP45 and HP65"
    },
    {
        "id": "compat-hp-hp85-7001",
        "partId": "part-7001",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "1",
        "compatibilityNotes": "HP85"
    },
    {
        "id": "compat-hp-hp45-7064",
        "partId": "part-7064",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "1",
        "compatibilityNotes": "HP45 and HP65"
    },
    {
        "id": "compat-hp-hp65-7064",
        "partId": "part-7064",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "1",
        "compatibilityNotes": "HP45 and HP65"
    },
    {
        "id": "compat-hp-hp85-7065",
        "partId": "part-7065",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "1",
        "compatibilityNotes": "HP85"
    },
    {
        "id": "compat-hp-hp45-14406-20",
        "partId": "part-14406-20",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "2",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-14406-20",
        "partId": "part-14406-20",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "2",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-14406-20",
        "partId": "part-14406-20",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "2",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-12252sp",
        "partId": "part-12252sp",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "3",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-12252sp",
        "partId": "part-12252sp",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "3",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-12252sp",
        "partId": "part-12252sp",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "3",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-12252-1sp",
        "partId": "part-12252-1sp",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "3",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-12252-1sp",
        "partId": "part-12252-1sp",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "3",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-12252-1sp",
        "partId": "part-12252-1sp",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "3",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-48802sp",
        "partId": "part-48802sp",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "4",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-48802sp",
        "partId": "part-48802sp",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "4",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-48802sp",
        "partId": "part-48802sp",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "4",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-11448",
        "partId": "part-11448",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "5",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-11448",
        "partId": "part-11448",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "5",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-11448",
        "partId": "part-11448",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "5",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-12889sp",
        "partId": "part-12889sp",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "6",
        "compatibilityNotes": "HP45"
    },
    {
        "id": "compat-hp-hp65-12890sp",
        "partId": "part-12890sp",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "6",
        "compatibilityNotes": "HP65"
    },
    {
        "id": "compat-hp-hp85-12891sp",
        "partId": "part-12891sp",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "6",
        "compatibilityNotes": "HP85"
    },
    {
        "id": "compat-hp-hp45-12548-10",
        "partId": "part-12548-10",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "7",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-12548-10",
        "partId": "part-12548-10",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "7",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-12548-10",
        "partId": "part-12548-10",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "7",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-128066",
        "partId": "part-128066",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "8",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-128066",
        "partId": "part-128066",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "8",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-128066",
        "partId": "part-128066",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "8",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-10963-10",
        "partId": "part-10963-10",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "9",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-10963-10",
        "partId": "part-10963-10",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "9",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-10963-10",
        "partId": "part-10963-10",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "9",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-12883-1",
        "partId": "part-12883-1",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "10",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-12883-1",
        "partId": "part-12883-1",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "10",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-12883-1",
        "partId": "part-12883-1",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "10",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-491076",
        "partId": "part-491076",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "11",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-491076",
        "partId": "part-491076",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "11",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-491076",
        "partId": "part-491076",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "11",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-40021",
        "partId": "part-40021",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "12",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-40021",
        "partId": "part-40021",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "12",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-40021",
        "partId": "part-40021",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "12",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-42998",
        "partId": "part-42998",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "13",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-42998",
        "partId": "part-42998",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "13",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-42998",
        "partId": "part-42998",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "13",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-12797-1",
        "partId": "part-12797-1",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "14",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-12797-1",
        "partId": "part-12797-1",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "14",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-12797-1",
        "partId": "part-12797-1",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "14",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-12782d",
        "partId": "part-12782d",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "15",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-12782d",
        "partId": "part-12782d",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "15",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-12782d",
        "partId": "part-12782d",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "15",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-11091",
        "partId": "part-11091",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "16",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-11091",
        "partId": "part-11091",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "16",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-11091",
        "partId": "part-11091",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "16",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-45031",
        "partId": "part-45031",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "17",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-45031",
        "partId": "part-45031",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "17",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-45031",
        "partId": "part-45031",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "17",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-11682",
        "partId": "part-11682",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "18",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-11682",
        "partId": "part-11682",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "18",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-11682",
        "partId": "part-11682",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "18",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-11682-1",
        "partId": "part-11682-1",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "18",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-11682-1",
        "partId": "part-11682-1",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "18",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-11682-1",
        "partId": "part-11682-1",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "18",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-31269",
        "partId": "part-31269",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "19",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-31269",
        "partId": "part-31269",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "19",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-31269",
        "partId": "part-31269",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "19",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "20",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "20",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "20",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-401487",
        "partId": "part-401487",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "21",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-401487",
        "partId": "part-401487",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "21",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-401487",
        "partId": "part-401487",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "21",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-tt45",
        "partId": "part-tt45",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "diagramId": "diagram-hp",
        "diagramReference": "22",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp65-tt45",
        "partId": "part-tt45",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "diagramId": "diagram-hp",
        "diagramReference": "22",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp85-tt45",
        "partId": "part-tt45",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "diagramId": "diagram-hp",
        "diagramReference": "22",
        "compatibilityNotes": "HP45, HP65 and HP85"
    },
    {
        "id": "compat-hp-hp45-32323",
        "partId": "part-32323",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32323",
        "partId": "part-32323",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32323",
        "partId": "part-32323",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-32693",
        "partId": "part-32693",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32693",
        "partId": "part-32693",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32693",
        "partId": "part-32693",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-32694",
        "partId": "part-32694",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32694",
        "partId": "part-32694",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32694",
        "partId": "part-32694",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-w35m10026",
        "partId": "part-w35m10026",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-w35m10026",
        "partId": "part-w35m10026",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-w35m10026",
        "partId": "part-w35m10026",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-32753",
        "partId": "part-32753",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32753",
        "partId": "part-32753",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32753",
        "partId": "part-32753",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-32579",
        "partId": "part-32579",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32579",
        "partId": "part-32579",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32579",
        "partId": "part-32579",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-pcsj15",
        "partId": "part-pcsj15",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-pcsj15",
        "partId": "part-pcsj15",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-pcsj15",
        "partId": "part-pcsj15",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-32832",
        "partId": "part-32832",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32832",
        "partId": "part-32832",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32832",
        "partId": "part-32832",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp45-32909",
        "partId": "part-32909",
        "familyId": "family-hp",
        "modelId": "model-hp45",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp65-32909",
        "partId": "part-32909",
        "familyId": "family-hp",
        "modelId": "model-hp65",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    },
    {
        "id": "compat-hp-hp85-32909",
        "partId": "part-32909",
        "familyId": "family-hp",
        "modelId": "model-hp85",
        "compatibilityNotes": "HP45, HP65 and HP85 — requires verification"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/hs-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hsSeedCompatibilities",
    ()=>hsSeedCompatibilities,
    "hsSeedDiagram",
    ()=>hsSeedDiagram,
    "hsSeedFamily",
    ()=>hsSeedFamily,
    "hsSeedHotspots",
    ()=>hsSeedHotspots,
    "hsSeedModels",
    ()=>hsSeedModels,
    "hsSeedParts",
    ()=>hsSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hs-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const hsSeedFamily = {
    id: "family-hs",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "HS Series",
    slug: "hs-series",
    description: "Horizontal multistage pressure pumps for domestic and light commercial use.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_190&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_190&MP1=CE_190&MP=CE_190.cex#CE_190",
    identificationNotes: "Check nameplate for model, frequency and version before ordering parts."
};
const hsSeedModels = [
    {
        id: "model-hs50",
        familyId: hsSeedFamily.id,
        name: "HS50",
        slug: "hs50",
        modelCode: "HS50",
        aliases: [
            "HS 50",
            "HS-50"
        ],
        description: "5-stage horizontal multistage pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm version suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_CURVE_IMAGE"],
        curveLabel: "L4T (HS50-06T)"
    },
    {
        id: "model-hs60",
        familyId: hsSeedFamily.id,
        name: "HS60",
        slug: "hs60",
        modelCode: "HS60",
        aliases: [
            "HS 60",
            "HS-60"
        ],
        description: "6-stage horizontal multistage pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm pump version before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_CURVE_IMAGE"],
        curveLabel: "L5T (HS60-08T)"
    }
];
const hsSeedDiagram = {
    id: "diagram-hs",
    familyId: hsSeedFamily.id,
    name: "HS Series Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hs$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HS_SERIES_DIAGRAM_SOURCE_URL"]
};
const hsSeedHotspots = [
    {
        "id": "hs-ref-1",
        "diagramId": "diagram-hs",
        "reference": "1",
        "x": 0.2150875,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-781",
            "part-782"
        ]
    },
    {
        "id": "hs-ref-2",
        "diagramId": "diagram-hs",
        "reference": "2",
        "x": 0.3652375,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-31618",
            "part-12551",
            "part-43403",
            "part-49771",
            "part-40019",
            "part-401573"
        ]
    },
    {
        "id": "hs-ref-2",
        "diagramId": "diagram-hs",
        "reference": "2",
        "x": 0.7048375,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-31618",
            "part-12551",
            "part-43403",
            "part-49771",
            "part-40019",
            "part-401573"
        ]
    },
    {
        "id": "hs-ref-2",
        "diagramId": "diagram-hs",
        "reference": "2",
        "x": 0.7048375,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-31618",
            "part-12551",
            "part-43403",
            "part-49771",
            "part-40019",
            "part-401573"
        ]
    },
    {
        "id": "hs-ref-2a",
        "diagramId": "diagram-hs",
        "reference": "2a",
        "x": 0.326025,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12551"
        ]
    },
    {
        "id": "hs-ref-2b",
        "diagramId": "diagram-hs",
        "reference": "2b",
        "x": 0.3750875,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-43403"
        ]
    },
    {
        "id": "hs-ref-2c",
        "diagramId": "diagram-hs",
        "reference": "2c",
        "x": 0.40254999999999996,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-49771"
        ]
    },
    {
        "id": "hs-ref-2d",
        "diagramId": "diagram-hs",
        "reference": "2d",
        "x": 0.7048375,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-40019"
        ]
    },
    {
        "id": "hs-ref-2e",
        "diagramId": "diagram-hs",
        "reference": "2e",
        "x": 0.7048375,
        "y": 0.8264204545454544,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-401573"
        ]
    },
    {
        "id": "hs-ref-3",
        "diagramId": "diagram-hs",
        "reference": "3",
        "x": 0.35506249999999995,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12538sp"
        ]
    },
    {
        "id": "hs-ref-4",
        "diagramId": "diagram-hs",
        "reference": "4",
        "x": 0.4032125,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12545",
            "part-12559"
        ]
    },
    {
        "id": "hs-ref-4",
        "diagramId": "diagram-hs",
        "reference": "4",
        "x": 0.46046249999999994,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12545",
            "part-12559"
        ]
    },
    {
        "id": "hs-ref-4",
        "diagramId": "diagram-hs",
        "reference": "4",
        "x": 0.52035,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12545",
            "part-12559"
        ]
    },
    {
        "id": "hs-ref-5",
        "diagramId": "diagram-hs",
        "reference": "5",
        "x": 0.4243875,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12548-10"
        ]
    },
    {
        "id": "hs-ref-5",
        "diagramId": "diagram-hs",
        "reference": "5",
        "x": 0.48246249999999996,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12548-10"
        ]
    },
    {
        "id": "hs-ref-5",
        "diagramId": "diagram-hs",
        "reference": "5",
        "x": 0.5432625,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12548-10"
        ]
    },
    {
        "id": "hs-ref-6",
        "diagramId": "diagram-hs",
        "reference": "6",
        "x": 0.54385,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-32015",
            "part-12543-10",
            "part-12541-10",
            "part-13197",
            "part-12544-30",
            "part-12695"
        ]
    },
    {
        "id": "hs-ref-6a",
        "diagramId": "diagram-hs",
        "reference": "6a",
        "x": 0.426125,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12543-10"
        ]
    },
    {
        "id": "hs-ref-6b",
        "diagramId": "diagram-hs",
        "reference": "6b",
        "x": 0.48891249999999997,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12541-10"
        ]
    },
    {
        "id": "hs-ref-6b",
        "diagramId": "diagram-hs",
        "reference": "6b",
        "x": 0.5488124999999999,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12541-10"
        ]
    },
    {
        "id": "hs-ref-6c",
        "diagramId": "diagram-hs",
        "reference": "6c",
        "x": 0.4490375,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-13197"
        ]
    },
    {
        "id": "hs-ref-6c",
        "diagramId": "diagram-hs",
        "reference": "6c",
        "x": 0.5105124999999999,
        "y": 0.535151515151515,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-13197"
        ]
    },
    {
        "id": "hs-ref-6c",
        "diagramId": "diagram-hs",
        "reference": "6c",
        "x": 0.5718125,
        "y": 0.535151515151515,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-13197"
        ]
    },
    {
        "id": "hs-ref-6d",
        "diagramId": "diagram-hs",
        "reference": "6d",
        "x": 0.66165,
        "y": 0.5352840909090909,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12544-30"
        ]
    },
    {
        "id": "hs-ref-6e",
        "diagramId": "diagram-hs",
        "reference": "6e",
        "x": 0.6537875,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12695"
        ]
    },
    {
        "id": "hs-ref-7",
        "diagramId": "diagram-hs",
        "reference": "7",
        "x": 0.7323,
        "y": 0.9143939393939393,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-s34m06208"
        ]
    },
    {
        "id": "hs-ref-8",
        "diagramId": "diagram-hs",
        "reference": "8",
        "x": 0.7666249999999999,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-31623"
        ]
    },
    {
        "id": "hs-ref-9",
        "diagramId": "diagram-hs",
        "reference": "9",
        "x": 0.829425,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-11091"
        ]
    },
    {
        "id": "hs-ref-10",
        "diagramId": "diagram-hs",
        "reference": "10",
        "x": 0.8687125,
        "y": 0.47136363636363643,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-31573"
        ]
    },
    {
        "id": "hs-ref-11",
        "diagramId": "diagram-hs",
        "reference": "11",
        "x": 0.8678874999999999,
        "y": 0.7844318181818181,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12665sp"
        ]
    },
    {
        "id": "hs-ref-12",
        "diagramId": "diagram-hs",
        "reference": "12",
        "x": 0.5571625,
        "y": 0.8235416666666666,
        "width": 0.021175000000000003,
        "height": 0.03208333333333334,
        "partIds": [
            "part-12618d"
        ]
    }
];
const hsSeedParts = [
    {
        "id": "part-781",
        "brandId": "brand-davey",
        "partNumber": "781",
        "description": "Motor - 0.58kW 240/1/50",
        "aliases": [
            "781",
            "781"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-782",
        "brandId": "brand-davey",
        "partNumber": "782",
        "description": "Motor - 0.80kW 240/1/50",
        "aliases": [
            "782",
            "782"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31618",
        "brandId": "brand-davey",
        "partNumber": "31618",
        "description": "Kit - Seal HS",
        "aliases": [
            "31618",
            "31618"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12551",
        "brandId": "brand-davey",
        "partNumber": "12551",
        "description": "Slinger",
        "aliases": [
            "12551",
            "12551"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43403",
        "brandId": "brand-davey",
        "partNumber": "43403",
        "description": "O-ring",
        "aliases": [
            "43403",
            "43403"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49771",
        "brandId": "brand-davey",
        "partNumber": "49771SP",
        "description": "Seal - Mechanical 5/8\"",
        "aliases": [
            "49771",
            "49771sp"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-40019",
        "brandId": "brand-davey",
        "partNumber": "40019",
        "description": "O-ring",
        "aliases": [
            "40019",
            "40019"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-401573",
        "brandId": "brand-davey",
        "partNumber": "401573",
        "description": "Nut - Half",
        "aliases": [
            "401573",
            "401573"
        ],
        "partCategory": "Part",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12538sp",
        "brandId": "brand-davey",
        "partNumber": "12538SP",
        "description": "Backplate",
        "aliases": [
            "12538",
            "12538sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12545",
        "brandId": "brand-davey",
        "partNumber": "12545SP",
        "description": "Impeller - HS50 50Hz",
        "aliases": [
            "12545",
            "12545sp"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12559",
        "brandId": "brand-davey",
        "partNumber": "12559SP",
        "description": "Impeller - HS60 50Hz",
        "aliases": [
            "12559",
            "12559sp"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12548-10",
        "brandId": "brand-davey",
        "partNumber": "12548-10",
        "description": "Ring - Wear",
        "aliases": [
            "12548-10",
            "12548-10"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32015",
        "brandId": "brand-davey",
        "partNumber": "32015SP",
        "description": "Diffuser kit - HS",
        "aliases": [
            "32015",
            "32015sp"
        ],
        "partCategory": "Diffuser",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12543-10",
        "brandId": "brand-davey",
        "partNumber": "12543-10",
        "description": "Stage body - Final stage HS",
        "aliases": [
            "12543-10",
            "12543-10"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12541-10",
        "brandId": "brand-davey",
        "partNumber": "12541-10",
        "description": "Stage body - 2nd stage HS",
        "aliases": [
            "12541-10",
            "12541-10"
        ],
        "partCategory": "Part",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13197",
        "brandId": "brand-davey",
        "partNumber": "13197",
        "description": "Baffle return vane",
        "aliases": [
            "13197",
            "13197"
        ],
        "partCategory": "Part",
        "quantity": 3,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12544-30",
        "brandId": "brand-davey",
        "partNumber": "12544-30",
        "description": "Stage body - 1st stage",
        "aliases": [
            "12544-30",
            "12544-30"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12695",
        "brandId": "brand-davey",
        "partNumber": "12695",
        "description": "Valve - Priming",
        "aliases": [
            "12695",
            "12695"
        ],
        "partCategory": "Valve",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-s34m06208",
        "brandId": "brand-davey",
        "partNumber": "S34M06208",
        "description": "Screw - Casing (pk8)",
        "aliases": [
            "S34M06208",
            "s34m06208"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31623",
        "brandId": "brand-davey",
        "partNumber": "31623SP",
        "description": "Casing - Front Assy HS",
        "aliases": [
            "31623",
            "31623sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11091",
        "brandId": "brand-davey",
        "partNumber": "11091-1",
        "description": "Priming Plug & O-ring",
        "aliases": [
            "11091-1",
            "11091-1"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31573",
        "brandId": "brand-davey",
        "partNumber": "31573",
        "description": "Checkvalve Assy - HS",
        "aliases": [
            "31573",
            "31573"
        ],
        "partCategory": "Valve",
        "quantity": 1,
        "availability": "verify",
        "illustrated": true
    },
    {
        "id": "part-12665sp",
        "brandId": "brand-davey",
        "partNumber": "12665SP",
        "description": "Support - Foot/tape",
        "aliases": [
            "12665",
            "12665sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12618d",
        "brandId": "brand-davey",
        "partNumber": "12618D",
        "description": "Spacer - 3 stage only",
        "aliases": [
            "12618D",
            "12618d"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": true
    },
    {
        "id": "part-32320-1sp",
        "brandId": "brand-davey",
        "partNumber": "32320-1SP",
        "description": "Coupling Assy",
        "aliases": [
            "32320-1",
            "32320-1sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-11392-10",
        "brandId": "brand-davey",
        "partNumber": "11392-10",
        "description": "Flow kohn",
        "aliases": [
            "11392-10",
            "11392-10"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-11591-1",
        "brandId": "brand-davey",
        "partNumber": "11591-1",
        "description": "Plug & O-ring - Priming",
        "aliases": [
            "11591-1",
            "11591-1"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-31610-300",
        "brandId": "brand-davey",
        "partNumber": "31610-300",
        "description": "Hydrascan CL - Plug & Play Not Illustrated",
        "aliases": [
            "31610-300",
            "31610-300"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-pcsj22",
        "brandId": "brand-davey",
        "partNumber": "PCSJ22",
        "description": "Pressure controller - 2.2 bar Plug & Play",
        "aliases": [
            "PCSJ22",
            "pcsj22"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-tt45",
        "brandId": "brand-davey",
        "partNumber": "TT45",
        "description": "Torrium 2 - 450kPa Max",
        "aliases": [
            "TT45",
            "tt45"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-tt70",
        "brandId": "brand-davey",
        "partNumber": "TT70",
        "description": "Torrium 2 - 700kPa",
        "aliases": [
            "TT70",
            "tt70"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32323",
        "brandId": "brand-davey",
        "partNumber": "32323",
        "description": "Checkvalve Assy - Torrium",
        "aliases": [
            "32323",
            "32323"
        ],
        "partCategory": "Valve",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-401487",
        "brandId": "brand-davey",
        "partNumber": "401487",
        "description": "O-ring - Torrium Post S/N 08114",
        "aliases": [
            "401487",
            "401487"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32960",
        "brandId": "brand-davey",
        "partNumber": "32960",
        "description": "HS Strengthening Kit",
        "aliases": [
            "32960",
            "32960"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32578",
        "brandId": "brand-davey",
        "partNumber": "32578",
        "description": "Wet End Kit - HS50-06L",
        "aliases": [
            "32578",
            "32578"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    }
];
const hsSeedCompatibilities = [
    {
        "id": "compat-hs-hs50-781",
        "partId": "part-781",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "1",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-781",
        "partId": "part-781",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "1",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-782",
        "partId": "part-782",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "1",
        "compatibilityNotes": "HS60"
    },
    {
        "id": "compat-hs-hs50-31618",
        "partId": "part-31618",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "2",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-31618",
        "partId": "part-31618",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "2",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12551",
        "partId": "part-12551",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "2a",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12551",
        "partId": "part-12551",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "2a",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-43403",
        "partId": "part-43403",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "2b",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-43403",
        "partId": "part-43403",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "2b",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-49771",
        "partId": "part-49771",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "2c",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-49771",
        "partId": "part-49771",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "2c",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-40019",
        "partId": "part-40019",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "2d",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-40019",
        "partId": "part-40019",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "2d",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-401573",
        "partId": "part-401573",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "2e",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-401573",
        "partId": "part-401573",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "2e",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12538sp",
        "partId": "part-12538sp",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "3",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12538sp",
        "partId": "part-12538sp",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "3",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12545",
        "partId": "part-12545",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "4",
        "compatibilityNotes": "HS50"
    },
    {
        "id": "compat-hs-hs60-12559",
        "partId": "part-12559",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "4",
        "compatibilityNotes": "HS60"
    },
    {
        "id": "compat-hs-hs50-12548-10",
        "partId": "part-12548-10",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "5",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12548-10",
        "partId": "part-12548-10",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "5",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-32015",
        "partId": "part-32015",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "6",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-32015",
        "partId": "part-32015",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "6",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12543-10",
        "partId": "part-12543-10",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "6a",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12543-10",
        "partId": "part-12543-10",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "6a",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12541-10",
        "partId": "part-12541-10",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "6b",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12541-10",
        "partId": "part-12541-10",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "6b",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-13197",
        "partId": "part-13197",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "6c",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-13197",
        "partId": "part-13197",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "6c",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12544-30",
        "partId": "part-12544-30",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "6d",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12544-30",
        "partId": "part-12544-30",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "6d",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12695",
        "partId": "part-12695",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "6e",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12695",
        "partId": "part-12695",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "6e",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-s34m06208",
        "partId": "part-s34m06208",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "7",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-s34m06208",
        "partId": "part-s34m06208",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "7",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-31623",
        "partId": "part-31623",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "8",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-31623",
        "partId": "part-31623",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "8",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-11091",
        "partId": "part-11091",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "9",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-11091",
        "partId": "part-11091",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "9",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-31573",
        "partId": "part-31573",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "10",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-31573",
        "partId": "part-31573",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "10",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-12665sp",
        "partId": "part-12665sp",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "11",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs60-12665sp",
        "partId": "part-12665sp",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "11",
        "compatibilityNotes": "HS50 and HS60"
    },
    {
        "id": "compat-hs-hs50-12618d",
        "partId": "part-12618d",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "diagramId": "diagram-hs",
        "diagramReference": "12",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-12618d",
        "partId": "part-12618d",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "diagramId": "diagram-hs",
        "diagramReference": "12",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-11392-10",
        "partId": "part-11392-10",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-11392-10",
        "partId": "part-11392-10",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-31610-300",
        "partId": "part-31610-300",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-31610-300",
        "partId": "part-31610-300",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-pcsj22",
        "partId": "part-pcsj22",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-pcsj22",
        "partId": "part-pcsj22",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-tt45",
        "partId": "part-tt45",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-tt45",
        "partId": "part-tt45",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-tt70",
        "partId": "part-tt70",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-tt70",
        "partId": "part-tt70",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-32323",
        "partId": "part-32323",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-32323",
        "partId": "part-32323",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-401487",
        "partId": "part-401487",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-401487",
        "partId": "part-401487",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-32960",
        "partId": "part-32960",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs60-32960",
        "partId": "part-32960",
        "familyId": "family-hs",
        "modelId": "model-hs60",
        "compatibilityNotes": "HS50 and HS60 — requires verification"
    },
    {
        "id": "compat-hs-hs50-32578",
        "partId": "part-32578",
        "familyId": "family-hs",
        "modelId": "model-hs50",
        "compatibilityNotes": "HS50"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/extended-families-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendedSeedFamilies",
    ()=>extendedSeedFamilies,
    "extendedSeedModels",
    ()=>extendedSeedModels
]);
const extendedSeedFamilies = [];
const extendedSeedModels = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/xj-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xjSeedCompatibilities",
    ()=>xjSeedCompatibilities,
    "xjSeedDiagram",
    ()=>xjSeedDiagram,
    "xjSeedFamily",
    ()=>xjSeedFamily,
    "xjSeedHotspots",
    ()=>xjSeedHotspots,
    "xjSeedModels",
    ()=>xjSeedModels,
    "xjSeedParts",
    ()=>xjSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/xj-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const xjSeedFamily = {
    id: "family-xj",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "XJ Series",
    slug: "xj-series",
    description: "Single-stage jet-assisted centrifugal pumps with Torrium2 or pressure switch options.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_197&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_197&MP1=CE_197&MP=CE_197.cex#CE_197",
    identificationNotes: "Confirm Torrium (T) or pressure switch (P) suffix and model size on the nameplate before ordering parts."
};
const xjSeedModels = [
    {
        id: "model-xj50",
        familyId: xjSeedFamily.id,
        name: "XJ50",
        slug: "xj50",
        modelCode: "XJ50T",
        aliases: [
            "XJ 50",
            "XJ50T",
            "XJ50P"
        ],
        description: "50 lpm DynaJet pressure system, 50 Hz.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ50_CURVE_IMAGE"],
        curveLabel: "XJ50"
    },
    {
        id: "model-xj70",
        familyId: xjSeedFamily.id,
        name: "XJ70",
        slug: "xj70",
        modelCode: "XJ70T",
        aliases: [
            "XJ 70",
            "XJ70T",
            "XJ70P"
        ],
        description: "70 lpm DynaJet pressure system, 50 Hz.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ70_CURVE_IMAGE"],
        curveLabel: "XJ70"
    },
    {
        id: "model-xj90",
        familyId: xjSeedFamily.id,
        name: "XJ90",
        slug: "xj90",
        modelCode: "XJ90T",
        aliases: [
            "XJ 90",
            "XJ90T",
            "XJ90P"
        ],
        description: "90 lpm DynaJet pressure system, 50 Hz.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm the exact pump model and controller option before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ90_CURVE_IMAGE"],
        curveLabel: "XJ90"
    }
];
const xjSeedDiagram = {
    id: "diagram-xj",
    familyId: xjSeedFamily.id,
    name: "XJ Series Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xj$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XJ_SERIES_DIAGRAM_SOURCE_URL"]
};
const xjSeedHotspots = [
    {
        "id": "xj-ref-1",
        "diagramId": "diagram-xj",
        "reference": "1",
        "x": 0.10895000000000002,
        "y": 0.5610377358490566,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-766",
            "part-767",
            "part-744",
            "part-720",
            "part-7060"
        ]
    },
    {
        "id": "xj-ref-2",
        "diagramId": "diagram-xj",
        "reference": "2",
        "x": 0.36393749999999997,
        "y": 0.574685534591195,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-11620-3sp"
        ]
    },
    {
        "id": "xj-ref-3",
        "diagramId": "diagram-xj",
        "reference": "3",
        "x": 0.4197874999999999,
        "y": 0.574685534591195,
        "width": 0.09931249999999998,
        "height": 0.023238993710691783,
        "partIds": [
            "part-32767",
            "part-11196",
            "part-430645",
            "part-30736",
            "part-43062"
        ]
    },
    {
        "id": "xj-ref-4",
        "diagramId": "diagram-xj",
        "reference": "4",
        "x": 0.534,
        "y": 0.7290566037735849,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-9859sp",
            "part-9856-5sp",
            "part-9856sp"
        ]
    },
    {
        "id": "xj-ref-5",
        "diagramId": "diagram-xj",
        "reference": "5",
        "x": 0.564025,
        "y": 0.574685534591195,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-31302sp",
            "part-31303sp",
            "part-31321sp"
        ]
    },
    {
        "id": "xj-ref-6",
        "diagramId": "diagram-xj",
        "reference": "6",
        "x": 0.6214999999999999,
        "y": 0.574685534591195,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-11591-1"
        ]
    },
    {
        "id": "xj-ref-7",
        "diagramId": "diagram-xj",
        "reference": "7",
        "x": 0.7157250000000001,
        "y": 0.6031132075471699,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-31283"
        ]
    },
    {
        "id": "xj-ref-8",
        "diagramId": "diagram-xj",
        "reference": "8",
        "x": 0.7523875,
        "y": 0.6031132075471699,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-30805"
        ]
    },
    {
        "id": "xj-ref-9",
        "diagramId": "diagram-xj",
        "reference": "9",
        "x": 0.706575,
        "y": 0.6409119496855346,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-43060",
            "part-43067"
        ]
    },
    {
        "id": "xj-ref-10",
        "diagramId": "diagram-xj",
        "reference": "10",
        "x": 0.8790749999999999,
        "y": 0.6724056603773585,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-9636sp"
        ]
    },
    {
        "id": "xj-ref-11",
        "diagramId": "diagram-xj",
        "reference": "11",
        "x": 0.8790749999999999,
        "y": 0.7480031446540881,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-8923-3sp",
            "part-9103-3sp"
        ]
    },
    {
        "id": "xj-ref-12",
        "diagramId": "diagram-xj",
        "reference": "12",
        "x": 0.868225,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-8816-3",
            "part-8816-6",
            "part-8816-5"
        ]
    },
    {
        "id": "xj-ref-13",
        "diagramId": "diagram-xj",
        "reference": "13",
        "x": 0.848225,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-11231-106"
        ]
    },
    {
        "id": "xj-ref-15",
        "diagramId": "diagram-xj",
        "reference": "15",
        "x": 0.8007125,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-8818-4",
            "part-9952-36",
            "part-9952-41"
        ]
    },
    {
        "id": "xj-ref-16",
        "diagramId": "diagram-xj",
        "reference": "16",
        "x": 0.781525,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-40010"
        ]
    },
    {
        "id": "xj-ref-17",
        "diagramId": "diagram-xj",
        "reference": "17",
        "x": 0.7615375,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-8927"
        ]
    },
    {
        "id": "xj-ref-18",
        "diagramId": "diagram-xj",
        "reference": "18",
        "x": 0.7307000000000001,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-8922-3",
            "part-8922-1"
        ]
    },
    {
        "id": "xj-ref-19",
        "diagramId": "diagram-xj",
        "reference": "19",
        "x": 0.7082,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-11521-106",
            "part-b03m0835sp",
            "part-491076"
        ]
    },
    {
        "id": "xj-ref-20",
        "diagramId": "diagram-xj",
        "reference": "20",
        "x": 0.6131625,
        "y": 0.9338679245283019,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-96376"
        ]
    },
    {
        "id": "xj-ref-21",
        "diagramId": "diagram-xj",
        "reference": "21",
        "x": 0.5756875,
        "y": 0.7280345911949686,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-9953-10sp"
        ]
    },
    {
        "id": "xj-ref-22",
        "diagramId": "diagram-xj",
        "reference": "22",
        "x": 0.54735,
        "y": 0.5263836477987421,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-pc15xj"
        ]
    },
    {
        "id": "xj-ref-23",
        "diagramId": "diagram-xj",
        "reference": "23",
        "x": 0.52485,
        "y": 0.4896069182389937,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-tt45",
            "part-tt70"
        ]
    },
    {
        "id": "xj-ref-23",
        "diagramId": "diagram-xj",
        "reference": "23",
        "x": 0.8790749999999999,
        "y": 0.5274056603773585,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-tt45",
            "part-tt70"
        ]
    },
    {
        "id": "xj-ref-24",
        "diagramId": "diagram-xj",
        "reference": "24",
        "x": 0.8790749999999999,
        "y": 0.6031132075471699,
        "width": 0.01845,
        "height": 0.023238993710691824,
        "partIds": [
            "part-13551sp"
        ]
    }
];
const xjSeedParts = [
    {
        "id": "part-766",
        "brandId": "brand-davey",
        "partNumber": "766",
        "description": "Motor - 0.58kW 240/1/50",
        "aliases": [
            "766",
            "766"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-767",
        "brandId": "brand-davey",
        "partNumber": "767",
        "description": "Motor - 0.80kW 240/1/50",
        "aliases": [
            "767",
            "767"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-744",
        "brandId": "brand-davey",
        "partNumber": "744",
        "description": "Motor - 0.58kW 220/1/50",
        "aliases": [
            "744",
            "744"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-720",
        "brandId": "brand-davey",
        "partNumber": "720",
        "description": "Motor - 0.80kW 220/1/50",
        "aliases": [
            "720",
            "720"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-7060",
        "brandId": "brand-davey",
        "partNumber": "7060",
        "description": "Motor - 1.1kW 1ph",
        "aliases": [
            "7060",
            "7060"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11620-3sp",
        "brandId": "brand-davey",
        "partNumber": "11620-3SP",
        "description": "Adaptor",
        "aliases": [
            "11620-3",
            "11620-3sp"
        ],
        "partCategory": "Adaptor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32767",
        "brandId": "brand-davey",
        "partNumber": "32767",
        "description": "Seal Kit",
        "aliases": [
            "32767",
            "32767"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11196",
        "brandId": "brand-davey",
        "partNumber": "11196",
        "description": "Sleeve - Painted brass",
        "aliases": [
            "11196",
            "11196"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-430645",
        "brandId": "brand-davey",
        "partNumber": "430645",
        "description": "O-ring - Pack of 5",
        "aliases": [
            "430645",
            "430645"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-30736",
        "brandId": "brand-davey",
        "partNumber": "30736",
        "description": "Seal - Mechanical",
        "aliases": [
            "30736",
            "30736"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43062",
        "brandId": "brand-davey",
        "partNumber": "43062",
        "description": "O-ring - Casing",
        "aliases": [
            "43062",
            "43062"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9859sp",
        "brandId": "brand-davey",
        "partNumber": "9859SP",
        "description": "Impeller",
        "aliases": [
            "9859",
            "9859sp"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9856-5sp",
        "brandId": "brand-davey",
        "partNumber": "9856-5SP",
        "description": "Impeller",
        "aliases": [
            "9856-5",
            "9856-5sp"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9856sp",
        "brandId": "brand-davey",
        "partNumber": "9856SP",
        "description": "Impeller",
        "aliases": [
            "9856",
            "9856sp"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31302sp",
        "brandId": "brand-davey",
        "partNumber": "31302SP",
        "description": "Switch - Pressure 180-390kPa",
        "aliases": [
            "31302",
            "31302sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31303sp",
        "brandId": "brand-davey",
        "partNumber": "31303SP",
        "description": "Switch - Pressure 210-420 kPa",
        "aliases": [
            "31303",
            "31303sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31321sp",
        "brandId": "brand-davey",
        "partNumber": "31321SP",
        "description": "Switch - Pressure 210-350kPa",
        "aliases": [
            "31321",
            "31321sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11591-1",
        "brandId": "brand-davey",
        "partNumber": "11591-1",
        "description": "Plug & O-ring - Priming",
        "aliases": [
            "11591-1",
            "11591-1"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31283",
        "brandId": "brand-davey",
        "partNumber": "31283",
        "description": "Kit - Tee piece assy",
        "aliases": [
            "31283",
            "31283"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-30805",
        "brandId": "brand-davey",
        "partNumber": "30805",
        "description": "Checkvalve Assy",
        "aliases": [
            "30805",
            "30805"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43060",
        "brandId": "brand-davey",
        "partNumber": "43060",
        "description": "O-ring",
        "aliases": [
            "43060",
            "43060"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43067",
        "brandId": "brand-davey",
        "partNumber": "43067",
        "description": "O-ring",
        "aliases": [
            "43067",
            "43067"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9636sp",
        "brandId": "brand-davey",
        "partNumber": "9636SP",
        "description": "Screw & O-ring - Airbleed",
        "aliases": [
            "9636",
            "9636sp"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8923-3sp",
        "brandId": "brand-davey",
        "partNumber": "8923-3SP",
        "description": "Cover - Entry deluxe foot",
        "aliases": [
            "8923-3",
            "8923-3sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9103-3sp",
        "brandId": "brand-davey",
        "partNumber": "9103-3SP",
        "description": "Port - Inlet",
        "aliases": [
            "9103-3",
            "9103-3sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-3",
        "brandId": "brand-davey",
        "partNumber": "8816-3",
        "description": "Jet - White",
        "aliases": [
            "8816-3",
            "8816-3"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-6",
        "brandId": "brand-davey",
        "partNumber": "8816-6",
        "description": "Jet - Red",
        "aliases": [
            "8816-6",
            "8816-6"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-5",
        "brandId": "brand-davey",
        "partNumber": "8816-5",
        "description": "Jet - Green",
        "aliases": [
            "8816-5",
            "8816-5"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11231-106",
        "brandId": "brand-davey",
        "partNumber": "11231-106",
        "description": "Screw - (pk6)",
        "aliases": [
            "11231-106",
            "11231-106"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43067",
        "brandId": "brand-davey",
        "partNumber": "43067",
        "description": "O-ring",
        "aliases": [
            "43067",
            "43067"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8818-4",
        "brandId": "brand-davey",
        "partNumber": "8818-4",
        "description": "Venturi - Yellow",
        "aliases": [
            "8818-4",
            "8818-4"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-36",
        "brandId": "brand-davey",
        "partNumber": "9952-36",
        "description": "Venturi - Green",
        "aliases": [
            "9952-36",
            "9952-36"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-41",
        "brandId": "brand-davey",
        "partNumber": "9952-41",
        "description": "Venturi - Black",
        "aliases": [
            "9952-41",
            "9952-41"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-40010",
        "brandId": "brand-davey",
        "partNumber": "40010",
        "description": "O-ring - Venturi/coverplate",
        "aliases": [
            "40010",
            "40010"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8927",
        "brandId": "brand-davey",
        "partNumber": "8927",
        "description": "Gasket - Suction cover",
        "aliases": [
            "8927",
            "8927"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8922-3",
        "brandId": "brand-davey",
        "partNumber": "8922-3",
        "description": "Body - Pump c/w priming port",
        "aliases": [
            "8922-3",
            "8922-3"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8922-1",
        "brandId": "brand-davey",
        "partNumber": "8922-1",
        "description": "Body - Pump",
        "aliases": [
            "8922-1",
            "8922-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11521-106",
        "brandId": "brand-davey",
        "partNumber": "11521-106",
        "description": "Screw - (pk6)",
        "aliases": [
            "11521-106",
            "11521-106"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-b03m0835sp",
        "brandId": "brand-davey",
        "partNumber": "B03M0835SP",
        "description": "Bolt (pk6) suits Adaptor 11620-3SP",
        "aliases": [
            "B03M0835",
            "b03m0835sp"
        ],
        "partCategory": "Adaptor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-491076",
        "brandId": "brand-davey",
        "partNumber": "491076",
        "description": "Nut - M8 purlin s/s (pk6)",
        "aliases": [
            "491076",
            "491076"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-96376",
        "brandId": "brand-davey",
        "partNumber": "96376",
        "description": "Screw - (pk6)",
        "aliases": [
            "96376",
            "96376"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9953-10sp",
        "brandId": "brand-davey",
        "partNumber": "9953-10SP",
        "description": "Coverplate",
        "aliases": [
            "9953-10",
            "9953-10sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-pc15xj",
        "brandId": "brand-davey",
        "partNumber": "PC15XJ",
        "description": "Press Control",
        "aliases": [
            "PC15XJ",
            "pc15xj"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-tt45",
        "brandId": "brand-davey",
        "partNumber": "TT45",
        "description": "Torrium 2 - 450kPa Max",
        "aliases": [
            "TT45",
            "tt45"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-tt70",
        "brandId": "brand-davey",
        "partNumber": "TT70",
        "description": "Torrium 2 - 700kPa",
        "aliases": [
            "TT70",
            "tt70"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13551sp",
        "brandId": "brand-davey",
        "partNumber": "13551SP",
        "description": "Adaptor - Dynajet (Torrium) XJ50T XJ70T XJ90T",
        "aliases": [
            "13551",
            "13551sp"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-96154",
        "brandId": "brand-davey",
        "partNumber": "96154",
        "description": "Screw - (pk4)",
        "aliases": [
            "96154",
            "96154"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-8890-2sp",
        "brandId": "brand-davey",
        "partNumber": "8890-2SP",
        "description": "Plug & O-ring - Priming",
        "aliases": [
            "8890-2",
            "8890-2sp"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32323",
        "brandId": "brand-davey",
        "partNumber": "32323",
        "description": "Checkvalve Assy - Torrium",
        "aliases": [
            "32323",
            "32323"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-43061",
        "brandId": "brand-davey",
        "partNumber": "43061",
        "description": "O-ring - Torrium Pre S/N 08114",
        "aliases": [
            "43061",
            "43061"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-401487",
        "brandId": "brand-davey",
        "partNumber": "401487",
        "description": "O-ring - Torrium Post S/N 08114",
        "aliases": [
            "401487",
            "401487"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32693",
        "brandId": "brand-davey",
        "partNumber": "32693",
        "description": "Checkvalve Assy - Torrium 2",
        "aliases": [
            "32693",
            "32693"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32694",
        "brandId": "brand-davey",
        "partNumber": "32694",
        "description": "Priming Cap Assy - Torrium 2",
        "aliases": [
            "32694",
            "32694"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    }
];
const xjSeedCompatibilities = [
    {
        "id": "compat-xj-xj50-766",
        "partId": "part-766",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-766",
        "partId": "part-766",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-766",
        "partId": "part-766",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-767",
        "partId": "part-767",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-767",
        "partId": "part-767",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-767",
        "partId": "part-767",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-744",
        "partId": "part-744",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ50"
    },
    {
        "id": "compat-xj-xj70-720",
        "partId": "part-720",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ70"
    },
    {
        "id": "compat-xj-xj90-7060",
        "partId": "part-7060",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "1",
        "compatibilityNotes": "XJ90"
    },
    {
        "id": "compat-xj-xj50-11620-3sp",
        "partId": "part-11620-3sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "2",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-11620-3sp",
        "partId": "part-11620-3sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "2",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-11620-3sp",
        "partId": "part-11620-3sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "2",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-32767",
        "partId": "part-32767",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "3",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-32767",
        "partId": "part-32767",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "3",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-32767",
        "partId": "part-32767",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "3",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-11196",
        "partId": "part-11196",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "3a",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-11196",
        "partId": "part-11196",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "3a",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-11196",
        "partId": "part-11196",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "3a",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-430645",
        "partId": "part-430645",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "3b",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-430645",
        "partId": "part-430645",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "3b",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-430645",
        "partId": "part-430645",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "3b",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-30736",
        "partId": "part-30736",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "3c",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-30736",
        "partId": "part-30736",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "3c",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-30736",
        "partId": "part-30736",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "3c",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-43062",
        "partId": "part-43062",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "3d",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-43062",
        "partId": "part-43062",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "3d",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-43062",
        "partId": "part-43062",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "3d",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-9859sp",
        "partId": "part-9859sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "4",
        "compatibilityNotes": "XJ50"
    },
    {
        "id": "compat-xj-xj70-9856-5sp",
        "partId": "part-9856-5sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "4",
        "compatibilityNotes": "XJ70"
    },
    {
        "id": "compat-xj-xj90-9856sp",
        "partId": "part-9856sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "4",
        "compatibilityNotes": "XJ90"
    },
    {
        "id": "compat-xj-xj50-31302sp",
        "partId": "part-31302sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "5",
        "compatibilityNotes": "XJ50"
    },
    {
        "id": "compat-xj-xj70-31303sp",
        "partId": "part-31303sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "5",
        "compatibilityNotes": "XJ70"
    },
    {
        "id": "compat-xj-xj90-31321sp",
        "partId": "part-31321sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "5",
        "compatibilityNotes": "XJ90"
    },
    {
        "id": "compat-xj-xj50-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "6",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "6",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "6",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-31283",
        "partId": "part-31283",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "7",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-31283",
        "partId": "part-31283",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "7",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-31283",
        "partId": "part-31283",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "7",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-30805",
        "partId": "part-30805",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "8",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-30805",
        "partId": "part-30805",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "8",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-30805",
        "partId": "part-30805",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "8",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-43060",
        "partId": "part-43060",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "9",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-43060",
        "partId": "part-43060",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "9",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-43060",
        "partId": "part-43060",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "9",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-43067",
        "partId": "part-43067",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "9",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-43067",
        "partId": "part-43067",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "9",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-43067",
        "partId": "part-43067",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "9",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-9636sp",
        "partId": "part-9636sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "10",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-9636sp",
        "partId": "part-9636sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "10",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-9636sp",
        "partId": "part-9636sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "10",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-8923-3sp",
        "partId": "part-8923-3sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "11",
        "compatibilityNotes": "XJ50 and XJ70"
    },
    {
        "id": "compat-xj-xj70-8923-3sp",
        "partId": "part-8923-3sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "11",
        "compatibilityNotes": "XJ50 and XJ70"
    },
    {
        "id": "compat-xj-xj90-9103-3sp",
        "partId": "part-9103-3sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "11",
        "compatibilityNotes": "XJ90"
    },
    {
        "id": "compat-xj-xj50-8816-3",
        "partId": "part-8816-3",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "12",
        "compatibilityNotes": "XJ50"
    },
    {
        "id": "compat-xj-xj70-8816-6",
        "partId": "part-8816-6",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "12",
        "compatibilityNotes": "XJ70"
    },
    {
        "id": "compat-xj-xj90-8816-5",
        "partId": "part-8816-5",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "12",
        "compatibilityNotes": "XJ90"
    },
    {
        "id": "compat-xj-xj50-11231-106",
        "partId": "part-11231-106",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "13",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-11231-106",
        "partId": "part-11231-106",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "13",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-11231-106",
        "partId": "part-11231-106",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "13",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-43067",
        "partId": "part-43067",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "14",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-43067",
        "partId": "part-43067",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "14",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-43067",
        "partId": "part-43067",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "14",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-8818-4",
        "partId": "part-8818-4",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "15",
        "compatibilityNotes": "XJ50"
    },
    {
        "id": "compat-xj-xj70-9952-36",
        "partId": "part-9952-36",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "15",
        "compatibilityNotes": "XJ70"
    },
    {
        "id": "compat-xj-xj90-9952-41",
        "partId": "part-9952-41",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "15",
        "compatibilityNotes": "XJ90"
    },
    {
        "id": "compat-xj-xj50-40010",
        "partId": "part-40010",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "16",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-40010",
        "partId": "part-40010",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "16",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-40010",
        "partId": "part-40010",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "16",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-8927",
        "partId": "part-8927",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "17",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-8927",
        "partId": "part-8927",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "17",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-8927",
        "partId": "part-8927",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "17",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-8922-3",
        "partId": "part-8922-3",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "18",
        "compatibilityNotes": "XJ50 and XJ70"
    },
    {
        "id": "compat-xj-xj70-8922-3",
        "partId": "part-8922-3",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "18",
        "compatibilityNotes": "XJ50 and XJ70"
    },
    {
        "id": "compat-xj-xj50-8922-1",
        "partId": "part-8922-1",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "18",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-8922-1",
        "partId": "part-8922-1",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "18",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-8922-1",
        "partId": "part-8922-1",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "18",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-11521-106",
        "partId": "part-11521-106",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-11521-106",
        "partId": "part-11521-106",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-11521-106",
        "partId": "part-11521-106",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-b03m0835sp",
        "partId": "part-b03m0835sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-b03m0835sp",
        "partId": "part-b03m0835sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-b03m0835sp",
        "partId": "part-b03m0835sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-491076",
        "partId": "part-491076",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-491076",
        "partId": "part-491076",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-491076",
        "partId": "part-491076",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "19",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-96376",
        "partId": "part-96376",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "20",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-96376",
        "partId": "part-96376",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "20",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-96376",
        "partId": "part-96376",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "20",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-9953-10sp",
        "partId": "part-9953-10sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "21",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-9953-10sp",
        "partId": "part-9953-10sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "21",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-9953-10sp",
        "partId": "part-9953-10sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "21",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-pc15xj",
        "partId": "part-pc15xj",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "22",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-pc15xj",
        "partId": "part-pc15xj",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "22",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-pc15xj",
        "partId": "part-pc15xj",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "22",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-tt45",
        "partId": "part-tt45",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "23",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-tt45",
        "partId": "part-tt45",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "23",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-tt45",
        "partId": "part-tt45",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "23",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-tt70",
        "partId": "part-tt70",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "23",
        "compatibilityNotes": "XJ70"
    },
    {
        "id": "compat-xj-xj50-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "diagramId": "diagram-xj",
        "diagramReference": "24",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj70-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "diagramId": "diagram-xj",
        "diagramReference": "24",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj90-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "diagramId": "diagram-xj",
        "diagramReference": "24",
        "compatibilityNotes": "XJ50, XJ70 and XJ90"
    },
    {
        "id": "compat-xj-xj50-96154",
        "partId": "part-96154",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-96154",
        "partId": "part-96154",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-96154",
        "partId": "part-96154",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj50-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj50-32323",
        "partId": "part-32323",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-32323",
        "partId": "part-32323",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-32323",
        "partId": "part-32323",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj50-43061",
        "partId": "part-43061",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-43061",
        "partId": "part-43061",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-43061",
        "partId": "part-43061",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj50-401487",
        "partId": "part-401487",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-401487",
        "partId": "part-401487",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-401487",
        "partId": "part-401487",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj50-32693",
        "partId": "part-32693",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-32693",
        "partId": "part-32693",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-32693",
        "partId": "part-32693",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj50-32694",
        "partId": "part-32694",
        "familyId": "family-xj",
        "modelId": "model-xj50",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj70-32694",
        "partId": "part-32694",
        "familyId": "family-xj",
        "modelId": "model-xj70",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    },
    {
        "id": "compat-xj-xj90-32694",
        "partId": "part-32694",
        "familyId": "family-xj",
        "modelId": "model-xj90",
        "compatibilityNotes": "XJ50, XJ70 and XJ90 — requires verification"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/xp-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xpSeedCompatibilities",
    ()=>xpSeedCompatibilities,
    "xpSeedDiagram",
    ()=>xpSeedDiagram,
    "xpSeedFamily",
    ()=>xpSeedFamily,
    "xpSeedHotspots",
    ()=>xpSeedHotspots,
    "xpSeedModels",
    ()=>xpSeedModels,
    "xpSeedParts",
    ()=>xpSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/xp-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const xpSeedFamily = {
    id: "family-xp",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "XP Series",
    slug: "xp-series",
    description: "Compact pressure pumps with pressure switch control for small domestic systems.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_182&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_182&MP1=CE_182&MP=CE_182.cex#CE_182",
    identificationNotes: "Confirm model size (XP25/XP35/XP45) and tank option on the nameplate before ordering parts."
};
const xpSeedModels = [
    {
        id: "model-xp25",
        familyId: xpSeedFamily.id,
        name: "XP25",
        slug: "xp25",
        modelCode: "XP25P8",
        aliases: [
            "XP 25",
            "XP25P8",
            "XP25P2"
        ],
        description: "25 lpm compact pressure pump, 50 Hz.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP25_CURVE_IMAGE"],
        curveLabel: "XP25P8"
    },
    {
        id: "model-xp35",
        familyId: xpSeedFamily.id,
        name: "XP35",
        slug: "xp35",
        modelCode: "XP35P8",
        aliases: [
            "XP 35",
            "XP35P8"
        ],
        description: "35 lpm compact pressure pump, 50 Hz.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP35_CURVE_IMAGE"],
        curveLabel: "XP35P8"
    },
    {
        id: "model-xp45",
        familyId: xpSeedFamily.id,
        name: "XP45",
        slug: "xp45",
        modelCode: "XP45P8",
        aliases: [
            "XP 45",
            "XP45P8"
        ],
        description: "45 lpm compact pressure pump, 50 Hz.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm the exact pump model and tank option before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP45_CURVE_IMAGE"],
        curveLabel: "XP45P8"
    }
];
const xpSeedDiagram = {
    id: "diagram-xp",
    familyId: xpSeedFamily.id,
    name: "XP Series Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$xp$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XP_SERIES_DIAGRAM_SOURCE_URL"]
};
const xpSeedHotspots = [
    {
        "id": "xp-ref-1",
        "diagramId": "diagram-xp",
        "reference": "1",
        "x": 0.3443875,
        "y": 0.8522234273318872,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-706",
            "part-777",
            "part-740"
        ]
    },
    {
        "id": "xp-ref-2",
        "diagramId": "diagram-xp",
        "reference": "2",
        "x": 0.4242875,
        "y": 0.8611930585683298,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11670-20sp"
        ]
    },
    {
        "id": "xp-ref-3",
        "diagramId": "diagram-xp",
        "reference": "3",
        "x": 0.4578125,
        "y": 0.8601409978308027,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-45446",
            "part-49108"
        ]
    },
    {
        "id": "xp-ref-4",
        "diagramId": "diagram-xp",
        "reference": "4",
        "x": 0.4779625,
        "y": 0.8606616052060738,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-48802sp"
        ]
    },
    {
        "id": "xp-ref-5",
        "diagramId": "diagram-xp",
        "reference": "5",
        "x": 0.5193875,
        "y": 0.8611930585683298,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11354bsp"
        ]
    },
    {
        "id": "xp-ref-6",
        "diagramId": "diagram-xp",
        "reference": "6",
        "x": 0.6163125,
        "y": 0.8622451193058568,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11253-1sp",
            "part-11253-3",
            "part-11253-2sp"
        ]
    },
    {
        "id": "xp-ref-7",
        "diagramId": "diagram-xp",
        "reference": "7",
        "x": 0.6382874999999999,
        "y": 0.8617136659436009,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11254-1",
            "part-11254-3",
            "part-11254-2"
        ]
    },
    {
        "id": "xp-ref-8",
        "diagramId": "diagram-xp",
        "reference": "8",
        "x": 0.6633000000000001,
        "y": 0.8617136659436009,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-45579"
        ]
    },
    {
        "id": "xp-ref-9",
        "diagramId": "diagram-xp",
        "reference": "9",
        "x": 0.6956125,
        "y": 0.8617136659436009,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-30805"
        ]
    },
    {
        "id": "xp-ref-10",
        "diagramId": "diagram-xp",
        "reference": "10",
        "x": 0.56265,
        "y": 0.7537201735357918,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11255-1r",
            "part-11255-2"
        ]
    },
    {
        "id": "xp-ref-11",
        "diagramId": "diagram-xp",
        "reference": "11",
        "x": 0.6772875,
        "y": 0.759587852494577,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11256"
        ]
    },
    {
        "id": "xp-ref-12",
        "diagramId": "diagram-xp",
        "reference": "12",
        "x": 0.7041250000000001,
        "y": 0.758470715835141,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31346"
        ]
    },
    {
        "id": "xp-ref-13",
        "diagramId": "diagram-xp",
        "reference": "13",
        "x": 0.5291250000000001,
        "y": 0.8278741865509762,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11252-16",
            "part-11252-17"
        ]
    },
    {
        "id": "xp-ref-14",
        "diagramId": "diagram-xp",
        "reference": "14",
        "x": 0.5279,
        "y": 0.7045010845986985,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-10209-204"
        ]
    },
    {
        "id": "xp-ref-15",
        "diagramId": "diagram-xp",
        "reference": "15",
        "x": 0.629775,
        "y": 0.7018546637744035,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31491d"
        ]
    },
    {
        "id": "xp-ref-15",
        "diagramId": "diagram-xp",
        "reference": "15",
        "x": 0.6273375,
        "y": 0.6229501084598699,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31491d"
        ]
    },
    {
        "id": "xp-ref-16",
        "diagramId": "diagram-xp",
        "reference": "16",
        "x": 0.629775,
        "y": 0.6568655097613882,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31300sp",
            "part-32029sp"
        ]
    },
    {
        "id": "xp-ref-17",
        "diagramId": "diagram-xp",
        "reference": "17",
        "x": 0.7181875000000001,
        "y": 0.5499132321041215,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-45527",
            "part-14828"
        ]
    },
    {
        "id": "xp-ref-18",
        "diagramId": "diagram-xp",
        "reference": "18",
        "x": 0.696825,
        "y": 0.5562472885032538,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-43765"
        ]
    },
    {
        "id": "xp-ref-19",
        "diagramId": "diagram-xp",
        "reference": "19",
        "x": 0.6035499999999999,
        "y": 0.6071149674620392,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31330sp",
            "part-31982sp"
        ]
    },
    {
        "id": "xp-ref-20",
        "diagramId": "diagram-xp",
        "reference": "20",
        "x": 0.32363749999999997,
        "y": 0.5567787418655098,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-45523"
        ]
    },
    {
        "id": "xp-ref-21",
        "diagramId": "diagram-xp",
        "reference": "21",
        "x": 0.1809375,
        "y": 0.5594793926247289,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11591-1"
        ]
    },
    {
        "id": "xp-ref-22",
        "diagramId": "diagram-xp",
        "reference": "22",
        "x": 0.1809375,
        "y": 0.5891106290672452,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31372sp"
        ]
    },
    {
        "id": "xp-ref-23",
        "diagramId": "diagram-xp",
        "reference": "23",
        "x": 0.19075,
        "y": 0.6399023861171367,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-11392-10"
        ]
    },
    {
        "id": "xp-ref-24",
        "diagramId": "diagram-xp",
        "reference": "24",
        "x": 0.19682499999999997,
        "y": 0.7008026030368765,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31269"
        ]
    },
    {
        "id": "xp-ref-24",
        "diagramId": "diagram-xp",
        "reference": "24",
        "x": 0.24623749999999997,
        "y": 0.4747722342733189,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31269"
        ]
    },
    {
        "id": "xp-ref-25",
        "diagramId": "diagram-xp",
        "reference": "25",
        "x": 0.3596625,
        "y": 0.7002711496746205,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31492"
        ]
    },
    {
        "id": "xp-ref-25",
        "diagramId": "diagram-xp",
        "reference": "25",
        "x": 0.4096125,
        "y": 0.47582429501084594,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-31492"
        ]
    },
    {
        "id": "xp-ref-26",
        "diagramId": "diagram-xp",
        "reference": "26",
        "x": 0.358375,
        "y": 0.6658351409978309,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-43061",
            "part-401487"
        ]
    },
    {
        "id": "xp-ref-26",
        "diagramId": "diagram-xp",
        "reference": "26",
        "x": 0.4096125,
        "y": 0.43980477223427333,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-43061",
            "part-401487"
        ]
    },
    {
        "id": "xp-ref-27",
        "diagramId": "diagram-xp",
        "reference": "27",
        "x": 0.5047125,
        "y": 0.40806941431670285,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-pc15xj"
        ]
    },
    {
        "id": "xp-ref-28",
        "diagramId": "diagram-xp",
        "reference": "28",
        "x": 0.5066125,
        "y": 0.4652060737527115,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-44992"
        ]
    },
    {
        "id": "xp-ref-28",
        "diagramId": "diagram-xp",
        "reference": "28",
        "x": 0.41942500000000005,
        "y": 0.6955206073752712,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-44992"
        ]
    },
    {
        "id": "xp-ref-29",
        "diagramId": "diagram-xp",
        "reference": "29",
        "x": 0.410225,
        "y": 0.39850325379609547,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-tt45"
        ]
    },
    {
        "id": "xp-ref-29",
        "diagramId": "diagram-xp",
        "reference": "29",
        "x": 0.5474375,
        "y": 0.606594360086768,
        "width": 0.017325,
        "height": 0.015032537960954447,
        "partIds": [
            "part-tt45"
        ]
    }
];
const xpSeedParts = [
    {
        "id": "part-706",
        "brandId": "brand-davey",
        "partNumber": "706",
        "description": "Motor - 0.35kW 220/1/50",
        "aliases": [
            "706",
            "706"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-777",
        "brandId": "brand-davey",
        "partNumber": "777",
        "description": "Motor - 0.58kW 240/1/50",
        "aliases": [
            "777",
            "777"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "verify",
        "illustrated": true
    },
    {
        "id": "part-740",
        "brandId": "brand-davey",
        "partNumber": "740",
        "description": "Motor - 0.58kW 220/1/50",
        "aliases": [
            "740",
            "740"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11670-20sp",
        "brandId": "brand-davey",
        "partNumber": "11670-20SP",
        "description": "Casing Assy - Rear c/w oring",
        "aliases": [
            "11670-20",
            "11670-20sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-45446",
        "brandId": "brand-davey",
        "partNumber": "45446",
        "description": "O-ring",
        "aliases": [
            "45446",
            "45446"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49108",
        "brandId": "brand-davey",
        "partNumber": "49108",
        "description": "O-ring - Encapsulated rear casing Post S/No 03084",
        "aliases": [
            "49108",
            "49108"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48802sp",
        "brandId": "brand-davey",
        "partNumber": "48802SP",
        "description": "Seal - Mechanical 1/2\"",
        "aliases": [
            "48802",
            "48802sp"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11354bsp",
        "brandId": "brand-davey",
        "partNumber": "11354BSP",
        "description": "Impeller",
        "aliases": [
            "11354B",
            "11354bsp"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11253-1sp",
        "brandId": "brand-davey",
        "partNumber": "11253-1SP",
        "description": "Venturi - Coverplate 72111",
        "aliases": [
            "11253-1",
            "11253-1sp"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11253-3",
        "brandId": "brand-davey",
        "partNumber": "11253-3",
        "description": "Venturi - Coverplate XP450T",
        "aliases": [
            "11253-3",
            "11253-3"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11253-2sp",
        "brandId": "brand-davey",
        "partNumber": "11253-2SP",
        "description": "Venturi - Coverplate All other models not specified",
        "aliases": [
            "11253-2",
            "11253-2sp"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11254-1",
        "brandId": "brand-davey",
        "partNumber": "11254-1",
        "description": "Jet - White 72111",
        "aliases": [
            "11254-1",
            "11254-1"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11254-3",
        "brandId": "brand-davey",
        "partNumber": "11254-3",
        "description": "Jet XP450T",
        "aliases": [
            "11254-3",
            "11254-3"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11254-2",
        "brandId": "brand-davey",
        "partNumber": "11254-2",
        "description": "Jet - Black All other models not specified",
        "aliases": [
            "11254-2",
            "11254-2"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-45579",
        "brandId": "brand-davey",
        "partNumber": "45579",
        "description": "O-ring",
        "aliases": [
            "45579",
            "45579"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-30805",
        "brandId": "brand-davey",
        "partNumber": "30805",
        "description": "Checkvalve Assy",
        "aliases": [
            "30805",
            "30805"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11255-1r",
        "brandId": "brand-davey",
        "partNumber": "11255-1R",
        "description": "Cap - Accumulator 72151PC 72161 72171",
        "aliases": [
            "11255-1R",
            "11255-1r"
        ],
        "partCategory": "Tank",
        "quantity": 1,
        "availability": "verify",
        "illustrated": true
    },
    {
        "id": "part-11255-2",
        "brandId": "brand-davey",
        "partNumber": "11255-2",
        "description": "Accumulator cap XP450T",
        "aliases": [
            "11255-2",
            "11255-2"
        ],
        "partCategory": "Tank",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11256",
        "brandId": "brand-davey",
        "partNumber": "11256",
        "description": "Diaphragm 72111 72181",
        "aliases": [
            "11256",
            "11256"
        ],
        "partCategory": "Tank",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31346",
        "brandId": "brand-davey",
        "partNumber": "31346",
        "description": "Cap - Accumulator assy XP350T 72111 72181",
        "aliases": [
            "31346",
            "31346"
        ],
        "partCategory": "Tank",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11252-16",
        "brandId": "brand-davey",
        "partNumber": "11252-16",
        "description": "Casing - Front",
        "aliases": [
            "11252-16",
            "11252-16"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11252-17",
        "brandId": "brand-davey",
        "partNumber": "11252-17",
        "description": "Casing - Front",
        "aliases": [
            "11252-17",
            "11252-17"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10209-204",
        "brandId": "brand-davey",
        "partNumber": "10209-204",
        "description": "Screw - Front case 44mm (pk4)",
        "aliases": [
            "10209-204",
            "10209-204"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31491d",
        "brandId": "brand-davey",
        "partNumber": "31491D",
        "description": "Kit - Connection P/switch",
        "aliases": [
            "31491D",
            "31491d"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31300sp",
        "brandId": "brand-davey",
        "partNumber": "31300SP",
        "description": "Switch - Pressure 140-280kPa 72111",
        "aliases": [
            "31300",
            "31300sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32029sp",
        "brandId": "brand-davey",
        "partNumber": "32029SP",
        "description": "Pressure Switch Assy - 140-280 LOP 72111/LOP only Vertical",
        "aliases": [
            "32029",
            "32029sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-45527",
        "brandId": "brand-davey",
        "partNumber": "45527",
        "description": "Tee piece - 1\"",
        "aliases": [
            "45527",
            "45527"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-14828",
        "brandId": "brand-davey",
        "partNumber": "14828",
        "description": "Tee Piece - Brass",
        "aliases": [
            "14828",
            "14828"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43765",
        "brandId": "brand-davey",
        "partNumber": "43765",
        "description": "Elbow - (brass)",
        "aliases": [
            "43765",
            "43765"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31330sp",
        "brandId": "brand-davey",
        "partNumber": "31330SP",
        "description": "Switch - Pressure 140-280kPa 72101 72171 72161",
        "aliases": [
            "31330",
            "31330sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31982sp",
        "brandId": "brand-davey",
        "partNumber": "31982SP",
        "description": "P/switch Assy LOP 140-280kPa 72101/LOP only Horizontal",
        "aliases": [
            "31982",
            "31982sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-45523",
        "brandId": "brand-davey",
        "partNumber": "45523",
        "description": "Checkvalve",
        "aliases": [
            "45523",
            "45523"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11591-1",
        "brandId": "brand-davey",
        "partNumber": "11591-1",
        "description": "Plug & O-ring - Priming",
        "aliases": [
            "11591-1",
            "11591-1"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31372sp",
        "brandId": "brand-davey",
        "partNumber": "31372SP",
        "description": "Hydrascan - Adjustable",
        "aliases": [
            "31372",
            "31372sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11392-10",
        "brandId": "brand-davey",
        "partNumber": "11392-10",
        "description": "Flow kohn",
        "aliases": [
            "11392-10",
            "11392-10"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31269",
        "brandId": "brand-davey",
        "partNumber": "31269",
        "description": "Cap & O-ring - Blanking",
        "aliases": [
            "31269",
            "31269"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31492",
        "brandId": "brand-davey",
        "partNumber": "31492",
        "description": "Kit - Adaptor XP350T XP450T 72181",
        "aliases": [
            "31492",
            "31492"
        ],
        "partCategory": "Adaptor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43061",
        "brandId": "brand-davey",
        "partNumber": "43061",
        "description": "O-ring - Torrium Pre S/N 08114",
        "aliases": [
            "43061",
            "43061"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-401487",
        "brandId": "brand-davey",
        "partNumber": "401487",
        "description": "O-ring - Torrium Post S/N 08114",
        "aliases": [
            "401487",
            "401487"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-pc15xj",
        "brandId": "brand-davey",
        "partNumber": "PC15XJ",
        "description": "Press Control",
        "aliases": [
            "PC15XJ",
            "pc15xj"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-44992",
        "brandId": "brand-davey",
        "partNumber": "44992",
        "description": "Socket - 1\"",
        "aliases": [
            "44992",
            "44992"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-tt45",
        "brandId": "brand-davey",
        "partNumber": "TT45",
        "description": "Torrium 2 - 450kPa Max",
        "aliases": [
            "TT45",
            "tt45"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32323",
        "brandId": "brand-davey",
        "partNumber": "32323",
        "description": "Checkvalve Assy - Torrium",
        "aliases": [
            "32323",
            "32323"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32693",
        "brandId": "brand-davey",
        "partNumber": "32693",
        "description": "Checkvalve Assy - Torrium 2",
        "aliases": [
            "32693",
            "32693"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32694",
        "brandId": "brand-davey",
        "partNumber": "32694",
        "description": "Priming Cap Assy - Torrium 2",
        "aliases": [
            "32694",
            "32694"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32518",
        "brandId": "brand-davey",
        "partNumber": "32518",
        "description": "Plate - Orifice 72101/LOP only Not Illustrated",
        "aliases": [
            "32518",
            "32518"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32519",
        "brandId": "brand-davey",
        "partNumber": "32519",
        "description": "Plate - Orifice 72111/LOP only Not Illustrated",
        "aliases": [
            "32519",
            "32519"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32574",
        "brandId": "brand-davey",
        "partNumber": "32574",
        "description": "Flange Assy - Presscontrol",
        "aliases": [
            "32574",
            "32574"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-32754",
        "brandId": "brand-davey",
        "partNumber": "32754",
        "description": "Seal Kit",
        "aliases": [
            "32754",
            "32754"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-48871",
        "brandId": "brand-davey",
        "partNumber": "48871",
        "description": "Reducing Bush - XP25P2-1 Only - Not Illustrated",
        "aliases": [
            "48871",
            "48871"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-24002c",
        "brandId": "brand-davey",
        "partNumber": "24002C",
        "description": "Tank - 2lt Silver",
        "aliases": [
            "24002C",
            "24002c"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-24008p",
        "brandId": "brand-davey",
        "partNumber": "24008P",
        "description": "Pressure Tank - 8L",
        "aliases": [
            "24008P",
            "24008p"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    }
];
const xpSeedCompatibilities = [
    {
        "id": "compat-xp-xp25-706",
        "partId": "part-706",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25"
    },
    {
        "id": "compat-xp-xp25-777",
        "partId": "part-777",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-777",
        "partId": "part-777",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-777",
        "partId": "part-777",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-740",
        "partId": "part-740",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-740",
        "partId": "part-740",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-740",
        "partId": "part-740",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "1",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11670-20sp",
        "partId": "part-11670-20sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "2",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11670-20sp",
        "partId": "part-11670-20sp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "2",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11670-20sp",
        "partId": "part-11670-20sp",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "2",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-45446",
        "partId": "part-45446",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "3",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-45446",
        "partId": "part-45446",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "3",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-45446",
        "partId": "part-45446",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "3",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-49108",
        "partId": "part-49108",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "3",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-49108",
        "partId": "part-49108",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "3",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-49108",
        "partId": "part-49108",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "3",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-48802sp",
        "partId": "part-48802sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "4",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-48802sp",
        "partId": "part-48802sp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "4",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-48802sp",
        "partId": "part-48802sp",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "4",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11354bsp",
        "partId": "part-11354bsp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "5",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11354bsp",
        "partId": "part-11354bsp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "5",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11354bsp",
        "partId": "part-11354bsp",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "5",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11253-1sp",
        "partId": "part-11253-1sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "6",
        "compatibilityNotes": "XP25"
    },
    {
        "id": "compat-xp-xp45-11253-3",
        "partId": "part-11253-3",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "6",
        "compatibilityNotes": "XP45"
    },
    {
        "id": "compat-xp-xp25-11253-2sp",
        "partId": "part-11253-2sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "6",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11253-2sp",
        "partId": "part-11253-2sp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "6",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11253-2sp",
        "partId": "part-11253-2sp",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "6",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11254-1",
        "partId": "part-11254-1",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "7",
        "compatibilityNotes": "XP25"
    },
    {
        "id": "compat-xp-xp45-11254-3",
        "partId": "part-11254-3",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "7",
        "compatibilityNotes": "XP45"
    },
    {
        "id": "compat-xp-xp25-11254-2",
        "partId": "part-11254-2",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "7",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11254-2",
        "partId": "part-11254-2",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "7",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11254-2",
        "partId": "part-11254-2",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "7",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-45579",
        "partId": "part-45579",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "8",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-45579",
        "partId": "part-45579",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "8",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-45579",
        "partId": "part-45579",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "8",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-30805",
        "partId": "part-30805",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "9",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-30805",
        "partId": "part-30805",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "9",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-30805",
        "partId": "part-30805",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "9",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11255-1r",
        "partId": "part-11255-1r",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "10",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-11255-1r",
        "partId": "part-11255-1r",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "10",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-11255-1r",
        "partId": "part-11255-1r",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "10",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-11255-2",
        "partId": "part-11255-2",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "10",
        "compatibilityNotes": "XP45"
    },
    {
        "id": "compat-xp-xp25-11256",
        "partId": "part-11256",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "11",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11256",
        "partId": "part-11256",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "11",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11256",
        "partId": "part-11256",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "11",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-31346",
        "partId": "part-31346",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "12",
        "compatibilityNotes": "XP35"
    },
    {
        "id": "compat-xp-xp25-11252-16",
        "partId": "part-11252-16",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "13",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11252-16",
        "partId": "part-11252-16",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "13",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11252-16",
        "partId": "part-11252-16",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "13",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11252-17",
        "partId": "part-11252-17",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "13",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11252-17",
        "partId": "part-11252-17",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "13",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11252-17",
        "partId": "part-11252-17",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "13",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-10209-204",
        "partId": "part-10209-204",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "14",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-10209-204",
        "partId": "part-10209-204",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "14",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-10209-204",
        "partId": "part-10209-204",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "14",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-31491d",
        "partId": "part-31491d",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "15",
        "compatibilityNotes": "XP25 and XP35"
    },
    {
        "id": "compat-xp-xp35-31491d",
        "partId": "part-31491d",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "15",
        "compatibilityNotes": "XP25 and XP35"
    },
    {
        "id": "compat-xp-xp25-31300sp",
        "partId": "part-31300sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "16",
        "compatibilityNotes": "XP25"
    },
    {
        "id": "compat-xp-xp25-32029sp",
        "partId": "part-32029sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "16",
        "compatibilityNotes": "XP25"
    },
    {
        "id": "compat-xp-xp25-45527",
        "partId": "part-45527",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "17",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-45527",
        "partId": "part-45527",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "17",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-45527",
        "partId": "part-45527",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "17",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-14828",
        "partId": "part-14828",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "17",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-14828",
        "partId": "part-14828",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "17",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-14828",
        "partId": "part-14828",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "17",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-43765",
        "partId": "part-43765",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "18",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-43765",
        "partId": "part-43765",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "18",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-43765",
        "partId": "part-43765",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "18",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-31330sp",
        "partId": "part-31330sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "19",
        "compatibilityNotes": "XP25 and XP35"
    },
    {
        "id": "compat-xp-xp35-31330sp",
        "partId": "part-31330sp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "19",
        "compatibilityNotes": "XP25 and XP35"
    },
    {
        "id": "compat-xp-xp35-31982sp",
        "partId": "part-31982sp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "19",
        "compatibilityNotes": "XP35"
    },
    {
        "id": "compat-xp-xp25-45523",
        "partId": "part-45523",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "20",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-45523",
        "partId": "part-45523",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "20",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-45523",
        "partId": "part-45523",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "20",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "21",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "21",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "21",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-31372sp",
        "partId": "part-31372sp",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "22",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-31372sp",
        "partId": "part-31372sp",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "22",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-31372sp",
        "partId": "part-31372sp",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "22",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-11392-10",
        "partId": "part-11392-10",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "23",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-11392-10",
        "partId": "part-11392-10",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "23",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-11392-10",
        "partId": "part-11392-10",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "23",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-31269",
        "partId": "part-31269",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "24",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-31269",
        "partId": "part-31269",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "24",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-31269",
        "partId": "part-31269",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "24",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-31492",
        "partId": "part-31492",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "25",
        "compatibilityNotes": "XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-31492",
        "partId": "part-31492",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "25",
        "compatibilityNotes": "XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-43061",
        "partId": "part-43061",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "26",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-43061",
        "partId": "part-43061",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "26",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-43061",
        "partId": "part-43061",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "26",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-401487",
        "partId": "part-401487",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "26",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-401487",
        "partId": "part-401487",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "26",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-401487",
        "partId": "part-401487",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "26",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-pc15xj",
        "partId": "part-pc15xj",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "27",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-pc15xj",
        "partId": "part-pc15xj",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "27",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-pc15xj",
        "partId": "part-pc15xj",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "27",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-44992",
        "partId": "part-44992",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "28",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-44992",
        "partId": "part-44992",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "28",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-44992",
        "partId": "part-44992",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "28",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-tt45",
        "partId": "part-tt45",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "diagramId": "diagram-xp",
        "diagramReference": "29",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp35-tt45",
        "partId": "part-tt45",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "diagramId": "diagram-xp",
        "diagramReference": "29",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp45-tt45",
        "partId": "part-tt45",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "diagramId": "diagram-xp",
        "diagramReference": "29",
        "compatibilityNotes": "XP25, XP35 and XP45"
    },
    {
        "id": "compat-xp-xp25-32323",
        "partId": "part-32323",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32323",
        "partId": "part-32323",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32323",
        "partId": "part-32323",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-32693",
        "partId": "part-32693",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32693",
        "partId": "part-32693",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32693",
        "partId": "part-32693",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-32694",
        "partId": "part-32694",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32694",
        "partId": "part-32694",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32694",
        "partId": "part-32694",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-32518",
        "partId": "part-32518",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32518",
        "partId": "part-32518",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32518",
        "partId": "part-32518",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-32519",
        "partId": "part-32519",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32519",
        "partId": "part-32519",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32519",
        "partId": "part-32519",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-32574",
        "partId": "part-32574",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32574",
        "partId": "part-32574",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32574",
        "partId": "part-32574",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-32754",
        "partId": "part-32754",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-32754",
        "partId": "part-32754",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-32754",
        "partId": "part-32754",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-48871",
        "partId": "part-48871",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-48871",
        "partId": "part-48871",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-48871",
        "partId": "part-48871",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-24002c",
        "partId": "part-24002c",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-24002c",
        "partId": "part-24002c",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-24002c",
        "partId": "part-24002c",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp25-24008p",
        "partId": "part-24008p",
        "familyId": "family-xp",
        "modelId": "model-xp25",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp35-24008p",
        "partId": "part-24008p",
        "familyId": "family-xp",
        "modelId": "model-xp35",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    },
    {
        "id": "compat-xp-xp45-24008p",
        "partId": "part-24008p",
        "familyId": "family-xp",
        "modelId": "model-xp45",
        "compatibilityNotes": "XP25, XP35 and XP45 — requires verification"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/hm-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hmSeedCompatibilities",
    ()=>hmSeedCompatibilities,
    "hmSeedDiagram",
    ()=>hmSeedDiagram,
    "hmSeedFamily",
    ()=>hmSeedFamily,
    "hmSeedHotspots",
    ()=>hmSeedHotspots,
    "hmSeedModels",
    ()=>hmSeedModels,
    "hmSeedParts",
    ()=>hmSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hm-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const hmSeedFamily = {
    id: "family-hm",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "HM Series",
    slug: "hm-series",
    description: "Horizontal multistage pressure pumps with Torrium2 controller options.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_248&PRF=4&PRNDS=CE_247&PRC=|R|CE_1|CE_111|CE_247|CE_248&MP1=CE_248&MP=CE_248.cex#CE_248",
    identificationNotes: "Confirm pump model, Torrium version and nameplate suffix before ordering parts."
};
const hmSeedModels = [
    {
        id: "model-hm60",
        familyId: hmSeedFamily.id,
        name: "HM60",
        slug: "hm60",
        modelCode: "HM60-06T",
        aliases: [
            "HM 60",
            "HM60-06T",
            "HM60-08T",
            "HM60-10T"
        ],
        description: "Compact HM pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_CURVE_IMAGE"],
        curveLabel: "HM60-10T"
    },
    {
        id: "model-hm90",
        familyId: hmSeedFamily.id,
        name: "HM90",
        slug: "hm90",
        modelCode: "HM90-08T",
        aliases: [
            "HM 90",
            "HM90-08T",
            "HM90-11T",
            "HM90-13T"
        ],
        description: "Mid-size HM pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_CURVE_IMAGE"],
        curveLabel: "HM90-13T"
    },
    {
        id: "model-hm160",
        familyId: hmSeedFamily.id,
        name: "HM160",
        slug: "hm160",
        modelCode: "HM160-15T",
        aliases: [
            "HM 160",
            "HM160-15T",
            "HM160-19T"
        ],
        description: "Large HM pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_CURVE_IMAGE"],
        curveLabel: "HM160-19T"
    },
    {
        id: "model-hm270",
        familyId: hmSeedFamily.id,
        name: "HM270",
        slug: "hm270",
        modelCode: "HM270-19",
        aliases: [
            "HM 270",
            "HM270-19",
            "HM270-25"
        ],
        description: "High-flow HM pressure pump, 50 Hz.",
        version: "–0 / –1 / –2",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Confirm exact model suffix on nameplate before ordering model-specific parts.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_CURVE_IMAGE"],
        curveLabel: "HM270-25"
    }
];
const hmSeedDiagram = {
    id: "diagram-hm",
    familyId: hmSeedFamily.id,
    name: "HM Series Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hm$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HM_SERIES_DIAGRAM_SOURCE_URL"]
};
const hmSeedHotspots = [
    {
        "id": "hm-ref-1",
        "diagramId": "diagram-hm",
        "reference": "1",
        "x": 0.1733150684931507,
        "y": 0.77722,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13656-5sp",
            "part-13656-6sp",
            "part-13656-7sp",
            "part-13656-8sp"
        ]
    },
    {
        "id": "hm-ref-2",
        "diagramId": "diagram-hm",
        "reference": "2",
        "x": 0.21412328767123287,
        "y": 0.7888200000000001,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-400577sp"
        ]
    },
    {
        "id": "hm-ref-3",
        "diagramId": "diagram-hm",
        "reference": "3",
        "x": 0.3205890410958904,
        "y": 0.77062,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-448533"
        ]
    },
    {
        "id": "hm-ref-4",
        "diagramId": "diagram-hm",
        "reference": "4",
        "x": 0.37156164383561646,
        "y": 0.77062,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13661-1",
            "part-13674-1",
            "part-13670-1"
        ]
    },
    {
        "id": "hm-ref-5",
        "diagramId": "diagram-hm",
        "reference": "5",
        "x": 0.21753424657534248,
        "y": 0.93257,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-s34m06168"
        ]
    },
    {
        "id": "hm-ref-6",
        "diagramId": "diagram-hm",
        "reference": "6",
        "x": 0.33073972602739726,
        "y": 0.90695,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-33479"
        ]
    },
    {
        "id": "hm-ref-7",
        "diagramId": "diagram-hm",
        "reference": "7",
        "x": 0.4337945205479452,
        "y": 0.91686,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13678sp",
            "part-13676sp",
            "part-13672sp",
            "part-13668sp"
        ]
    },
    {
        "id": "hm-ref-7",
        "diagramId": "diagram-hm",
        "reference": "7",
        "x": 0.5561369863013699,
        "y": 0.91605,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13678sp",
            "part-13676sp",
            "part-13672sp",
            "part-13668sp"
        ]
    },
    {
        "id": "hm-ref-7",
        "diagramId": "diagram-hm",
        "reference": "7",
        "x": 0.6761780821917809,
        "y": 0.91605,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13678sp",
            "part-13676sp",
            "part-13672sp",
            "part-13668sp"
        ]
    },
    {
        "id": "hm-ref-8",
        "diagramId": "diagram-hm",
        "reference": "8",
        "x": 0.43720547945205485,
        "y": 0.79212,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-136653",
            "part-136803",
            "part-136813"
        ]
    },
    {
        "id": "hm-ref-8",
        "diagramId": "diagram-hm",
        "reference": "8",
        "x": 0.5595479452054795,
        "y": 0.79293,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-136653",
            "part-136803",
            "part-136813"
        ]
    },
    {
        "id": "hm-ref-8",
        "diagramId": "diagram-hm",
        "reference": "8",
        "x": 0.6761780821917809,
        "y": 0.79293,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-136653",
            "part-136803",
            "part-136813"
        ]
    },
    {
        "id": "hm-ref-9",
        "diagramId": "diagram-hm",
        "reference": "9",
        "x": 0.504054794520548,
        "y": 0.7714200000000001,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-32912",
            "part-32913",
            "part-32914"
        ]
    },
    {
        "id": "hm-ref-10",
        "diagramId": "diagram-hm",
        "reference": "10",
        "x": 0.6217808219178083,
        "y": 0.7723000000000001,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13662-2",
            "part-13673-2",
            "part-13669-2"
        ]
    },
    {
        "id": "hm-ref-11",
        "diagramId": "diagram-hm",
        "reference": "11",
        "x": 0.7384109589041097,
        "y": 0.7714200000000001,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13663",
            "part-13675",
            "part-13671"
        ]
    },
    {
        "id": "hm-ref-12",
        "diagramId": "diagram-hm",
        "reference": "12",
        "x": 0.7248356164383561,
        "y": 0.90452,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13696-1",
            "part-13696",
            "part-13696-2"
        ]
    },
    {
        "id": "hm-ref-13",
        "diagramId": "diagram-hm",
        "reference": "13",
        "x": 0.8336027397260274,
        "y": 0.93096,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13666",
            "part-13693"
        ]
    },
    {
        "id": "hm-ref-14",
        "diagramId": "diagram-hm",
        "reference": "14",
        "x": 0.8415479452054795,
        "y": 0.81357,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13667sp"
        ]
    },
    {
        "id": "hm-ref-15",
        "diagramId": "diagram-hm",
        "reference": "15",
        "x": 0.8618630136986303,
        "y": 0.90203,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-400558sp"
        ]
    },
    {
        "id": "hm-ref-16",
        "diagramId": "diagram-hm",
        "reference": "16",
        "x": 0.8947260273972603,
        "y": 0.77641,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13660sp"
        ]
    },
    {
        "id": "hm-ref-17",
        "diagramId": "diagram-hm",
        "reference": "17",
        "x": 0.06915068493150685,
        "y": 0.56813,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-32283sp",
            "part-32285sp",
            "part-32286sp",
            "part-32287sp",
            "part-32314sp",
            "part-32315",
            "part-32288sp",
            "part-11733-3",
            "part-11971",
            "part-11971-1",
            "part-48035",
            "part-404132sp",
            "part-49034m",
            "part-49034",
            "part-9544-1",
            "part-8573-5"
        ]
    },
    {
        "id": "hm-ref-17a",
        "diagramId": "diagram-hm",
        "reference": "17a",
        "x": 0.18578082191780823,
        "y": 0.426,
        "width": 0.04745205479452055,
        "height": 0.023059999999999997,
        "partIds": [
            "part-11733-3",
            "part-11971",
            "part-11971-1"
        ]
    },
    {
        "id": "hm-ref-17b",
        "diagramId": "diagram-hm",
        "reference": "17b",
        "x": 0.2685068493150685,
        "y": 0.42519000000000007,
        "width": 0.047287671232876714,
        "height": 0.023059999999999997,
        "partIds": [
            "part-48035",
            "part-404132sp"
        ]
    },
    {
        "id": "hm-ref-17c",
        "diagramId": "diagram-hm",
        "reference": "17c",
        "x": 0.3239178082191781,
        "y": 0.42519000000000007,
        "width": 0.04745205479452055,
        "height": 0.023059999999999997,
        "partIds": [
            "part-49034m"
        ]
    },
    {
        "id": "hm-ref-17d",
        "diagramId": "diagram-hm",
        "reference": "17d",
        "x": 0.37154794520547946,
        "y": 0.426,
        "width": 0.047287671232876714,
        "height": 0.023059999999999997,
        "partIds": [
            "part-49034"
        ]
    },
    {
        "id": "hm-ref-17e",
        "diagramId": "diagram-hm",
        "reference": "17e",
        "x": 0.26213698630136983,
        "y": 0.7017700000000001,
        "width": 0.052630136986301375,
        "height": 0.02684,
        "partIds": [
            "part-9544-1",
            "part-8573-5"
        ]
    },
    {
        "id": "hm-ref-18",
        "diagramId": "diagram-hm",
        "reference": "18",
        "x": 0.6886438356164384,
        "y": 0.51689,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-32391",
            "part-32392",
            "part-32393",
            "part-49034f",
            "part-13729",
            "part-47920",
            "part-11591-1",
            "part-48466",
            "part-400622",
            "part-48492"
        ]
    },
    {
        "id": "hm-ref-18a",
        "diagramId": "diagram-hm",
        "reference": "18a",
        "x": 0.5063698630136987,
        "y": 0.426,
        "width": 0.047287671232876714,
        "height": 0.023059999999999997,
        "partIds": [
            "part-49034f"
        ]
    },
    {
        "id": "hm-ref-18b",
        "diagramId": "diagram-hm",
        "reference": "18b",
        "x": 0.5595479452054795,
        "y": 0.42519000000000007,
        "width": 0.047287671232876714,
        "height": 0.023059999999999997,
        "partIds": [
            "part-13729",
            "part-47920"
        ]
    },
    {
        "id": "hm-ref-18c",
        "diagramId": "diagram-hm",
        "reference": "18c",
        "x": 0.6173561643835617,
        "y": 0.42849,
        "width": 0.047287671232876714,
        "height": 0.023059999999999997,
        "partIds": [
            "part-11591-1"
        ]
    },
    {
        "id": "hm-ref-18d",
        "diagramId": "diagram-hm",
        "reference": "18d",
        "x": 0.5335068493150685,
        "y": 0.60036,
        "width": 0.047287671232876714,
        "height": 0.023059999999999997,
        "partIds": [
            "part-48466",
            "part-400622"
        ]
    },
    {
        "id": "hm-ref-18e",
        "diagramId": "diagram-hm",
        "reference": "18e",
        "x": 0.5856027397260274,
        "y": 0.60036,
        "width": 0.04745205479452055,
        "height": 0.023059999999999997,
        "partIds": [
            "part-48492"
        ]
    },
    {
        "id": "hm-ref-19",
        "diagramId": "diagram-hm",
        "reference": "19",
        "x": 0.5368356164383562,
        "y": 0.645,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-47932",
            "part-48953",
            "part-49184"
        ]
    },
    {
        "id": "hm-ref-20",
        "diagramId": "diagram-hm",
        "reference": "20",
        "x": 0.5991643835616439,
        "y": 0.64662,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-47914",
            "part-48952",
            "part-403329"
        ]
    },
    {
        "id": "hm-ref-21",
        "diagramId": "diagram-hm",
        "reference": "21",
        "x": 0.8460684931506849,
        "y": 0.71688,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-32320-1sp"
        ]
    },
    {
        "id": "hm-ref-22",
        "diagramId": "diagram-hm",
        "reference": "22",
        "x": 0.7735890410958904,
        "y": 0.68714,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-tt45",
            "part-tt70"
        ]
    },
    {
        "id": "hm-ref-22",
        "diagramId": "diagram-hm",
        "reference": "22",
        "x": 0.7645342465753425,
        "y": 0.5235,
        "width": 0.03158904109589041,
        "height": 0.023059999999999997,
        "partIds": [
            "part-tt45",
            "part-tt70"
        ]
    }
];
const hmSeedParts = [
    {
        "id": "part-7049",
        "brandId": "brand-davey",
        "partNumber": "7049",
        "description": "Motor - 0.6kW 240V",
        "aliases": [
            "7049",
            "7049"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7050",
        "brandId": "brand-davey",
        "partNumber": "7050",
        "description": "Motor - 0.72kW 240V",
        "aliases": [
            "7050",
            "7050"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7051",
        "brandId": "brand-davey",
        "partNumber": "7051",
        "description": "Service motor - 1kW 240V 1 phase",
        "aliases": [
            "7051",
            "7051"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7052",
        "brandId": "brand-davey",
        "partNumber": "7052",
        "description": "Motor - 0.78kW 240V",
        "aliases": [
            "7052",
            "7052"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-844",
        "brandId": "brand-davey",
        "partNumber": "844",
        "description": "Motor - 1.3kW 240V",
        "aliases": [
            "844",
            "844"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-845",
        "brandId": "brand-davey",
        "partNumber": "845",
        "description": "Motor - 1.8kW 240V",
        "aliases": [
            "845",
            "845"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-851",
        "brandId": "brand-davey",
        "partNumber": "851",
        "description": "Motor - 2.5kW 240V",
        "aliases": [
            "851",
            "851"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7054",
        "brandId": "brand-davey",
        "partNumber": "7054",
        "description": "Motor - 0.6kW 415V",
        "aliases": [
            "7054",
            "7054"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7057",
        "brandId": "brand-davey",
        "partNumber": "7057",
        "description": "Motor - 0.72kW 415V",
        "aliases": [
            "7057",
            "7057"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7055",
        "brandId": "brand-davey",
        "partNumber": "7055",
        "description": "Service motor - 1.1kW 415V 3 phase",
        "aliases": [
            "7055",
            "7055"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-7053",
        "brandId": "brand-davey",
        "partNumber": "7053",
        "description": "Motor - 0.78kW 415V",
        "aliases": [
            "7053",
            "7053"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-852",
        "brandId": "brand-davey",
        "partNumber": "852",
        "description": "Motor - 1.3kW 415V",
        "aliases": [
            "852",
            "852"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-858",
        "brandId": "brand-davey",
        "partNumber": "858",
        "description": "Motor - 1.8kW 415V",
        "aliases": [
            "858",
            "858"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-869",
        "brandId": "brand-davey",
        "partNumber": "869",
        "description": "Motor - 1.9kW 415V",
        "aliases": [
            "869",
            "869"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-864",
        "brandId": "brand-davey",
        "partNumber": "864",
        "description": "Motor - 2.5kW 415V",
        "aliases": [
            "864",
            "864"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": false
    },
    {
        "id": "part-13656-5sp",
        "brandId": "brand-davey",
        "partNumber": "13656-5SP",
        "description": "Casing - Front",
        "aliases": [
            "13656-5",
            "13656-5sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13656-6sp",
        "brandId": "brand-davey",
        "partNumber": "13656-6SP",
        "description": "Casing - Front",
        "aliases": [
            "13656-6",
            "13656-6sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13656-7sp",
        "brandId": "brand-davey",
        "partNumber": "13656-7SP",
        "description": "Casing - Front",
        "aliases": [
            "13656-7",
            "13656-7sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13656-8sp",
        "brandId": "brand-davey",
        "partNumber": "13656-8SP",
        "description": "Casing - Front",
        "aliases": [
            "13656-8",
            "13656-8sp"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-400577sp",
        "brandId": "brand-davey",
        "partNumber": "400577SP",
        "description": "Drain Plug & O-ring",
        "aliases": [
            "400577",
            "400577sp"
        ],
        "partCategory": "Seal",
        "quantity": 3,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-400577sp",
        "brandId": "brand-davey",
        "partNumber": "400577SP",
        "description": "Drain Plug & O-ring",
        "aliases": [
            "400577",
            "400577sp"
        ],
        "partCategory": "Seal",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-448533",
        "brandId": "brand-davey",
        "partNumber": "448533",
        "description": "O-ring - Casing",
        "aliases": [
            "448533",
            "448533"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13661-1",
        "brandId": "brand-davey",
        "partNumber": "13661-1",
        "description": "Stage body - 1st stage",
        "aliases": [
            "13661-1",
            "13661-1"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13674-1",
        "brandId": "brand-davey",
        "partNumber": "13674-1",
        "description": "Stage body - 1st stage",
        "aliases": [
            "13674-1",
            "13674-1"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13670-1",
        "brandId": "brand-davey",
        "partNumber": "13670-1",
        "description": "Stage body - 1st stage",
        "aliases": [
            "13670-1",
            "13670-1"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-s34m06168",
        "brandId": "brand-davey",
        "partNumber": "S34M06168",
        "description": "Screw - Casing (Pack of 8)",
        "aliases": [
            "S34M06168",
            "s34m06168"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33479",
        "brandId": "brand-davey",
        "partNumber": "33479",
        "description": "Impeller Nut Assembly",
        "aliases": [
            "33479",
            "33479"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13678sp",
        "brandId": "brand-davey",
        "partNumber": "13678SP",
        "description": "Impeller",
        "aliases": [
            "13678",
            "13678sp"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13676sp",
        "brandId": "brand-davey",
        "partNumber": "13676SP",
        "description": "Impeller",
        "aliases": [
            "13676",
            "13676sp"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13672sp",
        "brandId": "brand-davey",
        "partNumber": "13672SP",
        "description": "Impeller",
        "aliases": [
            "13672",
            "13672sp"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13668sp",
        "brandId": "brand-davey",
        "partNumber": "13668SP",
        "description": "Impeller",
        "aliases": [
            "13668",
            "13668sp"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-136653",
        "brandId": "brand-davey",
        "partNumber": "136653",
        "description": "Spacer - Impeller",
        "aliases": [
            "136653",
            "136653"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-136803",
        "brandId": "brand-davey",
        "partNumber": "136803",
        "description": "Spacer - Impeller",
        "aliases": [
            "136803",
            "136803"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-136813",
        "brandId": "brand-davey",
        "partNumber": "136813",
        "description": "Spacer - Impeller",
        "aliases": [
            "136813",
            "136813"
        ],
        "partCategory": "Impeller",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32912",
        "brandId": "brand-davey",
        "partNumber": "32912",
        "description": "Stage Body - 2nd stage with valve assy",
        "aliases": [
            "32912",
            "32912"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32913",
        "brandId": "brand-davey",
        "partNumber": "32913",
        "description": "Stage Body - 2nd stage with valve assy",
        "aliases": [
            "32913",
            "32913"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32914",
        "brandId": "brand-davey",
        "partNumber": "32914",
        "description": "Stage Body - 2nd stage with valve assy",
        "aliases": [
            "32914",
            "32914"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13662-2",
        "brandId": "brand-davey",
        "partNumber": "13662-2",
        "description": "Stage body - Inner stages",
        "aliases": [
            "13662-2",
            "13662-2"
        ],
        "partCategory": "Stage Body",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13673-2",
        "brandId": "brand-davey",
        "partNumber": "13673-2",
        "description": "Stage body - Inner stages",
        "aliases": [
            "13673-2",
            "13673-2"
        ],
        "partCategory": "Stage Body",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13669-2",
        "brandId": "brand-davey",
        "partNumber": "13669-2",
        "description": "Stage body - Inner stages",
        "aliases": [
            "13669-2",
            "13669-2"
        ],
        "partCategory": "Stage Body",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13663",
        "brandId": "brand-davey",
        "partNumber": "13663",
        "description": "Stage body - Final",
        "aliases": [
            "13663",
            "13663"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13675",
        "brandId": "brand-davey",
        "partNumber": "13675",
        "description": "Stage body - Final",
        "aliases": [
            "13675",
            "13675"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13671",
        "brandId": "brand-davey",
        "partNumber": "13671",
        "description": "Stage body - Final",
        "aliases": [
            "13671",
            "13671"
        ],
        "partCategory": "Stage Body",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13696-1",
        "brandId": "brand-davey",
        "partNumber": "13696-1",
        "description": "Spacer - Destage",
        "aliases": [
            "13696-1",
            "13696-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13696",
        "brandId": "brand-davey",
        "partNumber": "13696",
        "description": "Spacer - Destage",
        "aliases": [
            "13696",
            "13696"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13696-2",
        "brandId": "brand-davey",
        "partNumber": "13696-2",
        "description": "Spacer - Destage",
        "aliases": [
            "13696-2",
            "13696-2"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13666",
        "brandId": "brand-davey",
        "partNumber": "13666",
        "description": "Washer - Cup",
        "aliases": [
            "13666",
            "13666"
        ],
        "partCategory": "Part",
        "quantity": 0,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13693",
        "brandId": "brand-davey",
        "partNumber": "13693",
        "description": "Washer - Cup",
        "aliases": [
            "13693",
            "13693"
        ],
        "partCategory": "Part",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13667sp",
        "brandId": "brand-davey",
        "partNumber": "13667SP",
        "description": "Clip spring",
        "aliases": [
            "13667",
            "13667sp"
        ],
        "partCategory": "Part",
        "quantity": 2,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-400558sp",
        "brandId": "brand-davey",
        "partNumber": "400558SP",
        "description": "Seal - Mechanical",
        "aliases": [
            "400558",
            "400558sp"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13660sp",
        "brandId": "brand-davey",
        "partNumber": "13660SP",
        "description": "Backplate",
        "aliases": [
            "13660",
            "13660sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32283sp",
        "brandId": "brand-davey",
        "partNumber": "32283SP",
        "description": "Pressure switch assy 10A 250-400kPa",
        "aliases": [
            "32283",
            "32283sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32285sp",
        "brandId": "brand-davey",
        "partNumber": "32285SP",
        "description": "Pressure switch assy 10A 300-500kPa",
        "aliases": [
            "32285",
            "32285sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32286sp",
        "brandId": "brand-davey",
        "partNumber": "32286SP",
        "description": "Pressure switch assy 10A 350-620kPa",
        "aliases": [
            "32286",
            "32286sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32287sp",
        "brandId": "brand-davey",
        "partNumber": "32287SP",
        "description": "Pressure switch assy 10A 350-620kPa",
        "aliases": [
            "32287",
            "32287sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32314sp",
        "brandId": "brand-davey",
        "partNumber": "32314SP",
        "description": "Pressure switch assy 10A 300-500kPa",
        "aliases": [
            "32314",
            "32314sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32315",
        "brandId": "brand-davey",
        "partNumber": "32315",
        "description": "Pressure switch assy 10A 200-300kPa",
        "aliases": [
            "32315",
            "32315"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32288sp",
        "brandId": "brand-davey",
        "partNumber": "32288SP",
        "description": "Pressure switch assy 15A 250-400kPa",
        "aliases": [
            "32288",
            "32288sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11733-3",
        "brandId": "brand-davey",
        "partNumber": "11733-3",
        "description": "Loom HM60 Series & up to HM90-11P",
        "aliases": [
            "11733-3",
            "11733-3"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11971",
        "brandId": "brand-davey",
        "partNumber": "11971",
        "description": "Loom - P/switch assy",
        "aliases": [
            "11971",
            "11971"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11971-1",
        "brandId": "brand-davey",
        "partNumber": "11971-1",
        "description": "Loom - P/switch",
        "aliases": [
            "11971-1",
            "11971-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48035",
        "brandId": "brand-davey",
        "partNumber": "48035",
        "description": "Switch - Pressure 210-330 kPa HM270-19P only",
        "aliases": [
            "48035",
            "48035"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404132sp",
        "brandId": "brand-davey",
        "partNumber": "404132SP",
        "description": "Pressure Switch 260-450kpa, 38-65psi",
        "aliases": [
            "404132",
            "404132sp"
        ],
        "partCategory": "Pressure Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49034m",
        "brandId": "brand-davey",
        "partNumber": "49034M",
        "description": "Union - 1/4\" male",
        "aliases": [
            "49034M",
            "49034m"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49034",
        "brandId": "brand-davey",
        "partNumber": "49034",
        "description": "Union",
        "aliases": [
            "49034",
            "49034"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9544-1",
        "brandId": "brand-davey",
        "partNumber": "9544-1",
        "description": "Lead & 3 Pin Plug - 4850 HM160 series & HM270-25P",
        "aliases": [
            "9544-1",
            "9544-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8573-5",
        "brandId": "brand-davey",
        "partNumber": "8573-5",
        "description": "Lead & 3 Pin Plug - Sqd P/swtch All other models not specified",
        "aliases": [
            "8573-5",
            "8573-5"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32391",
        "brandId": "brand-davey",
        "partNumber": "32391",
        "description": "Tee piece assy HM60 & HM90 Series",
        "aliases": [
            "32391",
            "32391"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32392",
        "brandId": "brand-davey",
        "partNumber": "32392",
        "description": "Tee piece assy HM160 Series",
        "aliases": [
            "32392",
            "32392"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32393",
        "brandId": "brand-davey",
        "partNumber": "32393",
        "description": "Tee piece assy HM270 Series",
        "aliases": [
            "32393",
            "32393"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49034f",
        "brandId": "brand-davey",
        "partNumber": "49034F",
        "description": "Union - 1/4\" brass F",
        "aliases": [
            "49034F",
            "49034f"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-13729",
        "brandId": "brand-davey",
        "partNumber": "13729",
        "description": "Connector HM270 Series",
        "aliases": [
            "13729",
            "13729"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-47920",
        "brandId": "brand-davey",
        "partNumber": "47920",
        "description": "Connector - 5 way bronze",
        "aliases": [
            "47920",
            "47920"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11591-1",
        "brandId": "brand-davey",
        "partNumber": "11591-1",
        "description": "Plug & O-ring - Priming",
        "aliases": [
            "11591-1",
            "11591-1"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48466",
        "brandId": "brand-davey",
        "partNumber": "48466",
        "description": "Reducer - 1\" F - 1.25\" M HM160 Series",
        "aliases": [
            "48466",
            "48466"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-400622",
        "brandId": "brand-davey",
        "partNumber": "400622",
        "description": "Reducing bush HM270 Series",
        "aliases": [
            "400622",
            "400622"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48492",
        "brandId": "brand-davey",
        "partNumber": "48492",
        "description": "Gauge - Backmount 1000kpa",
        "aliases": [
            "48492",
            "48492"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-47932",
        "brandId": "brand-davey",
        "partNumber": "47932",
        "description": "Nipple - Hex 11/4\" x11/4\" BSPM HM60 & HM90 Series",
        "aliases": [
            "47932",
            "47932"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48953",
        "brandId": "brand-davey",
        "partNumber": "48953",
        "description": "Nipple - Hex 1.5\" (suction) HM160 Series",
        "aliases": [
            "48953",
            "48953"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49184",
        "brandId": "brand-davey",
        "partNumber": "49184",
        "description": "Nipple - 50mm brass HM270 Series",
        "aliases": [
            "49184",
            "49184"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49537",
        "brandId": "brand-davey",
        "partNumber": "49537",
        "description": "Nipple - 1/4\" x 1/4\" BSPT brass",
        "aliases": [
            "49537",
            "49537"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-47914",
        "brandId": "brand-davey",
        "partNumber": "47914",
        "description": "Checkvalve 1.25\" (suction) HM60 & HM90 Series",
        "aliases": [
            "47914",
            "47914"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48952",
        "brandId": "brand-davey",
        "partNumber": "48952",
        "description": "Checkvalve - 1.5\" (suction) HM160 Series",
        "aliases": [
            "48952",
            "48952"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-403329",
        "brandId": "brand-davey",
        "partNumber": "403329",
        "description": "Checkvalve 2\" F/F",
        "aliases": [
            "403329",
            "403329"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32320-1sp",
        "brandId": "brand-davey",
        "partNumber": "32320-1SP",
        "description": "Coupling Assy",
        "aliases": [
            "32320-1",
            "32320-1sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-tt45",
        "brandId": "brand-davey",
        "partNumber": "TT45",
        "description": "Torrium 2 - 450kPa Max",
        "aliases": [
            "TT45",
            "tt45"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-tt70",
        "brandId": "brand-davey",
        "partNumber": "TT70",
        "description": "Torrium 2 - 700kPa",
        "aliases": [
            "TT70",
            "tt70"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33485",
        "brandId": "brand-davey",
        "partNumber": "33485",
        "description": "Seal Kit",
        "aliases": [
            "33485",
            "33485"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-13551sp",
        "brandId": "brand-davey",
        "partNumber": "13551SP",
        "description": "Adaptor - Dynajet (Torrium) XJ50T XJ70T XJ90T",
        "aliases": [
            "13551",
            "13551sp"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-13648",
        "brandId": "brand-davey",
        "partNumber": "13648",
        "description": "Slinger - Water",
        "aliases": [
            "13648",
            "13648"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-48724",
        "brandId": "brand-davey",
        "partNumber": "48724",
        "description": "Overload - Thermal",
        "aliases": [
            "48724",
            "48724"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    }
];
const hmSeedCompatibilities = [
    {
        "id": "compat-hm-hm60-7049",
        "partId": "part-7049",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm60-7050",
        "partId": "part-7050",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm60-7051",
        "partId": "part-7051",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-7051",
        "partId": "part-7051",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-7052",
        "partId": "part-7052",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm90-844",
        "partId": "part-844",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm160-845",
        "partId": "part-845",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-851",
        "partId": "part-851",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-7054",
        "partId": "part-7054",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm60-7057",
        "partId": "part-7057",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm60-7055",
        "partId": "part-7055",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-7055",
        "partId": "part-7055",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-7053",
        "partId": "part-7053",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm90-852",
        "partId": "part-852",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm160-858",
        "partId": "part-858",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-869",
        "partId": "part-869",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm270-864",
        "partId": "part-864",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-13656-5sp",
        "partId": "part-13656-5sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "1",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-13656-5sp",
        "partId": "part-13656-5sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "1",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm60-13656-6sp",
        "partId": "part-13656-6sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "1",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm160-13656-7sp",
        "partId": "part-13656-7sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "1",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-13656-8sp",
        "partId": "part-13656-8sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "1",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-400577sp",
        "partId": "part-400577sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "2",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-400577sp",
        "partId": "part-400577sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "2",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-400577sp",
        "partId": "part-400577sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "2",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-400577sp",
        "partId": "part-400577sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "2",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-400577sp",
        "partId": "part-400577sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "2",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm60-448533",
        "partId": "part-448533",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "3",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-448533",
        "partId": "part-448533",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "3",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-448533",
        "partId": "part-448533",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "3",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-448533",
        "partId": "part-448533",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "3",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-13661-1",
        "partId": "part-13661-1",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "4",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-13661-1",
        "partId": "part-13661-1",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "4",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-13674-1",
        "partId": "part-13674-1",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "4",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-13670-1",
        "partId": "part-13670-1",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "4",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-s34m06168",
        "partId": "part-s34m06168",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "5",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-s34m06168",
        "partId": "part-s34m06168",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "5",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-s34m06168",
        "partId": "part-s34m06168",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "5",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-s34m06168",
        "partId": "part-s34m06168",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "5",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-33479",
        "partId": "part-33479",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "6",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-33479",
        "partId": "part-33479",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "6",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-33479",
        "partId": "part-33479",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "6",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-33479",
        "partId": "part-33479",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "6",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-13678sp",
        "partId": "part-13678sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "7",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm90-13676sp",
        "partId": "part-13676sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "7",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm160-13672sp",
        "partId": "part-13672sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "7",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-13668sp",
        "partId": "part-13668sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "7",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-136653",
        "partId": "part-136653",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "8",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm160-136803",
        "partId": "part-136803",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "8",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-136813",
        "partId": "part-136813",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "8",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-32912",
        "partId": "part-32912",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "9",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-32912",
        "partId": "part-32912",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "9",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-32913",
        "partId": "part-32913",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "9",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-32914",
        "partId": "part-32914",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "9",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-13662-2",
        "partId": "part-13662-2",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "10",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-13662-2",
        "partId": "part-13662-2",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "10",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-13673-2",
        "partId": "part-13673-2",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "10",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-13669-2",
        "partId": "part-13669-2",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "10",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-13663",
        "partId": "part-13663",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "11",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-13663",
        "partId": "part-13663",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "11",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-13675",
        "partId": "part-13675",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "11",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-13671",
        "partId": "part-13671",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "11",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-13696-1",
        "partId": "part-13696-1",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "12",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-13696-1",
        "partId": "part-13696-1",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "12",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-13696",
        "partId": "part-13696",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "12",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-13696-2",
        "partId": "part-13696-2",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "12",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-13666",
        "partId": "part-13666",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "13",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-13666",
        "partId": "part-13666",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "13",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-13693",
        "partId": "part-13693",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "13",
        "compatibilityNotes": "HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-13693",
        "partId": "part-13693",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "13",
        "compatibilityNotes": "HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-13667sp",
        "partId": "part-13667sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "14",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-13667sp",
        "partId": "part-13667sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "14",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-13667sp",
        "partId": "part-13667sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "14",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-13667sp",
        "partId": "part-13667sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "14",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-400558sp",
        "partId": "part-400558sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "15",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-400558sp",
        "partId": "part-400558sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "15",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-400558sp",
        "partId": "part-400558sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "15",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-400558sp",
        "partId": "part-400558sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "15",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-13660sp",
        "partId": "part-13660sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "16",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-13660sp",
        "partId": "part-13660sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "16",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-13660sp",
        "partId": "part-13660sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "16",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-13660sp",
        "partId": "part-13660sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "16",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-32283sp",
        "partId": "part-32283sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-32283sp",
        "partId": "part-32283sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm60-32285sp",
        "partId": "part-32285sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-32285sp",
        "partId": "part-32285sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm60-32286sp",
        "partId": "part-32286sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm90-32287sp",
        "partId": "part-32287sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm160-32314sp",
        "partId": "part-32314sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-32315",
        "partId": "part-32315",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm270-32288sp",
        "partId": "part-32288sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-11733-3",
        "partId": "part-11733-3",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17a",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-11733-3",
        "partId": "part-11733-3",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17a",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-11971",
        "partId": "part-11971",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17a",
        "compatibilityNotes": "HM90"
    },
    {
        "id": "compat-hm-hm160-11971-1",
        "partId": "part-11971-1",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17a",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-48035",
        "partId": "part-48035",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17b",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-404132sp",
        "partId": "part-404132sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-404132sp",
        "partId": "part-404132sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-404132sp",
        "partId": "part-404132sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-404132sp",
        "partId": "part-404132sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-49034m",
        "partId": "part-49034m",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-49034m",
        "partId": "part-49034m",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-49034m",
        "partId": "part-49034m",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-49034m",
        "partId": "part-49034m",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-49034",
        "partId": "part-49034",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17d",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-49034",
        "partId": "part-49034",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17d",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-49034",
        "partId": "part-49034",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17d",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-49034",
        "partId": "part-49034",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17d",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-9544-1",
        "partId": "part-9544-1",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17e",
        "compatibilityNotes": "HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-9544-1",
        "partId": "part-9544-1",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17e",
        "compatibilityNotes": "HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "17e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "17e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "17e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "17e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-32391",
        "partId": "part-32391",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "18",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-32391",
        "partId": "part-32391",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "18",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-32392",
        "partId": "part-32392",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "18",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-32393",
        "partId": "part-32393",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-49034f",
        "partId": "part-49034f",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "18a",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-49034f",
        "partId": "part-49034f",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "18a",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-49034f",
        "partId": "part-49034f",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "18a",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-49034f",
        "partId": "part-49034f",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18a",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-13729",
        "partId": "part-13729",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18b",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-47920",
        "partId": "part-47920",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "18b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-47920",
        "partId": "part-47920",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "18b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-47920",
        "partId": "part-47920",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "18b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-47920",
        "partId": "part-47920",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18b",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "18c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "18c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "18c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-11591-1",
        "partId": "part-11591-1",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18c",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-48466",
        "partId": "part-48466",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "18d",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-400622",
        "partId": "part-400622",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18d",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-48492",
        "partId": "part-48492",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "18e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-48492",
        "partId": "part-48492",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "18e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-48492",
        "partId": "part-48492",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "18e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-48492",
        "partId": "part-48492",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "18e",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-47932",
        "partId": "part-47932",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "19",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-47932",
        "partId": "part-47932",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "19",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-48953",
        "partId": "part-48953",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "19",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-49184",
        "partId": "part-49184",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "19",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-49537",
        "partId": "part-49537",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm90-49537",
        "partId": "part-49537",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm160-49537",
        "partId": "part-49537",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm270-49537",
        "partId": "part-49537",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm60-47914",
        "partId": "part-47914",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "20",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm90-47914",
        "partId": "part-47914",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "20",
        "compatibilityNotes": "HM60 and HM90"
    },
    {
        "id": "compat-hm-hm160-48952",
        "partId": "part-48952",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "20",
        "compatibilityNotes": "HM160"
    },
    {
        "id": "compat-hm-hm270-403329",
        "partId": "part-403329",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "20",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "21",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm90-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "diagramId": "diagram-hm",
        "diagramReference": "21",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm160-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "diagramId": "diagram-hm",
        "diagramReference": "21",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm270-32320-1sp",
        "partId": "part-32320-1sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "21",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270"
    },
    {
        "id": "compat-hm-hm60-tt45",
        "partId": "part-tt45",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "diagramId": "diagram-hm",
        "diagramReference": "22",
        "compatibilityNotes": "HM60"
    },
    {
        "id": "compat-hm-hm270-tt70",
        "partId": "part-tt70",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "diagramId": "diagram-hm",
        "diagramReference": "22",
        "compatibilityNotes": "HM270"
    },
    {
        "id": "compat-hm-hm60-33485",
        "partId": "part-33485",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm90-33485",
        "partId": "part-33485",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm160-33485",
        "partId": "part-33485",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm270-33485",
        "partId": "part-33485",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm60-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm90-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm160-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm270-13551sp",
        "partId": "part-13551sp",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm60-13648",
        "partId": "part-13648",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm90-13648",
        "partId": "part-13648",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm160-13648",
        "partId": "part-13648",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm270-13648",
        "partId": "part-13648",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm60-48724",
        "partId": "part-48724",
        "familyId": "family-hm",
        "modelId": "model-hm60",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm90-48724",
        "partId": "part-48724",
        "familyId": "family-hm",
        "modelId": "model-hm90",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm160-48724",
        "partId": "part-48724",
        "familyId": "family-hm",
        "modelId": "model-hm160",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    },
    {
        "id": "compat-hm-hm270-48724",
        "partId": "part-48724",
        "familyId": "family-hm",
        "modelId": "model-hm270",
        "compatibilityNotes": "HM60, HM90, HM160 and HM270 — requires verification"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/sdw-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdwSeedCompatibilities",
    ()=>sdwSeedCompatibilities,
    "sdwSeedDiagram",
    ()=>sdwSeedDiagram,
    "sdwSeedFamily",
    ()=>sdwSeedFamily,
    "sdwSeedHotspots",
    ()=>sdwSeedHotspots,
    "sdwSeedModels",
    ()=>sdwSeedModels,
    "sdwSeedParts",
    ()=>sdwSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/sdw-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const sdwSeedFamily = {
    id: "family-shallow-well",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "Shallow/Deep Well Jets",
    slug: "shallow-well",
    description: "Jet pumps for shallow wells, deep wells, sand spears and water transfer.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_201&PRF=4&PRNDS=CE_200&PRC=|R|CE_1|CE_111|CE_200|CE_201&MP1=CE_201&MP=CE_201.cex#CE_201",
    identificationNotes: "Confirm shallow (S) or deep (D) model and size (95, 125 or 165) on the nameplate before ordering parts."
};
const sdwSeedModels = [
    {
        id: "model-95s",
        familyId: sdwSeedFamily.id,
        name: "95S",
        slug: "95s",
        modelCode: "95S",
        aliases: [
            "095S",
            "95 S"
        ],
        description: "Shallow well jet pump, 95 series.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Shallow well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHALLOW_WELL_CURVE_PDF"],
        curveLabel: "95S"
    },
    {
        id: "model-95d",
        familyId: sdwSeedFamily.id,
        name: "95D",
        slug: "95d",
        modelCode: "95D",
        aliases: [
            "095D",
            "95 D"
        ],
        description: "Deep well jet pump, 95 series.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Deep well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEEP_WELL_CURVE_PDF"],
        curveLabel: "95D"
    },
    {
        id: "model-125s",
        familyId: sdwSeedFamily.id,
        name: "125S",
        slug: "125s",
        modelCode: "125S",
        aliases: [
            "125 S"
        ],
        description: "Shallow well jet pump, 125 series.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Shallow well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHALLOW_WELL_CURVE_PDF"],
        curveLabel: "125S"
    },
    {
        id: "model-125d",
        familyId: sdwSeedFamily.id,
        name: "125D",
        slug: "125d",
        modelCode: "125D",
        aliases: [
            "125 D"
        ],
        description: "Deep well jet pump, 125 series.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Deep well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEEP_WELL_CURVE_PDF"],
        curveLabel: "125D"
    },
    {
        id: "model-165s",
        familyId: sdwSeedFamily.id,
        name: "165S",
        slug: "165s",
        modelCode: "165S",
        aliases: [
            "165 S",
            "165S3"
        ],
        description: "Shallow well jet pump, 165 series.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Shallow well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHALLOW_WELL_CURVE_PDF"],
        curveLabel: "165S"
    },
    {
        id: "model-165d",
        familyId: sdwSeedFamily.id,
        name: "165D",
        slug: "165d",
        modelCode: "165D",
        aliases: [
            "165 D",
            "165D3"
        ],
        description: "Deep well jet pump, 165 series.",
        frequency: "50 Hz",
        status: "active",
        identificationNotes: "Deep well model — confirm revision suffix (-0, -1 or -2) on the nameplate.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEEP_WELL_CURVE_PDF"],
        curveLabel: "165D"
    }
];
const sdwSeedDiagram = {
    id: "diagram-sdw",
    familyId: sdwSeedFamily.id,
    name: "Shallow/Deep Well Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$sdw$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDW_SERIES_DIAGRAM_SOURCE_URL"]
};
const sdwSeedHotspots = [
    {
        "id": "sdw-ref-1",
        "diagramId": "diagram-sdw",
        "reference": "1",
        "x": 0.47375,
        "y": 0.31641237113402065,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-800",
            "part-807",
            "part-859"
        ]
    },
    {
        "id": "sdw-ref-2",
        "diagramId": "diagram-sdw",
        "reference": "2",
        "x": 0.17505000000000004,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-31383"
        ]
    },
    {
        "id": "sdw-ref-3",
        "diagramId": "diagram-sdw",
        "reference": "3",
        "x": 0.223275,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-11971"
        ]
    },
    {
        "id": "sdw-ref-4",
        "diagramId": "diagram-sdw",
        "reference": "4",
        "x": 0.28040000000000004,
        "y": 0.4103814432989691,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-404131sp",
            "part-404130sp"
        ]
    },
    {
        "id": "sdw-ref-5",
        "diagramId": "diagram-sdw",
        "reference": "5",
        "x": 0.322875,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-31382d"
        ]
    },
    {
        "id": "sdw-ref-6",
        "diagramId": "diagram-sdw",
        "reference": "6",
        "x": 0.395175,
        "y": 0.4108144329896907,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-w21100610"
        ]
    },
    {
        "id": "sdw-ref-6",
        "diagramId": "diagram-sdw",
        "reference": "6",
        "x": 0.1189625,
        "y": 0.8799381443298969,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-w21100610"
        ]
    },
    {
        "id": "sdw-ref-6",
        "diagramId": "diagram-sdw",
        "reference": "6",
        "x": 0.5644625,
        "y": 0.9188247422680412,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-w21100610"
        ]
    },
    {
        "id": "sdw-ref-7",
        "diagramId": "diagram-sdw",
        "reference": "7",
        "x": 0.4167125,
        "y": 0.4095154639175258,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-n041010"
        ]
    },
    {
        "id": "sdw-ref-7",
        "diagramId": "diagram-sdw",
        "reference": "7",
        "x": 0.1184375,
        "y": 0.9179690721649484,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-n041010"
        ]
    },
    {
        "id": "sdw-ref-7",
        "diagramId": "diagram-sdw",
        "reference": "7",
        "x": 0.5231125,
        "y": 0.8989175257731958,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-n041010"
        ]
    },
    {
        "id": "sdw-ref-8",
        "diagramId": "diagram-sdw",
        "reference": "8",
        "x": 0.4407875,
        "y": 0.4103814432989691,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-12098sp",
            "part-8890-2sp"
        ]
    },
    {
        "id": "sdw-ref-9",
        "diagramId": "diagram-sdw",
        "reference": "9",
        "x": 0.470175,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-49090"
        ]
    },
    {
        "id": "sdw-ref-10",
        "diagramId": "diagram-sdw",
        "reference": "10",
        "x": 0.49896250000000003,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9665sp",
            "part-9447"
        ]
    },
    {
        "id": "sdw-ref-10a",
        "diagramId": "diagram-sdw",
        "reference": "10a",
        "x": 0.3853125,
        "y": 0.5129072164948454,
        "width": 0.02495,
        "height": 0.02041237113402062,
        "partIds": [
            "part-9447"
        ]
    },
    {
        "id": "sdw-ref-11",
        "diagramId": "diagram-sdw",
        "reference": "11",
        "x": 0.5294000000000001,
        "y": 0.4095154639175258,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-43067"
        ]
    },
    {
        "id": "sdw-ref-12",
        "diagramId": "diagram-sdw",
        "reference": "12",
        "x": 0.558175,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10291sp",
            "part-31035sp"
        ]
    },
    {
        "id": "sdw-ref-12",
        "diagramId": "diagram-sdw",
        "reference": "12",
        "x": 0.403025,
        "y": 0.7991237113402062,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10291sp",
            "part-31035sp"
        ]
    },
    {
        "id": "sdw-ref-13",
        "diagramId": "diagram-sdw",
        "reference": "13",
        "x": 0.5901875000000001,
        "y": 0.40994845360824744,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-404365"
        ]
    },
    {
        "id": "sdw-ref-14",
        "diagramId": "diagram-sdw",
        "reference": "14",
        "x": 0.6194875000000001,
        "y": 0.4768865979381443,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": []
    },
    {
        "id": "sdw-ref-15",
        "diagramId": "diagram-sdw",
        "reference": "15",
        "x": 0.6205375,
        "y": 0.4955051546391752,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": []
    },
    {
        "id": "sdw-ref-16",
        "diagramId": "diagram-sdw",
        "reference": "16",
        "x": 0.38732500000000003,
        "y": 0.534762886597938,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10046-34"
        ]
    },
    {
        "id": "sdw-ref-17",
        "diagramId": "diagram-sdw",
        "reference": "17",
        "x": 0.3868,
        "y": 0.5516597938144329,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10046-24"
        ]
    },
    {
        "id": "sdw-ref-18",
        "diagramId": "diagram-sdw",
        "reference": "18",
        "x": 0.5262625,
        "y": 0.501979381443299,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-103244"
        ]
    },
    {
        "id": "sdw-ref-19",
        "diagramId": "diagram-sdw",
        "reference": "19",
        "x": 0.6469499999999999,
        "y": 0.46789690721649485,
        "width": 0.18735,
        "height": 0.2744948453608248,
        "partIds": [
            "part-32768",
            "part-32770",
            "part-32769",
            "part-32771",
            "part-43473",
            "part-9210-1",
            "part-43402",
            "part-47863",
            "part-48801sp"
        ]
    },
    {
        "id": "sdw-ref-20",
        "diagramId": "diagram-sdw",
        "reference": "20",
        "x": 0.7542375,
        "y": 0.7222680412371133,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9243",
            "part-9243-2sp"
        ]
    },
    {
        "id": "sdw-ref-21",
        "diagramId": "diagram-sdw",
        "reference": "21",
        "x": 0.6111125,
        "y": 0.7218350515463917,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9855-3sp",
            "part-10218sp"
        ]
    },
    {
        "id": "sdw-ref-22",
        "diagramId": "diagram-sdw",
        "reference": "22",
        "x": 0.5566125000000001,
        "y": 0.7218350515463917,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9796sp"
        ]
    },
    {
        "id": "sdw-ref-23",
        "diagramId": "diagram-sdw",
        "reference": "23",
        "x": 0.5320125,
        "y": 0.7222680412371133,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-96376"
        ]
    },
    {
        "id": "sdw-ref-24",
        "diagramId": "diagram-sdw",
        "reference": "24",
        "x": 0.5041875,
        "y": 0.722701030927835,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-43596"
        ]
    },
    {
        "id": "sdw-ref-25",
        "diagramId": "diagram-sdw",
        "reference": "25",
        "x": 0.46285000000000004,
        "y": 0.722701030927835,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-31498"
        ]
    },
    {
        "id": "sdw-ref-26",
        "diagramId": "diagram-sdw",
        "reference": "26",
        "x": 0.43346250000000003,
        "y": 0.722701030927835,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10292sp"
        ]
    },
    {
        "id": "sdw-ref-27",
        "diagramId": "diagram-sdw",
        "reference": "27",
        "x": 0.3988375,
        "y": 0.722701030927835,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-102416",
            "part-10046-16"
        ]
    },
    {
        "id": "sdw-ref-28",
        "diagramId": "diagram-sdw",
        "reference": "28",
        "x": 0.485875,
        "y": 0.7132061855670102,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": []
    },
    {
        "id": "sdw-ref-29",
        "diagramId": "diagram-sdw",
        "reference": "29",
        "x": 0.492675,
        "y": 0.6881134020618556,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10353sp",
            "part-12078"
        ]
    },
    {
        "id": "sdw-ref-29a",
        "diagramId": "diagram-sdw",
        "reference": "29a",
        "x": 0.35129999999999995,
        "y": 0.7198247422680413,
        "width": 0.02495,
        "height": 0.02041237113402062,
        "partIds": [
            "part-12078"
        ]
    },
    {
        "id": "sdw-ref-30",
        "diagramId": "diagram-sdw",
        "reference": "30",
        "x": 0.8244374999999999,
        "y": 0.9188247422680412,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10112"
        ]
    },
    {
        "id": "sdw-ref-31",
        "diagramId": "diagram-sdw",
        "reference": "31",
        "x": 0.77255,
        "y": 0.9192577319587628,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9439"
        ]
    },
    {
        "id": "sdw-ref-32",
        "diagramId": "diagram-sdw",
        "reference": "32",
        "x": 0.7201374999999999,
        "y": 0.9192577319587628,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-43067"
        ]
    },
    {
        "id": "sdw-ref-33",
        "diagramId": "diagram-sdw",
        "reference": "33",
        "x": 0.6840249999999999,
        "y": 0.9179690721649484,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9952-36",
            "part-9952-33",
            "part-9952-38",
            "part-9952-41",
            "part-9952-43",
            "part-9952-47"
        ]
    },
    {
        "id": "sdw-ref-34",
        "diagramId": "diagram-sdw",
        "reference": "34",
        "x": 0.6310875,
        "y": 0.9196907216494844,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-8816-8",
            "part-8816-7",
            "part-8816-5",
            "part-8816-9",
            "part-8816-3",
            "part-8816-6"
        ]
    },
    {
        "id": "sdw-ref-35",
        "diagramId": "diagram-sdw",
        "reference": "35",
        "x": 0.610075,
        "y": 0.9188247422680412,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10113"
        ]
    },
    {
        "id": "sdw-ref-36",
        "diagramId": "diagram-sdw",
        "reference": "36",
        "x": 0.5839,
        "y": 0.9188247422680412,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9446sp"
        ]
    },
    {
        "id": "sdw-ref-37",
        "diagramId": "diagram-sdw",
        "reference": "37",
        "x": 0.26051250000000004,
        "y": 0.9114226804123711,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10220sp"
        ]
    },
    {
        "id": "sdw-ref-38",
        "diagramId": "diagram-sdw",
        "reference": "38",
        "x": 0.3165875,
        "y": 0.9101340206185566,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-9448"
        ]
    },
    {
        "id": "sdw-ref-39",
        "diagramId": "diagram-sdw",
        "reference": "39",
        "x": 0.23740000000000003,
        "y": 0.9101340206185566,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10224"
        ]
    },
    {
        "id": "sdw-ref-40",
        "diagramId": "diagram-sdw",
        "reference": "40",
        "x": 0.15777499999999997,
        "y": 0.8012783505154639,
        "width": 0.019875,
        "height": 0.016391752577319587,
        "partIds": [
            "part-10222",
            "part-10221"
        ]
    }
];
const sdwSeedParts = [
    {
        "id": "part-800",
        "brandId": "brand-davey",
        "partNumber": "800",
        "description": "Motor - 1.2kW 220/1/50",
        "aliases": [
            "800",
            "800"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-807",
        "brandId": "brand-davey",
        "partNumber": "807",
        "description": "Motor - 1.8kW 220/1/50",
        "aliases": [
            "807",
            "807"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-859",
        "brandId": "brand-davey",
        "partNumber": "859",
        "description": "Motor - 1.8kW 415/3/50 MEPS",
        "aliases": [
            "859",
            "859"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31383",
        "brandId": "brand-davey",
        "partNumber": "31383",
        "description": "Bracket Assy - P/switch",
        "aliases": [
            "31383",
            "31383"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-11971",
        "brandId": "brand-davey",
        "partNumber": "11971",
        "description": "Loom - P/switch assy",
        "aliases": [
            "11971",
            "11971"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404131sp",
        "brandId": "brand-davey",
        "partNumber": "404131SP",
        "description": "Pressure Switch 260-380kpa, 38-55psi",
        "aliases": [
            "404131",
            "404131sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404130sp",
        "brandId": "brand-davey",
        "partNumber": "404130SP",
        "description": "Pressure Switch 207-345kpa, 30-50psi",
        "aliases": [
            "404130",
            "404130sp"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31382d",
        "brandId": "brand-davey",
        "partNumber": "31382D",
        "description": "Tube Assy - P/switch TEFC",
        "aliases": [
            "31382D",
            "31382d"
        ],
        "partCategory": "Switch",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-w21100610",
        "brandId": "brand-davey",
        "partNumber": "W21100610",
        "description": "Washer - Spring (pk10)",
        "aliases": [
            "W21100610",
            "w21100610"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-n041010",
        "brandId": "brand-davey",
        "partNumber": "N041010",
        "description": "Nut - (pk10)",
        "aliases": [
            "N041010",
            "n041010"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12098sp",
        "brandId": "brand-davey",
        "partNumber": "12098SP",
        "description": "Plug & O-ring - 1\" priming For pressure gauge",
        "aliases": [
            "12098",
            "12098sp"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8890-2sp",
        "brandId": "brand-davey",
        "partNumber": "8890-2SP",
        "description": "Plug & O-ring - Priming",
        "aliases": [
            "8890-2",
            "8890-2sp"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-49090",
        "brandId": "brand-davey",
        "partNumber": "49090",
        "description": "Gauge - Pressure 1000kPa btm/mt.",
        "aliases": [
            "49090",
            "49090"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9665sp",
        "brandId": "brand-davey",
        "partNumber": "9665SP",
        "description": "Cover - Outlet",
        "aliases": [
            "9665",
            "9665sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9447",
        "brandId": "brand-davey",
        "partNumber": "9447",
        "description": "Gasket - Outlet",
        "aliases": [
            "9447",
            "9447"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43067",
        "brandId": "brand-davey",
        "partNumber": "43067",
        "description": "O-ring",
        "aliases": [
            "43067",
            "43067"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10291sp",
        "brandId": "brand-davey",
        "partNumber": "10291SP",
        "description": "Tee - Discharge Shallow Well",
        "aliases": [
            "10291",
            "10291sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31035sp",
        "brandId": "brand-davey",
        "partNumber": "31035SP",
        "description": "A.D.R. Valve assy - Deep well",
        "aliases": [
            "31035",
            "31035sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404365",
        "brandId": "brand-davey",
        "partNumber": "404365",
        "description": "Plug .25\" BSP (Pack of 5)",
        "aliases": [
            "404365",
            "404365"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10046-34",
        "brandId": "brand-davey",
        "partNumber": "10046-34",
        "description": "Stud - (pk4)",
        "aliases": [
            "10046-34",
            "10046-34"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10046-24",
        "brandId": "brand-davey",
        "partNumber": "10046-24",
        "description": "Stud - (pk4)",
        "aliases": [
            "10046-24",
            "10046-24"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-103244",
        "brandId": "brand-davey",
        "partNumber": "103244",
        "description": "Stud - (pk4)",
        "aliases": [
            "103244",
            "103244"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32768",
        "brandId": "brand-davey",
        "partNumber": "32768",
        "description": "Seal Kit Shallow Well -0/-1",
        "aliases": [
            "32768",
            "32768"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32770",
        "brandId": "brand-davey",
        "partNumber": "32770",
        "description": "Seal Kit Deepwell -0/-1",
        "aliases": [
            "32770",
            "32770"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43473",
        "brandId": "brand-davey",
        "partNumber": "43473",
        "description": "O-ring - Sleeve/impeller",
        "aliases": [
            "43473",
            "43473"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9210-1",
        "brandId": "brand-davey",
        "partNumber": "9210-1",
        "description": "Sleeve - Shaft s/s",
        "aliases": [
            "9210-1",
            "9210-1"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43402",
        "brandId": "brand-davey",
        "partNumber": "43402",
        "description": "O-ring - Casing",
        "aliases": [
            "43402",
            "43402"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-47863",
        "brandId": "brand-davey",
        "partNumber": "47863",
        "description": "Seal - Mechanical 5/8\"",
        "aliases": [
            "47863",
            "47863"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32769",
        "brandId": "brand-davey",
        "partNumber": "32769",
        "description": "Seal Kit Shallow Well -2",
        "aliases": [
            "32769",
            "32769"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-32771",
        "brandId": "brand-davey",
        "partNumber": "32771",
        "description": "Seal Kit Deepwell -2",
        "aliases": [
            "32771",
            "32771"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-48801sp",
        "brandId": "brand-davey",
        "partNumber": "48801SP",
        "description": "Seal - Mechanical 5/8\"",
        "aliases": [
            "48801",
            "48801sp"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9243",
        "brandId": "brand-davey",
        "partNumber": "9243",
        "description": "Backplate",
        "aliases": [
            "9243",
            "9243"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9243-2sp",
        "brandId": "brand-davey",
        "partNumber": "9243-2SP",
        "description": "Backplate",
        "aliases": [
            "9243-2",
            "9243-2sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9855-3sp",
        "brandId": "brand-davey",
        "partNumber": "9855-3SP",
        "description": "Impeller Assy 095S 095D",
        "aliases": [
            "9855-3",
            "9855-3sp"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10218sp",
        "brandId": "brand-davey",
        "partNumber": "10218SP",
        "description": "Impeller Assy 125S 125D 165S 165D",
        "aliases": [
            "10218",
            "10218sp"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9796sp",
        "brandId": "brand-davey",
        "partNumber": "9796SP",
        "description": "Cover - Front",
        "aliases": [
            "9796",
            "9796sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-96376",
        "brandId": "brand-davey",
        "partNumber": "96376",
        "description": "Screw - (pk6)",
        "aliases": [
            "96376",
            "96376"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-43596",
        "brandId": "brand-davey",
        "partNumber": "43596",
        "description": "O-ring - Diffuser",
        "aliases": [
            "43596",
            "43596"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-31498",
        "brandId": "brand-davey",
        "partNumber": "31498",
        "description": "Kit - Bolt S/W & D/W",
        "aliases": [
            "31498",
            "31498"
        ],
        "partCategory": "Part",
        "quantity": 4,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10292sp",
        "brandId": "brand-davey",
        "partNumber": "10292SP",
        "description": "Casing - Incl. studs",
        "aliases": [
            "10292",
            "10292sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-102416",
        "brandId": "brand-davey",
        "partNumber": "102416",
        "description": "Stud - Shallow Well (pk6)",
        "aliases": [
            "102416",
            "102416"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10046-16",
        "brandId": "brand-davey",
        "partNumber": "10046-16",
        "description": "Stud - Deep Well (pk6)",
        "aliases": [
            "10046-16",
            "10046-16"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10353sp",
        "brandId": "brand-davey",
        "partNumber": "10353SP",
        "description": "Base",
        "aliases": [
            "10353",
            "10353sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-12078",
        "brandId": "brand-davey",
        "partNumber": "12078",
        "description": "Support",
        "aliases": [
            "12078",
            "12078"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10112",
        "brandId": "brand-davey",
        "partNumber": "10112",
        "description": "Gasket - Jet Housing S/W",
        "aliases": [
            "10112",
            "10112"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9439",
        "brandId": "brand-davey",
        "partNumber": "9439",
        "description": "Housing - S/W press pump",
        "aliases": [
            "9439",
            "9439"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-36",
        "brandId": "brand-davey",
        "partNumber": "9952-36",
        "description": "Venturi - Green",
        "aliases": [
            "9952-36",
            "9952-36"
        ],
        "partCategory": "Venturi",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-33",
        "brandId": "brand-davey",
        "partNumber": "9952-33",
        "description": "Venturi - White",
        "aliases": [
            "9952-33",
            "9952-33"
        ],
        "partCategory": "Venturi",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-38",
        "brandId": "brand-davey",
        "partNumber": "9952-38",
        "description": "Venturi - Brown",
        "aliases": [
            "9952-38",
            "9952-38"
        ],
        "partCategory": "Venturi",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-41",
        "brandId": "brand-davey",
        "partNumber": "9952-41",
        "description": "Venturi - Black",
        "aliases": [
            "9952-41",
            "9952-41"
        ],
        "partCategory": "Venturi",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-43",
        "brandId": "brand-davey",
        "partNumber": "9952-43",
        "description": "Venturi - Red",
        "aliases": [
            "9952-43",
            "9952-43"
        ],
        "partCategory": "Venturi",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9952-47",
        "brandId": "brand-davey",
        "partNumber": "9952-47",
        "description": "Venturi - Yellow",
        "aliases": [
            "9952-47",
            "9952-47"
        ],
        "partCategory": "Venturi",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-8",
        "brandId": "brand-davey",
        "partNumber": "8816-8",
        "description": "Jet - Brown",
        "aliases": [
            "8816-8",
            "8816-8"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-7",
        "brandId": "brand-davey",
        "partNumber": "8816-7",
        "description": "Jet - Black",
        "aliases": [
            "8816-7",
            "8816-7"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-5",
        "brandId": "brand-davey",
        "partNumber": "8816-5",
        "description": "Jet - Green",
        "aliases": [
            "8816-5",
            "8816-5"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-9",
        "brandId": "brand-davey",
        "partNumber": "8816-9",
        "description": "Jet - Yellow",
        "aliases": [
            "8816-9",
            "8816-9"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-3",
        "brandId": "brand-davey",
        "partNumber": "8816-3",
        "description": "Jet - White",
        "aliases": [
            "8816-3",
            "8816-3"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8816-6",
        "brandId": "brand-davey",
        "partNumber": "8816-6",
        "description": "Jet - Red",
        "aliases": [
            "8816-6",
            "8816-6"
        ],
        "partCategory": "Jet",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10113",
        "brandId": "brand-davey",
        "partNumber": "10113",
        "description": "Gasket suction cover S/W",
        "aliases": [
            "10113",
            "10113"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9446sp",
        "brandId": "brand-davey",
        "partNumber": "9446SP",
        "description": "Cover - Suction S/W",
        "aliases": [
            "9446",
            "9446sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10220sp",
        "brandId": "brand-davey",
        "partNumber": "10220SP",
        "description": "Cover - Suction D/W",
        "aliases": [
            "10220",
            "10220sp"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-9448",
        "brandId": "brand-davey",
        "partNumber": "9448",
        "description": "Gasket - Suction cover",
        "aliases": [
            "9448",
            "9448"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10224",
        "brandId": "brand-davey",
        "partNumber": "10224",
        "description": "Elbow - 1\" BSP M/F",
        "aliases": [
            "10224",
            "10224"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10222",
        "brandId": "brand-davey",
        "partNumber": "10222",
        "description": "Elbow - 1.5\" Poly (4\" injector)",
        "aliases": [
            "10222",
            "10222"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-10221",
        "brandId": "brand-davey",
        "partNumber": "10221",
        "description": "Elbow - 2\" Poly (5\" injector)",
        "aliases": [
            "10221",
            "10221"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-8573-5",
        "brandId": "brand-davey",
        "partNumber": "8573-5",
        "description": "Lead & 3 Pin Plug - Sqd P/swtch All other models not specified",
        "aliases": [
            "8573-5",
            "8573-5"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-tt70",
        "brandId": "brand-davey",
        "partNumber": "TT70",
        "description": "Torrium 2 - 700kPa",
        "aliases": [
            "TT70",
            "tt70"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    }
];
const sdwSeedCompatibilities = [
    {
        "id": "compat-sdw-95s-800",
        "partId": "part-800",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "95S and 95D"
    },
    {
        "id": "compat-sdw-95d-800",
        "partId": "part-800",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "95S and 95D"
    },
    {
        "id": "compat-sdw-125s-807",
        "partId": "part-807",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-807",
        "partId": "part-807",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-807",
        "partId": "part-807",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-807",
        "partId": "part-807",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-859",
        "partId": "part-859",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-859",
        "partId": "part-859",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-859",
        "partId": "part-859",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-859",
        "partId": "part-859",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "1",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-31383",
        "partId": "part-31383",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "2",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-31383",
        "partId": "part-31383",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "2",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-31383",
        "partId": "part-31383",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "2",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-31383",
        "partId": "part-31383",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "2",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-31383",
        "partId": "part-31383",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "2",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-31383",
        "partId": "part-31383",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "2",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-11971",
        "partId": "part-11971",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "3",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-11971",
        "partId": "part-11971",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "3",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-11971",
        "partId": "part-11971",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "3",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-11971",
        "partId": "part-11971",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "3",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-11971",
        "partId": "part-11971",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "3",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-11971",
        "partId": "part-11971",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "3",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-404131sp",
        "partId": "part-404131sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "4",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-404131sp",
        "partId": "part-404131sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "4",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-404131sp",
        "partId": "part-404131sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "4",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95d-404130sp",
        "partId": "part-404130sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "4",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-404130sp",
        "partId": "part-404130sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "4",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-404130sp",
        "partId": "part-404130sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "4",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95s-31382d",
        "partId": "part-31382d",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "5",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-31382d",
        "partId": "part-31382d",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "5",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-31382d",
        "partId": "part-31382d",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "5",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-31382d",
        "partId": "part-31382d",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "5",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-31382d",
        "partId": "part-31382d",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "5",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-31382d",
        "partId": "part-31382d",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "5",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-w21100610",
        "partId": "part-w21100610",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "6",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-w21100610",
        "partId": "part-w21100610",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "6",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-w21100610",
        "partId": "part-w21100610",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "6",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-w21100610",
        "partId": "part-w21100610",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "6",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-w21100610",
        "partId": "part-w21100610",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "6",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-w21100610",
        "partId": "part-w21100610",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "6",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-n041010",
        "partId": "part-n041010",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "7",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-n041010",
        "partId": "part-n041010",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "7",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-n041010",
        "partId": "part-n041010",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "7",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-n041010",
        "partId": "part-n041010",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "7",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-n041010",
        "partId": "part-n041010",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "7",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-n041010",
        "partId": "part-n041010",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "7",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-12098sp",
        "partId": "part-12098sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-12098sp",
        "partId": "part-12098sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-12098sp",
        "partId": "part-12098sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-12098sp",
        "partId": "part-12098sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-12098sp",
        "partId": "part-12098sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-12098sp",
        "partId": "part-12098sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-8890-2sp",
        "partId": "part-8890-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "8",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-49090",
        "partId": "part-49090",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "9",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-49090",
        "partId": "part-49090",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "9",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-49090",
        "partId": "part-49090",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "9",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-49090",
        "partId": "part-49090",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "9",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-49090",
        "partId": "part-49090",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "9",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-49090",
        "partId": "part-49090",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "9",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9665sp",
        "partId": "part-9665sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "10",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-9665sp",
        "partId": "part-9665sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "10",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-9665sp",
        "partId": "part-9665sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "10",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-9665sp",
        "partId": "part-9665sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "10",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-9665sp",
        "partId": "part-9665sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "10",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-9665sp",
        "partId": "part-9665sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "10",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9447",
        "partId": "part-9447",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "10a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-9447",
        "partId": "part-9447",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "10a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-9447",
        "partId": "part-9447",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "10a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-9447",
        "partId": "part-9447",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "10a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-9447",
        "partId": "part-9447",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "10a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-9447",
        "partId": "part-9447",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "10a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-43067",
        "partId": "part-43067",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "11",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-43067",
        "partId": "part-43067",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "11",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-43067",
        "partId": "part-43067",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "11",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-43067",
        "partId": "part-43067",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "11",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-43067",
        "partId": "part-43067",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "11",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-43067",
        "partId": "part-43067",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "11",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10291sp",
        "partId": "part-10291sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "12",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-10291sp",
        "partId": "part-10291sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "12",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-10291sp",
        "partId": "part-10291sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "12",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95d-31035sp",
        "partId": "part-31035sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "12",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-31035sp",
        "partId": "part-31035sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "12",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-31035sp",
        "partId": "part-31035sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "12",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95s-404365",
        "partId": "part-404365",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "13",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-404365",
        "partId": "part-404365",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "13",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-404365",
        "partId": "part-404365",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "13",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-404365",
        "partId": "part-404365",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "13",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-404365",
        "partId": "part-404365",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "13",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-404365",
        "partId": "part-404365",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "13",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10046-34",
        "partId": "part-10046-34",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "16",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10046-34",
        "partId": "part-10046-34",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "16",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10046-34",
        "partId": "part-10046-34",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "16",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10046-34",
        "partId": "part-10046-34",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "16",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10046-34",
        "partId": "part-10046-34",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "16",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10046-34",
        "partId": "part-10046-34",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "16",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10046-24",
        "partId": "part-10046-24",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "17",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10046-24",
        "partId": "part-10046-24",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "17",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10046-24",
        "partId": "part-10046-24",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "17",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10046-24",
        "partId": "part-10046-24",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "17",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10046-24",
        "partId": "part-10046-24",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "17",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10046-24",
        "partId": "part-10046-24",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "17",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-103244",
        "partId": "part-103244",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "18",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-103244",
        "partId": "part-103244",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "18",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-103244",
        "partId": "part-103244",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "18",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-103244",
        "partId": "part-103244",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "18",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-103244",
        "partId": "part-103244",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "18",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-103244",
        "partId": "part-103244",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "18",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-32768",
        "partId": "part-32768",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-32768",
        "partId": "part-32768",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-32768",
        "partId": "part-32768",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95d-32770",
        "partId": "part-32770",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-32770",
        "partId": "part-32770",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-32770",
        "partId": "part-32770",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95s-43473",
        "partId": "part-43473",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-43473",
        "partId": "part-43473",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-43473",
        "partId": "part-43473",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-43473",
        "partId": "part-43473",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-43473",
        "partId": "part-43473",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-43473",
        "partId": "part-43473",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9210-1",
        "partId": "part-9210-1",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19b",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-9210-1",
        "partId": "part-9210-1",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19b",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-9210-1",
        "partId": "part-9210-1",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19b",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-9210-1",
        "partId": "part-9210-1",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19b",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-9210-1",
        "partId": "part-9210-1",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19b",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-9210-1",
        "partId": "part-9210-1",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19b",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-43402",
        "partId": "part-43402",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19c",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-43402",
        "partId": "part-43402",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19c",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-43402",
        "partId": "part-43402",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19c",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-43402",
        "partId": "part-43402",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19c",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-43402",
        "partId": "part-43402",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19c",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-43402",
        "partId": "part-43402",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19c",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-47863",
        "partId": "part-47863",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-47863",
        "partId": "part-47863",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-47863",
        "partId": "part-47863",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-47863",
        "partId": "part-47863",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-47863",
        "partId": "part-47863",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-47863",
        "partId": "part-47863",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-32769",
        "partId": "part-32769",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-32769",
        "partId": "part-32769",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-32769",
        "partId": "part-32769",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95d-32771",
        "partId": "part-32771",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-32771",
        "partId": "part-32771",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-32771",
        "partId": "part-32771",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95s-48801sp",
        "partId": "part-48801sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-48801sp",
        "partId": "part-48801sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-48801sp",
        "partId": "part-48801sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-48801sp",
        "partId": "part-48801sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-48801sp",
        "partId": "part-48801sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-48801sp",
        "partId": "part-48801sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "19d",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9243",
        "partId": "part-9243",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-9243",
        "partId": "part-9243",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-9243",
        "partId": "part-9243",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-9243",
        "partId": "part-9243",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-9243",
        "partId": "part-9243",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-9243",
        "partId": "part-9243",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9243-2sp",
        "partId": "part-9243-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-9243-2sp",
        "partId": "part-9243-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-9243-2sp",
        "partId": "part-9243-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-9243-2sp",
        "partId": "part-9243-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-9243-2sp",
        "partId": "part-9243-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-9243-2sp",
        "partId": "part-9243-2sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "20",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9855-3sp",
        "partId": "part-9855-3sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "21",
        "compatibilityNotes": "95S and 95D"
    },
    {
        "id": "compat-sdw-95d-9855-3sp",
        "partId": "part-9855-3sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "21",
        "compatibilityNotes": "95S and 95D"
    },
    {
        "id": "compat-sdw-125s-10218sp",
        "partId": "part-10218sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "21",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10218sp",
        "partId": "part-10218sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "21",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10218sp",
        "partId": "part-10218sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "21",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10218sp",
        "partId": "part-10218sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "21",
        "compatibilityNotes": "125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-9796sp",
        "partId": "part-9796sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "22",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-9796sp",
        "partId": "part-9796sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "22",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-9796sp",
        "partId": "part-9796sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "22",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-9796sp",
        "partId": "part-9796sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "22",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-9796sp",
        "partId": "part-9796sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "22",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-9796sp",
        "partId": "part-9796sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "22",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-96376",
        "partId": "part-96376",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "23",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-96376",
        "partId": "part-96376",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "23",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-96376",
        "partId": "part-96376",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "23",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-96376",
        "partId": "part-96376",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "23",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-96376",
        "partId": "part-96376",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "23",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-96376",
        "partId": "part-96376",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "23",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-43596",
        "partId": "part-43596",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "24",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-43596",
        "partId": "part-43596",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "24",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-43596",
        "partId": "part-43596",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "24",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-43596",
        "partId": "part-43596",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "24",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-43596",
        "partId": "part-43596",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "24",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-43596",
        "partId": "part-43596",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "24",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-31498",
        "partId": "part-31498",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "25",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-31498",
        "partId": "part-31498",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "25",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-31498",
        "partId": "part-31498",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "25",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-31498",
        "partId": "part-31498",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "25",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-31498",
        "partId": "part-31498",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "25",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-31498",
        "partId": "part-31498",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "25",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10292sp",
        "partId": "part-10292sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "26",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10292sp",
        "partId": "part-10292sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "26",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10292sp",
        "partId": "part-10292sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "26",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10292sp",
        "partId": "part-10292sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "26",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10292sp",
        "partId": "part-10292sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "26",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10292sp",
        "partId": "part-10292sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "26",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-102416",
        "partId": "part-102416",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "27",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-102416",
        "partId": "part-102416",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "27",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-102416",
        "partId": "part-102416",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "27",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95d-10046-16",
        "partId": "part-10046-16",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "27",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-10046-16",
        "partId": "part-10046-16",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "27",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-10046-16",
        "partId": "part-10046-16",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "27",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95s-10353sp",
        "partId": "part-10353sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "29",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10353sp",
        "partId": "part-10353sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "29",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10353sp",
        "partId": "part-10353sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "29",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10353sp",
        "partId": "part-10353sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "29",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10353sp",
        "partId": "part-10353sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "29",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10353sp",
        "partId": "part-10353sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "29",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-12078",
        "partId": "part-12078",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "29a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-12078",
        "partId": "part-12078",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "29a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-12078",
        "partId": "part-12078",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "29a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-12078",
        "partId": "part-12078",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "29a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-12078",
        "partId": "part-12078",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "29a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-12078",
        "partId": "part-12078",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "29a",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10112",
        "partId": "part-10112",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "30",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-10112",
        "partId": "part-10112",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "30",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-10112",
        "partId": "part-10112",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "30",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95s-9439",
        "partId": "part-9439",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "31",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-9439",
        "partId": "part-9439",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "31",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-9439",
        "partId": "part-9439",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "31",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95s-9952-36",
        "partId": "part-9952-36",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "95S"
    },
    {
        "id": "compat-sdw-95s-9952-33",
        "partId": "part-9952-33",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "95S and 125S"
    },
    {
        "id": "compat-sdw-125s-9952-33",
        "partId": "part-9952-33",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "95S and 125S"
    },
    {
        "id": "compat-sdw-125s-9952-38",
        "partId": "part-9952-38",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "125S"
    },
    {
        "id": "compat-sdw-125s-9952-41",
        "partId": "part-9952-41",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "125S"
    },
    {
        "id": "compat-sdw-165s-9952-43",
        "partId": "part-9952-43",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "165S"
    },
    {
        "id": "compat-sdw-165s-9952-47",
        "partId": "part-9952-47",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "33",
        "compatibilityNotes": "165S"
    },
    {
        "id": "compat-sdw-95s-8816-8",
        "partId": "part-8816-8",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "95S"
    },
    {
        "id": "compat-sdw-95s-8816-7",
        "partId": "part-8816-7",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "95S and 125S"
    },
    {
        "id": "compat-sdw-125s-8816-7",
        "partId": "part-8816-7",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "95S and 125S"
    },
    {
        "id": "compat-sdw-125s-8816-5",
        "partId": "part-8816-5",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "125S"
    },
    {
        "id": "compat-sdw-125s-8816-9",
        "partId": "part-8816-9",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "125S"
    },
    {
        "id": "compat-sdw-165s-8816-3",
        "partId": "part-8816-3",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "165S"
    },
    {
        "id": "compat-sdw-165s-8816-6",
        "partId": "part-8816-6",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "34",
        "compatibilityNotes": "165S"
    },
    {
        "id": "compat-sdw-95s-10113",
        "partId": "part-10113",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "35",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-10113",
        "partId": "part-10113",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "35",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-10113",
        "partId": "part-10113",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "35",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95s-9446sp",
        "partId": "part-9446sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "36",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-125s-9446sp",
        "partId": "part-9446sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "36",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-165s-9446sp",
        "partId": "part-9446sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "36",
        "compatibilityNotes": "95S, 125S and 165S"
    },
    {
        "id": "compat-sdw-95d-10220sp",
        "partId": "part-10220sp",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "37",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-10220sp",
        "partId": "part-10220sp",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "37",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-10220sp",
        "partId": "part-10220sp",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "37",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95d-9448",
        "partId": "part-9448",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "38",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-125d-9448",
        "partId": "part-9448",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "38",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-165d-9448",
        "partId": "part-9448",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "38",
        "compatibilityNotes": "95D, 125D and 165D"
    },
    {
        "id": "compat-sdw-95s-10224",
        "partId": "part-10224",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "39",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10224",
        "partId": "part-10224",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "39",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10224",
        "partId": "part-10224",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "39",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10224",
        "partId": "part-10224",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "39",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10224",
        "partId": "part-10224",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "39",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10224",
        "partId": "part-10224",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "39",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10222",
        "partId": "part-10222",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10222",
        "partId": "part-10222",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10222",
        "partId": "part-10222",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10222",
        "partId": "part-10222",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10222",
        "partId": "part-10222",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10222",
        "partId": "part-10222",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-10221",
        "partId": "part-10221",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95d-10221",
        "partId": "part-10221",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125s-10221",
        "partId": "part-10221",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-125d-10221",
        "partId": "part-10221",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165s-10221",
        "partId": "part-10221",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-165d-10221",
        "partId": "part-10221",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "diagramId": "diagram-sdw",
        "diagramReference": "40",
        "compatibilityNotes": "95S, 95D, 125S, 125D, 165S and 165D"
    },
    {
        "id": "compat-sdw-95s-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-95d-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-125s-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-125d-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-165s-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-165d-8573-5",
        "partId": "part-8573-5",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-95s-tt70",
        "partId": "part-tt70",
        "familyId": "family-shallow-well",
        "modelId": "model-95s",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-95d-tt70",
        "partId": "part-tt70",
        "familyId": "family-shallow-well",
        "modelId": "model-95d",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-125s-tt70",
        "partId": "part-tt70",
        "familyId": "family-shallow-well",
        "modelId": "model-125s",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-125d-tt70",
        "partId": "part-tt70",
        "familyId": "family-shallow-well",
        "modelId": "model-125d",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-165s-tt70",
        "partId": "part-tt70",
        "familyId": "family-shallow-well",
        "modelId": "model-165s",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    },
    {
        "id": "compat-sdw-165d-tt70",
        "partId": "part-tt70",
        "familyId": "family-shallow-well",
        "modelId": "model-165d",
        "compatibilityNotes": "Shallow/Deep Well — requires verification"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/evo-seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evoSeedCompatibilities",
    ()=>evoSeedCompatibilities,
    "evoSeedDiagram",
    ()=>evoSeedDiagram,
    "evoSeedFamily",
    ()=>evoSeedFamily,
    "evoSeedHotspots",
    ()=>evoSeedHotspots,
    "evoSeedModels",
    ()=>evoSeedModels,
    "evoSeedParts",
    ()=>evoSeedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/evo-series-diagram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-client] (ecmascript)");
;
;
const BRAND_ID = "brand-davey";
const CATEGORY_ID = "cat-pressure";
const evoSeedFamily = {
    id: "family-evodrive",
    brandId: BRAND_ID,
    categoryId: CATEGORY_ID,
    name: "EvoDrive",
    slug: "evodrive",
    description: "Variable speed drive constant pressure pumps for modern homes.",
    sourceUrl: "https://davey.ricambio.net/site/pagece5.wplus?ID_COUNT=ce_5_home&LN=2&CEPV=Davey001&CELN=2&CEME=2&NDS=CE_564&PRF=4&PRNDS=CE_179&PRC=|R|CE_1|CE_111|CE_179|CE_564&MP1=CE_564&MP=CE_564.cex#CE_564",
    identificationNotes: "Confirm exact EvoDrive model code on the controller nameplate before ordering parts."
};
const evoSeedModels = [
    {
        id: "model-ed60-09",
        familyId: evoSeedFamily.id,
        name: "ED60-09",
        slug: "ed60-09",
        modelCode: "ED60-09",
        aliases: [
            "EvoDrive",
            "ED60-09G",
            "ED 60-09"
        ],
        description: "Variable speed constant pressure pump with integrated VSD controller.",
        frequency: "50 / 60 Hz",
        status: "active",
        identificationNotes: "Factory set point is typically 30 m (3 bar) — confirm on the controller display.",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVODRIVE_PUMP_IMAGE"],
        curveImageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVODRIVE_CURVE_IMAGE"],
        curveLabel: "ED60-09"
    }
];
const evoSeedDiagram = {
    id: "diagram-evo",
    familyId: evoSeedFamily.id,
    name: "EvoDrive Exploded View",
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVO_SERIES_DIAGRAM_PATH"],
    imageType: "svg",
    width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVO_SERIES_DIAGRAM_WIDTH"],
    height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVO_SERIES_DIAGRAM_HEIGHT"],
    sourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$evo$2d$series$2d$diagram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVO_SERIES_DIAGRAM_SOURCE_URL"]
};
const evoSeedHotspots = [
    {
        "id": "evo-ref-1",
        "diagramId": "diagram-evo",
        "reference": "1",
        "x": 0.16325000000000003,
        "y": 0.4764984227129338,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16426"
        ]
    },
    {
        "id": "evo-ref-1",
        "diagramId": "diagram-evo",
        "reference": "1",
        "x": 0.16325000000000003,
        "y": 0.4764984227129338,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16426"
        ]
    },
    {
        "id": "evo-ref-2",
        "diagramId": "diagram-evo",
        "reference": "2",
        "x": 0.20887500000000003,
        "y": 0.22870662460567823,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404259"
        ]
    },
    {
        "id": "evo-ref-2",
        "diagramId": "diagram-evo",
        "reference": "2",
        "x": 0.20887500000000003,
        "y": 0.22870662460567823,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404259"
        ]
    },
    {
        "id": "evo-ref-3",
        "diagramId": "diagram-evo",
        "reference": "3",
        "x": 0.23450000000000004,
        "y": 0.172397476340694,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33475"
        ]
    },
    {
        "id": "evo-ref-3",
        "diagramId": "diagram-evo",
        "reference": "3",
        "x": 0.23450000000000004,
        "y": 0.172397476340694,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33475"
        ]
    },
    {
        "id": "evo-ref-4",
        "diagramId": "diagram-evo",
        "reference": "4",
        "x": 0.28300000000000003,
        "y": 0.14842271293375395,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404287"
        ]
    },
    {
        "id": "evo-ref-4",
        "diagramId": "diagram-evo",
        "reference": "4",
        "x": 0.28300000000000003,
        "y": 0.14842271293375395,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404287"
        ]
    },
    {
        "id": "evo-ref-5",
        "diagramId": "diagram-evo",
        "reference": "5",
        "x": 0.30862500000000004,
        "y": 0.1854889589905363,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404289"
        ]
    },
    {
        "id": "evo-ref-5",
        "diagramId": "diagram-evo",
        "reference": "5",
        "x": 0.30862500000000004,
        "y": 0.1854889589905363,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404289"
        ]
    },
    {
        "id": "evo-ref-6",
        "diagramId": "diagram-evo",
        "reference": "6",
        "x": 0.3865,
        "y": 0.15205047318611986,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404290"
        ]
    },
    {
        "id": "evo-ref-6",
        "diagramId": "diagram-evo",
        "reference": "6",
        "x": 0.3865,
        "y": 0.15205047318611986,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404290"
        ]
    },
    {
        "id": "evo-ref-7",
        "diagramId": "diagram-evo",
        "reference": "7",
        "x": 0.46625,
        "y": 0.13769716088328074,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404308"
        ]
    },
    {
        "id": "evo-ref-7",
        "diagramId": "diagram-evo",
        "reference": "7",
        "x": 0.46625,
        "y": 0.13769716088328074,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404308"
        ]
    },
    {
        "id": "evo-ref-8",
        "diagramId": "diagram-evo",
        "reference": "8",
        "x": 0.547875,
        "y": 0.12334384858044165,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404291"
        ]
    },
    {
        "id": "evo-ref-8",
        "diagramId": "diagram-evo",
        "reference": "8",
        "x": 0.547875,
        "y": 0.12334384858044165,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404291"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.49950000000000006,
        "y": 0.12570977917981074,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.49950000000000006,
        "y": 0.12570977917981074,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.26587500000000003,
        "y": 0.2657728706624606,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.26587500000000003,
        "y": 0.2657728706624606,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.45387500000000003,
        "y": 0.48738170347003157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.45387500000000003,
        "y": 0.48738170347003157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.501375,
        "y": 0.48564668769716096,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.501375,
        "y": 0.48564668769716096,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.696,
        "y": 0.48974763406940064,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.696,
        "y": 0.48974763406940064,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.41575,
        "y": 0.12239747634069399,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-9",
        "diagramId": "diagram-evo",
        "reference": "9",
        "x": 0.41575,
        "y": 0.12239747634069399,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33467"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.38075000000000003,
        "y": 0.2526813880126183,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.38075000000000003,
        "y": 0.2526813880126183,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.23162500000000003,
        "y": 0.46703470031545746,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.23162500000000003,
        "y": 0.46703470031545746,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.40737500000000004,
        "y": 0.4910094637223975,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.40737500000000004,
        "y": 0.4910094637223975,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.8242499999999999,
        "y": 0.47050473186119873,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.8242499999999999,
        "y": 0.47050473186119873,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.7264999999999999,
        "y": 0.6094637223974764,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.7264999999999999,
        "y": 0.6094637223974764,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.727375,
        "y": 0.9088328075709778,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.727375,
        "y": 0.9088328075709778,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.492875,
        "y": 0.9436908517350157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.492875,
        "y": 0.9436908517350157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.373125,
        "y": 0.6753943217665614,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-10",
        "diagramId": "diagram-evo",
        "reference": "10",
        "x": 0.373125,
        "y": 0.6753943217665614,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33471"
        ]
    },
    {
        "id": "evo-ref-11",
        "diagramId": "diagram-evo",
        "reference": "11",
        "x": 0.30575,
        "y": 0.46813880126182966,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33473"
        ]
    },
    {
        "id": "evo-ref-11",
        "diagramId": "diagram-evo",
        "reference": "11",
        "x": 0.30575,
        "y": 0.46813880126182966,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33473"
        ]
    },
    {
        "id": "evo-ref-12",
        "diagramId": "diagram-evo",
        "reference": "12",
        "x": 0.533625,
        "y": 0.48738170347003157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33472"
        ]
    },
    {
        "id": "evo-ref-12",
        "diagramId": "diagram-evo",
        "reference": "12",
        "x": 0.533625,
        "y": 0.48738170347003157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33472"
        ]
    },
    {
        "id": "evo-ref-12",
        "diagramId": "diagram-evo",
        "reference": "12",
        "x": 0.73875,
        "y": 0.48738170347003157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33472"
        ]
    },
    {
        "id": "evo-ref-12",
        "diagramId": "diagram-evo",
        "reference": "12",
        "x": 0.73875,
        "y": 0.48738170347003157,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33472"
        ]
    },
    {
        "id": "evo-ref-13",
        "diagramId": "diagram-evo",
        "reference": "13",
        "x": 0.565,
        "y": 0.26813880126182965,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33466"
        ]
    },
    {
        "id": "evo-ref-13",
        "diagramId": "diagram-evo",
        "reference": "13",
        "x": 0.565,
        "y": 0.26813880126182965,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33466"
        ]
    },
    {
        "id": "evo-ref-14",
        "diagramId": "diagram-evo",
        "reference": "14",
        "x": 0.638125,
        "y": 0.2298107255520505,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404292"
        ]
    },
    {
        "id": "evo-ref-14",
        "diagramId": "diagram-evo",
        "reference": "14",
        "x": 0.638125,
        "y": 0.2298107255520505,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404292"
        ]
    },
    {
        "id": "evo-ref-15",
        "diagramId": "diagram-evo",
        "reference": "15",
        "x": 0.7463749999999999,
        "y": 0.2466876971608833,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33468"
        ]
    },
    {
        "id": "evo-ref-15",
        "diagramId": "diagram-evo",
        "reference": "15",
        "x": 0.7463749999999999,
        "y": 0.2466876971608833,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33468"
        ]
    },
    {
        "id": "evo-ref-16",
        "diagramId": "diagram-evo",
        "reference": "16",
        "x": 0.761625,
        "y": 0.19274447949526816,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33470"
        ]
    },
    {
        "id": "evo-ref-16",
        "diagramId": "diagram-evo",
        "reference": "16",
        "x": 0.761625,
        "y": 0.19274447949526816,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33470"
        ]
    },
    {
        "id": "evo-ref-17",
        "diagramId": "diagram-evo",
        "reference": "17",
        "x": 0.8413749999999999,
        "y": 0.2011041009463722,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404294"
        ]
    },
    {
        "id": "evo-ref-17",
        "diagramId": "diagram-evo",
        "reference": "17",
        "x": 0.8413749999999999,
        "y": 0.2011041009463722,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404294"
        ]
    },
    {
        "id": "evo-ref-18",
        "diagramId": "diagram-evo",
        "reference": "18",
        "x": 0.808125,
        "y": 0.2406940063091483,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404295"
        ]
    },
    {
        "id": "evo-ref-18",
        "diagramId": "diagram-evo",
        "reference": "18",
        "x": 0.808125,
        "y": 0.2406940063091483,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404295"
        ]
    },
    {
        "id": "evo-ref-18",
        "diagramId": "diagram-evo",
        "reference": "18",
        "x": 0.29912500000000003,
        "y": 0.6970031545741325,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404295"
        ]
    },
    {
        "id": "evo-ref-18",
        "diagramId": "diagram-evo",
        "reference": "18",
        "x": 0.29912500000000003,
        "y": 0.6970031545741325,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404295"
        ]
    },
    {
        "id": "evo-ref-18",
        "diagramId": "diagram-evo",
        "reference": "18",
        "x": 0.516625,
        "y": 0.8753943217665615,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404295"
        ]
    },
    {
        "id": "evo-ref-18",
        "diagramId": "diagram-evo",
        "reference": "18",
        "x": 0.516625,
        "y": 0.8753943217665615,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404295"
        ]
    },
    {
        "id": "evo-ref-19",
        "diagramId": "diagram-evo",
        "reference": "19",
        "x": 0.289625,
        "y": 0.8657728706624606,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33474"
        ]
    },
    {
        "id": "evo-ref-19",
        "diagramId": "diagram-evo",
        "reference": "19",
        "x": 0.289625,
        "y": 0.8657728706624606,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33474"
        ]
    },
    {
        "id": "evo-ref-19",
        "diagramId": "diagram-evo",
        "reference": "19",
        "x": 0.35325,
        "y": 0.8656151419558359,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33474"
        ]
    },
    {
        "id": "evo-ref-19",
        "diagramId": "diagram-evo",
        "reference": "19",
        "x": 0.35325,
        "y": 0.8656151419558359,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33474"
        ]
    },
    {
        "id": "evo-ref-20",
        "diagramId": "diagram-evo",
        "reference": "20",
        "x": 0.424375,
        "y": 0.8735015772870661,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404297"
        ]
    },
    {
        "id": "evo-ref-20",
        "diagramId": "diagram-evo",
        "reference": "20",
        "x": 0.424375,
        "y": 0.8735015772870661,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404297"
        ]
    },
    {
        "id": "evo-ref-21",
        "diagramId": "diagram-evo",
        "reference": "21",
        "x": 0.48425000000000007,
        "y": 0.8910094637223974,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404299"
        ]
    },
    {
        "id": "evo-ref-21",
        "diagramId": "diagram-evo",
        "reference": "21",
        "x": 0.48425000000000007,
        "y": 0.8910094637223974,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404299"
        ]
    },
    {
        "id": "evo-ref-22",
        "diagramId": "diagram-evo",
        "reference": "22",
        "x": 0.535625,
        "y": 0.6157728706624607,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404300"
        ]
    },
    {
        "id": "evo-ref-22",
        "diagramId": "diagram-evo",
        "reference": "22",
        "x": 0.535625,
        "y": 0.6157728706624607,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-404300"
        ]
    },
    {
        "id": "evo-ref-23",
        "diagramId": "diagram-evo",
        "reference": "23",
        "x": 0.613375,
        "y": 0.6227129337539432,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16427"
        ]
    },
    {
        "id": "evo-ref-23",
        "diagramId": "diagram-evo",
        "reference": "23",
        "x": 0.613375,
        "y": 0.6227129337539432,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16427"
        ]
    },
    {
        "id": "evo-ref-24",
        "diagramId": "diagram-evo",
        "reference": "24",
        "x": 0.72175,
        "y": 0.8537854889589904,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16428"
        ]
    },
    {
        "id": "evo-ref-24",
        "diagramId": "diagram-evo",
        "reference": "24",
        "x": 0.72175,
        "y": 0.8537854889589904,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16428"
        ]
    },
    {
        "id": "evo-ref-25",
        "diagramId": "diagram-evo",
        "reference": "25",
        "x": 0.23950000000000002,
        "y": 0.9162460567823344,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16429"
        ]
    },
    {
        "id": "evo-ref-25",
        "diagramId": "diagram-evo",
        "reference": "25",
        "x": 0.23950000000000002,
        "y": 0.9162460567823344,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-16429"
        ]
    },
    {
        "id": "evo-ref-26",
        "diagramId": "diagram-evo",
        "reference": "26",
        "x": 0.5473750000000001,
        "y": 0.5679810725552051,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33482"
        ]
    },
    {
        "id": "evo-ref-26",
        "diagramId": "diagram-evo",
        "reference": "26",
        "x": 0.5473750000000001,
        "y": 0.5679810725552051,
        "width": 0.0305,
        "height": 0.038485804416403785,
        "partIds": [
            "part-33482"
        ]
    }
];
const evoSeedParts = [
    {
        "id": "part-16426",
        "brandId": "brand-davey",
        "partNumber": "16426",
        "description": "Front Cover",
        "aliases": [
            "16426",
            "16426"
        ],
        "partCategory": "Cover",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404259",
        "brandId": "brand-davey",
        "partNumber": "404259",
        "description": "Casing Assembly",
        "aliases": [
            "404259",
            "404259"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33475",
        "brandId": "brand-davey",
        "partNumber": "33475",
        "description": "Check Valve - Inlet",
        "aliases": [
            "33475",
            "33475"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404287",
        "brandId": "brand-davey",
        "partNumber": "404287",
        "description": "T Kit 5 Way",
        "aliases": [
            "404287",
            "404287"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404289",
        "brandId": "brand-davey",
        "partNumber": "404289",
        "description": "Temperature Sensor (Incl Oring)",
        "aliases": [
            "404289",
            "404289"
        ],
        "partCategory": "Sensor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404290",
        "brandId": "brand-davey",
        "partNumber": "404290",
        "description": "Pressure Sensor",
        "aliases": [
            "404290",
            "404290"
        ],
        "partCategory": "Sensor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404308",
        "brandId": "brand-davey",
        "partNumber": "404308",
        "description": "Tank Bracket",
        "aliases": [
            "404308",
            "404308"
        ],
        "partCategory": "Tank",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404291",
        "brandId": "brand-davey",
        "partNumber": "404291",
        "description": "Pressure Tank (Incl Oring)",
        "aliases": [
            "404291",
            "404291"
        ],
        "partCategory": "Tank",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33467",
        "brandId": "brand-davey",
        "partNumber": "33467",
        "description": "Oring Kit",
        "aliases": [
            "33467",
            "33467"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33471",
        "brandId": "brand-davey",
        "partNumber": "33471",
        "description": "Screw Kit",
        "aliases": [
            "33471",
            "33471"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33473",
        "brandId": "brand-davey",
        "partNumber": "33473",
        "description": "Drain Plug (Incl Oring)",
        "aliases": [
            "33473",
            "33473"
        ],
        "partCategory": "Seal",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33472",
        "brandId": "brand-davey",
        "partNumber": "33472",
        "description": "Impeller Nut & Washer Assy",
        "aliases": [
            "33472",
            "33472"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33466",
        "brandId": "brand-davey",
        "partNumber": "33466",
        "description": "Impeller",
        "aliases": [
            "33466",
            "33466"
        ],
        "partCategory": "Impeller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404292",
        "brandId": "brand-davey",
        "partNumber": "404292",
        "description": "Wet End Internal Assembly",
        "aliases": [
            "404292",
            "404292"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33468",
        "brandId": "brand-davey",
        "partNumber": "33468",
        "description": "Mechanical Seal",
        "aliases": [
            "33468",
            "33468"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33470",
        "brandId": "brand-davey",
        "partNumber": "33470",
        "description": "Casing Oring (Pack 3)",
        "aliases": [
            "33470",
            "33470"
        ],
        "partCategory": "Casing",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404294",
        "brandId": "brand-davey",
        "partNumber": "404294",
        "description": "Motor Bracket",
        "aliases": [
            "404294",
            "404294"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404295",
        "brandId": "brand-davey",
        "partNumber": "404295",
        "description": "Rotor Assembly (Incl Bearings)",
        "aliases": [
            "404295",
            "404295"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33474",
        "brandId": "brand-davey",
        "partNumber": "33474",
        "description": "Bearings Kit",
        "aliases": [
            "33474",
            "33474"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404297",
        "brandId": "brand-davey",
        "partNumber": "404297",
        "description": "Stator & Shell Assembly",
        "aliases": [
            "404297",
            "404297"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404299",
        "brandId": "brand-davey",
        "partNumber": "404299",
        "description": "Fan (Incl Circlip)",
        "aliases": [
            "404299",
            "404299"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-404300",
        "brandId": "brand-davey",
        "partNumber": "404300",
        "description": "VSD Controller",
        "aliases": [
            "404300",
            "404300"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-16427",
        "brandId": "brand-davey",
        "partNumber": "16427",
        "description": "Rear Cover - Upper",
        "aliases": [
            "16427",
            "16427"
        ],
        "partCategory": "Cover",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-16428",
        "brandId": "brand-davey",
        "partNumber": "16428",
        "description": "Rear Cover - Lower",
        "aliases": [
            "16428",
            "16428"
        ],
        "partCategory": "Cover",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-16429",
        "brandId": "brand-davey",
        "partNumber": "16429",
        "description": "Baseplate",
        "aliases": [
            "16429",
            "16429"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33482",
        "brandId": "brand-davey",
        "partNumber": "33482",
        "description": "Controller Decal",
        "aliases": [
            "33482",
            "33482"
        ],
        "partCategory": "Controller",
        "quantity": 1,
        "availability": "unknown",
        "illustrated": true
    },
    {
        "id": "part-33469",
        "brandId": "brand-davey",
        "partNumber": "33469",
        "description": "Seal Kit",
        "aliases": [
            "33469",
            "33469"
        ],
        "partCategory": "Seal Kit",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-404304",
        "brandId": "brand-davey",
        "partNumber": "404304",
        "description": "Motor & VSD Controller",
        "aliases": [
            "404304",
            "404304"
        ],
        "partCategory": "Motor",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    },
    {
        "id": "part-404248",
        "brandId": "brand-davey",
        "partNumber": "404248",
        "description": "Connection cable M to M",
        "aliases": [
            "404248",
            "404248"
        ],
        "partCategory": "Part",
        "quantity": 1,
        "availability": "verify",
        "illustrated": false
    }
];
const evoSeedCompatibilities = [
    {
        "id": "compat-evo-ed60-09-16426",
        "partId": "part-16426",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "1",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404259",
        "partId": "part-404259",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "2",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33475",
        "partId": "part-33475",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "3",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404287",
        "partId": "part-404287",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "4",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404289",
        "partId": "part-404289",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "5",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404290",
        "partId": "part-404290",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "6",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404308",
        "partId": "part-404308",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "7",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404291",
        "partId": "part-404291",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "8",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33467",
        "partId": "part-33467",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "9",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33471",
        "partId": "part-33471",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "10",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33473",
        "partId": "part-33473",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "11",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33472",
        "partId": "part-33472",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "12",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33466",
        "partId": "part-33466",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "13",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404292",
        "partId": "part-404292",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "14",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33468",
        "partId": "part-33468",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "15",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33470",
        "partId": "part-33470",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "16",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404294",
        "partId": "part-404294",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "17",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404295",
        "partId": "part-404295",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "18",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33474",
        "partId": "part-33474",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "19",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404297",
        "partId": "part-404297",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "20",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404299",
        "partId": "part-404299",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "21",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-404300",
        "partId": "part-404300",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "22",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-16427",
        "partId": "part-16427",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "23",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-16428",
        "partId": "part-16428",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "24",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-16429",
        "partId": "part-16429",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "25",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33482",
        "partId": "part-33482",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "diagramId": "diagram-evo",
        "diagramReference": "26",
        "compatibilityNotes": "ED60-09"
    },
    {
        "id": "compat-evo-ed60-09-33469",
        "partId": "part-33469",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "compatibilityNotes": "EvoDrive — requires verification"
    },
    {
        "id": "compat-evo-ed60-09-404304",
        "partId": "part-404304",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "compatibilityNotes": "EvoDrive — requires verification"
    },
    {
        "id": "compat-evo-ed60-09-404248",
        "partId": "part-404248",
        "familyId": "family-evodrive",
        "modelId": "model-ed60-09",
        "compatibilityNotes": "EvoDrive — requires verification"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/demo-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEED_VERSION",
    ()=>SEED_VERSION,
    "seedBrand",
    ()=>seedBrand,
    "seedCategory",
    ()=>seedCategory,
    "seedCompatibilities",
    ()=>seedCompatibilities,
    "seedDatabase",
    ()=>seedDatabase,
    "seedDiagram",
    ()=>seedDiagram,
    "seedFamily",
    ()=>seedFamily,
    "seedHotspots",
    ()=>seedHotspots,
    "seedModels",
    ()=>seedModels,
    "seedParts",
    ()=>seedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/hp-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/hs-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$extended$2d$families$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/extended-families-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/xj-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/xp-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/hm-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/sdw-seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/evo-seed.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const SEED_VERSION = 15;
function dedupePartsById(parts) {
    return [
        ...new Map(parts.map((part)=>[
                part.id,
                part
            ])).values()
    ];
}
const seedBrand = {
    id: "brand-davey",
    name: "Davey",
    slug: "davey",
    aliases: [
        "Davey Pumps"
    ],
    websiteUrl: "https://www.davey.com.au"
};
const seedCategory = {
    id: "cat-pressure",
    brandId: seedBrand.id,
    name: "Pressure Pumps",
    slug: "pressure-pumps"
};
const seedFamily = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedFamily"];
const seedModels = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedModels"];
const seedDiagram = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedDiagram"];
const seedParts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedParts"];
const seedHotspots = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedHotspots"];
const seedCompatibilities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedCompatibilities"];
async function seedDatabase(db) {
    await db.brands.bulkPut([
        seedBrand
    ]);
    await db.categories.bulkPut([
        seedCategory
    ]);
    await db.pumpFamilies.bulkPut([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedFamily"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpSeedFamily"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmSeedFamily"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xjSeedFamily"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpSeedFamily"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdwSeedFamily"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evoSeedFamily"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$extended$2d$families$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedSeedFamilies"]
    ]);
    await db.pumpModels.bulkPut([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xjSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdwSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evoSeedModels"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$extended$2d$families$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedSeedModels"]
    ]);
    await db.diagrams.bulkPut([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedDiagram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpSeedDiagram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmSeedDiagram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xjSeedDiagram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpSeedDiagram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdwSeedDiagram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evoSeedDiagram"]
    ]);
    await db.diagramHotspots.bulkPut([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedHotspots"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpSeedHotspots"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmSeedHotspots"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xjSeedHotspots"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpSeedHotspots"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdwSeedHotspots"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evoSeedHotspots"]
    ]);
    await db.parts.bulkPut(dedupePartsById([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedParts"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpSeedParts"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmSeedParts"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xjSeedParts"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpSeedParts"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdwSeedParts"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evoSeedParts"]
    ]));
    await db.partCompatibilities.bulkPut([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hs$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsSeedCompatibilities"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hpSeedCompatibilities"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$hm$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmSeedCompatibilities"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xj$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xjSeedCompatibilities"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$xp$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpSeedCompatibilities"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$sdw$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdwSeedCompatibilities"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$evo$2d$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evoSeedCompatibilities"]
    ]);
    await db.appSettings.put({
        id: "app",
        theme: "system",
        textSize: "standard"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seed/seed-manager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureSeeded",
    ()=>ensureSeeded,
    "resetDemonstrationData",
    ()=>resetDemonstrationData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/demo-data.ts [app-client] (ecmascript)");
;
;
const SEED_KEY = "pumphub-seed-version";
async function ensureSeeded() {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])();
    const brandCount = await db.brands.count();
    const storedVersion = localStorage.getItem(SEED_KEY);
    const meta = await db.catalogueMeta.get("catalogue");
    if ((meta === null || meta === void 0 ? void 0 : meta.liveDataSource) === "ricambio") {
        const settings = await db.appSettings.get("app");
        if (!settings) {
            await db.appSettings.put({
                id: "app",
                theme: "system",
                textSize: "standard"
            });
        }
        return;
    }
    if (brandCount === 0 || storedVersion !== String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_VERSION"])) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCatalogueData"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedDatabase"])(db);
        localStorage.setItem(SEED_KEY, String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_VERSION"]));
    }
    const settings = await db.appSettings.get("app");
    if (!settings) {
        await db.appSettings.put({
            id: "app",
            theme: "system",
            textSize: "standard"
        });
    }
}
async function resetDemonstrationData() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCatalogueData"])();
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedDatabase"])(db);
    localStorage.setItem(SEED_KEY, String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$demo$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_VERSION"]));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDatabase.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyFeedback",
    ()=>useCopyFeedback,
    "useDatabaseReady",
    ()=>useDatabaseReady,
    "useDbLiveQuery",
    ()=>useDbLiveQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$seed$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seed/seed-manager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useDatabaseReady() {
    _s();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDatabaseReady.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seed$2f$seed$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSeeded"])().then({
                "useDatabaseReady.useEffect": ()=>setReady(true)
            }["useDatabaseReady.useEffect"]);
        }
    }["useDatabaseReady.useEffect"], []);
    return ready;
}
_s(useDatabaseReady, "KuazqYXqOk+6VRk8yHVvoClyoeE=");
function useDbLiveQuery(queryFn) {
    let deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], defaultValue = arguments.length > 2 ? arguments[2] : void 0;
    _s1();
    const ready = useDatabaseReady();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "useDbLiveQuery.useLiveQuery": async ()=>{
            if (!ready) return defaultValue;
            return queryFn();
        }
    }["useDbLiveQuery.useLiveQuery"], [
        ready,
        ...deps
    ], defaultValue);
}
_s1(useDbLiveQuery, "tm2wbYkBv9BPmpN0FtHG8HVsvuA=", false, function() {
    return [
        useDatabaseReady,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
function useCopyFeedback() {
    _s2();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCopyFeedback.useCallback[copy]": async (text, label)=>{
            try {
                await navigator.clipboard.writeText(text);
                setCopied(label !== null && label !== void 0 ? label : text);
                setTimeout({
                    "useCopyFeedback.useCallback[copy]": ()=>setCopied(null)
                }["useCopyFeedback.useCallback[copy]"], 2000);
                return true;
            } catch (e) {
                return false;
            }
        }
    }["useCopyFeedback.useCallback[copy]"], []);
    return {
        copied,
        copy
    };
}
_s2(useCopyFeedback, "SkmUauvVt3XUpAe0IehHbQBOSaw=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/repositories/settingsRepository.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "settingsRepository",
    ()=>settingsRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-client] (ecmascript)");
;
const DEFAULT_SETTINGS = {
    id: "app",
    theme: "system",
    textSize: "standard"
};
const settingsRepository = {
    async get () {
        const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().appSettings.get("app");
        return settings !== null && settings !== void 0 ? settings : DEFAULT_SETTINGS;
    },
    async update (partial) {
        const current = await this.get();
        const updated = {
            ...current,
            ...partial
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().appSettings.put(updated);
        return updated;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDocumentTheme",
    ()=>applyDocumentTheme,
    "resolveTheme",
    ()=>resolveTheme
]);
function resolveTheme(settings) {
    if (settings.theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return settings.theme;
}
function applyDocumentTheme(settings, inDavey) {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "text-large");
    const theme = inDavey ? "dark" : resolveTheme(settings);
    root.classList.add(theme);
    if (settings.textSize === "large") {
        root.classList.add("text-large");
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsProvider",
    ()=>SettingsProvider,
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$settingsRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/settingsRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function SettingsProvider(param) {
    let { children } = param;
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "app",
        theme: "system",
        textSize: "standard"
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsProvider.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$settingsRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsRepository"].get().then({
                "SettingsProvider.useEffect": (s)=>{
                    setSettings(s);
                    setLoading(false);
                }
            }["SettingsProvider.useEffect"]);
        }
    }["SettingsProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsProvider.useEffect": ()=>{
            const inDavey = document.documentElement.classList.contains("davey-section");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDocumentTheme"])(settings, inDavey);
        }
    }["SettingsProvider.useEffect"], [
        settings
    ]);
    const updateSettings = async (partial)=>{
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$settingsRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsRepository"].update(partial);
        setSettings(updated);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            settings,
            updateSettings,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/useSettings.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(SettingsProvider, "edqlfmVT/lA/TLXFE1LG+2Ful7U=");
_c = SettingsProvider;
function useSettings() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SettingsContext);
    if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
    return ctx;
}
_s1(useSettings, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "SettingsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/BottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function AppShell(param) {
    let { children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const ready = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDatabaseReady"])();
    const showBottomNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowBottomNav"])(pathname);
    const inDavey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrandSection"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            document.documentElement.classList.toggle("davey-section", inDavey);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDocumentTheme"])(settings, inDavey);
        }
    }["AppShell.useEffect"], [
        inDavey,
        settings
    ]);
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-dvh items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppShell.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-dvh flex-col bg-[var(--background)] text-[var(--foreground)]",
        children: [
            pathname !== "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppHeader"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 35,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto w-full max-w-lg flex-1 px-5 md:max-w-2xl ".concat(pathname === "/" ? "pt-8" : "pt-5", " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottomNavPaddingClass"])(showBottomNav)),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppShell.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(AppShell, "1z0+eyzYMIhWu+AF+3n256PLlHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDatabaseReady"]
    ];
});
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceWorkerRegister.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceWorkerRegister",
    ()=>ServiceWorkerRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
/** Clear any service worker left over from a prior dev session. */ async function unregisterDevServiceWorkers() {
    if (!("serviceWorker" in navigator)) return;
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration)=>registration.unregister()));
    if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key)=>caches.delete(key)));
    }
}
function ServiceWorkerRegister() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceWorkerRegister.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                void unregisterDevServiceWorkers();
                return;
            }
            //TURBOPACK unreachable
            ;
        }
    }["ServiceWorkerRegister.useEffect"], []);
    return null;
}
_s(ServiceWorkerRegister, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ServiceWorkerRegister;
var _c;
__turbopack_context__.k.register(_c, "ServiceWorkerRegister");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_86d44e1e._.js.map