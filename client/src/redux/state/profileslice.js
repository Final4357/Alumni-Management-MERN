import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
     
        ProfileDetails:"",
        
       
    },
    reducers:{
        
        setProfileDetails:(state, action)=>{
            state.ProfileDetails = action.payload
        },
       
    }
})

export const {setProfileDetails} = profileSlice.actions
export default profileSlice.reducer