import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
//import { useUserContext } from "../context/userContext";


function Home() {
  const userId = sessionStorage.getItem("userId");
  const [serviceList, setServiceList] = useState([]);
  const [serviceRequestList, setServiceRequestList] = useState([]);
  const [serviceCount, setServiceCount] = useState(0);
  const [serviceRequestCount, setServiceRequestCount] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [user, setUser] = useState([]);
  const [userList, setUserList] = useState([]);
  //const { user, updateUser } = useUserContext();

  useEffect(() => {
    userDetails();
    getAllServices();
  }, []);
  
  useEffect(() => {
    getAllServiceCount();
  }, [serviceList])

  const getAllServices = () => {
    axios
      .get(config.serverURL + `/service/${userId}`)
      .then((response) => {
        console.log(response);
        setServiceList(response.data.data);
        console.log(serviceList);
        setServiceCount(serviceCount + response.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getAllServiceCount = () => {
    for (let i = 0; i < serviceList.length; i++) {
      getAllBookingListCount(serviceList[i].id)
    }
  }

  const getAllBookingListCount = (serviceId) => {
    debugger;
    axios
      .get(config.serverURL + `/servicerequest/get/${serviceId}`)
      .then((response) => {
        console.log(response);
        setServiceRequestList([...serviceRequestList, ...response.data.data]);
        console.log(serviceRequestList);
        setServiceRequestCount(serviceRequestCount + response.data.data.length);
        debugger
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const userDetails = () => {
    axios
      .get(config.serverURL + `/users/${userId}`)
      .then((response) => {
        console.log(response);
        setTokens(response.data.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="px-3">
      <div className="card mt-4 ms-3 " style={{ backgroundColor: "#FCFCFE" }}>
        <div className="container-fluid">
          <div className="row g-3 my-2">
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>

                  <h3>{serviceRequestCount}</h3>
                  <p className="fs-5">Bookings</p>

                </div>
                <i className="bi bi-telephone p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>{serviceCount}</h3>
                  <p className="fs-5">Services</p>
                </div>
                <i className="bi bi-card-list p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>{tokens}</h3>
                  <p className="fs-5">Wallet</p>
                </div>
                <i className="bi bi-wallet p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>10%</h3>
                  <p className="fs-5">Increase</p>
                </div>
                <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
              </div>
            </div>
          </div>

          <table class="table caption-top bg-white rounded mt-2 border">
            <caption className="text-black fs-4">Recent Bookings</caption>

            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Service Title</th>
                <th scope="col">Type</th>
                <th scope="col">Slot Date & Time</th>
                <th scope="col">Remark</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
            {serviceRequestList.length > 0 ? (
            serviceRequestList.map((list, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{list.firstName+" "+list.lastName}</td>
                <td>{list.serviceTitle}</td>
                <td>{list.serviceType}</td>
                <td>{list.slotDate}</td>
                <td>{list.description}</td>
                <td>{list.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
