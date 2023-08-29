import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";
import MaestroCard from "./maestrocard";
import axios from "axios";
import config from "../../config";

function AllMaestro() {
  const [maestroList, setMaestroList] = useState([]);

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");

  // const [searchText, setSearchText]=useState("All");

  // const OnSearch = (args) => {
  //     setSearchText(args);
  //   };

  const [searchText, setSearchText] = useState("All");

  const OnSearch = (args) => {
    setSearchText(args);
  };

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  debugger;

  useEffect(() => {
    getMaestro();
  }, []);

  const getMaestro = () => {
    axios
      .get(config.serverURL + `/users/getallmeastro`)
      .then((response) => {
        debugger;
        console.log(response);
        setMaestroList(response.data.data);
        debugger;
        console.log(maestroList);
        //debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="mt-10 mb-4 d-flex">
        <button
          className={`btn btn-dark btn-custom me-4 
          ${searchText === "All" ? "selected" : ""}`}
          onClick={() => OnSearch("All")}
        >
          All
        </button>
        <button
          className={`btn btn-dark btn-custom me-4
          ${searchText === "Software Engineers" ? "selected" : ""}`}
          onClick={() => OnSearch("Software Engineers")}
        >
          Software Engineers
        </button>
        <button
          className={`btn btn-dark btn-custom me-4
          ${searchText === "Designers" ? "selected" : ""}`}
          onClick={() => OnSearch("Designers")}
        >
          Designers
        </button>
        <button
          className={`btn btn-dark btn-custom me-4
          ${searchText === "Mentors" ? "selected" : ""}`}
          onClick={() => OnSearch("Mentors")}
        >
          Mentors
        </button>
        <button
          className={`btn btn-dark btn-custom me-4
          ${searchText === "Mental Health Experts" ? "selected" : ""}`}
          onClick={() => OnSearch("Mental Health Experts")}
        >
          Mental Health Experts
        </button>
      </div>
      <div className="row container-fluid row-cols-1 row-cols-md-3">
        {maestroList.map((list) => {
          debugger;
          switch (searchText) {
            case "Software Engineers":
              if (list.interest === "DEVELOPER") {
                return (
                  <div className="col">
                    <MaestroCard List={list} key={list.id}></MaestroCard>
                  </div>
                );
              }
              break;
            case "Designers":
              {
                if (list.interest === "TRAVELLER")
                  return (
                    <div className="col">
                      <MaestroCard List={list} key={list.id}></MaestroCard>
                    </div>
                  );
              }
              break;
              case "Mentors":
              {
                if (list.interest === "ARTIST")
                  return (
                    <div className="col">
                      <MaestroCard List={list} key={list.id}></MaestroCard>
                    </div>
                  );
              }
              break;
              case "Mental Health Experts":
              {
                if (list.interest === "WRITER")
                  return (
                    <div className="col">
                      <MaestroCard List={list} key={list.id}></MaestroCard>
                    </div>
                  );
              }
              break;
              case "All":
              {
                  return (
                    <div className="col">
                      <MaestroCard List={list} key={list.id}></MaestroCard>
                    </div>
                  )
              }
              break;
          }
        })}

        {/* <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div> */}
      </div>
    </div>
  );
}

export default AllMaestro;
