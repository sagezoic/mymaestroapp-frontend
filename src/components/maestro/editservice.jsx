import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import AuthHeader from '../../services/auth-header';
import { toast } from 'react-toastify' 
import config from '../../config'

function EditService() {

  const [selectedService, setSelectedService] = useState('');
  
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const postData=()=>{
    const token = localStorage.getItem('jwt')
    if (token != null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
          .post(config.serverURL + `/service`, formData)
          .then((response) => {
            // get the data returned by server
            const result = response.data
            //debugger;
            // check if user's authentication is successfull
            if (result === 'error') {
              toast.error('invalid details')
            } else {
              toast.success('successfully added courier details')
              ShowMessage("Successfully added service!");
              // navigate to the singin page
              //navigate('/customerHome')
            }
          })
          .catch((error) => {
            console.log('error')
            console.log(error)
          })
    }

  var ShowMessage = (msg)=>{
    setMessage(msg);
    setTimeout(() => {
                        setMessage("")
                    }, 3000);
 }

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    serviceTitle: '',
    servicetype: '',
    priceToken: '',
    userId: Number(localStorage.getItem('userId')), // Get user ID from localStorage
    serviceCategory: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the formData to the backend API
    console.log(formData);
    // Reset the form or navigate to a different page after submission
    postData();
    setFormData({
      serviceTitle: '',
      servicetype: '',
      priceToken: '',
      userId: Number(localStorage.getItem('userId')),
      serviceCategory: '',
      description: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
      <Link to='/maestro/dashboard/services'>
        <button className="btn btn-dark btn-custom mt-3" style={{marginLeft:"2rem"}}>
            Back
        </button>
      </Link>
      <div className="container mt-5 card col-md-6">
      <h2 className="mb-4" style={{marginTop:"1.5rem"}}>Edit Service</h2>
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
            <option value="SOFTWARE_ENGINEER">Software Engineers</option>
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
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description"
            value={formData.description}
            onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginBottom:"1.5rem"}}>
          Edit Service
        </button>
        <div className='alert alert-info mb-3' style={{color:"green"}}>
          {message}
        </div>
      </form>
    </div>
    </div>
  )
}

export default EditService