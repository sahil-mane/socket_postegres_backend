import express from "express";
import userControllers from "./user.controllers.js";

const userRoutes = express.Router();

userRoutes.post("/register", userControllers.createUser);
userRoutes.post("/login", userControllers.loginUser);

export default userRoutes;
