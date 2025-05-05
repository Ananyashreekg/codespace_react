// Timeout Counter using useEffect
// Description: Create a counter that increments by one every second using the useEffect hook.

// Steps to needed:
//     - setInterval : Repeatedly increments the count every 1 second.
//     - clearInterval(timer) : Clears the timer when component unmounts to prevent memory leaks.
//     - Write your code within the file, by the name of component as Timeout_Counter

import React, { useState, useEffect } from "react";

const TimeoutCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []); // Empty dependency array = run only once on mount

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "#61dafb",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>⏱ Timeout Counter</h2>
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          backgroundColor: "#333",
          padding: "20px 40px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(97, 218, 251, 0.5)",
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default TimeoutCounter;

