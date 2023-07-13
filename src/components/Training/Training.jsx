import React from 'react'
import "./training.css"
import img1 from '../trainerimages/trainer1.jpg'
import img2 from '../trainerimages/trainer2.jpg'
import img3 from '../trainerimages/trainer3.jpg'
import img4 from '../trainerimages/trainer4.jpg'
import img5 from '../trainerimages/trainer5.jpg'

const Training = () => {
  return (
    <div className='main' id="training">
    <div className='inner-main'>
      <h2 className='training-header'>Meet our team</h2> 
      <h3 className='training-header2'>We are a team of experienced people,nutrition,sports and fitness freak. <br/>
      experts with talent and knowlege
      unsurpassed in the industry get to know us</h3>
      </div>
      <div className='wrapper'>
        
          
          <img src={img1} className="item" alt=""/>
          <img src={img2} className="item" alt=""/>
          <img src={img3} className="item" alt=""/>
          <img src={img4} className="item" alt=""/>
          <img src={img5}  className="item" alt=""/>
      
      </div>
    </div>
  )
}

export default Training
