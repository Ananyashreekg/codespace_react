import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const AxiosData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const styles = {
    wrapper: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '1.5rem',
      maxWidth: '800px',
      margin: '2rem auto',
    },
    heading: {
      fontSize: '1.5rem',
      color: '#2c3e50',
      marginBottom: '1.5rem',
    },
    list: {
      listStyleType: 'decimal',
      padding: '0 1rem',
    },
    item: {
      padding: '0.75rem',
      marginBottom: '0.5rem',
      backgroundColor: '#f0f3f5',
      borderRadius: '5px',
      borderLeft: '5px solid #3498db',
    },
    error: {
      color: '#c0392b',
      fontWeight: 'bold',
      backgroundColor: '#fdecea',
      padding: '1rem',
      borderRadius: '5px',
    },
    loading: {
      fontStyle: 'italic',
      color: '#7f8c8d',
    },
    retryBtn: {
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#2980b9',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      if (err.response) {
        setError(`Error ${err.response.status}: ${err.response.statusText}`);
      } else if (err.request) {
        setError('Network error. Please check your connection.');
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderedUsers = useMemo(() => (
    <ol style={styles.list}>
      {users.map((user) => (
        <li key={user.id} style={styles.item} aria-label={`User ${user.name}`}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ol>
  ), [users]);

  return (
    <section style={styles.wrapper} aria-live="polite">
      <h2 style={styles.heading}>User List (Axios)</h2>

      {loading && <p style={styles.loading}>Loading user data...</p>}

      {!loading && error && (
        <>
          <p style={styles.error}>{error}</p>
          <button style={styles.retryBtn} onClick={fetchUsers}>Retry</button>
        </>
      )}

      {!loading && !error && renderedUsers}
    </section>
  );
};

export default AxiosData;
