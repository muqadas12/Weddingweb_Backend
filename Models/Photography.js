const mongoose = require('mongoose');

const photographySchema = new mongoose.Schema({
  functionDate: {
    type: String,
    required: true,
  },
  functionTime: {
    type: String,
    required: true,
  },
  photographyType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dealerEmail: {
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
});
module.exports = mongoose.model('photography', photographySchema);
