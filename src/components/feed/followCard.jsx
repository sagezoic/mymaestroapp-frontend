import React, { useEffect, useState } from "react";
import config from "../../config";

function FollowCard({ user }) {
  debugger;
  const [dpUrl, setDpUrl] = useState();

  useEffect(() => {
    if (user != null) {
      setDpUrl(config.serverURL + "/users/finddp?path=" + user.dpUrl);
    }
  }, [user]);

  debugger;

  return (
    <div className="card-title">
      <div className="ms-3">
        <img
          src={dpUrl}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <span className="header ms-1" style={{ fontSize: "14px" }}>
          {user != null ? user.userName : ""}
        </span>
        <span className="float-right me-3 mt-2">
          <button
            className="btn btn-outline-info btn-sm ms-2"
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
