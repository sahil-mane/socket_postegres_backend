const http = require("http");
const { config } = require("dotenv");
const app = require("./src/app.js");
const { Server } = require("socket.io");
const { default: setupSocket } = require("./src/config/socket.js");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

config();
setupSocket(io);

app.set("io",io)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("server listen in localhost:" + PORT);
});
