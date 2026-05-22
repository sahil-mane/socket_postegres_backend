const express = require("express");
const cors = require("cors");  
const userRoutes = require("./module/users/users.Routes");
const todoRoutes = require("./module/todos/todos.routes");
const app = express();

app.use(express.json()); 
app.use(cors())
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/todo", todoRoutes);



app.use((err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
