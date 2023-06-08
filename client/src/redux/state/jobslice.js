import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        pageNo: 1,
        perPage: 6,
        searchKey: "",
        selectCategory: "",
        selectExperience: [],
        selectType: [],
        sort: '',
        Jobs: [],
        TotalJob: 0,
        Clear:true
    },
    reducers: {
        setPageNo: (state, action) => {
            state.pageNo = parseInt(action.payload)
        },
        setPerPage: (state, action) => {
            state.perPage = parseInt(action.payload)
        }, setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        setSelectCategory: (state, action) => {
            state.selectCategory = action.payload
        },
        setSelectExperience: (state, action) => {
            if (state.selectExperience.includes(action.payload)) state.selectExperience = state.selectExperience.filter((item) => item !== action.payload)
            else state.selectExperience = [...state.selectExperience, action.payload]
        },
        setSelectType: (state, action) => {
            if (state.selectType.includes(action.payload)) state.selectType = state.selectType.filter((item) => item !== action.payload)
            else state.selectType = [...state.selectType, action.payload]
        },
        setSort: (state, action) => {
            state.sort = action.payload
        }, setJobs: (state, action) => {
            state.Jobs = action.payload
        },
        setTotalJobs: (state, action) => {
            state.TotalJob = action.payload
        },
        setClear: (state,action)=>{
            state.Clear = action.payload
        },
        setAllClear: (state,action) => {
            console.log(action.payload)
            state.Clear = action.payload
            debugger
            state.pageNo = 1
            state.perPage = 6
            state.searchKey = "0"
            state.selectCategory = []
            state.selectExperience = []
            state.selectType = []
            state.sort = ""
            
        }
    }
})

export const { setPageNo, setPerPage, setSearchKey, setSelectCategory, setSelectExperience, setSelectType, setSort, setJobs, setTotalJobs,setClear, setAllClear } = jobSlice.actions
export default jobSlice.reducer