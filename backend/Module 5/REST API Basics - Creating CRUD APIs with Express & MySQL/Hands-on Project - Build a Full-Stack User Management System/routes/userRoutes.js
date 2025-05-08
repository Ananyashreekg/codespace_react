const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

// Validation rules
const userValidation = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Invalid email').isEmail(),
  check('password', 'Password must be 6+ characters').isLength({ min: 6 }),
];

// Routes
router.post('/users', userValidation, userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userValidation, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
