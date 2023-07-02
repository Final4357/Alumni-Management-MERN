import React, { Fragment, useEffect } from 'react'
import { myChatRequest } from '../../api_req/chatRequset';
import { useSelector } from 'react-redux';
import { getOnline, getSender } from '../../helper/logic';
import { getUserDetails } from '../../helper/sessionHelper';
import { setSelectChat } from '../../redux/state/chatSlice';
import store from '../../redux/store/store';
import moment from 'moment';
import { setActive } from '../../redux/state/profileslice';

const ChatBox = () => {
    const myChats = useSelector((state)=>state.chat.myChats)
    const allMessages = useSelector((state) => state.chat.allMessages)
    const selectedChat = useSelector((state) => state.chat.selectChat)
    const onlineUsers = useSelector((state) => state.setting.onlineUsers)

    useEffect(()=>{
        (async () => {
            await myChatRequest()
        })();
    }, [allMessages])

    const accessChatMsg = (chat) => {
        store.dispatch(setSelectChat(chat))
        // store.dispatch(removeNotification(chat))
    }

    return (
        <Fragment>
            <div className="flex flex-col lg:border-r border-neutral-700 w-full h-[89.5vh] bg-slate-100">
                <div className="flex justify-between items-center w-full h-[60px] px-4 py-2 border-b">
                    <div onClick={()=>store.dispatch(setActive(1))} className="flex items-center gap-x-2 text-[#2C1654] cursor-pointer me-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path></svg>
                        <p>Go back</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center w-full h-[60px] p-2 border-b ">
                    <div className="flex-grow flex items-center space-x-2 bg-gray-200 py-1 px-4 rounded-md">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="cursor-pointer">
                            <path fill="#1f2937"
                                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z">
                            </path>
                        </svg>
                        <input /*onKeyUp={TextSearch}*/ type="search" className="focus:outline-none bg-gray-200 w-full text-gray-700  text-xs"
                            placeholder="Search chat" />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-auto w-full h-full">
                    {
                        myChats?.map((items, i) => {
                            return (
                                <button key={i} onClick={accessChatMsg.bind(this, items)} className={`flex items-center w-full px-4 py-2 border-b transition-colors duration-200 gap-x-3 hover:bg-gray-200 focus:outline-none
                                 ${selectedChat?._id === items._id ? "bg-gray-200" : "bg-slate-100 hover:bg-gray-200"}`}
                                >
                                    <div className="relative w-14">
                                        <img className={`object-fill w-12 h-12 rounded-full bg-gray-200`}
                                            src={getSender(items.users, getUserDetails()).photo }
                                                alt="Chat pic" />
                                        {
                                            getOnline(items, onlineUsers, getUserDetails()) &&
                                            <span className="h-3 w-3 rounded-full bg-emerald-500 absolute right-0.5 ring-2 ring-white -bottom-0.5"></span>
                                        } 
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <div className="text-left rtl:text-right space-y-1 ">
                                            <h1 id='ChatName' className="text-sm font-bold text-gray-700 capitalize">
                                                {
                                                    getSender(items.users, getUserDetails()).firstname + ' ' + getSender(items.users, getUserDetails()).lastname
                                                }
                                            </h1>
                                            <div className=
                                            // {`${notifications.find((n) => n.chat._id === items._id) ? 'text-[#00a884]' : 'text-gray-600'} 
                                            "flex gap-2 items-center w-full">
                                                {/* {
                                                    items.latestMessage && (items.isGroupChat || items.latestMessage?.sender?._id === getUserDetails()._id) &&
                                                    <span className='font-semibold text-sm'>{`${items.latestMessage?.sender?._id === getUserDetails()._id ? 'You' : items.latestMessage?.sender?.firstname}: `}</span>
                                                } */}
                                                <p className='font-medium text-xs h-[17px] text-ellipsis overflow-hidden'>
                                                    {items.latestMessage ? items.latestMessage.content : ''}
                                                    </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-none text-xs items-end space-y-2 w-20 pr-2">
                                            <p className=
                                            // {`${notifications.find((n) => n.chat._id === items._id) ? 'text-[#00a884] font-medium' : 'text-gray-500'} 
                                            "text-xs"
                                            >
                                                {moment(items.latestMessage?.createdAt).format("DD/MM/YYYY")}
                                            </p>
                                            {/* <div className="flex bg-[#00a884] justify-center text-xs items-center rounded-full w-4 h-4 text-black">
                                                1
                                            </div> */}
                                        </div>
                                    </div>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ChatBox
