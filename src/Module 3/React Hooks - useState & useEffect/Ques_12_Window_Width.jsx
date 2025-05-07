// Window Width

// 1. Goal: Track and display the window width as the window resizes.
// 2. Steps:
//     - Use useEffect to add an event listener for the window resize event.
//     - Use useState to store the current window width.
//     - Update the width state whenever the window is resized and display it.
//     - Write your code within the file, by the name of component as Window_Width

import React, { useState, useEffect } from "react";

const WindowWidth = () => {
  const getWindowWidth = () => (typeof window !== "undefined" ? window.innerWidth : 0);
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(getWindowWidth());
      }, 200); // debounce delay
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Current Window Width</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        {width > 0 ? `${width}px` : "Window size not available"}
      </p>
    </div>
  );
};

export default WindowWidth;