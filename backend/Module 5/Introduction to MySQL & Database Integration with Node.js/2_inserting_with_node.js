const mysql = require('mysql');

// Create a connection pool (recommended for better performance)
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'school'
});

// Input validation function
function validateStudent(student) {
  if (!student.name || typeof student.name !== 'string') {
    throw new Error('Invalid or missing student name');
  }
  if (!Number.isInteger(student.age) || student.age <= 0) {
    throw new Error('Invalid or missing student age');
  }
  if (!student.grade || typeof student.grade !== 'string') {
    throw new Error('Invalid or missing student grade');
  }
}

// Function to insert a student
function insertStudent(student) {
  try {
    // Validate input
    validateStudent(student);

    // Get connection from pool and insert data
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting DB connection:', err);
        return;
      }

      const sql = 'INSERT INTO students SET ?';
      connection.query(sql, student, (err, results) => {
        // Release the connection back to pool
        connection.release();

        if (err) {
          console.error('Error executing query:', err);
          return;
        }

        console.log('Student inserted successfully with ID:', results.insertId);
      });
    });

  } catch (error) {
    console.error('Validation or setup error:', error.message);
  }
}

// Sample data
const student = {
  name: 'John Doe',
  age: 20,
  grade: 'A'
};

// Run insert
insertStudent(student);
