import axios from "axios";
import { ErrorToast  } from "../helper/formHelper";
import store from "../redux/store/store";
import { getToken } from "../helper/sessionHelper";
import { setAllMessages, setMyChats, setNewMessage, setSelectChat, setSingleMessage } from "../redux/state/chatSlice";
import { socket } from "../components/Layout/Header";
const BaseURL = "http://localhost:8081/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const myChatRequest = async () =>{
    let URL = BaseURL + "/chat";
    return await axios.get(URL, AxiosHeader).then((res) => {
        if (res.status === 200) {
            store.dispatch(setMyChats(res.data))
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

export const accessChatRequest = async (userId) =>{
    let PostBody = { userId: userId }
    let URL = BaseURL + "/chat";
    return await axios.post(URL, PostBody, AxiosHeader).then((res) => {
        if (res.status === 200) {
            const myChats = store.getState().chat.myChats
            if(!myChats?.find((c)=>c._id===res.data._id))
                store.dispatch(setMyChats([res.data, ...myChats]))
            else
                store.dispatch(setSelectChat(res.data))
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

export const sentMessageRequest = async (content, chatId) =>{
    let PostBody = { chatId: chatId, content: content }
    let URL = BaseURL + "/message";
    return await axios.post(URL, PostBody, AxiosHeader).then((res) => {
        if (res.status === 200) {
            store.dispatch(setSingleMessage(res.data))
            store.dispatch(setNewMessage(res.data))
            socket.emit("new msg", res.data)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 403) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const fetchAllMessagesRequest = async (chatId) =>{
    let URL = BaseURL + `/message/${chatId}`;
    return await axios.get(URL, AxiosHeader).then((res) => {
        if (res.status === 200) {
            store.dispatch(setAllMessages(res.data))
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 403) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}


