const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

const userValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  check('role').notEmpty().withMessage('Role is required')
];

router.post('/users', userValidation, userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userValidation, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
