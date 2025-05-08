const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',      // or your DB host
  user: 'root',           // your MySQL username
  password: 'password',           // your MySQL password
  database: 'school'      // your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }
  console.log('Connected as id ' + connection.threadId);
});

// Data to insert
const student = {
  name: 'John Doe',
  age: 20,
  grade: 'A'
};

// Insert into students table
const sql = 'INSERT INTO students SET ?';

connection.query(sql, student, (err, results) => {
  if (err) {
    return console.error('Error inserting data: ', err);
  }
  console.log('Student inserted with ID: ', results.insertId);
});

// Close connection
connection.end();
