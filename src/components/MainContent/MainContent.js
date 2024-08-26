import React from 'react'
import './MainContent.css'
import NoMessageContent from '../NoMessageContent/NoMessageContent'
import ContentFound from '../ContentFound/ContentFound'

const MainContent = () => {
  return (
    <div className='maincontent-bg-cont'>
        {/* <NoMessageContent/> */}
        <ContentFound/>
    </div>
  )
}

export default MainContent
