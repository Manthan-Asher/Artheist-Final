import React from "react";
import "./PostHighlight.css";

const PostDetail = ({post}) => {
  const ext = post.URL.substr(post.URL.lastIndexOf(".") + 1);
  let file;
  if (ext === "jpg" || "png" || "jfif") {
    file = "img";
  } else {
    file = "video";
  }
  return (
    <div>
      <div className="ui embed postEmbeded">
        {file === "img" ? (
          <img src={post.URL} alt=""></img>
        ) : (
          <video src={post.URL}></video>
        )}
      </div>
      <div className="ui segment">
        <h3 className="ui header">{`By ${post.participant.firstName} ${post.participant.lastName}`}</h3>
        <p>{`Featured in ${post.contest.name}`}</p>
      </div>
    </div>
  );
};

export default PostDetail;
