// Embedding JavaScript Expressions in JSX
// Description: Embed a JavaScript expression in JSX to display the current year.
// Use this component in App.js
import React from "react";

const Ques_2 = () => {
  return (
    <div>
      <p>The current year is: {new Date().getFullYear()}</p>
    </div>
  );
};

export default Ques_2;