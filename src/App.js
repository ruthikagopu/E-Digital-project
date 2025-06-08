import React, { useState, useEffect } from 'react';
import './App.css';
import PersonalInfoForm from './components/PersonalInfoForm';
import BusinessInfoForm from './components/BusinessInfoForm';
import PreferencesForm from './components/PreferencesForm';
import Dashboard from './components/Dashboard';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
      setStep(4); // Show dashboard directly if data exists
    }
  }, []);

  const saveData = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setStep(4);
  };

  return (
    <div className="container">
      {step <= 3 && (
        <div className="progress-bar" style={{ width: `${(step - 1) * 33.33}%` }}></div>
      )}

      {step === 1 && (
        <PersonalInfoForm onNext={nextStep} saveData={saveData} />
      )}
      {step === 2 && (
        <BusinessInfoForm onNext={nextStep} onBack={prevStep} saveData={saveData} />
      )}
      {step === 3 && (
        <PreferencesForm onBack={prevStep} onSubmit={handleSubmit} saveData={saveData} />
      )}
      {step === 4 && <Dashboard userData={userData} />}
    </div>
  );
}

export default App;
