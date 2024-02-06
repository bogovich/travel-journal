import './App.css'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import { useEffect } from 'react'
import data from "./data.js"
function App() {

  useEffect(()=> {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.length === 0 && localStorage.setItem('entries', JSON.stringify(data))

    // localStorage.setItem('entries', JSON.stringify(data))

  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <MainContent />
    </>
  )
}

export default App
