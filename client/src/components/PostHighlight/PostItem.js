import React from "react";
import "./Postitem.css";

const PostItem = ({post, onPostSelect}) => {
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
        onPostSelect(post._id);
      }}
    >
      {file === "img" ? (
        <img src={post.URL} alt=""></img>
      ) : (
        <iframe src={post.URL}></iframe>
      )}
    </div>
  );
};

export default PostItem;
