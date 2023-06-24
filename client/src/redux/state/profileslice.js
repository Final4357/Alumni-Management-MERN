import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        active: 1,
        ProfileDetails:"",
        onlineUsers: []  
    },
    reducers:{
        setActive:(state, action)=>{
            state.active = action.payload
        },
        setProfileDetails:(state, action)=>{
            state.ProfileDetails = action.payload
        },
        setOnlineUsers:(state, action)=>{
            state.onlineUsers = action.payload
        }
    }
})

export const { setActive, setProfileDetails, setOnlineUsers } = profileSlice.actions
export default profileSlice.reducer