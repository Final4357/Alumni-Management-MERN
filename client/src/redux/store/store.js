import {configureStore} from "@reduxjs/toolkit";
import  alumniReducer from "../state/alumnislice";
import  profileReducer from "../state/profileslice";
import jobReducer from "../state/jobslice"

export default configureStore({
    reducer:{
        
        alumni: alumniReducer ,
        profile: profileReducer,
        job: jobReducer,

        
    }
})