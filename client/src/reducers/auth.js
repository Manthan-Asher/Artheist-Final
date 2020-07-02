import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const auth = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {...state, isAuthenticated: true, user: payload};

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default auth;
