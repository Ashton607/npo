import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import OurWork from './components/ourwork/OurWork'
import Relief from './components/programmes/Relief'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourwork" element={<OurWork />} />
        <Route path="relief" element={<Relief />} />
      </Routes>
    </Router>
  )
}

export default App
