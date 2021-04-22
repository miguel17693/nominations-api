const nodemailer = require("nodemailer");

exports.sendEmail = function (emailToSend, subject, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rithmeupgradehub@gmail.com",
      pass: "lvujrkszjxqsrgbn",
    },
  });

  var mailOptions = {
    from: "rithmeupgradehub@gmail.com",
    to: emailToSend,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
