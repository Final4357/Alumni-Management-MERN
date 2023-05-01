import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { getToken, setToken, setUserDetails } from "../helper/sessionHelper.jsx";
const BaseURL = "http://localhost:8081/api/auth"
const AxiosHeader = { headers: { "token": getToken() } }

export const studentRegister = async (fname, lname, email, password, sid,photo) => {
    let URL = BaseURL + "/register";
    let PostBody = { firstname: fname, lastname: lname, email: email, password: password, studentId: sid, photo:photo }
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

export const LoginRequest = (email, password) => {
   
    let URL = BaseURL + "/login";
    let PostBody = { email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        
        if (res.status === 200) {
            setToken(res.data.token)
            setUserDetails(res.data.data)
            SuccessToast("Login Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
     
        if (err.response.data.status === 400) {
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

export const ForgetPasswordRequest = (email) =>{
    
    let URL = BaseURL + "/forgotPassword";
    let PostBody = { email: email }
    return axios.post(URL, PostBody).then((res) => {
       
        if (res.status === 200) {
            SuccessToast(res.data)
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
export const ResetPasswordRequest = (password, resetToken) =>{

    let PostBody = { password: password }
    let URL = BaseURL + "/resetPassword/"+resetToken;
    return axios.put(URL, PostBody).then((res) => {

        if (res.status === 200) {
            SuccessToast(res.data)
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
