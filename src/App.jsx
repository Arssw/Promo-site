import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Home from './Components/HomePage'
import Footer from './Components/Footer'
import Contacts from './Components/Contacts'
import Portfolio from './Components/Portfolio'
import Achievements from './Components/Achievements'
import About from './Components/AboutMe'

import './App.css'



function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='portfolio' element={<Portfolio></Portfolio>}/>
        <Route path="contacts" element = {<Contacts></Contacts>}/>
        <Route path='achievements' element = {<Achievements></Achievements>}/>
        <Route path='about' element = {<About></About>}/>
      </Routes>
      {/* <About></About> */}
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
