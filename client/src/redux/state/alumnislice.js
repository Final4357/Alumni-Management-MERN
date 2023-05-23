import { createSlice } from "@reduxjs/toolkit";

export const alumniSlice = createSlice({
    name: 'alumni',
    initialState:{
        Alumni: [],
        Total: 0,
       
    },
    reducers:{
        setAlumni: (state, action)=>{
            state.Alumni = action.payload
        },
        setAlumniTotal: (state, action)=>{
            state.Total = action.payload
        }
       
    }
})

export const {setAlumni, setAlumniTotal} = alumniSlice.actions
export default alumniSlice.reducer