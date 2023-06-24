import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper.js";
import store from "../redux/store/store";
import { getToken } from "../helper/sessionHelper.js";
import { setJobDetails, setJobs, setTotalJobs } from "../redux/state/jobslice.js";
import { setProfileDetails, setTotalcreatedJobs, setcreatedJobs } from "../redux/state/profileslice.js";
const BaseURL = "http://localhost:8081/api/job"
const AxiosHeader = { headers: { "token": getToken() } }

export const Jobcreaterequest = (title,
    salary,
    linkto,
    date,
    jobtype,
    locaiton,
    description,
    company,
    experience,
    category) => {

    let URL = BaseURL + "/";
    let PostBody = { position: title, company: company, location: locaiton, salary: salary, experience: experience, category: category, link: linkto, deadlineDate: new Date(date), type: jobtype, details: description }
    return axios.post(URL, PostBody, AxiosHeader).then((res) => {

        if (res.status === 200) {
            console.log(res.data)
            SuccessToast("Job Created")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {

        if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const jobListRequest = async (pageNo, perPage, searchKey, category, experience, type, sort) => {
    try {
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}&category=${category}&experience=${experience}&type=${type}&sort=${sort}`
        const result = await axios.get(url);
        if (result.status === 200) {

            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setJobs(result.data.data[0].Row))
                store.dispatch(setTotalJobs(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setJobs([]))
                store.dispatch(setTotalJobs(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const cratedjobListRequest = async (pageNo, perPage, searchKey) => {
    try {
        let url = BaseURL + `/createdlist?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}`
        const result = await axios.get(url, AxiosHeader);
        if (result.status === 200) {
            //  console.log(result.data)

            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setcreatedJobs(result.data.data[0].Row))
                store.dispatch(setTotalcreatedJobs(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setcreatedJobs([]))
                store.dispatch(setTotalcreatedJobs(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const jobDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url);
        if (result.status === 200) {

            if (result.data.data.length > 0) {
                store.dispatch(setJobDetails(result.data.data[0]))

            } else {
                store.dispatch(setJobDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const updateJobdetails = (id, title,
    salary,
    linkto,
    date,
    jobtype,
    locaiton,
    description,
    company,
    experience,
    category) => {

    let PostBody = { position: title, company: company, location: locaiton, salary: salary, experience: experience, category: category, link: linkto, deadlineDate: new Date(date), type: jobtype, details: description }
    let URL = BaseURL + "/" + id;
    return axios.put(URL, PostBody, AxiosHeader).then((res) => {
        console.log(res);

        if (res.status === 200) {
            SuccessToast("Job Details Updated")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {

        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}


export const deleteJobById = async (id) => {
    try {
        let url = BaseURL + "/" + id;
        const result = await axios.delete(url, AxiosHeader);
        if (result.status === 200) {
            SuccessToast("Job Deleted! ")

        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}