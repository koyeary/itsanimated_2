const config = require('config');
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

module.exports = {
  getPosts: async (req, res) => {
    try {
      const posts = await client.blogPosts('animatedtext', { type: 'photo' });

      if (!posts) {
        return res.status(400).json({
          errors: [{ msg: `Could not find posts for animatedtext.tumblr` }]
        });
      }

      return res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};
