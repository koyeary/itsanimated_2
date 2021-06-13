const router = require('express').Router();
const stripeController = require('../../controllers/stripeController');

// Matches with '/api/stripe/create-checkout-session'
router
  .route('/create-checkout-session')
  .post(stripeController.createCheckoutSession);

module.exports = router;
