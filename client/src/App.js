import React, { Fragment } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignuppageAL from './pages/SignuppageAL'
import Loginpage from'./pages/Loginpage'
import Signuppage from './pages/Signuppage'
import Resetpage from'./pages/Resetpage'
import Homepage from './pages/Homepage'
import { Toaster } from 'react-hot-toast';
import Forgotpage from './pages/Forgotpage'
import Notfoundpage from './pages/Notfoundpage'



const App = () => {
  return (
    
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage /> }/>
        <Route path='/login' element={<Loginpage /> }/>
        <Route path='/sign-up' element={<Signuppage /> }/>
        <Route path='/sign-upAL' element={<SignuppageAL /> }/>
        <Route path='/forgot=password' element={<Forgotpage /> }/>
        <Route path='/reset-password' element={<Resetpage /> }/>
        <Route path='/404' element={<Notfoundpage /> }/>



      </Routes>
    </BrowserRouter>
     <Toaster position="top-right" reverseOrder={false}/>
    </Fragment>


  )
}

export default App