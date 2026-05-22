const express = require("express")

const userRoutes = express.Router()
const userControllers = require("./user.controllers")

userRoutes.post("/register",userControllers.createUser)
userRoutes.post("/login",userControllers.loginUser)


module.exports = userRoutes;    