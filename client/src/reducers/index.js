import {combineReducers} from "redux";
import auth from "./auth";
import contests from "./contests";
import profile from "./profile";
import posts from "./posts";

export default combineReducers({auth, contests, profile, posts});
