import React, { useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, IsEmail, IsEmpty, IsPassword, getBase64, } from "../../helper/formHelper";
import { alumniRegister } from "../../api_req/auth.js";

const SignupAL = () => {
    let fnameRef, lnameRef, emailRef, passwordRef, cpasswordRef, sidRef, deptRef, batchRef, positionRef, companyRef, genderRef, degreeRef, phoneRef, addressRef, userImgRef, userImgView = useRef()
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
        let phone = phoneRef.value;
        let address = addressRef.value;
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
        } else if (IsEmpty(phone)) {
            ErrorToast("Contact No is Required !");
        }else if (IsEmpty(address)) {
                ErrorToast("Address is Required !");
        } else if (IsEmpty(degree)) {
                ErrorToast("Degree is Required !");
        } else {
            if (alumniRegister(fname, lname, email, password, sid, dept, batch, position, company, gender, degree, phone, address, photo)) {
               
                navigate("/login");
            } else navigate("/sign-up");
        }
    };

    return (
        <div class="bg-slate-100 dark:bg-gray-900 py-10">
            <div class="flex flex-col items-center justify-center lg:px-6 py-8 lg:py-0">
                <Link to="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img id="black" class="w-48" src="https://i.ibb.co/XZgzRbL/1-removebg-preview.png" alt="" />
                </Link>
                <div className="w-full lg:max-w-2xl bg-slate-100 rounded-lg lg:shadow  dark:border dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-3 md:space-y-4">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>

                        <div class="profile flex justify-center ">
                            <img class="w-36 h-36 rounded-full object-fill" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" ref={(input) => userImgView = input} alt="" />
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
                        <div class="space-y-2 md:space-y-3" action="#">
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="Fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">First Name</label>
                                    <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (fnameRef = input)}
                                        placeholder="e.g. Jhon" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Last Name</label>
                                    <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (lnameRef = input)}
                                        placeholder="e.g. Doe" required />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" ref={(input) => (emailRef = input)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="sid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student ID</label>
                                    <input type="text" name="sid" id="sid" ref={(input) => (sidRef = input)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g. C180000" required />
                                </div>
                            </div>
                            <div>


                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="Fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Position</label>
                                    <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        ref={(input) => (positionRef = input)}
                                        placeholder="e.g. Sr. Software Engineer" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Company Name</label>
                                    <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (companyRef = input)}
                                        placeholder="e.g. ABC Limited" required />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
                                    <select ref={(input) => (degreeRef = input)} id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option disabled selected>Choose a Degree</option>
                                        <option value="Bachelors">Bachelors</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dept</label>
                                    <select ref={(input) => (deptRef = input)} id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option disabled selected>Choose a Dept</option>
                                        <option value="CSE">CSE</option>
                                        <option value="EEE">EEE</option>
                                        <option value="ETE">ETE</option>
                                        <option value="ETE">CCS</option>
                                        <option value="EEE">EB</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Batch</label>
                                    <input type="text" name="batch" id="batch" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        ref={(input) => (batchRef = input)}
                                        placeholder="e.g. 47" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <select ref={(input) => (genderRef = input)} id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option disabled selected>Select a Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="Fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Contact No</label>
                                    <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (phoneRef = input)}
                                        placeholder="e.g. 01818181818" required="" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Address</label>
                                    <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                        ref={(input) => (addressRef = input)}
                                        placeholder="e.g. IIUC, Kumira, Chattogram" required />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                <div className="w-full lg:w-1/2">
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
                                <div className="w-full lg:w-1/2">
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

                            <div class="flex items-start py-2">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <Link to='#' class="font-medium text-[#2C1654] hover:underline dark:text-primary-500">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                onClick={onRegistration}
                                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2C1654] hover:bg-[#2C1654]/90"
                            >
                                Sign Up
                            </button>

                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" class="font-medium text-[#2C1654] hover:underline dark:text-[#2C1654]/700">Log In</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupAL;
