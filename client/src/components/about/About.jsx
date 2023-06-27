import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Fragment>
            <div className="hero min-h-[65vh] md:min-h-[75vh] lg:min-h-[86vh] bg-cover bg-[url('https://i.ibb.co/mDdWRH4/hero-img-2.jpg')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-xl lg:text-3xl font-medium">About IIUCAA</h1>
                        <h1 className="text-4xl lg:text-7xl font-bold lg:font-extrabold">We’re Here For You</h1>
                        <h1 className="lg:px-32 text-lg lg:text-2xl font-medium">From connecting you with 230,00+ alumni worldwide to bringing you the latest IIUC stories, IIUCAA helps you keep IIUC close wherever you are.</h1>
                    </div>
                </div>
            </div>
            <div className="w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-8 md:py-10 lg:py-16 space-y-10">
                <h1 className="text-2xl lg:text-5xl font-bold lg:font-extrabold">See What’s in Store</h1>
                <p className="text-lg lg:text-2xl font-medium">Our mission is all about reaching, serving and engaging IIUC alumni and students. Founded in 1995 by the University's first graduates, the IIUC Alumni Association produces a wide array of offerings and programming to support you at every stage of your IIUC journey, both as a student and as an alum.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='space-y-6'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Foster Relationships</h2>
                        <p className="text-lg lg:text-xl font-medium">Thousands of alumni events happen near you and online, and we’re here to help you find them.</p>
                        <span className='w-fit flex items-center gap-2 about-card-link'>
                            <Link className="text-lg lg:text-xl font-bold text-[#2C1654]">Explore events</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 font-bold' viewBox="0 0 20 20" fill="#2C1654" aria-hidden="true"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </span>
                    </div>
                    <div className='space-y-6'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Build Communities</h2>
                        <p className="text-lg lg:text-xl font-medium">The IIUC alumni community is always close at hand. Socialize or intellectualize—online or in person—anytime, anywhere.</p>
                        <span className='w-fit flex items-center gap-2 about-card-link'>
                            <Link className="text-lg lg:text-xl font-bold text-[#2C1654]">Find clubs & groups</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 font-bold' viewBox="0 0 20 20" fill="#2C1654" aria-hidden="true"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </span>
                    </div>
                    <div className='space-y-6'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Connect Alumni</h2>
                        <p className="text-lg lg:text-xl font-medium">IIUC alums are ready to support your goals—and we make it easier to tap into your alumni network wherever you are.</p>
                        <span className='w-fit flex items-center gap-2 about-card-link'>
                            <Link className="text-lg lg:text-xl font-bold text-[#2C1654]">View Directory</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 font-bold' viewBox="0 0 20 20" fill="#2C1654" aria-hidden="true"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </span>
                    </div>
                </div>
                <h1 className="text-2xl lg:text-5xl font-bold lg:font-extrabold">What We Value</h1>
                <p className="text-lg lg:text-2xl font-medium">We have a few core values and ideals that guide us in our path of service toward each other and the alumni community.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='space-y-3 p-8 border'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Our People</h2>
                        <p className="text-lg lg:text-xl font-medium">We care for and respect one another professionally and personally, acknowledging that while our work is important, our lives extend well beyond IIUCAA.</p>
                    </div>
                    <div className='space-y-3 p-8 border'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Excellence</h2>
                        <p className="text-lg lg:text-xl font-medium">We strive to be outstanding in all that we do, both as individuals and as an organization, while embracing a growth mindset focused on learning and continuous improvement.</p>
                    </div>
                    <div className='space-y-3 p-8 border'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Diversity, Equity & Inclusion</h2>
                        <p className="text-lg lg:text-xl font-medium">We strive to be a safe, fair, open and wonderfully diverse community in which differences are celebrated and staff members can be authentically themselves, feel that they belong, have a voice and contribute meaningfully.</p>
                    </div>
                {/* </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'> */}
                    <div className='space-y-3 p-8 border'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Integrity</h2>
                        <p className="text-lg lg:text-xl font-medium">We expect honesty, transparency, trust, accountability and respect for others, both personally and professionally, as we endeavor always to comport ourselves in an appropriate and ethical manner.</p>
                    </div>
                    <div className='space-y-3 p-8 border'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Innovation</h2>
                        <p className="text-lg lg:text-xl font-medium">We look for new ideas and better ways to accomplish our mission; accept the occasional failure as a necessary part of improvement; and applaud original thinkers who are courageous, bold and creative in both big and small ways.</p>
                    </div>
                    <div className='space-y-3 p-8 border'>
                        <h2 className="text-xl lg:text-3xl font-bold lg:font-extrabold">Fun</h2>
                        <p className="text-lg lg:text-xl font-medium">We take our work seriously, yet firmly believe in the power of humor and a work environment that is playful, lively and enjoyable.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About