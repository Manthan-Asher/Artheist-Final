import {ADD_AVATAR, UPDATE_PROFILE_FAILED} from "./types";
import axios from "axios";

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
