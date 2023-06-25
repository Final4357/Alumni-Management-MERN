import React from 'react'
import Header from '../components/Layout/Header'
import Event from '../components/event/Event'
import Footer from '../components/Layout/Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="hero min-h-[90vh]" style={{ backgroundImage: `url("https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.18169-9/1233437_519372778155565_468901969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d3M3vYTndAsAX9p_vBh&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfA8TulQl_qb1CLyR8ecDvYO2EpJ0s6QZ-e8My7aj9V0pg&oe=6478A44C")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <h1 className="text-3xl lg:text-5xl font-semibold">IIUC Alumni</h1>
            <h1 className="text-5xl lg:text-8xl font-bold lg:font-extrabold">Welcome Home</h1>
            <h1 className="text-2xl lg:text-4xl font-semibold">IIUC Alumni Association helps you keep IIUC close wherever you are.</h1>
          </div>
        </div>
      </div>
      <Event />
      <Footer />
    </div>
  )
}

export default Homepage