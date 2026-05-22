import { prisma } from "../../config/db.js";

export const createTodoRepository = async (data) => {
  const createTodo = await prisma.todos.create({
    data: data,
  });

  return createTodo;
};

export const getAllTodoRepository = async (data) => {
  const getAllTodo = await prisma.todos.findMany({
    where: data,
  });

	return getAllTodo
};
