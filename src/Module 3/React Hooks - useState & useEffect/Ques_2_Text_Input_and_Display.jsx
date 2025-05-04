// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input
// Ques_2_Text_Input_and_Display
import React, { useState } from 'react';

const Ques_2_Text_Input_and_Display = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleReset = () => {
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here..."
      />
      <p>You typed: {inputText}</p>
      <p>Character Count: {inputText.length}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Ques_2_Text_Input_and_Display;

