const app = require("./app");
const config = require("./config/config");
const port = config.app.port;

//schoolManagement
//4cfEPNZubR0KL0sq

app.listen(port, () => {
  console.log(`server is running at  ${port} port`);
});
