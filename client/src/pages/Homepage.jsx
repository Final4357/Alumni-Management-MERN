import React from 'react'
import Header from  '../components/Layout/Header'
import Event from '../components/event/Event'
import Footer from '../components/Layout/Footer'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.18169-9/1233437_519372778155565_468901969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d3M3vYTndAsAX9p_vBh&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfA8TulQl_qb1CLyR8ecDvYO2EpJ0s6QZ-e8My7aj9V0pg&oe=6478A44C")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

  <Event/>
  <Footer/>


    </div>
  )
}

export default Homepage