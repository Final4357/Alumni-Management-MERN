import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: 'setting',
    initialState:{
        onlineUsers: [],
        socketConnected: false,
        selectedChatCompare: null
    },
    reducers:{
        setOnlineUsers:(state, action)=>{
            state.onlineUsers = action.payload
        },setSocketConnected:(state, action)=>{
            state.socketConnected = action.payload
        },setSelectedChatCompare:(state, action)=>{
            state.selectedChatCompare = action.payload
        }
    }
})

export const { setOnlineUsers, setSocketConnected, setSelectedChatCompare } = settingSlice.actions
export default settingSlice.reducer