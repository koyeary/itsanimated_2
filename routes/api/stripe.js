const router = require('express').Router();
const stripeController = require('../../controllers/stripeController');

// Matches with '/api/stripe/create-checkout-session'
router
  .route('/create-checkout-session')
  //.post(stripeController.createCheckoutSession);

// Matches with '/api/stripe/products'
router
  .route('/products')
  .post(stripeController.addToStripe);

// Matches with '/api/stripe/products/price'
router
  .route('/products/price')
  .post(stripeController.createPrice);


module.exports = router;
