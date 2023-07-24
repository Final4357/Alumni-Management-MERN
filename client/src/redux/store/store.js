import {configureStore} from "@reduxjs/toolkit";
import  alumniReducer from "../state/alumnislice";
import  profileReducer from "../state/profileslice";
import jobReducer from "../state/jobslice"
import chatReducer from "../state/chatSlice"
import settingReducer from '../state/settingSlice'
import  eventReducer from "../state/eventSlice";
import  newsReducer from "../state/newsSlice";

export default configureStore({
    reducer:{
        alumni: alumniReducer ,
        profile: profileReducer,
        job: jobReducer,
        chat: chatReducer,
        setting: settingReducer,
        event: eventReducer,
        news: newsReducer
    }
})