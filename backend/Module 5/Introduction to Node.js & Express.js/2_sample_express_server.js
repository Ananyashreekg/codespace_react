const express = require("express");
const request = require("supertest");

// Create an Express app
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// A simple route
app.get("/", (req, res) => {
  res.send("Hello, World I am Ananyashree K G!");
});

// A route to simulate a server error
app.get("/error", (req, res) => {
  res.status(500).send("Internal Server Error");
});

// Catch 404 errors for non-existing routes
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing
module.exports = app;

// Run tests manually by using Supertest if the file is executed directly
if (require.main === module) {
  // Run the tests using Supertest without Jest's testing framework

  (async () => {
    try {
      // Test for a working route
      let response = await request(app).get("/");
      console.log("GET / status:", response.status); // Expected 200
      console.log("GET / response:", response.text); // Expected "Hello, World!"

      // Test for a non-existing route (404 error)
      response = await request(app).get("/non-existent");
      console.log("GET /non-existent status:", response.status); // Expected 404
      console.log("GET /non-existent response:", response.text); // Expected "Not Found"

      // Test for a server error (500 error)
      response = await request(app).get("/error");
      console.log("GET /error status:", response.status); // Expected 500
      console.log("GET /error response:", response.text); // Expected "Internal Server Error"

    } catch (error) {
      console.error("Test failed:", error);
    }
  })();
}
