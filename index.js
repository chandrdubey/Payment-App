const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const cors = require("cors");

const db = require("./config/mongoose");
const indexRoutes = require("./routes");

require("dotenv").config();
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});
app.use(cors());
app.use(bodyParser.json());
app.use("/", indexRoutes);

app.set("port", process.env.PORT || 4000);
console.log("Testing");

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log("%s App is running at ", app.get("port"), app.get("env"));
  console.log("Press CTRL-C to stop\n");
});
