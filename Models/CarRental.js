const mongoose = require("mongoose");
const CarrentalSchema = new mongoose.Schema({
  functionDate: {
    type: String,
    required: true,
  },
  functionTime: {
    type: String,
    required: true,
  },
  numOfPeople: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("CarRental", CarrentalSchema);
