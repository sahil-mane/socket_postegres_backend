import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { createUserService, loginUserSerivce } from "./user.services.js";

const userControllers = {
  createUser: asyncHandler(async (req, res) => {
    const createUser = await createUserService(req.body);

    return res
      .status(201)
      .json(new ApiResponse(201, createUser, "user created successfully"));
  }),

  loginUser: asyncHandler(async (req, res) => {
    const loginUser = await loginUserSerivce(req.body);

    return res
      .status(200)
      .json(new ApiResponse(200, loginUser, "user login successfully"));
  }),
};

export default userControllers;

