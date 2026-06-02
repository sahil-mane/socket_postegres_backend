import { config } from "dotenv";
config();
import http from "http";
import app from "./src/app.js";
import { Server } from "socket.io";
import setupSocket from "./src/config/socket.js";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});


setupSocket(io);
console.log("DATABASE_URL =", process.env.DATABASE_URL);

app.set("io", io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("server listen in localhost:" + PORT);
});
