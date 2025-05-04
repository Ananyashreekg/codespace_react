// Form with Multiple Input Fields
// Description: Create a form for user registration with fields for username, email, and password. Display the entered data under the form.


// Steps:
//     - Write your code within the file, by the name of component as Complex_Form

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Registration Form Component
const RegistrationForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // State to hold the submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // State for handling error messages
  const [error, setError] = useState('');

  // State for loading state during form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle changes to input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form submit handler with validation checks
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Start loading
    setIsSubmitting(true);

    // Check if all fields are filled
    if (!username || !email || !password) {
      setError('All fields are required!');
      setIsSubmitting(false);
      return;
    }

    // Validate email format using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address!');
      setIsSubmitting(false);
      return;
    }

    // Validate password strength (at least 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long!');
      setIsSubmitting(false);
      return;
    }

    // If all validations pass, reset error and store the data
    setError('');
    setSubmittedData(formData);
    setFormData({
      username: '',
      email: '',
      password: ''
    });

    // Stop loading after successful form submission
    setIsSubmitting(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleInputChange}
          style={{ padding: '8px', marginBottom: '10px' }}
        />
        <br />
        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
          style={{ padding: '8px', marginBottom: '10px' }}
        />
        <br />
        {/* Password Input */}
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          style={{ padding: '8px', marginBottom: '20px' }}
        />
        <br />
        {/* Submit Button */}
        <button type="submit" style={{ padding: '8px 16px' }} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {/* Display submitted data */}
      {submittedData && (
        <div style={{ marginTop: '30px' }}>
          <h3>Entered Data:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

// Adding PropTypes for better maintainability
RegistrationForm.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }),
  submittedData: PropTypes.object,
  error: PropTypes.string,
  isSubmitting: PropTypes.bool
};

export default RegistrationForm;
