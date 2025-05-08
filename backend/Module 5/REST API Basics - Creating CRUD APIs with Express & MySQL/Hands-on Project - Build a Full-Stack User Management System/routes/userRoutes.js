// routes/userRoutes.js
const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes for CRUD operations
router.post(
  '/users',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  userController.createUser
);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put(
  '/users/:id',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  userController.updateUser
);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;