import React from 'react'
import loader from '../assets/animation/477.gif'
const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
        <img src={loader} className="h-16 w-16" alt="" srcset="" />
      {/* <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div> */}
    </div>
  )
}

export default Loader