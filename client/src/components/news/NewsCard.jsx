import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({topic, newsFrom, smallDesc,url, imgURL}) => {
    return (
        <Fragment>
            <Link to={url} target='blank' className='border shadow cursor-pointer storie-card'>
                <div className='w-full h-56 overflow-hidden'>
                    <img src={imgURL} className='w-full object-fill h-56' alt="story" srcset="" />
                </div>
                <div className='p-7 space-y-3'>
                    <div>
                        <h1 className='text-lg md:text-2xl font-bold'>{topic}</h1>
                        <span className='flex gap-2'><h2 className='text-base lg:text-lg font-thin italic'>form</h2><h3 className='text-base lg:text-lg font-medium'> {newsFrom}</h3></span>
                    </div>
                    <h3 className='text-base lg:text-lg font-medium'>{smallDesc}</h3>
                </div>
            </Link>
        </Fragment>
    )
}

export default NewsCard


