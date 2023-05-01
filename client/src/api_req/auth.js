import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { getToken, } from "../helper/sessionHelper.jsx";
const BaseURL = "http://localhost:8081/api/auth"
const AxiosHeader = { headers: { "token": getToken() } }

export const studentRegister = async (fname, lname, email, password, sid) => {
    let URL = BaseURL + "/register";
    let PostBody = { firstname: fname, lastname: lname, email: email, password: password, studentId: sid }
    await axios.post(URL, PostBody).then((res) => {

        if (res.status === 200) {

            SuccessToast("Registration Successfull.")
            return true;
        } else {

            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {

        if (err.response.data.status === 400) {

            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const alumniRegister = async (fname, lname, email, password, sid,dept,batch,position,company,gender,degree,photo) => {
    let URL = BaseURL + "/alumni/register";
    let PostBody = { firstname: fname, lastname: lname, email: email, password: password, studentId: sid,dept:dept,batch:batch,position:position,company:company,gender:gender,degree:degree,photo:photo }
    return await axios.post(URL, PostBody).then((res) => {

        if (res.status === 200) {

            SuccessToast("Registration Successfull.")
            return true;
        } else {

            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {

        if (err.response.data.status === 400) {

            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}