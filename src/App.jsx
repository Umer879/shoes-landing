import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Product from './Component/Pages/Product'
import Contact from './Component/Pages/Contact'
import Component from './Component/Component'
import Navbar from './Component/Navbar/Navbar'
function App() {
return (
  <>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
  </>
)
}

export default App
