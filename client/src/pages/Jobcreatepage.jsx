import React from 'react'
import { Fragment } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Jobcreate from '../components/job/Jobcreate'

const Jobcreatepage = () => {
  return (
    <Fragment>
        <Header/>
        <Jobcreate/>
        <Footer/>
    </Fragment>
  )
}

export default Jobcreatepage