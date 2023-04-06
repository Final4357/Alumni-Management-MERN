import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loginpage,Signuppage,Homepage } from './Routes'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage /> }/>
        <Route path='/login' element={<Loginpage /> }/>
        <Route path='/sign-up' element={<Signuppage /> }/>

      </Routes>
    </BrowserRouter>


  )
}

export default App