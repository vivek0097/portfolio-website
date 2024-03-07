import React from 'react';
import '../pages/Services.css'
import * as CgIcons from "react-icons/cg";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";



const Services = () => {


let pathName =  window.location.href;
let xpath = pathName.split('/')
let path = xpath.slice(-1)

// console.log(path[0], 'path')






  return (
    <div className='container-fluid service-ct pb-4'>
     <div className="row">
        {/* --top text-- */}
        <div className="col-12">
            <div className={path == '/' ? 'service-heading-one-home  pt-5 pb-5 d-flex justify-content-center' : "service-heading-one pt-5 pb-5 d-flex justify-content-center"}>
                <h2 className=''>Services</h2>
            </div>
        </div>
        <div className='col-12 icon-section'>
            <div className="row">
                <div className='col-lg-6 col-12 d-lg-flex d-md-flex d-block p-3 '>
                  <div className='col-lg-5 col-md-5 col-12 d-flex justify-content-center'>
                 <span className='wrap-image-service'>
                 <img src='/assets/images/shape1.png' alt='service-icon'  />
                  <span className='image-icon-service'><CgIcons.CgWebsite  style={{height: '60px', width:'60px'}}/></span>
                 </span>
                  </div>
                  <div className="col-lg-7 col-md-7 col-12 ">
                    <span className={path == '/'? 'service-sub-heading-home': 'service-sub-heading'}>Web Design</span><br></br>
                    <span className=''><p className={path == '/' ?'sub-text-home pt-4':'pt-4 sub-text-about'}>I Design The Web application & website UI.</p></span>
                  </div>
                </div>
                <div className='col-lg-6 col-12 d-lg-flex d-md-flex d-block p-3'>
                <div className='col-lg-5 col-md-5 col-12 d-flex justify-content-center'>
                <span className='wrap-image-service'>
                 <img src='/assets/images/shape2.png' alt='service-icon' />
                  <span className='image-icon-service '><MdIcons.MdOutlineDeveloperBoard  style={{height: '60px', width:'60px'}}/></span>
                 </span>
                 
                  </div>
                  <div className="col-lg-7 col-md-7 col-12 ">
                    <span className={path == '/'? 'service-sub-heading-home': 'service-sub-heading'}>Web Development</span><br></br>
                    <span className=''><p className={path == '/' ?'sub-text-home pt-4':'pt-4 sub-text-about'}>I Implement Logic on Front - End Web Application.</p></span>
                  </div>
                </div>
                <div className='col-lg-6 col-12 d-lg-flex d-md-flex d-block p-3'>
                <div className='col-lg-5 col-md-5 col-12 d-flex justify-content-center'>

                <span className='wrap-image-service'>
                 <img src='/assets/images/shape3.png' alt='service-icon'  />
                  <span className='image-icon-service'><SiIcons.SiPostman  style={{height: '60px', width:'60px'}}/></span>
                 </span>
                  
                  </div>
                  <div className="col-lg-7 col-md-7 col-12">
                    <span className={path == '/'? 'service-sub-heading-home': 'service-sub-heading'}>Postman</span><br></br>
                    <span className=''><p className={path == '/' ?'sub-text-home pt-4':'pt-4 sub-text-about'}>I Create Collection and Api testing on postman.</p></span>
                  </div>
                </div>
                <div className='col-lg-6 col-12 d-lg-flex d-md-flex d-block p-3'>
                <div className='col-lg-5 col-md-5 col-12 d-flex justify-content-center'>
                <span className='wrap-image-service'>
                 <img src='/assets/images/shape4.png' alt='service-icon'  />
                  <span className='image-icon-service'><img src='/assets/images/iis.jpeg' alt='service-icon' style={{height: '60px', width:'60px', backgroundColor: 'none'}} /></span>
                 </span>
                  </div>
                  <div className="col-lg-7 col-md-7 col-12 ">
                    <span className={path == '/'? 'service-sub-heading-home': 'service-sub-heading'}>IIS Server</span><br></br>
                    <span className=''><p className={path == '/' ?'sub-text-home pt-4':'pt-4 sub-text-about'}>I host the web Application Builds On IIS Server. </p></span>
                  </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Services