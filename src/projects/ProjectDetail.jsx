import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './projectDetail.css';
import { useNavigate } from 'react-router-dom';
import {IoIosArrowRoundBack} from 'react-icons/io'
import ImageModal from './ImageModal';


const ProjectDetail = () => { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


  const location = useLocation();
  const data = location.state;
  const navigate  = useNavigate();
  // console.log(data, "data")
  // console.log(data.allImg.length, "data")


  // Function to open the modal with the selected image
  const openModal = (imageSrc) => {
    console.log(imageSrc, "imgeee")
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className='container-fluid project-detail-ct'>
      <div className="row">
        <div className="col-12 pt-lg-2 pt-2 px-lg-5 px-2">
          {/* ---for project detail--- */}
          <div className="col-12 about-project-box p-4">
            <div className='d-lg-flex  d-md-flex d-block justify-content-between '>
              <button className='btn btn-danger px-lg-4 px-2 pt-1 pb-1 order-lg-2 order-1' type='button' onClick={() => navigate('/project')}><IoIosArrowRoundBack  />Go Back</button>
              <h5 className='order-lg-1 order-2 pt-lg-0 pt-2'>{data.title}</h5>
            </div>
          </div>
          {/* -----more detail------ */}
          <div className="col-12 about-project-box p-2 mt-2 mb-3">
            <div>
            <p className='descp-txt'>{data.description}</p>
            
            </div>
            <div>
            <p className=''>{data.usesTech ? data.usesTech : ''}</p>
            
            </div>
            <div>
            <span className='d-flex word-list'>Technologies:
              {data.technologies.map((word, index) => (
             <span key={index} className='ps-2'><p className='text-muted'>{word}</p></span>
              ))}          
            </span>      
             <span className='d-flex '>Role: <p className='ps-2 '>{data.role}.</p></span>
             <span className='d-flex mb-0'>For: <p className='ps-2 '>{data.company}.</p></span>
             <span className='d-flex mb-0'>From Date: <p className='ps-2'>{data.Sdate}</p></span>
             <span className='d-flex mb-0'>To Date: <p className='ps-2'>{data.Edate}</p></span>
            </div>
          </div>
          {/* --for image section---------------- */}
          <div className="col-12 project-detail-imgct mt-4 p-3 mb-3">
            <div className="col-12 d-flex justify-content-center">
            <p style={{color: 'purple'}}>Sub Images</p>
            </div>
          <div className="row  row-cols-2 row-cols-md-4 row-cols-lg-6 g-lg-4 g-md-4 g-4 p-lg-0 p-md-3 p-3 " >
              {
              data.allImg.length == 0 ? <p className='text-danger'>No More Images</p> : data.allImg.map((items, index) => {
                  return(
                    <>
                    <div className='col' key={index}>
                      <button className='sub-image-bttn' type='button' onClick={() => openModal(items.cImage)}>                  
                        <div className='subproject-box' >                   
                         <div className='d-flex justify-content-center '>
                          <img src={items.cImage} alt='project-images' style={{height:'100%', width:'100%', objectFit:'contain', overflow:'hidden'}}/>
                         </div>
                      </div>
                      </button>   
                     </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {/* --for image ---modal-------------------- */}
      <ImageModal isOpen={isModalOpen} imageSrc={selectedImage} onClose={closeModal} />
    </div>
  )
}

export default ProjectDetail
