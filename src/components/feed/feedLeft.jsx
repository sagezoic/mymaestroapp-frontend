import React from "react";

function FeedLeft() {
  return (
    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
      <div className="card" style={{ width: "14rem" }}>
        <div
          className="card-header text-center"
          style={{
            backgroundImage:
              "url(https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F12%2Fbusiness-3605367_1920-1200x741.jpg)",
            height: "53px",
          }}
        >
          <img
            src={require("../../images/users/user1/dp.jpg")}
            className=""
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              width: "70px",
              height: "70px",
            }}
          />
        </div>
        <div className="card-body">
          <p className="card-title text-center mt-4 header">
            <a
              href="https://www.linkedin.com/in/cengizcmataraci/"
              target="_blank"
              style={{ color: "#212529" }}
            >
              Tamnnah Bhatia
            </a>
          </p>
          <div
            style={{
              fontSize: "12px",
              textAlign: "center",
              marginTop: "-10px",
              marginBottom: "10px",
              color: "#5f5f5f",
            }}
          >
            Software Developer at MyMaestro - SDE IV
          </div>
          <hr />
          <div className="card-text">
            <div>
              <span className="view">Followers </span>
              <span
                className="float-right view mt-1"
                style={{ color: "#0a66c2" }}
              >
                447
              </span>
            </div>
            <div>
              <span className="view">Following </span>
              <span
                className="float-right view mt-1"
                style={{ color: "#0a66c2" }}
              >
                150
              </span>
            </div>
          </div>
        </div>
        <div className="card-footer bg-white">
          <i className="fas fa-bookmark mr-2"></i>
          <span
            className="ms-4"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            Saved Posts
          </span>
        </div>
      </div>

      <div className="card mt-2" style={{ width: "14rem" }}>
        <div
          className="card-header bg-white border-0"
          style={{ marginBottom: "-22px", fontSize: "18px" }}
        >
          My Favorite Maestro
        </div>
        <div className="card-body">
          <div className="card-title">
            <img
              src={require("../../images/users/user1/favMaestro/m1.jpg")}
              style={{ width: "32px", height: "32px" }}
            />
            <div
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                marginTop: "-35px",
                marginLeft: "37px",
              }}
            >
              Lomas Chaudhary
            </div>
            <div
              className="d-flex justify-content-between"
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "gray",
                marginLeft: "38px",
              }}
            >
              Followers
              <span className="float-right" style={{ color: "#0a66c2" }}>
                10
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card mt-2"
        style={{
          width: "14rem",
          position: "sticky",
          top: "4rem",
          overflow: "visible",
        }}
      >
        <div
          className="card-header bg-white border-0"
          style={{ marginBottom: "-22px", fontSize: "12px" }}
        >
          Category
        </div>
        <div className="card-body">
          <div className="card-title">
            <div>
              <i
                className="fas fa-hashtag"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              ></i>
              <span
                className="ml-2 fontWeight-bold"
                style={{ fontSize: "13px", color: "#5f5f5f" }}
              >
                Software Engineers
              </span>
            </div>
            <div>
              <i
                className="fas fa-hashtag"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              ></i>
              <span
                className="ml-2 fontWeight-bold"
                style={{ fontSize: "13px", color: "#5f5f5f" }}
              >
                Designers
              </span>
            </div>
            <div>
              <i
                className="fas fa-hashtag"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              ></i>
              <span
                className="ml-2 fontWeight-bold"
                style={{ fontSize: "13px", color: "#5f5f5f" }}
              >
                Mentors
              </span>
            </div>
            <div>
              <i
                className="fas fa-hashtag"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              ></i>
              <span
                className="ml-2 fontWeight-bold"
                style={{ fontSize: "13px", color: "#5f5f5f" }}
              >
                Creators
              </span>
            </div>
            <div>
              <i
                className="fas fa-hashtag"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              ></i>
              <span
                className="ml-2 fontWeight-bold"
                style={{ fontSize: "13px", color: "#5f5f5f" }}
              >
                Mental Health Experts
              </span>
            </div>
            <div className="mt-3 categories">More...</div>
            <span className="mt-3 categories">My Posts</span>
            <div className="mt-3 mb-1 categories"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedLeft;
