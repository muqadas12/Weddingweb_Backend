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
});
module.exports = mongoose.model('photography', photographySchema);
