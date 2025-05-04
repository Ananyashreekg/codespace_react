// Fetch Data with useEffect
// Description: Create a component that fetches data from an API and displays it in a list using the useEffect hook.

// Steps:
//     - Write your code within the file, by the name of component as Fetch_Data

import React, { useState, useEffect } from 'react';

// Error Boundary (inline)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading data.</h2>;
    }
    return this.props.children;
  }
}

// Fetch Component
const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // You can replace this with any public API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.slice(0, 10)); // Limit to 10 items for display
      } catch (error) {
        setErrorMsg('Failed to fetch data. Please try again later.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;
  }

  if (errorMsg) {
    return <p style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>{errorMsg}</p>;
  }

  return (
    <div style={{ marginTop: '50px', padding: '0 20px' }}>
      <h3 style={{ textAlign: 'center' }}>Fetched Posts</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ padding: '5px 0' }}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main export with ErrorBoundary
const Ques_6_Fetch_Data = () => (
  <ErrorBoundary>
    <FetchDataComponent />
  </ErrorBoundary>
);

export default Ques_6_Fetch_Data;
