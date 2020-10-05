const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("server is up");
});
app.set("view engine", "ejs");
app.listen(3000);
