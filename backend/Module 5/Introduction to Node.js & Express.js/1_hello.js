// Running JavaScript in Node.js
// Description: Demonstrate how to run a simple JavaScript file using Node.js.

// Steps:
// 1. Write a message "Hello, Node.js" in the console.
// 2. Open a terminal and navigate to the directory containing hello.js .
// 3. Run the JavaScript file using Node.js ......
// 1_hello.js

// Demonstrating basic input handling in Node.js

const readline = require('readline'); // To handle user input

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their name
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // Demonstrating asynchronous behavior with setTimeout
  setTimeout(() => {
    console.log('This message is shown after a 2-second delay.');
    
    // Close the readline interface
    rl.close();
  }, 2000);
});
