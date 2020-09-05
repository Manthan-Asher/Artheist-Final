import {
  POST_UPLOADED,
  POST_UPLOAD_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POST,
} from "../actions/types";

const INITIAL_STATE = {
  posts: [],
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
        posts: payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: payload,
        postsByUser: [],
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
