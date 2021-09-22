const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  functionDate: {
    type: String,
    required: true,
  },
  functionTime: {
    type: String,
    required: true,
  },
  functionType: {
    type: String,
    required: true,
  },
  numOfPeople: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bookinghall", bookingSchema);
