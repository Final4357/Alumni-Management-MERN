import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { alumniListRequest } from '../../api_req/alumni'
import Loaderani from '../loader/Loaderani'
import '../../assets/css/style.css'




const Alumni = () => {
    let [loading, setloading] = useState(false);
    let [searchKeyword, setSearchKeyword] = useState("0");
    let [perPage, setPerPage] = useState(4);
    let [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        (async () => {
            setloading(true);
            await alumniListRequest(pageNo, perPage, searchKeyword);
            setloading(false);
        })();
    },[]) 

    let Alumni = useSelector((state) => (state.alumni.Alumni));
    let Total = useSelector((state) => (state.alumni.Total))


    const perPageOnChange = async (e) => {
        setPerPage(parseInt(e.target.value))
        setloading(true);
        await alumniListRequest(1, e.target.value, searchKeyword);
        setloading(false);
    }

    const handlePageClick = async (e) => {
        setPageNo(e.selected)
        setloading(true);
        await alumniListRequest(e.selected + 1, perPage, searchKeyword);
        setloading(false);
    };

    const searchKeywordOnChange = async (e) => {
        setSearchKeyword(e.target.value)
        if ((e.target.value).length === 0) {
            setSearchKeyword("0")
            setloading(true);
            await alumniListRequest(1, perPage, "0");
            setloading(false);
        }
    }

    const onSearchData = async () => {
        setloading(true);
        await alumniListRequest(1, perPage, searchKeyword)
        setloading(false);
    }
    return (
        <Fragment>
            <div className='relative'>
                <img className='h-48 w-full object-cover ' src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.18169-9/1233437_519372778155565_468901969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d3M3vYTndAsAX9p_vBh&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfA8TulQl_qb1CLyR8ecDvYO2EpJ0s6QZ-e8My7aj9V0pg&oe=6478A44C" />
                <div className='top-0 left-0 bg-gray-800 w-full h-48 absolute bg-opacity-30 flex items-center justify-center'>
                    <h1 className="mb-5 text-5xl text-white font-bold">Alumni List</h1>
                </div>
            </div>
            <div class="w-full px-[1rem] md:px-[3rem] lg:px-[5rem]">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Alumni</li>
                    </ul>
                </div>
                <div className='flex flex-col md:flex-row items-start md:items-center md:justify-between gap-3 md:gap-0 py-3'>
                    <div className='flex gap-3 items-center'>
                        <select onChange={perPageOnChange} id="lsit" class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2C1654] dark:focus:border-[#2C1654]">
                            <option selected value="4"> 4 Per Page </option>
                            <option value="8"> 8 Per Page </option>
                            <option value="12"> 12 Per Page </option>
                            <option value="16"> 16 Per Page </option>
                        </select>
                    </div>
                    <div class="flex items-center">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="w-auto lg:w-full border-md">
                            <input type="search" onChange={searchKeywordOnChange} id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block w-[250px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name" required />
                        </div>
                        <button onClick={onSearchData} class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#2C1654] rounded-lg border border-[#2C1654] hover:bg-[#422180] focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-5 h-5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className='hidden md:block'>Search</span>
                        </button>
                    </div>
                </div>
                {
                    loading ?
                        <Loaderani />
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 py-4'>

                            {Alumni.map((item, i) => {
                                return (
                                    <Link to={`/alumnidetails/${item._id}`}>
                                        <div key={i} class="bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <div className='flex justify-center'>
                                                <img class="h-64 w-full object-fill" src={item.photo} alt="" />
                                            </div>
                                            <div className='flex w-full flex-col text-center p-2 gap-1 '>
                                                <h1 className='text-lg font-extrabold'>{item.firstname + ' ' + item.lastname}</h1>
                                                <h3 className='text-md font-semibold'>{item.position}</h3>
                                                <h4 className='text-md font-medium'>{item.company}</h4>
                                                <div className='flex justify-between  text-sm font-semibold px-2 '>
                                                    <span>{'Dept. of ' + item.dept}</span>
                                                    <span>{item.batch + 'th Batch'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )}

                        </div>

                }


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
                            pageCount={Total / perPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </nav>
                </div>

            </div>
            <hr />



        </Fragment>

    )
}

export default Alumni