"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Track from '@/components/Track';
import TrackAudio from '@/components/TrackAudio';
import levenshtein from "fast-levenshtein";

export default function BlindtestJeu({ songs }) {
    const router = useRouter();
    const [currentSong, setCurrentSong] = useState(0);

    const titleAnswerRef = useRef(null);
    const artistAnswerRef = useRef(null);
    const audioRef = useRef(null);

    const [points, setPoints] = useState(0);
    const [pointsPopup, setPointsPopup] = useState(null);

    const [answers, setAnswers] = useState([]);

    function normalize(str = "") {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, "")
            .trim()
            .split(/\s+/)
            .sort()
            .join(" ");
    }

    function cleanTitle(title) {
        if (!title) return "";
        return title.replace(/\([^)]*\)/g, "").trim();
    }

    useEffect(() => {
        console.log(songs[currentSong]);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.src = songs[currentSong].preview;
            // do NOT autoplay: handleStart controls playback
        }
    }, [currentSong, songs]);

    const GAME_STATE = {
        PAUSED: "paused",
        PLAYING: "playing",
        SHOW_ANSWER: "show_answer",
        GAME_OVER: "game_over",
    };

    const [gameState, setGameState] = useState(GAME_STATE.PAUSED);

    const nextSong = () => {
        if (currentSong < songs.length - 1) setCurrentSong((p) => p + 1);
    };
    const prevSong = () => {
        if (currentSong > 0) setCurrentSong((p) => p - 1);
    };

    const [answerMessage, setAnswerMessage] = useState("");
    const [answerMessageColor, setAnswerMessageColor] = useState("");
    const [titleBox, setTitleBox] = useState("");
    const [artistBox, setArtistBox] = useState("");

    const handleAnswer = () => {
        let rawTitleAnswer = titleAnswerRef.current?.value || "";
        let rawArtistAnswer = artistAnswerRef.current?.value || "";
        // audioRef.current?.pause();
        let cleanedTitleAnswer = normalize(rawTitleAnswer);
        console.log(cleanedTitleAnswer);
        let cleanedArtistAnswer = normalize(rawArtistAnswer);
        console.log(cleanedArtistAnswer);
        let cleanedMusicTitle = normalize(cleanTitle(songs[currentSong].title_short));
        console.log(cleanedMusicTitle);
        let cleanedArtistName = normalize(songs[currentSong].artist.name);
        console.log(cleanedArtistName);
        setAnswers(prev => [...prev, {title: rawTitleAnswer, artist: rawArtistAnswer}]);
        const musicTitledistance = levenshtein.get(cleanedTitleAnswer, cleanedMusicTitle);
        const musicTitletolerance = Math.ceil(cleanedMusicTitle.length * 0.1);
        const artistNamedistance = levenshtein.get(cleanedArtistName, cleanedArtistAnswer);
        const artistNametolerance = Math.ceil(cleanedArtistName.length * 0.1);

        let correctTitle = false;
        let correctArtist = false;

        setTitleBox("bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--error)]");
        setArtistBox("bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--error)]");

        if (musicTitledistance <= musicTitletolerance) {
            correctTitle = true;
            setTitleBox("bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--valid)]");
        }
        if (artistNamedistance <= artistNametolerance) {
            correctArtist = true;
            setArtistBox("bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--valid)]");
        }

        if (correctTitle && correctArtist) {
            setAnswerMessage("Tout juste, bravo ! +11pts");
            setAnswerMessageColor("text-[var(--valid)]");
            setPoints((p) => p + 11);
            setPointsPopup("+11");
        } else if (correctArtist) {
            setAnswerMessage(`Tu as trouvé l'artiste mais pas la chanson. +5pts`);
            setAnswerMessageColor("text-[var(--valid)]");
            setPoints((p) => p + 5);
            setPointsPopup("+5");
        } else if (correctTitle) {
            setAnswerMessage(`Tu as trouvé la chanson mais pas l'artiste. +5pts`);
            setAnswerMessageColor("text-[var(--valid)]");
            setPoints((p) => p + 5);
            setPointsPopup("+5");
        } else {
            setAnswerMessage("Aucune bonne réponse... +0pts");
            setAnswerMessageColor("text-[var(--error)]");
            // no pointsPopup
        }

        if (currentSong >= 0 && currentSong < songs.length - 1) {
            setGameStateMessage(["Passer à la suite", nextSongBlindtest]);
            setGameState(GAME_STATE.SHOW_ANSWER);
        } else {
            setGameStateMessage(["Retour à l'accueil", goHome]);
            setGameState(GAME_STATE.GAME_OVER);
        }

        // IMPORTANT: on ne stoppe pas la lecture de l'audio ici (on veut qu'elle continue)
        // audioRef.current.pause(); // ne pas appeler
        handleReset();
    };

    // efface automatiquement le popup de points après un délai (useEffect, non pas setTimeout direct)
    useEffect(() => {
        if (!pointsPopup) return;
        const t = setTimeout(() => setPointsPopup(null), 900);
        return () => clearTimeout(t);
    }, [pointsPopup]);

    const nextSongBlindtest = () => {
        setCurrentSong((p) => p + 1);
        if (titleAnswerRef.current) titleAnswerRef.current.value = "";
        if (artistAnswerRef.current) artistAnswerRef.current.value = "";
        setGameState(GAME_STATE.PAUSED);
        setAnswerMessage("");
        setGameStateMessage(["Lancer la musique", handleStart]);
    };

    const goHome = () => router.push("/");

    const musicTime = 15;
    const [duration, setDuration] = useState(musicTime);
    const [timeLeft, setTimeLeft] = useState(musicTime);
    const [isPaused, setIsPaused] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);
    const progressBar = (timeLeft / duration) * 100;

    const handleStart = () => {
        if (timeLeft > 0) {
            setIsActive(true);
            setIsPaused(false);
            audioRef.current?.play();
            setGameState(GAME_STATE.PLAYING);
            setGameStateMessage(["Partie en cours", () => {}]);
        }
    };

    const handlePause = () => {
        if (isActive) {
            setIsPaused(true);
            setIsActive(false);
            if (timerRef.current) clearInterval(timerRef.current);
        }
        // Note: ne pause pas le player audio globalement (l'utilisateur doit pouvoir mettre pause via le player)
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(typeof duration === "number" ? duration : 0);
        if (timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current);
                        handleAnswer();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, isPaused]);

    const formatTime = (time) => {
        const seconds = time % 60;
        return `${String(seconds).padStart(2, "0")}`;
    };

    const [gameStateMessage, setGameStateMessage] = useState(["Lancer la musique", handleStart]);

    return (
        <main className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8">
            <h1 className="text-3xl font-bold mb-4 text-[var(--text)]">VOTRE BLINDTEST</h1>

            <div className="flex flex-col bg-[var(--middleground)] px-8 py-4 rounded-lg border border-[var(--foreground)] shadow-md">
                <div className="flex flex-row justify-between w-[100%] mb-4">
                    <div className="flex max-w-fit bg-[var(--middleground)] px-4 py-2 rounded-lg border border-[var(--foreground)] shadow">
                        <div className="relative flex items-center">
                            <p className="text-(--gray) whitespace-nowrap">{points} pts</p>
                            {pointsPopup && <p className="ml-2 absolute points-popup">{pointsPopup}</p>}
                        </div>
                    </div>
                    <TrackAudio
                        ref={audioRef}
                        track={songs[currentSong]}
                        visible={gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER}
                    />
                    <div className="flex max-w-fit bg-[var(--middleground)] px-4 py-2 rounded-lg border border-[var(--foreground)] shadow">
                        <div className="relative flex items-center text-right">
                            <p className="text-(--gray) whitespace-nowrap">{currentSong + 1} / {songs.length}</p>
                        </div>
                    </div>
                </div>
                <TrackAudio ref={audioRef} track={songs[currentSong]}
                            visible={gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER}/>
                {(gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.PAUSED) && (
                    <>
                        <div className="">
                            <p className="font-bold text-center text-xl text-[var(--text)]">{formatTime(timeLeft)}</p>

                            <div className={`relative h-3 rounded bg-purple-300`}>
                                <div
                                    className={`absolute h-3 rounded transition-all duration-500 ${timeLeft <= 5 ? "bg-[var(--accent-lighter)]" : "bg-[var(--accent)]"
                                    }`}
                                    style={{width: `${progressBar}%`}}
                                >
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <button
                    onClick={gameStateMessage[1]}
                    className="cursor-pointer bg-[var(--white)] mx-auto shadow-md my-4 text-[var(--accent)] duration-200 hover:text-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50"
                >
                    {gameStateMessage[0]}
                </button>

                {/* FORM / inputs */}
                {(gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.PAUSED) && (
                    <>
                        <div className="flex justify-center items-center mb-4">
                            <p className={answerMessageColor}>{answerMessage}</p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAnswer();
                            }}
                            className="flex flex-col flex-wrap gap-2"
                        >
                            <div className="flex gap-2 justify-center">
                                <div className="flex flex-col gap-0">
                                    <label htmlFor="musicTitle" className="text-[var(--text)]">Titre de la musique :</label>
                                    <input
                                        name="musicTitle"
                                        ref={titleAnswerRef}
                                        className={`${gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER
                                                ? titleBox
                                                : 'bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--gray)]'
                                        }`}
                                        placeholder="Votre réponse"
                                        type="text"
                                        disabled={gameState !== GAME_STATE.PLAYING}
                                    />
                                </div>

                                <div className="flex flex-col gap-0">
                                    <label htmlFor="artistName" className="text-[var(--text)]">Nom de l'artiste :</label>
                                    <input
                                        name="artistName"
                                        ref={artistAnswerRef}
                                        className={`${gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER
                                                ? artistBox
                                                : 'bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--gray)]'
                                        }`}
                                        placeholder="Votre réponse"
                                        type="text"
                                        disabled={gameState !== GAME_STATE.PLAYING}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={gameState !== GAME_STATE.PLAYING}
                                className={gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.PAUSED ? "hidden" : "cursor-pointer bg-[var(--white)] mx-auto shadow-md mt-4 text-[var(--accent)] duration-200 hover:text-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50"}
                            >
                                Confirmer
                            </button>
                        </form>
                    </>
                )}

                {(gameState === GAME_STATE.GAME_OVER || gameState === GAME_STATE.SHOW_ANSWER) && (
                    <div className="mt-4 mx-auto">
                        <Track track={songs[currentSong]} />
                    </div>
                )}

                {gameState === GAME_STATE.GAME_OVER && (
                    <>
                        <div className="flex justify-center items-center mb-4">
                            <p className={answerMessageColor}>{answerMessage}</p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex flex-col gap-0">
                                <label htmlFor="musicTitle">Titre de la musique :</label>
                                <input name="musicTitle" value={answers[currentSong].title}
                                       className={titleBox}
                                       placeholder="votre réponse" type="text"
                                       disabled={gameState !== GAME_STATE.PLAYING}/>
                            </div>

                            <div className="flex flex-col gap-0">
                                <label htmlFor="artistName">Nom de l'artiste :</label>
                                <input name="artistName" value={answers[currentSong].artist}
                                       className={artistBox}
                                       placeholder="votre réponse" type="text"
                                       disabled={gameState !== GAME_STATE.PLAYING}/>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button onClick={prevSong}
                                    className="bg-[var(--white)] text-black rounded px-4 py-2">Musique
                                précédante
                            </button>
                            <button onClick={nextSong}
                                    className="bg-[var(--white)] text-black rounded px-4 py-2">Musique suivante
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
