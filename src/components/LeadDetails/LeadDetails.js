import React from 'react'
import './LeadDetails.css'

const LeadDetails = () => {
  return (
    <div className='lead-details-bg-cont'>
      <div className='lead-details-text-cont'> Lead Details</div>
      <div className="contact-info">
      <div className="info-item">
        <p className="label">Name</p>
        <p className="value">Orlando</p>
      </div>
      <div className="info-item">
        <p className="label">Contact No</p>
        <p className="value">+54-9062827869</p>
      </div>
      <div className="info-item">
        <p className="label">Email ID</p>
        <p className="value">orlando@gmail.com</p>
      </div>
      <div className="info-item">
        <p className="label">Linkedin</p>
        <p className="value">linkedin.com/in/timvadde/</p>
      </div>
      <div className="info-item">
        <p className="label">Company Name</p>
        <p className="value">Reachinbox</p>
      </div>
    </div>
    </div>
  )
}

export default LeadDetails
