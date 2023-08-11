import axios from "axios";
import { ErrorToast } from "../helper/formHelper.js";
import store from "../redux/store/store";
import { setAlumni, setAlumniDetails, setAlumniTotal } from "../redux/state/alumnislice";
import { getToken } from "../helper/sessionHelper.js";
// const BaseURL = "http://localhost:8081/api/user"
 const BaseURL = "https://iiuc-alumni.onrender.com/api/user"
const AxiosHeader = { headers: { "token": getToken() } }

export const alumniListRequest = async (pageNo, perPage, searchKey,dept) => {
    try {
        let url = BaseURL + `/alumniList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}&dept=${dept}`;
        const result = await axios.get(url);

        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setAlumni(result.data.data[0].Row))
                store.dispatch(setAlumniTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setAlumni([]))
                store.dispatch(setAlumniTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const alumniDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url, AxiosHeader);
        if (result.status === 200) {

            if (result.data.data.length > 0) {
                store.dispatch(setAlumniDetails(result.data.data[0]))

            } else {
                store.dispatch(setAlumniDetails(""))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

