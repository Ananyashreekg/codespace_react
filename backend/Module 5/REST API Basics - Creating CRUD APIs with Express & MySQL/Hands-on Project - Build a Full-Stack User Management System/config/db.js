const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'user_management',
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to database:', err.message);
    process.exit(1); // Stop server if DB connection fails
  }
  console.log('✅ Connected to MySQL Database');
});

module.exports = db;
