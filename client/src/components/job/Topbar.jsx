import React, { Fragment, useState } from 'react'
import store from '../../redux/store/store';
import { setSearchKey, setSelectCategory } from '../../redux/state/jobslice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setShowFilter } from '../../redux/state/settingSlice';

const Topbar = () => {
    let selectCategory = useSelector((state) => (state.job.selectCategory));
    let Clear = useSelector((state) => (state.job.Clear));
    const [show, setShow] = useState('');
    const handleClick = (val) => {
        setShow(val)
        store.dispatch(setSelectCategory(val))
    }

    useEffect(() => {
        if (!selectCategory.length)
            setShow('')
    }, [selectCategory])

    return (
        <Fragment>
            <div className="w-full flex py-4 ">
                <div class="w-full  flex flex-col lg:flex-row items-center justify-between">
                    <ul className="flex items-center mb-5 py-2  lg:mb-0" id="pills-tab" role="tablist">
                        <li className="  text-sm font-medium cursor-pointer rounded  text-primary bg-primary-light">
                            <button className={`py-3 px-5  ${show === '' && 'active'}`} type="button" onClick={() => handleClick('')}>All</button>
                        </li>
                        <li className=" text-sm font-medium cursor-pointer rounded-md  text-primary bg-primary-light">
                            <button className={`py-3 px-5  ${show === 'Onsite' && 'active'}`} type="button" onClick={() => handleClick('Onsite')}>Onsite</button>
                        </li>
                        <li className="  text-sm font-medium cursor-pointer rounded  text-primary bg-primary-light">
                            <button className={`py-3 px-5 ${show === 'Remote' && 'active'}`} type="button" onClick={() => handleClick('Remote')}>Remote</button>
                        </li>
                        <li className=" text-sm font-medium cursor-pointer rounded  text-primary bg-primary-light">
                            <button className={`py-3 px-5  ${show === 'Hybrid' && 'active'}`} type="button" onClick={() => handleClick('Hybrid')}>Hybrid</button>
                        </li>
                    </ul>
                    <div class=" flex items-center gap-2">
                        <div class="w-[264px] sm:w-96 relative ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black"
                                aria-hidden="true"
                                class="h-6 w-6  text-primary absolute left-2 top-0 bottom-0 my-auto"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <input onChange={(e) => { store.dispatch(setSearchKey(e.target.value)) }} type="search" id="search" class="pl-10  border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Company, Position" required />
                        </div>
                        <div onClick={()=> store.dispatch(setShowFilter(true))} className='relative block lg:hidden p-1 border rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-8 w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path></svg>
                            <span className={`${Clear ? "hidden" : "block"} h-3 w-3 rounded-full bg-[#2C1654] absolute -right-1 ring-1 ring-white -top-1`}></span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Topbar