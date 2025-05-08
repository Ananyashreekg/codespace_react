const mysql = require('mysql');

// Create connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  multipleStatements: true
});

// Create database and table if not exists
const setupDatabase = `
  CREATE DATABASE IF NOT EXISTS school;
  USE school;
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age > 0),
    grade CHAR(1)
  );
`;

const students = [
  { name: 'Alice', age: 13, grade: 'B' },
  { name: 'Bob', age: 15, grade: 'A' },
  { name: 'Charlie', age: 14, grade: 'C' },       // Edge case: age = 14
  { name: 'Daisy', age: 16, grade: 'B' },
  { name: null, age: 17, grade: 'A' },            // Edge case: name null
  { name: 'Eve', age: -1, grade: 'F' },           // Invalid age
  { name: 'Frank', age: 20, grade: null }         // Edge case: grade null
];

// Validate student data
function isValidStudent(s) {
  return s.name && Number.isInteger(s.age) && s.age > 0;
}

// Start execution
pool.getConnection((err, connection) => {
  if (err) throw err;

  // Setup DB and Table
  connection.query(setupDatabase, (err) => {
    if (err) {
      connection.release();
      throw err;
    }

    // Filter and Insert Valid Students
    const validStudents = students.filter(isValidStudent);
    if (validStudents.length > 0) {
      const insertSQL = 'INSERT INTO students (name, age, grade) VALUES ?';
      const values = validStudents.map(s => [s.name, s.age, s.grade]);

      connection.query(insertSQL, [values], (err, result) => {
        if (err) {
          console.error('Insert Error:', err);
        } else {
          console.log(`${result.affectedRows} students inserted.`);
        }

        // Now query for students with age > 14
        const querySQL = 'SELECT * FROM students WHERE age > 14';
        connection.query(querySQL, (err, rows) => {
          if (err) {
            console.error('Query Error:', err);
          } else {
            console.log('Students aged > 14:\n', rows);
          }
          connection.release();
          pool.end();
        });
      });
    } else {
      console.log('No valid students to insert.');
      connection.release();
      pool.end();
    }
  });
});
