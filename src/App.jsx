import './App.css'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import { useReducer, useState, useEffect, useContext } from 'react'
import entriesReducer from './reducers/entriesReducer'
import { ThemeContext } from './contexts/theme-context'
import data from "./data.js"
import Modal from './components/Modal'
import EntryUpdateForm from './components/EntryUpdateForm'
import Entry from './components/Entry.jsx'

function App() {

  const initialState = JSON.parse(localStorage.getItem('entries')) || data;
  const [state, dispatch] = useReducer(entriesReducer, initialState);
  const [entryToUpdate, setEntryToUpdate] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    let storedEntries = JSON.parse(localStorage.getItem('entries'));
    if (!storedEntries || storedEntries.length === 0) {
      storedEntries = data;
      localStorage.setItem('entries', JSON.stringify(storedEntries));
    }
    dispatch({ type: 'INIT_ENTRIES', entries: storedEntries });
  }, []);

  const deleteEntry = (id) => {
    dispatch({ type: 'DELETE_ENTRY', id });
  }

  const addEntry = (newEntry) => {
    dispatch({ type: 'ADD_ENTRY', newEntry });
  }

  const updateEntry = (id, updatedEntry) => {
    dispatch({ type: 'UPDATE_ENTRY', id, updatedEntry });
  }

  const handleUpdateEntry = (id) => {
    setIsOpen(true);
    const entry = state.find(entry => entry.id === id);
    setEntryToUpdate(entry);
  }

  const entryArray = state.map((entry) => <Entry key={entry.id} {...entry} onUpdate={handleUpdateEntry} onDelete={deleteEntry}/>);

  return (
    <div className={`theme ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <header>
        <NavBar addEntry={addEntry}/>
      </header>
      <MainContent>{entryArray}</MainContent>
      <Modal className="add-entry" onClose={() => setIsOpen(false)} isOpen={isOpen} isDark={isDark}>
                <EntryUpdateForm updateEntry={updateEntry} entry={entryToUpdate}/>
      </Modal>
    </div>
  )
}

export default App
