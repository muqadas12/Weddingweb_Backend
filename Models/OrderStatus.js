const mongoose = require('mongoose');
const orderStatus = new mongoose.Schema({
  orderStatus: {
    type: String,
    required: true,
  },
  carrentals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CarRental' }],
});
module.exports = mongoose.model('OrderStatus', orderStatus);
