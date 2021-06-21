const router = require('express').Router();
const inventoryController = require('../../controllers/inventoryController');
const auth = require('../../middleware/auth');

// Matches with '/api/storefront'
router
    .route('/')
    .get(inventoryController.findAll)
    .post(auth, inventoryController.create)
    .put(auth, inventoryController.update);

// Matches with '/api/inventory/:id
 router
    .route('/:id')
    .delete(auth, inventoryController.erase)
    .get(inventoryController.getItem);

module.exports = router;