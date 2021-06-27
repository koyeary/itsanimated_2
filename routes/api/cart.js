const router = require('express').Router();
const cartController = require('../../controllers/cartController');

// Matches with '/api/cart'
router
    .route('/:sessionId')
    .get(cartController.getCart)
    .post(cartController.addCart)
    .delete(cartController.clearCart);

router
    .route('/:sessionId/:productId')
    .delete(cartController.deleteCartItem);


