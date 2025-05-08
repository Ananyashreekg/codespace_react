const mysql = require('mysql');

// Create a connection pool for better performance and concurrency
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  multipleStatements: true
});

// SQL script to create the 'school' database and 'students' table if they don't exist
const setupDatabase = `
  CREATE DATABASE IF NOT EXISTS school;
  USE school;
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age > 0),
    grade CHAR(1) CHECK (grade IN ('A','B','C','D','E','F'))
  );
`;

// Student data including some edge cases
const students = [
  { name: 'Alice', age: 13, grade: 'B' },
  { name: 'Bob', age: 15, grade: 'A' },
  { name: 'Charlie', age: 14, grade: 'C' },
  { name: 'Daisy', age: 16, grade: 'Z' },      // Invalid grade
  { name: null, age: 17, grade: 'A' },         // Null name
  { name: 'Eve', age: -1, grade: 'F' },        // Negative age
  { name: 'Frank', age: 20, grade: null },     // Null grade
  { name: 'Grace', age: 21, grade: 'E' }
];

// Valid grades for validation
const validGrades = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * Validates a student object before inserting into DB.
 * Ensures name is not null, age is a positive integer, and grade is valid.
 */
function isValidStudent(s) {
  return s.name &&
         Number.isInteger(s.age) && s.age > 0 &&
         s.grade && validGrades.includes(s.grade);
}

// Main execution block
pool.getConnection((err, connection) => {
  if (err) throw err;

  // Step 1: Set up database and table
  connection.query(setupDatabase, (err) => {
    if (err) {
      connection.release();
      throw err;
    }

    // Step 2: Filter valid student records
    const validStudents = students.filter(isValidStudent);
    if (validStudents.length === 0) {
      console.log('No valid students to insert.');
      connection.release();
      pool.end();
      return;
    }

    // Step 3: Begin transaction for safe batch insert
    connection.beginTransaction((err) => {
      if (err) {
        connection.release();
        throw err;
      }

      const insertSQL = 'INSERT INTO students (name, age, grade) VALUES ?';
      const values = validStudents.map(s => [s.name, s.age, s.grade]);

      connection.query(insertSQL, [values], (err, result) => {
        if (err) {
          return connection.rollback(() => {
            console.error('Insertion failed, rolling back.', err);
            connection.release();
          });
        }

        // Step 4: Commit the transaction if insertion succeeds
        connection.commit((err) => {
          if (err) {
            return connection.rollback(() => {
              console.error('Commit failed, rolling back.', err);
              connection.release();
            });
          }

          console.log(`${result.affectedRows} valid students inserted.`);

          // Step 5: Query all students with age > 14
          const querySQL = 'SELECT * FROM students WHERE age > 14';
          connection.query(querySQL, (err, rows) => {
            if (err) {
              console.error('Query failed:', err);
            } else {
              console.log('Students aged > 14:\n', rows);
            }

            // Step 6: Release connection and end pool
            connection.release();
            pool.end();
          });
        });
      });
    });
  });
});
