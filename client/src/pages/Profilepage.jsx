import React from 'react'
import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ProfileContent from '../components/profile/ProfileContent';
import { useState } from 'react';
import styles from '../styles/styles';

const Profilepage = () => {

    const [active, setActive] = useState(1);
    return (
        <Fragment>
            
                
                    <Header/>
                    <div className='py-16 bg-gray-50'>
            <div class="container mx-auto">
                    <div className={` w-full  flex gap-2 bg-[#f5f5f5] `}>
                        <div className="w-[50px] md:w-[335px] sticky md:mt-0 mt-[18%]">
                            <ProfileSidebar active={active} setActive={setActive} />
                        </div>
                        <ProfileContent active={active} />
                    </div>
                    </div>
                    </div>
                    <Footer/>
              
           
        </Fragment>
    )
}

export default Profilepage