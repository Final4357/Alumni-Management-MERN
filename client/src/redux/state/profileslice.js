import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
<<<<<<< HEAD
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
=======
    initialState: {
        ProfileDetails: "",
        pageNo: 1,
        perPage: 6,
        searchKey: "",
        createdJobs: [],
        TotalcreatedJob: 0,
    },
    reducers: {
        setProfileDetails: (state, action) => {
            state.ProfileDetails = action.payload
        },
        setPageNo: (state, action) => {
            state.pageNo = parseInt(action.payload)
        },
        setPerPage: (state, action) => {
            state.perPage = parseInt(action.payload)
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        setcreatedJobs: (state, action) => {
            state.createdJobs = action.payload
        },
        setTotalcreatedJobs: (state, action) => {
            state.TotalcreatedJob = action.payload
        },
        

    }
})

export const { setProfileDetails, setPageNo, setPerPage, setSearchKey, setTotalcreatedJobs, setcreatedJobs  } = profileSlice.actions
>>>>>>> ffdecb0dc6969c434d41a75882b0a24b051f4aed
export default profileSlice.reducer