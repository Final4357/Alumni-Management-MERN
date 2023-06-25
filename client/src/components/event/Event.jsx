import React, { Fragment } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { Link } from 'react-router-dom'
const Event = () => {
    return (
        <Fragment>
            <div className='py-16 w-full px-[2rem] md:px-[3rem] lg:px-[5rem]'>
                <h1 className='text-5xl lg:text-7xl font-bold lg:font-extrabold mb-4'>Upcoming Events</h1>
                <h4 className='text-2xl '>Peek at some alumni events happening just around the corner.</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="w-full py-4">
                        <a href="" class="c-card block bg-white   ">

                            <div class="p-4">
                                <span class="inline-block px-2 py-1 leading-none text-black  font-semibold uppercase tracking-wide ">
                                    <div className='text-lg '>Mar</div>
                                    <div className='text-5xl font-extrabold '>18 </div>
                                </span>
                                <h2 class="mt-2 mb-2 text-2xl font-bold">Programing Contest</h2>

                            </div>
                            <div class="p-4 pt-1 flex flex-col gap-y-2 text-lg text-gray-700">
                                <span class="flex items-center gap-x-2 ">
                                    <div className='w-6 h-6'><AiOutlineClockCircle className='w-6 h-6 ' /> </div><p >3 Ta baje</p>
                                </span>
                                {/* <div className="flex items-center  gap-x-2">
                                <div  className='w-6 h-6'><ImLocation  className='w-6 h-6 ' /></div><p >Mollapara noaazir put kottamara jjdsjk
                                   
                                </p>
                            </div> */}
                                <span class="flex items-center gap-x-2">
                                    <div className='w-6 h-6' ><ImLocation className='w-6 h-6 ' /></div><p>  Organizer |  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                                </span>
                                <span class="flex items-center gap-x-2">
                                    <div className='w-6 h-6' ><BsFillPersonFill className='w-6 h-6' /></div><p>  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="w-full p-4">
                        <a href="" class="c-card block bg-white   ">

                            <div class="p-4">
                                <span class="inline-block px-2 py-1 leading-none text-black  font-semibold uppercase tracking-wide ">
                                    <div className='text-lg '>Mar</div>
                                    <div className='text-5xl font-extrabold '>18 </div>
                                </span>
                                <h2 class="mt-2 mb-2 text-2xl font-bold">Programing Contest</h2>

                            </div>
                            <div class="p-4 pt-1 flex flex-col gap-y-2 text-lg text-gray-700">
                                <span class="flex items-center gap-x-2 ">
                                    <div className='w-6 h-6'><AiOutlineClockCircle className='w-6 h-6 ' /> </div><p >3 Ta baje</p>
                                </span>
                                {/* <div className="flex items-center  gap-x-2">
                                <div  className='w-6 h-6'><ImLocation  className='w-6 h-6 ' /></div><p >Mollapara noaazir put kottamara jjdsjk
                                   
                                </p>
                            </div> */}
                                <span class="flex items-center gap-x-2">
                                    <div className='w-6 h-6' ><ImLocation className='w-6 h-6 ' /></div><p>  Organizer |  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                                </span>
                                <span class="flex items-center gap-x-2">
                                    <div className='w-6 h-6' ><BsFillPersonFill className='w-6 h-6' /></div><p>  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="w-full p-4">
                        <a href="" class="c-card block bg-white   ">

                            <div class="p-4">
                                <span class="inline-block px-2 py-1 leading-none text-black  font-semibold uppercase tracking-wide ">
                                    <div className='text-lg '>Mar</div>
                                    <div className='text-5xl font-extrabold '>18 </div>
                                </span>
                                <h2 class="mt-2 mb-2 text-2xl font-bold">Programing Contest</h2>

                            </div>
                            <div class="p-4 pt-1 flex flex-col gap-y-2 text-lg text-gray-700">
                                <span class="flex items-center gap-x-2 ">
                                    <div className='w-6 h-6'><AiOutlineClockCircle className='w-6 h-6 ' /> </div><p >3 Ta baje</p>
                                </span>
                                {/* <div className="flex items-center  gap-x-2">
                                <div  className='w-6 h-6'><ImLocation  className='w-6 h-6 ' /></div><p >Mollapara noaazir put kottamara jjdsjk
                                   
                                </p>
                            </div> */}
                                <span class="flex items-center gap-x-2">
                                    <div className='w-6 h-6' ><ImLocation className='w-6 h-6 ' /></div><p>  Organizer |  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                                </span>
                                <span class="flex items-center gap-x-2">
                                    <div className='w-6 h-6' ><BsFillPersonFill className='w-6 h-6' /></div><p>  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
               <div className='w-full flex justify-center py-4 lg:py-8'>
                    <Link to='/events' className='bg-[#2C1654] px-3 lg:px-5 py-2 lg:py-4 text-lg lg:text-xl font-semibold text-white hover:opacity-80'>View more events</Link>
               </div>
            </div>
        </Fragment>
    )
}

export default Event