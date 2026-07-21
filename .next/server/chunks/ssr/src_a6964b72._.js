module.exports = [
"[project]/src/components/ui/ActionTile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTile",
    ()=>ActionTile,
    "ActionTileGrid",
    ()=>ActionTileGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
;
;
;
function ActionTile({ href, onClick, icon: Icon, title, description, iconBgClass = "bg-davey-yellow", className }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm transition-transform active:scale-[0.98]", className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden", iconBgClass),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 px-2 py-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base font-bold leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ActionTile.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ActionTile.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(classes, "text-left"),
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ActionTile.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
function ActionTileGrid({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-2 gap-3", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ActionTile.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
;
;
function Button({ variant = "primary", size = "lg", fullWidth = false, className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-2.5 rounded-xl px-5 font-semibold transition-colors disabled:opacity-50", fullWidth && "w-full", size === "lg" && "min-h-[3.75rem] text-lg", size === "md" && "min-h-[3.25rem] text-base", variant === "primary" && "bg-accent text-navy hover:bg-accent-hover", variant === "secondary" && "bg-blue text-white hover:bg-blue/90", variant === "ghost" && "border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-black/[0.03] dark:hover:bg-white/[0.03]", variant === "danger" && "bg-danger/10 text-danger hover:bg-danger/20", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/FilterToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterToggle",
    ()=>FilterToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
function FilterToggle({ options, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-2",
        style: {
            gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`
        },
        role: "group",
        children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(opt.value),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-h-[3.25rem] rounded-xl border-2 px-2 text-base font-semibold transition-colors", value === opt.value ? "border-blue bg-blue/10 text-blue" : "border-[var(--border-color)] bg-[var(--card-bg)] text-muted"),
                "aria-pressed": value === opt.value,
                children: opt.label
            }, opt.value, false, {
                fileName: "[project]/src/components/ui/FilterToggle.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/FilterToggle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/PageHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PageHeader({ title, subtitle, onBack, showSave, isSaved, onSave, className }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-start gap-3", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onBack ?? (()=>router.back()),
                className: "flex min-h-[3.25rem] min-w-[3.25rem] shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]",
                "aria-label": "Go back",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageHeader.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHeader.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            (title || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1 pt-1",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold leading-tight md:text-3xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PageHeader.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-base text-muted",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PageHeader.tsx",
                        lineNumber: 41,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PageHeader.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            showSave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onSave,
                className: "flex min-h-[3.25rem] min-w-[3.25rem] shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]",
                "aria-label": isSaved ? "Saved" : "Save",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-6 w-6", isSaved && "fill-accent text-accent")
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageHeader.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHeader.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PageHeader.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/SearchInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
;
;
;
function SearchInput({ className, large = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-muted",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SearchInput.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "search",
                enterKeyHint: "search",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-2xl border-2 border-[var(--border-color)] bg-[var(--card-bg)] pl-14 pr-5 text-lg shadow-sm placeholder:text-muted focus:border-blue focus:outline-none", large ? "min-h-16" : "min-h-[3.25rem] text-base", className),
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
}),
"[project]/src/features/pumps/PumpDiagram.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PumpDiagram",
    ()=>PumpDiagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-ssr] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const MIN_SCALE = 1;
const MAX_SCALE = 4;
const BUTTON_ZOOM_STEP = 0.35;
/** Finger must move this far before panning starts (avoids jitter while tapping) */ const PAN_ACTIVATION_PX = 14;
/** Pinch must change scale by at least this much before zoom applies */ const PINCH_ACTIVATION_RATIO = 0.02;
/** Snap back to fit when zoomed out close to 100% */ const SCALE_SNAP_THRESHOLD = 1.06;
function clampScale(scale) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}
function snapScale(scale) {
    return scale <= SCALE_SNAP_THRESHOLD ? MIN_SCALE : scale;
}
function hotspotCenter(hotspot, viewWidth, viewHeight) {
    return {
        cx: hotspot.x * viewWidth + hotspot.width * viewWidth / 2,
        cy: hotspot.y * viewHeight + hotspot.height * viewHeight / 2
    };
}
function clampOffset(offset, scale, width, height) {
    if (scale <= 1 || width <= 0 || height <= 0) {
        return {
            x: 0,
            y: 0
        };
    }
    const maxX = width * (scale - 1) / 2;
    const maxY = height * (scale - 1) / 2;
    return {
        x: Math.max(-maxX, Math.min(maxX, offset.x)),
        y: Math.max(-maxY, Math.min(maxY, offset.y))
    };
}
function usePanZoom(enabled, options = {}) {
    const touchGestures = options.touchGestures ?? false;
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        offset: {
            x: 0,
            y: 0
        }
    });
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(state);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0
    });
    const pointerPanActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const touchPan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        stateRef.current = state;
    }, [
        state
    ]);
    const isHotspotTarget = (target)=>target instanceof Element && Boolean(target.closest("[data-hotspot]"));
    const getViewportSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const rect = viewportRef.current?.getBoundingClientRect();
        return {
            width: rect?.width ?? 0,
            height: rect?.height ?? 0
        };
    }, []);
    const commitState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        const snappedScale = snapScale(next.scale);
        const { width, height } = getViewportSize();
        const clamped = {
            scale: snappedScale,
            offset: snappedScale <= MIN_SCALE ? {
                x: 0,
                y: 0
            } : clampOffset(next.offset, snappedScale, width, height)
        };
        stateRef.current = clamped;
        setState(clamped);
        return clamped;
    }, [
        getViewportSize
    ]);
    const applyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updater)=>{
        commitState(updater(stateRef.current));
    }, [
        commitState
    ]);
    const resetView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const reset = {
            scale: MIN_SCALE,
            offset: {
                x: 0,
                y: 0
            }
        };
        stateRef.current = reset;
        setState(reset);
        touchPan.current = null;
        pinch.current = null;
        pointerPanActive.current = false;
        pointerDown.current = false;
        setIsDragging(false);
    }, []);
    const zoomIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        applyState((current)=>({
                scale: clampScale(current.scale + BUTTON_ZOOM_STEP),
                offset: current.offset
            }));
    }, [
        applyState
    ]);
    const zoomOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        applyState((current)=>({
                scale: clampScale(current.scale - BUTTON_ZOOM_STEP),
                offset: current.offset
            }));
    }, [
        applyState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled) {
            resetView();
        }
    }, [
        enabled,
        resetView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = viewportRef.current;
        if (!node || !enabled || !touchGestures) return;
        const touchDistance = (touches)=>{
            if (touches.length < 2) return 0;
            const dx = touches[0].clientX - touches[1].clientX;
            const dy = touches[0].clientY - touches[1].clientY;
            return Math.hypot(dx, dy);
        };
        const clearTouchGesture = ()=>{
            touchPan.current = null;
            pinch.current = null;
            setIsDragging(false);
        };
        const onTouchStart = (event)=>{
            if (isHotspotTarget(event.target)) return;
            if (event.touches.length === 2) {
                touchPan.current = null;
                setIsDragging(false);
                pinch.current = {
                    startDistance: touchDistance(event.touches),
                    startScale: stateRef.current.scale
                };
                return;
            }
            if (event.touches.length === 1 && stateRef.current.scale > MIN_SCALE) {
                const touch = event.touches[0];
                touchPan.current = {
                    startX: touch.clientX,
                    startY: touch.clientY,
                    offsetX: stateRef.current.offset.x,
                    offsetY: stateRef.current.offset.y,
                    active: false
                };
            }
        };
        const onTouchMove = (event)=>{
            if (event.touches.length === 2 && pinch.current) {
                event.preventDefault();
                touchPan.current = null;
                setIsDragging(false);
                const distance = touchDistance(event.touches);
                if (pinch.current.startDistance <= 0) return;
                const ratio = distance / pinch.current.startDistance;
                if (Math.abs(ratio - 1) < PINCH_ACTIVATION_RATIO) return;
                applyState(()=>({
                        scale: clampScale(pinch.current.startScale * ratio),
                        offset: stateRef.current.offset
                    }));
                return;
            }
            const pan = touchPan.current;
            if (event.touches.length !== 1 || !pan || pinch.current || stateRef.current.scale <= MIN_SCALE) {
                return;
            }
            const touch = event.touches[0];
            const deltaX = touch.clientX - pan.startX;
            const deltaY = touch.clientY - pan.startY;
            if (!pan.active) {
                if (Math.hypot(deltaX, deltaY) < PAN_ACTIVATION_PX) return;
                pan.active = true;
                setIsDragging(true);
            }
            event.preventDefault();
            applyState((current)=>({
                    scale: current.scale,
                    offset: {
                        x: pan.offsetX + deltaX,
                        y: pan.offsetY + deltaY
                    }
                }));
        };
        const onTouchEnd = (event)=>{
            if (event.touches.length === 0) {
                clearTouchGesture();
                if (stateRef.current.scale <= SCALE_SNAP_THRESHOLD) {
                    resetView();
                }
                return;
            }
            if (event.touches.length === 1) {
                pinch.current = null;
                touchPan.current = null;
                setIsDragging(false);
            }
        };
        node.addEventListener("touchstart", onTouchStart, {
            passive: true
        });
        node.addEventListener("touchmove", onTouchMove, {
            passive: false
        });
        node.addEventListener("touchend", onTouchEnd);
        node.addEventListener("touchcancel", onTouchEnd);
        return ()=>{
            node.removeEventListener("touchstart", onTouchStart);
            node.removeEventListener("touchmove", onTouchMove);
            node.removeEventListener("touchend", onTouchEnd);
            node.removeEventListener("touchcancel", onTouchEnd);
        };
    }, [
        applyState,
        enabled,
        resetView,
        touchGestures
    ]);
    const handlePointerDown = (event)=>{
        if (!enabled || event.pointerType === "touch") return;
        if (isHotspotTarget(event.target)) return;
        if (stateRef.current.scale <= MIN_SCALE) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        pointerDown.current = true;
        pointerPanActive.current = false;
        dragStart.current = {
            x: event.clientX,
            y: event.clientY,
            offsetX: stateRef.current.offset.x,
            offsetY: stateRef.current.offset.y
        };
    };
    const handlePointerMove = (event)=>{
        if (event.pointerType === "touch" || !pointerDown.current) return;
        if (stateRef.current.scale <= MIN_SCALE) return;
        const deltaX = event.clientX - dragStart.current.x;
        const deltaY = event.clientY - dragStart.current.y;
        if (!pointerPanActive.current) {
            if (Math.hypot(deltaX, deltaY) < PAN_ACTIVATION_PX) return;
            pointerPanActive.current = true;
            setIsDragging(true);
        }
        applyState((current)=>({
                scale: current.scale,
                offset: {
                    x: dragStart.current.offsetX + deltaX,
                    y: dragStart.current.offsetY + deltaY
                }
            }));
    };
    const handlePointerUp = (event)=>{
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
        pointerPanActive.current = false;
        pointerDown.current = false;
        setIsDragging(false);
    };
    const handleWheel = (event)=>{
        if (!enabled) return;
        event.preventDefault();
        applyState((current)=>({
                scale: clampScale(current.scale - event.deltaY * 0.0015),
                offset: current.offset
            }));
    };
    return {
        viewportRef,
        state,
        isDragging,
        canPan: state.scale > MIN_SCALE,
        touchGestures,
        resetView,
        zoomIn,
        zoomOut,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleWheel
    };
}
function DiagramCanvas({ pumpName, diagram, hotspots, selectedReference, onSelectReference, panZoom, className, style }) {
    const viewWidth = diagram?.width ?? 800;
    const viewHeight = diagram?.height ?? 600;
    const hasDiagramImage = Boolean(diagram?.imageUrl);
    const renderHotspot = (hotspot)=>{
        const { cx, cy } = hotspotCenter(hotspot, viewWidth, viewHeight);
        const selected = selectedReference === hotspot.reference;
        const tapRadius = hasDiagramImage ? 22 : selected ? 28 : 24;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            "data-hotspot": true,
            className: "pointer-events-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: cx,
                    cy: cy,
                    r: tapRadius,
                    fill: selected ? "rgba(255, 210, 0, 0.45)" : "rgba(59, 130, 246, 0.08)",
                    stroke: selected ? "#ffd200" : hasDiagramImage ? "transparent" : "#3b82f6",
                    strokeWidth: selected ? 4 : 3,
                    className: "cursor-pointer touch-manipulation",
                    onClick: ()=>onSelectReference(hotspot.reference),
                    onTouchStart: (event)=>event.stopPropagation(),
                    onPointerDown: (event)=>event.stopPropagation(),
                    role: "button",
                    "aria-label": `Diagram reference ${hotspot.reference}`
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                !hasDiagramImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: cx,
                    y: cy + 6,
                    textAnchor: "middle",
                    fill: "#1a2744",
                    fontSize: "18",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    children: hotspot.reference
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                    lineNumber: 397,
                    columnNumber: 11
                }, this)
            ]
        }, hotspot.id, true, {
            fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
            lineNumber: 381,
            columnNumber: 7
        }, this);
    };
    const diagramContent = hasDiagramImage && diagram ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full min-h-[12rem] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: diagram.imageUrl,
                alt: `${pumpName} exploded diagram`,
                className: "pointer-events-none h-full w-full select-none object-contain object-center",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 417,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${viewWidth} ${viewHeight}`,
                className: "pointer-events-none absolute inset-0 h-full w-full",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": true,
                children: hotspots.map(renderHotspot)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
        lineNumber: 415,
        columnNumber: 7
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${viewWidth} ${viewHeight}`,
        className: "h-full w-full min-h-[12rem]",
        "aria-label": "Pump schematic diagram",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: viewWidth,
                height: viewHeight,
                fill: "#f8fafc",
                rx: "8"
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "250",
                width: "720",
                height: "80",
                rx: "12",
                fill: "#cbd5e1",
                stroke: "#64748b",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 435,
                columnNumber: 9
            }, this),
            hotspots.map(renderHotspot)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
        lineNumber: 433,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: panZoom.viewportRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden bg-white", className),
        style: {
            touchAction: panZoom.touchGestures ? "none" : "pan-y pinch-zoom",
            ...style
        },
        onWheel: panZoom.handleWheel,
        onPointerDown: panZoom.handlePointerDown,
        onPointerMove: panZoom.handlePointerMove,
        onPointerUp: panZoom.handlePointerUp,
        onPointerLeave: panZoom.handlePointerUp,
        onPointerCancel: panZoom.handlePointerUp,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full items-center justify-center",
                style: {
                    transform: `translate3d(${panZoom.state.offset.x}px, ${panZoom.state.offset.y}px, 0) scale(${panZoom.state.scale})`,
                    transformOrigin: "center center",
                    willChange: panZoom.isDragging ? "transform" : undefined
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full",
                    children: diagramContent
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                    lineNumber: 464,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 456,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
            lineNumber: 455,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
        lineNumber: 441,
        columnNumber: 5
    }, this);
}
function ZoomControls({ onZoomIn, onZoomOut, onReset, compact = false }) {
    const buttons = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"],
            label: "Zoom in",
            action: onZoomIn
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"],
            label: "Zoom out",
            action: onZoomOut
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
            label: "Reset view",
            action: onReset
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", compact ? "grid-cols-3" : "grid-cols-3 sm:grid-cols-3"),
        children: buttons.map(({ icon: Icon, label, action })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: action,
                className: "flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium",
                "aria-label": label,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 498,
                        columnNumber: 11
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 499,
                        columnNumber: 24
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
function PumpDiagram({ pumpName, diagram, hotspots, selectedReference, onSelectReference, overlay }) {
    const [expandedOpen, setExpandedOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inlinePanZoom = usePanZoom(true, {
        touchGestures: false
    });
    const expandedPanZoom = usePanZoom(expandedOpen, {
        touchGestures: true
    });
    const { resetView: resetInlineView } = inlinePanZoom;
    const { resetView: resetExpandedView } = expandedPanZoom;
    const viewWidth = diagram?.width ?? 800;
    const viewHeight = diagram?.height ?? 600;
    const aspectRatio = `${viewWidth} / ${viewHeight}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resetInlineView();
    }, [
        diagram?.imageUrl,
        resetInlineView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!expandedOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = previousOverflow;
        };
    }, [
        expandedOpen
    ]);
    const openExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        resetExpandedView();
        setExpandedOpen(true);
    }, [
        resetExpandedView
    ]);
    const closeExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setExpandedOpen(false);
        resetExpandedView();
    }, [
        resetExpandedView
    ]);
    const expandedOverlay = mounted && expandedOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[200] flex flex-col bg-white",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": `${pumpName} diagram expanded view`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--border-color)] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-base font-bold",
                                children: [
                                    pumpName,
                                    " diagram"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 564,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: "Pinch with two fingers to zoom · drag with one finger to move (when zoomed)"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 565,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 563,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: closeExpanded,
                        className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)]",
                        "aria-label": "Close expanded diagram",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                            lineNumber: 575,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 569,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 562,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagramCanvas, {
                    pumpName: pumpName,
                    diagram: diagram,
                    hotspots: hotspots,
                    selectedReference: selectedReference,
                    onSelectReference: onSelectReference,
                    panZoom: expandedPanZoom,
                    className: "h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                    lineNumber: 580,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 579,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t border-[var(--border-color)] p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ZoomControls, {
                    onZoomIn: expandedPanZoom.zoomIn,
                    onZoomOut: expandedPanZoom.zoomOut,
                    onReset: expandedPanZoom.resetView,
                    compact: true
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                    lineNumber: 592,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 591,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
        lineNumber: 556,
        columnNumber: 11
    }, this), document.body) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-bold",
                children: [
                    pumpName,
                    " Diagram"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 606,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative isolate overflow-hidden rounded-2xl border border-[var(--border-color)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagramCanvas, {
                        pumpName: pumpName,
                        diagram: diagram,
                        hotspots: hotspots,
                        selectedReference: selectedReference,
                        onSelectReference: onSelectReference,
                        panZoom: inlinePanZoom,
                        className: "w-full max-h-[36rem]",
                        style: {
                            aspectRatio,
                            cursor: inlinePanZoom.canPan ? inlinePanZoom.isDragging ? "grabbing" : "grab" : undefined
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this),
                    overlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-2 bottom-2 z-20 sm:inset-x-auto sm:right-3 sm:bottom-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-auto mx-auto w-full max-w-[18rem] sm:mx-0",
                            children: overlay
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                            lineNumber: 628,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 627,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: inlinePanZoom.zoomIn,
                        className: "flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium",
                        "aria-label": "Zoom in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 640,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Zoom in"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: inlinePanZoom.zoomOut,
                        className: "flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium",
                        "aria-label": "Zoom out",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Zoom out"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 650,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: inlinePanZoom.resetView,
                        className: "flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium",
                        "aria-label": "Reset view",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 658,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Reset view"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 659,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openExpanded,
                        className: "col-span-2 flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-base font-medium sm:col-span-1",
                        "aria-label": "Expand diagram",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 667,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Enlarge"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            expandedOverlay
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpDiagram.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/pumps/PumpImage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PumpImage",
    ()=>PumpImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pump$2d$families$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pump-families.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const sizeClasses = {
    sm: {
        box: "h-14 w-14",
        image: "p-1"
    },
    md: {
        box: "h-24 w-24",
        image: "p-2"
    },
    lg: {
        box: "h-32 w-full",
        image: "p-4"
    },
    hero: {
        box: "h-48 w-full",
        image: "p-6"
    }
};
function PumpImage({ slug, name, imageUrl, familySlug, className, imageClassName, size = "md", priority = false }) {
    const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPumpImageUrl"])(slug, imageUrl, familySlug);
    const sizing = sizeClasses[size];
    const familyVisual = familySlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pump$2d$families$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPumpFamilyVisual"])(familySlug) : undefined;
    if (!src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5", sizing.box, className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                className: "h-1/2 w-1/2 text-blue opacity-60",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/pumps/PumpImage.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pumps/PumpImage.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-xl", familyVisual?.imageBgClass ?? "bg-white", sizing.box, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: `${name} pump`,
            fill: true,
            priority: priority,
            unoptimized: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("object-contain", sizing.image, imageClassName),
            sizes: size === "hero" ? "100vw" : size === "lg" ? "400px" : "96px"
        }, void 0, false, {
            fileName: "[project]/src/components/pumps/PumpImage.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pumps/PumpImage.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/pumps/PumpCurve.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PumpCurve",
    ()=>PumpCurve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-ssr] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
async function tryLockLandscape() {
    try {
        const orientation = screen.orientation;
        await orientation.lock?.("landscape");
    } catch  {
    // Not supported or requires user gesture — rotation hint still shown.
    }
}
async function tryUnlockOrientation() {
    try {
        await screen.orientation.unlock?.();
    } catch  {
    // Ignore unsupported browsers.
    }
}
function PumpCurve({ pumpName, imageUrl, seriesLabel, seriesName, isDocument = false }) {
    const [landscapeOpen, setLandscapeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const closeLandscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (document.fullscreenElement) {
            await document.exitFullscreen().catch(()=>undefined);
        }
        await tryUnlockOrientation();
        setLandscapeOpen(false);
    }, []);
    const openLandscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLandscapeOpen(true);
        requestAnimationFrame(async ()=>{
            const overlay = document.getElementById("pump-curve-landscape");
            if (overlay?.requestFullscreen) {
                try {
                    await overlay.requestFullscreen();
                } catch  {
                // Fullscreen optional — overlay still works.
                }
            }
            await tryLockLandscape();
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!landscapeOpen) return;
        const onFullscreenChange = ()=>{
            if (!document.fullscreenElement) {
                void tryUnlockOrientation();
                setLandscapeOpen(false);
            }
        };
        document.addEventListener("fullscreenchange", onFullscreenChange);
        return ()=>document.removeEventListener("fullscreenchange", onFullscreenChange);
    }, [
        landscapeOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!landscapeOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = previousOverflow;
        };
    }, [
        landscapeOpen
    ]);
    const renderCurveImage = (className)=>// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: imageUrl,
            alt: `${pumpName} performance curve`,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none max-h-full max-w-full select-none object-contain", className),
            draggable: false
        }, void 0, false, {
            fileName: "[project]/src/features/pumps/PumpCurve.tsx",
            lineNumber: 99,
            columnNumber: 5
        }, this);
    const renderDocumentPreview = (className)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center", className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-muted",
                    children: [
                        "Performance curves for ",
                        seriesName ?? "this pump range",
                        " are in the official datasheet PDF."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                    lineNumber: 112,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "secondary",
                    onClick: ()=>window.open(imageUrl, "_blank", "noopener,noreferrer"),
                    className: "min-h-[3.5rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                            lineNumber: 121,
                            columnNumber: 9
                        }, this),
                        "Open Performance Datasheet"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                    lineNumber: 115,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/pumps/PumpCurve.tsx",
            lineNumber: 111,
            columnNumber: 5
        }, this);
    const renderCurveContent = (className)=>isDocument ? renderDocumentPreview(className) : renderCurveImage(className);
    const landscapeOverlay = mounted && landscapeOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "pump-curve-landscape",
        className: "fixed inset-0 z-[200] flex flex-col bg-white",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": `${pumpName} performance curve landscape view`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--border-color)] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-base font-bold",
                                children: [
                                    pumpName,
                                    " curve"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                                lineNumber: 142,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-sm text-muted",
                                children: seriesLabel
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                                lineNumber: 143,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 141,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>void closeLandscape(),
                        className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)]",
                        "aria-label": "Close landscape view",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                            lineNumber: 151,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 145,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "shrink-0 px-4 py-2 text-center text-sm text-muted md:hidden",
                children: "Rotate your phone to landscape — the chart stays fixed in place."
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1 items-center justify-center p-4 sm:p-6",
                children: renderCurveContent()
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
        lineNumber: 133,
        columnNumber: 11
    }, this), document.body) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-bold",
                        children: [
                            pumpName,
                            " Performance Curve"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-base text-muted",
                        children: [
                            "Your curve: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[var(--foreground)]",
                                children: seriesLabel
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                                lineNumber: 172,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white", "aspect-square max-h-[min(80vw,24rem)] sm:max-h-[28rem]"),
                style: {
                    touchAction: "manipulation"
                },
                children: renderCurveContent("h-full w-full")
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted",
                children: isDocument ? `Follow the ${seriesLabel} curve line in the datasheet for this pump.` : seriesName === "XJ Series" || seriesName === "XP Series" ? "Total head (m) vs flow (lpm). Lines show performance at different suction lift heights for this pump." : seriesName === "HP Series" ? `Total head (m) vs flow (lpm). HP45, HP65 and HP85 curves are shown — follow the line labelled ${seriesLabel} for this pump.` : seriesName === "HM Series" ? `Total head (m) vs flow (lpm). HM60/HM90 and HM160/HM270 curves are shown — follow the line labelled ${seriesLabel} for this pump.` : seriesName === "Shallow/Deep Well Jets" ? `Total head (m) vs flow (lpm). Open the datasheet and follow the ${seriesLabel} curve for this pump.` : `Total head (m) vs flow (lpm). Both HS50 and HS60 curves are shown — follow the line labelled ${seriesLabel} for this pump.`
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            !isDocument && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "secondary",
                        fullWidth: true,
                        onClick: ()=>void openLandscape(),
                        className: "min-h-[3.5rem] sm:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                className: "h-5 w-5 rotate-90"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            "Landscape View"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "ghost",
                        fullWidth: true,
                        onClick: ()=>void openLandscape(),
                        className: "hidden min-h-[3.5rem] sm:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            "Open Full Chart View"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            isDocument && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "secondary",
                fullWidth: true,
                onClick: ()=>window.open(imageUrl, "_blank", "noopener,noreferrer"),
                className: "min-h-[3.5rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    "Open Performance Datasheet"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpCurve.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this),
            landscapeOverlay
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpCurve.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/repositories/savedRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "savedRepository",
    ()=>savedRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
;
;
const savedRepository = {
    async getAll () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().savedItems.orderBy("savedAt").reverse().toArray();
    },
    async getByEntity (entityType, entityId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().savedItems.filter((s)=>s.entityType === entityType && s.entityId === entityId).first();
    },
    async isSaved (entityType, entityId) {
        const item = await this.getByEntity(entityType, entityId);
        return !!item;
    },
    async save (entityType, entityId) {
        const existing = await this.getByEntity(entityType, entityId);
        if (existing) return existing;
        const item = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createId"])(),
            entityType,
            entityId,
            savedAt: Date.now()
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().savedItems.add(item);
        return item;
    },
    async remove (entityType, entityId) {
        const item = await this.getByEntity(entityType, entityId);
        if (item) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().savedItems.delete(item.id);
    },
    async clearAll () {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().savedItems.clear();
    }
};
}),
"[project]/src/features/pumps/ReferencePartPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReferencePartPanel",
    ()=>ReferencePartPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/savedRepository.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ReferencePartPanel({ reference, pumpName, parts, onClose, onCopy, copied }) {
    const currentParts = parts.filter((option)=>option.isCurrentModel);
    const otherParts = parts.filter((option)=>!option.isCurrentModel);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/95 shadow-md backdrop-blur-sm",
        role: "dialog",
        "aria-label": `Reference ${reference} parts`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 border-b border-[var(--border-color)] px-2.5 py-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex min-w-[1.5rem] items-center justify-center rounded bg-accent px-1.5 py-0.5 text-xs font-bold text-navy",
                                children: reference
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-sm font-semibold",
                                children: [
                                    "Ref ",
                                    reference
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border-color)]",
                        "aria-label": "Close reference panel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-[9.5rem] overflow-y-auto overscroll-contain px-2.5 py-2",
                children: parts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-2 text-center text-xs text-muted",
                    children: "No parts in the catalogue for this reference yet."
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        currentParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.65rem] font-semibold uppercase tracking-wide text-muted",
                                    children: [
                                        "For ",
                                        pumpName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this),
                                currentParts.map(({ part, compatibility })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PartRow, {
                                        partNumber: part.partNumber,
                                        description: part.description,
                                        quantity: part.quantity,
                                        note: compatibility.compatibilityNotes,
                                        copied: copied,
                                        onCopy: onCopy,
                                        partId: part.id
                                    }, part.id, false, {
                                        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this),
                        otherParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.65rem] font-semibold uppercase tracking-wide text-muted",
                                    children: "Other models"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this),
                                otherParts.map(({ part, compatibility })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PartRow, {
                                        partNumber: part.partNumber,
                                        description: part.description,
                                        quantity: part.quantity,
                                        note: compatibility.compatibilityNotes,
                                        copied: copied,
                                        onCopy: onCopy,
                                        partId: part.id,
                                        compact: true
                                    }, part.id, false, {
                                        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function PartRow({ partNumber, description, quantity, note, copied, onCopy, partId, compact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border border-[var(--border-color)] bg-[var(--background)]/60 px-2 py-1.5", compact && "opacity-90"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAVEY_BASE"]}/parts/${partId}`,
                    className: "min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold leading-tight text-blue",
                            children: partNumber
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 line-clamp-2 text-xs leading-snug",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        note && !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 line-clamp-1 text-[0.65rem] text-muted",
                            children: note
                        }, void 0, false, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 138,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 flex-col items-end gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[0.65rem] tabular-nums text-muted",
                            children: [
                                "×",
                                quantity > 0 ? quantity : "—"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAction, {
                                    label: copied === partNumber ? "Copied" : "Copy part number",
                                    onClick: ()=>onCopy(partNumber),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAction, {
                                    label: "Save part",
                                    onClick: ()=>void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savedRepository"].save("part", partId),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function IconAction({ label, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: "flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--card-bg)]",
        "aria-label": label,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/features/pumps/ReferencePartPanel.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/parts/PartsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartsList",
    ()=>PartsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/savedRepository.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function compareDiagramRefs(a, b) {
    const parse = (value)=>{
        const match = value.match(/^(\d+)([a-z]*)$/i);
        if (!match) return [
            9999,
            value
        ];
        return [
            Number(match[1]),
            match[2] ?? ""
        ];
    };
    const refA = a && a !== "—" ? a : null;
    const refB = b && b !== "—" ? b : null;
    if (!refA && !refB) return 0;
    if (!refA) return 1;
    if (!refB) return -1;
    const [numA, suffixA] = parse(refA);
    const [numB, suffixB] = parse(refB);
    if (numA !== numB) return numA - numB;
    return suffixA.localeCompare(suffixB);
}
function sortParts(parts, getCompatibility) {
    return [
        ...parts
    ].sort((left, right)=>{
        const refCompare = compareDiagramRefs(getCompatibility(left)?.diagramReference, getCompatibility(right)?.diagramReference);
        if (refCompare !== 0) return refCompare;
        return left.partNumber.localeCompare(right.partNumber);
    });
}
function ActionButton({ label, onClick, children, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": label,
        onClick: (event)=>{
            event.preventDefault();
            event.stopPropagation();
            onClick();
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors", "hover:bg-black/[0.05] hover:text-[var(--foreground)]", active && "bg-accent/20 text-[var(--foreground)]"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/features/parts/PartsList.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function PartsList({ parts, getCompatibility, selectedReference, onCopy, onFindOnDiagram, copied }) {
    const sortedParts = sortParts(parts, getCompatibility);
    if (sortedParts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "rounded-xl border border-dashed border-[var(--border-color)] px-4 py-8 text-center text-base text-muted",
            children: "No parts match your search."
        }, void 0, false, {
            fileName: "[project]/src/features/parts/PartsList.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden border-b border-[var(--border-color)] bg-navy/[0.04] px-3 py-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted sm:grid sm:grid-cols-[2.75rem_6.5rem_minmax(0,1fr)_2.25rem_6.75rem] sm:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-center",
                        children: "Ref"
                    }, void 0, false, {
                        fileName: "[project]/src/features/parts/PartsList.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Part No."
                    }, void 0, false, {
                        fileName: "[project]/src/features/parts/PartsList.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/src/features/parts/PartsList.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-center",
                        children: "Qty"
                    }, void 0, false, {
                        fileName: "[project]/src/features/parts/PartsList.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Actions"
                    }, void 0, false, {
                        fileName: "[project]/src/features/parts/PartsList.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/parts/PartsList.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "divide-y divide-[var(--border-color)]",
                children: sortedParts.map((part)=>{
                    const compatibility = getCompatibility(part);
                    const reference = compatibility?.diagramReference;
                    const showRef = reference && reference !== "—";
                    const isHighlighted = showRef && selectedReference === reference;
                    const spec = compatibility?.compatibilityNotes ?? (compatibility?.modelId ? undefined : part.notes);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("transition-colors", isHighlighted ? "bg-accent/25" : "hover:bg-black/[0.015]"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2.5 px-3 py-2 sm:grid sm:grid-cols-[2.75rem_6.5rem_minmax(0,1fr)_2.25rem_6.75rem] sm:items-center sm:gap-3 sm:py-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-10 shrink-0 justify-center pt-0.5 sm:w-auto sm:pt-0",
                                    children: showRef ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-w-[1.75rem] items-center justify-center rounded px-1 py-0.5 text-xs font-bold tabular-nums sm:text-sm", isHighlighted ? "bg-accent text-navy" : "bg-[var(--background)] text-[var(--foreground)] ring-1 ring-[var(--border-color)]"),
                                        children: reference
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/parts/PartsList.tsx",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted sm:text-sm",
                                        children: "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/parts/PartsList.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/parts/PartsList.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAVEY_BASE"]}/parts/${part.id}`,
                                    className: "min-w-0 flex-1 sm:contents",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-sm font-bold text-blue sm:col-start-2",
                                            children: part.partNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 sm:col-start-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "line-clamp-2 text-sm leading-snug text-[var(--foreground)] sm:truncate sm:whitespace-nowrap",
                                                    children: part.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/parts/PartsList.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                spec && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0.5 truncate text-xs text-muted",
                                                    children: spec
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/parts/PartsList.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/parts/PartsList.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden text-center text-sm tabular-nums text-muted sm:col-start-4 sm:block",
                                    children: part.quantity > 0 ? part.quantity : "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/parts/PartsList.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex shrink-0 items-center gap-0 sm:col-start-5 sm:justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-1 text-xs tabular-nums text-muted sm:hidden",
                                            children: [
                                                "×",
                                                part.quantity > 0 ? part.quantity : "—"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                            label: copied === part.partNumber ? "Copied" : `Copy ${part.partNumber}`,
                                            active: copied === part.partNumber,
                                            onClick: ()=>onCopy(part.partNumber),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/parts/PartsList.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        showRef && onFindOnDiagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                            label: `Find reference ${reference} on diagram`,
                                            onClick: ()=>onFindOnDiagram(reference),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/parts/PartsList.tsx",
                                                lineNumber: 177,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 173,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                            label: `Save ${part.partNumber}`,
                                            onClick: ()=>void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savedRepository"].save("part", part.id),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/parts/PartsList.tsx",
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAVEY_BASE"]}/parts/${part.id}`,
                                            className: "flex h-8 w-8 items-center justify-center rounded-md text-muted hover:bg-black/[0.05] hover:text-[var(--foreground)]",
                                            "aria-label": `View ${part.partNumber} details`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/parts/PartsList.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/parts/PartsList.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/parts/PartsList.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/parts/PartsList.tsx",
                            lineNumber: 129,
                            columnNumber: 15
                        }, this)
                    }, part.id, false, {
                        fileName: "[project]/src/features/parts/PartsList.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/features/parts/PartsList.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/parts/PartsList.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/repositories/noteRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noteRepository",
    ()=>noteRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
;
;
const noteRepository = {
    async getForEntity (entityType, entityId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().userNotes.filter((n)=>n.attachedEntityType === entityType && n.attachedEntityId === entityId).reverse().sortBy("updatedAt");
    },
    async getById (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().userNotes.get(id);
    },
    async create (data) {
        const now = Date.now();
        const note = {
            ...data,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createId"])(),
            createdAt: now,
            updatedAt: now
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().userNotes.add(note);
        return note;
    },
    async update (id, data) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().userNotes.update(id, {
            ...data,
            updatedAt: Date.now()
        });
    },
    async delete (id) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().userNotes.delete(id);
    }
};
}),
"[project]/src/hooks/useNotesForEntity.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotesForEntity",
    ()=>useNotesForEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$noteRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/noteRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function useNotesForEntity(entityType, entityId) {
    const notes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>entityType && entityId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$noteRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noteRepository"].getForEntity(entityType, entityId) : Promise.resolve([]), [
        entityType,
        entityId
    ], undefined);
    return {
        notes: notes ?? [],
        loading: notes === undefined,
        isEmpty: notes !== undefined && notes.length === 0
    };
}
}),
"[project]/src/features/notes/NotesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotesPanel",
    ()=>NotesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$noteRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/noteRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotesForEntity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNotesForEntity.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function NotesPanel({ entityType, entityId }) {
    const { notes, loading, isEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNotesForEntity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotesForEntity"])(entityType, entityId);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const resetForm = ()=>{
        setTitle("");
        setBody("");
        setEditingId(null);
        setShowForm(false);
        setError(null);
    };
    const handleSave = async ()=>{
        if (!body.trim()) {
            setError("Please enter a note.");
            return;
        }
        setSaving(true);
        setError(null);
        try {
            const noteTitle = title.trim() || "Note";
            if (editingId) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$noteRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noteRepository"].update(editingId, {
                    title: noteTitle,
                    body: body.trim()
                });
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$noteRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noteRepository"].create({
                    title: noteTitle,
                    body: body.trim(),
                    attachedEntityType: entityType,
                    attachedEntityId: entityId
                });
            }
            resetForm();
        } catch  {
            setError("Could not save note. Please try again.");
        } finally{
            setSaving(false);
        }
    };
    const handleEdit = (note)=>{
        setEditingId(note.id);
        setTitle(note.title);
        setBody(note.body);
        setShowForm(true);
    };
    const handleDelete = async (id)=>{
        if (deleteConfirm !== id) {
            setDeleteConfirm(id);
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$noteRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noteRepository"].delete(id);
        setDeleteConfirm(null);
        if (editingId === id) resetForm();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                label: "Loading notes…"
            }, void 0, false, {
                fileName: "[project]/src/features/notes/NotesPanel.tsx",
                lineNumber: 79,
                columnNumber: 19
            }, this),
            !loading && isEmpty && !showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                message: "No notes added yet."
            }, void 0, false, {
                fileName: "[project]/src/features/notes/NotesPanel.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            !showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                fullWidth: true,
                onClick: ()=>setShowForm(true),
                children: "Add Note"
            }, void 0, false, {
                fileName: "[project]/src/features/notes/NotesPanel.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold",
                        children: editingId ? "Edit Note" : "Add Note"
                    }, void 0, false, {
                        fileName: "[project]/src/features/notes/NotesPanel.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Title (optional)",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full min-h-[3.25rem] rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 text-base"
                    }, void 0, false, {
                        fileName: "[project]/src/features/notes/NotesPanel.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Write your note here…",
                        value: body,
                        onChange: (e)=>setBody(e.target.value),
                        rows: 5,
                        className: "w-full rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-base resize-none"
                    }, void 0, false, {
                        fileName: "[project]/src/features/notes/NotesPanel.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base text-danger",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/features/notes/NotesPanel.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        fullWidth: true,
                        onClick: handleSave,
                        disabled: saving,
                        children: saving ? "Saving…" : "Save Note"
                    }, void 0, false, {
                        fileName: "[project]/src/features/notes/NotesPanel.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        fullWidth: true,
                        onClick: resetForm,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/features/notes/NotesPanel.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/notes/NotesPanel.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            !loading && notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold",
                                    children: note.title
                                }, void 0, false, {
                                    fileName: "[project]/src/features/notes/NotesPanel.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 whitespace-pre-wrap text-base",
                                    children: note.body
                                }, void 0, false, {
                                    fileName: "[project]/src/features/notes/NotesPanel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-muted",
                                    children: [
                                        "Updated ",
                                        new Date(note.updatedAt).toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/notes/NotesPanel.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/notes/NotesPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            fullWidth: true,
                            onClick: ()=>handleEdit(note),
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/src/features/notes/NotesPanel.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: deleteConfirm === note.id ? "danger" : "ghost",
                            fullWidth: true,
                            onClick: ()=>handleDelete(note.id),
                            children: deleteConfirm === note.id ? "Confirm Delete" : "Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/features/notes/NotesPanel.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    ]
                }, note.id, true, {
                    fileName: "[project]/src/features/notes/NotesPanel.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/notes/NotesPanel.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/repositories/pumpRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pumpRepository",
    ()=>pumpRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-ssr] (ecmascript)");
;
const pumpRepository = {
    async getAllModels () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.toArray();
    },
    async getModelById (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.get(id);
    },
    async getModelBySlug (slug) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.where("slug").equals(slug).first();
    },
    async getModelDetail (id) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])();
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().pumpFamilies.get(id);
    },
    async getModelsByFamily (familyId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().pumpModels.where("familyId").equals(familyId).toArray();
    },
    async getDiagramForFamily (familyId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().diagrams.where("familyId").equals(familyId).first();
    },
    async getHotspotsForDiagram (diagramId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().diagramHotspots.where("diagramId").equals(diagramId).toArray();
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
}),
"[project]/src/hooks/usePumpModel.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePumpModel",
    ()=>usePumpModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/pumpRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function usePumpModel(modelId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>modelId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pumpRepository"].getModelDetail(modelId) : Promise.resolve(undefined), [
        modelId
    ], undefined);
}
}),
"[project]/src/data/repositories/partRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "partRepository",
    ()=>partRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-ssr] (ecmascript)");
