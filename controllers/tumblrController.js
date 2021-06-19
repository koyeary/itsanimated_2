const config = require('config');
const axios = require('axios');
const tumblr = require('tumblr.js');

const client = new tumblr.Client({
  credentials: {
    consumer_key: config.get('consumer_key'),
    consumer_secret: config.get('consumer_secret'),
    token: config.get('OAuth_token'),
    token_secret: config.get('OAuth_token_secret')
  },
  returnPromises: true
});

/* const client = new tumblr.Client({
  credentials: {
    consumer_key: config.get('consumer_key')
  }
}) */

module.exports = {
  getPosts: async (req, res) => {
    try {
      const tumblr = await client.blogPosts('queerlilkitten-blog-blog', { type: 'photo' });

      if (!tumblr) {
        return res.status(400).json({
          errors: [{ msg: `Invalid credentials` }]
        });
      }

      return res.json(tumblr.posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};
