import React, { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import config from "../../config";
import { toast } from 'react-toastify' 


function Calendar() {

  const history = useHistory();

  const [dates, setDates] = useState({
    serviceId: "",
    firstDate: "",
    secondDate: "",
    thirdDate: "",
    fourthDate: "",
    fifthDate: "",
    sixthDate: "",
    seventhDate: "",
  });

  const [serviceList, setServiceList] = useState([]);

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDates((prevDates) => ({
      ...prevDates,
      [name]: value,
    }));
  };

  useEffect(() => {
    getAllService();
  }, []);

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const getAllService = () => {
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

  const updateDate = () => {
    const token = sessionStorage.getItem("jwt");
    if (token != null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .post(config.serverURL + `/date/add`, dates)
      .then((response) => {
        // get the data returned by server
        const result = response.data.data;
        debugger;
        // check if user's authentication is successfull
        if (result === "error") {
          toast.error("Something went wrong!");
        } else {
          toast.success("Successfully added available dates!");
          history.push("/maestro/dashboard/")
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the formData to the backend API
    updateDate();
    setDates({
      serviceId: "",
      firstDate: "",
      secondDate: "",
      thirdDate: "",
      fourthDate: "",
      fifthDate: "",
      sixthDate: "",
      seventhDate: "",
    });
  };

  return (
    <div>
      <Link to="/maestro/dashboard/services">
        <button
          className="btn btn-dark btn-custom mt-3"
          style={{ marginLeft: "2rem" }}
        >
          Back
        </button>
      </Link>
      <div className="container mt-5 card col-md-6">
        <h2 className="mb-4" style={{ marginTop: "1.5rem" }}>
          Calendar
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select
              className="form-control"
              name="serviceId"
              value={dates.serviceId}
              onChange={handleDateChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceList.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.serviceTitle}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="priceToken" className="form-label">
              Date and Time
            </label>
            <div className="row g-3">
              <div className="col">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="firstDate"
                  value={dates.firstDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="col">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="secondDate"
                  value={dates.secondDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="col">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="thirdDate"
                  value={dates.thirdDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="col">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fourthDate"
                  value={dates.fourthDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="col">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fifthDate"
                  value={dates.fifthDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="col">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="sixthDate"
                  value={dates.sixthDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="col-md-4">{/* First div */}</div>
              <div className="col-md-4">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="seventhDate"
                  value={dates.seventhDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={{ marginBottom: "1.5rem" }}
          >
            Set Dates
          </button>
        </form>
      </div>
    </div>
  );
}

export default Calendar;
