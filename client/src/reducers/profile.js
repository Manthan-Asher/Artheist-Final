import {
  ADD_AVATAR,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE,
  FETCH_PROFILE,
  FETCH_PROFILE_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  response: "",
  error: null,
};

const profile = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_AVATAR:
    case UPDATE_PROFILE:
      return {error: null, response: payload};

    case FETCH_PROFILE:
      return {
        response: payload,
        error: null,
      };

    case UPDATE_PROFILE_FAILED:
    case FETCH_PROFILE_FAILED:
      return {
        response: "",
        error: payload,
      };
    default:
      return state;
  }
};

export default profile;
