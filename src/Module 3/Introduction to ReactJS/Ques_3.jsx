// Creating a Functional Component
// Description: Change name of the current functional component into Greeting that returns a welcoming message.
// Use this component in App.js
import React from 'react';

// Functional component that returns a welcoming message
const Greeting = () => {
  return (
    <div>
      <h1>Welcome to React!</h1> {/* The welcoming message */}
    </div>
  );
};

export default Greeting;