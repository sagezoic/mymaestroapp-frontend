import { colors } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import config from '../../config'
import { Link, useHistory } from 'react-router-dom'


function Aftersignup1() {
  const [formData, setFormData] = useState({
    email:sessionStorage.getItem("regUserEmail"),
    userRole: ''
  })
  let history = useHistory();

  const addRole = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post(config.serverURL + `/users/role`,formData)
      .then((response) => {
        console.log(response.data);
        history.push("/signup/aftersignup2");
      })
      .catch((error) => {
        console.error("Error in Added role", error)
      });
  }

  const handleInputChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData.userRole);
  }


    return (
      <div className="container col-md-4 mt-5">
        <div >
          <h1>Hello there!</h1>
          <h4>Almost done...</h4>
        </div>
        <br />
        <h5>How do you want to use maestro app</h5>
        <form>
          <div class="btn-toolbar d-block" aria-label="Basic checkbox toggle button group">
            <div className="row">
              <div className="col-md-12 mb-1">
                <input type="radio" className="btn-check" name='userRole' id="btnradio1" autoComplete="off" value="ROLE_MAESTRO" onChange={handleInputChange}
                />
                <label className="btn btn-outline-danger w-100" htmlFor="btnradio1">
                  MAESTRO
                </label>
              </div>
              <br /><br /><br />
              <div className="col-md-12 mb-1">
                <input type="radio" className="btn-check" name='userRole' id="btnradio2" autoComplete="off" value="ROLE_EXPLORER" onChange={handleInputChange}
                />
                <label className="btn btn-outline-danger w-100" htmlFor="btnradio2">
                  EXPLORER
                </label>
              </div>
              <br /><br /><br />

              <button className='btn btn-primary'  onClick={addRole } >Next</button>

            </div>

          </div>

        </form>
      </div>
    );
  }

  export default Aftersignup1