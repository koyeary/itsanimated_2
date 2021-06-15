const router = require('express').Router();
const storefrontController = require('../../controllers/storefrontController');
const auth = require('../../middleware/auth');

// Matches with '/api/storefront'
router
    .route('/')
    .get(storefrontController.findAll)
    .post(auth, storefrontController.create)
    .put(auth, storefrontController.update);

// Matches with '/api/storefront/:id
 router
    .route('/:id')
    .delete(auth, storefrontController.erase)
    .get(storefrontController.getItem);

module.exports = router;