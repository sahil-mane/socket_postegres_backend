import { ApiError } from "../../utils/ApiError.js";
import { generateToken } from "../../utils/jwt.js";
import { createUserRepo, getUserRepo } from "./user.repository.js";
import bcrypt from "bcrypt";

export const createUserService = async (data) => {
  const { username, firstName, lastName, password } = data;

  if (!firstName || !lastName || !username || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await getUserRepo(username);

  if (existingUser) {
    throw new ApiError(400, "user Already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const CreatedUser = await createUserRepo({
    firstName,
    lastName,
    username,
    password: hashedPassword,
  });

  return CreatedUser;
};

export const loginUserSerivce = async (data) => {
  const { username, password } = data;

  if (!username || !password) {
    throw new ApiError(401, "Username and password are required");
  }

  const user = await getUserRepo(username);

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const Match = await bcrypt.compare(password, user.password);

  if (!Match) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = await generateToken({
    id: user?.id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    username: user?.username,
  });

  const { password: _, ...safeUser } = user;

  return {
    token,
    safeUser,
  };
};