;
const partRepository = {
    async getAll () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().parts.toArray();
    },
    async getById (id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().parts.get(id);
    },
    async getByPartNumber (partNumber) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().parts.where("partNumber").equals(partNumber).first();
    },
    async getCompatibilitiesForPart (partId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().partCompatibilities.where("partId").equals(partId).toArray();
    },
    async getCompatibilitiesForModel (modelId, familyId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().partCompatibilities.filter((c)=>c.familyId === familyId && (c.modelId === modelId || c.modelId === undefined)).toArray();
    },
    async getPartsForModel (modelId, familyId) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])();
        const compatibilities = await db.partCompatibilities.filter((c)=>c.modelId === modelId || !c.modelId && c.familyId === familyId).toArray();
        const partIds = [
            ...new Set(compatibilities.map((c)=>c.partId))
        ];
        const parts = await db.parts.bulkGet(partIds);
        return parts.filter((p)=>p !== undefined);
    },
    async getPartDetail (id) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])();
        const part = await db.parts.get(id);
        if (!part) return undefined;
        const brand = await db.brands.get(part.brandId);
        if (!brand) return undefined;
        const compatibilities = await db.partCompatibilities.where("partId").equals(id).toArray();
        const familyIds = [
            ...new Set(compatibilities.map((c)=>c.familyId))
        ];
        const modelIds = [
            ...new Set(compatibilities.filter((c)=>c.modelId).map((c)=>c.modelId))
        ];
        const families = (await db.pumpFamilies.bulkGet(familyIds)).filter(Boolean);
        const pumpModels = (await db.pumpModels.bulkGet(modelIds)).filter(Boolean);
        return {
            ...part,
            brand,
            compatibilities,
            families: families,
            pumpModels: pumpModels
        };
    },
    async getPartsByHotspot (partIds) {
        const parts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().parts.bulkGet(partIds);
        return parts.filter((p)=>p !== undefined);
    }
};
}),
"[project]/src/hooks/usePartsForModel.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePartsForModel",
    ()=>usePartsForModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/partRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
