import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import './Layout.css'



const Layout = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* ---for navbar--------------- */}
       <div className='col-12 head-box'>
           <Navbar />
       </div>
       {/* ---for content--- */}
       <div className='col-12 content-box ps-0 pe-0'>
             <Outlet />
       </div>
      </div>
    </div>
  )
}

export default Layout