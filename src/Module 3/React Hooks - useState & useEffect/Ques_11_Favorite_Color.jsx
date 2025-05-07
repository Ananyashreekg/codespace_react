// Favorite Color

// 1. Goal: Allow users to input and display their favorite color.
// 2. Steps:
//     - Create a state variable favoriteColor with an initial value of an empty string.
//     - Implement an input field to update favoriteColor using onChange .
//     - Display the value of favoriteColor below the input field.
//     - Write your code within the file, by the name of component as Timeout_Counter


import React, { useState } from "react";

const FavoriteColor = () => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>What's your favorite color?</h2>
      <input
        type="text"
        placeholder="Enter your favorite color"
        value={color}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      {color && (
        <p style={{ marginTop: "20px" }}>
          Your favorite color is: <strong>{color}</strong>
        </p>
      )}
    </div>
  );
};

export default FavoriteColor;