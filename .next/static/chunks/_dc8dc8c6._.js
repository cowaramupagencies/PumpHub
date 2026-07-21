(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ActionTile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTile",
    ()=>ActionTile,
    "ActionTileGrid",
    ()=>ActionTileGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
;
function ActionTile(param) {
    let { href, onClick, icon: Icon, title, description, iconBgClass = "bg-davey-yellow", className } = param;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm transition-transform active:scale-[0.98]", className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden", iconBgClass),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-12 w-12 text-navy",
                    strokeWidth: 2,
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ActionTile.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ActionTile.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-2 py-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base font-bold leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ActionTile.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "line-clamp-2 text-xs text-muted",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ActionTile.tsx",
                        lineNumber: 41,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ActionTile.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ActionTile.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(classes, "text-left"),
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ActionTile.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = ActionTile;
function ActionTileGrid(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-2 gap-3", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ActionTile.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_c1 = ActionTileGrid;
var _c, _c1;
__turbopack_context__.k.register(_c, "ActionTile");
__turbopack_context__.k.register(_c1, "ActionTileGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navigation/DaveyQuickLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaveyQuickLinks",
    ()=>DaveyQuickLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ActionTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-client] (ecmascript)");
;
;
;
;
function DaveyQuickLinks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTileGrid"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTile"], {
                href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/browse"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                title: "Browse Pumps",
                description: "View pump ranges"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/DaveyQuickLinks.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTile"], {
                href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/search?filter=parts"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                title: "Find a Part",
                description: "Search part numbers"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/DaveyQuickLinks.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTile"], {
                href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/saved"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
                title: "Saved",
                description: "Saved pumps & parts"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/DaveyQuickLinks.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTile"], {
                href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/settings"),
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                title: "Settings",
                description: "App & catalogue"
            }, void 0, false, {
                fileName: "[project]/src/components/navigation/DaveyQuickLinks.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation/DaveyQuickLinks.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = DaveyQuickLinks;
var _c;
__turbopack_context__.k.register(_c, "DaveyQuickLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SearchInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
;
;
function SearchInput(param) {
    let { className, large = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-muted",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SearchInput.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "search",
                enterKeyHint: "search",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-2xl border-2 border-[var(--border-color)] bg-[var(--card-bg)] pl-14 pr-5 text-lg shadow-sm placeholder:text-muted focus:border-blue focus:outline-none", large ? "min-h-16" : "min-h-[3.25rem] text-base", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SearchInput.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SearchInput.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SearchInput;
var _c;
__turbopack_context__.k.register(_c, "SearchInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
function Button(param) {
    let { variant = "primary", size = "lg", fullWidth = false, className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-2.5 rounded-xl px-5 font-semibold transition-colors disabled:opacity-50", fullWidth && "w-full", size === "lg" && "min-h-[3.75rem] text-lg", size === "md" && "min-h-[3.25rem] text-base", variant === "primary" && "bg-accent text-navy hover:bg-accent-hover", variant === "secondary" && "bg-blue text-white hover:bg-blue/90", variant === "ghost" && "border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-black/[0.03] dark:hover:bg-white/[0.03]", variant === "danger" && "bg-danger/10 text-danger hover:bg-danger/20", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/repositories/recentRepository.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recentRepository",
    ()=>recentRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
const MAX_RECENT_PUMPS = 20;
const MAX_RECENT_PARTS = 30;
const recentRepository = {
    async getAll () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().recentItems.orderBy("viewedAt").reverse().toArray();
    },
    async getPumps () {
        let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MAX_RECENT_PUMPS;
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().recentItems.filter((r)=>r.entityType === "pumpModel").toArray();
        return items.sort((a, b)=>b.viewedAt - a.viewedAt).slice(0, limit);
    },
    async getParts () {
        let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MAX_RECENT_PARTS;
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().recentItems.filter((r)=>r.entityType === "part").toArray();
        return items.sort((a, b)=>b.viewedAt - a.viewedAt).slice(0, limit);
    },
    async trackView (entityType, entityId) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])();
        const existing = await db.recentItems.filter((r)=>r.entityType === entityType && r.entityId === entityId).first();
        if (existing) {
            const latest = await db.recentItems.orderBy("viewedAt").last();
            var _latest_viewedAt;
            const nextViewedAt = Math.max(Date.now(), existing.viewedAt + 1, ((_latest_viewedAt = latest === null || latest === void 0 ? void 0 : latest.viewedAt) !== null && _latest_viewedAt !== void 0 ? _latest_viewedAt : 0) + 1);
            await db.recentItems.update(existing.id, {
                viewedAt: nextViewedAt
            });
        } else {
            await db.recentItems.add({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createId"])(),
                entityType,
                entityId,
                viewedAt: Date.now()
            });
        }
        await this.trim(entityType);
    },
    async trim (entityType) {
        const max = entityType === "pumpModel" ? MAX_RECENT_PUMPS : MAX_RECENT_PARTS;
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().recentItems.filter((r)=>r.entityType === entityType).toArray();
        const sorted = items.sort((a, b)=>b.viewedAt - a.viewedAt);
        if (sorted.length > max) {
            const toRemove = sorted.slice(max);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().recentItems.bulkDelete(toRemove.map((i)=>i.id));
        }
    },
    async clearAll () {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().recentItems.clear();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/repositories/pumpRepository.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pumpRepository",
    ()=>pumpRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-client] (ecmascript)");
;
const pumpRepository = {
    async getAllModels () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.toArray();
    },
    async getModelById (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.get(id);
    },
    async getModelBySlug (slug) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.where("slug").equals(slug).first();
    },
    async getModelDetail (id) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])();
        const model = await db.pumpModels.get(id);
        if (!model) return undefined;
        const family = await db.pumpFamilies.get(model.familyId);
        if (!family) return undefined;
        const brand = await db.brands.get(family.brandId);
        const category = await db.categories.get(family.categoryId);
        if (!brand || !category) return undefined;
        return {
            ...model,
            brand,
            family,
            category
        };
    },
    async getFamilyById (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().pumpFamilies.get(id);
    },
    async getModelsByFamily (familyId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.where("familyId").equals(familyId).toArray();
    },
    async getDiagramForFamily (familyId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().diagrams.where("familyId").equals(familyId).first();
    },
    async getHotspotsForDiagram (diagramId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDb"])().diagramHotspots.where("diagramId").equals(diagramId).toArray();
    },
    async getCommonModels () {
        const slugs = [
            "hs50",
            "hs60",
            "hp45",
            "hp65",
            "hp85",
            "hm60",
            "hm90",
            "hm160",
            "hm270"
        ];
        const results = [];
        for (const slug of slugs){
            const model = await this.getModelBySlug(slug);
            if (model) {
                const detail = await this.getModelDetail(model.id);
                if (detail) results.push(detail);
            }
        }
        return results;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRecentItems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecentItems",
    ()=>useRecentItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$recentRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/recentRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/pumpRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useRecentItems() {
    _s();
    const recentPumps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])({
        "useRecentItems.useDbLiveQuery[recentPumps]": async ()=>{
            const items = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$recentRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recentRepository"].getPumps();
            const pumps = [];
            for (const item of items){
                const pump = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pumpRepository"].getModelDetail(item.entityId);
                if (pump) pumps.push({
                    pump,
                    viewedAt: item.viewedAt
                });
            }
            return pumps;
        }
    }["useRecentItems.useDbLiveQuery[recentPumps]"], [], undefined);
    return {
        pumps: recentPumps !== null && recentPumps !== void 0 ? recentPumps : [],
        loading: recentPumps === undefined
    };
}
_s(useRecentItems, "n8sd3g7Ixmz5YBmQ8cQkgQaIUf4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/home/HomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$DaveyQuickLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navigation/DaveyQuickLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brands$2f$DaveyLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brands/DaveyLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SearchInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecentItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRecentItems.ts [app-client] (ecmascript)");
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
;
;
;
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { pumps: recentPumps, loading: recentLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecentItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentItems"])();
    const recentThree = recentPumps.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-7 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl bg-davey-black px-6 py-5 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brands$2f$DaveyLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaveyLogo"], {
                    variant: "wordmark",
                    presentation: "hero",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/features/home/HomePage.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/HomePage.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
                    children: "Find a Pump or Part"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/HomePage.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/HomePage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                onClick: ()=>router.push("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/search")),
                onKeyDown: (e)=>e.key === "Enter" && router.push("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/search")),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchInput"], {
                    placeholder: "Enter pump model or part number",
                    readOnly: true,
                    className: "cursor-pointer",
                    "aria-label": "Search pumps and parts"
                }, void 0, false, {
                    fileName: "[project]/src/features/home/HomePage.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/home/HomePage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$DaveyQuickLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaveyQuickLinks"], {}, void 0, false, {
                fileName: "[project]/src/features/home/HomePage.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        children: "Recent Pumps"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/HomePage.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    recentLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                        label: "Loading recent pumps…"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/HomePage.tsx",
                        lineNumber: 46,
                        columnNumber: 27
                    }, this),
                    !recentLoading && recentThree.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        message: "Pumps you open will appear here."
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/HomePage.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: recentThree.map((param)=>{
                            let { pump } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold",
                                                children: pump.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/home/HomePage.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-base text-muted",
                                                children: [
                                                    pump.brand.name,
                                                    " · ",
                                                    pump.family.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/home/HomePage.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/home/HomePage.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/pumps/").concat(pump.slug),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            fullWidth: true,
                                            children: [
                                                "Open ",
                                                pump.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/home/HomePage.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/home/HomePage.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, pump.id, true, {
                                fileName: "[project]/src/features/home/HomePage.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/HomePage.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    !recentLoading && recentPumps.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAVEY_BASE"], "/browse"),
                        className: "mt-3 inline-flex min-h-[3.25rem] items-center text-base font-medium text-blue",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "[project]/src/features/home/HomePage.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/home/HomePage.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/home/HomePage.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(HomePage, "2S9oUYJe/Px384JnZ/VMDGXGtkQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecentItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentItems"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Package
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
];
const Package = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("package", __iconNode);
;
 //# sourceMappingURL=package.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Package",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_dc8dc8c6._.js.map