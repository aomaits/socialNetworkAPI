const router = require('express').Router();
const {
  getUsers, // WRITE ALL THESE
  getSingleUser,
  createUser,
//   TODO CREATE USER CONTROLLER
} = require('../../controllers/userController');

//TODO CHECK BELOW ROUTING
// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;
