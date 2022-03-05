import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={isOpen ? 'modal open' : 'modal'}
      onClick={() => setIsOpen(false)}
    >
      <div className='content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
