import { useState } from 'react'

import './App.css'

import HomePage from './pages/homePage.jsx'
import Editor from './pages/Editor.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/canvas' element={<Editor />} />
        </Routes>
      </Router>
   
    </>
  )
}

export default App
