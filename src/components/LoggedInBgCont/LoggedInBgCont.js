import React from 'react'
import './LoggedInBgCont.css'
import Sidebar from '../Sidebar/Sidebar'
import OneboxHeader from '../OneboxHeader/OneboxHeader'
import MainContent from '../MainContent/MainContent'

const LoggedInBgCont = () => {
  return (
    <div className='logged-in-bg-cont'>
        <Sidebar/>
        <div className='main-container'>
            <OneboxHeader/>
            <MainContent/>
        </div>
      </div>
  )
}

export default LoggedInBgCont
