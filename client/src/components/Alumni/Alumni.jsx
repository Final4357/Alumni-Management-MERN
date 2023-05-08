import React, { Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'


const Alumni = () => {
    const handlePageClic = () => {

    }
    return (
        <Fragment>
            <div className='relative'>
                <img className='h-48 w-full object-cover ' src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.18169-9/1233437_519372778155565_468901969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d3M3vYTndAsAX9p_vBh&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfA8TulQl_qb1CLyR8ecDvYO2EpJ0s6QZ-e8My7aj9V0pg&oe=6478A44C" />
                <div className='top-0 left-0 bg-gray-800 w-full h-48 absolute bg-opacity-30 flex items-center justify-center'>
                    <h1 className="mb-5 text-5xl text-white font-bold">Alumni List</h1>
                </div>
            </div>
            <div class="container mx-auto">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Alumni</li>
                    </ul>
                </div>
                <div className='flex py-3'>
                    <div className='flex items-center w-2/5'>
                        <label for="list" class=" w-1/5 text-sm font-medium text-gray-900 dark:text-white">Per page</label>
                        <select id="lsit" class=" w-1/5 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2C1654] dark:focus:border-[#2C1654]">
                            <option selected value="8"> 8</option>
                            <option value="12"> 12</option>
                            <option value="16"> 16</option>
                            <option value="20"> 20</option>
                        </select>
                    </div>
                    <div className='flex-2 w-1/5'>
                    </div>
                    <div className=" w-2/5 flex items-center">
                    </div>
                    <div class="flex mx-auto w-2/5 items-center">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full border-md">
                            <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
                        </div>
                        <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#2C1654] rounded-lg border border-[#2C1654] hover:bg-[#422180] focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4  gap-4 py-4'>
                    <Link to='/alumnidetails'>
                    <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg h-64 w-64" src="https://i.ibb.co/hfKQp2w/sd.jpg" alt="" />
                        </div>
                        <div className='flex w-full flex-col text-center p-2 gap-1 '>
                            <h1 className='text-lg font-extrabold'>Mahafuz Chowdury</h1>
                            <h3 className='text-md font-semibold'>Jr. Software Eng.</h3>
                            <h4 className='text-md font-semibold'>kolapata int</h4>
                            <div className='flex justify-between  text-sm font-semibold '>
                                <span>Dept. of CSE</span>
                                <span>2018-2022</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/alumnidetails'>
                    <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg h-64 w-64" src="https://i.ibb.co/hfKQp2w/sd.jpg" alt="" />
                        </div>
                        <div className='flex w-full flex-col text-center p-2 gap-1 '>
                            <h1 className='text-lg font-extrabold'>Mahafuz Chowdury</h1>
                            <h3 className='text-md font-semibold'>Jr. Software Eng.</h3>
                            <h4 className='text-md font-semibold'>kolapata int</h4>
                            <div className='flex justify-between  text-sm font-semibold '>
                                <span>Dept. of CSE</span>
                                <span>2018-2022</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/alumnidetails'>
                    <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg h-64 w-64" src="https://i.ibb.co/hfKQp2w/sd.jpg" alt="" />
                        </div>
                        <div className='flex w-full flex-col text-center p-2 gap-1 '>
                            <h1 className='text-lg font-extrabold'>Mahafuz Chowdury</h1>
                            <h3 className='text-md font-semibold'>Jr. Software Eng.</h3>
                            <h4 className='text-md font-semibold'>kolapata int</h4>
                            <div className='flex justify-between  text-sm font-semibold '>
                                <span>Dept. of CSE</span>
                                <span>2018-2022</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/alumnidetails'>
                    <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg h-64 w-64" src="https://i.ibb.co/hfKQp2w/sd.jpg" alt="" />
                        </div>
                        <div className='flex w-full flex-col text-center p-2 gap-1 '>
                            <h1 className='text-lg font-extrabold'>Mahafuz Chowdury</h1>
                            <h3 className='text-md font-semibold'>Jr. Software Eng.</h3>
                            <h4 className='text-md font-semibold'>kolapata int</h4>
                            <div className='flex justify-between  text-sm font-semibold '>
                                <span>Dept. of CSE</span>
                                <span>2018-2022</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to='/alumnidetails'>
                    <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center'>
                            <img class="rounded-t-lg h-64 w-64" src="https://i.ibb.co/hfKQp2w/sd.jpg" alt="" />
                        </div>
                        <div className='flex w-full flex-col text-center p-2 gap-1 '>
                            <h1 className='text-lg font-extrabold'>Mahafuz Chowdury</h1>
                            <h3 className='text-md font-semibold'>Jr. Software Eng.</h3>
                            <h4 className='text-md font-semibold'>kolapata int</h4>
                            <div className='flex justify-between  text-sm font-semibold '>
                                <span>Dept. of CSE</span>
                                <span>2018-2022</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                   
                </div>
                <div className='flex w-full justify-center my-6'>
                    <nav aria-label="Pagination" className="inline-flex  -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700">1</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">2</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">3</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">...</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">7</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">8</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">9</button>
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </nav>
                </div>

            </div>
            <hr />



        </Fragment>

    )
}

export default Alumni