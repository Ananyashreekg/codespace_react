// Implementing Routes with Parameters in Express.js
// Description: Create an Express route that accepts a parameter and respond accordingly.

const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// 🛣️ Route with route parameter - user ID
app.get('/user/:id', (req, res) => {
  const { id } = req.params;

  // Edge case: check if ID is a number
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'User ID must be a number' });
  }

  // Simulate data fetch
  const fakeUserDB = {
    1: { name: 'Alice', age: 25 },
    2: { name: 'Bob', age: 30 },
  };

  const user = fakeUserDB[id];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ message: `User ${id} found`, user });
});

// 🛣️ Route with multiple parameters (e.g., product and category)
app.get('/product/:category/:productId', (req, res) => {
  const { category, productId } = req.params;

  if (!productId || !category) {
    return res.status(400).json({ error: 'Missing category or product ID' });
  }

  res.json({
    message: `Product ${productId} in category '${category}'`,
    data: { category, productId },
  });
});

// ❌ Catch-all route for undefined paths
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// 🛠 Error handler
app.use((err, req, res, next) => {
  console.error(`Server error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 🚀 Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
