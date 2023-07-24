import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'event',
    initialState:{
        pageNo: 1,
        eventList: [],
        Total: 0,
    },
    reducers:{
        setPageNo: (state, action)=>{
            state.pageNo = action.payload
        },
        setEvent: (state, action)=>{
            state.eventList = action.payload
        },
        setEventTotal: (state, action)=>{
            state.Total = action.payload
        },
        // setAlumniDetails:(state, action)=>{
        //     state.AlumniDetails = action.payload
        // },
       
    }
})

export const {setPageNo, setEvent, setEventTotal} = eventSlice.actions
export default eventSlice.reducer