function usePartsForModel(modelId, familyId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>modelId && familyId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partRepository"].getPartsForModel(modelId, familyId) : Promise.resolve([]), [
        modelId,
        familyId
    ], []);
}
}),
"[project]/src/hooks/useSavedItems.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsSaved",
    ()=>useIsSaved,
    "useSavedItems",
    ()=>useSavedItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/savedRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/pumpRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/partRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
function useSavedItems() {
    const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savedRepository"].getAll(), [], undefined);
    const enriched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(async ()=>{
        const items = saved ?? [];
        const pumps = [];
        const parts = [];
        for (const item of items){
            if (item.entityType === "pumpModel") {
                const pump = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pumpRepository"].getModelDetail(item.entityId);
                if (pump) pumps.push({
                    saved: item,
                    pump
                });
            } else {
                const part = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partRepository"].getPartDetail(item.entityId);
                if (part) parts.push({
                    saved: item,
                    part
                });
            }
        }
        return {
            pumps,
            parts
        };
    }, [
        saved?.length,
        saved?.map((s)=>s.id).join(",")
    ], {
        pumps: [],
        parts: []
    });
    return {
        loading: saved === undefined,
        pumps: enriched?.pumps ?? [],
        parts: enriched?.parts ?? []
    };
}
function useIsSaved(entityType, entityId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savedRepository"].isSaved(entityType, entityId), [
        entityType,
        entityId
    ], false);
}
}),
"[project]/src/data/repositories/recentRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recentRepository",
    ()=>recentRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/database/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
