import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [fetchData, setFetchData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);
  const [error, setError] = useState(null);
  const [axiosError, setAxiosError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Internal CSS styles
  const styles = {
    container: {
      padding: '1.5rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
    },
    heading: {
      color: '#333',
      marginTop: '2rem',
    },
    list: {
      marginLeft: '1.5rem',
      padding: '0.5rem',
    },
    listItem: {
      marginBottom: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f7f7f7',
      borderLeft: '4px solid #007bff',
      borderRadius: '4px',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
    },
    loading: {
      fontStyle: 'italic',
    },
  };

  // Using Fetch API
  useEffect(() => {
    const fetchFromAPI = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setFetchData(data.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFromAPI();
  }, []);

  // Using Axios
  useEffect(() => {
    const fetchWithAxios = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setAxiosData(response.data.slice(0, 5));
      } catch (err) {
        setAxiosError(err.message);
      }
    };

    fetchWithAxios();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Data Fetched using Fetch API</h2>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : error ? (
        <p style={styles.error}>Error: {error}</p>
      ) : (
        <ol style={styles.list}>
          {fetchData.map((post) => (
            <li key={post.id} style={styles.listItem}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ol>
      )}

      <h2 style={styles.heading}>Data Fetched using Axios</h2>
      {axiosError ? (
        <p style={styles.error}>Error: {axiosError}</p>
      ) : (
        <ul style={styles.list}>
          {axiosData.map((user) => (
            <li key={user.id} style={styles.listItem}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
