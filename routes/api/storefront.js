const router = require('express').Router();
const storefrontController = require('../../controllers/storefrontController');
const auth = require('../../middleware/auth');

// Matches with '/api/storefront'
router
    .route('/')
    .get(storefrontController.findAll)
    .post(auth, storefrontController.create)
    .put(auth, storefrontController.update)
    .delete(auth, storefrontController.remove);

// Matches with '/api/storefront/:id
 router
    .route('/:id')
    .get(storefrontController.getItem) 

module.exports = router;