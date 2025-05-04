// Form with Multiple Input Fields
// Description: Create a form for user registration with fields for username, email, and password. Display the entered data under the form.


// Steps:
//     - Write your code within the file, by the name of component as Complex_Form

import React, { useState } from 'react';

// Registration Form Component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError('All fields are required!');
      return;
    }

    // If all fields are filled, reset the error and store the data
    setError('');
    setSubmittedData(formData);
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleInputChange}
          style={{ padding: '8px', marginBottom: '10px' }}
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
          style={{ padding: '8px', marginBottom: '10px' }}
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          style={{ padding: '8px', marginBottom: '20px' }}
        />
        <br />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Register
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

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

export default RegistrationForm;
