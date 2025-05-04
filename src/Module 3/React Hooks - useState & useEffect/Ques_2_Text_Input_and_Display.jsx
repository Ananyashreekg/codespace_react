// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input
// Ques_2_Text_Input_and_Display
import React, { useState } from 'react';

const Ques_2_Text_Input_and_Display = () => {
  // Initialize state for input text
  const [inputText, setInputText] = useState('');

  // Handler to update state on input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <p>hgdhgjkdnkbk </p>
    </div>
  );
};

export default Ques_2_Text_Input_and_Display;
