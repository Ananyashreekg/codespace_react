const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise'); // Use promise-based connection

const app = express();
app.use(bodyParser.json());

// Create a connection to MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',            // your MySQL user
  password: 'password',    // your MySQL password
  database: 'testdb'       // your MySQL database name
});

// Root route for checking server status
app.get('/', (req, res) => {
  console.log('Root route accessed');  // Log when root route is accessed
  res.send('Welcome to the CRUD API with Express.js & MySQL!');
});

// Create (POST) – Add new item
app.post('/api/items', async (req, res) => {
  const { name, description } = req.body;
  const query = 'INSERT INTO items (name, description) VALUES (?, ?)';
  try {
    const [result] = await connection.query(query, [name, description]);
    res.status(201).send({ message: '✅ Item created', data: result });
  } catch (err) {
    res.status(500).send({ message: '❌ Error creating item', error: err });
  }
});

// Read (GET) – Get all items
app.get('/api/items', async (req, res) => {
  const query = 'SELECT * FROM items';
  try {
    const [rows] = await connection.query(query);
    res.status(200).send({ message: '✅ Items retrieved', data: rows });
  } catch (err) {
    res.status(500).send({ message: '❌ Error retrieving items', error: err });
  }
});

// Update (PUT) – Modify an item
app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
  try {
    const [result] = await connection.query(query, [name, description, id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: '❌ Item not found' });
    }
    res.status(200).send({ message: '✅ Item updated' });
  } catch (err) {
    res.status(500).send({ message: '❌ Error updating item', error: err });
  }
});

// Delete (DELETE) – Remove an item
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM items WHERE id = ?';
  try {
    const [result] = await connection.query(query, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: '❌ Item not found' });
    }
    res.status(200).send({ message: '✅ Item deleted' });
  } catch (err) {
    res.status(500).send({ message: '❌ Error deleting item', error: err });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
