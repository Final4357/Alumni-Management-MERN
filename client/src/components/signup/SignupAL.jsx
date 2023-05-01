import React, { useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { ErrorToast, IsEmail, IsEmpty, IsPassword, getBase64, } from "../../helper/formHelper";
import { alumniRegister } from "../../api_req/auth.js";

const SignupAL = () => {
    let fnameRef, lnameRef, emailRef, passwordRef, cpasswordRef, sidRef, deptRef, batchRef, positionRef, companyRef, genderRef, degreeRef, userImgRef, userImgView = useRef()
    let navigate = useNavigate();

    const [cpassword, setCPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const previewImage = () => {
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img) => {
            userImgView.src = base64Img;
        })
    }

    const onRegistration = () => {
        let fname = fnameRef.value;
        let lname = lnameRef.value;
        let email = emailRef.value;
        let password = passwordRef.value;
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
        }
        else if (IsPassword(password)) {
            ErrorToast(
                "Password must be six characters, at least one letter and one number !"
            );
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
            if (alumniRegister(fname, lname, email, password, sid, dept, batch, position, company, gender, degree, photo)) {
                navigate("/login");
            } else navigate("/sign-up");
        }
    };





    return (
        // <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        //     <div className="sm:mx-auto sm:w-full sm:max-w-md">
        //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        //             Register as an Allumni
        //         </h2>
        //     </div>
        //     <div className='profile flex justify-center py-4'>
        //           <label htmlFor="profile">
        //             <img src={"data:image/jpeg;base64,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"} 
        //             className="inline-block h-48 w-48 rounded-full overflow-hidden" alt="avatar" />
        //           </label>

        //           {/* <input onChange={onUpload} type="file" id='profile' name='profile' /> */}
        //       </div>
        //     <div className="mt-8  lg:mx-auto lg:w-full lg:max-w-xl">
        //         <div className="bg-white py-0 px-4 shadow lg:rounded-lg lg:px-10">
        //             <form className="space-y-6">
        //                 <div className="flex gap-20 ">
        //                     <div>
        //                         <label
        //                             htmlFor="text"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             First Name
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="text"

        //                                 autoComplete="fist name"
        //                                 required

        //                                 ref={(input) => fnameRef = input}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <label
        //                             htmlFor="text"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Last Name
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="text"
        //                                 autoComplete="last name"
        //                                 required
        //                                 ref={(input) => (lnameRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="flex gap-20">
        //                     <div>
        //                         <label
        //                             htmlFor="email"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Email address
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="email"
        //                                 autoComplete="email"
        //                                 required
        //                                 ref={(input) => (emailRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <label
        //                             htmlFor="text"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Student ID
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="text"
        //                                 autoComplete="name"
        //                                 required
        //                                 ref={(input) => (sidRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex gap-x-32">
        //                     <label className="flex gap-x-2  ">
        //                         <div className="sm:text-sm">Degree</div>
        //                         <select

        //                             required
        //                             ref={(input) => (degreeRef = input)}>
        //                             <option >----</option>
        //                             <option value="Bachelors">Bachelors</option>
        //                             <option value="Masters">Masters</option>

        //                         </select>
        //                     </label>
        //                     <label className="flex gap-2  ">
        //                         <div className="sm:text-sm"> Dept</div>
        //                         <select

        //                             required
        //                             ref={(input) => (deptRef = input)}>
        //                             <option >----</option>
        //                             <option value="CSE">CSE</option>
        //                             <option value="EEE">EEE</option>
        //                             <option value="ETE">ETE</option>

        //                         </select>
        //                     </label>

        //                 </div>
        //                 <div className="flex gap-20 ">
        //                     <div >
        //                         <label
        //                             htmlFor="text"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Position
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="text"

        //                                 autoComplete="Position"
        //                                 required
        //                                 ref={(input) => (positionRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <label
        //                             htmlFor="text"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Company Name
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="text"
        //                                 autoComplete="last name"
        //                                 required
        //                                 ref={(input) => (companyRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex gap-20 ">
        //                     <div>
        //                         <label
        //                             htmlFor="text"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Batch
        //                         </label>
        //                         <div className="mt-1">
        //                             <input
        //                                 type="text"
        //                                 autoComplete="Batch"
        //                                 required
        //                                 ref={(input) => (batchRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                         </div>
        //                     </div>
        //                     <label>
        //                         <div className="sm:text-sm"> Gender</div>
        //                         <select
        //                             ref={(input) => (genderRef = input)}>
        //                             <option>----</option>
        //                             <option value="Male">Male</option>
        //                             <option value="Female">Female</option>
        //                         </select>
        //                     </label>
        //                 </div>

        //                 <div className="flex gap-20">
        //                     <div>
        //                         <label
        //                             htmlFor="password"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Password
        //                         </label>
        //                         <div className="mt-1 relative">
        //                             <input
        //                                 type={visible ? "text" : "password"}
        //                                 autoComplete="current-password"
        //                                 required
        //                                 ref={(input) => (passwordRef = input)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                             {visible ? (
        //                                 <AiOutlineEye
        //                                     className="absolute right-2 top-2 cursor-pointer"
        //                                     size={25}
        //                                     onClick={() => setVisible(false)}
        //                                 />
        //                             ) : (
        //                                 <AiOutlineEyeInvisible
        //                                     className="absolute right-2 top-2 cursor-pointer"
        //                                     size={25}
        //                                     onClick={() => setVisible(true)}
        //                                 />
        //                             )}
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <label
        //                             htmlFor="password"
        //                             className="block text-sm font-medium text-gray-700"
        //                         >
        //                             Confirm Password
        //                         </label>
        //                         <div className="mt-1 relative">
        //                             <input
        //                                 type={visible ? "text" : "password"}
        //                                 autoComplete="current-password"
        //                                 required
        //                                 onChange={(e) => setCPassword(e.target.value)}
        //                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        //                             />
        //                             {visible ? (
        //                                 <AiOutlineEye
        //                                     className="absolute right-2 top-2 cursor-pointer"
        //                                     size={25}
        //                                     onClick={() => setVisible(false)}
        //                                 />
        //                             ) : (
        //                                 <AiOutlineEyeInvisible
        //                                     className="absolute right-2 top-2 cursor-pointer"
        //                                     size={25}
        //                                     onClick={() => setVisible(true)}
        //                                 />
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <label
        //                         htmlFor="avatar"
        //                         className="block text-sm font-medium text-gray-700"
        //                     ></label>
        //                     <div className="mt-2 flex items-center">
        //                         <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
        //                             {/* {avatar ? ( */}
        //                                 <img
        //                                  ref={(input)=>userImgView=input}
        //                                     // src={URL.createObjectURL(avatar)}
        //                                     alt="avatar"
        //                                     className="h-full w-full object-cover rounded-full"
        //                                 />
        //                             {/* ) : (
        //                                 <RxAvatar className="h-8 w-8" />
        //                             )} */}
        //                         </span>
        //                         <label
        //                             htmlFor="file-input"
        //                             className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        //                         >
        //                             <span>Upload a file</span>
        //                             <input
        //                                 type="file"
        //                                 id='file-input'
        //                                 onChange={previewImage}  
        //                                 ref={(input)=>userImgRef=input} 
        //                                 className="sr-only"
        //                             />
        //                         </label>
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <button
        //                         type="submit"
        //                         onClick={onRegistration}
        //                         className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        //                     >
        //                         Submit
        //                     </button>
        //                 </div>
        //                 <div className={`${styles.noramlFlex} w-full`}>
        //                     <h4>Sign up as an User</h4>
        //                     <Link to="/sign-up" className="text-blue-600 pl-2">
        //                         Sign Up
        //                     </Link>
        //                 </div>

        //                 <div className={`${styles.noramlFlex} w-full`}>
        //                     <h4>Already have an account?</h4>
        //                     <Link to="/login" className="text-blue-600 pl-2">
        //                         Sign In
        //                     </Link>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div class="bg-gray-50 dark:bg-gray-900 py-10">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 md:max-w-2xl sm:max-w-md  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>

                        <div class="profile flex justify-center ">
                         <img class="w-48 h-48 rounded-full " src ="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" ref={(input) => userImgView = input} alt="" />
                                                    

                            <div class="w-48 h-48 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">

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
                        <form class="space-y-2 md:space-y-6 " action="#">

                            <div className="flex justify-between gap-4">
                                <div className="w-1/2">
                                    <label for="Fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">First Name</label>
                                    <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (fnameRef = input)}
                                        placeholder="jhon" required="" />
                                </div>
                                <div className="w-1/2">
                                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Last Name</label>
                                    <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (lnameRef = input)}
                                        placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="w-1/2">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" ref={(input) => (emailRef = input)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className="w-1/2">
                                    <label for="sid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student ID</label>
                                    <input type="text" name="sid" id="sid" ref={(input) => (sidRef = input)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="C183057" required />
                                </div>
                            </div>
                            <div>


                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="w-1/2">
                                    <label for="Fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Position</label>
                                    <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (positionRef = input)}
                                        placeholder="Senior-Eng" required="" />
                                </div>
                                <div className="w-1/2">
                                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Company Name</label>
                                    <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (companyRef = input)}
                                        placeholder="Enosis Limited" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="w-1/2">
                                    <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
                                    <select id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        ref={(input) => (degreeRef = input)}
                                        <option disabled selected>Choose a Degree</option>
                                        <option value="Bachelors">Bachelors</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dept</label>
                                    <select id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                        ref={(input) => (degreeRef = input)}
                                        <option disabled selected>Choose a Dept</option>
                                        <option value="CSE">CSE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="ETE">ETE</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="w-1/2">
                                    <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Batch</label>
                                    <input type="text" name="batch" id="batch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (batchRef = input)}
                                        placeholder="jhon" required="" />
                                </div>
                                <div className="w-1/2">
                                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        ref={(input) => (batchRef = input)}
                                        <option disabled selected>Select a Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="w-1/2">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="mt-1 relative">
                                        <input
                                            type={visible ? "text" : "password"}
                                            placeholder="••••••••" name="current-password" id="cpassword"
                                            required
                                            ref={(input) => (passwordRef = input)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        {visible ? (
                                            <AiOutlineEye
                                                className="absolute right-2 top-2 cursor-pointer"
                                                size={25}
                                                onClick={() => setVisible(false)}
                                            />
                                        ) : (
                                            <AiOutlineEyeInvisible
                                                className="absolute right-2 top-2 cursor-pointer"
                                                size={25}
                                                onClick={() => setVisible(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <div className="mt-1 relative">
                                        <input
                                            type={visible ? "text" : "password"}
                                            placeholder="••••••••" name="current-password" id="current-password"
                                            required
                                            ref={(input) => (cpasswordRef = input)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        {visible ? (
                                            <AiOutlineEye
                                                className="absolute right-2 top-2 cursor-pointer"
                                                size={25}
                                                onClick={() => setVisible(false)}
                                            />
                                        ) : (
                                            <AiOutlineEyeInvisible
                                                className="absolute right-2 top-2 cursor-pointer"
                                                size={25}
                                                onClick={() => setVisible(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                onClick={onRegistration}
                                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Sign Up
                            </button>

                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupAL;
