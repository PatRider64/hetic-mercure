import {combineReducers} from "@reduxjs/toolkit";
import SigninReducer from "./SigninReducer";
import SessionReducer from "./SessionReducer";

export const RootReducer = combineReducers({
    SigninReducer,
    SessionReducer
});