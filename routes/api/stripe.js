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
  .route('/prices')
  .post(stripeController.createPrice)

// Matches with '/api/stripe/products/prices/:id'
router
  .route('/prices/:id')  
  .put(stripeController.updatePrice);


module.exports = router;
