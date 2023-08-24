import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../../config";

function EditService() {

  const history = useHistory();

  const [selectedService, setSelectedService] = useState("");
  const [serviceList, setServiceList] = useState();

  //const result = null;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get("id");

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");
  
  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const [formData, setFormData] = useState({
    id:"",
    serviceTitle: "",
    servicetype: "",
    priceToken: "",
    timePeriod: "",
    description: "",
    userId: Number(userId), // Get user ID from localStorage
    serviceCategory: ""
  });

  {/*setFormData(
    {
      id: serviceList.id,
      serviceTitle: serviceList.serviceTitle,
      servicetype: serviceList.servicetype,
      priceToken: serviceList.priceToken,
      timePeriod: serviceList.timePeriod,
      description: serviceList.description,
      userId: Number(userId),
      serviceCategory: serviceList.serviceCategory
    }
  );*/}

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    getService();
  }, []);

  const getService = () => {
    axios
      .get(config.serverURL + `/service/get/${serviceId}`)
      .then((response) => {
        debugger;
        console.log(response);
        setServiceList(response.data.data);
        console.log(serviceList);
        setFormData(response.data.data);
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editData = () => {
    const token = sessionStorage.getItem("jwt");
    if (token != null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .put(config.serverURL + `/service/edit`, formData)
      .then((response) => {
        // get the data returned by server
        const result = response.data.data;
        debugger;
        // check if user's authentication is successfull
        if (result === "error") {
          toast.error("Something went wrong!");
        } else {
          toast.success("Successfully edited service!");
          history.push("/maestro/dashboard/services")
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    editData();
    // Reset the form or navigate to a different page after submission
    setFormData({
      id:"",
      serviceTitle: "",
      servicetype: "",
      priceToken: "",
      timePeriod: "",
      description: "",
      userId: Number(userId),
      serviceCategory: ""
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
      {/*{JSON.stringify(serviceList, null, 2)}
      {JSON.stringify(formData, null, 2)}*/}
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
          Edit Service
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="priceToken" className="form-label">
              Duration (mins)
            </label>
            <input
              type="number"
              className="form-control"
              id="timePeriod"
              name="timePeriod"
              value={formData.timePeriod}
              onChange={handleInputChange}
              required
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "1.5rem" }}
          >
            Edit Service
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditService;
