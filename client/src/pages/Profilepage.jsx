import React from 'react'
import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ProfileContent from '../components/profile/ProfileContent';
import { useState } from 'react';
import styles from '../styles/styles';
import { useSelector } from 'react-redux';

const Profilepage = () => {
    const active = useSelector((state) => state.profile.active)
    return (
        <Fragment className='bg-slate-100 h-screen'>
            <Header />
            <div className={`w-full bg-slate-100 lg:px-[5rem] ${active!==4 ? 'px-[1rem] md:px-[2rem] py-10 lg:py-16' : ''} `}>
                {/* py-11 lg:py-7 */}
                <div className="w-full md:flex md:gap-2">
                    {
                        active!==4 &&
                        <div className="w-full md:w-[335px] fixed md:relative left-0 bottom-0">
                            <ProfileSidebar />
                        </div>
                    }
                    <ProfileContent />
                </div>
            </div>
            {
                active!==4 &&
                <Footer />
            }
        </Fragment>
    )
}

export default Profilepage