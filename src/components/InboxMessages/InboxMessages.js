import React from 'react'
import './InboxMessages.css'

const InboxMessages = () => {
  return (
    <div className='inbox-bg-cont'>
      <div className='all-inboxes-cont'>  
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
          <h1>All Inbox(s) </h1>
          <img src='/img/down-arrow.png' alt='arrow' className='downarrow-icon'/>
        </div> 
        <div className='refresh-cont'>
          <img src='/img/reload.png' className='reload-icon' alt='refresh'/>
        </div>
      </div>
      <p className='selected-number'><span className='selected-count'>25/25</span> Inboxes Selected</p>
      <input type='search' className='search-input' placeholder='Search'/>
      <div className='filter-cont'>
          <p><span className='replies-count'>26</span>New Replies</p>
          <div>
            <p className='newwst-text'>Newest</p>
          </div>
      </div>
      <div className='msges-cont'>
          <ul className='msg-container'>
              <li>
                <div className='mail-container'>
                    <p className='mail'>Ajay@gmail.com</p>
                    <p className='date'>Mar 7</p>
                </div>
                <p className='comment'>I have tried a lot</p>
                <div className='btns-cont'>
                    <button className='interested-text'>
                      <img src='/img/green_bubble.png' className='bubble' alt='bubble'/>
                      Interested
                      </button>
                    <button className='campaig-text'>
                    <img src='/img/telegram-icon.svg' className='campaign-icon' alt='campaign'/>
                      Campaign Name
                      </button>
                </div>
              </li>
          </ul>
          <ul className='msg-container'>
              <li>
                <div className='mail-container'>
                    <p className='mail'>Ajay@gmail.com</p>
                    <p className='date'>Mar 7</p>
                </div>
                <p className='comment'>I have tried a lot</p>
                <div className='btns-cont'>
                    <button className='interested-text'>
                      <img src='/img/green_bubble.png' className='bubble' alt='bubble'/>
                      Interested
                      </button>
                    <button className='campaig-text'>
                    <img src='/img/telegram-icon.svg' className='campaign-icon' alt='campaign'/>
                      Campaign Name
                      </button>
                </div>
              </li>
          </ul>
          <ul className='msg-container'>
              <li>
                <div className='mail-container'>
                    <p className='mail'>Ajay@gmail.com</p>
                    <p className='date'>Mar 7</p>
                </div>
                <p className='comment'>I have tried a lot</p>
                <div className='btns-cont'>
                    <button className='interested-text'>
                      <img src='/img/green_bubble.png' className='bubble' alt='bubble'/>
                      Interested
                      </button>
                    <button className='campaig-text'>
                    <img src='/img/telegram-icon.svg' className='campaign-icon' alt='campaign'/>
                      Campaign Name
                      </button>
                </div>
              </li>
          </ul>
          <ul className='msg-container'>
              <li>
                <div className='mail-container'>
                    <p className='mail'>Ajay@gmail.com</p>
                    <p className='date'>Mar 7</p>
                </div>
                <p className='comment'>I have tried a lot</p>
                <div className='btns-cont'>
                    <button className='interested-text'>
                      <img src='/img/green_bubble.png' className='bubble' alt='bubble'/>
                      Interested
                      </button>
                    <button className='campaig-text'>
                    <img src='/img/telegram-icon.svg' className='campaign-icon' alt='campaign'/>
                      Campaign Name
                      </button>
                </div>
              </li>
          </ul>
          <ul className='msg-container'>
              <li>
                <div className='mail-container'>
                    <p className='mail'>Ajay@gmail.com</p>
                    <p className='date'>Mar 7</p>
                </div>
                <p className='comment'>I have tried a lot</p>
                <div className='btns-cont'>
                    <button className='interested-text'>
                      <img src='/img/green_bubble.png' className='bubble' alt='bubble'/>
                      Interested
                      </button>
                    <button className='campaig-text'>
                    <img src='/img/telegram-icon.svg' className='campaign-icon' alt='campaign'/>
                      Campaign Name
                      </button>
                </div>
              </li>
          </ul>
          <ul className='msg-container'>
              <li>
                <div className='mail-container'>
                    <p className='mail'>Ajay@gmail.com</p>
                    <p className='date'>Mar 7</p>
                </div>
                <p className='comment'>I have tried a lot</p>
                <div className='btns-cont'>
                    <button className='interested-text'>
                      <img src='/img/green_bubble.png' className='bubble' alt='bubble'/>
                      Interested
                      </button>
                    <button className='campaig-text'>
                    <img src='/img/telegram-icon.svg' className='campaign-icon' alt='campaign'/>
                      Campaign Name
                      </button>
                </div>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default InboxMessages
