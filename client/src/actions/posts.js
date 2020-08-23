import {
  POST_UPLOADED,
  POST_UPLOAD_ERROR,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
} from "./types";
import AlertToast from "../components/Alert/AlertToast";
import axios from "axios";

const uploadPost = (post, onUploadProgress) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post("/posts", post, config, onUploadProgress);

    AlertToast("Your post has been Successfully Uploaded!", "success");

    dispatch({type: POST_UPLOADED, payload: res.data.URL});
  } catch (e) {
    AlertToast("Sorry! The post failed to upload", "error");
    dispatch({type: POST_UPLOAD_ERROR, payload: e.message});
  }
};

const getPostById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/posts/${id}`);
    dispatch({type: FETCH_POSTS, payload: res.data});
  } catch (error) {
    dispatch({type: FETCH_POSTS_ERROR, payload: error.message});
  }
};

export {uploadPost, getPostById};
