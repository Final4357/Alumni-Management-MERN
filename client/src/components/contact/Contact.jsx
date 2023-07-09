import React from 'react'
import { Fragment } from 'react'

const Contact = () => {
    return (
        <Fragment>
            <div className="hero min-h-[65vh] md:min-h-[75vh] lg:min-h-[86vh] bg-cover bg-[url('https://i.ibb.co/Bq5KPLw/IIUC-Central-Mosque-front-view.jpg')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-xl lg:text-3xl font-medium">Contact IIUCAA</h1>
                        <h1 className="text-4xl lg:text-7xl font-bold lg:font-extrabold">Say Hello</h1>
                    </div>
                </div>
            </div>
            <div className="w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-8 md:py-10 lg:py-16 space-y-10">
                <h1 className="text-2xl lg:text-7xl font-bold lg:font-extrabold text-center">Reach the Alumni Center</h1>
                <div className='md:mx-12 bg-slate-200 p-4 rounded'>
                    <h3 className='text-lg font-semibold'>Contact Us</h3>
                    <div class="md:flex items-center mt-6">
                        <div class="md:w-1/2 flex flex-col">
                            <label class="text-base font-medium leading-none text-gray-800 dark:text-white">Firstame</label>
                            <input tabindex="0" arial-label="Please input name" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-[#2C1654]/90 focus:border-[#2C1654]/90 mt-4 bg-gray-100 border rounded border-gray-300 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div class="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="text-base font-medium leading-none text-gray-800 dark:text-white">Lastname</label>
                            <input tabindex="0" arial-label="Please input email address" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#2C1654]/90 mt-4 bg-gray-100 border rounded border-gray-300 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="md:w-1/2 flex flex-col">
                            <label class="text-base font-medium leading-none text-gray-800 dark:text-white">Email</label>
                            <input tabindex="0" role="input" arial-label="Please input company name" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#2C1654]/90 mt-4 bg-gray-100 border rounded border-gray-300 placeholder-gray-100" placeholder="Please input company name" />
                        </div>
                        <div class="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="text-base font-medium leading-none text-gray-800 dark:text-white">Class Year and Degree (if applicable)</label>
                            <input tabindex="0" arial-label="Please input country name" type="name" class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#2C1654]/90 mt-4 bg-gray-100 border rounded border-gray-300 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="text-base font-medium leading-none text-gray-800 dark:text-white">Message</label>
                            <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" class="h-28 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-[#2C1654]/90 mt-4 bg-gray-100 border rounded border-gray-300 placeholder-gray-100 resize-none"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#2C1654]/90 rounded hover:bg-[#2C1654]/70 focus:ring-2 focus:ring-offset-2 focus:ring-[#2C1654]/90 focus:outline-none">Send message</button>
                    </div>
                </div>
                <div class="md:mx-12 space-y-5 lg:space-y-0 flex flex-col lg:flex-row justify-between">
                    <div class="w-full lg:w-[47%] flex flex-col items-center justify-center gap-3 px-8 py-5 bg-slate-200">
                        <h3 class="text-3xl font-bold">Phone</h3>
                        <div class=" text-lg font-medium text-center">
                            <p>
                                <a href="tel:+16507232021" class="text-[#2C1654] hover:text-[#2C1654]/80 underline font-semibold">+8801011234560</a>
                                <br/>
                                <a href="tel:+18007862586" class="text-[#2C1654] hover:text-[#2C1654]/80 underline font-semibold">+8801443360911-0</a> (toll-free)
                            </p>
                        </div>
                    </div>
                    <div class="w-full lg:w-[47%] flex flex-col items-center justify-center gap-3 px-8 py-5 bg-slate-200">
                        <h3 class="text-3xl font-bold">Address</h3>
                        <div class="font-medium text-center">
                            <p>
                                <a href="tel:+16507232021" class="text-base text-black font-bold">International Islamic University Chittagong</a>
                                <br/>
                                <a href="tel:+18007862586" class="text-sm text-gray-400 font-medium">Kumira, Chattogram-4318</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.202028225188!2d91.7185034745087!3d22.496602035753018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2777a615585d%3A0xdcf908f6e4f3a713!2sInternational%20Islamic%20University%20Chittagong!5e0!3m2!1sen!2sbd!4v1688915755072!5m2!1sen!2sbd" width="600" height="450" class='w-full border-0 mb-6' allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Fragment>
    )
}

export default Contact