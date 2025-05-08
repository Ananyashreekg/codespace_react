const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.get('/users', userController.getUsers);
router.put('/users/role', userController.updateUserRole);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
