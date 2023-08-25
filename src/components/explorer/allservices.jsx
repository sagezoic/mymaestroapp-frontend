import axios from 'axios';
import React, { useState,useEffect } from 'react'
import config from '../../config';


function AllServices() {
    const [allserviceList , setServiceList] = useState([]);

    useEffect(() => {
        getAllService();
    },[]);
  
    const getAllService=()=>{
        axios
        .get(config.serverURL + '/service/getallservice')
        .then((response)=>{
            console.log(response);
            setServiceList(response.data.data);
            console.log(allserviceList)
         })
            .catch((error) => {
                console.log(error);
        });
    }; 

  
    return (
    

  <div>
       <div className="container">
      <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
        <div className="card booking-card v-2 mt-2 mb-4 rounded-bottom">
          <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/Photos/Others/water-lily.jpg" className="img-fluid" alt="Gallery" />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title font-weight-bold"><a href="/">Fine Art Pictures Gallery</a></h4>
            <ul className="list-unstyled list-inline mb-2">
              <li className="list-inline-item me-0"><i className="fa fa-star fa-xs"></i></li>
              <li className="list-inline-item me-0"><i className="fa fa-star fa-xs"></i></li>
              <li className="list-inline-item me-0"><i className="fa fa-star fa-xs"></i></li>
              <li className="list-inline-item me-0"><i className="fa fa-star fa-xs"></i></li>
              <li className="list-inline-item"><i className="fa fa-star-half-alt fa-xs"></i></li>
            </ul>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <hr className="my-4" />
            <p className="h5 font-weight-bold mb-4">Opening hours</p>
            <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
              <li>Tuesday - Friday</li>
              <li>
                <div className="chip ms-3">10:00AM</div>
              </li>
              <li>
                <div className="chip ms-0 me-0">6:00PM</div>
              </li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
              <li>Saturday - Sunday</li>
              <li>
                <div className="chip ms-3">9:00AM</div>
              </li>
              <li>
                <div className="chip ms-0 me-0">7:00PM</div>
              </li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-start align-items-center mb-0">
              <li>Monday</li>
              <li>
                <div className="chip ms-3">CLOSED</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default AllServices