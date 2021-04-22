const express = require("express");
const body_parser = require("body-parser");
const path = require("path");
const router = require("./router");
const app = express();
const mongooseClient = require("mongoose");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use("/", router);
app.use((req, res, next) => {
  console.log(req.method + " : " + req.url);
  next();
});

mongooseClient.connect(
  "mongodb://localhost/nominated",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

app.listen(3000);
