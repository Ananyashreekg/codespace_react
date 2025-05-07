import React, { useState } from 'react';

// Constants for steps
const STEPS = {
  STEP1: 1,
  STEP2: 2,
  STEP3: 3,
};

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div style={styles.stepContainer}>
      <h2>Step 1: Personal Info</h2>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.address || !formData.city) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div style={styles.stepContainer}>
      <h2>Step 2: Address Info</h2>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const Step3 = ({ formData, prevStep, submitForm }) => (
  <div style={styles.stepContainer}>
    <h2>Step 3: Confirm Info</h2>
    <p><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Address:</strong> {formData.address}</p>
    <p><strong>City:</strong> {formData.city}</p>
    <button onClick={prevStep}>Back</button>
    <button onClick={submitForm}>Submit</button>
  </div>
);

const MultistepFrpm = () => {
  const [step, setStep] = useState(STEPS.STEP1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = () => {
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
    setStep(STEPS.STEP1);
    setFormData({ name: '', email: '', address: '', city: '' });
  };

  switch (step) {
    case STEPS.STEP1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case STEPS.STEP2:
      return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case STEPS.STEP3:
      return <Step3 formData={formData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <div>Error: Invalid step</div>;
  }
};

export default MultistepFrpm;

// Inline styles for clarity and separation
const styles = {
  stepContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};
