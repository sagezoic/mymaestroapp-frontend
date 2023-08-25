import React from "react";

function FollowCard() {
  return (
    <div class="card-title">
      <div class="ms-3">
        <img
          src=""
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <span class="header ms-1" style={{ fontSize: "14px" }}>
          User1
        </span>
        <span class="float-right me-3 mt-2">
          <button
            class="btn btn-outline-info btn-sm ms-2"
            style={{ borderRadius: "50px" }}
          >
            <strong>+ Follow</strong>
          </button>
        </span>
      </div>
    </div>
  );
}

export default FollowCard;
