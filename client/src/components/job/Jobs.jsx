import React, { Fragment } from 'react'

const Jobs = () => {
    return (

        <Fragment className="relative">
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 p-4 px-6'>
            <div class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" class="bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              </div>
            </div>
  
  
            <select class="bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled selected>Location</option>
              <option value="US">Dhaka</option>
              <option value="CA">Chittagong</option>
              <option value="FR">Shylet</option>
              <option value="DE">Rajshahi</option>
            </select>
            <select class="bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled selected>Experience</option>
              <option value="US">Dhaka</option>
              <option value="CA">Chittagong</option>
              <option value="FR">Shylet</option>
              <option value="DE">Rajshahi</option>
            </select>
            <select class="bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled selected>Tittle</option>
              <option value="US">Dhaka</option>
              <option value="CA">Chittagong</option>
              <option value="FR">Shylet</option>
              <option value="DE">Rajshahi</option>
            </select>
            <select class="bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled selected>Salary</option>
              <option value="US">Dhaka</option>
              <option value="CA">Chittagong</option>
              <option value="FR">Shylet</option>
              <option value="DE">Rajshahi</option>
            </select>
          </div>
          <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
  
          <div className='flex py-6 gap-x-4 '>
            <div class=" h-fit w-1/4 p-4 border shadow rounded-lg bg-white dark:bg-gray-800" >
              <h5
                class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                Apply filters
              </h5>
              <div class="flex flex-col justify-between flex-1">
                <div class="space-y-6">
                  <div class="space-y-2">
                    <h6 class="text-base font-medium text-black dark:text-white">
                      Employment
                    </h6>
                    <div class="flex items-center">
                      <input id="tv" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="tv" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Full Tiem
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input id="desktop" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="dektop" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Intern
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input id="gaming" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="gaming" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Remote
                      </label>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
  
            <div className='grid grid-cols-3 gap-y-8 gap-x-6 '>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
              <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col p-6 space-y-4">
                  <h5 class="text-3xl font-bold text-gray-900 dark:text-white">UX Designer</h5>
                  <div className='flex-none'>
                    <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Full time</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Intern</span>
                    <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Remote</span>
                  </div>
                  <span class="text-lg font-bold text-black dark:text-white">Visual Designer</span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-400"> Location: Dhaka</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400"> Salary : 40,000-80,000 BDT</span>
                  <div class="flex  items-center justify-between space-x-4  ">
                    <a href="#" class=" w-full items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
  
  
      </Fragment>
        
    )
}

export default Jobs