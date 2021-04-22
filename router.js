const Router = require("express").Router();
const express = require("express");
const app = express();
const basicAuth = require("express-basic-auth");
var nominationCtrl = require("./controllers/nominations");
// this call is only for an admin
Router.get(
  "/",
  basicAuth({
    users: { admin: "supersecret" },
  }),
  (req, res, next) => {
    console.log("midlewhere");
    next();
  }
);

Router.get("/nominations", nominationCtrl.findAllNomitations);

Router.post("/nominate", nominationCtrl.addNomination);
module.exports = Router;
