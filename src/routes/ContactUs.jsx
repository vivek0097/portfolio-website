import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './contactUs.css'
import {TfiEmail} from 'react-icons/tfi'
import {SlEarphonesAlt} from 'react-icons/sl'
import Footer from '../pages/Footer';

const ContactUs = () => {
  const [inputValues, setInputValues] = useState({
  firstName:"",
  lastName: "",
  Email:"",
  Subject: "",
  Message: ""
  })

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };



  const submitHandler = async(e) => {
    e.preventDefault()
    
    const data = {...inputValues}
    const jsonData = {
      FirstName:data.firstName,
      LastName:data.lastName,
      Email:data.Email,
      Subject:data.Subject,
      Message:data.Message
    }
    console.log(JSON.stringify(jsonData), 'json data')
try{
  const response = await fetch('https://64ff5197f8b9eeca9e29fb5c.mockapi.io/contactSave',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(jsonData),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok'); 
  }
  const responseData = await response.json();
  console.log('Data saved successfully:', responseData);
}catch(error){
  console.error('Error:', error);
}

    alert("message sended successfully!")
    setInputValues({
      firstName:"",
      lastName:"",
      Email:"",
      Subject:"",
      Message:""
    })
  }



  return (
    <div className='container-fluid contact-ct-main'>
       <div className="row">
       <div className='col-12 top-image-about  ps-0 pe-0'>
          <div className=''>
              <img src='/assets/images/bg-pic5.png' alt='bg-image' style={{width:'100%', height: '40vh', objectFit: 'cover'}} />
          </div>
       </div>
        <div className='image-text-box image-top-ct'>
           <div>
            <h2 className='about-heading-one'>Contact Us</h2>
            <span className='txt d-flex justify-content-center'><Link to="/" style={{textDecoration:'none', color:'white'}} className='pe-2 '>Home</Link>  /  <Link to="/contact" style={{textDecoration:'none', color:'white'}} className='ps-2 '>Contact</Link></span>
           </div>
        </div>
          {/* ---section-two---------- */}
       
        <div className="col-12 contact-section-two ps-0 pe-0">
        <div className="col-12 d-flex justify-content-center heading-box-contact">
            <h1 className="section-heading-one pt-5 pb-5">Let's Talk </h1>
          </div>
          <div className="col-12 contact-crd-box d-flex justify-content-center ">
              <div className="col-lg-9 col-12 ">
               <div className="col-12 d-lg-flex d-block justify-content-center gap-lg-5 gap-md-2 gap-2">
                {/* box -left */}
                <div className="col-lg-5 col-md-12 col-12 left-contact-box ">
                  <h2 className='contact-form-heading'>Get In Touch</h2>
                  <div className="col-12 pt-4">
                    <form onSubmit={submitHandler}>
                      {/* name */}
                      <div className="col-12 d-lg-flex justify-content-between d-block ">
                      <div className="col-lg-5 col-12 mb-3">
                        <input type='text' name="firstName" placeholder='First Name' className=' contact-input' autoComplete='off' required value={inputValues.firstName} onChange={inputHandler} />
                      </div>
                      <div className="col-lg-5 col-12 mb-3">
                       <input type='text' name="lastName" placeholder='Last Name' className=' contact-input'  autoComplete='off' required value={inputValues.lastName} onChange={inputHandler} />
                      </div>
                       
                      </div>
                        {/* email */}
                        <div className="col-lg-12 col-12 mb-3 w-100 ">
                         <input type='email' name="Email" placeholder='Email' className='contact-input' autoComplete='off' required value={inputValues.Email} onChange={inputHandler} />
                        </div>
                        <div className="col-lg-12 col-12 mb-3 w-100 ">
                         <input type='text' name="Subject" placeholder='Subject' className='contact-input' autoComplete='off' required value={inputValues.Subject} onChange={inputHandler} />
                        </div>
                        <div className="col-lg-12 col-12 mb-3 w-100 ">
                         <textarea type='text' name="Message" placeholder='Message' className='contact-input' style={{lineHeight:'40px'}}  autoComplete='off' required value={inputValues.Message} onChange={inputHandler} />
                        </div>
                        <div className="col-12 pt-4 pb-4 d-flex justify-content-center">
                           <span className="message">
                            <button type='submit' className='message-btn' >Send Message</button>
                           </span>
                        </div>
                    </form>
                  </div>
                </div>
                {/* ---box -right---- */}
                <div className="col-lg-5 col-md-12 col-12 right-contact-box d-block flex-wrap">
                  <div className="  contact-cards">
                    <div className="title">
                     <h4>vek.sgh@gmail.com</h4>
                    </div>
                    <div className="txt-body d-flex">
                      <div className="icon-contact">
                      <span className='text-danger'><TfiEmail /></span>
                      </div>
                      <div className="icon-contact-txt ps-4">Email</div>
                    </div>

                  </div>
                  <div className=" mt-4 contact-cards">
                  <div className="title">
                  <h4>+91 9621946606</h4>
                  </div>
                  <div className="txt-body d-flex">
                     <div className="icon-contact">
                      <span className='text-danger'><SlEarphonesAlt /></span>
                     </div>
                      <div className="icon-contact-txt ps-4">Phone</div>
                  </div>
                  </div>
                </div>
               </div>
              </div>
          </div>
        </div>
        {/* ---section----three------------------footer */}
          <div className="col-12 ps-0 pe-0 ">
             <Footer />
          </div>
       </div>
    </div>
  )
}

export default ContactUs;