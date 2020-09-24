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
  }, [props.posts.likes]);

  // issue

  if (!props.postFetched || !props.posts) {
    return <ArtheistLoader />;
  }
  return (
    <div className="ui container postContainer">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <PostDetail post={props.postFetched} />
          </div>
          <div className="five wide column">
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

export default connect(mapStateToProps, {getPostById, getPostsForDisplay})(
  PostHighlight
);
