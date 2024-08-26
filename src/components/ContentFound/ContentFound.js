import React from 'react'
import './ContentFound.css'
import InboxMessages from '../InboxMessages/InboxMessages'
import MiddleContent from '../MiddleContent/MiddleContent'
import Details from '../Details/Details'

const ContentFound = () => {
  return (
    <div className='content-found-bg-cont'>
      <InboxMessages/>
      <MiddleContent/>
      <Details/>
    </div>
  )
}

export default ContentFound
