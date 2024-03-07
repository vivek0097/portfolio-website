import React from 'react';
import '../routes/About.css'
import { Link } from 'react-router-dom';
import AboutChild from './AboutChild';
import MySkills from '../pages/MySkills';
import Services from '../pages/Services';
import Footer from '../pages/Footer';




const About = () => {



  return (
    <div className='container-fluid about-ct'>

       <div className='row'>
        <div className='col-12 top-image-about  ps-0 pe-0'>
          <div className=''>
              <img src='/assets/images/bg-pic5.png' alt='bg-image' style={{width:'100%', height: '40vh', objectFit: 'cover'}} />
          </div>
        </div>
        <div className='image-text-box image-top-ct'>
           <div>
            <h2 className='about-heading-one'>About Us</h2>
            <span className='txt d-flex justify-content-center'><Link to="/" style={{textDecoration:'none', color:'white'}} className='pe-2'>Home</Link> / <Link to="/about" style={{textDecoration:'none', color:'white'}} className='ps-2'>About</Link></span>
           </div>
          </div>
          {/* ------about me------ */}
         <div className="col-12 about-box-two ">
           <AboutChild />
         </div>
         {/* --for --skill section-------- */}
         <div className="col-12 skill-box-ct">        
          <MySkills />       
         </div>
         {/* -----for  services  section--------- */}
         <div className="col-12 about-section-fourct">
            <Services />
         </div>
         {/* ---footer------------------------- */}
         <div className="col-12 ps-0 pe-0 about-footer-box">
          <Footer />
         </div>
       </div>
    </div>
  )
}

export default About