import React, { Fragment, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import { DataGrid } from "@material-ui/data-grid";
// import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
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

const ProfileContent = ({ active }) => {
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

  const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

  const handleImage = async (e) => {
    //     const file = e.target.files[0];
    //     setAvatar(file);

    //     const formData = new FormData();

    //     formData.append("image", e.target.files[0]);

    //     await axios
    //       .put(`${server}/user/update-avatar`, formData, {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //         withCredentials: true,
    //       })
    //       .then((response) => {
    //          dispatch(loadUser());
    //          toast.success("avatar updated successfully!");
    //       })
    //       .catch((error) => {
    //         toast.error(error);
    //       });
  };

  return (
    <div className="w-full bg-white shadow">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={``}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
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
                  <label className="block pb-2">Full Name</label>
                  <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="jhon" required="" />
                </div>
                <div className=" w-[100%] md:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input type="email" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="jhon@gmail.com" required="" />
                </div>
              </div>

              <div className="w-full md:flex block pb-3 gap-4">
                <div className=" w-[100%] md:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input type="phone" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="+880" required="" />
                </div>

                <div className=" w-[100%] md:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <input type="password" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    placeholder="*******" required="" />
                </div>
              </div>
              <button
                className={`w-[250px] h-[40px]  border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-4 cursor-pointer`}
                required
                value="Update"
                type="submit"
                onClick={handleSubmit}
              > Update</button>
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

      {/* Change Password */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && (
        <div>
          {/* <Address /> */}
        </div>
      )}
    </div>
  );
};

const PostJobs = () => {


  return (
    <Fragment>
      <main class="main bg-white px-2 md:py-6">
        <div class="w-full max-w-xl mx-auto">
          <form action="" method="post">
            <h1 class="text-2xl mb-2">Post new job</h1>

            <div class="job-info space-y-4 mb-4 ">
              <div className="flex justify-between gap-4 ">

                <div class=" w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="job-title">Title</label>
                  <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="job-title" name="job-title" placeholder="Frontend Developer" autofocus />
                </div>

                <div class="w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="apply-link">Salary</label>
                  <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="apply-link" name="apply-link" placeholder="" />
                </div>
              </div>


              <div class="">
                <label class="block text-gray-700 text-sm mb-2" for="apply-link">Link to apply</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="apply-link" name="apply-link" placeholder="https://www.djangoproject.com/apply" />
              </div>

              <div class="md:flex md:justify-between gap-4 ">

                <div class="w-full md:w-1/2 mb-4 md:mb-0">
                  <label class="block text-gray-700 text-sm mb-2" for="job-type">
                    Job Type
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type">
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Intern</option>
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>


                <div class="w-full md:w-1/2  md:mb-0">
                  <label for="location" class="block text-gray-700 text-sm mb-2">Location</label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type">
                      <option>On Site</option>
                      <option>Remote</option>
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>

                </div>
              </div>


              <div>

                <label for="message" class="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

              </div>

              <div class="flex w-full justify-between  gap-4 ">

                <div class="w-full md:w-1/2   md:mb-0 ">
                  <label for="company" class="block text-gray-700 text-sm mb-2">Company</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="company" name="company" placeholder="Company" />
                </div>


                <div class="w-full md:w-1/2   md:mb-0">
                  <label for="company" class="block text-gray-700 text-sm mb-2">Company Website</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="company" name="company" placeholder="https://www.djangoproject.com/" />
                </div>
              </div>

            </div>
            <div>
              <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded" type="submit">Create job</button>
            </div>
          </form>
        </div>
      </main>
    </Fragment>

  );
};


const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = async (e) => {
    // e.preventDefault();

    // await axios
    //   .put(
    //     `${server}/user/update-user-password`,
    //     { oldPassword, newPassword, confirmPassword },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     toast.success(res.data.success);
    //     setOldPassword("");
    //     setNewPassword("");
    //     setConfirmPassword("");
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message);
    //   });
  };
  return (
    <div className="w-full p-5">
      <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <div
          aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center  "
        >
          <div className=" w-[100%] md:w-[50%] mt-5 ">
            <label className="block pb-2">Enter your old password</label>
            <input type="password" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              placeholder="*******" required="" />
          </div>
          <div className=" w-[100%] md:w-[50%] mt-2">
            <label className="block pb-2">Enter your new password</label>
            <input type="password" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              placeholder="*******" required="" />
          </div>
          <div className=" w-[100%] md:w-[50%] mt-2">
            <label className="block pb-2">Enter your confirm password</label>
            <input type="password" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              placeholder="*******" required="" />
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 px-3 rounded"
              required
              value="Update"
              type="submit"
            >Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfileContent;