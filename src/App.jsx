import React from 'react';
import AxiosData from './Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/AxiosData';

function App() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Axios Data Fetch Example</h1>
      <AxiosData />
    </div>
  );
}

export default App;
