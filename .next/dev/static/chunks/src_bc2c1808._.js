(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/blindtestOptions/Search.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Search({ type }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!query.trim()) return;
        try {
            let searchQuery;
            // If user pasted a Deezer link:
            if (query.includes("deezer.com")) {
                const res = await fetch("/api/resolve", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        link: query
                    })
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                searchQuery = data.id;
            } else {
                searchQuery = query;
            }
            router.push(`/jeu/${type}/${encodeURIComponent(searchQuery)}?limit=${limit}`);
        } catch (err) {
            console.error("Erreur pendant la recherche :", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col items-start space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: query,
                    onChange: (e)=>setQuery(e.target.value),
                    placeholder: "Rechercher",
                    className: "bg-(--white) text-(--black) rounded px-4 py-2 placeholder-(--gray) border border-(--gray) focus:border-(--accent) outline-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-(--text)",
                        children: "Nombre de musique chargées"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: limit,
                        onChange: (e)=>setLimit(e.target.value),
                        placeholder: "Nombre de musiques",
                        className: "bg-(--white) text-(--black) rounded px-4 py-2 placeholder-(--gray) border border-(--gray) focus:border-(--accent) outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "cursor-pointer text-nowrap self-center text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) border border-(--accent) hover:border-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none w-fit",
                children: "Créer mon blindtest"
            }, void 0, false, {
                fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blindtestOptions/Search.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(Search, "Y63tML5ha6/a8UoHpAZ1UG643OI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Loading.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlindtestLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BlindtestLoader({ size = 50, color = 'bg-(--accent)', speed = 2, message = "Chargement de votre blindtest" }) {
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const baseHeight = size * 0.4;
    const fullHeight = size;
    const barWidth = size / 3;
    const barStyle = {
        width: `${barWidth}px`,
        borderRadius: '10px'
    };
    const variants = {
        animate: (i)=>({
                height: [
                    baseHeight,
                    fullHeight,
                    baseHeight,
                    baseHeight
                ],
                transition: {
                    duration: speed,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * (speed / 4),
                    times: [
                        0,
                        0.3,
                        0.6,
                        1
                    ]
                }
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center p-4 px-20   bg-(--middleground) shadow-md border border-solid border-(--foreground) rounded-lg   mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-medium text-(--text) zalando-sans-expanded-regular",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Loading.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                "aria-label": message,
                className: "flex items-center gap-2 h-16 justify-center",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>shouldReduce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...barStyle,
                            height: `${baseHeight}px`
                        },
                        className: `${color}`
                    }, i, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: i,
                        variants: variants,
                        animate: "animate",
                        style: barStyle,
                        className: `${color} origin-bottom`
                    }, i, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Loading.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-md text-gray-500",
                children: "Veuillez patienter..."
            }, void 0, false, {
                fileName: "[project]/src/components/Loading.jsx",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Loading.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(BlindtestLoader, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = BlindtestLoader;
var _c;
__turbopack_context__.k.register(_c, "BlindtestLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TrackAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TrackAudio = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ track, visible }, ref)=>{
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioProgress, setAudioProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // NEW — interval 1s
    // Sync src quand track change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackAudio.useEffect": ()=>{
            if (!ref?.current) return;
            const audio = ref.current;
            if (track?.preview && audio.src !== track.preview) {
                audio.src = track.preview;
            }
        }
    }["TrackAudio.useEffect"], [
        track,
        ref
    ]);
    // Gestion des events play/pause + loadedmetadata
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackAudio.useEffect": ()=>{
            if (!ref?.current) return;
            const audio = ref.current;
            const onLoaded = {
                "TrackAudio.useEffect.onLoaded": ()=>{
                    setDuration(audio.duration || 0);
                }
            }["TrackAudio.useEffect.onLoaded"];
            const onPlay = {
                "TrackAudio.useEffect.onPlay": ()=>{
                    setIsPlaying(true);
                    // NEW — démarrer un timer 1s
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval({
                        "TrackAudio.useEffect.onPlay": ()=>{
                            if (!audio.duration || isDragging) return;
                            const pct = audio.currentTime / audio.duration * 100;
                            setAudioProgress(pct);
                        }
                    }["TrackAudio.useEffect.onPlay"], 999);
                }
            }["TrackAudio.useEffect.onPlay"];
            const onPause = {
                "TrackAudio.useEffect.onPause": ()=>{
                    setIsPlaying(false);
                    clearInterval(intervalRef.current);
                }
            }["TrackAudio.useEffect.onPause"];
            audio.addEventListener("loadedmetadata", onLoaded);
            audio.addEventListener("play", onPlay);
            audio.addEventListener("pause", onPause);
            return ({
                "TrackAudio.useEffect": ()=>{
                    audio.removeEventListener("loadedmetadata", onLoaded);
                    audio.removeEventListener("play", onPlay);
                    audio.removeEventListener("pause", onPause);
                    clearInterval(intervalRef.current);
                }
            })["TrackAudio.useEffect"];
        }
    }["TrackAudio.useEffect"], [
        ref,
        isDragging
    ]);
    // PLAY / PAUSE
    const togglePlay = ()=>{
        if (!ref?.current) return;
        const audio = ref.current;
        audio.paused ? audio.play() : audio.pause();
    };
    // ----------- DRAG SEEK -----------
    const handleDrag = (e)=>{
        if (!barRef.current || !ref.current || !duration) return;
        const rect = barRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        const pct = x / rect.width * 100;
        setAudioProgress(pct);
    };
    const stopDrag = (e)=>{
        if (!barRef.current || !ref.current || !duration) return;
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
        setIsDragging(false);
        const rect = barRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        const newTime = x / rect.width * duration;
        ref.current.currentTime = newTime;
    };
    const startDrag = (e)=>{
        setIsDragging(true);
        handleDrag(e);
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDrag);
    };
    // UI only when visible
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: track?.preview,
                    type: "audio/mpeg"
                }, void 0, false, {
                    fileName: "[project]/src/components/TrackAudio.js",
                    lineNumber: 106,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TrackAudio.js",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-2 p-3 bg-(--background) rounded-lg border border-(--foreground) shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: togglePlay,
                                "aria-label": isPlaying ? "Pause" : "Play",
                                className: "hover:scale-[110%] transition cursor-pointer",
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 22,
                                    color: "var(--gray)",
                                    fill: "var(--gray)",
                                    strokeWidth: "1px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrackAudio.js",
                                    lineNumber: 120,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 22,
                                    color: "var(--gray)",
                                    fill: "var(--gray)",
                                    strokeWidth: "1px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrackAudio.js",
                                    lineNumber: 122,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 114,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: barRef,
                                className: "relative w-full h-3 bg-purple-300 rounded cursor-pointer select-none",
                                onMouseDown: startDrag,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute h-3 rounded bg-(--accent) ${isDragging ? "" : "transition-all duration-500"}`,
                                    style: {
                                        width: `${audioProgress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrackAudio.js",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 127,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackAudio.js",
                        lineNumber: 111,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-(--gray)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatTime(ref.current ? ref.current.currentTime : 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 143,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatTime(duration)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 144,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackAudio.js",
                        lineNumber: 142,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrackAudio.js",
                lineNumber: 110,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrackAudio.js",
        lineNumber: 104,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "wKqCW4g+XbX2ZjRiBNEHXeEPpkE=")), "wKqCW4g+XbX2ZjRiBNEHXeEPpkE=");
