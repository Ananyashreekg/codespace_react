// Toggle Visibility

// 1. Goal: Toggle the visibility of a text message.
// 2. Steps:
//     - Use useState to create a isVisible state with an initial value of false .
//     - Display a button that toggles the boolean isVisible state.
//     - Conditionally render a message when isVisible is true.
//     - Write your code within the file, by the name of component as Toggle_Visibility
import React, { useState } from 'react';

// Functional component to toggle visibility of a message
const Ques_3_Toggle_Visibility = () => {
  // useState hook to track if the message is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the state between true and false
  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Button to trigger the toggle function */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {/* Conditionally render the message if isVisible is true */}
      {isVisible && <p>This is the text message to toggle!</p>}
    </div>
  );
};

export default Ques_3_Toggle_Visibility;

