import React, { useState } from 'react'
import './MiddleContent.css'
import EmailCard from '../EmailCard/EmailCard'
import EmailReply from '../EmailReply/EmailReply'

const MiddleContent = () => {
  const [replyClicked,setReplyClicked] = useState(false)

  const clickReply = ()=>{
    setReplyClicked(!replyClicked)
  }

  return (
    <div className='middle-content-bg-cont'>
        <div className='middle-top-cont'>
            <div className='middle-top-left-cont'>
                <p className='person-name'>Oorlando</p>
                <p className='mail-id'>oorlando@gmail.com</p>
            </div>
            <div className='btns-container'>
                <button>
                  <img src='/img/meeting-icon.png' className='meeting-icon' alt='meeting completed'/>
                  Meeting Completed
                  <img src='/img/arrow_back.png'className='arrow' alt='arrow'/>
                </button>
                <button>
                  Move
                  <img src='/img/arrow_back.png'className='arrow' alt='arrow'/>
                </button>

                <div className='menu-icon-cont'>
                 <p style={{margin:"0px",fontSize:"16px",marginTop:"0px"}}>...</p> 
                </div>
                
            </div>
        </div>
        <div className='middle-btm-cont'>
            <div className='day-container'>
              <div className='hr-line'></div>
                <p className='today-cont'>Yesterday</p>
              <div className='hr-line'></div>
            </div>
            <EmailCard/>
            <div className='day-container'>
              <div className='hr-line'></div>
                <p className='today-cont'>Today</p>
              <div className='hr-line'></div>
            </div>
            <EmailCard/>
            <button className='reply-btn' onClick={clickReply}>
                <i class="fa-solid fa-reply"></i>
                <p>Reply</p>
            </button>
            {replyClicked?<EmailReply setReplyClicked={setReplyClicked}/>:""}
        </div>  
    </div>
  )
}

export default MiddleContent
