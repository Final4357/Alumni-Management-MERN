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
import { ProtectedRoute } from './helper/protectedRoute'
import EventPage from './pages/EventPage'
import AboutPage from './pages/AboutPage'


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/sign-up' element={<Signuppage />} />
          <Route path='/sign-upAL' element={<SignuppageAL />} />
          <Route path='//forgetPassword' element={<Forgotpage />} />
          <Route path='/resetpassword/:resetToken' element={<Resetpage />} />
          <Route path='/alumni' element={<Alumnipage />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/jobs' element={<Jobspage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/alumnidetails/:id' element={<ProtectedRoute Component={Alumnidetailspage} />} />
          <Route path='/profile' element={<ProtectedRoute Component={Profilepage} />} />
          <Route path={'*'} element={<Notfoundpage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </Fragment>
  )
}

export default App