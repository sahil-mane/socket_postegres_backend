import { decodeToken } from "../utils/jwt.js";

const setupSocket = (io) => {
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth.token;

      if (!token) {
        return next(new Error("Unauthorized"));
      }
      const decoded = decodeToken(token);
      socket.user = decoded;
      next();
    } catch (error) {
      new Error("Invalid token");
    }
  });

  io.on("connection", (socket) => {

    socket.join(String(socket?.user?.id));

    socket.on("disconnect", () => {
      console.log("User disconnected", socket?.id);
    });
  });
};

export default setupSocket;
