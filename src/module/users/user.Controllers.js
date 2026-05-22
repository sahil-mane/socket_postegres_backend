const { ApiResponse } = require("../../utils/ApiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { createUserService, loginUserSerivce } = require("./user.services");

module.exports = {
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
