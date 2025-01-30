import React from 'react'
import aboutUs from '../../assets/aboutUs.jpg'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2>
      <img className='img shadow-lg p-3 mb-5 bg-body rounded' src={aboutUs} alt="" />
      <br />
      <div>
      <p style={{fontWeight:'bold'}}><h4>Who are we?</h4></p>
        <p><h5>This website has been created by <b> Vishal Junghare</b>.</h5></p>
        <p><h5>Hi there, i am Vishal Junghare currently working as Software Developer at Amdocs.</h5></p>
        <br /><br /><br /><br />
      </div>
    </div>
    
  )
}

export default AboutUs