import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import AuthHeader from "../../services/auth-header";
import { toast } from "react-toastify";
import config from "../../config";

function ReqService() {
  const [formData, setFormData] = useState({
    serviceTitle: "",
    servicetype: "",
    priceToken: "",
    timePeriod: "",
    description: "",
    userId: Number(sessionStorage.getItem("userId")), // Get user ID from localStorage
    serviceCategory: "",
    description: "",
  });
  const [serviceList, setServiceList] = useState();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get("id");
  debugger;
  const history = useHistory();
  const userId = sessionStorage.getItem("userId");

  const [availableDates, setAvailableDates] = useState([]);
  const [serRequestData, setSerRequestData] = useState({
    slotDate: "",
    description: "",
    maestroUserId: "",
    explorerUserId: Number(userId),
    serviceId: "",
    status: true,
  });

  // const [] = useState({
  //   slotDate: "",
  //   description: "",
  //   maestroUserId: 0,
  //   explorerUserId: 0,
  //   serviceId: 0,
  //   transactionId: "",
  // });

  useEffect(() => {
    getService();
    getAvailDates();
  }, []);

  const token = localStorage.getItem("jwt");
  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const getService = () => {
    axios
      .get(config.serverURL + `/service/get/${serviceId}`)
      .then((response) => {
        debugger;
        console.log(response);
        setServiceList(response.data.data);
        setFormData(response.data.data);
        console.log(formData);
        setSerRequestData({
          slotDate: "",
          description: "",
          maestroUserId: response.data.data.userId,
          explorerUserId: Number(userId),
          serviceId: response.data.data.id,
          status: true,
        });
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAvailDates = () => {
    axios
      .get(config.serverURL + `/date/${serviceId}/getalldate`)
      .then((response) => {
        debugger;
        console.log(response);
        setAvailableDates(response.data.data);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSerRequestChange = (e) => {
    const { name, value } = e.target;
    setSerRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const postData = () => {
    const token = sessionStorage.getItem("jwt");
    
    if (token != null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    console.log(serRequestData);
    debugger;
    axios
      .post(config.serverURL + `/servicerequest/add`, serRequestData)
      .then((response) => {
        // get the data returned by server
        const result = response.data;
        debugger;
        // check if user's authentication is successfull
        if (result === "error") {
          toast.error("invalid details");
        } else {
          //toast.success("Success!");
          //Navigate to services home
          console.log("Service request added!");
          const serRequest = response.data.data;
          history.push({pathname: "/explorer/transaction", 
                        state: {serRequest, serviceList}});
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;

    // Reset the form or navigate to a different page after submission
    postData();
    setFormData({
      serviceTitle: "",
      servicetype: "",
      priceToken: "",
      timePeriod: "",
      userId: Number(localStorage.getItem("userId")),
      serviceCategory: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Link to="/explorer/allservices">
        <button
          className="btn btn-dark btn-custom mt-3"
          style={{ marginLeft: "2rem" }}
        >
          Back
        </button>
      </Link>
      <div className="container mt-5 card col-md-6">
        <h2 className="mb-4" style={{ marginTop: "1.5rem" }}>
          Avail Service
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="serviceTitle" className="form-label">
              Service Title
            </label>
            <input
              type="text"
              className="form-control"
              id="serviceTitle"
              name="serviceTitle"
              value={formData.serviceTitle}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="servicetype" className="form-label">
              Service Type
            </label>
            <select
              className="form-select"
              id="servicetype"
              name="servicetype"
              value={formData.servicetype}
              onChange={handleInputChange}
              disabled
            >
              <option value="">Select</option>
              <option value="ONETOONECALL">1:1 Call</option>
              <option value="PRIORITYDM">Priority DM</option>
              <option value="ONLINESESSION">Online Session</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="serviceCategory" className="form-label">
              Service Category
            </label>
            <select
              className="form-select"
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleInputChange}
              disabled
            >
              <option value="">Select</option>
              <option value="SOFTWARE_ENGINEERS">Software Engineers</option>
              <option value="DESIGNERS">Designers</option>
              <option value="MENTORS">Mentors</option>
              <option value="CREATORS">Creators</option>
              <option value="MENTAL_HEALTH">Mental Health Experts</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="priceToken" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="priceToken"
              name="priceToken"
              value={formData.priceToken}
              onChange={handleInputChange}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              disabled
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="slotDate" className="form-label">
              Booking Date
            </label>{" "}
            <select
              className="form-select"
              name="slotDate"
              value={serRequestData.slotDate}
              onChange={handleSerRequestChange}
            >
              <option value="" disabled>
                Select an available date
              </option>
              {availableDates.map((date, index) => {
                const dateProperties = Object.keys(date).filter(
                  (prop) => prop !== "serviceId" && prop !== "id" && date[prop]
                );
                debugger;
                return dateProperties.map((dateProp, index) => (
                  <option key={index} value={date[dateProp]}>
                    {new Date(date[dateProp]).toLocaleString()}{" "}
                    {/* Format the date as needed */}
                  </option>
                ));
                // <option key={index} value={date.firstDate}>
                //   {new Date(date.firstDate).toLocaleString()}{" "}
                //   {/* Format the date as needed */}
                // </option>
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Remarks*
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              value={serRequestData.description}
              onChange={handleSerRequestChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "1.5rem" }}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReqService;
