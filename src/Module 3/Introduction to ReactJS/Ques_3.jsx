// Creating a Functional Component
// Description: Change name of the current functional component into Greeting that returns a welcoming message.
// Use this component in App.js
import React from 'react';

// Functional component that accepts a 'message' prop
const Greeting = ({ message }) => {
  return (
    <div>
      <h1>{message || 'Welcome to React!'}</h1> {/* Default message if no prop is passed */}
    </div>
  );
};

export default Greeting;