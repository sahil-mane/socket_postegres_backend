const express = require("express");
const { authMiddleware } = require("../../middleware/authMiddleware.js");
const { ApiResponse } = require("../../utils/ApiResponse.js");
const todoController = require("./todos.controllers.js")
const todoRoutes = express.Router();

todoRoutes.post("/createTodo", authMiddleware, todoController.createTodo);
todoRoutes.post("/getAllTodo", authMiddleware, todoController.getAllTodos);

module.exports = todoRoutes;
