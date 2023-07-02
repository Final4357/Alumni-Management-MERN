import React, { Fragment, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ErrorToast, IsEmail, IsEmpty, IsPassword, getBase64 } from "../../helper/formHelper";
import { ResetPasswordRequest } from '../../api_req/auth';

const Reset = () => {
  let passwordRef = useRef()
  let navigate = useNavigate()
  let params = useParams()

  const resetPassword = () => {
    let password = passwordRef.value;

    if (IsPassword(password)) {
      ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else {
      ResetPasswordRequest(password, params.resetToken).then((result) => {
        if (result) navigate('/profile')
      })
    }
  }

  return (
    <Fragment class="bg-slate-100 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center md:px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full py-4 md:p-6 bg-slate-100 rounded-lg md:shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <div class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">

            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
              <input ref={(input) => passwordRef = input} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
              <input ref={(input) => passwordRef = input} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <button onClick={resetPassword} type="submit" class="w-full text-white bg-[#2C1654] hover:bg-[#2C1654]/90 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Reset