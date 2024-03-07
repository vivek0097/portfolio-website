import React from 'react';
import './imageModal.css'

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageSrc} alt="Image" className="modal-image" />
      </div>
    </div>
  );
};
 
export default ImageModal;
