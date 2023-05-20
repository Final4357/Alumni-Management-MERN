import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
const Event = () => {
    return (
        <div className='py-16'>
            <div class="container mx-auto">
            <h1 className=' text-7xl font-extrabold mb-4'>Upcoming Events</h1>


            <h4 className='text-2xl '>Peek at some alumni events happening just around the corner.</h4>
            <div class="flex flex-wrap -mx-4">





                <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
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
                <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
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
                           
                            <span class="flex items-center gap-x-2">
                                <div className='w-6 h-6' ><ImLocation className='w-6 h-6 ' /></div><p>  Organizer |  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                            </span>
                            <span class="flex items-center gap-x-2">
                                <div className='w-6 h-6' ><BsFillPersonFill className='w-6 h-6' /></div><p>  Stanford Woods Institute for the Environment and the Stanford Native American Cultural Center</p>
                            </span>
                        </div>
                    </a>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
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
        </div></div>
    )
}

export default Event