const express = require("express");
const { authMiddleware } = require("../../middleware/authMiddleware.js");
const { ApiResponse } = require("../../utils/ApiResponse");
const todoController = require("./todos.Controllers.js")
const todoRoutes = express.Router();

todoRoutes.post("/createTodo", authMiddleware, todoController.createTodo);
todoRoutes.post("/getAllTodo", authMiddleware, todoController.getAllTodos);

module.exports = todoRoutes;
