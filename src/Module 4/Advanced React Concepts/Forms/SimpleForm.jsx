import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Validation function
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

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
    <>
      <style>
        {`
          .form-container {
            max-width: 400px;
            margin: 40px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
          }

          .error {
            color: red;
            font-size: 0.85rem;
            margin-top: -10px;
            display: block;
          }

          input, textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }

          button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #4CAF50;
          }

          .success-message {
            color: green;
            font-size: 1rem;
            margin-top: 10px;
            text-align: center;
          }
        `}
      </style>

      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="loading">
              <span>Submitting...</span>
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>

      {successMessage && <div className="success-message">{successMessage}</div>}
    </>
  );
}

export default SimpleForm;
