import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { createTodoService, getAllTodoService } from "./todos.service.js";

const todoController = {
  createTodo: asyncHandler(async (req, res) => {
    const { id, username } = req.user;

    const todoCreated = await createTodoService({ ...req.body, id, username });

    const io = req.app.get("io");

    // io.to(String(id)).emit("todoCreated",todoCreated) 
    io.emit("todoCreated",todoCreated)

    res
      .status(200)
      .json(new ApiResponse(200, todoCreated, "create todo successfully"));
  }),

  getAllTodos: asyncHandler(async (req, res) => {
    const { id } = req.user;

    const getAllTodos = await getAllTodoService({ ...req.body, id });``

    return res
      .status(200)
      .json(new ApiResponse(200, getAllTodos, "Todos Fetch Successfully"));
  }),
};

export default todoController;
