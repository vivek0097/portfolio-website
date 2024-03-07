import React from 'react';
import '../routes/AboutChild.css'






const AboutChild = () => {
  return (
    <div className='container-fluid about-child-ct'>
        <div className='row'>
          <div className='col-12 d-lg-flex d-block justify-content-around about-child-content'>
               {/* ---image body--------------- */}
           <div className='left-ct col-lg-5 col-12 order-1'>
            <div className='home-pic-box  px-lg-3 px-0 p-2 '>  
                <img src='/assets/images/vivek-pic.jpg' alt='image-of-vivek' className='image-vivek-home'  />
              </div>
            </div>

           {/* ---text body------------- */}
            <div className='right-ct col-lg-6 col-12 order-2'>
              <div className='pt-5 p-3'>
                <h1 className='heading-about-sec2'>About Me</h1>
                <span className='pt-3'>           
                 <p className='about-sub-txt'>Hello, I'm Vivek Singh, a passionate software developer with a strong foundation in React.js and two years of hands-on experience in crafting web applications. I'm dedicated to creating user-friendly and efficient software solutions that push the boundaries of what's possible in web development. Cureently I am working for Excellent Softwares as a Software Developer in Noida sector 62, UP 
                 for excellent i have  created SFA-(Sale Force Automation)  ans LMS-(License Management System) web application, working for Excellent Softwares since 02-Aug-2022 - still working.
                 I use here React.js, Javascript, CSS3, Html5, Bootstrap5, Redux, IIS-server, Postman !</p>
                </span>
                {/* --journey */}
                <span className='pt-3'>
                  <h3 className='about-heading-two'>My Journey</h3>
                  <p className='about-sub-txt pt-1'>
                  My journey in the world of software development began with a curiosity about how websites work and a drive to make a difference through technology. Over the past two years, I've had the privilege of diving deep into React.js, one of the most powerful and widely-used front-end libraries in the industry. During this time, I've honed my skills in building responsive and dynamic user interfaces, optimizing performance, and collaborating effectively with cross-functional teams.
                  </p>
                </span>
                {/* --work exp */}
                <span className='pt-4'>
                 <h3 className='about-heading-two'>Work Experience</h3>
                 <h6>Total 2 Year Experience</h6>
                 <p className='about-sub-txt pt-1'>1- I'm working for Excellent Softwares as a Softwares Developer since 02 Aug 2022- still working. <br></br>
                 2- And I have done a 5 Months Internship from Asmadiya Technologies Pvt. Ltd. Pune, Maharastra.
                 form 17 jan 2022 to 22 june 2022. as Trainee Software Engineer on React.js !<br></br>
                 3- I have Done One More Internship from Gorai Technologies Pvt. Ltd.  form 15 sep. 2021 to 15 jan 2022 on Back end and Front end Booth- backend using Java -java Microservices and AWS Cloud and front end React.js - front end development.<br></br>
                 4- I have worked for Vishvin Technologies Pvt. Ltd. form 13 march 2021 to 28 april 2021, as Trainee Softares Engineer on Java and Html, Css, javascript.
                  </p>
                </span>
                <span className='pt-4'>
                  <h3 className='about-heading-two'>Education</h3>
                  <p className='about-sub-txt pt-1'>I'm Engineering Graduate From SRMU Lucknow with Computer Science and Engineering  in 2020.</p>
                </span>
                <span className='pt-3 pb-3 d-flex justify-content-center'>
                 <button className='download-btn px-4 p-1' type='button'>DownLoad CV</button>
                </span>
              </div>
           </div>
         </div>
        </div>
    </div>
  )
}

export default AboutChild