// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../Footer/Footer.css'
// import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaGitlab } from 'react-icons/fa'

// const Footer = () => {
//     return (
//         <div style={{ height: '10%' }} className='footer'>
//             <footer className="bg-dark text-center text-white">
            
//                 <div className="container">
//                     <section className="mb-0">

//                         <a className="btn btn-outline-light btn-floating m-1" href="www.facebook.com" target="_blank" role="button"><i className="fab fa-facebook-f" /><FaFacebook /></a>

//                         <a className="btn btn-outline-light btn-floating m-1" href="www.google.com" target="_blank" role="button"><i className="fab fa-google" /><FaGoogle /></a>

//                         <a className="btn btn-outline-light btn-floating m-1" href="www.instagram.com" target="_blank" role="button"><i className="fab fa-instagram" /><FaInstagram /></a>

//                         <a className="btn btn-outline-light btn-floating m-1" href="www.linkedin.com" target="_blank" role="button"><i className="fab fa-linkedin-in" /><FaLinkedin /></a>

//                         <a className="btn btn-outline-light btn-floating m-1" href="www.gitlab.com" target="_blank" role="button"><i className="fab fa-gitlab" /><FaGitlab /></a>

//                     </section>
//                     <div className="text-center " style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//                     © 2025 Copyright:
//                     <a className="text-white" href='/home'>Course App</a>
//                 </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }

//export default Footer

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaGitlab } from 'react-icons/fa';


const Footer = () => {
  return (
    <div style={{ height: '10%' }} className='footer'>
    <footer className="bg-dark text-center text-white">
    
        <div className="container">
            <section className="mb-0">

                <a className="btn btn-outline-light btn-floating m-1" href="www.facebook.com" target="_blank" role="button"><i className="fab fa-facebook-f" /><FaFacebook /></a>

                <a className="btn btn-outline-light btn-floating m-1" href="www.google.com" target="_blank" role="button"><i className="fab fa-google" /><FaGoogle /></a>

                <a className="btn btn-outline-light btn-floating m-1" href="www.instagram.com" target="_blank" role="button"><i className="fab fa-instagram" /><FaInstagram /></a>

                <a className="btn btn-outline-light btn-floating m-1" href="www.linkedin.com" target="_blank" role="button"><i className="fab fa-linkedin-in" /><FaLinkedin /></a>

                <a className="btn btn-outline-light btn-floating m-1" href="www.gitlab.com" target="_blank" role="button"><i className="fab fa-gitlab" /><FaGitlab /></a>

            </section>
            <div className="text-center " style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2025 Copyright:
            <a className="text-white" href='/home'>Course App</a>
        </div>
        </div>
    </footer>
</div>
  );
};

export default Footer;