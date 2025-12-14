"use client";
import React, { forwardRef, useEffect, useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const TrackAudio = forwardRef(({ track, visible }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const barRef = useRef(null);
    const intervalRef = useRef(null); // NEW — interval 1s

    // Sync src quand track change
    useEffect(() => {
        if (!ref?.current) return;
        const audio = ref.current;

        if (track?.preview && audio.src !== track.preview) {
            audio.src = track.preview;
        }
    }, [track, ref]);

    // Gestion des events play/pause + loadedmetadata
    useEffect(() => {
        if (!ref?.current) return;
        const audio = ref.current;

        const onLoaded = () => {
            setDuration(audio.duration || 0);
        };

        const onPlay = () => {
            setIsPlaying(true);

            // NEW — démarrer un timer 1s
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (!audio.duration || isDragging) return;

                const pct = (audio.currentTime / audio.duration) * 100;
                setAudioProgress(pct);
            }, 999);
        };

        const onPause = () => {
            setIsPlaying(false);
            clearInterval(intervalRef.current);
        };

        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);

        return () => {
            audio.removeEventListener("loadedmetadata", onLoaded);
            audio.removeEventListener("play", onPlay);
            audio.removeEventListener("pause", onPause);
            clearInterval(intervalRef.current);
        };
    }, [ref, isDragging]);

    // PLAY / PAUSE
    const togglePlay = () => {
        if (!ref?.current) return;
        const audio = ref.current;
        audio.paused ? audio.play() : audio.pause();
    };

    // ----------- DRAG SEEK -----------
    const handleDrag = (e) => {
        if (!barRef.current || !ref.current || !duration) return;

        const rect = barRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        const pct = (x / rect.width) * 100;

        setAudioProgress(pct);
    };

    const stopDrag = (e) => {
        if (!barRef.current || !ref.current || !duration) return;

        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
        setIsDragging(false);

        const rect = barRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        const newTime = (x / rect.width) * duration;

        ref.current.currentTime = newTime;
    };

    const startDrag = (e) => {
        setIsDragging(true);
        handleDrag(e);
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDrag);
    };

    // UI only when visible
    return (
        <div className="w-full mx-4">
            <audio ref={ref}>
                <source src={track?.preview} type="audio/mpeg" />
            </audio>

            {visible && (
                <div className="w-full flex flex-col gap-2 p-3 bg-(--background) rounded-lg border border-(--foreground) shadow-sm">
                    <div className="flex items-center gap-3">

                        {/* PLAY / PAUSE */}
                        <button
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause" : "Play"}
                            className="hover:scale-[110%] transition cursor-pointer"
                        >
                            {isPlaying ? (
                                <Pause size={22} color="var(--gray)" fill="var(--gray)" strokeWidth="1px" />
                            ) : (
                                <Play size={22} color="var(--gray)" fill="var(--gray)" strokeWidth="1px" />
                            )}
                        </button>

                        {/* -------- BARRE -------- */}
                        <div
                            ref={barRef}
                            className="relative w-full h-3 bg-purple-300 rounded cursor-pointer select-none"
                            onMouseDown={startDrag}
                        >
                            <div
                                className={`absolute h-3 rounded bg-(--accent) ${
                                    isDragging ? "" : "transition-all duration-500"
                                }`}
                                style={{ width: `${audioProgress}%` }}
                            />
                        </div>
                    </div>

                    {/* Times */}
                    <div className="flex justify-between text-xs text-(--gray)">
                        <span>{formatTime(ref.current ? ref.current.currentTime : 0)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            )}
        </div>
    );
});

// Format mm:ss
function formatTime(sec) {
    if (!sec || isNaN(sec)) return "00:00";
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export default TrackAudio;
