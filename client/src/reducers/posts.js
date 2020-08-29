import {
  POST_UPLOADED,
  POST_UPLOAD_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  postsByUser: [],
  post: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case POST_UPLOADED:
      return {
        ...state,
        post: payload,
      };
    case FETCH_POSTS:
      return {
        ...state,
        postsByUser: payload,
      };
    case POST_UPLOAD_ERROR:
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        postsByUser: [],
        post: null,
        error: payload,
      };
    default:
      return state;
  }
};
