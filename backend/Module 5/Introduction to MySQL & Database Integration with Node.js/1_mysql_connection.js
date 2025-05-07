// Installing MySQL Package and Creating a Connection in Node.js
// Description: install the MySQL3 package(use latest one), and create a connection to MySQL.
// Create a database and create a Student table

// Import the mysql3 package

const mysql = require('mysql2/promise');

async function connectDB() {
  try {
    // Establish connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',            // your MySQL user
      password: 'password',    // your MySQL password
      database: 'testdb'       // your database name
    });

    // Successfully connected
    console.log('✅ Connected to MySQL');
    await connection.end();  // close connection
  } catch (err) {
    // Error handling
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('❌ Access denied. Check credentials.');
    } else if (err.code === 'ECONNREFUSED') {
      console.error('❌ Connection refused. Is MySQL running?');
    } else {
      console.error('❌ Connection failed:', err.message);
    }
  }
}

connectDB();
