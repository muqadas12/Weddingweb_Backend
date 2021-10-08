const mongoose = require('mongoose');
const orderStatus = new mongoose.Schema({
  orderStatus: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('OrderStatus', orderStatus);
