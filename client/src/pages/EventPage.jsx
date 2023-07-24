import React, { Fragment, useEffect } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Events from '../components/event/Events'
import { useSelector } from 'react-redux'
import { eventListRequest } from '../api_req/event'

const EventPage = () => {
  const pageNo = useSelector((state)=>state.event.pageNo)
  const eventList = useSelector((state)=>state.event.eventList)
  const TotalEvent = useSelector((state)=>state.event.Total)

  useEffect(() => {
    (async () => {
        await eventListRequest(pageNo, 5);
    })();
  },[pageNo]) 
  
  return (
    <Fragment>
      <Header />
      <Events events={eventList} TotalEvent={TotalEvent}/>
      <Footer />
    </Fragment>
  )
}

export default EventPage
