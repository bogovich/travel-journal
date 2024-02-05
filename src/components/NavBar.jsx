import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <nav>
            <div className="nav__logo">
                <FontAwesomeIcon icon={faGlobeEurope} size="xl" className='nav__logo-img'/>
                <h1 className="nav__logo-name">my travel journal.</h1>
            </div>
            <div className="nav__actions">
                <button className="nav__actions-btn">
                    <span className='nav__actions-btn-text'>Add</span>
                    <FontAwesomeIcon icon={faPlusCircle} className='nav__actions-btn-img'/>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;