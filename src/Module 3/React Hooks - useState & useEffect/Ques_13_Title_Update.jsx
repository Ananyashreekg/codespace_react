// Document Title Update

// 1. Goal: Change the document title to reflect the number of button clicks.
// 2. Steps:
//     - Initialize a count state using useState .
//     - Use useEffect to update the document title whenever the count changes.
//     - Create a button to increase the count and see the document title change.
//     - Write your code within the file, by the name of component as Title_Update

import React, { useState, useEffect } from "react";

const TitleUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title whenever count changes
    document.title = `Clicked ${count} ${count === 1 ? "time" : "times"}`;
  }, [count]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Document Title Update</h2>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Click me
      </button>
      <p>You clicked <strong>{count}</strong> {count === 1 ? "time" : "times"}</p>
    </div>
  );
};

export default TitleUpdate;