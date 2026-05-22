import { ApiError } from "../../utils/ApiError.js";
import {
  createTodoRepository,
  getAllTodoRepository,
} from "./todos.repository.js";

export const createTodoService = async (data) => {
  const { title, description, dueDate, id, username } = data;

  if (!title) {
    throw new ApiError(401, "title is required");
  }

  const payloadDueDate = new Date();
  payloadDueDate.setDate(payloadDueDate.getDate() + 7);

  const payload = {
    userId: id,
    title: title,
    description: description,
    dueDate: dueDate || payloadDueDate,
  };

  const createTodo = await createTodoRepository(payload);

  return createTodo;
};

export const getAllTodoService = async (data) => {
  const { id, status } = data;

  const payload = {
    // userId: id,
    ...(status && { status: status }),
  };

  const getAllTodos = await getAllTodoRepository(payload);

  return getAllTodos;
};
