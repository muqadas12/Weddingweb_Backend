const mongoose = require('mongoose');
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
  email: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  dealerEmail: {
    type: String,
    required: true,
  },
  // serviceCategory: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model('Bookinghall', bookingSchema);
