import React, { Fragment } from 'react'
import Contact from '../components/contact/Contact'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const ContactPage = () => {
  return (
    <Fragment>
        <Header />
        <Contact />
        <Footer />
    </Fragment>
  )
}

export default ContactPage