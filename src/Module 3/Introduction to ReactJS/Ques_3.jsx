// Creating a Functional Component
// Description: Change name of the current functional component into Greeting that returns a welcoming message.
// Use this component in App.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Functional component that accepts a 'message' prop
const Greeting = ({ message }) => {
  return (
    <div>
      <h1>{message || 'Welcome to React!'}</h1> {/* Default message if no prop is passed */}
    </div>
  );
};

// Prop type validation for 'message' prop
Greeting.propTypes = {
  message: PropTypes.string, // Ensures 'message' is a string
};

export default Greeting;