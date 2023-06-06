import {configureStore} from "@reduxjs/toolkit";
import  alumniReducer from "../state/alumnislice";
import  profileReducer from "../state/profileslice";

export default configureStore({
    reducer:{
        
        alumni: alumniReducer ,
        profile: profileReducer
        
    }
})