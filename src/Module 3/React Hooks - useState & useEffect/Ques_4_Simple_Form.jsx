// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from 'react';

// ErrorBoundary defined inline
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optional: log error to monitoring service
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while rendering the form.</h2>;
    }
    return this.props.children;
  }
}

// Form component
const SimpleForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Name field cannot be empty.');
      return;
    }

    alert(`Hello, ${name}!`);
    setName(''); // Clear the input after submission
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', width: '200px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Main export with ErrorBoundary wrapped around form
const Ques_4_Simple_Form = () => {
  return (
    <ErrorBoundary>
      <SimpleForm />
    </ErrorBoundary>
  );
};

export default Ques_4_Simple_Form;
