import React from "react";
import ParentComponent from "./Module 4/Advanced React Concepts/Optimizing Performance with React Memoization/ParentComponent";

const App = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "30px" }}>
      <h1 style={{ color: "#333" }}>React.memo Optimization Demo</h1>
      <ParentComponent />
    </div>
  );
};

export default App;
