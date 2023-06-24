import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        myChats: [],
        selectChat: null,
        allMessages: [],
        newMessage: null,
        newArrivalMessage: null
    },

    reducers:{
        setMyChats:(state, action)=>{
            state.myChats = action.payload
        },
        setSelectChat:(state, action)=>{
            state.selectChat = action.payload
        },
        setAllMessages:(state, action)=>{
            state.allMessages = action.payload
        },
        setSingleMessage:(state, action)=>{
            state.allMessages = [...state.allMessages, action.payload]
        },
        setNewMessage:(state, action)=>{
            state.newMessage = action.payload
        }
    }
})

export const { setMyChats, setSelectChat, setAllMessages, setSingleMessage, setNewMessage } = chatSlice.actions
export default chatSlice.reducer