import React from 'react'
import { Fragment } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Jobs from '../components/job/Jobs'
import Jobinfomodel from '../components/model/Jobinfomodel'


const Jobspage = () => {
  return (
    <Fragment>
      {/* <Jobinfomodel/> */}
        <Header/>
        <Jobs/>
        <Footer/>
    </Fragment>

  )
}

export default Jobspage