import React from 'react'
import gmail from '../../assets/gmail.jpg'
import location from '../../assets/location.jpg'
import phone from '../../assets/phone.jpg'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='container'>
    <br /><br />
      <div >
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="col"></div>
          <div className="col">
            <div className="card" id='idCard'>
              <img src={location} height={200} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{textAlign:"center"}}>Amdocs, India</p>
              </div>
            </div>
          </div>
          <div className="col"><h2 style={{ textAlign: 'center', paddingTop: '200px', fontWeight: 'bold', paddingLeft: '10px' }}>Contact Us</h2></div>
          <div className="col">
            <div className="card" id='idCard'>
              <img src={phone} height={200} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" style={{textAlign:"center"}}>080 46837034</p>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="card" id='idCard'>
              <img src={gmail} height={200} className="card-img-top " alt="..." />
              <div className="card-body">
                <p className="card-text" style={{textAlign:"center",paddingTop:'10px'}}>my@course.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>

  )
}

export default ContactUs