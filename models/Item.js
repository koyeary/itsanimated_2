const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  created_at: Date,
  updated_at: Date
});

/**
* Add the dates on save ( updated_at & created_at )
*/
itemSchema.pre('save', next => {
  let currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at) this.created_at = currentDate;

  next();
});

module.exports = Item = mongoose.model('item', ItemSchema);