import {useState, useEffect} from "react";
import Entry from "./Entry.jsx";

const Main = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const storedEntries = JSON.parse(localStorage.getItem('entries'));
        if (storedEntries) {
            setEntries(storedEntries);
        }
    }, [])

    const deleteEntry = (id) => {
        const entryExists = entries.some(entry => entry.id === id);
        if (entryExists) {
            const updatedEntries = entries.filter(entry => entry.id !== id);
            setEntries(updatedEntries);
            localStorage.setItem('entries', JSON.stringify(updatedEntries));
        }
    }



    return (
        <main>
            <div className="main-container">
                {entries.map((entry) => <Entry key={entry.id} {...entry} onDelete={deleteEntry}/>)}
            </div>
        </main>
    );
}

export default Main;