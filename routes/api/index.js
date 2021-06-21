const router = require('express').Router();
const adminRoutes = require('./admin');
const inventoryRoutes = require('./inventory');
const tumblrRoutes = require('./tumblr');
const stripeRoutes = require('./stripe');

// Admin routes
router.use('/admin', adminRoutes);
//Inventory routes
router.use('/inventory', inventoryRoutes);
//Tumblr routes
router.use('/tumblr', tumblrRoutes);
//Stripe routes
router.use('/stripe', stripeRoutes)

module.exports = router;