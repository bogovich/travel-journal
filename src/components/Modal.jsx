import PropTypes from "prop-types";
import {useEffect} from "react";
import ReactPortal from "./ReactPortal";
import './Modal.css';
const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if(!isOpen) return null;

  return (
    <ReactPortal id="portal">
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content">{children}</div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onClose}
        ></button>
      </div>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
