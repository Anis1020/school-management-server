const express = require("express");
const app = express();
const cors = require("cors");

require("./config/db");
const userRouter = require("./routes/user.route");

const jwt = require("jsonwebtoken");

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

module.exports = app;
