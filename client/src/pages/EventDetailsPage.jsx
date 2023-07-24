import React from 'react'
import EventDetails from '../components/event/EventDetails'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { Fragment } from 'react'

const EventDetailsPage = () => {
    return (
        <Fragment>
            <Header />
            <EventDetails />
            <Footer />
        </Fragment>
    )
}

export default EventDetailsPage
