import React from 'react'

import './App.css'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
<BrowserRouter>
 <Routes>


            {/* Authentication routes (Login/Sinup) */}
            <Route path="/" element={<Login />} />
            <Route path="/singup" element={<Signup />} />

          </Routes>

</BrowserRouter>
  
    </>
  )
}

export default App
