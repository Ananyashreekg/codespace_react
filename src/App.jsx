import React from 'react';
import FetchData from './Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/FetchData';

function App() {
  // Internal styles
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
    <div style={styles.appContainer}>
      <h1 style={styles.heading}>Fetching Data</h1>
      <FetchData />
    </div>
  );
}

export default App;
