import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

function Bookings() {
  const userId = sessionStorage.getItem("userId");
  const [serviceList, setServiceList] = useState([]);
  const [serviceRequestList, setServiceRequestList] = useState([]);

  useEffect(() => {
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
        debugger
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="card mt-4 ms-4">
      <div className="container mt-5">
        <h1 className="mb-4">All Bookings</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Booking ID</th>
              <th>Name</th>
              <th>Slot Date & Time</th>
              <th>Service Title</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {serviceRequestList.length > 0 ? (
            serviceRequestList.map((list, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{list.id}</td>
                <td>{list.firstName+" "+list.lastName}</td>
                <td>{list.slotDate}</td>
                <td>{list.serviceTitle}</td>
                <td>{list.amount}</td>
                <td>{list.status?"Completed":"Pending"}</td>
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
  );
}

export default Bookings;
