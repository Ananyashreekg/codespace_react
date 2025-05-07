import React from 'react';
import FetchData from './Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/FetchData';

function App() {
  const styles = {
    appContainer: {
      fontFamily: 'Arial, sans-serif',
      padding: '1.5rem',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      color: '#222',
      marginBottom: '2rem',
    },
  };

  return (
    <div style={styles.appContainer} data-testid="app-container">
      <h1 style={styles.heading}>Fetching Data Example</h1>
      <FetchData />
    </div>
  );
}

export default App;
