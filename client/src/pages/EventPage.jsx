import React, { Fragment } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Events from '../components/event/Events'

const EventPage = () => {
  return (
    <Fragment>
      <Header />
      <Events />
      <Footer />
    </Fragment>
  )
}

export default EventPage
