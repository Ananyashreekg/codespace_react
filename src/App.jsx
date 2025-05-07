import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todos from './Module 4/Redux Toolkit - State Management in React/Todos_Redux/Todos';

// ErrorBoundary to catch rendering issues in the app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: 'red', textAlign: 'center' }}>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <div className="app-container">
        <h1 className="app-heading">To-Do List</h1>
        <Todos />
      </div>
    </ErrorBoundary>
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
