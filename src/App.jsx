import './App.css'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './contexts/theme-context'
import data from "./data.js"
import Modal from './components/Modal'
import EntryUpdateForm from './components/EntryUpdateForm'

function App() {

  const [entries, setEntries] = useState([]);
  const [entryToUpdate, setEntryToUpdate] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let storedEntries = JSON.parse(localStorage.getItem('entries'));
    if (!storedEntries || storedEntries.length === 0) {
      storedEntries = data;
      localStorage.setItem('entries', JSON.stringify(storedEntries));
    }
    setEntries(storedEntries);
  }, []);

  const deleteEntry = (id) => {
      const entryExists = entries.some(entry => entry.id === id);
      if (entryExists) {
          const updatedEntries = entries.filter(entry => entry.id !== id);
          setEntries(updatedEntries);
          localStorage.setItem('entries', JSON.stringify(updatedEntries));
      }
  }

   const addEntry = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  }

  const updateEntry = (id, updatedEntry) => {
    const updatedEntries = entries.map(entry => entry.id === id ? updatedEntry : entry);
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  }

  const handleUpdateEntry = (id) => {
    setIsOpen(true);
    const entry = entries.find(entry => entry.id === id);
    setEntryToUpdate(entry);
  }

  const { isDark } = useContext(ThemeContext)

  return (
    <div className={`theme ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <header>
        <NavBar addEntry={addEntry}/>
      </header>
      <MainContent entries={entries} deleteEntry={deleteEntry} updateEntry={handleUpdateEntry}/>
      <Modal className="add-entry" onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <EntryUpdateForm updateEntry={updateEntry} entry={entryToUpdate}/>
      </Modal>
    </div>
  )
}

export default App
