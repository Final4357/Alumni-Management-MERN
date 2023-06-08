import React, { Fragment } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignuppageAL from './pages/SignuppageAL'
import Loginpage from './pages/Loginpage'
import Signuppage from './pages/Signuppage'
import Resetpage from './pages/Resetpage'
import Homepage from './pages/Homepage'
import { Toaster } from 'react-hot-toast';
import Forgotpage from './pages/Forgotpage'
import Notfoundpage from './pages/Notfoundpage'
import Alumnipage from './pages/Alumnipage'
import Alumnidetailspage from './pages/Alumnidetailspage'
import Profilepage from './pages/Profilepage'
import Jobspage from './pages/Jobspage'
import { getToken } from './helper/sessionHelper'


const App = () => {
  
   if (getToken()) {
    return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        <Route path={'*'} element={<Notfoundpage />} />
          <Route path='/alumni' element={<Alumnipage />} />
          <Route path='/alumnidetails/:id' element={<Alumnidetailspage />} />
          <Route path='/profile' element={<Profilepage />} />
          <Route path='/jobs' element={<Jobspage />} />



        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </Fragment>
    )

  }
  else {
    return(
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/sign-up' element={<Signuppage />} />
          <Route path='/sign-upAL' element={<SignuppageAL />} />
          <Route path='/forgot-password' element={<Forgotpage />} />
          <Route path='/resetpassword/:resetToken' element={<Resetpage />} />
          <Route path={'*'} element={<Notfoundpage />} />
          <Route path='/alumni' element={<Alumnipage />} />
          <Route path='/jobs' element={<Jobspage />} />
          



        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </Fragment>
    )
  }


  

  
}

export default App