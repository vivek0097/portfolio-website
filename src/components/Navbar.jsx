import React, {useState, useEffect} from 'react'
import "./NavbarStyle.css"
import { Link, NavLink } from 'react-router-dom'
import {FaBars, FaTimes, FaHome} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {MdPermContactCalendar} from 'react-icons/md'


const Navbar = () => {
 const[click, setClick]= useState(false);

 const handleClick = () => setClick(!click)
 
    const navLinkStyle = ({ isActive }) => {
        return {
          color: isActive ? "blue" : "white",
          textDecoration: "none",
        
        };
      };

  /** hide mobile sidebar on click outside of sidebar */
  const handleClickOutside = () => setClick(false)
    
  //---------------------------------------------------
  useEffect(() => {
    /** hiding mobile sidebar onclick of backdrop*/
    if (click === true) {
      let el = document.querySelector('.backdrop')
      el.addEventListener('click', handleClickOutside, true);
      return () => {
        el.removeEventListener('click', handleClickOutside, true);
      };
    }
    // console.log("clk")
  }, [click]);

  return (
    <div className=''>
    <div className='row '>
    <div className='col-12  header-box px-4 p-2 '> 
    <div className="col-4 d-flex justify-content-start">

      <div>
      <NavLink to="/" style={navLinkStyle}> <h1 className='text-white logo-txt' >Portfolio.</h1></NavLink>
      </div>
      </div>
      <div className="col-8 d-flex justify-content-end">
        <div className={click ? "backdrop active" : "nav-menu" }>
          <span className={click ? "nav-menu active" : "nav-menu"}>
     
          <ul className="list-menu d-lg-flex d-block"> 
            <li className="d-flex"><span className="pe-3 sidebar-icon"><FaHome style={{height: '22px', width: '22px', color:'#fff'}} /></span><NavLink to="/" style={navLinkStyle}>Home</NavLink></li>
            <li className="d-flex"><span className="pe-3 sidebar-icon"><img src="/assets/images/products1.png" alt="product" style={{height: '22px', width: '22px', color:'#fff'}} /></span><NavLink to="/project" style={navLinkStyle}>Project</NavLink></li>
            <li className="d-flex"><span className="pe-3 sidebar-icon"><BiUser style={{height: '22px', width: '22px', color:'#fff'}} /></span><NavLink to="/about" style={navLinkStyle}>About</NavLink></li>
            <li className="d-flex"><span className="pe-3 sidebar-icon"><MdPermContactCalendar style={{height: '22px', width: '22px', color:'#fff'}} /></span><NavLink to="/contact" style={navLinkStyle}>Contact</NavLink></li>
            <li className='text-white d-lg-block d-none'>+91 - 9621946606</li>
           </ul>
          </span>

        </div>
       
      <div className='hamburger d-lg-none d-block' onClick={handleClick}>
          { click ?
          <FaTimes size={20} style={{color: "#fff"}} className='icon-size' />
          : <FaBars size={20} style={{color: "#fff"}} className='icon-size' />
          }
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar