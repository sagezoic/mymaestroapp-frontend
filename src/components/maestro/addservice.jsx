import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function Addservice() {
  const [selectedService, setSelectedService] = useState('');
  
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div>
      <Link to='/maestro/dashboard/services'>
        <button className="btn btn-dark btn-custom">
            Back
        </button>
      </Link>
      <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className='card'>
                        <div className="card-body">
                            <h3 className="card-title text-center">Service</h3>

                            <div id='serviceForm'>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Select a Service</label>
                                        <br />
                                        <button
                                          type="button"
                                          className={`btn btn-primary mx-2 ${selectedService === '1:1 CALL' ? 'active' : ''}`}
                                          onClick={() => handleServiceSelect('1:1 CALL')}
                                        >
                                          1:1 CALL
                                        </button>
                                        <button
                                          type="button"
                                          className={`btn btn-primary mx-2 ${selectedService === 'PRIORITY DMS' ? 'active' : ''}`}
                                          onClick={() => handleServiceSelect('PRIORITY DMS')}
                                        >
                                          PRIORITY DMS
                                        </button>
                                        <button
                                          type="button"
                                          className={`btn btn-primary mx-2 ${selectedService === 'ONLINE' ? 'active' : ''}`}
                                          onClick={() => handleServiceSelect('ONLINE')}
                                        >
                                          ONLINE
                                        </button>
                                    </div>
                                    {selectedService==='1:1 CALL' && (
                                      <div className="mb-3">
                                          <label className="form-label">Custom Duration(minutes)</label>
                                          <input type="number" className="form-control" id="Appointment-Duration" min="0" max="60" />
                                          <br></br>
                                          <label className="form-label">Amount</label>
                                          <input type="number" className="form-control" id="Amount" />
                                          <br></br>
                                          <div>
                                           <button type="submit" className="btn btn-primary d-flex justify-content-center mx-auto">Submit</button>
                                        </div>
                                      </div>
                                    )}
                                    {selectedService==='PRIORITY DMS' && (
                                      <div className="mb-3">
                                          {/* <label className="form-label">Custom Duration(minutes)</label>
                                          <input type="number" className="form-control" id="Appointment-Duration" min="0" max="60" />
                                          <br></br> */}
                                          <label className="form-label">Amount</label>
                                          <input type="number" className="form-control" id="Amount" />
                                          <br></br>
                                          <div>
                                           <button type="submit" className="btn btn-primary d-flex justify-content-center mx-auto">Submit</button>
                                        </div>
                                      </div>
                                    )}
                                    {/* ... other form fields ... */}
                                    
                                    {/* ... other buttons ... */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Addservice