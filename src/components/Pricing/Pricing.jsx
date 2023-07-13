import React from 'react'
import "./pricing.css"
import pricingimg from "../trainerimages/pricingimage.jpg"
const Pricing = () => {
  return (
      <div className='pricing-main' id="pricing">
      <h2 className='header'>Pricing</h2>
      <img src={pricingimg} className='image-pricing' alt=""/>
      </div>
  );
}

export default Pricing
