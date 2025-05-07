// Error Handling Middleware in Express.js
// Description: Implement custom error handling middleware in an Express application.
const express = require('express');
const app = express();

app.use(express.json());

// 🔧 Custom Error Class (Optional but useful)
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// ✅ Route that works fine
app.get('/', (req, res) => {
  res.send('Welcome to the Express App with Error Handling!');
});

// ❗ Route that triggers a manual error
app.get('/error', (req, res, next) => {
  next(new AppError('This is a manually triggered error.', 400));
});

// ❌ Route that throws an uncaught error
app.get('/crash', (req, res) => {
  throw new Error('Unexpected crash!');
});

// 🔍 404 Handler for unknown routes
app.use((req, res, next) => {
  next(new AppError('Route not found', 404));
});

// 🛠️ Centralized Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
});

// 🚀 Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
