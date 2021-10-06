const mongoose = require('mongoose');
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
  price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Saloon', saloonSchema);
