import Entry from "./Entry.jsx";
import PropTypes from "prop-types";


const MainContent = ({entries, deleteEntry, updateEntry}) => {
    return (
        <main>
            <div className="main-container">
                {entries.map((entry) => <Entry key={entry.id} {...entry} onUpdate={updateEntry} onDelete={deleteEntry}/>)}
            </div>
        </main>
    );
}

MainContent.propTypes = {
    entries: PropTypes.array.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    updateEntry: PropTypes.func.isRequired
}

export default MainContent;