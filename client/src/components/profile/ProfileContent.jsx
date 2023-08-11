import React, { Fragment, useRef, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { setActive, setSearchKey, setcreatedJobPageNo } from '../../redux/state/profileslice';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast, getBase64 } from "../../helper/formHelper";
import { Jobcreaterequest, cratedjobListRequest, deleteJobById } from "../../api_req/jobrequest";
import { useSelector } from "react-redux";
import { profileDetails, updateProfile } from "../../api_req/auth";
import { useEffect } from "react";
import { getUserDetails } from "../../helper/sessionHelper";
import ReactPaginate from "react-paginate";
import ChatPage from "../../pages/ChatPage";
import store from "../../redux/store/store";
import moment from 'moment';
import Jobupdatemodel from "../model/Jobupdatemodel";
import { setselectedJob, setJobDetails } from "../../redux/state/jobslice";
import Reset from "../reset/Reset";

const ProfileContent = () => {
  let fnameRef, lnameRef, emailRef, phoneRef, addressRef, sidRef, deptRef, batchRef, positionRef, companyRef, genderRef, degreeRef, userImgRef, userImgView = useRef()

  let ProfileDetails = useSelector((state) => (state.profile.ProfileDetails));
  const location = useLocation()
  const active = useSelector((state) => state.profile.active)


  useEffect(() => {
    (async () => {
      await profileDetails();
    })();
  }, [location])

  const previewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      userImgView.src = base64Img;
    })
  }


  const onUpdate = () => {
    if (getUserDetails().isAlumni) {
      if (IsEmpty(fnameRef.value)) {
        ErrorToast("First Name required !");
      } else if (IsEmpty(lnameRef.value)) {
        ErrorToast("Last Name Required !");
      } else if (IsEmail(emailRef.value)) {
        ErrorToast("Invalid email address.");
      } else if (IsEmpty(sidRef.value)) {
        ErrorToast("Student Id Required !");
      }
      else if (IsEmpty(deptRef.value)) {
        ErrorToast("Dept is Required !");
      } else if (IsEmpty(batchRef?.value)) {
        ErrorToast("Batch is Required !");
      }
      else if (IsEmpty(positionRef.value)) {
        ErrorToast("Position Name Required !");
      } else if (IsEmpty(companyRef.value)) {
        ErrorToast("Company is Required !");
      } else if (IsEmpty(genderRef.value)) {
        ErrorToast("Gender is Required !");
      } else if (IsEmpty(degreeRef.value)) {
        ErrorToast("Degree is Required !");
      } else if (IsEmpty(phoneRef.value)) {
        ErrorToast("Contact No is Required !");
      } else if (IsEmpty(addressRef.value)) {
        ErrorToast("Address is Required !");
      } else {
        const formData = new FormData()
        formData.append('firstname', fnameRef.value)
        formData.append('lastname', lnameRef.value)
        formData.append('email', emailRef.value)
        formData.append('studentId', sidRef.value)
        formData.append('dept', deptRef.value)
        formData.append('batch', batchRef.value)
        formData.append('position', positionRef.value)
        formData.append('company', companyRef.value)
        formData.append('gender', genderRef.value)
        formData.append('degree', degreeRef.value)
        formData.append('phone', phoneRef.value)
        formData.append('address', addressRef.value)
        if(userImgRef.files[0]) formData.append('photo', userImgRef.files[0])
        if (updateProfile(formData)) {

        } else ErrorToast("Something Went Wrong");
      }
    } else {
      if (IsEmpty(fnameRef.value)) {
        ErrorToast("First Name required !");
      } else if (IsEmpty(lnameRef.value)) {
        ErrorToast("Last Name Required !");
      } else if (IsEmail(emailRef.value)) {
        ErrorToast("Invalid email address.");
      } else if (IsEmpty(sidRef.value)) {
        ErrorToast("Student Id Required !");
      } else {
        const formData = new FormData()
        formData.append('firstname', fnameRef.value)
        formData.append('lastname', lnameRef.value)
        formData.append('email', emailRef.value)
        formData.append('studentId', sidRef.value)
        if(userImgRef.files[0]) formData.append('photo', userImgRef.files[0])
        if (updateProfile(formData)) {

        } else ErrorToast("Something Went Wrong");
      }
    }
  };

  return (
    <div className="w-full bg-slate-100 md:shadow">
      {/* profile */}
      {active === 1 && (
        <>
          <div class="profile flex justify-center ">
            <img class="w-36 h-36 rounded-full object-fill" src={ProfileDetails.photo?.url} ref={(input) => userImgView = input} alt="" />
            <div class="w-36 h-36 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
              <img class="hidden absolute group-hover:block w-12" for="file-input" src="https://www.svgrepo.com/show/33565/upload.svg" alt="" />
              <input
                type="file"
                id='file-input'
                className='absolute opacity-0'
                onChange={previewImage}
                ref={(input) => userImgRef = input}
              />
            </div>
          </div>
          <div className="w-full py-5 md:p-5 space-y-3">
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div className=" w-[100%]">
                <label className="block pb-2">First Name</label>
                <input
                  defaultValue={ProfileDetails.firstname}
                  type="text"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ref={(input) => (fnameRef = input)}
                  placeholder="jhon"
                  required=""
                />
              </div>
              <div className=" w-[100%]">
                <label className="block pb-2">last name</label>
                <input
                  defaultValue={ProfileDetails.lastname}
                  type="text"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ref={(input) => (lnameRef = input)}
                  placeholder="Doe"
                  required=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div className=" w-[100%]">
                <label className="block pb-2">Email Address</label>
                <input
                  defaultValue={ProfileDetails.email}
                  type="email"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ref={(input) => (emailRef = input)}
                  placeholder="jhon@gmail.com"
                  required=""
                />
              </div>
              <div className=" w-[100%]">
                <label className="block pb-2">Student ID</label>
                <input
                  defaultValue={ProfileDetails.studentId}
                  type="text"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ref={(input) => (sidRef = input)}
                  placeholder="+880"
                  required=""
                />
              </div>
            </div>
            {
              getUserDetails().isAlumni &&
              <>
                <div className="w-full flex flex-col lg:flex-row gap-4">
                  <div className=" w-[100%]">
                    <label className="block pb-2">Position</label>
                    <input defaultValue={ProfileDetails.position} type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (positionRef = input)}
                      placeholder="Senior-Eng" required="" />
                  </div>
                  <div className=" w-[100%]">
                    <label className="block pb-2">Company Name</label>
                    <input defaultValue={ProfileDetails.company} type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (companyRef = input)}
                      placeholder="Enosis Limited" required />
                  </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-4">
                  <div className=" w-[100%]">
                    <label className="block pb-2">Degree</label>
                    <select ref={(input) => (degreeRef = input)} id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option >Choose a Degree</option>
                      <option value="Bachelors" selected={ProfileDetails?.degree === "Bachelors"}>Bachelors</option>
                      <option value="Masters" selected={ProfileDetails?.degree === "Masters"}>Masters</option>
                    </select>
                  </div>
                  <div className=" w-[100%]">
                    <label className="block pb-2">Dept</label>
                    <select ref={(input) => (deptRef = input)} id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option disabled selected>Choose a Dept</option>
                      <option value="CSE" selected={ProfileDetails?.dept === "CSE"}>CSE</option>
                      <option value="EEE" selected={ProfileDetails?.dept === "EEE"}>EEE</option>
                      <option value="ETE" selected={ProfileDetails?.dept === "ETE"}>ETE</option>
                      <option value="CCS" selected={ProfileDetails?.dept === "CCS"}>CCS</option>
                      <option value="EB" selected={ProfileDetails?.dept === "EB"}>EB</option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-4">
                  <div className="w-[100%]">
                    <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Batch</label>
                    <input type="text" name="batch" id="batch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={ProfileDetails.batch}
                      ref={(input) => (batchRef = input)}
                      placeholder="jhon" required="" />
                  </div>
                  <div className="w-[100%]">
                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select ref={(input) => (genderRef = input)} id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                      <option disabled selected>Select a Gender</option>
                      <option value="Male" selected={ProfileDetails?.gender === "Male"}>Male</option>
                      <option value="Female" selected={ProfileDetails?.gender === "Female"}>Female</option>

                    </select>
                  </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-4">
                  <div className=" w-[100%]">
                    <label className="block pb-2">Contact No</label>
                    <input defaultValue={ProfileDetails.phone} type="text" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (phoneRef = input)}
                      placeholder="01181811111" required="" />
                  </div>
                  <div className=" w-[100%]">
                    <label className="block pb-2">Address</label>
                    <input defaultValue={ProfileDetails.address} type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (addressRef = input)}
                      placeholder="IIUC, Kumira, Chattogram" required />
                  </div>
                </div>
              </>
            }
            <button
              className="w-full lg:w-fit bg-[#2C1654] hover:bg-[#2C1654]/90 text-center text-white rounded-[3px] px-16 py-3 cursor-pointer"
              required
              value="Update"
              type="submit"
              onClick={onUpdate}
            >
              Update
            </button>
            {/* </div> */}
          </div>
        </>
      )}

      {active === 3 && (
        <div>
          <Reset />
        </div>
      )}
      {active === 5 && (
        <div>
          <PostJobs />
        </div>
      )}

      {/* Posted Jobs */}
      {active === 6 && (
        <div>
          <PostedJobs />
        </div>
      )}
      {active === 4 && (
        <div>
          <ChatPage />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && <div>{/* <Address /> */}</div>}
    </div>
  );
};

