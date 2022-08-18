import React from "react";
import ContentSidebar from "../contentSidebar/ContentSidebar";
import PostList from "../postList/PostList";

const ContentBody = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
            <PostList/>
        </div>
        <div className="col-md-4 text-center">
            <ContentSidebar/>
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
