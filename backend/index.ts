// Commands for Node with Typescript
// npx ts-node src/index.ts
// npm i -D nodemon ts-node
//  scripts - "dev": "nodemon src/index.ts"

import {Socket} from "socket.io";
import http from "http";

import express from "express";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(http);
const host = `localhost:8080`;
let users: any[] = [];

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket: Socket) => {
    console.log("User has connected " + socket.id);

    socket.on("message", (data: string) => {
        io.emit("messageRes", data);
    })

    socket.on("newUser", (user) => {
        users.push(user);
        io.emit("newUserRes", users);
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected " + socket.id)
        users = users.filter((user) => user.socketID != socket.id);
        io.emit("newUserRes", users);
        socket.disconnect();
    })
})

app.get("/", (req, res) => {
    return res.send("Testing Server").status(200);
})

server.listen(8080, () => {
    console.log(`Server running ${host}`);
})