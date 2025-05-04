// Counter
// 1. Goal: Create a simple counter that increments by one each time a button is clicked.
// 2. Steps:
//     - Initialize a state variable count with an initial value of 0 using useState .
//     - Create a button with an onClick event that increases count by 1.
//     - Display the current count value.
//     - Write your code within the file, by the name of component as Counter

import React, { useState } from 'react';

const Ques_1_Counter = () => {
  // Initializing the counter state variable with 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Ques_1_Counter;

