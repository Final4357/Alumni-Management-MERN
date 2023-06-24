import React, { Fragment, useState } from 'react'
import MessageBox from '../components/chat/MessageBox'
import ChatBox from '../components/chat/ChatBox'
import { useSelector } from 'react-redux'

const ChatPage = () => {
  const myChats = useSelector((state) => state.chat.myChats)
  const newMsg = useSelector((state) => state.chat.newMessage)
  const allMessages = useSelector((state) => state.chat.allMessages)
  const selectChat = useSelector((state) => state.chat.selectChat)

  return (
    <Fragment>
        <div className="w-full h-[75vh] overflow-hidden">
        <div className="flex justify-start items-center bg-white w-full h-full">
          <div className={`${selectChat ? 'hidden lg:block' : 'block'}
           bg-white w-full lg:w-1/3 h-full`}>
            <ChatBox /*myChats={myChats} dispatch={dispatch}*/ />
          </div>
          <div className={`${selectChat ? 'block' : 'hidden lg:block'}
           bg-white w-full lg:w-2/3 h-full`}>
            <MessageBox />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ChatPage