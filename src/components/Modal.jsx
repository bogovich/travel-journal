import PropTypes from "prop-types";
import {useEffect} from "react";
import ReactPortal from "./ReactPortal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import '../../index.css'
const Modal = ({ children, isOpen, onClose, isDark }) => {
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
      <div className={`modal ${isOpen ? "is-active" : ""} ${isDark ? 'dark-theme' : 'light-theme'}`}>
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content">
          {children}
          <span
          className="modal-close is-large"
          aria-label="close"
          onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </div>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired
};

export default Modal;
