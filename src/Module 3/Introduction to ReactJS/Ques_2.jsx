// Embedding JavaScript Expressions in JSX
// Description: Embed a JavaScript expression in JSX to display the current year.
// Use this component in App.js
import React from "react";

// Function to get the current year with error handling
function getCurrentYear() {
  try {
    return new Date().getFullYear(); // Get the current year
  } catch (e) {
    console.error("Error fetching the year:", e);
    return 'Year could not be fetched'; // Fallback message in case of an error
  }
}

const Ques_2 = () => {
  return (
    <div>
      <p>The current year is: {getCurrentYear()}</p> {/* Using the function */}
    </div>
  );
};

export default Ques_2;