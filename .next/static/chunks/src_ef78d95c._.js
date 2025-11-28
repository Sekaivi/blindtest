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
function Search(param) {
    let { type } = param;
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
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
            router.push("/jeu/".concat(type, "/").concat(encodeURIComponent(searchQuery), "?limit=").concat(limit));
        } catch (err) {
            console.error("Erreur pendant la recherche :", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex items-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: query,
                onChange: (e)=>setQuery(e.target.value),
                placeholder: "Rechercher",
                className: "border p-2 rounded-l"
            }, void 0, false, {
                fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Nombre de musique chargées"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: limit,
                        onChange: (e)=>setLimit(e.target.value),
                        placeholder: "Limite",
                        className: "border p-2 rounded-l"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-white text-black px-4 py-2 rounded-r",
                children: "Créer mon blindtest :D"
            }, void 0, false, {
                fileName: "[project]/src/components/blindtestOptions/Search.jsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blindtestOptions/Search.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(Search, "HW4qIEVJFUIYIAFWwuAF1EGJxIc=", false, function() {
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
function BlindtestLoader(param) {
    let { size = 50, color = 'bg-(--accent)', speed = 2 } = param;
    _s();
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const baseHeight = size * 0.4 // hauteur mini (40% de la taille)
    ;
    const fullHeight = size // hauteur max
    ;
    const barWidth = size / 3;
    const barStyle = {
        width: "".concat(barWidth, "px"),
        borderRadius: '6px'
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
        className: "flex flex-col items-center justify-center p-4 px-20   bg-[var(--middleground)] shadow-md border border-solid border-[var(--foreground)] rounded-[10px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Chargement de votre blindtest"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-medium text-(--text) zalando-sans-expanded-regular",
                        children: "Chargement de votre blindtest"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Loading.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                "aria-label": "Chargement de votre blindtest",
                className: "flex items-center gap-2 h-16 justify-center",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>shouldReduce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...barStyle,
                            height: "".concat(baseHeight, "px")
                        },
                        className: "".concat(color)
                    }, i, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 46,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: i,
                        variants: variants,
                        animate: "animate",
                        style: barStyle,
                        className: "".concat(color, " origin-bottom")
                    }, i, false, {
                        fileName: "[project]/src/components/Loading.jsx",
                        lineNumber: 52,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Loading.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-md text-gray-500",
                children: "Veuillez patienter..."
            }, void 0, false, {
                fileName: "[project]/src/components/Loading.jsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Loading.jsx",
        lineNumber: 29,
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
const TrackAudio = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((param, ref)=>{
    let { track, visible } = param;
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioProgress, setAudioProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0..100
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Sync src quand track change (sécurise si parent ne set pas src)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackAudio.useEffect": ()=>{
            if (!(ref === null || ref === void 0 ? void 0 : ref.current)) return;
            const audio = ref.current;
            if (track === null || track === void 0 ? void 0 : track.preview) {
                if (audio.src !== track.preview) audio.src = track.preview;
            }
        // ne pas autoplay ici ; le parent contrôle play()
        }
    }["TrackAudio.useEffect"], [
        track,
        ref
    ]);
    // Events : timeupdate, loadedmetadata, play/pause
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackAudio.useEffect": ()=>{
            if (!(ref === null || ref === void 0 ? void 0 : ref.current)) return;
            const audio = ref.current;
            const onTimeUpdate = {
                "TrackAudio.useEffect.onTimeUpdate": ()=>{
                    if (!audio.duration || isNaN(audio.duration)) {
                        setAudioProgress(0);
                        return;
                    }
                    const pct = audio.currentTime / audio.duration * 100;
                    setAudioProgress(pct);
                }
            }["TrackAudio.useEffect.onTimeUpdate"];
            const onLoaded = {
                "TrackAudio.useEffect.onLoaded": ()=>{
                    setDuration(audio.duration || 0);
                    onTimeUpdate();
                }
            }["TrackAudio.useEffect.onLoaded"];
            const onPlay = {
                "TrackAudio.useEffect.onPlay": ()=>setIsPlaying(true)
            }["TrackAudio.useEffect.onPlay"];
            const onPause = {
                "TrackAudio.useEffect.onPause": ()=>setIsPlaying(false)
            }["TrackAudio.useEffect.onPause"];
            audio.addEventListener("timeupdate", onTimeUpdate);
            audio.addEventListener("loadedmetadata", onLoaded);
            audio.addEventListener("play", onPlay);
            audio.addEventListener("pause", onPause);
            // cleanup
            return ({
                "TrackAudio.useEffect": ()=>{
                    audio.removeEventListener("timeupdate", onTimeUpdate);
                    audio.removeEventListener("loadedmetadata", onLoaded);
                    audio.removeEventListener("play", onPlay);
                    audio.removeEventListener("pause", onPause);
                }
            })["TrackAudio.useEffect"];
        }
    }["TrackAudio.useEffect"], [
        ref
    ]);
    const togglePlay = ()=>{
        if (!(ref === null || ref === void 0 ? void 0 : ref.current)) return;
        const audio = ref.current;
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    // isPlaying sera mis à jour par les handlers play/pause ci-dessus
    };
    const handleSeek = (e)=>{
        if (!(ref === null || ref === void 0 ? void 0 : ref.current) || !duration) return;
        const val = Number(e.target.value); // 0..100
        const newTime = val / 100 * duration;
        ref.current.currentTime = newTime;
        setAudioProgress(val);
    };
    // On affiche l'élément audio quoi qu'il arrive (pour que la lecture continue)
    // mais l'UI (bouton + barre) n'apparaît que si visible === true
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: track === null || track === void 0 ? void 0 : track.preview,
                    type: "audio/mpeg"
                }, void 0, false, {
                    fileName: "[project]/src/components/TrackAudio.js",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TrackAudio.js",
                lineNumber: 80,
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
                                    lineNumber: 94,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 22,
                                    color: "var(--gray)",
                                    fill: "var(--gray)",
                                    strokeWidth: "1px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrackAudio.js",
                                    lineNumber: 94,
                                    columnNumber: 121
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 89,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-3 rounded bg-purple-300 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute h-3 rounded transition-all duration-300 bg-(--accent)",
                                            style: {
                                                width: "".concat(audioProgress, "%")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TrackAudio.js",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TrackAudio.js",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "100",
                                        value: Math.max(0, Math.min(100, audioProgress)),
                                        onChange: handleSeek,
                                        className: "absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer",
                                        style: {
                                            WebkitAppearance: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TrackAudio.js",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 98,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackAudio.js",
                        lineNumber: 87,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-(--gray)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: ref.current ? formatTime(ref.current.currentTime) : "00:00"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatTime(duration)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrackAudio.js",
                                lineNumber: 126,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrackAudio.js",
                        lineNumber: 122,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrackAudio.js",
                lineNumber: 86,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrackAudio.js",
        lineNumber: 78,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "nZNh14m7E0v1mZoy2SBZKOdc8gk=")), "nZNh14m7E0v1mZoy2SBZKOdc8gk=");
