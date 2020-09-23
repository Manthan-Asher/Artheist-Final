import React from "react";
import "./PostHighlight.css";
import {connect} from "react-redux";
import {likePost} from "../../actions/posts";

const PostDetail = ({post, likePost, loggedUser}) => {
  const ext = post.URL.substr(post.URL.lastIndexOf(".") + 1);
  var file;
  console.log(ext);
  if (ext === "jpg" || "png" || "jfif") {
    file = "img";
  }
  if (ext === "mp4") {
    file = "video";
  }
  return (
    <div>
      <div className="ui embed postEmbeded">
        {file === "img" ? (
          <img src={post.URL} alt=""></img>
        ) : (
          // <video src={post.URL}></video>
          <video controls autoplay name="media" controlsList="nodownload">
            <source src={post.URL} type="video/mp4"></source>
          </video>
        )}
      </div>
      <div className="ui segment">
        <h3 className="ui header">{`By ${post.participant.firstName} ${post.participant.lastName}`}</h3>
        <p>{`Featured in ${post.contest.name}`}</p>
        <div className="likeButtonContainer">
          <p>
            {post.likes.find((like) => like.user === loggedUser._id) ? (
              <i
                className="fa fa-thumbs-up likeButtonOpen"
                aria-hidden="true"
              ></i>
            ) : (
              <i
                className="fa fa-thumbs-o-up likeButtonOpen"
                aria-hidden="true"
                onClick={() => {
                  likePost(post._id);
                }}
              ></i>
            )}{" "}
            <span>
              {post.likes.length > 0 && <span>{post.likes.length}</span>}
            </span>
          </p>
        </div>
        <div className="sharePostBtn">
          <button class="btn"> Share Now </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedUser: state.auth.user,
});

export default connect(mapStateToProps, {likePost})(PostDetail);
