import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import config from '../../config'
import { Link, useHistory } from 'react-router-dom';
import { toast } from "react-toastify";


function Aftersignup3() {
  const [formData, setFormData] = useState({
    email:sessionStorage.getItem("regUserEmail"),
    interest:'',
  })
  let history = useHistory();
  
  const handleInputChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const addIntrest = (e)=>{
    debugger;
    e.preventDefault();
    axios
    .post(config.serverURL + `/users/interest`,formData)
    .then((response)=>{
      console.log(response.data);  
      toast.success("Welcome to My Maestro Meetup");
      history.push("/login")
    })
    .catch((error) => {
      console.error("Error in adding interest of user")
    });

  }

  return (
    <div className="container col-md-4 mt-5">
        <div >    
          <h1>Hello there!</h1>
          <h4>Almost done...</h4>
        </div>
<br />
  <form>
        <div>
              <br />
              <h5>Select your Interest </h5>
              
              <div class="btn-toolbar d-block" aria-label="Basic checkbox toggle button group">
                <div className="row">
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" value="TRAVELLER" name='interest' id="btnradio1" autoComplete="off"  onChange={handleInputChange} />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio1">
                    TRAVELLER 
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" value="SINGER"  name='interest' id="btnradio2"  autoComplete="off" onChange={handleInputChange}/>
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio2">
                    SINGER
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" value="WRITER"  name='interest' id="btnradio3" autoComplete="off" onChange={handleInputChange}/>
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio3">
                    WRITER
                    </label>
                  </div>
                  <br /><br /><br />
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" value="ARTIST"  name='interest' id="btnradio4" autoComplete="off" onChange={handleInputChange} />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio4">
                    ARTIST
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" value="DANCER"  name='interest' id="btnradio5" autoComplete="off"onChange={handleInputChange} />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio5">
                    DANCER
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" value="DEVELOPER"  name='interest' id="btnradio6" autoComplete="off" onChange={handleInputChange} />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio6">
                     DEVELOPER                     
                     </label>
                  </div>
                 <br /><br /><br />
                 <button className="btn btn-primary" onClick={addIntrest}>Submit</button>              
              </div>
              </div>
            </div>
  </form>

</div>
  )
}

export default Aftersignup3