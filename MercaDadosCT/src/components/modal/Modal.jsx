import React from "react";
import "./Modal.css";
import seta from "../../assets/seta.svg"

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <img  className="img-button-modal" src={seta} alt="seta-img" />
        </button>
        {children}
      </div>
    </div>
  );
};