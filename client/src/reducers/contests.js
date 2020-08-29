import {GET_CONTEST, GET_CONTESTS, CONTEST_ERROR} from "../actions/types";

const INITIAL_STATE = {
  contests: [],
  contest: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_CONTESTS:
      return {
        ...state,
        contests: payload,
      };
    case GET_CONTEST:
      return {
        ...state,
        contests: null,
        contest: payload,
      };
    case CONTEST_ERROR:
      return {
        contests: [],
        contest: null,
        error: payload,
      };
    default:
      return state;
  }
};
