const mongoose = require('mongoose');
const cateringSchema = new mongoose.Schema({
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
  dealerEmail: {
    type: String,
    required: true,
  },

  foodType: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Catering', cateringSchema);
