import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login({ isLoggedIn, handleLogin }) {

    var history = useHistory();

    const [credentials, setCredentials] =
            useState({email:"", password:""});
            
    const [message, setMessage] = useState("");
    
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

     var Signin = ()=>
     {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState ==4 && 
                helper.status == 200)
                {
                    var result = 
                    JSON.parse(helper.responseText);
                    console.log(result);
                    if(result!=null){
                        // result[0] bcoz select query returns array in node
                        //set session storage
                        if(isChecked){
                            window.localStorage.setItem("isLoggedIn", "true");
                            window.localStorage.setItem("email", credentials.email);
                            window.localStorage.setItem("jwt", result.jwt);
                            window.localStorage.setItem("userId", 4)
                        }else{
                            window.sessionStorage.setItem("isLoggedIn", "true");
                            window.sessionStorage.setItem("email", credentials.email);
                            window.sessionStorage.setItem("jwt", result.jwt);
                            window.sessionStorage.setItem("userId", 4)
                        }
                        // Call the handleLogin function passed from the parent
                        handleLogin();
                        //navigate to somewhere
                        history.push("/maestro/feed")
                    }
                }
                 else
                 {
                     ShowMessage("Credentials Invalid!");
                     setCredentials({email:"", password:""})
                 }
        }
        console.log(helper.readyState);
        helper.open("POST", 
                    "http://127.0.0.1:8080/login");

        helper.setRequestHeader("content-type","application/json");
        console.log(helper.readyState);
        helper.send(JSON.stringify(credentials));
        console.log(helper.readyState);
    }

    var ShowMessage = (msg)=>{
        setMessage(msg);
        setTimeout(() => {
                            setMessage("")
                        }, 3000);
     }

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className='card'>
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>

                            <div id='loginForm'>
                                <form>
                                    <div className='alert alert-info mb-3' style={{color:"red"}}>
                                        {message}
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="LoginInputEmail" aria-describedby="emailHelp" 
                                        name="email" value={credentials.email} onChange={OnTextChanged} required/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="LoginInputPassword" 
                                        name="password" value={credentials.password} onChange={OnTextChanged} required/>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"  
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}/>
                                        <label class="form-check-label" for="LoginCheck" >Remember me</label>
                                    </div>
                                    <button class="btn btn-primary d-flex justify-content-center mx-auto" onClick={Signin}>Login</button>
                                    <div className="text-center mt-3 mb-3">
                                        <p>Or log in with:</p>
                                        <a href="#" className="btn btn-icon mx-1"><i class="fab fa-google fa-2x" style={{color:"#dd4b39"}}></i></a>
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