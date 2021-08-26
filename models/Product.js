const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  id: Number,
  object: String,
  created: Date,
  description: {
    type: String
  },
  images: {
    type: String
  },
  metadata: {},
  name: {
    type: String
  },
  package_dimensions: String,
  shippable: String,
  statement_descriptor: String,
  tax_code: String,
  unit_label: String,
  updated: {
    type: Date,
    default: Date.now
  },
  url: String
});

module.exports = Product = mongoose.model('product', ProductSchema);