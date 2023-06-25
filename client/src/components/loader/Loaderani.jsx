import React, { Fragment } from 'react' 
import Loader from '../../assets/animation/Dual Ring-1s-200px.svg'
const Loaderani = () => { 
    return ( 
        <Fragment> 
            <div className="flex item-center justify-center w-full h-[60vh] py-4 px-5 xl:px-14 bg-black-rgba scroller overflow-x-hidden overflow-y-auto flex-grow"> 
                <img src={Loader} className='h-24 w-24 my-auto' alt="" srcset="" /> 
            </div> 
        </Fragment> 
    ) 
} 
 
export default Loaderani