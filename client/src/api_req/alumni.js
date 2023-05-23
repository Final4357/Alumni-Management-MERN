import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { getToken, setToken, setUserDetails } from "../helper/sessionHelper.jsx";
import store from "../redux/store/store";
import { setAlumni, setAlumniTotal } from "../redux/state/alumnislice";
const BaseURL = "http://localhost:8081/api/alumni"
const AxiosHeader = { headers: { "token": getToken() } }

export const alumniListRequest = async (pageNo, perPage, searchKey) => {
    try {
        let url = BaseURL + "/list/" + pageNo + "/" + perPage + "/" + searchKey;
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