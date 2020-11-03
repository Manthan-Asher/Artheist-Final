import React, {useState} from "react";
import "./PostHighlight.css";
import {connect} from "react-redux";
import {likePost} from "../../actions/posts";
import PostShareBtnsContainer from "../PostShareBtnsContainer/PostShareBtnsContainer";

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

  let [shareContainerOpen, toggleShareContainer] = useState(false);
  const shareUrl = `https://artheist-india.herokuapp.com/posts/${post._id}`;
  const title = "Artheist";

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
        <h3 className="ui header">By Artheist India</h3>
        <div className="likeButtonContainer">
          <p>
            {loggedUser &&
            post.likes.find((like) => like.user === loggedUser._id) ? (
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
              {post.likes.length > 0 && <span>{post.likes.length} Likes</span>}
            </span>
          </p>
        </div>
        <div className="sharePostBtn">
          <button
            className="btn"
            onClick={() => toggleShareContainer(!shareContainerOpen)}
          >
            {" "}
            Share Now{" "}
          </button>
          {shareContainerOpen && (
            <PostShareBtnsContainer shareUrl={shareUrl} title={title} toggleShareContainer={toggleShareContainer}/>
          )}
        </div>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{`Artist Name :- ${post.participant.firstName} ${post.participant.lastName} `}</h3>
        <p>
          Featured in :-{" "}
          <a href={`/contests/${post.contest._id}`}>{post.contest.name}</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedUser: state.auth.user,
});

export default connect(mapStateToProps, {likePost})(PostDetail);
