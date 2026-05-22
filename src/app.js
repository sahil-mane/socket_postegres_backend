import express from "express";
import cors from "cors";
import userRoutes from "./module/users/users.routes.js";
import todoRoutes from "./module/todos/todos.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/todo", todoRoutes);

app.use((err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
