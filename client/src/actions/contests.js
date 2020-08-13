import {GET_CONTEST, GET_CONTESTS, CONTEST_ERROR} from "./types";

import axios from "axios";

export const getContests = () => async (dispatch) => {
  try {
    const res = await axios.get("/contests");
    dispatch({type: GET_CONTESTS, payload: res.data});
  } catch (error) {
    dispatch({type: CONTEST_ERROR, payload: "Failed to load contests"});
  }
};

export const getContestById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/contests/${id}`);
    dispatch({type: GET_CONTEST, payload: res.data});
  } catch (error) {
    dispatch({type: CONTEST_ERROR, payload: "Failed to load contest"});
  }
};
