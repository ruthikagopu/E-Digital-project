import React from 'react';
import '../App.css';

const Dashboard = ({ userData }) => {
  return (
    <div className="container">
      <h2>Welcome, {userData.name}!</h2>

      <div className="user-info">
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Company:</strong> {userData.company}</p>
        <p><strong>Industry:</strong> {userData.industry}</p>
        <p><strong>Size:</strong> {userData.size}</p>
        <p><strong>Theme:</strong> {userData.theme}</p>
        <p><strong>Layout:</strong> {userData.layout}</p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Team Members</h3>
          <p>12</p>
        </div>
        <div className="card">
          <h3>Active Projects</h3>
          <p>5</p>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
