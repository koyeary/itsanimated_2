const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  image_src: {
    type: String
  },
  created_at: Date,
  updated_at: Date
});

/**
* Add the dates on save ( updated_at & created_at )
*/
ProductSchema.pre('save', next => {
  let currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at) this.created_at = currentDate;

  next();
});

module.exports = Product = mongoose.model('product', ProductSchema);