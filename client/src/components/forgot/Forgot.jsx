import React, { Fragment,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ForgetPasswordRequest } from '../../api_req/auth'

import { ErrorToast, IsEmail, IsEmpty, IsPassword, getBase64} from "../../helper/formHelper";

const Forgot = () => {

    let emailRef = useRef()
    let navigate = useNavigate()
  
    const forgetPassword = () =>{
      let email = emailRef.value;
  
      if(IsEmail(email)){
          ErrorToast("Invalid email address.")
      }
      else{
        ForgetPasswordRequest(email).then((result)=>{
          if(result) navigate('/Login')
        })
      }
    }
  return (
    <Fragment class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Forgot Password 
              </h1>
              <p class="mb-4 text-sm text-gray-700"> 
                                We get it, stuff happens. Just enter your email address below and we'll send you a 
                                mail to reset your password. 
                            </p>
              <div class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input ref={(input)=>emailRef=input} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  
                  <button type="submit" onClick={forgetPassword} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send an Email</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500 ">Return to login</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</Fragment>
  )
}

export default Forgot