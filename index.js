var express = require("express");
var app = express();

const root = __dirname + "/";

app.get("/", (req, res) => res.sendFile("index.html", { root }));
app.get("/blocking", (req, res) => res.sendFile("blocking.html", {root}));
app.get("/non-blocking", (req, res) => res.sendFile("non-blocking.html", {root}));

app.get("/slow.js", function (req, res) {
  setTimeout(() => res.sendFile("slow.js", { root }), 5000);
});

app.get("/fast.js", function (req, res) {
  res.sendFile("fast.js", { root });
});

app.listen(3000, function () {
  console.log("Block test running on port 3000.");
});
