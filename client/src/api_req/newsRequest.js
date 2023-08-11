import axios from "axios";
import { ErrorToast } from "../helper/formHelper.js";
import store from "../redux/store/store.js";
import { setNews, setNewsTotal } from "../redux/state/newsSlice.js";
// const BaseURL = "http://localhost:8081/api/news"
const BaseURL = "https://iiuc-alumni.onrender.com/api/news"

export const newsListRequest = async (pageNo, perPage) => {
    try {
        let url = BaseURL + `/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=`;
        const result = await axios.get(url);

        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setNews(result.data.data[0].Row))
                store.dispatch(setNewsTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setNews([]))
                store.dispatch(setNewsTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {

        ErrorToast("Something went wrong.")
    }
}