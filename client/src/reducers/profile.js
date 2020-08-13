import {ADD_AVATAR, UPDATE_PROFILE_FAILED} from "../actions/types";

const INITIAL_STATE = {
  response: "",
  error: null,
};

const profile = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_AVATAR:
      return {...state, response: payload};

    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default profile;
