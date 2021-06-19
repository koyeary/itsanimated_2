
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  blog: {
    type: Object
  },
  posts: {
    type: Array
  },
  total_posts: {
    type: Number
  },
  _links: {
    type: Object
  }
});

module.exports = mongoose.model('post', PostSchema);