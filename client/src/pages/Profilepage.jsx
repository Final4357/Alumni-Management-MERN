import React from 'react'
import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ProfileContent from '../components/profile/ProfileContent';
import { useState } from 'react';
import styles from '../styles/styles';

const Profilepage = () => {
    return (
        <Fragment>
            <Header />
            <div className="w-full px-[1rem] md:px-[2rem] lg:px-[5rem] bg-slate-100 py-10 lg:py-16">
                <div className="w-full md:flex md:gap-2">
                    <div className="w-full md:w-[335px] fixed md:relative left-0 bottom-0">
                        <ProfileSidebar />
                    </div>
                    <ProfileContent />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Profilepage