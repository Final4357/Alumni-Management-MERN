import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: 'setting',
    initialState:{
        showFilter: false,
        onlineUsers: [],
        socketConnected: false,
    },

    reducers:{
        setShowFilter:(state, action)=>{
            state.showFilter = action.payload
        },setOnlineUsers:(state, action)=>{
            state.onlineUsers = action.payload
        },setSocketConnected:(state, action)=>{
            state.socketConnected = action.payload
        }
    }
})

export const { setShowFilter, setOnlineUsers, setSocketConnected } = settingSlice.actions
export default settingSlice.reducer