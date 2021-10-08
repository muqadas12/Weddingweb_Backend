const mongoose = require('mongoose');

const dealerSchema = mongoose.Schema({
  serviceName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  dealerservice: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  pathImg: {
    type: String,
    require: true,
  },
  hallType: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  services: {
    type: String,
    require: true,
  },
  maxCapacity: {
    type: String,
    require: true,
  },
  minCapacity: {
    type: String,
    require: true,
  },
  img: { data: Buffer, contentType: String },
});
module.exports = mongoose.model('Dealer', dealerSchema);
