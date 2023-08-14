import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Signup() {

  return (
    <div className="container mt-5 col-md-10">
      <div className="row justify-content-between">
        <div className="col-md-6">
          {/* Content for the left column */}
          <div className="card" style={{ height: "87vh"}}>
            <div className="card-body" style={{ position: "relative" }}>
              <div id='TopPart'>
                <h3><b>Join the Community</b></h3>
                <h4><b>MyMaestro</b></h4>
              </div>
              <div className="BottomPart mt-5">
                <div className="row">
                  <div className='innerLeft col-md-6'>
                    <div>
                      <span>If you already have an account </span>
                      <span>You can <Link to="/login" class="nav-link active" aria-current="page" style={{color:"#4D47C3"}}>Login here !</Link></span>
                    </div>
                    <div className="mt-5">
                      <p>
                        Lorem ipsum dolor sit amet consectetur 
                        dolor consequuntur facilis doloremque provident magnam?
                       </p>
                    </div>
                    <div className='mt-5'>
                      <ul className='list-group'>
                        <li className="list-group-item">
                          <span style={{color:"#BE1200"}}><b>Manage</b></span> <span>and monetise your time</span>
                        </li>
                        <li className="list-group-item">
                          <span style={{color:"#BE1200"}}><b>Connect</b></span> <span>with your followers</span>
                        </li>
                        <li className="list-group-item">
                          <span style={{color:"#BE1200"}}><b>Share</b></span> <span>your knowledge</span>
                        </li>
                        <li className="list-group-item">
                          <span style={{color:"#BE1200"}}><b>Showcase</b></span> <span>your testimonials</span>
                        </li>
                        <li className="list-group-item">
                          <span style={{color:"#BE1200"}}><b>Start</b></span> <span>your side hustle</span> 
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='innerRight col-md-6'>
                    <img src={require('../../images/signup/saly.png')} class="img-fluid" style={{
                      position: "absolute",
                      right: "0",
                      bottom: "0"
                    }} alt="signup image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
        {/* Content for the right column */}
        <div className='signupForm'>
              <div className="card" style={{ height: "87vh" }}>
                <div className="card-body">
                  <h3 className="card-title text-center">Sign Up</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact" className="form-label">Contact Number</label>
                      <input type="tel" className="form-control" id="contact" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <div className="text-center mt-3">
                      <p>Or continue with:</p>
                      <a href="#" className="btn btn-icon mx-1"><i class="fab fa-google fa-2x" style={{color:"#dd4b39"}}></i></a>
                      <a href="#" className="btn btn-icon mx-1"><i className="fab fa-twitter fa-2x" style={{color: "#55acee"}} ></i></a>
                      <a href="#" className="btn btn-icon mx-1"><i className="fab fa-linkedin-in fa-2x" style={{color :"#0082ca"}}></i></a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup