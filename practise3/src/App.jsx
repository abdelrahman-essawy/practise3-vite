import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className='fixed-top fs-1'>
        <Navbar />
      </section>

      <div className='container'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>

      <section className='fixed-bottom fs-1'>
        <Footer />
      </section>
    </div>
  )
}

export default App
