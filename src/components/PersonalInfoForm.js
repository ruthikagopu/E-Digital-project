import React, { useState } from 'react';
import '../App.css';

const PersonalInfoForm = ({ onNext, saveData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!name || !email) {
      setError('All fields are required.');
      return;
    }

    // Email validation (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Enter a valid email.');
      return;
    }

    setError('');
    saveData({ name, email });
    onNext();
  };

  return (
    <div className="container">
      <h2>Step 1: Personal Information</h2>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfoForm;
