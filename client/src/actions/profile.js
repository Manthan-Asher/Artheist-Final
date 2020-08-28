import {ADD_AVATAR, UPDATE_PROFILE_FAILED, UPDATE_PROFILE} from "./types";
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

export const updateProfile = (data) => async (dispatch) => {
  try {
    const body = JSON.stringify(data);
    const config = {
      "Content-Type": "application/json",
    };
    if (res.data === "") {
      dispatch({
        type: UPDATE_PROFILE_FAILED,
        payload: "User failed to Authenticate",
      });
    }
    const res = await axios.patch("/profile/me", body, config);

    dispatch({type: UPDATE_PROFILE, payload: res.data});
    AlertToast("Your profile has been updated", "success");
  } catch (error) {
    dispatch({type: UPDATE_PROFILE_FAILED, payload: error.message});
    AlertToast("Failed to Update Profile :(", "error");
  }
};
