export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { Server } from "socket.io";

let io;

export async function GET(req) {
    if (!io) {
        console.log("Création du serveur socket");
        const server = req.socket?.server;
        console.log('serveur obj:') ;
        console.log(server) ;
        io = new Server(server, {
            path: "/api/socket",
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            },
        });
        io.on('connection', (socket) => {
            console.log("Nouvelle connexion :D. id: " + socket.id);
            socket.on("message", (data) => {
                console.log('message reçu: ', data);
                io.emit('message', data);
            });
            socket.on('disconnect', (reason) => {
                console.log('Déconnexion du socket :', socket.id, 'raison :', reason);
            });

        });
    } else {
        console.log('socket.io déjà initialisé');
    }
    return new Response("Socket.io is READYYY") ;
}