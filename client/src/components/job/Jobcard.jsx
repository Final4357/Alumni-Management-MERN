import React, { Fragment, useEffect, useState } from 'react'
import moment from 'moment';
import store from '../../redux/store/store';
import { setSort } from '../../redux/state/jobslice';
import { useSelector } from 'react-redux';
import { jobListRequest } from '../../api_req/jobrequest';
import ReactPaginate from 'react-paginate';
import { setPageNo } from '../../redux/state/jobslice';
import Loaderani from '../loader/Loaderani'

const Jobcard = ({ Jobs, TotalJob, perPage }) => {

    let sort = useSelector((state) => (state.job.sort));
    let loading = useSelector((state) => (state.job.loading));

    const handlePageClick = async (e) => {
        store.dispatch(setPageNo(e.selected + 1))
    };

    return (
        <Fragment className="">
            <div className='flex flex-col w-full'>
                <div className='w-full flex gap-2 flex-col'>
                    <div className='lg:ml-2  flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2'>
                        <span className='font-bold text-black text-2xl lg:text-xl xl:text-2xl'>Recent new opportunities</span>
                        <div className=' flex items-center justify-center text-center'>
                            <span className='font-bold text-gray-500 text-base'>Sort by:</span>
                            <select onChange={(e) => { store.dispatch(setSort(e.target.value)) }} id="sort" class=" bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected={sort === ""} value="">Date Posted: New to Old</option>
                                <option selected={sort === "OldToNew"} value="OldToNew">Date Posted: Old to New</option>
                                <option selected={sort === "FtoC"} value="FtoC">Deadline: Farthest to Closest </option>
                                <option selected={sort === "CtoF"} value="CtoF">Deadline: Closest to Farthest</option>
                            </select>
                        </div>
                    </div>
                    {
                        loading ?
                            <Loaderani />
                            :
                            <div className='flex-1 py-2 lg:px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 '>
                                {Jobs.map((item, i) => {
                                    return (
                                        <div key={i} class="w-full bg-white border border-gray-200 rounded-lg shadow transition-shadow delay-100 hover:cursor-pointer hover:drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                                            <div class="flex flex-col p-6 space-y-4">
                                                <h5 class="text-xl font-bold text-gray-900 dark:text-white">{item.position}</h5>
                                                <div className='flex flex-wrap gap-2'>
                                                    <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">{item.category}</span>
                                                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{item.type}</span>
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{item.experience}</span>
                                                </div>
                                                <span class="text-lg font-bold text-black dark:text-white">{item.company}</span>
                                                <div className='flex gap-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-1"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd"></path></svg>
                                                    <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: {item.location}</span>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-1"><path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd"></path></svg>
                                                    <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : {item.salary} BDT</span>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-1"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd"></path></svg>
                                                    <span class="text-sm text-black dark:text-black"> Deadline : {moment(item.deadlineDate).format("D MMM, YYYY")} </span>
                                                </div>
                                                <div class="flex  items-center justify-between space-x-4  ">
                                                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                    }

                </div>
                <div className='flex w-full justify-center py-8 '>
                    <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
                        <ReactPaginate className='pagination gap-2'
                            previousLabel="<"
                            nextLabel=">"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            pageCount={Math.ceil(TotalJob / perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}
export default Jobcard