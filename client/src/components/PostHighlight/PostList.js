import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {
  const renderedList = posts.map((post) => {
    return <PostItem key={post._id} post={post} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default PostList;
