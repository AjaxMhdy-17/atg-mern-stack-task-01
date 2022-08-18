import React from "react";
import ContentSidebar2 from "../contentSidebar/ContentSidebar2";
import PostList from "../postList/PostList";

const ContentBody2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
            <PostList/>
        </div>
        <div className="col-md-4 text-center">
            <ContentSidebar2/>
        </div>
      </div>
    </div>
  );
};

export default ContentBody2;
