import {
  ADD_AVATAR,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE,
  FETCH_PROFILE,
  FETCH_PROFILE_FAILED,
} from "./types";
import axios from "axios";
import AlertToast from "../components/Alert/AlertToast";

export const addAvatar = (avatar) => async (dispatch) => {
  try {
    const config = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axios.patch("/profile/me/avatar", avatar, config);

    dispatch({type: ADD_AVATAR, payload: res.data});
  } catch (error) {
    dispatch({type: UPDATE_PROFILE_FAILED, payload: error.message});
  }
};

export const updateProfile = (data, history) => async (dispatch) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };
    const res = await axios.patch("/profile/me", data, config);
    if (res.data === "") {
      dispatch({
        type: UPDATE_PROFILE_FAILED,
        payload: "User failed to Authenticate",
      });
    }
    dispatch({type: UPDATE_PROFILE, payload: res.data});
    history.push("/");
    AlertToast("Your profile has been updated", "success");
  } catch (error) {
    dispatch({type: UPDATE_PROFILE_FAILED, payload: error.message});
    AlertToast("Failed to Update Profile :(", "error");
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/current_user");
    dispatch({type: FETCH_PROFILE, payload: res.data});
  } catch (error) {
    dispatch({type: FETCH_PROFILE_FAILED, payload: "Failed to fetch profile"});
  }
};
