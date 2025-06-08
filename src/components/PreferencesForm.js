import React, { useState } from 'react';
import '../App.css';

const PreferencesForm = ({ onBack, onSubmit, saveData }) => {
  const [theme, setTheme] = useState('light');
  const [layout, setLayout] = useState('grid');

  const handleSubmit = () => {
    saveData({ theme, layout });
    onSubmit();
  };

  return (
    <div className="container">
      <h2>Step 3: Preferences</h2>

      <label>Choose Theme:</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label>Dashboard Layout:</label>
      <select value={layout} onChange={(e) => setLayout(e.target.value)}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>

      <button onClick={onBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PreferencesForm;
