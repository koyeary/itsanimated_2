const router = require('express').Router();
const stripeController = require('../../controllers/stripeController');

// Matches with '/api/stripe'
router
  .route('/')
  .get(stripeController.createCheckoutSession)
  .post(stripeController.createCustomer);

module.exports = router;