const PostJobs = () => {
  let titleRef, salaryRef, linktoRef, jobtypeRef, locaitonRef, experienceRef, descriptionRef, companyRef, dateRef, categoryRef = useRef();
  let navigate = useNavigate();

  const onCreate = async () => {
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
      ErrorToast("experience is Required !");
    } else if (IsEmpty(description)) {
      ErrorToast("Description Required !");
    } else if (IsEmpty(company)) {
      ErrorToast("Company Required !");
    } else if (IsEmpty(category)) {
      ErrorToast("Category is  Required !");
    } else {
      const result = await Jobcreaterequest(title, salary, linkto, date, jobtype, location, description, company, experience, category)
      if (result) {
        store.dispatch(setActive(6))
      }
    }
  };

  return (
    <Fragment>
      {/* <main class="main bg-slate-100 px-2 md:py-6"> */}
      <div class="w-full space-y-3 md:px-5">
        <h1 class="text-2xl font-bold mb-2">Post new job</h1>

        <div class="job-info space-y-4">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div class=" w-full">
              <label
                class="block text-gray-700 text-base font-medium mb-2"
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
                placeholder="e.g. Frontend Developer"
              />
            </div>

            <div class="w-full">
              <label
                class="block text-gray-700 text-base font-medium mb-2"
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
                placeholder="e.g. 120000 - 90000"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 ">
            <div class="w-full md:w-1/2 mb-4 md:mb-0">
              <label
                class="block text-gray-700 text-base font-medium mb-2"
                for="job-type"
              >
                Job Type
              </label>
              <select
                class="w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:border-gray-500"
                id="job-type"
                name="job-type"

                ref={(input) => (jobtypeRef = input)}
              >
                <option disabled selected value="">Select a Job Type</option>
                <option value="Fulltime">Full time</option>
                <option value="Parttime">Part time</option>
                <option value="Internship">Internship</option>
                <option value="Contractual">Contractual</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <div class="w-full md:w-1/2  md:mb-0">
              <label
                for="location"
                class="block text-gray-700 text-base font-medium mb-2"
              >
                Experience
              </label>
              <select
                class="w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500"
                id="job-type"
                name="job-type"
                ref={(input) => (experienceRef = input)}
              >
                <option disabled selected value="">Select a Experience</option>
                <option value="Entry">Entry (0-2 Years)</option>
                <option value="Intermediate">Intermediate (3-5 Years)</option>
                <option value="Expert">Expert (5 or Higher)</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 ">
            <div class="w-full md:w-1/2   md:mb-0 ">
              <label for="company" class="block text-gray-700 text-base font-medium mb-2">
                Company
              </label>
              <input
                ref={(input) => (companyRef = input)}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="company"
                name="company"
                placeholder="e.g. ABC LTD."
              />
            </div>

            <div class="w-full md:w-1/2 mb-4 md:mb-0">
              <label
                class="block text-gray-700 text-base font-medium mb-2"
                for="job-type"
              >
                Category
              </label>
              <select
                class="w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:border-gray-500"
                id="job-type"
                name="job-type"

                ref={(input) => (categoryRef = input)}
              >
                <option disabled selected value="">Select a Category</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 ">
            <div class=" w-full">
              <label
                class="block text-gray-700 text-base font-medium mb-2"
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
                placeholder="e.g https://www.djangoproject.com/apply"
              />
            </div>
            <div class=" w-full">
              <label
                class="block text-gray-700 text-base font-medium mb-2"
                for="apply-link"
              >
                Deadline Date
              </label>
              <input
                ref={(input) => (dateRef = input)}
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="date"
              />
            </div>
          </div>
          <div class="w-full">
            <label for="company" class="block text-gray-700 text-base font-medium mb-2">
              Location
            </label>
            <input
              ref={(input) => (locaitonRef = input)}
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="location"
              name="location"
              placeholder="e.g. IIUC, Kumira, Chattogram"
            />
          </div>
          <div>
            <label
              for="message"
              class="block  mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              ref={(input) => (descriptionRef = input)}
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g. Write job description..."
            ></textarea>
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full lg:w-fit bg-[#2C1654] hover:bg-[#2C1654]/90 text-center text-white rounded-[3px] px-16 py-3 cursor-pointer"
            onClick={onCreate}
          >
            Create job
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const PostedJobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);
  let createdJobPageNo = useSelector((state) => (state.profile.createdJobPageNo));
  let searchKey = useSelector((state) => (state.profile.searchKey));
  let Jobs = useSelector((state) => (state.profile.createdJobs));
  let TotalJob = useSelector((state) => (state.profile.TotalcreatedJob));
  const closeModal = () => {
    setShowModal(false);
    store.dispatch(setJobDetails(null))
  }

  const handleCloseButton = (
    <button onClick={closeModal}>

    </button>
  );

  const onUpdate = (id) => {
    store.dispatch(setselectedJob(id))
    setShowModal(true);
    setUpdate(true);
  };

  const onDelete = async (id) => {
    await deleteJobById(id);
    setUpdate(true);

  };

  const mainModal = (
    <Jobupdatemodel closeModal={closeModal} handleCloseButton={handleCloseButton} setUpdate={setUpdate}>

    </Jobupdatemodel>
  );

  const handlePageClick = async (e) => {
    store.dispatch(setcreatedJobPageNo(e.selected + 1))
  };

  useEffect(() => {
    (async () => {
      await cratedjobListRequest(createdJobPageNo, 5, searchKey);
      setUpdate(false);
    })();
  }, [showModal, update, createdJobPageNo, searchKey])

  return (
    <Fragment>
      <div className="w-full space-y-2 md:p-5">
        <div className='bg-slate-100 py-2 gap-3 flex flex-col lg:flex-row lg:items-center justify-between'>
          <span className='font-bold text-2xl'>Recent new opportunities</span>
          <div class=" flex items-center ">
            <div class="w-full md:w-96 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black" sss
                aria-hidden="true"
                class="h-6 w-6 text-primary absolute left-2 top-0 bottom-0 my-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <input onChange={(e) => store.dispatch(setSearchKey(e.target.value))} type="search" id="voice-search" class="pl-10 bg-slate-100  border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Company, Position" required />
            </div>
          </div>
        </div>
        {Jobs.map((item, i) => {
          return (
            <div key={i} target="_blank" class="w-full mb-6 p-3 lg:p-6 rounded shadow-sm " href="https://www.facebook.com/groups/devforhire/permalink/1711968939250171/">
              <div class="w-full space-y-2 h-full">
                <div class="w-full flex lg:items-center justify-between">
                  <h2 class="text-lg lg:text-xl font-bold text-heading">{item.position}</h2>
                  <div className="flex gap-1">
                    <button onClick={() => onUpdate(item._id)} class="h-fit rounded-lg px-2 py-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300"><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> </svg></button>
                    {showModal && mainModal}
                    <button onClick={() => onDelete(item._id)} class="h-fit rounded-lg px-2 py-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg></button>
                  </div>
                </div>
                <div class="min-h-[40px] ">
                  <div class="flex items-center flex-wrap">
                    <h2 class=" font-bold text-sm  my-1"> {item.company}</h2>
                    <div class="h-1 w-1 rounded-full bg-gray-500 mx-4 my-1">
                    </div><div class="flex items-center text-sm my-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-2"><path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd">
                      </path>
                      </svg>
                      <div>{item.location} </div>
                    </div>
                    <div class="h-1 w-1 rounded-full bg-gray-500 mx-4 my-1"></div>
                    <div class="text-sm"> {item.category} </div>
                    <div class="h-1 w-1 rounded-full bg-gray-500 mx-4 my-1"></div>
                    <div class="text-sm"> {item.type} </div>
                    <div class="h-1 w-1 rounded-full bg-gray-500 mx-4 my-1"></div>
                    <div class="text-sm">{item.experience}</div>
                  </div>
                  <div class="text-sm my-2">{item.details} <a class=" ml-2 text-primary" href="/0e3e0c83-3fa7-47b3-bc21-04a66379f280">See More</a></div>

                </div>
                <div class="flex flex-wrap items-center font-semibold text-sm mt-3">
                  <div class="flex items-center my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-2"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Deadline:</span><span class="ml-2">{moment(item.deadlineDate).format("D MMM, YYYY")} </span>
                  </div>
                  <div class="h-1 w-1 rounded-full bg-gray-500 mx-4"></div>
                  <div class="flex items-center my-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 mr-2">
                    <path fill-rule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z" clip-rule="evenodd"></path>
                  </svg>
                    <span>Salary:</span>
                    <span class="ml-2"> {item.salary}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })

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
              pageCount={Math.ceil(TotalJob / 5)}
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
  );
};

export default ProfileContent;
