const router = require('express').Router();
const adminController = require('../../controllers/adminController');
const auth = require('../../middleware/auth');

// Matches with '/api/admin'
router.route('/')

// Matches with '/api/admin/register'
router
    .route('/register')
    .post(adminController.register);

// Matches with '/api/admin/login'
 router
  .route('/login')
  .post(auth, adminController.login);

module.exports = router;
