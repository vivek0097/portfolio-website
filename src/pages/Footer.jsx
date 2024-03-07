import React from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import { FaHome} from 'react-icons/fa'
import { FaFacebookF} from 'react-icons/fa'
import { BsTwitter, BsInstagram} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {MdPermContactCalendar} from 'react-icons/md'


const Footer = ({path}) => {

  const navLinkStyle2 = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
      textDecoration: "none",
    
    };
  };

  const navLinkStyle3 = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
      textDecoration: "none",
    
    };
  };


  return (
    <div className='container-fluid footer-main-ct '>
       <div className="row">
          <div className="col-12 ps-0 pe-0 ">
            {/* box-1 */}
            <div className={path == "home" ? "col-12  footer-box-one-home d-flex justify-content-center" : "col-12  footer-box-one d-flex justify-content-center"}>
                <div className='col-lg-9 col-12 d-lg-flex d-flex flex-wrap'>
                 <div className="col-lg-3 col-md-6 col-12  d-flex justify-content-lg-start justify-content-center footer-logo-sec ">
                 <NavLink to="/" style={{textDecoration:'none'}}> <h1 className={path == 'home'?'logo-txt-footer-home' :'logo-txt-footer'} >Portfolio.</h1></NavLink>
                 </div>
                 <div className="col-lg-6 col-md-6 col-12 footer-nav-box ">
                
                  <ul className="list-menu d-lg-flex d-flex px-2"> 
                    <li className="d-flex px-5"><NavLink to="/project" style={path == 'home' ? navLinkStyle3 : navLinkStyle2}>Project</NavLink></li>
                    <li className="d-flex px-5"><NavLink to="/about" style={path == 'home' ? navLinkStyle3 : navLinkStyle2}>About</NavLink></li>
                    <li className="d-flex px-5 "><NavLink to="/contact" style={path == 'home' ? navLinkStyle3 : navLinkStyle2}>Contact</NavLink></li>            
                  </ul>
                
                 </div>
                 <div className="col-lg-3 col-md-12 col-12 footer-social-icons">
                   <ul className='social-icon-list d-flex justify-content-around'>
                    <li className='social-icon-box'><NavLink to="https://www.facebook.com/profile.php?id=100010584063042"><span><FaFacebookF  style={{height: '50px', background: 'none'}} className='icon-footer' /></span></NavLink></li>
                    <li className='social-icon-box'><NavLink to="https://twitter.com/VivekSi86862065?t=D_qrVS0jrW3arF9avMNpew&s=08"><span><BsTwitter style={{height: '50px', width:'30px', background: 'none' }} className='icon-footer' /></span></NavLink></li>
                    <li className='social-icon-box'><NavLink to="https://instagram.com/___vivek_singh_rajput___?igshid=NGVhN2U2NjQ0Yg=="><span><BsInstagram style={{height: '50px', width:'30px'}} className='icon-footer' /></span></NavLink></li>
                   </ul>
                 </div>
                </div>
            </div>
            {/* box-2 */}
            <div className={path == 'home' ?'col-12 footer-box-two-home':"col-12 footer-box-two owerflow-hidden"}>
                <span className={path == 'home'? 'footer-copyright-txt-home' : 'footer-copyright-txt'}><h6>©️ Copyright 2024 - Developed By Vivek Singh</h6></span>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Footer