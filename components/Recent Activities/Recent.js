import React from 'react'
import Reviews from './Reviews.js'
import './Recent.css'
function Recent() {
  return (
    <div >
      <h2>Recent Activities</h2>
      <div className='contain'>
      <Reviews/>
      <Reviews/>
      <Reviews/>
      <Reviews/>
      <Reviews/>
      <Reviews/>
      </div>
    </div>
  )
}

export default Recent
