import React from "react";
import FollowCard from "./followCard";

function CommunityConnect() {
  return (
    <div className="card" style={{ width: "19rem" }}>
      <div className="card-header bg-white border-0">
        <span>Community</span>
        <span>
          <i className="fas fa-info-circle float-right"></i>
        </span>
      </div>
      <FollowCard></FollowCard>
      <FollowCard></FollowCard>
      <FollowCard></FollowCard>
    </div>
  );
}

export default CommunityConnect;
