import React, { useState,useEffect } from "react";
import config from "../../config";
import axios from "axios";
import { Dropdown } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

function PostCard({Feed, likePost}) {
  const history = useHistory();
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

 
  const calcNoOfDays=(timeStamp)=>{
    debugger;
    // Convert the timestamp string to a Date object
    const timestampDate = new Date(timeStamp);

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - timestampDate;

    // Calculate the number of days from the time difference
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    if(daysDifference>1){
      return daysDifference+" Days"
    }else{
      let time=Math.floor(timeDifference/(1000*60*60));
      if(time>0){
        return time+" hr"
      }else
        return Math.floor(timeDifference/(1000*60))+" mins";
    }
    
  }

  const deletePost=() =>{
    debugger;
    axios
      .delete(config.serverURL + `/post/deletepost?userId=${sessionStorage.getItem("userId")}&postId=${Feed.id}`)
      .then((response)=>{
        console.log(response);
        toast.success("Post is Deleted")
        debugger;
        if(sessionStorage.getItem("role")==="ROLE_EXPLORER")
          history.push("/explorer/feed")
        else 
          history.push("/maestro/feed");
      })
      .catch((error)=>{
        console.log(error); 
      });
}

  const editPost=() =>{

  }
  debugger;
  return (
    <div className="card mb-3">
    
      <div className="card-header bg-white border-0">
      <div className="row">
      <div className="col-md-1 me-3">
        <img
          src={postUser!=null?config.serverURL+"/users/finddp?path="+postUser.dpUrl:""}
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
        </div>
        <div className="col-md-10">
        <span
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          className="align-top"
        >
          <a
            href="#"
            target="_blank"
            style={{ color: "#212529" }}
          >
            {postUser!=null?postUser.userName:""}
          </a>
        </span>
        <br/>
        <span
          className="align-middle"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "13px",
            color: "#474747",
            marginRight: "8px"
          }}
        >
          {postUser!=null?postUser.interest:""}
        </span>
        <span className="float-right">
          <i className="fas fa-ellipsis-h fa-md"></i>
        </span>
        <br/>
        <span
          className="align-bottom"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell sans-serif",
            fontSize: "13px",
            color: "#474747",
          }}
        >
          {calcNoOfDays(Feed.timeStamp)} Ago <i className="fas fa-globe-americas fa-sm"></i>
        </span>
        </div>
        </div>
      </div>
      <div>
    
     <div className="float-md-end">
          
        <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={{textDecoration:"none"}}>
              &#8230; {/* Three-dot ellipsis */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={editPost}>Edit</Dropdown.Item>
              <Dropdown.Item  onClick={deletePost}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      
      </div>
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
