import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'

const News = ({ News }) => {
    return (
        <Fragment>
            <div className='py-10 lg:py-16 w-full px-[2rem] md:px-[3rem] lg:px-[5rem]'>
                <div className='w-full py-8 space-y-5 mb-4'>
                    <h1 className='text-4xl md:text-7xl font-bold'>News</h1>
                    <h4 className='text-lg lg:text-2xl font-medium'>Explore news, views and perspectives from IIUC and your alumni community.</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        News?.map((item, i) =>
                            <NewsCard key={i} topic={item.topic} newsFrom={item.newsFrom} smallDesc={item.smallDesc} url={item.newsLink} imgURL={item.photo.url} />
                        )
                    }
                </div>
                <div className='w-full flex justify-center py-7 lg:py-10'>
                    <Link to='/news' className='bg-[#2C1654] px-3 lg:px-5 py-2 lg:py-4 text-lg lg:text-xl font-semibold text-white hover:opacity-80'>Explore more news</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default News