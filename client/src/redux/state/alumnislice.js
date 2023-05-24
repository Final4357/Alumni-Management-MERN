import { createSlice } from "@reduxjs/toolkit";

export const alumniSlice = createSlice({
    name: 'alumni',
    initialState:{
        Alumni: [],
        AlumniDetails:"",
        Total: 0,
       
    },
    reducers:{
        setAlumni: (state, action)=>{
            state.Alumni = action.payload
        },
        setAlumniTotal: (state, action)=>{
            state.Total = action.payload
        },
        setAlumniDetails:(state, action)=>{
            state.AlumniDetails = action.payload
        },
       
    }
})

export const {setAlumni, setAlumniTotal,setAlumniDetails} = alumniSlice.actions
export default alumniSlice.reducer