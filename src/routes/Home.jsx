import React, {useState} from 'react'
import '../routes/Home.css'
import Services from '../pages/Services'
import Footer from '../pages/Footer'
import { deamonImage } from './Pic'

const Home = () => {
 const [readMore, setReadMore] = useState(false)


 

 const readMoreFun = () => {
  setReadMore(true)
 }

 let pathName =  window.location.href;
let xpath = pathName.split('/')
let path = xpath.slice(-1)


  return (
    <div className='container-fluid'>
    <section className='section-one'>
      <div className='row'>
        {/* --ct-one */}
        <div className='col-12 home-ct-one pb-3'>
           <div className='square-one'></div>
           <div className='square-two'></div>
           <div className='circle-one'></div>
           <div className='circle-two'></div>
           
           {/* ---absolute content------ */}
           <div className='ct-one-content'>
              <div className='ct-one-inner-content'>
                <h1 className='pt-5 text-justify text-center txt heading-one'>I'm Vivek Singh<br />I'm React.js Developer</h1>
                <div className='pt-lg-5 pt-2 d-flex justify-content-center'>
                 <p className='txt'>2 + Year Experience in Web Development.</p>
                </div>
                <div className='pt-4 d-flex justify-content-center'>
                  <button type='button' className='px-lg-4 px-2 p-1 me-lg-5 me-2 download-btn'>Download CV</button>
                  <button type='button' className='p-1 px-lg-4  px-2 contact-btn'>Contact Us</button>
                </div>
              </div>
           </div>
        </div>
        {/* ---ct two----- */}
        <div className='col-12 wpo-exprience-area'>
          <div className='exprience-wrap'>
             <div className="exprience-b p-4">
                <h2>2 +</h2>
                <div className='experience-txt ms-2 pt-lg-5 pt-4'>
                  <span>Year</span><br></br>
                  <span>Experience</span>
                </div>
             </div>
          </div>
        </div>
        {/* ---ct-three----- */}
        <div className='12 home-ct-two d-lg-flex d-block justify-content-around '>
            <div className='left-ct col-lg-5 col-12 order-1'>
              <div className='home-pic-box  px-lg-3 px-0 p-2 '>  
                {/* <img src={deamonImage} alt='image-of-vivek' className='image-vivek-home'  /> */}
                <img src="/assets/images/vivek-profile.jpg" alt='vivek' className='image-vivek-home'  />
                
              
              </div>
            </div>

                {/* ---text body------------- */}
                <div className='right-ct col-lg-6 col-12 order-2'>
              <div className='pt-5 p-3'>
                <h1 className='heading-about-home'>About Me</h1>
                <span className='pt-3'>
                 <p className='home-about-txt'>Hello, I'm Vivek Singh, a passionate software developer with a strong foundation in React.js and two years of hands-on experience in crafting web applications. I'm dedicated to creating user-friendly and efficient software solutions that push the boundaries of what's possible in web development. Cureently I am working for Excellent Softwares as a Software Developer in Noida sector 62, UP 
                 for excellent i have  created SFA-(Sale Force Automation)  ans LMS-(License Management System) web application, working for Excellent Softwares since 02-Aug-2022 - still working.
                 I use here React.js, Javascript, CSS3, Html5, Bootstrap5, Redux, IIS-server, Postman !</p>
                </span>
                {readMore == false ? <div><button type='button' className='read-more-btn px-3 p-1' onClick={readMoreFun}>Read More...</button></div>
                 : <div className={readMore  ? "d-block" : "d-none"}>
                <span className='pt-4'>
                 <h3 className='about-heading-home2'>Work Experience</h3>
                 <h6 className='text-muted'>Total 16 Month's Experience</h6>
                 <p className='home-about-txt pt-1'>1- I'm working for Excellent Softwares since 02 Aug 2022-till date. <br></br>
                 2- And I have done a 5 Months Internship from Asmadiya Technologies Pvt. Ltd. Pune, Maharastra.
                 form 17 jan 2022 to 22 june 2022. as Trainee Software Engineer on React.js !<br></br>
                 3- I have Done One More Internship from Gorai Technologies Pvt. Ltd.  form 15 sep. 2021 to 15 jan 2022 on Back end and Front end Booth- backend using Java -java Microservices and AWS Cloud and front end React.js - front end development.<br></br>
                 4- I have worked for Vishvin Technologies Pvt. Ltd. form 13 march 2021 to 28 april 2021, as Trainee Softares Engineer on Java and Html, Css, javascript.
                  </p>
                </span>
                <span className='pt-4'>
                  <h3 className='about-heading-home2'>Education</h3>
                  <p className='home-about-txt pt-1'>I'm Engineering Graduate From SRMU Lucknow with Computer Science and Engineering  in 2020.</p>
                </span>
                <span className='pt-5 d-flex justify-content-center'>
                 <button className='download-btn px-4 p-1' type='button'>DownLoad CV</button>
                </span>
                 </div>}

              </div>
               </div>
        </div>
        {/* ----ct---four */}
         {/* -----for  services  section--------- */}
         <div className="home-section-fourct">
            <Services />
         </div>
             {/* ---footer------------------------- */}
             <div className="col-12 ps-0 pe-0 home-footer-box">
              <Footer path={path} />
            </div>
      </div>
    </section>
    </div>
  )
}

export default Home