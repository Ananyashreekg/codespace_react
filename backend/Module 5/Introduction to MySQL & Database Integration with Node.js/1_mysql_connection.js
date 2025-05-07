// Installing MySQL Package and Creating a Connection in Node.js
// Description: install the MySQL3 package(use latest one), and create a connection to MySQL.
// Create a database and create a Student table

// Import the mysql3 package

const mysql = require('mysql2/promise');

async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',        // set your real password
      database: 'testdb'   // set your actual DB name
    });

    console.log('✅ Connected to MySQL');
    await connection.end();
  } catch (err) {
    console.error('❌ Connection failed:', err);  // FULL error object
  }
}

connectDB();

