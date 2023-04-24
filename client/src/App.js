import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loginpage,Signuppage,Homepage } from './Routes'
import SignuppageAL from './pages/SignuppageAL'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage /> }/>
        <Route path='/login' element={<Loginpage /> }/>
        <Route path='/sign-up' element={<Signuppage /> }/>
        <Route path='/sign-upAL' element={<SignuppageAL /> }/>


      </Routes>
    </BrowserRouter>


  )
}

export default App