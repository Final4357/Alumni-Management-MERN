import React from 'react'
import Login from '../components/login/Login.jsx'
import Header from '../components/Layout/Header.jsx'

const Loginpage = () => {
  return (
    <div >
      <Header activeHeading={1}/>
      <Login />
    </div>
  )
}

export default Loginpage