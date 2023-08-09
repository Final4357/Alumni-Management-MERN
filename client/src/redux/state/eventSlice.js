import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'event',
    initialState:{
        pageNo: 1,
        eventDetails: null,
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
        setEventDetails:(state, action)=>{
            state.eventDetails = action.payload
        },
       
    }
})

export const {setPageNo, setEvent, setEventTotal, setEventDetails} = eventSlice.actions
export default eventSlice.reducer