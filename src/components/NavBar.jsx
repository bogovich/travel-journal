import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal.jsx';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="nav__logo">
                <FontAwesomeIcon icon={faGlobeEurope} size="xl" className='nav__logo-img'/>
                <h1 className="nav__logo-name">my travel journal.</h1>
            </div>
            <div className="nav__actions">
                <button className="nav__actions-btn" onClick={() => setIsOpen(true)}>
                    <span className='nav__actions-btn-text'>Add</span>
                    <FontAwesomeIcon icon={faPlusCircle} className='nav__actions-btn-img'/>
                </button>
            </div>
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                This is Modal Content!
            </Modal>
        </nav>
    )
}

export default NavBar;