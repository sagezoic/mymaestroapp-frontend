import React from "react";
import AddPost from "./addPostCard";
import PostCard from "./postCard";

function FeedCenter({ Feeds, Refresh }) {
  debugger;
  return (
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ms-5"
      style={{ marginRight: "-10px" }}
    >
      <AddPost refresh={Refresh}></AddPost>
      <div>
        <hr />
      </div>
      {Feeds.map((feed)=>{
        debugger;
          return (<PostCard Feed={feed} key={feed.id} refresh={Refresh}></PostCard>)
        }
      )}
    </div>
  );
}

export default FeedCenter;
