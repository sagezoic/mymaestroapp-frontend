import axios from "axios";
import React, { useState, useEffect } from "react";
import config from "../../config";
import { Link } from "react-router-dom";
import Filter from "../filter/filter";
import '../../css/allservices.css'

const experience = [
  { min: 0, max: 1 },
  { min: 2, max: 3 },
  { min: 4, max: 5 }
];

function AllServices() {
  const [allserviceList, setServiceList] = useState([]);

  useEffect(() => {
    getAllService();
  }, []);

  const token = sessionStorage.getItem("jwt");

  if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const getAllService = () => {
    axios
      .get(config.serverURL + "/service/getallservice")
      .then((response) => {
        console.log(response);
        setServiceList(response.data.data);
        console.log(allserviceList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(allserviceList);

  const serviceRequest = ()=>{
    console.log("Inside the service request")
  }

  const ServiceData = JSON.parse(localStorage.getItem("item")) || [];
  const [filteredServices, setFilteredServices] = useState([...ServiceData, ...allserviceList]);
  const [searchterm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    debugger;
    setFilteredServices(allserviceList);
  }, [allserviceList]);

   function handleJobFilter(event) {
    console.log("inside handle job filter")
  //   const value = event.target.innerText;
  //   event.preventDefault();
  //   setFilteredJobs(
  //     allserviceList.filter((service) => {
  //       return service.serviceTitle === value;
  //     })
  //   );
   }

  function saveClick(id, logo, company, position, location, posted) {
    window.localStorage.setItem(
      "",
      JSON.stringify(id, logo, company, position, location, posted)
    );
    window.localStorage.setItem("allserviceList", ServiceData);
    console.log(ServiceData);
  }

  const searchEvent = (event) => {
    const data = event.target.value;
    setSearchTerm(data);
    if (searchterm !== "" || searchterm.length > 2) {
      const filterData = allserviceList.filter((item) => {
        if (item) {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchterm.toLowerCase());
        } else {
          return 0;
        }
      });
      setFilteredServices(filterData);
    } else {
      setFilteredServices(allserviceList);
    }
  };

  function handleExperienceFilter(checkedState) {
  console.log("inside handle ratings")
//   let filters = [];
//   checkedState.forEach((item, index) => {
//     if (item === true) {
//       const filterS = allserviceList.filter((service) => {
//         return (
//           service.experience >= experience[index].min &&
//           service.experience <= experience[index].max
//         );
//       });
//       filters = [...filters, ...filterS];
//     }
//     setFilteredJobs(filters);
//   });
  }
  
  console.log(filteredServices);
  debugger;
  return (
    <div className="container">
      <div className="jobs-for-you">
        <div className="service-background">
          <div className="title ms-4">
            <h2>Get guidance from best & experienced maestro</h2>
          </div>
        </div>
        <div className="service-section">
          <div className="service-page">
            {filteredServices.map(
              (service) => {
                debugger;
                return (
                  <div className="service-list">
                    <div className="service-card">
                      <div className="service-name">
                        <img
                          src={config.serverURL+`/users/finddp?path=`+service.dpUrl}
                          alt="logo"
                          className="service-profile"
                        />
                        <div className="service-detail">
                          <h4>{service.firstName+" "+service.lastName}</h4>
                          <h3>{service.serviceTitle}</h3>
                          <div className="category">
                            <p>{service.serviceCategory}</p>
                            <bAmount: <p>₹ {service.priceToken}</p>
                          </div>
                          <div>{service.description}</div>
                        </div>
                      </div>
                      <div className="service-button">
                          <button
                            className={`btn btn-dark btn-custom-sq me-4}`}
                            onClick={() => serviceRequest()}
                          >
                            <Link to="/explorer/reqservice" style={{textDecoration: "none"}}>Avail Service</Link>
                          </button>
                      
                        <div className="save-button">
                          <Link
                            to="/Jobs"
                            onClick={() => {
                              saveClick(
                                {
                                  service
                                },
                                setActive(!active)
                              );
                            }}
                          >
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <Filter
            setFilteredServices={setFilteredServices}
            handleJobFilter={handleJobFilter}
            handleExperienceFilter={handleExperienceFilter}
            searchEvent={searchEvent}
            experience={experience}
          />
        </div>
      </div>
    </div>
  );
}

export default AllServices;
