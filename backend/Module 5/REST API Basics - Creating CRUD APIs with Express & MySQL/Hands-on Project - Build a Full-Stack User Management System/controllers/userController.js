const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const validateUser = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('admin', 'user').default('user'),
    });
    return schema.validate(data);
};

exports.createUser = (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { username, password, role } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: 'Error hashing password' });

        const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
        db.query(query, [username, hashedPassword, role], (err, result) => {
            if (err) return res.status(500).json({ error: 'Error creating user' });
            res.status(201).json({ message: 'User created successfully', userId: result.insertId });
        });
    });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ?';

    db.query(query, [username], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query error' });
        if (results.length === 0) return res.status(400).json({ error: 'User not found' });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: 'Error comparing passwords' });
            if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
        });
    });
};

exports.getUsers = (req, res) => {
    const query = 'SELECT id, username, role FROM users';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: 'Error fetching users' });
        res.status(200).json(results);
    });
};

exports.updateUserRole = (req, res) => {
    const { id, role } = req.body;
    const query = 'UPDATE users SET role = ? WHERE id = ?';
    db.query(query, [role, id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error updating user role' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User role updated' });
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error deleting user' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    });
};
