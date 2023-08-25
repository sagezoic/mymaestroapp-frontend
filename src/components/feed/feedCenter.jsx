import React from "react";
import AddPost from "./addPostCard";
import PostCard from "./postCard";

function FeedCenter() {
  return (
    <div
      class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ms-5"
      style={{ marginRight: "-10px" }}
    >
      <AddPost></AddPost>
      <div>
        <hr />
      </div>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </div>
  );
}

export default FeedCenter;