_c1 = TrackAudio;
// utilitaire local pour formatage hh:mm:ss -> mm:ss
function formatTime(sec) {
    if (!sec || isNaN(sec)) return "00:00";
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return "".concat(String(m).padStart(2, "0"), ":").concat(String(ss).padStart(2, "0"));
}
const __TURBOPACK__default__export__ = TrackAudio;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrackAudio$forwardRef");
__turbopack_context__.k.register(_c1, "TrackAudio");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$request$2f$search$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function VSMode() {
    _s();
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
    // POUR LE CHAT D'UNE ROOM !!
    const [message, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // pour garder une ref sur les inputs de reponse
    const titleAnswerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const artistAnswerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(players);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VSMode.useEffect": ()=>{
            console.log(gameState);
        }
    }["VSMode.useEffect"], [
        gameState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VSMode.useEffect": ()=>{
            console.log("Toutes les réponses :", answers);
        }
    }["VSMode.useEffect"], [
        answers
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
                        const tracks = await fetchTracks("search", "disney");
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
            // mise à jour des JOUEURS
            socket.on("currentPlayers", {
                "VSMode.useEffect": (serverPlayers)=>{
                    setPlayers(serverPlayers);
                    playersRef.current = serverPlayers;
                }
            }["VSMode.useEffect"]);
            socket.on("playerHasAnswered", {
                "VSMode.useEffect": (data)=>{
                    const [playerId, answerState] = data;
                    updatePlayerProperty(playerId, 'answered', answerState);
                }
            }["VSMode.useEffect"]);
            socket.on('setGameState', {
                "VSMode.useEffect": (serverGameState)=>{
                    const currentPlayers = playersRef.current;
                    setGameState(serverGameState);
                    console.log('Game state update from server: ' + serverGameState);
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
                                nextSongBlindtest
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
            // quand le chef de room valide le fait que tout le monde a bien repondu ou bien que le serveur le fait ?
            // ils ne sont pas encore en train de jouer ! Ils sont juste passés à la suitee
            socket.on('nextSongInBlindtest', {
                "VSMode.useEffect": ()=>{
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
                "VSMode.useEffect": (param)=>{
                    let { correctTitle, correctArtist, totalPoints, pointsGained } = param;
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
                        setAnswerMessage("Tu as trouvé l'artiste mais pas la chanson. +5pts");
                        setAnswerMessageColor('text-[var(--valid)]');
                    } else if (correctTitle) {
                        setAnswerMessage("Tu as trouvé la chanson mais pas l'artiste. +5pts");
                        setAnswerMessageColor('text-[var(--valid)]');
                    } else {
                        setAnswerMessage("Aucune bonne réponse... +0pts");
                        setAnswerMessageColor('text-[var(--error)]');
                    }
                    setPoints(totalPoints);
                    setPointsPopup('+' + pointsGained);
                }
            }["VSMode.useEffect"]);
            socket.on('forceSubmitAnswer', {
                "VSMode.useEffect": ()=>{
                    handleAnswer();
                }
            }["VSMode.useEffect"]);
            return ({
                "VSMode.useEffect": ()=>{
                    setIsConnected(false);
                    socket.disconnect();
                }
            })["VSMode.useEffect"];
        }
    }["VSMode.useEffect"], []);
    // fonctions pour les sockets
    const createRoom = ()=>{
        if (!pseudo.trim()) return alert("Entrez un pseudo !");
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
        var _titleAnswerRef_current, _artistAnswerRef_current;
        let rawTitleAnswer = ((_titleAnswerRef_current = titleAnswerRef.current) === null || _titleAnswerRef_current === void 0 ? void 0 : _titleAnswerRef_current.value) || "";
        let rawArtistAnswer = ((_artistAnswerRef_current = artistAnswerRef.current) === null || _artistAnswerRef_current === void 0 ? void 0 : _artistAnswerRef_current.value) || "";
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
    const startGame = ()=>{
        socketRef.current.emit('startGame');
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
            var _audioRef_current;
            setIsActive(true);
            setIsPaused(false);
            (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.play();
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
        return "".concat(String(seconds).padStart(2, "0"));
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Blindtest en VS !"
            }, void 0, false, {
                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                lineNumber: 323,
                columnNumber: 13
            }, this),
            roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Identifiant de la room: ",
                    roomCode
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                lineNumber: 325,
                columnNumber: 17
            }, this),
            !roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Connexion au serveur en cours..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 335,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 336,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Votre pseudo",
                            value: pseudo,
                            onChange: (e)=>setPseudo(e.target.value),
                            className: "bg-white text-black px-2 py-1 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 340,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-white px-4 py-1 text-black",
                            onClick: createRoom,
                            children: "Créer une partie"
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 347,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Ou bien en rejoindre une:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 348,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex gap-2",
                            onSubmit: joinRoom,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "bg-white text-black",
                                    type: "text",
                                    name: "roomCode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 350,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-white px-4 py-1 text-black",
                                    type: "submit",
                                    children: "Rejoindre"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 351,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 349,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                lineNumber: 330,
                columnNumber: 17
            }, this),
            roomCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8",
                children: [
                    roomCode && gameState === GAME_STATE.WAITING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center p-8 bg-[var(--middleground)] rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Salle ",
                                    roomCode,
                                    " - En attente"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 364,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Yo ",
                                    players[socketRef.current.id].pseudo,
                                    " ! On attend les autres joueurs ?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 365,
                                columnNumber: 29
                            }, this),
                            players[socketRef.current.id] && players[socketRef.current.id].roomLeader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Vous êtes le chef de salle !"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 368,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startGame,
                                        className: "mt-4 bg-[var(--valid)] text-white font-bold rounded px-4 py-2",
                                        children: "Lancer la partie !"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 369,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "En attente du chef de salle pour lancer la partie..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 374,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                        lineNumber: 363,
                        columnNumber: 25
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
                                                        lineNumber: 385,
                                                        columnNumber: 45
                                                    }, this),
                                                    pointsPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "ml-2 absolute points-popup",
                                                        children: pointsPopup
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                        lineNumber: 386,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 384,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 383,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrackAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            ref: audioRef,
                                            track: songs[currentSong],
                                            visible: gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 390,
                                            columnNumber: 37
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
                                                    lineNumber: 398,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 397,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 396,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 382,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrackAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ref: audioRef,
                                    track: songs[currentSong],
                                    visible: gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER
                                }, void 0, false, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 403,
                                    columnNumber: 33
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
                                                lineNumber: 409,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-3 rounded bg-purple-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute h-3 rounded transition-all duration-500 ".concat(timeLeft <= 5 ? "bg-[var(--accent-lighter)]" : "bg-[var(--accent)]"),
                                                    style: {
                                                        width: "".concat(progressBar, "%")
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 412,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                lineNumber: 411,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 408,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: gameStateMessage[1],
                                    className: "cursor-pointer bg-[var(--white)] mx-auto shadow-md my-4 text-[var(--accent)] duration-200 hover:text-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50",
                                    children: gameStateMessage[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 423,
                                    columnNumber: 33
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
                                                lineNumber: 434,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 433,
                                            columnNumber: 41
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
                                                                    lineNumber: 446,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "musicTitle",
                                                                    ref: titleAnswerRef,
                                                                    className: "".concat(gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER ? titleBox : 'bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--gray)]'),
                                                                    placeholder: "Votre réponse",
                                                                    type: "text",
                                                                    disabled: gameState !== GAME_STATE.PLAYING
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                    lineNumber: 447,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 445,
                                                            columnNumber: 49
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
                                                                    lineNumber: 461,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "artistName",
                                                                    ref: artistAnswerRef,
                                                                    className: "".concat(gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER ? artistBox : 'bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--gray)]'),
                                                                    placeholder: "Votre réponse",
                                                                    type: "text",
                                                                    disabled: gameState !== GAME_STATE.PLAYING
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                                    lineNumber: 462,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 460,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 444,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: gameState !== GAME_STATE.PLAYING,
                                                    className: gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.PAUSED ? "hidden" : "cursor-pointer bg-[var(--white)] mx-auto shadow-md mt-4 text-[var(--accent)] duration-200 hover:text-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50",
                                                    children: "Confirmer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 476,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 437,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true),
                                (gameState === GAME_STATE.GAME_OVER || gameState === GAME_STATE.SHOW_ANSWER) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Track, {
                                        track: songs[currentSong]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                        lineNumber: 489,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 488,
                                    columnNumber: 37
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
                                                lineNumber: 496,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 495,
                                            columnNumber: 41
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
                                                            lineNumber: 501,
                                                            columnNumber: 49
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
                                                            lineNumber: 502,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 500,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "artistName",
                                                            children: "Nom de l'artiste :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                            lineNumber: 509,
                                                            columnNumber: 49
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
                                                            lineNumber: 510,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 508,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 499,
                                            columnNumber: 41
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
                                                    lineNumber: 517,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextSong,
                                                    className: "bg-[var(--white)] text-black rounded px-4 py-2",
                                                    children: "Musique suivante"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                                    lineNumber: 521,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 516,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                            lineNumber: 381,
                            columnNumber: 29
                        }, this)
                    }, void 0, false),
                    players && Object.keys(players).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Joueurs:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                lineNumber: 534,
                                columnNumber: 33
                            }, this),
                            Object.entries(players).map((param)=>{
                                let [id, player] = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                player.pseudo,
                                                " (Score : ",
                                                player.score,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 537,
                                            columnNumber: 41
                                        }, this),
                                        player.answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-500",
                                            children: "A repondu !"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                            lineNumber: 539,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, id, true, {
                                    fileName: "[project]/src/app/jeu/vs/VSMode.js",
                                    lineNumber: 536,
                                    columnNumber: 37
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/jeu/vs/VSMode.js",
                        lineNumber: 533,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jeu/vs/VSMode.js",
                lineNumber: 361,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(VSMode, "2JgTBrvSil8ttW8rXQFky9xeqT4=");
_c = VSMode;
async function fetchTracks() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "genre", q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0", limit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 25, minRank = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, maxRank = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1000000;
    const res = await fetch("/api/tracks?mode=".concat(mode, "&q=").concat(encodeURIComponent(q), "&limit=").concat(limit, "&minRank=").concat(minRank, "&maxRank=").concat(maxRank));
    if (!res.ok) throw new Error("Erreur HTTP ".concat(res.status));
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

//# sourceMappingURL=src_ef78d95c._.js.map