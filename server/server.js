// server.js
const { createServer } = require("http");
const { join } = require("path");
const { Server } = require("socket.io");
const levenshtein = require("fast-levenshtein");

const PORT = 3001;
const server = createServer();

const io = new Server(server, {
  cors: {
    origin: "*", // tu peux mettre "http://localhost:3000"
  },
  path: "/socket.io",
});

const GAME_STATE = {
  PAUSED: 'paused',
  PLAYING: "playing",
  SHOW_ANSWER: "show_answer",
  GAME_OVER: "game_over",
  WAITING: "waiting",
};

const INTERVAL = 20 * 1000; // 15 secondes en ms
const MAX_BONUS_TEMPS = 100;
const MIN_TIME_GUARANTEE_MS = 1;

// Gestion du jeu virtuel
const rooms = [];

io.on('connection', (socket) => {
  console.log('Nouveau joueur: ' + socket.id);


  // recevoir un message classique
  socket.on("message", (data) => {
    console.log("Message reçu:", data);
    io.emit('message', data); // broadcast à tous
  });

  // créer une room
  socket.on('createRoom', (pseudo) => {
    let roomCode;
    do {
      roomCode = generateRoomCode();
    } while (io.sockets.adapter.rooms.has(roomCode));

    socket.join(roomCode);
    console.log(`${socket.id} created and joined room: ${roomCode}`);

    let players = {};
    players[socket.id] = {
      id: socket.id,
      pseudo: pseudo,
      roomLeader: true,
      score: 0,
      answered: false,
    }

    rooms[roomCode] = {
      roomCode: roomCode,
      gameState: GAME_STATE.WAITING,
      players: players,
      currentSong: 0,
      tracks: [],
      remainingTime: INTERVAL,
      messages: [],

    };

    socket.roomCode = roomCode;
    const room = rooms[roomCode];
    socket.emit("roomCreated", roomCode);
    io.to(roomCode).emit("currentPlayers", room.players);
    io.to(roomCode).emit("setGameState", room.gameState);
  });

  // rejoindre une room
  socket.on('joinRoom', ({ pseudo, joinRoomCode }) => {
    if (io.sockets.adapter.rooms.has(joinRoomCode)) {
      const roomCode = joinRoomCode;
      const roomSize = io.sockets.adapter.rooms.get(roomCode).size;
      // max 8 personnes ?
      if (roomSize < 8) {
        socket.join(roomCode);
        console.log(`${socket.id} joined room: ${roomCode}`);
        socket.emit("roomJoined", roomCode);

        const room = rooms[roomCode];

        room.players[socket.id] = {
          id: socket.id,
          pseudo: pseudo,
          roomLeader: false,
          score: 0,
          answered: false,
        }
        socket.roomCode = roomCode;
        socket.emit("setTrackList", room.tracks);
        io.to(roomCode).emit("currentPlayers", room.players);
        io.to(roomCode).emit("setGameState", room.gameState);

      } else {
        socket.emit("roomError", "Cette room est pleine");
      }
    } else {
      socket.emit("roomError", "Cette room n'existe pas: " + joinRoomCode);
    }
  });

  socket.on('setTrackList', (tracks) => {
    if (Object.keys(tracks).length > 0) {
      const roomCode = socket.roomCode;
      const room = rooms[roomCode];
      room.tracks = tracks;
    } else {
      socket.emit('forceDisconnect');
    }
  })

  socket.on('startGame', () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (room) {
      if (room.players[socket.id].roomLeader) {
        room.gameState = GAME_STATE.PAUSED;
        io.to(roomCode).emit("setGameState", GAME_STATE.PAUSED);
      } else {
        console.log('erreur autorisation')
      }
    } else {
      console.error("La room n'existe pas.")
    }
  });

  socket.on('setGamePlaying', () => {
    const room = getRoom(socket);
    const roomCode = socket.roomCode;
    if (room) {
      if (checkRoomLeader(room, socket)) {
        room.gameState = GAME_STATE.PLAYING;
        roomEmit(roomCode, "setGameState", room.gameState);
        roomEmit(roomCode, "setTrackList", room.tracks);
        room.roundTimerId = setTimeout(() => {
          forceFinDeTour(roomCode);
        }, INTERVAL);
      } else {
        console.log('erreur autorisation');
      }
    } else {
      console.error("La room n'existe pas.");
    }
  });

  socket.on('nextSongBlindtest', () => {
    const room = getRoom(socket);
    const roomCode = socket.roomCode;
    if (room) {
      const currentSong = room.currentSong;
      const songs = room.tracks;
      if (checkRoomLeader(room, socket)) {
        if (currentSong >= 0 && currentSong < songs.length - 1) {
          room.currentSong += 1;
          room.gameState = GAME_STATE.PAUSED;
          for (const playerId in room.players) {
            if (room.players.hasOwnProperty(playerId)) {
              room.players[playerId].answered = false;
            }
          }
          roomEmit(roomCode, 'setGameState', room.gameState);
          roomEmit(roomCode, 'nextSongInBlindtest', room.currentSong);
          roomEmit(roomCode, 'currentPlayers', room.players);
        } else {
          console.log("Cette room n'est plus sensée etre en phase de jeu");
        }
      } else {
        console.log('erreur autorisation');
      }
    } else {
      console.error("La room n'existe pas.");
    }
  })


  socket.on('playerAnswer', ({ rawTitleAnswer, rawArtistAnswer }) => {

    const room = getRoom(socket);
    const roomCode = socket.roomCode;

    if (!room) {
      console.error(`Réponse reçue, mais salle non trouvée pour socket ${socket.id}`);
      return;
    }

    if (room.gameState !== GAME_STATE.PLAYING) {
      console.log(`Réponse ignorée, la salle ${roomCode} n'est pas en phase de réponse.`);
      return;
    }

    const player = room.players[socket.id];

    if (player.answered) {
      console.log("ce joueur a deja repondu");
      return;
    } else {
      player.answered = true;
    }

    const answerResult = handlePlayerAnswer(room, player, rawTitleAnswer, rawArtistAnswer);
    player.score += answerResult.pointsGained;
    answerResult.totalPoints = player.score;
    socket.emit('playerAnswerResult', answerResult);

    roomEmit(socket.roomCode, 'playerHasAnswered', [socket.id, player.answered, player.score]);

    const allPlayersAnswered = checkAllPlayersAnswered(room);
    if (allPlayersAnswered) {
      clearTimeout(room.roundTimerId);
      room.roundTimerId = null;
      const currentSong = room.currentSong;
      songs = room.tracks;
      if (currentSong >= 0 && currentSong < songs.length - 1) {
        room.gameState = GAME_STATE.SHOW_ANSWER;
      } else {
        room.gameState = GAME_STATE.GAME_OVER;
      }
      roomEmit(room.roomCode, 'setGameState', room.gameState);
    }
  });

  socket.on('chatMessage', (messageText) => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (room) {
      const playerId = socket.id;
      const playerPseudo = room.players[playerId]?.pseudo || 'Anonyme';

      const message = {
        id: Date.now(),
        text: messageText,
        sender: playerPseudo,
        senderId: playerId,
        timestamp: new Date().toLocaleTimeString(),
      };

      room.messages.push(message);

      roomEmit(roomCode, 'newChatMessage', message);

      // si on veut limiter la taille des messages + potentiellement envoyer un warning
      /* if (room.messages.length > 50) {
        room.messages.shift();
      } */
    }
  });

  socket.on("disconnect", (reason) => {
    console.log("Joueur déconnecté :", socket.id, "raison :", reason);
    if (!socket.roomCode) return;
    const room = rooms[socket.roomCode];
    io.to(socket.roomCode).emit("playerDisconnected", socket.id);
    delete room.players[socket.id];
    io.to(socket.roomCode).emit("currentPlayers", room.players);
    if (io.sockets.adapter.rooms.get(socket.roomCode)?.size === 0) {
      delete rooms[socket.roomCode];
      console.log(`Room ${socket.roomCode} supprimée.`);
    }
  });
});

