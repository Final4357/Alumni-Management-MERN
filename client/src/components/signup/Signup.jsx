import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, IsEmail, IsEmpty, IsPassword, } from "../../helper/formHelper";
import { studentRegister } from "../../api_req/auth.js";

const Signup = () => {
  let fnameRef, lnameRef, emailRef, passwordRef, sidRef = useRef();
  let navigate = useNavigate();

  const [cpassword, setCPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const onRegistration = () => {
    let fname = fnameRef.value;
    let lname = lnameRef.value;
    let email = emailRef.value;
    let password = passwordRef.value;
    let sid = sidRef.value;

    if (IsEmpty(fname)) {
      ErrorToast("First Name required !");
    } else if (IsEmpty(lname)) {
      ErrorToast("Last Name Required !");
    } else if (IsEmail(email)) {
      ErrorToast("Invalid email address.");
    } else if (IsPassword(password)) {
      ErrorToast(
        "Password must be six characters, at least one letter and one number !"
      );
    } else if (IsEmpty(sid)) {
      ErrorToast("Student Id Required !");
    } else {
      if (studentRegister(fname, lname, email, password, sid)) {
        navigate("/login");
      } else navigate("/sign-up");
    }
  };

  return (
    // <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //       Register as an User
    //     </h2>
    //   </div>
    //   <div className="mt-8  lg:mx-auto lg:w-full lg:max-w-xl">
    //     <div className="bg-white py-8 px-4 shadow lg:rounded-lg lg:px-10">
    //       <form className="space-y-6">
    //         <div className="flex gap-20 ">
    //           <div>
    //             <label
    //               htmlFor="text"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               First Name
    //             </label>
    //             <div className="mt-1">
    //               <input
    //                 type="text"
    //                 autoComplete="fist name"
    //                 required
    //                 ref={(input) => (fnameRef = input)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="text"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Last Name
    //             </label>
    //             <div className="mt-1">
    //               <input
    //                 type="text"
    //                 autoComplete="last name"
    //                 required
    //                 ref={(input) => (lnameRef = input)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex gap-20">
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Email address
    //             </label>
    //             <div className="mt-1">
    //               <input
    //                 type="email"
    //                 autoComplete="email"
    //                 required
    //                 ref={(input) => (emailRef = input)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="text"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Student ID
    //             </label>
    //             <div className="mt-1">
    //               <input
    //                 type="text"
    //                 autoComplete="name"
    //                 required
    //                 ref={(input) => (sidRef = input)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex gap-20">
    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Password
    //             </label>
    //             <div className="mt-1 relative">
    //               <input
    //                 type={visible ? "text" : "password"}
    //                 autoComplete="current-password"
    //                 required
    //                 ref={(input) => (passwordRef = input)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //               {visible ? (
    //                 <AiOutlineEye
    //                   className="absolute right-2 top-2 cursor-pointer"
    //                   size={25}
    //                   onClick={() => setVisible(false)}
    //                 />
    //               ) : (
    //                 <AiOutlineEyeInvisible
    //                   className="absolute right-2 top-2 cursor-pointer"
    //                   size={25}
    //                   onClick={() => setVisible(true)}
    //                 />
    //               )}
    //             </div>
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Confirm Password
    //             </label>
    //             <div className="mt-1 relative">
    //               <input
    //                 type={visible ? "text" : "password"}
    //                 autoComplete="current-password"
    //                 required
    //                 value={cpassword}
    //                 onChange={(e) => setCPassword(e.target.value)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //               {visible ? (
    //                 <AiOutlineEye
    //                   className="absolute right-2 top-2 cursor-pointer"
    //                   size={25}
    //                   onClick={() => setVisible(false)}
    //                 />
    //               ) : (
    //                 <AiOutlineEyeInvisible
    //                   className="absolute right-2 top-2 cursor-pointer"
    //                   size={25}
    //                   onClick={() => setVisible(true)}
    //                 />
    //               )}
    //             </div>
    //           </div>
    //         </div>

    //         <div>
    //           <button
    //             type="submit"
    //             onClick={onRegistration}
    //             className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
    //           >
    //             Submit
    //           </button>
    //         </div>
    //         <div className={`${styles.noramlFlex} w-full`}>
    //           <h4>Sign Up as an allumni</h4>
    //           <Link to="/sign-upAL" className="text-blue-600 pl-2">
    //             Sign Up
    //           </Link>
    //         </div>

    //         <div className={`${styles.noramlFlex} w-full`}>
    //           <h4>Already have an account?</h4>
    //           <Link to="/login" className="text-blue-600 pl-2">
    //             Sign In
    //           </Link>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <section class="bg-gray-50  dark:bg-gray-900 py-10">
      <div class="flex flex-col mt-5 items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
        <a href="#" class="flex items-center my-10 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite
        </a>
        <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 md:max-w-xl sm:max-w-md  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <div class="space-y-2 md:space-y-6 " action="#">
              
              <div className="flex justify-between gap-4 ">
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
              </div >
              <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div className="w-1/2">
                <label for="sid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student ID</label>
                <input type="text" name="sid" id="sid" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="C183057" required />
              </div>
              </div>
              <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div className="w-1/2">
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
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
              {/* <button class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Sign Up
              </button> */}
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
              {/* <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>
          <Link
                class="w-full  max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5" to="/sign-upAL"
              >
                
                <div class="ml-4">
                  Sign Up As An allumni
                </div>
              </Link> */}
              <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>
           
          
         <Link
                class="mb-3 w-full   font-bold  rounded-lg py-3 bg-white hover:bg-gray-100 border-2 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none focus:shadow-sm focus:shadow-outline mt-5" to="/sign-upAL"
              >
                
                <div class="ml-4">
                  Sign Up As An allumni
                </div>
              </Link> 
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
