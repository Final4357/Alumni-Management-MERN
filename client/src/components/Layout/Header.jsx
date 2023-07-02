
import { Fragment, React, useEffect, useState } from "react";
import { navItems } from '../../static/data'
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { getToken, getUserDetails } from "../../helper/sessionHelper";
import { setOnlineUsers, setSocketConnected } from "../../redux/state/settingSlice";
import store from '../../redux/store/store'
import { Logout } from "../../api_req/auth";

const ENDPOINT = "http://localhost:8081"
export var socket


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const onLogout = async () => {
        if (await Logout())
            window.location.href = '/'
    }

    useEffect(() => {
        if (getToken()) {
            socket = io(ENDPOINT)
            socket.emit("setup", getUserDetails())
            socket.on("getUsers", (users) => {
                store.dispatch(setOnlineUsers(users))
            })
            socket.on("connected", () => setSocketConnected(true))
        }
    }, [])

    return (
        <Fragment>
            <header className="w-full px-[1rem] md:px-[2rem] lg:px-[5rem] bg-[#2C1654] text-[#f4f4f8]">
                <div className="py-3 flex justify-between items-center ">
                    <div className="flex space-x-3 lg:space-x-4">
                        <a href="#!" role="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"

                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                        <a href="#!" role="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#!" role="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#!" role="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                    </div>
                    <div class="text-sm ">
                        <ul className="flex space-x-4 lg:space-x-10 text-sm font-bold uppercase ">
                            {
                                getToken() ?
                                    <li className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className=" m-1 flex items-center gap-1 text-sm cursor-pointer">
                                            {getUserDetails().firstname}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true" className="rotate-180 transform h-5 w-5 text-primary"><path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path></svg>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content text-black menu p-2 mt-3 shadow bg-base-100 rounded-box w-52">
                                            <li><Link to="/profile">My Account</Link></li>
                                            <li><span onClick={onLogout} className='cursor-pointer'> Log out</span></li>
                                        </ul>
                                    </li>
                                    :
                                    <>
                                        <li className="hover:underline"><Link to="/login">Sign In</Link></li>
                                        <li className="hover:underline"><Link to="/sign-up">Sign Up</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </header>

            <div className="bg-slate-100 w-full px-[1rem] md:px-[2rem] lg:px-[5rem] border-b shadow sticky top-0 z-30">
                <div className='flex justify-between items-center py-2'>
                    <Link to='/'>
                        <img class="w-32 lg:w-40 " src="https://i.ibb.co/XZgzRbL/1-removebg-preview.png" />
                    </Link>
                    <nav className='hidden lg:block'>
                        <ul className='flex items-center gap-6 uppercase font-semibold'>
                            {
                                navItems?.map((item, i)=>
                                    <li><Link className="hover:opacity-80" to={item.url}>{item.title}</Link></li>
                                )
                            }
                        </ul>
                    </nav>
                    <div onClick={() => setShowMenu(!showMenu)} className="lg:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /> </svg>
                    </div>
                    <div className={`${showMenu ? 'top-0' : 'top-[100%]'} w-full h-[450px] overflow-y-auto border-b shadow p-10 rounded-b-3xl bg-white fixed left-0`}>
                        <div onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? 'block' : 'hidden'} fixed right-8 top-8 z-50 cursor-pointer`}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg></div>
                        <ul id="menu" class="w-full text-black text-center space-y-10 font-bold uppercase">
                            {
                                navItems?.map((item, i)=>
                                    <li className='flex justify-center'><Link to={item.url}>{item.title}</Link></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header