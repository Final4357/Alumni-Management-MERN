import React, { Fragment } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { Link } from 'react-router-dom'
const Event = () => {
    return (
        <Fragment>
            <div className='py-16 w-full px-[2rem] md:px-[3rem] lg:px-[5rem] bg-slate-100'>
                <h3 className='text-5xl lg:text-7xl font-bold lg:font-extrabold mb-4'>Upcoming Events</h3>
                <h1 className='text-2xl '>Peek at some alumni events happening just around the corner.</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        [...Array(3)].map((_, i) =>
                            <div key={i} class="w-full py-4 cursor-pointer event-card">
                                <div class="py-4">
                                    <span class="inline-block py-1 leading-none text-black  font-semibold uppercase tracking-wide ">
                                        <div className='text-lg'>Mar</div>
                                        <div className='text-5xl font-extrabold '>18 </div>
                                    </span>
                                    <h1 class="mt-2 mb-2 text-2xl font-bold">Programing Contest</h1>
                                </div>
                                <div class="flex flex-col gap-3">
                                    <div class="flex w-full gap-4">
                                        <div className='w-7 h-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="su-inline-block su-flex-shrink-0 su-mt-2 md:su-mt-3 su-mr-06em su-w-[1em]"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <h3 className='text-lg font-medium'>Monday, June 26, 2023 | 12pm to 1pm</h3>
                                    </div>
                                    <div class="flex w-full gap-4">
                                        <div className='w-7 h-7'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="w-6 h-6 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                                        </div>
                                        <h3 className='text-lg font-medium'>Zoom</h3>
                                    </div>
                                    <div class="flex w-full gap-4">
                                        <div className='w-7 h-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="su-inline-block w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                        <h3 className='text-lg font-medium'> Organizer | IIUC Center for Continuing Medical Education</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='w-full flex justify-center py-4 lg:py-8'>
                    <Link to='/events' className='bg-[#2C1654] px-3 lg:px-5 py-2 lg:py-4 text-lg lg:text-xl font-semibold text-white hover:opacity-80'>View more events</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Event