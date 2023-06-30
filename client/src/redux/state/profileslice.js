import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        active: 1,
        ProfileDetails: "",
        createdJobPageNo: 1,
        searchKey: "",
        createdJobs: [],
        TotalcreatedJob: 0,
    },
    reducers:{
        setActive:(state, action)=>{
            state.active = action.payload
        },
        setProfileDetails:(state, action)=>{
            state.ProfileDetails = action.payload
        },
        setcreatedJobPageNo: (state, action) => {
            state.createdJobPageNo = parseInt(action.payload)
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        setcreatedJobs: (state, action) => {
            state.createdJobs = action.payload
        },
        setTotalcreatedJobs: (state, action) => {
            state.TotalcreatedJob = action.payload
        }
    }
})

export const { setActive, setProfileDetails, setcreatedJobPageNo, setSearchKey, setTotalcreatedJobs, setcreatedJobs } = profileSlice.actions

export default profileSlice.reducer