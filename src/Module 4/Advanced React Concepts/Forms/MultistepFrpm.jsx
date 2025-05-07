import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => (
  <div>
    <h2>Step 1: Personal Info</h2>
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
    <button onClick={nextStep}>Next</button>
  </div>
);

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => (
  <div>
    <h2>Step 2: Address Info</h2>
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
    <button onClick={nextStep}>Next</button>
  </div>
);

const Step3 = ({ formData, prevStep, submitForm }) => (
  <div>
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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => {
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
    setStep(1);
    setFormData({ name: '', email: '', address: '', city: '' });
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <div>Error: Invalid step</div>;
  }
};

export default MultistepFrpm;
