import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  './project.css'
import Menu from "./menu"
import { useNavigate } from 'react-router-dom'

const Project = () => {
 
  const [filteredData, setFilteredData] = useState(Menu);
  
  const navigate = useNavigate();






  //---function for filetring category wise------projects---------------
  const filterProject = (categType) => {
      const updatedItems = Menu.filter((currElem) => {
        return currElem.type === categType;
      });
  setFilteredData(updatedItems)
  }







  return (
    <div className='container-fluid overflow-hidden'>
    <div className="row">
      {/* --top image section----- */}
     <div className='col-12 top-image-project  ps-0 pe-0'>
          <div className=''>
              {/* <img src='/assets/images/bg-pic5.png' alt='bg-image' style={{width:'100%', height: '40vh', objectFit: 'cover'}} /> */}     
          </div>
       </div>
        <div className='image-text '>
           <div className=''>
            <h2 className='about-heading-one'>Projects</h2>
            <span className='txt d-flex justify-content-center'><Link to="/" style={{textDecoration:'none', color:'white'}} className='pe-2'>Home</Link>  /  <Link to="/contact" style={{textDecoration:'none', color:'white'}} className='ps-2'>Projects</Link></span>
           </div>
        </div>
        {/* -----link section----------- */}
        <div className="col-12 project-content-box ps-0 pe-0">
           <div className="col-12 project-link-box d-flex justify-content-center">
             <ul className="project-filter-list pt-2">
              <li className="project-link-items"><button type='button' className='filter-bttn' onClick={() => setFilteredData(Menu)} >All</button></li>
              <li className="project-link-items"><button type='button' className='filter-bttn' onClick={() => filterProject('web site')}  >Web Sites</button></li>
              <li className="project-link-items"><button type='button' className='filter-bttn' onClick={() => filterProject('web application')}>Web Applications</button></li>
              <li className="project-link-items"><button type='button' className='filter-bttn' onClick={() => filterProject('Ecommerce website')}>E-Commerce</button></li>
             </ul>
           </div>
             
      

           {/* ---card section---- */}
           <div className="col-12 d-flex justify-content-center pt-4 ">
           <div className='col-lg-11  col-12  d-flex flex-wrap ps-0 pe-0 ' >
            
           <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-lg-4 g-md-4 g-4 p-lg-0 p-md-3 p-3 w-100" >
              {
                filteredData.map((items, index) => {
                  return(
                    <>
                    <div className='col ' key={index}>
                      
                      <div className='crd-box-prject' >
                         <div className='d-flex justify-content-center pt-3'>
                          <img src={items.pic} alt='project-images' style={{height:'180px', width:'80%', objectFit:'contain', overflow:'hidden'}}/>
                         </div>
                         <div>
                          <span className='d-flex justify-content-center'><h5 className='pt-3 crd-title'>{items.title}</h5></span>
                         </div>
                         
                         <div className='d-flex justify-content-center pt-3'>
                          <button className='view-bttn' type='button' onClick={() => navigate("/product-detail", { state: items })}> View Work</button>
                        </div>
                         
                      </div>
                    
                     </div>
                    </>
                  )
                })
              }
            </div>
            
            </div>
           </div>
        </div>
     
     </div>
    </div>
  )
}

export default Project