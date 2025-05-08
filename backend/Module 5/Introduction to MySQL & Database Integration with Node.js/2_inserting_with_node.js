const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'school'
});

// Input validation for multiple students
function validateStudents(students) {
  if (!Array.isArray(students) || students.length === 0) {
    throw new Error('Input must be a non-empty array of student objects.');
  }

  students.forEach((student, index) => {
    if (!student.name || typeof student.name !== 'string') {
      throw new Error(`Student at index ${index} has invalid or missing name`);
    }
    if (!Number.isInteger(student.age) || student.age <= 0) {
      throw new Error(`Student at index ${index} has invalid age`);
    }
    if (!student.grade || typeof student.grade !== 'string') {
      throw new Error(`Student at index ${index} has invalid or missing grade`);
    }
  });
}

// Insert multiple students using prepared statements
function insertStudents(students) {
  try {
    validateStudents(students);

    pool.getConnection((err, connection) => {
      if (err) {
        console.error('DB connection error:', err);
        return;
      }

      const sql = 'INSERT INTO students (name, age, grade) VALUES ?';
      const values = students.map(s => [s.name, s.age, s.grade]);

      connection.query(sql, [values], (err, result) => {
        connection.release();

        if (err) {
          console.error('Error inserting students:', err);
          return;
        }

        console.log(`${result.affectedRows} students inserted successfully.`);
      });
    });

  } catch (error) {
    console.error('Validation error:', error.message);
  }
}

// Example students array
const students = [
  { name: 'Alice', age: 21, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
  { name: 'Charlie', age: 20, grade: 'A' },
  { name: 'Diana', age: 19, grade: 'B' },
  { name: 'Ethan', age: 23, grade: 'A' }
];

// Run the insertion
insertStudents(students);

// Optional: Export for testing
module.exports = { insertStudents, validateStudents };
