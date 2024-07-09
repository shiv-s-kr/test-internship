import React from 'react'
import ImageGenerator from './Components/ImageGenerator'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'


function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/genImg' element={<ImageGenerator/>}/>
    </Routes>
   </Router>
  )
}

export default App