// écouter le port **en dehors** des événements
server.listen(PORT, () => {
  console.log(`Socket.IO server running on http://localhost:${PORT}`);
});

function generateRoomCode() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD") // retire les accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "") // retire la ponctuation
    .trim()
    .split(/\s+/) // coupe en mots
    .sort() // trie les mots alphabétiquement (pour gérer l’ordre)
    .join(" "); // reconstruit
}

function cleanTitle(title) {
  if (!title) return "";
  // supprime tout ce qui est entre parenthèses (y compris les parenthèses)
  return title.replace(/\([^)]*\)/g, "").trim();
}

function handlePlayerAnswer(room, player, rawTitleAnswer, rawArtistAnswer) {

  const playersMap = room.players;
  const playersList = Object.values(playersMap);
  const hasSomeoneAlreadyAnswered = playersList.some(p => p.answered);
  const firstToAnswer = !hasSomeoneAlreadyAnswered;

  const track = room.tracks[room.currentSong];
  let cleanedTitleAnswer = normalize(rawTitleAnswer);
  let cleanedArtistAnswer = normalize(rawArtistAnswer);
  let cleanedMusicTitle = normalize(cleanTitle(track.title_short));
  let cleanedArtistName = normalize(track.artist.name);

  const musicTitledistance = levenshtein.get(cleanedTitleAnswer, cleanedMusicTitle);
  const musicTitletolerance = Math.ceil(cleanedMusicTitle.length * 0.1);
  const artistNamedistance = levenshtein.get(cleanedArtistName, cleanedArtistAnswer);
  const artistNametolerance = Math.ceil(cleanedArtistName.length * 0.1);
  let correctTitle = false;
  let correctArtist = false;

  if (musicTitledistance <= musicTitletolerance) {
    correctTitle = true;
  }
  if (artistNamedistance <= artistNametolerance) {
    correctArtist = true;
  }

  let points = 0;
  if (correctTitle && correctArtist) {
    points += 11;
  } else if (correctTitle || correctArtist) {
    points += 5;
  } else {
    return ({
      correctTitle: correctTitle,
      correctArtist: correctArtist,
      totalPoints: player.score,
      pointsGained: points
    });
  }

  const tempsRestant = room.remainingTime;
  const tempsRestantClamped = Math.max(MIN_TIME_GUARANTEE_MS, tempsRestant);
  const bonusTemps = Math.floor(MAX_BONUS_TEMPS * (tempsRestantClamped / INTERVAL));

  points += bonusTemps; // Ajouter le bonus temps

  if (firstToAnswer && (correctTitle || correctArtist)) {
    points + 50;
  }

  return ({
    correctTitle: correctTitle,
    correctArtist: correctArtist,
    totalPoints: player.score,
    pointsGained: points,
  });
}

function forceFinDeTour(roomCode) {
  io.to(roomCode).emit("forceSubmitAnswer");
}

function checkAllPlayersAnswered(room) {
  const playersObject = room.players;
  const playersArray = Object.values(playersObject);
  const allAnswered = playersArray.every(player => player.answered === true);
  return allAnswered;
}

function getRoom(socket) {
  const roomCode = socket.roomCode;
  const room = rooms[roomCode];
  return room
}

function checkRoomLeader(room, socket) {
  return room.players[socket.id].roomLeader;
}

function roomEmit(roomCode, actionToDo, dataToSend = null) {
  io.to(roomCode).emit(actionToDo, dataToSend);
}