const mongoose = require("mongoose");
const saloonSchema = new mongoose.Schema({
  functionDate: {
    type: String,
    required: true,
  },
  functionTime: {
    type: String,
    required: true,
  },
  makeupType: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Saloon", saloonSchema);
