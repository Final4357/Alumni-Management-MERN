import {configureStore} from "@reduxjs/toolkit";
import  alumniReducer from "../state/alumnislice";

export default configureStore({
    reducer:{
        
        alumni: alumniReducer
        
    }
})