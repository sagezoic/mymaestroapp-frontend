import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";
import ServiceCard from "./servicecard";
import axios from "axios";
import config from "../../config";

function Services() {
  const [serviceList, setServiceList] = useState([]);

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");

  const [searchText, setSearchText] = useState("All");

  const OnSearch = (args) => {
    setSearchText(args);
  };

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  useEffect(() => {
    getService();
  }, []);

  const getService = () => {
    axios
      .get(config.serverURL + `/service/${userId}`)
      .then((response) => {
        //debugger;
        console.log(response);
        setServiceList(response.data.data);
        console.log(serviceList);
        //debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (serviceId) => {
    // Perform the delete action
    const requestData = {
      id: serviceId,
      serviceTitle: "",
      servicetype: "ONETOONECALL",
      priceToken: 0,
      timePeriod: 0,
      description: "",
      userId: userId,
      serviceCategory: "SOFTWARE_ENGINEERS",
    };

    //debugger;
    axios
      .request({
        method: "DELETE",
        url: config.serverURL + `/service/delete`,
        data: requestData,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        //debugger;
        if ((response.data = "success")) {
          getService();
          //debugger;
          console.log("success");
        } else console.log("card deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-3 mt-4">
      <div className="container-fluid">
        <div className="card p-3">
          <h2 className="fs-2">Services</h2>
          <div className="mt-10 d-flex">
            <button
              className={`btn btn-dark btn-custom me-4 ${searchText === "All" ? "selected" : ""}`}
              onClick={() => OnSearch("All")}
            >
              All
            </button>
            <button
              className={`btn btn-dark btn-custom me-4 ${searchText === "OneToOneCall" ? "selected" : ""}`}
              onClick={() => OnSearch("OneToOneCall")}
            >
              1:1 Call
            </button>
            <button
              className={`btn btn-dark btn-custom me-4 ${searchText === "PriorityDM" ? "selected" : ""}`}
              onClick={() => OnSearch("PriorityDM")}
            >
              Priority DM
            </button>
            <button
              className={`btn btn-dark btn-custom ${searchText === "OnlineSession" ? "selected" : ""}`}
              onClick={() => OnSearch("OnlineSession")}
            >
              Online Session
            </button>
            <div className="ms-auto">
              <Link to="/maestro/dashboard/addservice">
                <button className="btn btn-dark btn-custom-sq">
                  +Add Services
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="mt-2 card mb-4">
          <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
            {serviceList.map((list) => {
              debugger;
              switch (searchText) {
                case "OneToOneCall":
                  if (list.servicetype === "ONETOONECALL") {
                    debugger;
                    return (
                      <ServiceCard
                        List={list}
                        key={list.id}
                        handleDelete={handleDelete}
                      ></ServiceCard>
                    );
                  }
                  break;
                case "PriorityDM":
                  if (list.servicetype === "PRIORITYDM") {
                    return (
                      <ServiceCard
                        List={list}
                        key={list.id}
                        handleDelete={handleDelete}
                      ></ServiceCard>
                    );
                  }
                  break;
                case "OnlineSession":
                  if (list.servicetype === "ONLINESESSION") {
                    return (
                      <ServiceCard
                        List={list}
                        key={list.id}
                        handleDelete={handleDelete}
                      ></ServiceCard>
                    );
                  }
                  break;
                case "All":
                  return (
                    <ServiceCard
                      List={list}
                      key={list.id}
                      handleDelete={handleDelete}
                    ></ServiceCard>
                  );
                default:
                  break;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
