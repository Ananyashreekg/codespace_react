// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

// Steps:
//     - Write your code within the file, by the name of component as List_Item
import React, { useState } from 'react';

// Inline Error Boundary Component
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
      return <h2>Something went wrong while rendering the list component.</h2>;
    }
    return this.props.children;
  }
}

// Main List Input Component
const ListInput = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleAddItem = () => {
    if (item.trim() === '') {
      setError('Item cannot be empty.');
      return;
    }

    setItems([...items, item]);
    setItem('');
    setError('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
          if (error) setError('');
        }}
        style={{
          padding: '8px',
          width: '200px',
          marginRight: '10px',
          borderColor: error ? 'red' : '#ccc',
        }}
      />
      <button onClick={handleAddItem} style={{ padding: '8px 16px' }}>
        Add
      </button>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: '4px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Export wrapped with Error Boundary
const Ques_5_List_Item = () => (
  <ErrorBoundary>
    <ListInput />
  </ErrorBoundary>
);

export default Ques_5_List_Item;
