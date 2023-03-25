import React from 'react'
import './card.css'
import abhinav from '../images/abhinav.png'
import back from '../images/back.jpeg'
import rating from '../images/rating.png'
export default function card() {
  return (
    <div className='cards'> 
     <div className='image_contianer'>
       <div><img src={abhinav} alt='not availabe' className='userimage'/></div>
       <div className='rieview'>
          <h3>Abhinav</h3>
          <p>wrote a reivew</p>
        </div>
     </div>
      <img src={back} className='background_image'/>
      <div className='rieviews'>
        <h5>Krisha cafe</h5>
        <p>Always great for a big party celebration. They take reservations. We like to sit in the back</p>
      </div>
    </div>
  )
}
