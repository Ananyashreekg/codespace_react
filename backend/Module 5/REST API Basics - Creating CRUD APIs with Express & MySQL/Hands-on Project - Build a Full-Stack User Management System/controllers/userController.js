// controllers/userController.js
const db = require('../config/db');
const { validationResult } = require('express-validator');

// Create a new user
exports.createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, role } = req.body;
  const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';

  db.query(query, [name, email, password, role], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  });
};

// Get all users
exports.getUsers = (req, res) => {
  const query = 'SELECT * FROM users';

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.status(200).json(result);
  });
};

// Get a user by ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (result.length === 0) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(result[0]);
  });
};

// Update user details
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const query = 'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?';

  db.query(query, [name, email, password, role, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.status(200).json({ message: 'User updated successfully' });
  });
};

// Delete a user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.status(200).json({ message: 'User deleted successfully' });
  });
};
