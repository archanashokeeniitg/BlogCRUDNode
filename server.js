const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.render("main");
});
app.get("/createblog", function (req, res) {
  res.render("createBlog");
});

app.listen(3000);
