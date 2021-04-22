const mongooseClient = require("mongoose");

const NominatedSchema = mongooseClient.Schema({
  emailNominator: {
    type: String,
    match: [/.+\@.+\..+/, "Email of user nominating is not valid"],
    required: [true, "Email of user nominating is required"],
    maxlength: [50, "Email too long"],
  },
  emailNominated: {
    unique: true,
    type: String,
    match: [/.+\@.+\..+/, "Email of nominated peer is not valid"],
    required: [true, "Email of nominated peer is required"],
    maxlength: [50, "Email too long"],
  },
  comment: String,
  involvement: {
    type: Number,
    max: [10, "Involvement number must be between 0-10"],
    min: [0, "Involvement number must be between 0-10"],
  },
  talent: {
    type: Number,
    max: [10, "Talent number must be between 0-10"],
    min: [0, "Talent number must be between 0-10"],
  },
});
module.exports = mongooseClient.model("Nominated", NominatedSchema);
