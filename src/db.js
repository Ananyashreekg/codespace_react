// db.js
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',  // Replace with your database password
    database: 'school',    // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the pool for use in other modules
module.exports = pool.promise();  // Using promise-based API for async/await support
