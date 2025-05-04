// Toggle Visibility

// 1. Goal: Toggle the visibility of a text message.
// 2. Steps:
//     - Use useState to create a isVisible state with an initial value of false .
//     - Display a button that toggles the boolean isVisible state.
//     - Conditionally render a message when isVisible is true.
//     - Write your code within the file, by the name of component as Toggle_Visibility
import React, { useState } from 'react';

const Ques_3_Toggle_Visibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <p>This is the text message to toggle!</p>}
    </div>
  );
};

export default Ques_3_Toggle_Visibility;
