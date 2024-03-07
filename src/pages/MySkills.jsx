import React from 'react'
import './mySkill.css'


const MySkills = () => {
  return (
    <div className='container myskill-ct-main'>
    <div className='row'>
        <div className="col-12  d-flex justify-content-center">
            <div className='col-lg-10 col-md-12 col-12 d-block '>
             <div className=' d-flex justify-content-center mb-5'>
                <h1 className='section-heading-1'>My skills</h1>
             </div>
          
               
                  <div className='skill-boxes d-flex justify-content-center flex-wrap  pt-0'>
                  
                
                   <div class="progress-circle over50 p70"> 
                    <span>70% </span><span className='pt-5 mt-3 text-primary'>JavaScript</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                   </div>
                
                    <div class="progress-circle over50 p75">
                    <span>75%</span><span className='pt-5 mt-3 text-primary'>React.js</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                    </div>
                    <div class="progress-circle over50 p80">
                    <span>80%  </span><span className='pt-5 mt-3 text-primary'>HTML</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                    </div>
                    <div class="progress-circle over50 p75">
                    <span>75% </span><span className='pt-5 mt-3 text-primary'>CSS</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                    </div>
                    <div class="progress-circle over50 p80">
                    <span>80% </span><span className='pt-5 mt-3 text-primary'>Bootstrap5</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                    </div>
                    <div class="progress-circle over50 p68">
                    <span>68% </span><span className='pt-5 mt-3 text-primary'>Postman</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                    </div>
                    <div class="progress-circle over50 p51">
                    <span>50% </span><span className='pt-5 mt-3 text-primary'>IIS Server</span>
                    <div class="left-half-clipper">
                        <div class="first50-bar"></div>
                        <div class="value-bar"></div>
                    </div>
                    </div>
               </div>
  
            
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default MySkills