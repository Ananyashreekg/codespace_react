// SimpleForm.jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const labelStyle = {
    fontWeight: 'bold'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '100px' }}
          required
        />
      </div>

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

export default SimpleForm;
