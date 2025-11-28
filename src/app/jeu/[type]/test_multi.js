import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function TestMulti({ roomId, playerName }) {
  const [scores, setScores] = useState({});
  const [currentSong, setCurrentSong] = useState(0);

  useEffect(() => {
    socket.emit("joinRoom", { roomId, playerName });

    socket.on("roomUpdate", (room) => console.log("Room update:", room));
    socket.on("updateScores", (newScores) => setScores(newScores));
    socket.on("nextSong", (songIndex) => setCurrentSong(songIndex));

    return () => {
      socket.off("roomUpdate");
      socket.off("updateScores");
      socket.off("nextSong");
    };
  }, []);

  const handleAnswer = (titleCorrect, artistCorrect) => {
    socket.emit("answer", { roomId, playerName, titleCorrect, artistCorrect });
  };

  const handleNextSong = () => {
    socket.emit("nextSong", { roomId });
  };

  return (
    <div>
      <h2>Blindtest VS</h2>
      <p>Song: {currentSong}</p>
      <p>Scores: {JSON.stringify(scores)}</p>
      <button onClick={() => handleAnswer(1, 0)}>Réponse Titre Correct</button>
      <button onClick={() => handleNextSong()}>Next Song</button>
    </div>
  );
}
