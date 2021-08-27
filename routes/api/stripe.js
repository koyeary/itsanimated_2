const router = require('express').Router();
const stripeController = require('../../controllers/stripeController');

// Matches with '/api/stripe/products'
router
  .route('/products')
  .post(stripeController.addToStripe);

// Matches with '/api/stripe/checkout'
router
  .route('/checkout')
  .post(stripeController.createCheckoutSession);


module.exports = router;
