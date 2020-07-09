import {combineReducers} from "redux";
import auth from "./auth";
import contests from "./contests";

export default combineReducers({auth, contests});
