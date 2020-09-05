import React, {Component} from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getPostById, getPostsForDisplay} from "../../actions/posts";

class PostHighlight extends Component {
  componentDidMount() {
    this.props.getPostById(this.props.match.params.id);
    this.props.getPostsForDisplay();
  }

  // issue

  onPostSelect(id) {
    return <Redirect to={`/post/${id}`} />;
  }
  render() {
    if (!this.props.postFetched || !this.props.posts) {
      return "Loading....";
    }
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <PostDetail post={this.props.postFetched} />
            </div>
            <div className="five wide column">
              <PostList
                posts={this.props.posts}
                onPostSelect={this.onPostSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postFetched: state.posts.post,
  posts: state.posts.posts,
});

export default connect(mapStateToProps, {getPostById, getPostsForDisplay})(
  PostHighlight
);
