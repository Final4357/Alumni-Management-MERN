import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        JobDetails:"",
        pageNo: 1,
        perPage: 6,
        searchKey: "",
        selectCategory: "",
        selectExperience: [],
        selectType: [],
        sort: '',
        Jobs: [],
        TotalJob: 0,
        Clear: true,
        selectedJob:null,
        loading : false
    },
    reducers: {
        setJobDetails: (state, action) => {
            state.JobDetails = action.payload
        },
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
        setClear: (state, action) => {
            state.Clear = action.payload
        },
        setAllClear: (state) => {
            state.pageNo = 1
            state.perPage = 6
            state.searchKey = ""
            state.selectCategory = []
            state.selectExperience = []
            state.selectType = []
            state.sort = ""
        },
        clear:(state)=>{
            state.Clear=true
        },
        setselectedJob:(state,action)=>{
            state.selectedJob=action.payload
        },
        setloading:(state, action)=>{
            state.loading=action.payload
        }
    }
})

export const {setselectedJob, setJobDetails, setPageNo, setPerPage, setSearchKey, setSelectCategory, setSelectExperience, setSelectType, setSort, setJobs, setTotalJobs, setClear, setAllClear, clear, setloading } = jobSlice.actions
export default jobSlice.reducer