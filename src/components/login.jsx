import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import config from '../config'
import axios from "axios";

function Login({ isLoggedIn, handleLogin }) {

    var history = useHistory();

    const [credentials, setCredentials] =
            useState({email:"", password:""});
                
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    var OnTextChanged = (args)=>{
      var copyOfcredentials = {...credentials};
      copyOfcredentials[args.target.name] =
          args.target.value;
      setCredentials(copyOfcredentials);
    }

    const Signin = () => {
      debugger;
     if (credentials.email.length === 0) {
        toast.error('please enter email')
      } else if (credentials.password.length === 0) {
        toast.error('please enter password')
      } else {
        // make the API call to check if user exists
        debugger;
        axios
          .post(`${config.serverURL}/login`, credentials,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {  debugger;
            // get the data returned by server
            const result = response.data
            // const result2= response
  
            // check if user's authentication is successfull
            if (result['status'] === 'Success') {
              console.log(result)
              // console.log(result.jwt)
              toast.success('Welcome to My Maestro Meetup')
              debugger;
              if(isChecked){
                window.localStorage.setItem("isLoggedIn", "true");
                window.localStorage.setItem("email", credentials.email);
                window.localStorage.setItem("jwt", result.jwt);
                window.localStorage.setItem("userId", 4)

                console.log(localStorage.jwt);

                localStorage['role'] = result.userRole
                console.log(localStorage.role);
            
                //Call the handleLogin function passed from the parent
                handleLogin();

                //console.log(sessionStorage.branchId)
                if(localStorage.role==="ROLE_MAESTRO")
                {
                  history.push('/maestro/feed')
                }else if(localStorage.role==="ROLE_EXPLORER")
                {
                  history.push('/explorer/feed')
                }
              }else{
                //sessionStorage['jwt'] = result.jwt
                //console.log(sessionStorage.token)
                // sessionStorage['role'] = result.role
                // console.log(sessionStorage.role)
                // sessionStorage['id'] = result.id
                
                window.sessionStorage.setItem("isLoggedIn", "true");
                window.sessionStorage.setItem("email", credentials.email);
                window.sessionStorage.setItem("jwt", result.jwt);
                window.sessionStorage.setItem("userId", result.id);
                
                console.log(sessionStorage.jwt);

                sessionStorage['role'] = result.userRole
                console.log(sessionStorage.role);
            
                //Call the handleLogin function passed from the parent
                handleLogin();

                //console.log(sessionStorage.branchId)
                if(sessionStorage.role==="ROLE_MAESTRO")
                {
                  history.push('/maestro/feed')
                }else if(sessionStorage.role==="ROLE_EXPLORER")
                {
                  history.push('/explorer/feed')
                }
              } 
          } else {
              toast.error('Invalid email or password')
              setCredentials({email:"", password:""})
          }
      })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
      }
    }

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className='card'>
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                              <div id='loginForm'>
                                <form onSubmit={Signin}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="LoginInputEmail" aria-describedby="emailHelp" 
                                        name="email" value={credentials.email} onChange={OnTextChanged}/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="LoginInputPassword" 
                                        name="password" value={credentials.password} onChange={OnTextChanged}/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"  
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}/>
                                        <label className="form-check-label" htmlFor="LoginCheck" >Remember me</label>
                                    </div>
                                    <button className="btn btn-primary d-flex justify-content-center mx-auto">Login</button>
                                    <div className="text-center mt-3 mb-3">
                                        <p>Or log in with:</p>
                                        <a href="#" className="btn btn-icon mx-1"><i className="fab fa-google fa-2x" style={{color:"#dd4b39"}}></i></a>
                                        <a href="#" className="btn btn-icon mx-1"><i className="fab fa-twitter fa-2x" style={{color: "#55acee"}} ></i></a>
                                        <a href="#" className="btn btn-icon mx-1"><i className="fab fa-linkedin-in fa-2x" style={{color :"#0082ca"}}></i></a>
                                    </div>
                                    <div className="text-center mt-3 mb-3">
                                        <a href="#" className='link'>Forget Password?</a>
                                    </div>
                                    <br></br>
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