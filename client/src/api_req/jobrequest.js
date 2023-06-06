import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper.js";
import store from "../redux/store/store";
import { getToken } from "../helper/sessionHelper.js";
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
    let PostBody = {position:title,company:company, location:locaiton,salary:salary,site:companyweb,link:linkto,deadlineDate:date,jobType:jobtype,details:description}
    return axios.post(URL, PostBody,AxiosHeader).then((res) => {

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