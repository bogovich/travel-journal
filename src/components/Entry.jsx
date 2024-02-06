import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPenToSquare, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const Entry = ({id, onDelete, onUpdate, image, country, title, startDate, endDate, description}) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB', { year:"numeric", month:"short", day:"numeric"});
    }

    const googleMapsUrl = `https://www.google.com/maps/search/${title}-${country}`;
    const duration = `${formatDate(startDate)} - ${formatDate(endDate)}`;

    return (
        <div className="entry">
            <div className="entry__image">
                <img src={image} alt="" className="entry__image-img"/>
            </div>
            <div className="entry__content">
                <div className='entry__content-location'>
                    <FontAwesomeIcon icon={faLocationDot} className="entry__content-location-icon"/>
                    <span className="entry__content-location-text">{country}</span>
                    <a className="entry__content-location-maps" href={googleMapsUrl} target='_blank' rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="entry__content-title">{title}</h2>
                <span className="entry__content-duration">{duration}</span>
                <p className="entry__content-description">{description}</p>        
            </div>
            <div className="entry__actions">
                <button className="entry__actions-btn"><FontAwesomeIcon icon={faPenToSquare} fixedWidth onClick={() => {onUpdate(id)}}/></button>
                <button className="entry__actions-btn"><FontAwesomeIcon icon={faCircleMinus} fixedWidth onClick={() => {onDelete(id)}}/></button>
            </div>
        </div>
    );
}

Entry.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}


export default Entry;