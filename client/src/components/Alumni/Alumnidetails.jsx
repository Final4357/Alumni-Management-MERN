import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { alumniDetailsById } from '../../api_req/alumni';
import { useSelector } from 'react-redux';
import store from '../../redux/store/store';
import { setActive } from '../../redux/state/profileslice';
import { accessChatRequest } from '../../api_req/chatRequset';

const Alumnidetails = () => {

    let AlumniDetails = useSelector((state) => (state.alumni.AlumniDetails));
    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()
    let [loading, setloading] = useState(false);

    const onMessage = async () =>{
        if(await accessChatRequest(params.id)){
            store.dispatch(setActive(4))
            navigate('/profile')
        }
    }

    useEffect(() => {
        (async () => {
            setloading(true);
            await alumniDetailsById(params.id);
            setloading(false);
        })();
    },[location])


    return (
        <div className='bg-gray-50'>
            <div class="container mx-auto  py-16 ">
            
                <div class="md:flex no-wrap md:-mx-2 ">

                    <div class="w-full md:w-3/12 md:mx-2">
                        {/* <!-- Profile Card --> */}
                        <div class="bg-white shadow p-3 border-t-4 border-green-400">
                            <div class="image overflow-hidden">
                                <img class="h-auto w-full mx-auto"
                                    src="https://i.ibb.co/hfKQp2w/sd.jpg"
                                    alt="" />
                            </div>
                            <div className='text-center'>
                            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{AlumniDetails.firstname+' '+AlumniDetails.lastname}</h1>
                            <h3 class="text-gray-600 font-lg text-semibold leading-6">{AlumniDetails.position}</h3>
                            <h3 class="text-gray-600  font-lg text-sm leading-6">{AlumniDetails.company}</h3>
                            </div>
                           
                            {/* <ul
                                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow">
                                <li class="flex items-center py-3">
                                    <span>Connect</span>
                                    <span class="  ml-auto ">
                                        <button type="button" class="gap-2  text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55  mb-2">
                                            <img className='w-5 h-5 ' src="https://i.ibb.co/wpxSqN0/image-removebg-preview.png" />
                                            <span>
                                                Message</span>
                                        </button>
                                    </span>
                                </li>
                                <li class="flex items-center py-3">
                                    <span>Member since</span>
                                    <span class="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul> */}
                        </div>
                        {/* <!-- End of profile card --> */}
                        
                        {/* <!-- End of friends card --> */}
                    </div>
                    {/* <!-- Right Side --> */}
                    <div class="w-full md:w-9/12 mx-2 h-64">
                        <div class="bg-white p-3 shadow rounded-sm">
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span class="text-2xl font-bold">About</span>
                            </div>
                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">First Name</div>
                                        <div class="px-4 py-2">{AlumniDetails.firstname}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Last Name</div>
                                        <div class="px-4 py-2">{AlumniDetails.lastname}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Gender</div>
                                        <div class="px-4 py-2">{AlumniDetails.gender}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Birthday</div>
                                        <div class="px-4 py-2">Feb 06, 1998</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Email.</div>
                                        <div class="px-4 py-2">
                                            <a class="text-blue-800" href="mailto:jane@example.com">{AlumniDetails.email}</a>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                                        <div class="px-4 py-2">+8801646506191</div>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                                Full Information</button>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div class="my-4"></div>

                        {/* <!-- Experience and education --> */}
                        <div class="bg-white p-3 shadow-sm rounded-sm">

                            <div class="grid grid-cols-2">
                                
                                <div>
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path fill="#fff"
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                        </span>
                                        <span class="text-2xl font-bold">Education</span>
                                    </div>
                                    <ul class="list-inside space-y-2">
                                       
                                        <li class='space-y-1'>
                                            <div class="text-teal-600"> {'Bachelors Degree in'+' '+AlumniDetails.dept}</div>
                                            <div class="text-gray-500 text-sm">{AlumniDetails.batch+'th Batch'}</div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <ul
                                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow">
                                <li class="flex items-center py-3">
                                    <span>Connect</span>
                                    <span class="  ml-auto ">
                                        <button type="button" class="gap-2  text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55  mb-2">
                                            <img className='w-5 h-5 ' src="https://i.ibb.co/wpxSqN0/image-removebg-preview.png" />
                                            <span onClick={onMessage}>Message</span>
                                        </button>
                                    </span>
                                </li>
                                <li class="flex items-center py-3">
                                    <span>Member since</span>
                                    <span class="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                            </div>
                            {/* <!-- End of Experience and education grid --> */}
                        </div>
                        {/* <!-- End of profile tab --> */}
                    </div>
                </div>
                        
            </div>
        </div>

    )
}

export default Alumnidetails