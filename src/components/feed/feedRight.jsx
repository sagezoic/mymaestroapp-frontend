import React from "react";
import CommunityConnect from "./communityConnect";
import LatestNews from "./latestNews";

function FeedRight() {
  return (
    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 ms-4">
      <CommunityConnect></CommunityConnect>
      <LatestNews></LatestNews>
    </div>
  );
}

export default FeedRight;
