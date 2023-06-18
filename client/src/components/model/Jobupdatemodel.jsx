import React from 'react'
import { useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { jobDetailsById, updateJobdetails } from '../../api_req/jobrequest';
import moment from 'moment';

const Jobupdatemodel = ({ closeModal }) => {
    let titleRef, salaryRef, linktoRef, jobtypeRef, locaitonRef, experienceRef, descriptionRef, companyRef, dateRef, categoryRef = useRef();
    let navigate = useNavigate();
    let Jobdetails = useSelector((state) => (state.job.JobDetails));
    let selectedJob = useSelector((state) => (state.job.selectedJob));
    
   

    useEffect(() => {
        (async () => {
            await jobDetailsById(selectedJob);
            // console.log(jobDetailsById)
        })();
    },
        [])

        


        

    const onUpdate = () => {
        
        let title = titleRef.value;
        let salary = salaryRef.value;
        let linkto = linktoRef.value;
        let date = dateRef.value
        let jobtype = jobtypeRef.value;
        let location = locaitonRef.value;
        let experience = experienceRef.value;
        let description = descriptionRef.value;
        let company = companyRef.value;
        let category = categoryRef.value;

        if (IsEmpty(title)) {
            ErrorToast("Title Required !");
        } else if (IsEmpty(salary)) {
            ErrorToast("Salary Required !");
        } else if (IsEmpty(linkto)) {
            ErrorToast("Link to Apply Required !");
        } else if (IsEmpty(date)) {
            ErrorToast("Deadline Date Required !");
        } else if (IsEmpty(jobtype)) {
            ErrorToast("Job type is  Required !");
        } else if (IsEmpty(location)) {
            ErrorToast("Location is Required !");
        } else if (IsEmpty(experience)) {
            ErrorToast("Location is Required !");
        } else if (IsEmpty(description)) {
            ErrorToast("Description Required !");
        } else if (IsEmpty(company)) {
            ErrorToast("Company Required !");
        } else if (IsEmpty(category)) {
            ErrorToast("Company website is  Required !");
        } else {
            if (updateJobdetails(Jobdetails._id,title, salary, linkto, date, jobtype, location, description, company, experience, category)) {
                closeModal()
            } else navigate("/profile");
        }
    };

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden no-scrollbar fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto h-auto my-6 mx-auto ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Job Info Update
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={closeModal}                  >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto">
                            <div class="job-info space-y-2 mb-2 ">
                                <div className="flex justify-between gap-4 ">
                                    <div class=" w-full">
                                        <label
                                            class="block text-gray-700 text-sm mb-2"
                                            for="job-title"
                                        >
                                            Title
                                        </label>
                                        <input
                                            ref={(input) => (titleRef = input)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="text"
                                            id="job-title"
                                            name="job-title"
                                            placeholder="Frontend Developer"
                                            autofocus
                                            defaultValue={Jobdetails.position}
                                            
                                        />
                                    </div>

                                    <div class="w-full">
                                        <label
                                            class="block text-gray-700 text-sm mb-2"
                                            for="apply-link"
                                        >
                                            Salary
                                        </label>
                                        <input
                                            ref={(input) => (salaryRef = input)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="texy"
                                            id="apply-link"
                                            name="apply-link"
                                            placeholder=""
                                            defaultValue={Jobdetails.salary}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4 ">
                                    <div class=" w-full">
                                        <label
                                            class="block text-gray-700 text-sm mb-2"
                                            for="apply-link"
                                        >
                                            Link to apply
                                        </label>
                                        <input
                                            ref={(input) => (linktoRef = input)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="text"
                                            id="apply-link"
                                            name="apply-link"
                                            placeholder="https://www.djangoproject.com/apply"
                                            defaultValue={Jobdetails.link}
                                        />
                                    </div>
                                    <div class=" w-full">
                                        <label
                                            class="block text-gray-700 text-sm mb-2"
                                            for="apply-link"
                                        >
                                            Deadline Date
                                        </label>
                                        <input
                                            ref={(input) => (dateRef = input)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="date"
                                            id="apply-link"
                                            name="apply-link"
                                            placeholder="https://www.djangoproject.com/apply"
                                            defaultValue= {moment(Jobdetails.deadlineDate).format("yyyy-MM-D")}
                                            // value={ Date(Jobdetails.deadlineDate)}
                                        />
                                    </div>
                                </div>

                                <div class="md:flex md:justify-between gap-4 ">
                                    <div class="w-full md:w-1/2 mb-4 md:mb-0">
                                        <label
                                            class="block text-gray-700 text-sm mb-2"
                                            for="job-type"
                                        >
                                            Job Type
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:border-gray-500"
                                                id="job-type"
                                                name="job-type"
                                                // defaultValue={Jobdetails.type}
                                                ref={(input) => (jobtypeRef = input)}
                                            >
                                                <option disabled selected> Chose Job Type</option>
                                                <option value="Fulltime" selected={Jobdetails.type==="Fulltime"} >Full time</option>
                                                <option value="Parttime" selected={Jobdetails.type==="Parttime"}>Part time</option>
                                                <option value="Internship" selected={Jobdetails.type==="Internship"}>Internship</option>
                                                <option value="Contractual" selected={Jobdetails.type==="Contractual"}>Contractual</option>
                                                <option value="Freelance" selected={Jobdetails.type==="Freelance"}>Freelance</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/2  md:mb-0">
                                        <label
                                            for="location"
                                            class="block text-gray-700 text-sm mb-2"
                                        >
                                            Experience
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500"
                                                id="job-type"
                                                name="job-type"
                                                ref={(input) => (experienceRef = input)}
                                            >
                                                <option disabled selected> Chose Experience Type</option>
                                                <option value="Entry" selected={Jobdetails.experience==="Entry"}>Entry (0-2 Years)</option>
                                                <option value="Intermediate" selected={Jobdetails.experience==="Intermediate"}>Intermediate (3-5 Years)</option>
                                                <option value="Expert" selected={Jobdetails.experience==="Expert"}>Expert (5 or Higher)</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="message"
                                        class="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        ref={(input) => (descriptionRef = input)}
                                        defaultValue={Jobdetails.details}
                                        id="message"
                                        rows="4"
                                        style={{resize:'none'}}
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write your thoughts here..."
                                    ></textarea>
                                </div>
                                <div class="flex w-full justify-between  gap-4 ">
                                    <div class="w-full md:w-full   md:mb-0 ">
                                        <label for="company" class="block text-gray-700 text-sm mb-2">
                                            Location
                                        </label>
                                        <input
                                            ref={(input) => (locaitonRef = input)}
                                            type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            id="location"
                                            name="location"
                                            placeholder="location"
                                            defaultValue={Jobdetails.location}
                                        />
                                    </div>


                                </div>

                                <div class="flex w-full justify-between  gap-4 ">
                                    <div class="w-full md:w-1/2   md:mb-0 ">
                                        <label for="company" class="block text-gray-700 text-sm mb-2">
                                            Company
                                        </label>
                                        <input
                                            ref={(input) => (companyRef = input)}
                                            type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            id="company"
                                            name="company"
                                            placeholder="Company"
                                            defaultValue={Jobdetails.company}
                                        />
                                    </div>

                                    <div class="w-full md:w-1/2 mb-4 md:mb-0">
                                        <label
                                            class="block text-gray-700 text-sm mb-2"
                                            for="job-type"
                                        >
                                            Category
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:border-gray-500"
                                                id="job-type"
                                                name="job-type"

                                                ref={(input) => (categoryRef = input)}
                                            >
                                                <option disabled selected> Chose Category Type</option>
                                                <option value="Onsite" selected={Jobdetails.category==="Onsite"}>Onsite</option>
                                                <option value="Remote" selected={Jobdetails.category==="Remote"}>Remote</option>
                                                <option value="Hybrid" selected={Jobdetails.category==="Hybrid"}>Hybrid</option>
                                            </select>

                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    class="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onUpdate}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Jobupdatemodel