// Toggle Visibility

// 1. Goal: Toggle the visibility of a text message.
// 2. Steps:
//     - Use useState to create a isVisible state with an initial value of false .
//     - Display a button that toggles the boolean isVisible state.
//     - Conditionally render a message when isVisible is true.
//     - Write your code within the file, by the name of component as Toggle_Visibility
import React, { useState } from 'react';

// Inline Error Boundary defined within the same file
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optional: Log error info to an external service or console
    console.error('Caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

// The functional component to toggle message visibility
const ToggleVisibilityComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <p>This is the text message to toggle!</p>}
    </div>
  );
};

// Wrapping the toggle component with the error boundary inline
const Ques_3_Toggle_Visibility = () => (
  <ErrorBoundary>
    <ToggleVisibilityComponent />
  </ErrorBoundary>
);

export default Ques_3_Toggle_Visibility;
