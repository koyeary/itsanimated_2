const router = require('express').Router();
const storefrontController = require('../../controllers/storefrontController');

// Matches with '/api/storefront'
router
    .route('/')
    .get(storefrontController.findAll)
    .post(storefrontController.create)


module.exports = router;