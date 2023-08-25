import React from "react";

function MessagePanel() {
  return (
    <nav
      className="navbar navbar-expand-xl navbar-light bg-light position-sticky fixed-bottom border bg-white"
      style={{
        width: "300px",
        height: "50px",
        position: "-webkit-sticky",
        borderRadius: "5px",
        marginLeft: "auto",
        right: "15px",
      }}
    >
      <a className="navbar-brand" href="#">
        <img
          src={require("../../images/users/user1/dp.jpg")}
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
      </a>
      <span
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <strong>Messages</strong>
      </span>
      <span className="offset-3">
        <img src="/assets/edit-regular.svg" width="15px" height="15px" />
      </span>
      <span>
        <i className="fas fa-ellipsis-h fa-sm ms-3"></i>
      </span>
      <span>
        <i className="fas fa-chevron-up fa-sm ms-3"></i>
      </span>
    </nav>
  );
}

export default MessagePanel;
