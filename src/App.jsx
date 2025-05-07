import React from 'react';
import SimpleForm from './Module 4/Advanced React Concepts/Forms/SimpleForm';

function App() {
  return (
    <>
      <style>
        {`
          .app-container {
            text-align: center;
            font-family: Arial, sans-serif;
          }

          h1 {
            color: #333;
            font-size: 2rem;
            margin-bottom: 20px;
          }
        `}
      </style>
      
      <div className="app-container">
        <h1>Controlled Form Example</h1>
        <SimpleForm />
      </div>
    </>
  );
}

export default App;
