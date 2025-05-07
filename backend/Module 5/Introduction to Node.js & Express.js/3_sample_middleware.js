// Understanding Middlewares
// Description: Write middleware in Express.js to log all incoming requests.

// Steps:
// 1. Update the current file with a logging middleware
// 2. Observe the console output to see logs of incoming requests.


const express = require('express');
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🧩 Custom Middleware to log detailed incoming request info
app.use((req, res, next) => {
  console.log(`\n[${new Date().toISOString()}] Incoming Request:`);
  console.log(`- Method: ${req.method}`);
  console.log(`- URL: ${req.originalUrl}`);
  console.log(`- Headers:`, req.headers);
  if (Object.keys(req.query).length) {
    console.log(`- Query Params:`, req.query);
  }
  if (req.body && Object.keys(req.body).length) {
    console.log(`- Body:`, req.body);
  }
  next();
});

// 🧪 Sample route
app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});

// 🧪 Route to test POST request logging
app.post('/submit', (req, res) => {
  res.send({ message: 'Data received!', data: req.body });
});

// 🚫 Catch-all 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// 🛠 Error-handling middleware (for catching thrown errors)
app.use((err, req, res, next) => {
  console.error(`❗Error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 🚀 Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
