// Importing Express module
const express = require('express');
const app = express();
const port = 3000;

// Middleware to log the request details
app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next();
});

// Root route that responds with 'Hello, World!'
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// 404 Error handler for unknown routes
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// General error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: err.status === 404 ? 'Not Found' : 'Internal Server Error'
  });
});

// Starting the server and logging success or failure
app.listen(port, (err) => {
  if (err) {
    console.error('Server failed to start:', err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${port}`);
});

