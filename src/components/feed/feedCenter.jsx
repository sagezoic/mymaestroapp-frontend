import React from "react";
import AddPost from "./addPostCard";
import PostCard from "./postCard";

function FeedCenter({ Feeds, LikePost }) {
  debugger;
  return (
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ms-5"
      style={{ marginRight: "-10px" }}
    >
      <AddPost></AddPost>
      <div>
        <hr />
      </div>
      {Feeds.map((feed)=>{
        debugger;
          return (<PostCard Feed={feed} likePost={LikePost} key={feed.id}></PostCard>)
        }
      )}
    </div>
  );
}

export default FeedCenter;
