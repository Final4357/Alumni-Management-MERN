import React from 'react'
import Header from '../components/Layout/Header'
import Event from '../components/event/Event'
import Footer from '../components/Layout/Footer'
import Hero from '../components/hero/Hero'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { eventListRequest } from '../api_req/event'
import { newsListRequest } from '../api_req/newsRequest'
import News from '../components/news/News'
import Trips from '../components/news/Trips'

const Homepage = () => {
  const eventList = useSelector((state)=>state.event.eventList)
  const newsList = useSelector((state)=>state.news.newsList)
  
  useEffect(() => {
    (async () => {
        await newsListRequest(1, 3);
        await eventListRequest(1, 3);
    })();
},[]) 
  return (
    <div>
      <Header />
      <Hero />
      <News News={newsList}/>
      <Event events={eventList}/>
      {/* <Trips /> */}
      <Footer />
    </div>
  )
}

export default Homepage