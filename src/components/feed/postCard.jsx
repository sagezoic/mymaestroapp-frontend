import React, { useState,useEffect } from "react";
import config from "../../config";
import axios from "axios";

function PostCard({Feed, likePost}) {

  const [postUser, setPostUser] = useState();
  let userId = Feed.userId;

  useEffect(() => {
    getUserDetails();
  }, []);

  const token = sessionStorage.getItem("jwt");
  if (token != null)
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const getUserDetails = () => {
    axios
      .get(config.serverURL + `/users/${userId}`)
      .then((response) => {
        //debugger;
        console.log(response);
        debugger;
        setPostUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card mb-3">
      <div className="card-header bg-white border-0">
        <img
          src={postUser!=null?config.serverURL+"/users/finddp?path="+postUser.dpUrl:""}
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
        <span
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            marginLeft: "8px",
          }}
          className="align-top"
        >
          <a
            href="#"
            target="_blank"
            style={{ color: "#212529" }}
          >
            {postUser!=null?postUser.firstName+" "+postUser.lastName:""}
          </a>
        </span>
        <span className="float-right">
          <i className="fas fa-ellipsis-h fa-md"></i>
        </span>
        <span
          className="align-middle"
          style={{
            marginLeft: "-96px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          {postUser!=null?postUser.interest:""}
        </span>
        <span
          className="align-bottom"
          style={{
            marginLeft: "-78px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          25a <i className="fas fa-globe-americas fa-sm"></i>
        </span>
      </div>
      <div>
        <p
          className="card-text ms-3"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "15px",
            color: "black",
          }}
        >
          {Feed.captionText}
        </p>
        <div>
          <img
            src={config.serverURL+"/post/findimage?path="+Feed.urlText}
            className="card-img-top mb-1"
            alt=""
          />
        </div>
        <span className="ms-3 mt-5">
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt=""
          />
        </span>
        <span className="mt-5">
          <img
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
            alt=""
          />
        </span>
        <span
          className="mt-5"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          <img
            src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
            alt=""
          />
          958
        </span>
        <div className="card-footer bg-white mt-1">
          <span>
            <button className="ref btn btn-light btn-sm" onClick={()=>{likePost(Feed.id)}}>
              <i className="far fa-thumbs-up fa-md" style={{ fontSize: "1.2rem" }}>
                <span className="ms-2 mediatext">Like</span>
              </i>
            </button>
          </span>
          <span>
            <button className="ref btn btn-light btn-sm">
              <i className="far fa-comment fa-md" style={{ fontSize: "1.2rem" }}>
                <span className="ms-2 mediatext">Comment</span>
              </i>
            </button>
          </span>
          <span>
            <button className="ref btn btn-light btn-sm">
              <i className="fas fa-share fa-md" style={{ fontSize: "1.2rem" }}>
                <span className="ms-2 mediatext">Share</span>
              </i>
            </button>
          </span>
          <span>
            <button className="ref btn btn-light btn-sm">
              <i
                className="fas fa-paper-plane fa-md"
                style={{ fontSize: "1.2rem" }}
              >
                <span className="ms-2 mediatext">DM</span>
              </i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
