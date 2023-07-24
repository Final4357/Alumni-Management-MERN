import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news',
    initialState:{
        pageNo: 1,
        newsList: [],
        Total: 0,
    },
    reducers:{
        setPageNo: (state, action)=>{
            state.pageNo = action.payload
        },
        setNews: (state, action)=>{
            state.newsList = action.payload
        },
        setNewsTotal: (state, action)=>{
            state.Total = action.payload
        }
    }
})

export const {setPageNo, setNews, setNewsTotal} = newsSlice.actions
export default newsSlice.reducer