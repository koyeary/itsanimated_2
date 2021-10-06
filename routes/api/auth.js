const router = require('express').Router();
const authController = require('../../controllers/authController');
const auth = require('../../middleware/auth');

// Matches with '/api/auth'
router
    .route('/')
    .get(auth, authController.loadUser);
// Matches with '/api/auth/register'
router
    .route('/register')
    .post(authController.register);

// Matches with '/api/auth/login'
 router
  .route('/login')
  .post(authController.login);

module.exports = router;
