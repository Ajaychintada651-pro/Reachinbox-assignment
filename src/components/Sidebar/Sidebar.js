import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-bg-cont'>
        <img src='/img/reachinbox-minilogo.png' alt='logo' className='reachinbox-mini-logo'/>
        <div className='imgs-cont'>
          <img src='/img/Home.svg' className='sidebar-icon' alt='Home'/>
          <img src='/img/person-search.svg' className='person-search-icon' alt='Search'/>
          <img src='/img/email.svg' className='sidebar-icon' alt='Home'/>
          <img src='/img/telegram-icon.svg' className='telegram-icon' alt='Home'/>
          <img src='/img/menu-icon.svg' className='sidebar-icon' alt='Home'/>
          <img src='/img/messages.svg' className='sidebar-icon' alt='Home'/>
          <img src='/img/statistics.svg' className='statistics-icon' alt='Home'/>
        </div>
        <img src='/img/name.png' className='name-icon' alt='Person Name'/>
    </div>
  )
}

export default Sidebar
