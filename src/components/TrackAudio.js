"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";

const TrackAudio = forwardRef(({ track, visible }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0); // 0..100
    const [duration, setDuration] = useState(0);

    // Sync src quand track change (sécurise si parent ne set pas src)
    useEffect(() => {
        if (!ref?.current) return;
        const audio = ref.current;
        if (track?.preview) {
            if (audio.src !== track.preview) audio.src = track.preview;
        }
        // ne pas autoplay ici ; le parent contrôle play()
    }, [track, ref]);

    // Events : timeupdate, loadedmetadata, play/pause
    useEffect(() => {
        if (!ref?.current) return;
        const audio = ref.current;

        const onTimeUpdate = () => {
            if (!audio.duration || isNaN(audio.duration)) {
                setAudioProgress(0);
                return;
            }
            const pct = (audio.currentTime / audio.duration) * 100;
            setAudioProgress(pct);
        };

        const onLoaded = () => {
            setDuration(audio.duration || 0);
            onTimeUpdate();
        };

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);

        // cleanup
        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("loadedmetadata", onLoaded);
            audio.removeEventListener("play", onPlay);
            audio.removeEventListener("pause", onPause);
        };
    }, [ref]);

    const togglePlay = () => {
        if (!ref?.current) return;
        const audio = ref.current;
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        // isPlaying sera mis à jour par les handlers play/pause ci-dessus
    };

    const handleSeek = (e) => {
        if (!ref?.current || !duration) return;
        const val = Number(e.target.value); // 0..100
        const newTime = (val / 100) * duration;
        ref.current.currentTime = newTime;
        setAudioProgress(val);
    };

    // On affiche l'élément audio quoi qu'il arrive (pour que la lecture continue)
    // mais l'UI (bouton + barre) n'apparaît que si visible === true
    return (
        <div className="w-full mx-4">
            {/* Element audio réel : toujours présent */}
            <audio ref={ref}>
                <source src={track?.preview} type="audio/mpeg" />
            </audio>

            {/* UI visible seulement après show answer / game over */}
            {visible && (
                <div className="w-full flex flex-col gap-2 p-3 bg-(--background) rounded-lg border border-(--foreground) shadow-sm">
                    <div className="flex items-center gap-3">
                        {/* Play/Pause */}
                        <button
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause" : "Play"}
                            className="hover:scale-[110%] transition cursor-pointer"
                        >
                            {isPlaying ? <Pause size={22} color="var(--gray)" fill="var(--gray)" strokeWidth="1px" /> : <Play size={22} color="var(--gray)" fill="var(--gray)" strokeWidth="1px" />}
                        </button>

                        {/* Barre de lecture stylée + draggable */}
                        <div className="relative w-full select-none">

                            {/* --- BARRE VISUELLE --- */}
                            <div className="relative h-3 rounded bg-purple-300 overflow-hidden">
                                <div
                                    className={`absolute h-3 rounded transition-all duration-300 bg-(--accent)`}
                                    style={{ width: `${audioProgress}%` }}
                                />
                            </div>

                            {/* --- INPUT RANGE INVISIBLE MAIS INTERACTIF --- */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={Math.max(0, Math.min(100, audioProgress))}
                                onChange={handleSeek}
                                className="absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer"
                                style={{ WebkitAppearance: "none" }}
                            />
                        </div>
                    </div>

                    {/* Times */}
                    <div className="flex justify-between text-xs text-(--gray)">
            <span>
              {ref.current ? formatTime(ref.current.currentTime) : "00:00"}
            </span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            )}
        </div>
    );
});

// utilitaire local pour formatage hh:mm:ss -> mm:ss
function formatTime(sec) {
    if (!sec || isNaN(sec)) return "00:00";
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export default TrackAudio;
