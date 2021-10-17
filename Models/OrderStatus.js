const mongoose = require('mongoose');
const orderStatus = new mongoose.Schema({
  orderStatus: {
    type: String,
    required: true,
  },

  serviceName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  functionDate: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('OrderStatus', orderStatus);
