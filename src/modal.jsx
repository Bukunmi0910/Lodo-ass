import './App.css'
import React from 'react';
import './App.css'
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Modal will only render if isOpen is true

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;