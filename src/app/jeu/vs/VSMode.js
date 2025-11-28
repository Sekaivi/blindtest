"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import BlindtestLoader from "@/components/Loading";
import TrackAudio from '@/components/TrackAudio';
import Track from "@/components/Track" ;
import { createServerSearchParamsForServerPage } from "next/dist/server/request/search-params";
import { ConstructionIcon } from "lucide-react";

export default function VSMode() {

    // CLASSEMENT EN FIN DE PARTIE !!!

    // state machine
    const GAME_STATE = {
        PAUSED: 'paused',
        PLAYING: "playing",
        SHOW_ANSWER: "show_answer",
        GAME_OVER: "game_over",
        WAITING: "waiting",
    };
    const [isConnected, setIsConnected] = useState(false);
    const [pseudo, setPseudo] = useState("");
    const [players, setPlayers] = useState({});
    const [roomCode, setRoomCode] = useState('');
    const [gameState, setGameState] = useState(false); // à mettre à jour en fonction du serveur uniquement
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(0);
    // POUR LE CHAT D'UNE ROOM !!
    const [message, setMessages] = useState([]);
    // pour garder une ref sur les inputs de reponse
    const titleAnswerRef = useRef(null);
    const artistAnswerRef = useRef(null);
     const socketRef = useRef(null);
    const playersRef = useRef(players);

    // variables pour l'interface ?
    const [points, setPoints] = useState(0);
    const [pointsPopup, setPointsPopup] = useState(null);
    const audioRef = useRef(null); // controler l'audio !

    // POUR LES REPONSES !!
    const [answers, setAnswers] = useState([]);
    const [answerMessage, setAnswerMessage] = useState("");
    const [answerMessageColor, setAnswerMessageColor] = useState('');
    const [titleBox, setTitleBox] = useState('');
    const [artistBox, setArtistBox] = useState('');

    // uniquement pour la fin pour la visualisation
    const nextSong = () => {
        if (currentSong < songs.length - 1) {
            setCurrentSong(prev => prev + 1)
        }
    };

    const prevSong = () => {
        if (currentSong > 0) {
            setCurrentSong(prev => prev - 1)
        }
    };

    const updatePlayerProperty = (playerId, key, newValue) => {
        setPlayers(prevPlayers => {
            const updatedPlayers = { ...prevPlayers };

            if (updatedPlayers[playerId]) {
                updatedPlayers[playerId] = {
                    ...updatedPlayers[playerId],
                    [key]: newValue
                };
            }
            return updatedPlayers;
        });
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.src = songs[currentSong].preview;
        }
    }, [currentSong]);

    useEffect(() => {
        playersRef.current = players;
    }, [players]);

    useEffect(() => {
        console.log(gameState);
    }, [gameState]);


    useEffect(() => {
        console.log("Toutes les réponses :", answers);
    }, [answers]);


    // sockets communication ^^
    useEffect(() => {
        const socket = io("http://localhost:3001", {
            path: "/socket.io",
            transports: ["websocket"],
        });

        socketRef.current = socket;

        socket.on('connect', () => {
            socket.emit('message', 'hallo');
            setIsConnected(true);
        });

        socket.on('roomCreated', async (roomCode) => {
            setRoomCode(roomCode);
            // ajouter des parametres lors de la creation d'une room pour permettre plus de choses ?
            try {
                const tracks = await fetchTracks("search", "disney" , 5);
                setSongs(tracks);
                socket.emit('setTrackList', tracks);
            } catch (err) {
                console.error(err);
            }
        });

        socket.on('roomJoined', (roomCode) => {
            setRoomCode(roomCode);
        });

        socket.on('roomError', (error) => {
            console.log(error);
        });

        // mise à jour des JOUEURS
        socket.on("currentPlayers", (serverPlayers) => {
            setPlayers(serverPlayers);
            playersRef.current = serverPlayers;
        });

        socket.on("playerHasAnswered", (data) => {
            const [playerId, answerState] = data;
            updatePlayerProperty(playerId, 'answered', answerState);
        });

        socket.on('setGameState', (serverGameState) => {
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
                    setGameStateMessage(['Passer à la suite', serverNextSong]);
                }
            }

        });

        socket.on('setTrackList', (tracks) => {
            setSongs(tracks);
        });

        socket.on('nextSongInBlindtest', () => {
            setCurrentSong((p) => p + 1);
            const currentPlayers = playersRef.current;
            titleAnswerRef.current.value = "";
            artistAnswerRef.current.value = "";
            setAnswerMessage('');
            if (currentPlayers[socket.id].roomLeader) {
                setGameStateMessage(['Lancer la musique', setServerPlaying]);
            }
        });

        socket.on('playerAnswerResult', ({ correctTitle, correctArtist, totalPoints, pointsGained }) => {
            setTitleBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--error)]');
            setArtistBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--error)]');

            if (correctTitle) {
                setTitleBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--valid)]');
            }

            if (correctArtist) {
                setArtistBox('bg-[var(--white)] text-[var(--black)] rounded px-4 py-2 placeholder-[var(--gray)] border border-[var(--valid)]')
            }

            if (correctTitle && correctArtist) {
                setAnswerMessage('Tout juste, bravo ! +11pts');
                setAnswerMessageColor('text-[var(--valid)]');
            } else if (correctArtist) {
                setAnswerMessage(`Tu as trouvé l'artiste mais pas la chanson. +5pts`);
                setAnswerMessageColor('text-[var(--valid)]');
            } else if (correctTitle) {
                setAnswerMessage(`Tu as trouvé la chanson mais pas l'artiste. +5pts`);
                setAnswerMessageColor('text-[var(--valid)]');
            } else {
                setAnswerMessage("Aucune bonne réponse... +0pts");
                setAnswerMessageColor('text-[var(--error)]');
            }

            setPoints(totalPoints);
            setPointsPopup('+' + pointsGained);
        });

        socket.on('forceSubmitAnswer', () => {
            handleAnswer();
        })

        return () => {
            setIsConnected(false);
            socket.disconnect();
        }
    }, []);

    // fonctions pour les sockets
    const createRoom = () => {
        if (!pseudo.trim()) return alert("Entrez un pseudo !");
        socketRef.current.emit("createRoom", pseudo);
    };

    const joinRoom = (e) => {
        e.preventDefault();
        const joinRoomCode = e.target.roomCode.value.trim();
        if (!pseudo.trim() || !joinRoomCode)
            return alert("Pseudo et code de room requis !");
        socketRef.current.emit("joinRoom", { pseudo, joinRoomCode });
    };

    const handleAnswer = () => {
        let rawTitleAnswer = titleAnswerRef.current?.value || "";
        let rawArtistAnswer = artistAnswerRef.current?.value || "";
        socketRef.current.emit('playerAnswer', { rawTitleAnswer, rawArtistAnswer });
        setAnswers(prev => [...prev, { title: rawTitleAnswer, artist: rawArtistAnswer }]);
    };

    const setServerPlaying = () => {
        socketRef.current.emit('setGamePlaying');
    }

    const serverNextSong = () => {
        socketRef.current.emit('nextSongBlindtest') ;
    }

    const startGame = () => {
        socketRef.current.emit('startGame');
    };

    // CONCERNANT LE TIMER !!
    //
    //
    const musicTime = 20;
    const [duration, setDuration] = useState(musicTime);
    const [timeLeft, setTimeLeft] = useState(musicTime);
    const [isPaused, setIsPaused] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);
    const progressBar = (timeLeft / duration) * 100;

    // timer qui est lancé
    const handleStart = () => {
        if (timeLeft > 0) {
            setIsActive(true);
            setIsPaused(false);
            audioRef.current?.play();
            setGameStateMessage(['Partie en cours', () => {
            }]);
        }
    };

    const handlePause = () => {
        if (isActive) {
            setIsPaused(true);
            setIsActive(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(typeof duration === "number" ? duration : 0);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isActive, isPaused]);

    const formatTime = (time) => {
        const seconds = time % 60;
        return `${String(seconds).padStart(2, "0")}`;
    };
    // FIN DE LA PARTIE CONCERNANT LES MUSIQUES !!!
    //
    //

    setTimeout(() => {
        setPointsPopup(null);
    }, 5000);

    const [gameStateMessage, setGameStateMessage] = useState(['Lancer la musique', setServerPlaying]);

    // la page
    return (
        <>
            <h1>Blindtest en VS !</h1>
            {roomCode && (
                <p>Identifiant de la room: {roomCode}</p>
            )}

            {/* 1. Écran de connexion/création de salle (Lobby) */}
            {!roomCode && (
                <div className="flex flex-col items-center gap-4">

                    {/* Si non connecté */}
                    {!isConnected ? (
                        <>
                            <p>Connexion au serveur en cours...</p>
                            <BlindtestLoader />
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Votre pseudo"
                                value={pseudo}
                                onChange={(e) => setPseudo(e.target.value)}
                                className="bg-white text-black px-2 py-1 rounded"
                            />
                            <button className="bg-white px-4 py-1 text-black" onClick={createRoom}>Créer une partie</button>
                            <p>Ou bien en rejoindre une:</p>
                            <form className="flex gap-2" onSubmit={joinRoom}>
                                <input className="bg-white text-black" type="text" name="roomCode" />
                                <button className="bg-white px-4 py-1 text-black" type="submit">Rejoindre</button>
                            </form>
                        </>
                    )}
                </div>
            )}


            {/* 2. Interface de Jeu (Blindtest) - Affichée UNIQUEMENT si roomCode existe */}
            {roomCode && (
                <main className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8">
                    {roomCode && gameState === GAME_STATE.WAITING && (
                        <div className="flex flex-col items-center p-8 bg-[var(--middleground)] rounded-lg">
                            <h2>Salle {roomCode} - En attente</h2>
                            <p>Yo {players[socketRef.current.id].pseudo} ! On attend les autres joueurs ?</p>
                            {players[socketRef.current.id] && players[socketRef.current.id].roomLeader ? (
                                <>
                                    <p>Vous êtes le chef de salle !</p>
                                    <button onClick={startGame} className="mt-4 bg-[var(--valid)] text-white font-bold rounded px-4 py-2">
                                        Lancer la partie !
                                    </button>
                                </>
                            ) : (
                                <p>En attente du chef de salle pour lancer la partie...</p>
                            )}
                        </div>
                    )}

                    {roomCode && gameState !== GAME_STATE.WAITING && (
                        <>
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
                                    visible={gameState === GAME_STATE.SHOW_ANSWER || gameState === GAME_STATE.GAME_OVER} />

                                {(gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.PAUSED) && (
                                    <>
                                        <div className="">
                                            <p className="font-bold text-center text-xl text-[var(--text)]">{formatTime(timeLeft)}</p>

                                            <div className={`relative h-3 rounded bg-purple-300`}>
                                                <div
                                                    className={`absolute h-3 rounded transition-all duration-500 ${timeLeft <= 5 ? "bg-[var(--accent-lighter)]" : "bg-[var(--accent)]"
                                                        }`}
                                                    style={{ width: `${progressBar}%` }}
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
                                                    disabled={gameState !== GAME_STATE.PLAYING} />
                                            </div>

                                            <div className="flex flex-col gap-0">
                                                <label htmlFor="artistName">Nom de l'artiste :</label>
                                                <input name="artistName" value={answers[currentSong].artist}
                                                    className={artistBox}
                                                    placeholder="votre réponse" type="text"
                                                    disabled={gameState !== GAME_STATE.PLAYING} />
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
                        </>
                    )}

                    {players && Object.keys(players).length > 0 &&
                        (
                            <div className="mt-4">
                                <h3>Joueurs:</h3>
                                {Object.entries(players).map(([id, player]) => (
                                    <div key={id}>
                                        <p>{player.pseudo} (Score : {player.score})</p>
                                        {player.answered && (
                                            <p className="text-green-500">A repondu !</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                </main>
            )}
        </>
    );
}

async function fetchTracks(mode = "genre", q = "0", limit = 25, minRank = 0, maxRank = 1000000) {
    const res = await fetch(
        `/api/tracks?mode=${mode}&q=${encodeURIComponent(q)}&limit=${limit}&minRank=${minRank}&maxRank=${maxRank}`
    );
    if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
    const data = await res.json();
    return data;
}