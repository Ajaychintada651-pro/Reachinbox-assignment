import React from 'react';
import './Activities.css';

const Activities = () => {
  return (
    <div className="activities-container">
      <div className="activities-header">
        <h2>Activities</h2>
      </div>
      <div className="campaign-details">
        <h3>Campaign Name</h3>
        <p>3 Steps | 5 Days in Sequence</p>
      </div>
      <div className="activity-step">
        <div className="icon email-sent"></div>
        <div className="step-details">
          <h4>Step 1: Email</h4>
          <p>Sent <span className="date2">3rd, Feb</span></p>
        </div>
      </div>
      <div className="activity-step">
        <div className="icon email-opened"></div>
        <div className="step-details">
          <h4>Step 2: Email</h4>
          <p>Opened <span className="date2">5th, Feb</span></p>
        </div>
      </div>
      <div className="activity-step">
        <div className="icon email-opened"></div>
        <div className="step-details">
          <h4>Step 3: Email</h4>
          <p>Opened <span className="date2">5th, Feb</span></p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
