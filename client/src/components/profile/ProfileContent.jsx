import React, { Fragment, useRef, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { setSearchKey } from '../../redux/state/profileslice';
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
<<<<<<< HEAD
import ChatPage from "../../pages/ChatPage";
=======
import store from "../../redux/store/store";
import moment from 'moment';
import Jobupdatemodel from "../model/Jobupdatemodel";
import { setselectedJob } from "../../redux/state/jobslice";
>>>>>>> ffdecb0dc6969c434d41a75882b0a24b051f4aed
// import {
//   deleteUserAddress,
//   loadUser,
//   updatUserAddress,
//   updateUserInformation,
// } from "../../redux/actions/user";
// import { Country, State } from "country-state-city";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { getAllOrdersOfUser } from "../../redux/actions/order";

const ProfileContent = () => {
  let fnameRef, lnameRef, emailRef, passwordRef, phoneRef, cpasswordRef, sidRef, deptRef, batchRef, positionRef, companyRef, genderRef, degreeRef, userImgRef, userImgView = useRef()
  let navigate = useNavigate();
  //   const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (error) {
  //       toast.error(error);
  //       dispatch({ type: "clearErrors" });
  //     }
  //     if (successMessage) {
  //       toast.success(successMessage);
  //       dispatch({ type: "clearMessages" });
  //     }
  //   }, [error, successMessage]);

  let ProfileDetails = useSelector((state) => (state.profile.ProfileDetails));
  const location = useLocation()
  const active = useSelector((state)=>state.profile.active)


  useEffect(() => {
    (async () => {
      await profileDetails();


    })();
  },
    [location])

  const previewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      userImgView.src = base64Img;
    })
  }


  const onUpdate = () => {
    let fname = fnameRef.value;
    let lname = lnameRef.value;
    let email = emailRef.value;
    let phone = phoneRef.value;
    let sid = sidRef.value;
    let dept = deptRef.value;
    let batch = batchRef.value;
    let position = positionRef.value;
    let company = companyRef.value;
    let gender = genderRef.value;
    let degree = degreeRef.value;
    let photo = userImgView.src;


    if (IsEmpty(fname)) {
      ErrorToast("First Name required !");
    } else if (IsEmpty(lname)) {
      ErrorToast("Last Name Required !");
    } else if (IsEmail(email)) {
      ErrorToast("Invalid email address.");
    } else if (IsEmpty(sid)) {
      ErrorToast("Student Id Required !");
    }
    else if (IsEmpty(dept)) {
      ErrorToast("Dept is Required !");
    } else if (IsEmpty(batch)) {
      ErrorToast("Batch is Required !");
    }
    else if (IsEmpty(position)) {
      ErrorToast("Position Name Required !");
    } else if (IsEmpty(company)) {
      ErrorToast("Company is Required !");
    } else if (IsEmpty(gender)) {
      ErrorToast("Gender is Required !");
    } else if (IsEmpty(degree)) {
      ErrorToast("Degree is Required !");
    } else {
      if (updateProfile(fname, lname, email, sid, dept, batch, position, company, gender, degree, photo, phone)) {
        console.log(updateProfile)
        // navigate("/profile");
      } else ErrorToast("Something Went Wrong");
    }
  };



  return (
    <div className="w-full bg-white shadow">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={ProfileDetails.photo}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={previewImage}
                  ref={(input) => userImgRef = input}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full p-5">
            <div aria-required={true}>
              <div className="w-full md:flex block pb-3 gap-4">
                <div className=" w-[100%] md:w-[50%]">
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
                <div className=" w-[100%] md:w-[50%]">
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

              <div className="w-full md:flex block pb-3 gap-4">
                <div className=" w-[100%] md:w-[50%]">
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
                <div className=" w-[100%] md:w-[50%]">
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
                <div className="w-full md:flex block pb-3 gap-4">
                  <div className=" w-[100%] md:w-[50%]">
                    <label className="block pb-2">Position</label>
                    <input defaultValue={ProfileDetails.position} type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (positionRef = input)}
                      placeholder="Senior-Eng" required="" />
                  </div>
                  <div className=" w-[100%] md:w-[50%]">
                    <label className="block pb-2">Company Name</label>
                    <input defaultValue={ProfileDetails.company} type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (companyRef = input)}
                      placeholder="Enosis Limited" required />
                  </div>
                </div>
              }
              {
                getUserDetails().isAlumni &&

                <div className="w-full md:flex block pb-3 gap-4">
                  <div className=" w-[100%] md:w-[50%]">
                    <label className="block pb-2">Degree</label>
                    <select ref={(input) => (degreeRef = input)} id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option >Choose a Degree</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Masters">Masters</option>
                    </select>
                  </div>
                  <div className=" w-[100%] md:w-[50%]">
                    <label className="block pb-2">Dept</label>
                    <select ref={(input) => (deptRef = input)} id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option >Choose a Dept</option> :
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="ETE">ETE</option>
                    </select>
                  </div>
                </div>
              }
              {
                getUserDetails().isAlumni &&
                <div className="flex justify-between gap-4">
                  <div className="w-1/2">
                    <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Batch</label>
                    <input type="text" name="batch" id="batch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      ref={(input) => (batchRef = input)}
                      placeholder="jhon" required="" />
                  </div>
                  <div className="w-1/2">
                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select ref={(input) => (genderRef = input)} id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                      <option disabled selected>Select a Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </select>
                  </div>
                </div>
              }
              {
                getUserDetails().isAlumni &&
                <div className=" w-[100%] md:w-[50%]">
                  <label className="block pb-2">Phone No</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    ref={(input) => (phoneRef = input)}
                    placeholder="+880"
                    required=""
                  />
                </div>
              }
              <button
                className={`w-[250px] h-[40px]  border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-4 cursor-pointer`}
                required
                value="Update"
                type="submit"
                onClick={onUpdate}
              >
                {" "}
                Update
              </button>
            </div>
          </div>
        </>
      )}

      {/* Track order */}
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

  const onCreate = () => {
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
      if (Jobcreaterequest(title, salary, linkto, date, jobtype, location, description, company, experience, category)) {
        console.log(Jobcreaterequest)
      } else navigate("/profile");
    }
  };

  return (
    <Fragment>
      <main class="main bg-white px-2 md:py-6">
        <div class="w-full max-w-xl mx-auto">
          <div action="" method="post">
            <h1 class="text-2xl mb-2">Post new job</h1>

            <div class="job-info space-y-4 mb-4 ">
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

                      ref={(input) => (jobtypeRef = input)}
                    >
                      <option value="Fulltime">Full time</option>
                      <option value="Parttime">Part time</option>
                      <option value="Internship">Internship</option>
                      <option value="Contractual">Contractual</option>
                      <option value="Freelance">Freelance</option>
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
                      <option value="Entry">Entry (0-2 Years)</option>
                      <option value="Intermediate">Intermediate (3-5 Years)</option>
                      <option value="Expert">Expert (5 or Higher)</option>
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
                  id="message"
                  rows="4"
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
                      <option value="Onsite">Onsite</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
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
            <div>
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded"
                type="submit"
                onClick={onCreate}
              >
                Create job
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

const PostedJobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);
  let pageNo = useSelector((state) => (state.profile.pageNo));
  let perPage = useSelector((state) => (state.profile.perPage));
  let searchKey = useSelector((state) => (state.profile.searchKey));
  let Jobs = useSelector((state) => (state.profile.createdJobs));
  let TotalJob = useSelector((state) => (state.profile.TotalcreatedJob));
  const closeModal = () => setShowModal(false);

  const handleCloseButton = (
    <button onClick={closeModal}>

    </button>
  );

  const onUpdate = (id) => {
    console.log(id)
    store.dispatch(setselectedJob(id))
    setShowModal(true);
  };

  const onDelete = async (id) => {
    await deleteJobById(id);
    setUpdate(true);

  };

  const mainModal = (
    <Jobupdatemodel closeModal={closeModal} handleCloseButton={handleCloseButton}>

    </Jobupdatemodel>
  );

  useEffect(() => {
    (async () => {
      await cratedjobListRequest(1, perPage, searchKey);
      setUpdate(false);
    })();
  },
    [showModal, update])






  return (
    <div className="w-full flex flex-col gap-2 p-5">
      <div className='bg-white sticky top-20 lg:ml-2 mb-2 flex flex-col sm:flex-row sm:items-center justify-between'>
        <span className='font-bold text-black text-2xl'>Recent new opportunities</span>
        <div class=" flex items-center ">
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
            {/* onChange={(e) => { store.dispatch(setSearchKey(e.target.value)) }} */}
            <input type="search" id="voice-search" class="pl-10  border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-[#2C1654] focus:border-[#2C1654] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Company, Position" required />
          </div>
        </div>
      </div>
      {Jobs.map((item, i) => {
        return (
          <div key={i} rel="noopener noreferrer" target="_blank" class=" block w-full  mb-6 p-3 lg:p-6 rounded relative   shadow-sm " href="https://www.facebook.com/groups/devforhire/permalink/1711968939250171/">
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-between">
                <h2 class="text-lg lg:text-xl font-bold text-heading">{item.position}</h2>
                <div title="0 people loved this job!" class=" ml-2  p-1 flex items-center justify-center">
                  <div className="w-full flex gap-1">
                    <button onClick={() => onUpdate(item._id)} class="rounded-lg px-2 py-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300"><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> </svg></button>
                    {showModal && mainModal}
                    <button onClick={() => onDelete(item._id)} class="rounded-lg px-2 py-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg></button>
                  </div>
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
                    <div>{item.location} </div></div><div class="h-1 w-1 rounded-full bg-gray-500 mx-4 my-1">
                  </div>
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
            <div class=" absolute  border-gray-400  border-b w-full -bottom-4 left-0">
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
            pageCount={50 / 5}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            // onPageChange={handlePageClick} 
            containerClassName="pagination"
            activeClassName="active"
          />
        </nav>
      </div>

    </div>

  );
};

export default ProfileContent;