;
;
const MAX_RECENT_PUMPS = 20;
const MAX_RECENT_PARTS = 30;
const recentRepository = {
    async getAll () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().recentItems.orderBy("viewedAt").reverse().toArray();
    },
    async getPumps (limit = MAX_RECENT_PUMPS) {
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().recentItems.filter((r)=>r.entityType === "pumpModel").toArray();
        return items.sort((a, b)=>b.viewedAt - a.viewedAt).slice(0, limit);
    },
    async getParts (limit = MAX_RECENT_PARTS) {
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().recentItems.filter((r)=>r.entityType === "part").toArray();
        return items.sort((a, b)=>b.viewedAt - a.viewedAt).slice(0, limit);
    },
    async trackView (entityType, entityId) {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])();
        const existing = await db.recentItems.filter((r)=>r.entityType === entityType && r.entityId === entityId).first();
        if (existing) {
            const latest = await db.recentItems.orderBy("viewedAt").last();
            const nextViewedAt = Math.max(Date.now(), existing.viewedAt + 1, (latest?.viewedAt ?? 0) + 1);
            await db.recentItems.update(existing.id, {
                viewedAt: nextViewedAt
            });
        } else {
            await db.recentItems.add({
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createId"])(),
                entityType,
                entityId,
                viewedAt: Date.now()
            });
        }
        await this.trim(entityType);
    },
    async trim (entityType) {
        const max = entityType === "pumpModel" ? MAX_RECENT_PUMPS : MAX_RECENT_PARTS;
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().recentItems.filter((r)=>r.entityType === entityType).toArray();
        const sorted = items.sort((a, b)=>b.viewedAt - a.viewedAt);
        if (sorted.length > max) {
            const toRemove = sorted.slice(max);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().recentItems.bulkDelete(toRemove.map((i)=>i.id));
        }
    },
    async clearAll () {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$database$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDb"])().recentItems.clear();
    }
};
}),
"[project]/src/features/pumps/PumpDetailPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PumpDetailPage",
    ()=>PumpDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-ssr] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ActionTile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FilterToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/FilterToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SearchInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pumps$2f$PumpDiagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pumps/PumpDiagram.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pumps$2f$PumpImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pumps/PumpImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pumps$2f$PumpCurve$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pumps/PumpCurve.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pumps$2f$ReferencePartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pumps/ReferencePartPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$parts$2f$PartsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/parts/PartsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$notes$2f$NotesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/notes/NotesPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePumpModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePumpModel.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePartsForModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePartsForModel.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSavedItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSavedItems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useDatabase.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/pumpRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/partRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/savedRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$recentRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/repositories/recentRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/brands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/diagrams/hp-series-diagram.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pumps.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function PumpDetailPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const slug = params.slug;
    const modelBySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pumpRepository"].getModelBySlug(slug), [
        slug
    ], undefined);
    const modelId = modelBySlug?.id;
    const pump = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePumpModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePumpModel"])(modelId);
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePartsForModel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePartsForModel"])(modelId, pump?.familyId);
    const isSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSavedItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsSaved"])("pumpModel", modelId ?? "");
    const { copied, copy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCopyFeedback"])();
    const initialTab = searchParams.get("tab");
    const initialRef = searchParams.get("ref") ?? undefined;
    const pumpCurve = pump ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pumps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPumpCurveInfo"])(pump.slug, pump.curveImageUrl, pump.curveLabel, pump.family.slug) : undefined;
    const [section, setSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTab && [
        "diagram",
        "parts",
        "notes",
        "curve"
    ].includes(initialTab) ? initialTab : null);
    const [selectedRef, setSelectedRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialRef);
    const [sheetOpen, setSheetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!initialRef);
    const [partsFilter, setPartsFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [partsSearch, setPartsSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const hotspots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(async ()=>{
        if (!pump) return [];
        const diagram = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pumpRepository"].getDiagramForFamily(pump.familyId);
        if (!diagram) return [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pumpRepository"].getHotspotsForDiagram(diagram.id);
    }, [
        pump?.familyId
    ], []);
    const diagram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>pump ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$pumpRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pumpRepository"].getDiagramForFamily(pump.familyId) : Promise.resolve(undefined), [
        pump?.familyId
    ], undefined);
    const compatibilities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDatabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDbLiveQuery"])(()=>modelId && pump?.familyId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partRepository"].getCompatibilitiesForModel(modelId, pump.familyId) : Promise.resolve([]), [
        modelId,
        pump?.familyId
    ], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (modelId) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$recentRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recentRepository"].trackView("pumpModel", modelId);
    }, [
        modelId
    ]);
    const handleSelectReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((reference)=>{
        setSelectedRef(reference);
        setSheetOpen(true);
    }, []);
    const [hotspotParts, setHotspotParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadHotspotParts() {
            if (!selectedRef || !pump || !modelId) {
                setHotspotParts([]);
                return;
            }
            const options = [];
            const seen = new Set();
            const addOption = (part, compat)=>{
                if (seen.has(part.id)) return;
                seen.add(part.id);
                options.push({
                    part,
                    compatibility: compat,
                    isCurrentModel: !compat.modelId || compat.modelId === pump.id
                });
            };
            for (const compat of compatibilities ?? []){
                if (compat.diagramReference !== selectedRef) continue;
                const part = (parts ?? []).find((entry)=>entry.id === compat.partId) ?? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partRepository"].getById(compat.partId);
                if (part) addOption(part, compat);
            }
            const hotspot = hotspots?.find((entry)=>entry.reference === selectedRef);
            if (hotspot?.partIds.length) {
                const linkedParts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partRepository"].getPartsByHotspot(hotspot.partIds);
                for (const part of linkedParts){
                    const compat = (compatibilities ?? []).find((entry)=>entry.partId === part.id) ?? {
                        id: `compat-hotspot-${part.id}`,
                        partId: part.id,
                        familyId: pump.familyId,
                        diagramReference: selectedRef
                    };
                    addOption(part, compat);
                }
            }
            const catalogueHotspot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$diagrams$2f$hp$2d$series$2d$diagram$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCatalogueHotspotsForFamily"])(pump.family.slug).find((entry)=>entry.reference === selectedRef);
            for (const partNumber of catalogueHotspot?.partNumbers ?? []){
                const part = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$partRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partRepository"].getByPartNumber(partNumber);
                if (!part) continue;
                const compat = (compatibilities ?? []).find((entry)=>entry.partId === part.id) ?? {
                    id: `compat-catalogue-${part.id}`,
                    partId: part.id,
                    familyId: pump.familyId,
                    diagramReference: selectedRef
                };
                addOption(part, compat);
            }
            setHotspotParts(options.sort((left, right)=>{
                if (left.isCurrentModel && !right.isCurrentModel) return -1;
                if (!left.isCurrentModel && right.isCurrentModel) return 1;
                return left.part.partNumber.localeCompare(right.part.partNumber);
            }));
        }
        void loadHotspotParts();
    }, [
        selectedRef,
        hotspots,
        compatibilities,
        pump,
        parts,
        modelId
    ]);
    const filteredParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!parts) return [];
        let filtered = parts;
        if (partsFilter === "specific") {
            filtered = filtered.filter((p)=>{
                const compat = (compatibilities ?? []).find((c)=>c.partId === p.id);
                return compat?.modelId === modelId;
            });
        } else if (partsFilter === "kits") {
            filtered = filtered.filter((p)=>p.partCategory.toLowerCase().includes("seal") || p.partCategory.toLowerCase().includes("kit"));
        }
        if (partsSearch.trim()) {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSearchText"])(partsSearch);
            filtered = filtered.filter((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSearchText"])(p.partNumber).includes(q) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSearchText"])(p.description).includes(q));
        }
        return filtered;
    }, [
        parts,
        partsFilter,
        partsSearch,
        compatibilities,
        modelId
    ]);
    const getCompatForPart = (part)=>(compatibilities ?? []).find((c)=>c.partId === part.id);
    const handleFindOnDiagram = (reference)=>{
        setSection("diagram");
        handleSelectReference(reference);
    };
    const handleSavePump = async ()=>{
        if (modelId) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$repositories$2f$savedRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["savedRepository"].save("pumpModel", modelId);
    };
    if (modelBySlug === undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
        label: "Loading pump…"
    }, void 0, false, {
        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
        lineNumber: 212,
        columnNumber: 41
    }, this);
    if (!pump) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
            message: "This pump could not be opened.",
            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                fullWidth: true,
                onClick: ()=>router.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAVEY_BASE"]}/search`),
                children: "Try Again"
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 218,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: pump.name,
                subtitle: `${pump.brand.name} · ${pump.family.name}`,
                onBack: ()=>router.back(),
                showSave: true,
                isSaved: isSaved,
                onSave: handleSavePump
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-warning/40 bg-warning/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base",
                    children: "Confirm the exact pump version before ordering model-specific parts."
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            !section && !pump.family.sourceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "text-base text-muted",
                children: "Parts catalogue and diagram setup for this range is coming next. You can still save notes and browse model details."
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            !section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pumps$2f$PumpImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PumpImage"], {
                slug: pump.slug,
                name: pump.name,
                imageUrl: pump.imageUrl,
                familySlug: pump.family.slug,
                size: "hero",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this),
            !section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionTileGrid"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionTile"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"],
                        title: "View Diagram",
                        description: "Tap diagram refs",
                        onClick: ()=>setSection("diagram")
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    pumpCurve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionTile"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"],
                        title: "Pump Curve",
                        description: pumpCurve.seriesLabel,
                        onClick: ()=>setSection("curve")
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionTile"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                        title: "View Parts",
                        description: "Browse parts list",
                        onClick: ()=>setSection("parts")
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ActionTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionTile"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                        title: "My Notes",
                        description: "Site notes",
                        onClick: ()=>setSection("notes")
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 262,
                columnNumber: 9
            }, this),
            section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FilterToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterToggle"], {
                options: [
                    {
                        value: "diagram",
                        label: "Diagram"
                    },
                    ...pumpCurve ? [
                        {
                            value: "curve",
                            label: "Curve"
                        }
                    ] : [],
                    {
                        value: "parts",
                        label: "Parts"
                    },
                    {
                        value: "notes",
                        label: "Notes"
                    }
                ],
                value: section,
                onChange: (v)=>setSection(v)
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 293,
                columnNumber: 9
            }, this),
            section === "diagram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (hotspots ?? []).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pumps$2f$PumpDiagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PumpDiagram"], {
                    pumpName: pump.name,
                    diagram: diagram?.imageUrl ? {
                        imageUrl: diagram.imageUrl,
                        width: diagram.width,
                        height: diagram.height,
                        imageType: diagram.imageType
                    } : undefined,
                    hotspots: hotspots ?? [],
                    selectedReference: selectedRef,
                    onSelectReference: handleSelectReference,
                    overlay: sheetOpen && selectedRef ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pumps$2f$ReferencePartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReferencePartPanel"], {
                        reference: selectedRef,
                        pumpName: pump.name,
                        parts: hotspotParts,
                        onClose: ()=>setSheetOpen(false),
                        onCopy: copy,
                        copied: copied
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 325,
                        columnNumber: 19
                    }, void 0) : undefined
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                    lineNumber: 308,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                    message: "A schematic has not been added for this pump yet."
                }, void 0, false, {
                    fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                    lineNumber: 337,
                    columnNumber: 13
                }, this)
            }, void 0, false),
            section === "curve" && pumpCurve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pumps$2f$PumpCurve$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PumpCurve"], {
                pumpName: pump.name,
                imageUrl: pumpCurve.imageUrl,
                seriesLabel: pumpCurve.seriesLabel,
                seriesName: pumpCurve.seriesName,
                isDocument: pumpCurve.isDocument
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 343,
                columnNumber: 9
            }, this),
            section === "parts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                        placeholder: `Search ${pump.name} parts`,
                        value: partsSearch,
                        onChange: (e)=>setPartsSearch(e.target.value),
                        large: false,
                        "aria-label": `Search ${pump.name} parts`
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FilterToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterToggle"], {
                        options: [
                            {
                                value: "all",
                                label: "All Parts"
                            },
                            {
                                value: "kits",
                                label: "Kits & Seals"
                            },
                            {
                                value: "specific",
                                label: "Pump Specific"
                            }
                        ],
                        value: partsFilter,
                        onChange: setPartsFilter
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$parts$2f$PartsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PartsList"], {
                        parts: filteredParts,
                        getCompatibility: getCompatForPart,
                        selectedReference: selectedRef,
                        onCopy: copy,
                        onFindOnDiagram: handleFindOnDiagram,
                        copied: copied
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 353,
                columnNumber: 9
            }, this),
            section === "notes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$notes$2f$NotesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotesPanel"], {
                entityType: "pumpModel",
                entityId: pump.id
            }, void 0, false, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 381,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 border-t border-[var(--border-color)] pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        fullWidth: true,
                        onClick: handleSavePump,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            isSaved ? "Pump Saved" : "Save Pump"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: pump.family.sourceUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            fullWidth: true,
                            className: "flex-col gap-1 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        "Open Davey Catalogue"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-normal text-muted",
                                    children: "Internet required"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pumps/PumpDetailPage.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_a6964b72._.js.map