import { useState } from "react";
import PropTypes from 'prop-types';

const EntryAddForm = ({ addEntry }) => {
    const [formData, setFormData] = useState({
        country: '',
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        image: ''
    });

    const uniqueId = () => {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        return dateString + randomness;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const entry = {
            id: uniqueId(),
            ...formData
        }
        addEntry(entry);
        setFormData({
            country: '',
            title: '',
            startDate: '',
            endDate: '',
            description: '',
            image: ''
        });
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
                        <h2 className="add-entry__title">Add Entry</h2>
                <form className="add-entry__form" onSubmit={handleSubmit}>
                    <div className="add-entry__form-group">
                        <label htmlFor="country" className="add-entry__form-label">Country</label>
                        <input onChange={handleChange} value={formData.country} type="text" id="country" name="country" className="add-entry__form-input" required/>
                    </div>
                    <div className="add-entry__form-group">
                        <label htmlFor="title" className="add-entry__form-label">Title</label>
                        <input onChange={handleChange} value={formData.title} type="text" id="title" name="title" className="add-entry__form-input" required/>
                    </div>
                    <div className="add-entry__form-group">
                        <label htmlFor="startDate" className="add-entry__form-label">Start Date</label>
                        <input onChange={handleChange} value={formData.startDate} type="date" id="startDate" name="startDate" className="add-entry__form-input" required/>
                    </div>
                    <div className="add-entry__form-group">
                        <label htmlFor="endDate" className="add-entry__form-label">End Date</label>
                        <input onChange={handleChange} value={formData.endDate} type="date" id="endDate" name="endDate" className="add-entry__form-input" required/>
                    </div>
                    <div className="add-entry__form-group">
                        <label htmlFor="description" className="add-entry__form-label">Description</label>
                        <textarea onChange={handleChange} value={formData.description} id="description" name="description" className="add-entry__form-input" required></textarea>
                    </div>
                    <div className="add-entry__form-group">
                        <label htmlFor="image" className="add-entry__form-label">Image</label>
                        <input onChange={handleChange} value={formData.image} type="url" id="image" name="image" className="add-entry__form-input" required/>
                    </div>
                    <div className="add-entry__form-group">
                        <button className="add-entry__form-btn">Add</button>
                    </div>
                </form>
        </>
    )
}

EntryAddForm.propTypes = {
    addEntry: PropTypes.func.isRequired
}

export default EntryAddForm;