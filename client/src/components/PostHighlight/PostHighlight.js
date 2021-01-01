import React, {useEffect} from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import {connect} from "react-redux";
import {getPostById, getPostsForDisplay} from "../../actions/posts";
import "./PostHighlight.css";
import ArtheistLoader from "../ArtheistLoader/ArtheistLoader";

const PostHighlight = (props) => {
  useEffect(() => {
    props.getPostById(props.match.params.id);
    props.getPostsForDisplay();
  }, [props.match.params.id]);

  useEffect(() => {
    props.getPostById(props.match.params.id);
  }, []);

  if (!props.postFetched || !props.posts) {
    return <ArtheistLoader />;
  }
  return (
    <div className="ui container postContainer">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column postLeft">
            <PostDetail post={props.postFetched} />
          </div>
          <div className="five wide column postRight">
            <h2>You May Like</h2>
            <hr
              style={{width: "100%", display: "block", margin: "0 !important"}}
            />
            <PostList posts={props.posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postFetched: state.posts.post,
  posts: state.posts.posts,
});

export default connect(mapStateToProps, {
  getPostById,
  getPostsForDisplay,
})(PostHighlight);
