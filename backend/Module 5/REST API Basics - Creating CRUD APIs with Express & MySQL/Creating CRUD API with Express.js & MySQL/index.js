// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');  // Import the database connection from db.js

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// CRUD APIs

// Create (POST) a new student
app.post('/students', async (req, res) => {
    const { name, age, grade } = req.body;
    
    if (!name || !age) {
        return res.status(400).json({ message: 'Name and Age are required' });
    }

    try {
        const [results] = await db.execute(
            'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)',
            [name, age, grade]
        );
        res.status(201).json({
            id: results.insertId,
            name,
            age,
            grade
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error inserting student' });
    }
});

// Read (GET) all students
app.get('/students', async (req, res) => {
    try {
        const [students] = await db.execute('SELECT * FROM students');
        res.status(200).json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching students' });
    }
});

// Read (GET) student by ID
app.get('/students/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [student] = await db.execute('SELECT * FROM students WHERE id = ?', [id]);
        if (student.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching student' });
    }
});

// Update (PUT) student by ID
app.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, grade } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: 'Name and Age are required' });
    }

    try {
        const [results] = await db.execute(
            'UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?',
            [name, age, grade, id]
        );
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating student' });
    }
});

// Delete (DELETE) student by ID
app.delete('/students/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [results] = await db.execute('DELETE FROM students WHERE id = ?', [id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting student' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
