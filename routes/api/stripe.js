const router = require('express').Router();
const stripeController = require('../../controllers/stripeController');

// Matches with '/api/stripe'
router.route('/')
      .post(stripeController.createCustomer);  


module.exports = router;