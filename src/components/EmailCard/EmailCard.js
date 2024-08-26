import React from 'react';
import './EmailCard.css';

const EmailCard = () => {
  return (
    <div className="email-card">
      <div className="email-header">
        <h3>New Product Launch</h3>
        <span className="email-date">20 June 2022 : 9:16AM</span>
      </div>
      <div className="email-details">
        <p>from : jeanne@icloud.com <span className="email-cc">cc : lennon.j@mail.com</span></p>
        <p>to : lennon.j@mail.com</p>
      </div>
      <div className="email-body">
        <p>Hi &#123;FIRST_NAME&#125;,</p>
        <p>
          I would like to introduce you to SaaSgrow, a productized design service specifically
          tailored for SaaS startups. Our aim is to help you enhance the user experience and boost
          the visual appeal of your software products.
        </p>
      </div>
    </div>
  );
};

export default EmailCard;
