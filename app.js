const express = require("express");
const app = express();
const cors = require("cors");

require("./config/db");
const userRouter = require("./routes/user.route");

const jwt = require("jsonwebtoken");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route error handle
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});
app.use((error, req, res, next) => {
  res.status(500).json({
    message: "server error",
  });
});
module.exports = app;
