
import { Fragment } from "react";
import React, { useState } from 'react';
import store from "../../redux/store/store";
import { clear, setAllClear, setSelectExperience, setSelectType } from "../../redux/state/jobslice";
import { useSelector } from "react-redux";

const Jobsidebar = () => {
    let selectExperience = useSelector((state) => (state.job.selectExperience));
    let selectType = useSelector((state) => (state.job.selectType));
    let Clear = useSelector((state) => (state.job.Clear));

    const handleClear=()=>{
        store.dispatch(clear()) ;
        store.dispatch(setAllClear()) ;
    }
    
    return (
        <Fragment className="relative">
            <div className="sticky top-20 w-[350px] lg:w-[300px] bg-white rounded-lg h-fit">
                <div className="flex gap-x-4 ">
                    <div class=" h-fit w-full  border shadow rounded-lg bg-white dark:bg-gray-800">
                        <div className="flex p-4  mb-4 justify-between w-full bg-gray-200">
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-1"><path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd"></path></svg>
                                <h5 class="inline-flex items-center  text-base font-semibold  uppercase dark:text-gray-400">
                                    Apply filters
                                </h5>
                            </div>
                            <h6 onClick={handleClear} class={`${Clear ? "hidden" : "block"} inline-flex items-center cursor-pointer text-base font-medium text-[#552aa4]  dark:text-gray-400`}>
                               {/* //() => store.dispatch(setAllClear(true)) */}
                                Clear All
                            </h6>
                        </div>
                        <div class="flex flex-col justify-between  flex-1 p-4 ">
                            <div class="space-y-2">
                                <div class="space-y-2">
                                    <h6 class="text-base mb-4 font-bold text-black dark:text-white">
                                        Job Type
                                    </h6>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                            checked={selectType.includes("Fulltime")}
                                            id="gaming"
                                            type="checkbox"
                                            value="Fulltime"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="gaming"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"

                                        >
                                            Full Time
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                            checked={selectType.includes("Parttime")}

                                            id="tv"
                                            type="checkbox"
                                            value="Parttime"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="tv"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Part Time
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                            checked={selectType.includes("Internship")}
                                            id="desktop"
                                            type="checkbox"
                                            value="Internship"

                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="dektop"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Intern
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                            checked={selectType.includes("Contractual")}

                                            id="desktop"
                                            type="checkbox"
                                            value="Contractual"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="dektop"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Contractual
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectType(e.target.value)) }}
                                            checked={selectType.includes("Freelance")}

                                            id="desktop"
                                            type="checkbox"
                                            value="Freelance"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="dektop"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Freelance
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr class="h-px w-full  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div class="flex flex-col justify-between  flex-1 p-4 ">
                            <div class="space-y-2">
                                <div class="space-y-2">
                                    <h6 class="text-base mb-4 font-bold text-black dark:text-white">
                                        Experience Level
                                    </h6>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectExperience(e.target.value)) }}
                                            checked={selectExperience.includes("Entry")}

                                            id="tv"
                                            type="checkbox"
                                            value="Entry"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="tv"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Entry (0-2 Years)
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectExperience(e.target.value)) }}
                                            checked={selectExperience.includes("Intermediate")}
                                            id="desktop"
                                            type="checkbox"
                                            value="Intermediate"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="dektop"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Intermediate (3-5 Years)
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            onChange={(e) => { store.dispatch(setSelectExperience(e.target.value)) }}
                                            checked={selectExperience.includes("Expert")}
                                            id="gaming"
                                            type="checkbox"
                                            value="Expert"
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="gaming"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Expert (5 or Higher)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Jobsidebar;
