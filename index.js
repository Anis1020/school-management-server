const express = require("express");
const app = express();
const cors = require("cors");

const jwt = require("jsonwebtoken");
const config = require("./config/config");
const port = config.app.port;
const userRouter = require("./routes/user.route");
// middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

//schoolManagement
//4cfEPNZubR0KL0sq

app.listen(port, () => {
  console.log(`server is running at  ${port} port`);
});
