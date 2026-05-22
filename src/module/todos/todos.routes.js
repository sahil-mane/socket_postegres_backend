import express from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import todoController from "./todos.controllers.js";

const todoRoutes = express.Router();

todoRoutes.post("/createTodo", authMiddleware, todoController.createTodo);
todoRoutes.post("/getAllTodo", authMiddleware, todoController.getAllTodos);

export default todoRoutes;

