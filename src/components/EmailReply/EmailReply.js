import React from 'react';
import './EmailReply.css';

function EmailReply({setReplyClicked}) {
    const closeReply = () =>{
        setReplyClicked(false)
    }

  return (
    <div className="email-reply">
        <div className='reply-heading-cont'>
            <h1>Reply</h1>
            <button style={{background:"transparent",border:"none",cursor:"pointer"}} onClick={closeReply}>
               <h1>X</h1> 
            </button>
        </div>
      <div className="field">
        <label>To :</label>
        <input type="text" value="jeanne@icloud.com" readOnly />
      </div>
      <div className="field">
        <label>From :</label>
        <input type="text" value="peter@reachinbox.com" readOnly />
      </div>
      <div className="field subject">
        <label>Subject :</label>
        <input type="text" value="Warmup Welcome" readOnly />
      </div>
      <textarea placeholder="Hi Jeanne,"></textarea>
      <div className="buttons">
        <button className="send-button">Send</button>
        <div className="icons">
          <i className="fas fa-bolt"></i>
          <i className="fas fa-eye"></i>
          <i className="fas fa-font"></i>
          <i className="fas fa-link"></i>
          <i className="fas fa-smile"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
}

export default EmailReply;
