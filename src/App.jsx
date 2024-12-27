import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Resume from './pages/Resume'

const App = () => {
  return (
    <div className='min-h-screen  bg-gray-900 px-4 sm:px-[13rem] overflow-hidden text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
