import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CONTEST_ERROR,
  FETCH_POSTS_ERROR,
  UPDATE_PROFILE_FAILED,
} from "./types";
import AlertToast from "../components/Alert/AlertToast";

export const register = (user, history) => async (dispatch) => {
  const body = JSON.stringify(user);

  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      withCredentials: true,
    };
    const res = await axios.post("/user", body, config);

    if (res.data.message) {
      dispatch({
        type: REGISTER_FAIL,
        payload: res.data.message,
      });
      AlertToast(res.data.message, "error");
    } else {
      // history.goBack();
      AlertToast("Wohoo! You have Signed Up successfully", "success");
      return dispatch({type: REGISTER_SUCCESS, payload: res.data});
    }
  } catch (error) {
    dispatch({type: REGISTER_FAIL, payload: error.message});
    AlertToast("Failed to register :(", "error");
  }
};

export const login = (user, history) => async (dispatch) => {
  const body = JSON.stringify(user);

  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      withCredentials: true,
    };
    const res = await axios.post("/user/login", body, config);

    dispatch({type: LOGIN_SUCCESS, payload: res.data});
    AlertToast("You are now logged in !", "success");
    // history.goBack();
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: "Invalid Credentials"});
    AlertToast("Failed to login :(", "error");
  }
};

export const authLogin = (prevURL) => async (dispatch) => {
  try {
    const res = await axios.get(`/auth/current_user?prevURL=${prevURL}`);

    if (res.data === "") {
      return dispatch({
        type: LOGIN_FAIL,
        payload: "User failed to Authenticate",
      });
    }
    dispatch({type: LOGIN_SUCCESS, payload: res.data});
    // AlertToast("You are now logged in !", "success");
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: "User failed to Authenticate"});
    AlertToast("Failed to login :(", "error");
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    await axios.get("/auth/logout");

    dispatch({type: LOGOUT, payload: "User Logged out"});
    dispatch({type: CONTEST_ERROR, payload: "User logged out"});
    dispatch({type: FETCH_POSTS_ERROR, payload: "User logged out"});
    dispatch({type: UPDATE_PROFILE_FAILED, payload: "User logged out"});
    AlertToast("You're now logged out", "success");
    history.push("/");
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: "Failed to Logout"});
    AlertToast("Failed to logout", "error");
  }
};
