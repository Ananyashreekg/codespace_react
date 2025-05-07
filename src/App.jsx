import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todos from './Module 4/Redux Toolkit - State Management in React/Todos_Redux/Todos';

const App = () => (
  <Provider store={store}>
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>
      <Todos />
    </div>
  </Provider>
);

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  }
};

export default App;
