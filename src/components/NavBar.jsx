import {useState} from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal.jsx';
import EntryAddForm from "./EntryAddForm.jsx";
import SwitchButton from "./SwitchButton.jsx";


const NavBar = ({addEntry}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAddEntry = (entry) => {
        addEntry(entry);
        setIsOpen(false);
    }

    return (
        <nav>
            <div className="nav__logo">
                <FontAwesomeIcon icon={faGlobeEurope} size="xl" className='nav__logo-img'/>
                <h1 className="nav__logo-name">my travel journal.</h1>
            </div>
            <SwitchButton />
            <div className="nav__actions">
                <button className="nav__actions-btn" onClick={() => setIsOpen(true)}>
                    <span className='nav__actions-btn-text'>Add</span>
                    <FontAwesomeIcon icon={faPlusCircle} className='nav__actions-btn-img'/>
                </button>
            </div>
            <Modal className="add-entry" onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <EntryAddForm addEntry={handleAddEntry} />
            </Modal>
        </nav>
    )
}

NavBar.propTypes = {
    addEntry: PropTypes.func.isRequired
}

export default NavBar;