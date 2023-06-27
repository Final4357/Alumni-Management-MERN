import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Trips = () => {
    return (
        <Fragment>
            <div className='py-10 lg:py-16 w-full px-[2rem] md:px-[3rem] lg:px-[5rem] bg-gray-900 text-white'>
                <div className='w-full flex flex-col items-center py-8 space-y-5 mb-4'>
                    <div className='flex flex-col items-center mb-7'>
                        <h4 className='text-lg font-bold'>Travel</h4>
                        <span className='w-14 h-2 bg-orange-600'></span>
                    </div>
                    <h1 className='text-2xl md:text-5xl font-bold text-center md:px-5 lg:px-16'>2024 Is Your Time To Explore</h1>
                    <h4 className='text-lg lg:text-2xl font-medium text-center md:px-5 lg:px-16'>The world is calling. Will you answer? Here’s what’s in store for 2024: Time-tested journeys and brand-new adventures. This is the year to wander and wonder.</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className='relative cursor-pointer trips-card bg-black'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/JyvWYmG/trip-img.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='z-20 absolute left-8 -mt-[57px] md:-mt-[63px] lg:-mt-[60px] p-5 md:p-7 lg:p-4 rounded-[45%] border-[6px] border-gray-800 bg-black/70 text-white flex gap-3 items-center justify-center'>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>MAR</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>25</h2>
                            </span>
                            <span className='text-2xl md:text-4xl font-bold'>-</span>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>MAR</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>30</h2>
                            </span>
                        </div>
                        <div className='px-7 pb-7 pt-20 space-y-3'>
                            <h1 className='text-xl md:text-3xl font-bold'>Yellowstone National Park</h1>
                            <h2 className='text-lg lg:text-xl font-bold'>Exploring a winter wonderland</h2>
                            <h3 className='text-base lg:text-lg font-medium'>During this year’s Commencement ceremony, tennis legend and former IIUC student-athlete John McEnroe shared lessons he learned from his life, career, and time on the farm.</h3>
                        </div>
                    </div>
                    <div className='relative cursor-pointer trips-card bg-black'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/HxgYHw2/trip-japan.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='z-20 absolute left-8 -mt-[57px] md:-mt-[63px] lg:-mt-[60px] p-5 md:p-7 lg:p-4 rounded-[45%] border-[6px] border-gray-800 bg-black/70 text-white flex gap-3 items-center justify-center'>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>JUN</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>25</h2>
                            </span>
                            <span className='text-2xl md:text-4xl font-bold'>-</span>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>JUN</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>30</h2>
                            </span>
                        </div>
                        <div className='px-7 pb-7 pt-20 space-y-3'>
                            <h1 className='text-xl md:text-3xl font-bold'>Japan</h1>
                            <h2 className='text-lg lg:text-xl font-bold'>A springtime sojourn through Japan’s alpine country</h2>
                            <h3 className='text-base lg:text-lg font-medium'>Attend the resplendent Aoi Matsuri Festival in Kyoto, see the best of Tokyo and venture off the beaten path by trolley, gondola and cable car into the Japan Alps.</h3>
                        </div>
                    </div>
                    <div className='relative cursor-pointer trips-card bg-black'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/7kQjn3c/southern-africa-trip.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='z-20 absolute left-8 -mt-[57px] md:-mt-[63px] lg:-mt-[60px] p-5 md:p-7 lg:p-4 rounded-[45%] border-[6px] border-gray-800 bg-black/70 text-white flex gap-3 items-center justify-center'>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>DEC</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>25</h2>
                            </span>
                            <span className='text-2xl md:text-4xl font-bold'>-</span>
                            <span>
                                <h3 className='text-lg lg:text-xl font-medium'>DEC</h3>
                                <h2 className='text-2xl md:text-4xl font-bold'>30</h2>
                            </span>
                        </div>
                        <div className='px-7 pb-7 pt-20 space-y-3'>
                            <h1 className='text-xl md:text-3xl font-bold'>Tanzania</h1>
                            <h2 className='text-lg lg:text-xl font-bold'>Travel with IIUC students</h2>
                            <h3 className='text-base lg:text-lg font-medium'>Take in the sights and sounds of the Serengeti, watch the great wildebeest migration and fall asleep in luxurious lodges after eventful days of wildlife spotting.</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center py-7 lg:py-10'>
                    <Link to='#' className='bg-[#2C1654] px-3 lg:px-5 py-2 lg:py-4 text-lg lg:text-xl font-semibold text-white hover:opacity-80'>Explore more trips</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Trips