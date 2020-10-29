import React from "react";
import {Link} from "react-router-dom";
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
    <div className="video-item item">
      <Link to={`/post/${post._id}`}>
        {file === "img" ? (
          <img src={post.URL} alt=""></img>
        ) : (
          <video src={post.URL}></video>
        )}
      </Link>
    </div>
  );
};

export default PostItem;
