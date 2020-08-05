import axios from "axios";

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";

export const register = (user) => async (dispatch) => {
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

    if (res.data.errors.length > 0) {
      dispatch({type: REGISTER_FAIL, payload: res.data.errors[0].message});
    } else {
      dispatch({type: REGISTER_SUCCESS, payload: res.data});
    }
  } catch (error) {
    dispatch({type: REGISTER_FAIL, payload: error.message});
  }
};

export const login = (user) => async (dispatch) => {
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
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: "Invalid Credentials"});
  }
};

export const authLogin = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/current_user");

    if (res.data === "") {
      return dispatch({
        type: LOGIN_FAIL,
        payload: "User failed to Authenticate",
      });
    }
    dispatch({type: LOGIN_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: "User failed to Authenticate"});
  }
};
