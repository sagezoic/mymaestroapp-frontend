import React, { useEffect, useState } from "react";
import FeedCard from "./feedCard";
import FeedLeft from "./feedLeft";
import FeedCenter from "./feedCenter";
import FeedRight from "./feedRight";
import MessagePanel from "./messagePanel";
import axios from "axios";
import config from "../../config";
import { useUserContext } from "../context/userContext";

// const getFeeds = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           title: "Test title",
//         },
//         {
//           title: "Test title",
//         },
//         {
//           title: "Test title",
//         },
//       ]);
//     }, 2 * 1000);
//   });
// };

function Feed() {
  const [feeds, setFeeds] = useState([]);
  const { updateUser } = useUserContext();
  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");

  useEffect(() => {
    //getFeeds().then((data) => setFeeds(data));
    getAllPosts();
    loadUserDetails();
  }, []);

  const loadUserDetails = ()=>{
    axios
      .get(config.serverURL + `/users/${userId}`)
      .then((response) => {
        //debugger;
        console.log(response);
        debugger;
        updateUser({userDetails: response.data.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const getAllPosts = () => {
    axios
      .get(config.serverURL + `/post/getallpost`)
      .then((response) => {
        //debugger;
        console.log(response);
        setFeeds(response.data.data);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/*feeds.map((feed) => (
          <FeedCard title={feed.title} />
      ))*/}

      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          {/*<!-- left panel -->*/}
          <FeedLeft />

          {/*<!-- feed panel -->*/}
          <FeedCenter Feeds={feeds}  Refresh={getAllPosts}/>

          {/*<!-- right panel -->*/}
          <FeedRight />
        </div>

        {/**Message panel */}
        <MessagePanel />
      </div>
    </div>
  );
}

export default Feed;
