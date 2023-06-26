import React from 'react'
import { Fragment } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

import Jobinfomodel from '../components/model/Jobinfomodel'
import Jobsidebar from '../components/job/Jobsidebar'
import Jobcard from '../components/job/Jobcard'
import Job from '../components/job/Job'


const Jobspage = () => {
  return (
    <Fragment className='relative'>
      <Header />
      <Job />
      <Footer />
    </Fragment>

  )
}

export default Jobspage