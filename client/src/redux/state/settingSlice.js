import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: 'setting',
    initialState:{
        onlineUsers: [],
        socketConnected: false,
    },

    reducers:{
        setOnlineUsers:(state, action)=>{
            state.onlineUsers = action.payload
        },setSocketConnected:(state, action)=>{
            state.socketConnected = action.payload
        }
    }
})

export const { setOnlineUsers, setSocketConnected } = settingSlice.actions
export default settingSlice.reducer