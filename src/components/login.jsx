import React, { useState } from 'react'

function Login() {

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className='card'>
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>

                            <div id='loginForm'>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="LoginInputEmail" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="LoginInputPassword"/>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="LoginCheck">Remember me</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary d-flex justify-content-center mx-auto">Submit</button>
                                    <div className="text-center mt-3 mb-3">
                                        <p>Or log in with:</p>
                                        <a href="#" className="btn btn-icon mx-1"><i class="fab fa-google fa-2x" style={{color:"#dd4b39"}}></i></a>
                                        <a href="#" className="btn btn-icon mx-1"><i className="fab fa-twitter fa-2x" style={{color: "#55acee"}} ></i></a>
                                        <a href="#" className="btn btn-icon mx-1"><i className="fab fa-linkedin-in fa-2x" style={{color :"#0082ca"}}></i></a>
                                    </div>
                                    <div className="text-center mt-3 mb-3">
                                        <a href="#" className='link'>Forget Password?</a>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login