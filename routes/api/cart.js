const router = require('express').Router();
const cartController = require('../../controllers/cartController');

// Matches with '/api/cart'
router
    .route('/cart/:sessionId')
    .get(cartController.getCart)
    .post(cartController.addCart)
    .delete(cartController.clearCart);

router
    .route('/cart/:sessionId/:productId')
    .delete(cartController.deleteCartItem);

module.exports = router;