import {
  POST_UPLOADED,
  POST_UPLOAD_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_BY_USER,
  FETCH_POSTS_ERROR,
  FETCH_POST,
  LIKE_POST,
  POST_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  posts: [],
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
        postsByUser: [],
        posts: payload,
      };
    case FETCH_POSTS_BY_USER:
      return {
        error: null,
        post: null,
        posts: [],
        postsByUser: payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: payload,
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post1) =>
          post1._id === payload.postId
            ? {...post1, likes: payload.likes}
            : post1
        ),
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    case POST_UPLOAD_ERROR:
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        postsByUser: [],
        posts: [],
        post: null,
        error: payload,
      };
    default:
      return state;
  }
};
