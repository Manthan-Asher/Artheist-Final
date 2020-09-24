import {GET_CONTEST, GET_CONTESTS, CONTEST_ERROR} from "./types";

import axios from "axios";

export const getContests = ({type = "", sortBy = "", limit, skip}) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `/contests?type=${type}&sortBy=${sortBy}&limit=${limit}&skip=${skip}`
    );
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