_c1 = TrackAudio;
// Format mm:ss
function formatTime(sec) {
    if (!sec || isNaN(sec)) return "00:00";
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}
const __TURBOPACK__default__export__ = TrackAudio;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrackAudio$forwardRef");
__turbopack_context__.k.register(_c1, "TrackAudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Track.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pour afficher des musiques lol
__turbopack_context__.s([
    "default",
    ()=>Track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Track({ track }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center p-4 w-[100%]   bg-[var(--background)] shadow border border-solid border-[var(--foreground)] rounded-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-2xs flex flex-col gap-3 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "w-full h-auto shadow-xl border border-solid border-[var(--foreground)] rounded-lg",
                    src: track.album.cover_xl,
                    alt: `Couverture de l'album: ${track.album.title}`
                }, void 0, false, {
                    fileName: "[project]/src/components/Track.jsx",
                    lineNumber: 7,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-(--text)",
                            children: track.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Track.jsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-(--gray)",
                            children: track.artist.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/Track.jsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Track.jsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: track.link,
                    target: "_blank",
                    className: "bg-[var(--accent)] hover:bg-[var(--accent-lighter)] text-[var(--white)]   cursor-pointer px-4 py-2 rounded font-bold uppercase active:text-gray-50 duration-300",
                    children: "écouter sur Deezer"
                }, void 0, false, {
                    fileName: "[project]/src/components/Track.jsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            ]
        }, track.id, true, {
            fileName: "[project]/src/components/Track.jsx",
            lineNumber: 6,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Track.jsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = Track;
var _c;
__turbopack_context__.k.register(_c, "Track");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/jeu/vs/VSMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VSMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrackAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrackAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Track$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Track.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$os$2d$browserify$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
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
function VSMode() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // CLASSEMENT EN FIN DE PARTIE !!!
    // state machine
    const GAME_STATE = {
        PAUSED: 'paused',
        PLAYING: "playing",
        SHOW_ANSWER: "show_answer",
        GAME_OVER: "game_over",
        WAITING: "waiting"
    };
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pseudo, setPseudo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [roomCode, setRoomCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // à mettre à jour en fonction du serveur uniquement
    const [songs, setSongs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentSong, setCurrentSong] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const typeTracksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tracksQueryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tracksLimitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // pour initialiser la recherche des musiques:
    // pour garder une ref sur les inputs de reponse
    const titleAnswerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const artistAnswerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(players);
    const chatMessageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // variables pour l'interface ?
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pointsPopup, setPointsPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // controler l'audio !
    // POUR LES REPONSES !!
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answerMessage, setAnswerMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [answerMessageColor, setAnswerMessageColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [titleBox, setTitleBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [artistBox, setArtistBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // uniquement pour la fin pour la visualisation
    const nextSong = ()=>{
        if (currentSong < songs.length - 1) {
            setCurrentSong((prev)=>prev + 1);
        }
    };
    const prevSong = ()=>{
        if (currentSong > 0) {
            setCurrentSong((prev)=>prev - 1);
        }
    };
    const updatePlayerProperty = (playerId, key, newValue)=>{
        setPlayers((prevPlayers)=>{
            const updatedPlayers = {
                ...prevPlayers
            };
            if (updatedPlayers[playerId]) {
                updatedPlayers[playerId] = {
                    ...updatedPlayers[playerId],
                    [key]: newValue
                };
            }
            return updatedPlayers;
        });
    };
    const handleTextareaResize = ()=>{
        const textarea = chatMessageInputRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    };
    const hanldleChatKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage(e);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VSMode.useEffect": ()=>{
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                audioRef.current.src = songs[currentSong].preview;
            }
        }
    }["VSMode.useEffect"], [
        currentSong
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VSMode.useEffect": ()=>{
            playersRef.current = players;
        }
    }["VSMode.useEffect"], [
        players
    ]);
    // sockets communication ^^
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VSMode.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:3001", {
                path: "/socket.io",
                transports: [
                    "websocket"
                ]
            });
            socketRef.current = socket;
            socket.on('connect', {
                "VSMode.useEffect": ()=>{
                    socket.emit('message', 'hallo');
                    setIsConnected(true);
                }
            }["VSMode.useEffect"]);
            socket.on('roomCreated', {
                "VSMode.useEffect": async (roomCode)=>{
                    setRoomCode(roomCode);
                    // ajouter des parametres lors de la creation d'une room pour permettre plus de choses ?
                    try {
                        const typeTracks = typeTracksRef.current.value;
                        const trackQuery = tracksQueryRef.current.value;
                        const tracksLimit = tracksLimitRef.current.value;
                        const tracks = await fetchTracks(typeTracks, trackQuery, tracksLimit);
                        setSongs(tracks);
                        socket.emit('setTrackList', tracks);
                    } catch (err) {
                        console.error(err);
                    }
                }
            }["VSMode.useEffect"]);
            socket.on('roomJoined', {
                "VSMode.useEffect": (roomCode)=>{
                    setRoomCode(roomCode);
                }
            }["VSMode.useEffect"]);
            socket.on('roomError', {
                "VSMode.useEffect": (error)=>{
                    console.log(error);
                }
            }["VSMode.useEffect"]);
            socket.on('forceDisconnect', {
                "VSMode.useEffect": ()=>{
                    console.log('Erreur');
                    router.push("/jeu");
                }
            }["VSMode.useEffect"]);
            // mise à jour des JOUEURS
            socket.on("currentPlayers", {
                "VSMode.useEffect": (serverPlayers)=>{
                    setPlayers(serverPlayers);
                    playersRef.current = serverPlayers;
                }
            }["VSMode.useEffect"]);
            socket.on("playerHasAnswered", {
                "VSMode.useEffect": (data)=>{
                    const [playerId, answerState, playerscore] = data;
                    updatePlayerProperty(playerId, 'answered', answerState);
                    updatePlayerProperty(socket.id, 'score', playerscore);
                }
            }["VSMode.useEffect"]);
            socket.on('setGameState', {
                "VSMode.useEffect": (serverGameState)=>{
                    const currentPlayers = playersRef.current;
                    setGameState(serverGameState);
                    if (serverGameState === GAME_STATE.PLAYING) {
                        handleStart();
                    }
                    if (serverGameState === GAME_STATE.SHOW_ANSWER || serverGameState === GAME_STATE.GAME_OVER) {
                        handleReset();
                    }
                    if (currentPlayers[socket.id].roomLeader) {
                        if (serverGameState === GAME_STATE.SHOW_ANSWER) {
                            setGameStateMessage([
                                'Passer à la suite',
                                serverNextSong
                            ]);
                        }
                    }
                }
            }["VSMode.useEffect"]);
            socket.on('setTrackList', {
                "VSMode.useEffect": (tracks)=>{
                    setSongs(tracks);
                }
            }["VSMode.useEffect"]);
            socket.on('nextSongInBlindtest', {
                "VSMode.useEffect": (serverCurrentSong)=>{
                    setCurrentSong(serverCurrentSong);
                    const currentPlayers = playersRef.current;
                    titleAnswerRef.current.value = "";
                    artistAnswerRef.current.value = "";
                    setAnswerMessage('');
                    if (currentPlayers[socket.id].roomLeader) {
                        setGameStateMessage([
                            'Lancer la musique',
                            setServerPlaying
                        ]);
                    }
                }
            }["VSMode.useEffect"]);
            socket.on('playerAnswerResult', {
                "VSMode.useEffect": ({ correctTitle, correctArtist, totalPoints, pointsGained })=>{
                    setTitleBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--error)]');
                    setArtistBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--error)]');
                    if (correctTitle) {
                        setTitleBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--valid)]');
                    }
                    if (correctArtist) {
                        setArtistBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--valid)]');
                    }
                    if (correctTitle && correctArtist) {
                        setAnswerMessage('Tout juste, bravo ! +11pts');
                        setAnswerMessageColor('text-[var(--valid)]');
                    } else if (correctArtist) {
                        setAnswerMessage(`Tu as trouvé l'artiste mais pas la chanson. +` + pointsGained + 'pts');
                        setAnswerMessageColor('text-[var(--valid)]');
                    } else if (correctTitle) {
                        setAnswerMessage(`Tu as trouvé la chanson mais pas l'artiste. +` + pointsGained + 'pts');
                        setAnswerMessageColor('text-[var(--valid)]');
                    } else {
                        setAnswerMessage("Aucune bonne réponse... +0pts");
                        setAnswerMessageColor('text-[var(--error)]');
                    }
                    updatePlayerProperty(socket.id, 'score', totalPoints);
                    setPoints(totalPoints);
                    console.log(pointsGained);
                    setPointsPopup('+' + pointsGained);
                }
            }["VSMode.useEffect"]);
            socket.on('forceSubmitAnswer', {
                "VSMode.useEffect": ()=>{
                    handleAnswer();
                }
            }["VSMode.useEffect"]);
            socket.on('newChatMessage', {
                "VSMode.useEffect": (message)=>{
                    setChatMessages({
                        "VSMode.useEffect": (prevMessages)=>[
                                ...prevMessages,
                                message
                            ]
                    }["VSMode.useEffect"]);
                }
            }["VSMode.useEffect"]);
            // ajouter une fonction pour recuperer toutes les données sur l'état de la room...?
            /* 
        socket.on('roomData', (data) => {
            if (data.messages) {
                setMessages(data.messages);
            }
        });
        */ return ({
                "VSMode.useEffect": ()=>{
                    setIsConnected(false);
                    socket.disconnect();
                }
            })["VSMode.useEffect"];
        }
    }["VSMode.useEffect"], []);
    // fonctions pour les sockets
    const createRoom = (e)=>{
        e.preventDefault();
        if (!pseudo.trim()) return alert("Entrez un pseudo !");
        if (!tracksQueryRef.current.value.trim()) return alert('Vous devez préciser votre recherche !');
        socketRef.current.emit("createRoom", pseudo);
    };
    const joinRoom = (e)=>{
        e.preventDefault();
        const joinRoomCode = e.target.roomCode.value.trim();
        if (!pseudo.trim() || !joinRoomCode) return alert("Pseudo et code de room requis !");
        socketRef.current.emit("joinRoom", {
            pseudo,
            joinRoomCode
        });
    };
    const handleAnswer = ()=>{
        let rawTitleAnswer = titleAnswerRef.current?.value || "";
        let rawArtistAnswer = artistAnswerRef.current?.value || "";
        socketRef.current.emit('playerAnswer', {
            rawTitleAnswer,
            rawArtistAnswer
        });
        setAnswers((prev)=>[
                ...prev,
                {
                    title: rawTitleAnswer,
                    artist: rawArtistAnswer
                }
            ]);
    };
    const setServerPlaying = ()=>{
        socketRef.current.emit('setGamePlaying');
    };
    const serverNextSong = ()=>{
        socketRef.current.emit('nextSongBlindtest');
    };
    const startGame = ()=>{
        socketRef.current.emit('startGame');
    };
    const sendChatMessage = (e)=>{
        e.preventDefault();
        handleTextareaResize();
        const text = chatMessageInputRef.current.value.trim();
        if (socketRef.current && text) {
            socketRef.current.emit('chatMessage', text);
            chatMessageInputRef.current.value = '';
        }
    };
    // CONCERNANT LE TIMER !!
    //
    //
    const musicTime = 20;
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(musicTime);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(musicTime);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressBar = timeLeft / duration * 100;
    // timer qui est lancé
    const handleStart = ()=>{
        if (timeLeft > 0) {
            setIsActive(true);
            setIsPaused(false);
            audioRef.current?.play();
            setGameStateMessage([
                'Partie en cours',
                ()=>{}
            ]);
        }
    };
    const handlePause = ()=>{
        if (isActive) {
            setIsPaused(true);
            setIsActive(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    };
    const handleReset = ()=>{
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(typeof duration === "number" ? duration : 0);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VSMode.useEffect": ()=>{
            if (isActive) {
                timerRef.current = setInterval({
                    "VSMode.useEffect": ()=>{
                        setTimeLeft({
                            "VSMode.useEffect": (prevTime)=>{
                                if (prevTime <= 1) {
                                    clearInterval(timerRef.current);
                                    return 0;
                                }
                                return prevTime - 1;
                            }
                        }["VSMode.useEffect"]);
                    }
                }["VSMode.useEffect"], 1000);
            }
            return ({
                "VSMode.useEffect": ()=>{
                    if (timerRef.current) {
                        clearInterval(timerRef.current);
                    }
                }
            })["VSMode.useEffect"];
        }
    }["VSMode.useEffect"], [
        isActive,
        isPaused
    ]);
    const formatTime = (time)=>{
        const seconds = time % 60;
        return `${String(seconds).padStart(2, "0")}`;
    };
    // FIN DE LA PARTIE CONCERNANT LES MUSIQUES !!!
    //
    //
    setTimeout(()=>{
        setPointsPopup(null);
    }, 5000);
    const [gameStateMessage, setGameStateMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Lancer la musique',
        setServerPlaying
    ]);
    // la page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center bg-(--middleground) px-8 py-4 gap-4 rounded-lg border border-(--foreground) shadow-md",
                    children: !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: "Connexion au serveur en cours"
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 384,
                            columnNumber: 33
                        }, this)
                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 w-md items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-black dark:text-white text-lg font-bold",
                                                children: "Votre pseudo:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 390,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Peusdo...  ",
                                                value: pseudo,
                                                onChange: (e)=>setPseudo(e.target.value),
                                                className: "bg-white text-black px-4 py-2 rounded border border-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 391,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 389,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>createRoom(e),
                                        className: "px-4 py-2 w-max flex flex-col flex-wrap gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl text-black dark:text-white font-bold",
                                                children: "Pour créer une room:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 401,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-black dark:text-white",
                                                        children: "Votre séléction ?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 403,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        ref: typeTracksRef,
                                                        defaultValue: 'search',
                                                        className: "bg-white text-black px-4 py-2 rounded cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 'playlist',
                                                                children: "Playlist"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 405,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 'genre',
                                                                children: "Genre"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 406,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 'search',
                                                                children: "Mot-clé"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 407,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 404,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 402,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "display flex flex-wrap gap-4 items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-black dark:text-white",
                                                                children: "Votre recherche"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 412,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                ref: tracksQueryRef,
                                                                defaultValue: '',
                                                                placeholder: "Rechercher",
                                                                className: "bg-white text-black px-4 py-2 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 413,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 411,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-black dark:text-white",
                                                                children: "Nombre de musique chargées"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 417,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: tracksLimitRef,
                                                                defaultValue: 25,
                                                                type: "number",
                                                                placeholder: "Limite",
                                                                className: "bg-white text-black px-4 py-2 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 418,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 416,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 410,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none",
                                                type: "submit",
                                                children: "Créer une partie"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 422,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 400,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl text-black dark:text-white font-bold",
                                        children: "Ou bien pour en rejoindre une:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 426,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 388,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "flex gap-2",
                                onSubmit: joinRoom,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "bg-white text-black rounded",
                                        type: "text",
                                        name: "roomCode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 429,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none",
                                        type: "submit",
                                        children: "Rejoindre"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 430,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 428,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                    lineNumber: 379,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                lineNumber: 378,
                columnNumber: 17
            }, this),
            roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-black dark:text-white mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-4 content-start",
                    children: [
                        players && Object.keys(players).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "joueurs",
                            className: "col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--middleground)] rounded-lg shadow-inner flex flex-col gap-4",
                                children: [
                                    roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mx-4 mt-4 px-4 py-2 font-bold rounded",
                                        children: [
                                            "Room ID: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-(--accent-darker)",
                                                children: roomCode
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 448,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 448,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: " mx-4 text-xl",
                                        children: "Joueurs:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 450,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: Object.entries(players).map(([id, player], i)=>{
                                            const bgColorClass = i % 2 === 0 ? 'bg-[var(--foreground)]' : 'bg-[var(--middleground)]';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${bgColorClass} px-4 py-1`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base",
                                                        children: player.pseudo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 458,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            "(Score : ",
                                                            player.score,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 459,
                                                        columnNumber: 61
                                                    }, this),
                                                    player.answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-(--valid)",
                                                        children: "A répondu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 461,
                                                        columnNumber: 65
                                                    }, this)
                                                ]
                                            }, id, true, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 457,
                                                columnNumber: 57
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 451,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 446,
                                columnNumber: 37
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 445,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "jeu",
                            className: "col-span-3",
                            children: [
                                roomCode && gameState === GAME_STATE.WAITING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center p-8 bg-[var(--middleground)] rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-bold",
                                            children: [
                                                "Salle ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-(--accent-lighter)",
                                                    children: roomCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 476,
                                                    columnNumber: 69
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 476,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "italic",
                                            children: "En attente..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 477,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Hey ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-(--accent-lighter)",
                                                    children: players[socketRef.current.id].pseudo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 478,
                                                    columnNumber: 44
                                                }, this),
                                                " ! On attend les autres joueurs ?"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 478,
                                            columnNumber: 37
                                        }, this),
                                        players[socketRef.current.id] && players[socketRef.current.id].roomLeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: startGame,
                                                className: "mt-4 cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none",
                                                children: "Lancer la partie !"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 481,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "En attente du chef de salle pour lancer la partie..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 486,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 475,
                                    columnNumber: 33
                                }, this),
                                roomCode && gameState !== GAME_STATE.WAITING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col bg-[var(--middleground)] px-8 py-4 rounded-lg border border-[var(--foreground)] shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-between w-[100%] mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex max-w-fit bg-[var(--middleground)] px-4 py-2 rounded-lg border border-[var(--foreground)] shadow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-(--gray) whitespace-nowrap",
                                                                    children: [
                                                                        points,
                                                                        " pts"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                    lineNumber: 497,
                                                                    columnNumber: 53
                                                                }, this),
                                                                pointsPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "ml-2 absolute points-popup",
                                                                    children: pointsPopup
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                    lineNumber: 498,
                                                                    columnNumber: 69
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 496,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 495,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrackAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        ref: audioRef,
                                                        track: songs[currentSong],
                                                        visible: gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 502,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex max-w-fit bg-[var(--middleground)] px-4 py-2 rounded-lg border border-[var(--foreground)] shadow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative flex items-center text-right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-(--gray) whitespace-nowrap",
                                                                children: [
                                                                    currentSong + 1,
                                                                    " / ",
                                                                    songs.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 510,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 509,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 508,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 494,
                                                columnNumber: 41
                                            }, this),
                                            (gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.PAUSED) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-center text-xl text-[var(--text)]",
                                                            children: formatTime(timeLeft)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 518,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `relative h-3 rounded bg-purple-300`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `absolute h-3 rounded transition-all duration-500 ${timeLeft <= 5 ? "bg-[var(--accent-lighter)]" : "bg-[var(--accent)]"}`,
                                                                style: {
                                                                    width: `${progressBar}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 521,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 520,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 517,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false),
                                            socketRef.current?.id && players[socketRef.current.id]?.roomLeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: gameStateMessage[1],
                                                className: "cursor-pointer bg-[var(--white)] mx-auto shadow-md my-4 text-[var(--accent)] duration-200 hover:text-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50",
                                                children: gameStateMessage[0]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 533,
                                                columnNumber: 45
                                            }, this),
                                            (gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.PAUSED) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center items-center mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: answerMessageColor,
                                                            children: answerMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 545,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 544,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: (e)=>{
                                                            e.preventDefault();
                                                            handleAnswer();
                                                        },
                                                        className: "flex flex-col flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "musicTitle",
                                                                                className: "text-[var(--text)]",
                                                                                children: "Titre de la musique :"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                                lineNumber: 557,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                name: "musicTitle",
                                                                                ref: titleAnswerRef,
                                                                                className: `${gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER ? titleBox : 'bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--gray)]'}`,
                                                                                placeholder: "Votre réponse",
                                                                                type: "text",
                                                                                disabled: gameState !== GAME_STATE.PLAYING || players[socketRef.current?.id]?.answered
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                                lineNumber: 558,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                        lineNumber: 556,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "artistName",
                                                                                className: "text-[var(--text)]",
                                                                                children: "Nom de l'artiste :"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                                lineNumber: 572,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                name: "artistName",
                                                                                ref: artistAnswerRef,
                                                                                className: `${gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER ? artistBox : 'bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--gray)]'}`,
                                                                                placeholder: "Votre réponse",
                                                                                type: "text",
                                                                                disabled: gameState !== GAME_STATE.PLAYING || players[socketRef.current?.id]?.answered
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                                lineNumber: 573,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                        lineNumber: 571,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 555,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                disabled: gameState !== GAME_STATE.PLAYING || players[socketRef.current?.id]?.answered,
                                                                className: gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.PAUSED ? "hidden" : "cursor-pointer bg-[var(--white)] mx-auto shadow-md mt-4 text-[var(--accent)] duration-200 hover:text-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50",
                                                                children: "Confirmer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 587,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 548,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            (gameState === GAME_STATE.GAME_OVER || gameState === GAME_STATE.SHOW_ANSWER) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 mx-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Track$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    track: songs[currentSong]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 600,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 599,
                                                columnNumber: 45
                                            }, this),
                                            gameState === GAME_STATE.GAME_OVER && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center items-center mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: answerMessageColor,
                                                            children: answerMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 607,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 606,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4 items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "musicTitle",
                                                                        children: "Titre de la musique :"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                        lineNumber: 612,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        name: "musicTitle",
                                                                        value: answers[currentSong].title,
                                                                        className: titleBox,
                                                                        placeholder: "votre réponse",
                                                                        type: "text",
                                                                        disabled: gameState !== GAME_STATE.PLAYING
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                        lineNumber: 613,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 611,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "artistName",
                                                                        children: "Nom de l'artiste :"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                        lineNumber: 620,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        name: "artistName",
                                                                        value: answers[currentSong].artist,
                                                                        className: artistBox,
                                                                        placeholder: "votre réponse",
                                                                        type: "text",
                                                                        disabled: gameState !== GAME_STATE.PLAYING
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                        lineNumber: 621,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 619,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 610,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: prevSong,
                                                                className: "bg-[var(--white)] text-black rounded px-4 py-2",
                                                                children: "Musique précédante"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 628,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: nextSong,
                                                                className: "bg-[var(--white)] text-black rounded px-4 py-2",
                                                                children: "Musique suivante"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                lineNumber: 632,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 627,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 493,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 473,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "chat",
                            className: "col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--middleground)] p-4 rounded-lg shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-64 overflow-y-auto mb-4 p-2 bg-[var(--background)] rounded border border-[var(--foreground)]",
                                        children: chatMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--gray)]",
                                            children: "Aucun message pour l'instant."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 649,
                                            columnNumber: 41
                                        }, this) : chatMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm my-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[var(--accent)]",
                                                        children: [
                                                            msg.sender,
                                                            " :"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 653,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        children: msg.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 654,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[var(--gray)] ml-2",
                                                        children: [
                                                            "(",
                                                            msg.timestamp,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 655,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, msg.id, true, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 652,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 647,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: sendChatMessage,
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "text-sm text-black placeholder-gray-500 resize-none px-2 py-1 bg-white rounded",
                                                ref: chatMessageInputRef,
                                                rows: "1",
                                                placeholder: "message...",
                                                onChange: handleTextareaResize,
                                                onKeyDown: hanldleChatKeyDown
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 663,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-1 self-end active:shadow-none font-bold cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) rounded",
                                                type: "submit",
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 671,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 662,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 645,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 643,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                    lineNumber: 442,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                lineNumber: 441,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(VSMode, "z3d0/yw4LuKWUv8TLDURC3ohSdk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VSMode;
async function fetchTracks(mode = "genre", q = "0", limit = 25, minRank = 0, maxRank = 1000000) {
    q = q.replace(/\s/g, '');
    console.log(q);
    const res = await fetch(`/api/tracks?mode=${mode}&q=${encodeURIComponent(q)}&limit=${limit}&minRank=${minRank}&maxRank=${maxRank}`);
    if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
    const data = await res.json();
    return data;
}
var _c;
__turbopack_context__.k.register(_c, "VSMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bc2c1808._.js.map