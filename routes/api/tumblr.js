const router = require('express').Router();
const tumblrController = require('../../controllers/tumblrController');

// Matches with '/api/tumblr'
router.route('/')
      .get(tumblrController.getPosts);  


module.exports = router;