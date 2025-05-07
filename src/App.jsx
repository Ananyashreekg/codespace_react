import React from 'react';
import MultistepFrpm from './Module 4/Advanced React Concepts/Forms/MultistepFrpm';

function App() {
  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          margin: 0;
          padding: 0;
        }
        .app-container {
          max-width: 500px;
          margin: 40px auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
          text-align: center;
          color: #333;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px 20px;
          margin: 10px 5px;
          border: none;
          background-color: #007BFF;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
      <div className="app-container">
        <h1>Multi-step Form Example</h1>
        <MultistepFrpm />
      </div>
    </div>
  );
}

export default App;
