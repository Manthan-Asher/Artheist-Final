import React from "react";
import {Redirect} from "react-router-dom";
import "./Postitem.css";

const PostItem = ({post}) => {
  const ext = post.URL.substr(post.URL.lastIndexOf(".") + 1);
  let file;
  if (ext === "jpg" || "png" || "jfif") {
    file = "img";
  } else {
    file = "video";
  }

  return (
    <div
      className="video-item item"
      onClick={() => {
        return <Redirect to={`/post/${post._id}`} />;
      }}
    >
      {file === "img" ? (
        <img src={post.URL} alt=""></img>
      ) : (
        <video src={post.URL}></video>
      )}
    </div>
  );
};

export default PostItem;
