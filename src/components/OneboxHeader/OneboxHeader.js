import React from 'react'
import './OneboxHeader.css'
import { useState } from 'react'

const OneboxHeader = () => {
  const [dark,setDarkMode] = useState(true)

  const handleMode = () =>{
    setDarkMode(!dark)
  }

  return (
    <div className={`onebox-header-bg-cont ${dark ? 'dark-mode' : 'light-mode'}`}>
      <h2>Onebox</h2>
      <div className='onebox-header-right-part'>
          <div className='mode-changer-container'>
              <img src='/img/dark-mode-icon-active.png' className='dark-img' alt='dark' onClick={handleMode}/>
              <img src='/img/light_mode.png' className='light-mode-inactive' alt='light' onClick={handleMode}/>
          </div>
          <switch style={{fontSize:"14px",marginTop:'5px'}}>
           Tim's Workspace
          </switch>
      </div>
    </div>
  )
}

export default OneboxHeader
