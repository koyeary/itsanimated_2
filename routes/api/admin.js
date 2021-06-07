const router = require('express').Router();
const adminController = require('../../controllers/adminController');
const auth = require('../../middleware/auth');

// Matches with '/api/admin'
router
    .route('/')
    .post(adminController.register);

// Matches with '/api/admin/login'
 router
  .route('/login')
  //.get('/login', auth, adminController.findOne)
  .post(auth, adminController.login);

module.exports = router;
