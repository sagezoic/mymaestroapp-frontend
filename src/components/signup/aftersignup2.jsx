import { colors } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import config from '../../config'
import { Link, useHistory } from 'react-router-dom'


function Aftersignup2() {

  const [formData, setFormData] = useState({
    email:sessionStorage.getItem("regUserEmail"),
    firstName:'',
    lastName:'',
    dob:''
  })
  let history = useHistory();

  const handleInputChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    console.log(formData.firstName);
    console.log(formData.lastName);
    console.log(formData.dob);
  }

  const addNameandDob = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post(config.serverURL + `/users/details`,formData)
      .then((response) => {
        console.log(response.data);
        history.push("/signup/aftersignup3");
      })
      .catch((error) => {
        console.error("Error in adding basic details ", error)
      });
  }


  return (
    <div className="container col-md-4 mt-5">
    <div>
        <h1>Hello there!</h1>
        <h4>Almost done...</h4>
    </div>
    <br />
    <form>
        <div className="row">
            <div className="col-md-10 mb-3">
                <h5>First Name</h5>
                <input type="text" className="form-control" name="firstName" placeholder='First Name' value={formData.firstName} required onChange={handleInputChange}/>
            </div>
            <div className="col-md-10 mb-3">
                <h5>Last Name</h5>
                <input type="text" className="form-control" name="lastName" placeholder='Last Name' value={formData.lastName} required onChange={handleInputChange}/>
            </div>
            <div className="col-md-10 mb-4">
                <h5>Date of Birth</h5>
                <input type="date" className="form-control" name="dob" value={formData.dob} required onChange={handleInputChange}/>
            </div>
            {/* <div className="btn-toolbar d-block" aria-label="Basic checkbox toggle button group">
    <div className="btn-group me-2 col-md-8 mb-4">
        <input type="radio" className="btn-check" name="experties" id="btnradio1" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
            1:1 Session
        </label>
    </div>
    <div className="btn-group me-2 col-md-8 mb-4">
        <input type="radio" className="btn-check" name="experties" id="btnradio2" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Group Session
        </label>
    </div>
    <div className="btn-group me-2 col-md-8 mb-4" >
        <input type="radio" className="btn-check" name="experties" id="btnradio3" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Q & A
        </label>
    </div>
</div> */}

            <div className="col-md-12  mb-1">
                <button className="btn btn-primary" onClick={addNameandDob}>Next</button>
            </div>
        </div>
    </form>
</div>

  )
}

export default Aftersignup2