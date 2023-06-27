import React from 'react'
import Header from '../components/Layout/Header'
import Event from '../components/event/Event'
import Footer from '../components/Layout/Footer'
import Stories from '../components/stories/Stories'
import Trips from '../components/stories/Trips'
import Hero from '../components/hero/Hero'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stories />
      <Event />
      <Trips />
      <Footer />
    </div>
  )
}

export default Homepage