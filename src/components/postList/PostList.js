import React from "react";
import Card from "../ui/card/Card";
import {data} from '../dummyData'

const PostList = () => {
  return (
    <div>
      {data.map((post) => (
         <Card key={post.id} post={post}/>
      ))}

    </div>
  );
};

export default PostList;
