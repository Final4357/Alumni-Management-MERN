import {configureStore} from "@reduxjs/toolkit";
import  alumniReducer from "../state/alumnislice";
import  profileReducer from "../state/profileslice";
import jobReducer from "../state/jobslice"
import chatReducer from "../state/chatSlice"
import settingReducer from '../state/settingSlice'

export default configureStore({
    reducer:{
        alumni: alumniReducer ,
        profile: profileReducer,
        job: jobReducer,
        chat: chatReducer,
        setting: settingReducer
    }
})