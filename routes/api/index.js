const router = require('express').Router();
const adminRoutes = require('./admin');
const storefrontRoutes = require('./storefront');
const tumblrRoutes = require('./tumblr');
const stripeRoutes = require('./stripe');

// Admin routes
router.use('/admin', adminRoutes);
//Storefront routes
router.use('/storefront', storefrontRoutes);
//Tumblr routes
router.use('/tumblr', tumblrRoutes);
//Stripe routes
router.use('/stripe', stripeRoutes)

module.exports = router;