var Nominated = require("../models/nomination.js");
var mailer = require("./mails.js");

exports.findAllNomitations = function (req, res) {
  Nominated.find({}).exec((err, document) => {
    responseJson = {};
    if (err) {
      responseJson.status = "error";
      responseJson.message = err.message;
      statusCode = 400;
    } else {
      responseJson.status = "success";
      responseJson.body = document;
      statusCode = 200;
    }
    res.status(statusCode).jsonp(responseJson);
  });
};

exports.addNomination = function (req, res) {
  const Nomination = new Nominated({});
  const allowedProperties = [
    "emailNominator",
    "emailNominated",
    "comment",
    "involvement",
    "talent",
  ];
  allowedProperties.forEach((property) => {
    Nomination[property] = req.body[property];
  });

  Nomination.save((err, product) => {
    responseJson = {};
    if (err) {
      responseJson.status = "error";
      // This error comes from unique email 11000
      responseJson.message =
        err.code === 11000
          ? "That email have already been nominated"
          : err.message;
      statusCode = 400;
    } else {
      responseJson.status = "success";
      responseJson.body = product;
      statusCode = 200;
      mailer.sendEmail(
        req.body.emailNominator,
        "You have succesfully nominated",
        "Congratulations"
      );
      mailer.sendEmail(
        req.body.emailNominated,
        "You have been nominated",
        "Congratulations"
      );
    }
    res.status(statusCode).jsonp(responseJson);
  });
};
