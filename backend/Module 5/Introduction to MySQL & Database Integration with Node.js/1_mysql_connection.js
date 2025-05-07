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

    console.log('✅ Connected to MySQL');
    await connection.end();  // close connection
  } catch (err) {
    // Enhanced error handling

    switch (err.code) {
      case 'ER_ACCESS_DENIED_ERROR':
        console.error('❌ Access denied. Check your username/password and try again.');
        break;
      
      case 'ER_BAD_DB_ERROR':
        console.error('❌ Database does not exist. Ensure that "testdb" is created or change to an existing DB.');
        break;

      case 'ECONNREFUSED':
        console.error('❌ Connection refused. Is MySQL server running? Try restarting it.');
        break;
      
      case 'PROTOCOL_CONNECTION_LOST':
        console.error('❌ The connection was closed unexpectedly. Please check if the MySQL server is reachable.');
        break;

      case 'ER_CON_COUNT_ERROR':
        console.error('❌ Too many connections to the database. Try closing other connections or check your database configuration.');
        break;

      case 'ETIMEDOUT':
        console.error('❌ Connection timed out. Check your network or MySQL server status.');
        break;
      
      default:
        console.error('❌ An unexpected error occurred:', err.message);
        break;
    }
  }
}

connectDB();

