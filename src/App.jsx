import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Home from './Components/HomePage'
import Footer from './Components/Footer'
import './App.css'



function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
