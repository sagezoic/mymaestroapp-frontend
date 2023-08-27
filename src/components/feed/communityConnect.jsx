import React, { useState, useEffect } from "react";
import FollowCard from "./followCard";
import axios from "axios";
import config from "../../config";

function CommunityConnect() {
  const [users, setUsers] = useState([]);
  const [randomIndices, setRandomIndices] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    randomGen();
  }, [users]);

  const getAllUsers = () => {
    axios
      .get(config.serverURL + `/admin/getuserlist`)
      .then((response) => {
        //debugger;
        console.log(response);
        setUsers(response.data);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const randomGen = () => {
    // Function to generate random integers between min and max
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const randomInd = [];
    // Number of random users to display
    const numRandomUsers = 3;

    // Generate an array of random indices
    if (users.length>3) {
      while (randomInd.length < numRandomUsers) {
        const randomIndex = getRandomInt(0, users.length - 1);
        if (!randomInd.includes(randomIndex)) {
          randomInd.push(randomIndex);
        }
      }
    }

    setRandomIndices(randomInd);
    console.log(randomInd);
  };
  debugger;
  return (
    <div className="card" style={{ width: "19rem" }}>
      <div className="card-header bg-white border-0">
        <span>Community</span>
        <span>
          <i className="fas fa-info-circle float-right ms-2"></i>
        </span>
      </div>
      {randomIndices.map((index) => {
          debugger;
          return (<FollowCard key={users[index].id} user={users[index]}></FollowCard>)
        }
      )}
    </div>
  );
}

export default CommunityConnect;
