import React, { useState } from 'react';
import '../App.css';

const BusinessInfoForm = ({ onNext, onBack, saveData }) => {
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!company || !industry || !size) {
      setError('All fields are required.');
      return;
    }

    setError('');
    saveData({ company, industry, size });
    onNext();
  };

  return (
    <div className="container">
      <h2>Step 2: Business Info</h2>

      <label>Company Name:</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Your company name"
      />

      <label>Industry:</label>
      <input
        type="text"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder="e.g. Tech, Education"
      />

      <label>Company Size:</label>
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="e.g. 10, 50-100"
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={onBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default BusinessInfoForm;
