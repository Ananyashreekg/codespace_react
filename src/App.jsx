import React, { Suspense } from 'react';
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
    fallback: {
      textAlign: 'center',
      color: '#7f8c8d',
    },
    errorBox: {
      textAlign: 'center',
      backgroundColor: '#fdecea',
      color: '#c0392b',
      padding: '1rem',
      borderRadius: '8px',
    },
  };

  // Error boundary fallback
  const ErrorFallback = ({ error }) => (
    <div style={styles.errorBox}>
      <p>Something went wrong while loading the component.</p>
      <pre>{error.message}</pre>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Axios Data Fetch</h1>
      <Suspense fallback={<p style={styles.fallback}>Loading component...</p>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AxiosData />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

// Custom basic error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { FallbackComponent, children } = this.props;
    return hasError ? <FallbackComponent error={error} /> : children;
  }
}

export default App;
