import React, { useState } from 'react'
import {Link} from 'react-router-dom';

function Addservice() {
  
  const [formData, setFormData] = useState({
    serviceTitle: '',
    servicetype: 'ONETOONECALL',
    priceToken: '',
    userId: Number(localStorage.getItem('userId')), // Get user ID from localStorage
    serviceCategory: 'SOFTWARE_ENGINEERS',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the formData to the backend API
    console.log(formData);
    // Reset the form or navigate to a different page after submission
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
  };

  return (
    <div>
      <Link to='/maestro/dashboard/services'>
        <button class="btn btn-dark btn-custom mt-3" style={{marginLeft:"2rem"}}>
            Back
        </button>
      </Link>
      <div className="container mt-5 card col-md-6">
      <h2 className="mb-4" style={{marginTop:"1.5rem"}}>Add Service</h2>
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
            <option value="ONETOONECALL">1:1 Call</option>
            <option value="PRIORITYDM">Priority DM</option>
            <option value="ONLINESESSION">Online Session</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="servicetype" className="form-label">
          Service Category
          </label>
          <select
            className="form-select"
            id="servicetype"
            name="servicetype"
            value={formData.serviceCategory}
            onChange={handleInputChange}
          >
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
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description"
            value={formData.description}
            onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginBottom:"1.5rem"}}>
          Add Service
        </button>
      </form>
    </div>
    </div>
  )
}

export default Addservice