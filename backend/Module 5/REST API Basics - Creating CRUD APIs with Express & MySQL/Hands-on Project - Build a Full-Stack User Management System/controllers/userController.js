const db = require('../config/db');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// Helper: handle query errors
const handleDbError = (err, res) => {
  console.error(err);
  return res.status(500).json({ error: 'Internal server error' });
};

// Create a new user
exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';

  db.query(sql, [name, email, hashedPassword, role], (err, result) => {
    if (err) return handleDbError(err, res);
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  });
};

// Get all users
exports.getUsers = (_, res) => {
  db.query('SELECT id, name, email, role FROM users', (err, result) => {
    if (err) return handleDbError(err, res);
    res.status(200).json(result);
  });
};

// Get user by ID
exports.getUserById = (req, res) => {
  const sql = 'SELECT id, name, email, role FROM users WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return handleDbError(err, res);
    if (result.length === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(result[0]);
  });
};

// Update user
exports.updateUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?';

  db.query(sql, [name, email, hashedPassword, role, req.params.id], (err, result) => {
    if (err) return handleDbError(err, res);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated successfully' });
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return handleDbError(err, res);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  });
};
