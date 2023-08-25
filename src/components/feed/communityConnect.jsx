import React from 'react'
import FollowCard from './followCard'

function CommunityConnect() {
  return (
    <div class="card" style={{ width: "19rem" }}>
        <div class="card-header bg-white border-0">
          <span>Community</span>
          <span>
            <i class="fas fa-info-circle float-right"></i>
          </span>
        </div>
        <FollowCard></FollowCard>
        <FollowCard></FollowCard>
        <FollowCard></FollowCard>
    </div>
  )
}

export default CommunityConnect