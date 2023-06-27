import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Stories = () => {
    return (
        <Fragment>
            <div className='py-10 lg:py-16 w-full px-[2rem] md:px-[3rem] lg:px-[5rem]'>
                <div className='w-full py-8 space-y-5 mb-4'>
                    <h1 className='text-4xl md:text-7xl font-bold'>Stories</h1>
                    <h4 className='text-lg lg:text-2xl font-medium'>Explore news, views and perspectives from IIUC and your alumni community.</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className='border shadow cursor-pointer storie-card'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/sK3CG9f/story-img.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='p-7 space-y-3'>
                            <h1 className='text-lg md:text-2xl font-bold'>IIUC Class of 2023 Commencement Highlights</h1>
                            <h3 className='text-base lg:text-lg font-medium'>During this year’s Commencement ceremony, tennis legend and former IIUC student-athlete John McEnroe shared lessons he learned from his life, career, and time on the farm.</h3>
                        </div>
                    </div>
                    <div className='border shadow cursor-pointer storie-card'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/sK3CG9f/story-img.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='p-7 space-y-3'>
                            <h1 className='text-lg md:text-2xl font-bold'>The Pulse of LGBTQ Health</h1>
                            <h3 className='text-base lg:text-lg font-medium'>Two School of Medicine researchers know that better care begins with data.</h3>
                        </div>
                    </div>
                    <div className='border shadow cursor-pointer storie-card'>
                        <div className='w-full h-56 overflow-hidden'>
                            <img src="https://i.ibb.co/sK3CG9f/story-img.jpg" className='w-full object-fill h-56' alt="story" srcset="" />
                        </div>
                        <div className='p-7 space-y-3'>
                            <h1 className='text-lg md:text-2xl font-bold'>IIUC Class of 2023 Commencement Highlights</h1>
                            <h3 className='text-base lg:text-lg font-medium'>During this year’s Commencement ceremony, tennis legend and former IIUC student-athlete John McEnroe shared lessons he learned from his life, career, and time on the farm.</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center py-7 lg:py-10'>
                    <Link to='#' className='bg-[#2C1654] px-3 lg:px-5 py-2 lg:py-4 text-lg lg:text-xl font-semibold text-white hover:opacity-80'>Explore more stories</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Stories
