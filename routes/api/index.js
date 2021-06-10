const router = require('express').Router();
const adminRoutes = require('./admin');
const storefrontRoutes = require('./storefront');

// Admin routes
router.use('/admin', adminRoutes);
//Storefront routes
router.use('/storefront', storefrontRoutes);

module.exports = router;