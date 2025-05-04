// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form

import React, { useState } from 'react';

// Error Boundary remains the same
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
      return <h2>Something went wrong while rendering the form.</h2>;
    }
    return this.props.children;
  }
}

// Form with inline error handling
const SimpleForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const validateName = (input) => {
    if (input.trim() === '') {
      return 'Name field cannot be empty.';
    } else if (input.length < 2) {
      return 'Name must be at least 2 characters.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      alert(`Hello, ${name}!`);
      setName('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError('');
          }}
          style={{
            padding: '8px',
            width: '200px',
            marginRight: '10px',
            borderColor: error ? 'red' : '#ccc',
          }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Submit
        </button>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      </form>
    </div>
  );
};

// Wrapped with ErrorBoundary
const Ques_4_Simple_Form = () => (
  <ErrorBoundary>
    <SimpleForm />
  </ErrorBoundary>
);

export default Ques_4_Simple_Form;
