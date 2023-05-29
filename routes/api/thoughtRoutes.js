const router = require('express').Router();
const {
  
  getSingleUser,
  getThoughts,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getSingleUser).post(createThoughts);

// /api/users/:userId 
router.route('/:userId').get(getSingleUser);

module.exports = router;
