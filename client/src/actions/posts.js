import {
  POST_UPLOADED,
  POST_UPLOAD_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POST,
  LIKE_POST,
  POST_ERROR,
} from "./types";
import AlertToast from "../components/Alert/AlertToast";
import axios from "axios";

const uploadPost = (post) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axios.request({
      method: "post",
      url: "/posts",
      data: post,
      headers,
    });

    AlertToast("Your post has been Successfully Uploaded!", "success");
    dispatch({type: POST_UPLOADED, payload: res.data.URL});

    // setTimeout(() => window.location.reload(), 2700);
  } catch (e) {
    AlertToast("Sorry! The post failed to upload", "error");
    dispatch({type: POST_UPLOAD_ERROR, payload: e.message});
  }
};

const getPostById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/posts/${id}`);
    dispatch({type: FETCH_POST, payload: res.data});
  } catch (error) {
    dispatch({type: FETCH_POSTS_ERROR, payload: error.message});
  }
};

const getPostsForDisplay = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts?limit=4");
    dispatch({type: FETCH_POSTS, payload: res.data});
  } catch (error) {
    dispatch({type: FETCH_POSTS_ERROR, payload: error.message});
  }
};

const likePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.post(`/posts/like/${postId}`);
    dispatch({type: LIKE_POST, payload: {postId, likes: res.data}});
  } catch (error) {
    dispatch({type: POST_ERROR, payload: error.response.data});
    AlertToast(error.response.data, "error");
  }
};

const getPostsByUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/profile/user/posts");
    if (res.data === "You haven't uploaded any Posts") {
      return dispatch({type: FETCH_POSTS_ERROR, payload: res.data});
    }
    dispatch({type: FETCH_POSTS, payload: res.data});
  } catch (error) {
    dispatch({type: FETCH_POSTS_ERROR, payload: "Failed to load contest"});
  }
};

export {uploadPost, getPostById, getPostsForDisplay, likePost, getPostsByUser};
