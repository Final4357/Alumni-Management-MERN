import React, { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { eventDetailsById } from '../../api_req/event';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { T24hrTo12hr } from '../../helper/timeConvert';
import { convert } from 'html-to-text'

const EventDetails = () => {
  let params = useParams()
  const eventDetails = useSelector((state) => (state.event.eventDetails))
  console.log(eventDetails)
  useEffect(() => {
    (async () => {
      await eventDetailsById(params.id)
    })();
  }, [])
  return (
    <Fragment>
      {
        eventDetails &&
      <div>
        <div className='w-full bg-[#2C1654] text-white px-[1rem] md:px-[2rem] lg:px-[5rem] py-5'>
          <div className="flex lg:gap-10">
            <div className='lg:w-[30%]'></div>
            <div className='w-full lg:w-[70%] flex flex-col gap-2 py-6'>
              <h4 className='text-lg uppercase'>{eventDetails?.topic}</h4>
              <h1 className='text-4xl font-bold'>{eventDetails?.title}</h1>
              <span className='text-lg'>Sponsored by <Link className='underline hover:no-underline'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Link></span>
            </div>
          </div>
        </div>
        <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-5 bg-slate-100'>
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='w-full lg:w-[30%] bg-slate-100 border lg:shadow-xl lg:mt-[-176px]'>
              <div className='w-full h-64 overflow-hidden'>
                <img src="https://i.ibb.co/YRd71Nd/story-2.jpg" className='w-full object-fill h-64' alt="story" srcset="" />
              </div>
              <div class="flex flex-col gap-8 px-10 py-5">
                <div class="flex w-full gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-bold'>{moment(eventDetails?.date).format("dddd D MMM, YYYY")}</h3>
                     <h3 className='text-lg font-medium'>{T24hrTo12hr(eventDetails.startTime) + " - " + T24hrTo12hr(eventDetails.endTime)}</h3>
                  </div>
                </div>
                <div class="flex w-full gap-4">
                  <div className='w-7 h-7'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="w-7 h-7 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                  </div>
                  <h3 className='text-lg font-medium'>{eventDetails?.venue}</h3>
                </div>
                <div class="flex w-full gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-bold'>This event is open to:</h3>
                    <div className='flex flex-wrap gap-1'>
                      {
                        eventDetails?.openTo?.map((item, i) =>
                          <div key={i} className='p-1 bg-[#2C1654] text-white font-medium'>{item}</div>
                        )
                      }
                    </div>
                  </div>
                </div>
                {
                eventDetails?.link &&
                <div class="flex w-full gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <div className='space-y-1'>
                    <h3 className='text-lg font-bold'>Free</h3>
                    <Link to={eventDetails?.link} target='black' className='text-lg font-medium underline hover:no-underline'>Register</Link>
                  </div>
                </div>
                }
                <div class="flex w-full gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <Link to={eventDetails?.eventWebsite} className='text-lg font-medium underline hover:no-underline'>Visit the event website</Link>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[70%]'>
              <h1 className='text-3xl font-bold'>Event Details:</h1>
              <div>
                {convert(eventDetails?.desc, {wordwrap: 130 })}
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </Fragment>
  )
}

export default EventDetails