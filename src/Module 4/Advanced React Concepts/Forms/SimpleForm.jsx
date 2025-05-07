import React, { useState } from 'react';

// SimpleForm Component
function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // CSS Styles in JS (for inline styling)
  const styles = {
    formContainer: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9'
    },
    error: {
      color: 'red',
      fontSize: '0.85rem',
      marginTop: '-10px',
      display: 'block'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#4CAF50'
    },
    successMessage: {
      color: 'green',
      fontSize: '1rem',
      marginTop: '10px',
      textAlign: 'center'
    }
  };

  // Validation function for form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage('');

    // Simulate an async operation like API call
    setTimeout(() => {
      alert(`Submitted: ${JSON.stringify(formData, null, 2)}`);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
      setSuccessMessage('Form submitted successfully!');
      document.querySelector('input[name="name"]').focus(); // Focus the name field after submit
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <span style={styles.error}>{errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.message && <span style={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting} style={styles.button}>
        {isSubmitting ? (
          <div style={styles.loading}>
            <span>Submitting...</span>
          </div>
        ) : (
          'Submit'
        )}
      </button>

      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
    </form>
  );
}

export default SimpleForm;
