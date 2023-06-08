import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper.js";
import store from "../redux/store/store";
import { getToken } from "../helper/sessionHelper.js";
import { setJobs, setTotalJobs } from "../redux/state/jobslice.js";
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
    companyweb) => {

    let URL = BaseURL + "/";
    let PostBody = { position: title, company: company, location: locaiton, salary: salary, site: companyweb, link: linkto, deadlineDate: date, jobType: jobtype, details: description }
    return axios.post(URL, PostBody, AxiosHeader).then((res) => {

        if (res.status === 200) {
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