import React, {useState, useEffect} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { useUserContext } from '../components/context/userContext';
import { toast } from "react-toastify";


function Transaction() {
  const location = useLocation();
  const { serRequest, serviceList} = location.state;
  const { user, updateUser, logout } = useUserContext();
  const [token, setToken] = useState();
  debugger;
  const history = useHistory();

  const [formData, setFormData] = useState({
      "amount": 0,
      "senderUserId": Number(sessionStorage.getItem("userId")),
      "reciverUserId": 0,
      "paymentMethod": "CREADITCARD",
      "serviceId": 0,
      "serviceRequestId": 0
  });

  useEffect(() => {
    console.log("Inside the use effect.")
    setFormData({
        amount:serviceList.priceToken,
        senderUserId: Number(sessionStorage.getItem("userId")),
        reciverUserId: serviceList.userId,
        paymentMethod: "CREADITCARD",
        serviceId: serviceList.id,
        serviceRequestId: serRequest.id
      })
  }, []);

  useEffect(() => {
    //getFeeds().then((data) => setFeeds(data));
    debugger;
    if (user!=null){ 
      setToken(user.userDetails.token);
    }
  }, [user]);

  const postData = () => {
    const token = sessionStorage.getItem("jwt");
    if (token != null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    debugger;
    axios
      .post(config.serverURL + `/transaction/add`, formData)
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
          debugger;
          console.log("Payment success!");
          history.push("/explorer/allservices");
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
      {JSON.stringify(serRequest, null, 2)}
      {JSON.stringify(serviceList, null, 2)}

      <Link to="/explorer/allservices">
      </Link>
      <div className="container mt-5 card col-md-6">
        <h2 className="mb-4" style={{ marginTop: "1.5rem" }}>
          Payment
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
              value={serviceList.serviceTitle}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="serviceTitle" className="form-label">
              Total Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="serviceTitle"
              name="serviceTitle"
              value={serviceList.priceToken}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="servicetype" className="form-label">
              Payment Method
            </label>
            <select
              className="form-select"
              id="servicetype"
              name="servicetype"
              value="WALLET"
              onChange={handleInputChange}
              disabled
            >
              <option value="">Select</option>
              <option value="CREADITCARD">Credit Card</option>
              <option value="DEBITCARD">Debit Card</option>
              <option value="WALLET">Wallet</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="serviceTitle" className="form-label">
              Rupees in Wallet
            </label>
            <input
              type="text"
              className="form-control"
              id="serviceTitle"
              name="serviceTitle"
              value={token}
              required
              disabled
            />
          </div>
          <button
            className="btn btn-primary"
            style={{ marginBottom: "1.5rem" }}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transaction;
