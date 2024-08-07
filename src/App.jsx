import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>

  )
}

export default App
