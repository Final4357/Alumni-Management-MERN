import axios from "axios";
import { ErrorToast } from "../helper/formHelper.js";
import store from "../redux/store/store";
import { getToken } from "../helper/sessionHelper.js";
import { setEvent, setEventDetails, setEventTotal } from "../redux/state/eventSlice.js";
const BaseURL = "http://localhost:8081/api/event"
//  const BaseURL = "https://iiuc-alumni.onrender.com/api/event"
//const BaseURL = "https://admin-iiuc-alumni.onrender.com/api/event"
const AxiosHeader = { headers: { "token": getToken() } }

export const eventListRequest = async (pageNo, perPage) => {
    try {
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=`;
        const result = await axios.get(url);

        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setEvent(result.data.data[0].Row))
                store.dispatch(setEventTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setEvent([]))
                store.dispatch(setEventTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}

export const eventDetailsById = async (id) => {
    try {
        let url = BaseURL + "/details/" + id;
        const result = await axios.get(url);
        if (result.status === 200) {
            if (result.data.data.length > 0) {
                store.dispatch(setEventDetails(result.data.data[0]))
            } else {
                store.dispatch(setEventDetails(null))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}