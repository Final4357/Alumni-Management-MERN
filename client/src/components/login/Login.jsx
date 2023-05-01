import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
  
  return (
    
    // <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md ">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-grey-900">
    //     Sign In To Your Account
    //     </h2>
    //   </div>
      
    //   <div className="mt-8 lg:mx-auto lg:w-full lg:max-w-xl">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6">
          
    //         <div>
    //           <label
    //             htmlfor="email"
    //             className="block text-sm form-medium text-gray-700"
    //           >
    //             Email Adress
    //             <div className=" mt-1">
    //               <input
    //                 type="emai"
    //                 name="email"
    //                 id=""
    //                 autoComplete="email"
    //                 required
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </label>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="password"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Password
    //           </label>
    //           <div className="mt-1 relative">
    //             <input
    //               type={visible ? "text" : "password"}
    //               name="password"
    //               autoComplete="current-password"
    //               required
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //             />
    //             {visible ? (
    //               <AiOutlineEye
    //                 className="absolute right-2 top-2 cursor-pointer"
    //                 size={25}
    //                 onClick={() => setVisible(false)}
    //               />
    //             ) : (
    //               <AiOutlineEyeInvisible
    //                 className="absolute right-2 top-2 cursor-pointer"
    //                 size={25}
    //                 onClick={() => setVisible(true)}
    //               />
    //             )}
    //           </div>
    //         </div>
            
    //         <div className={`${styles.noramlFlex} justify-between`}>
    //           <div className={`${styles.noramlFlex}`}>
    //             <input
    //               type="checkbox"
    //               name="remember-me"
    //               id="remember-me"
    //               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    //             />
    //             <label
    //               htmlFor="remember-me"
    //               className="ml-2 block text-sm text-gray-900"
    //             >
    //               Remember me
    //             </label>
    //           </div>
    //           <div className="text-sm">
    //             <a
    //               href=".forgot-password"
    //               className="font-medium text-blue-600 hover:text-blue-500"
    //             >
    //               Forgot your password?
    //             </a>
    //           </div>
    //         </div>
    //         <div>
    //           <button
    //             type="submit"
    //             className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
    //           >
    //             Submit
    //           </button>
    //         </div>
    //         <div className={`${styles.noramlFlex} w-full`}>
    //           <h4>Not have any account?</h4>
    //           <Link to="/sign-up" className="text-blue-600 pl-2">
    //             Sign Up
    //           </Link>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Remember Me </label>
                      </div>
                  </div>
                  {/* <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign in
              </button> */}
              <div className="text-sm">
                 <a
                  href="/forgot=password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
              <button class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Sign In
              </button>
                  
              <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ? <a class="cursor-pointer text-blue-600 hover:text-blue-800" href="/sign-up">Sign up</a>
                            </div>
              </form>
          </div>
      </div>
  </div>
</section>

  );
};

export default Login;
