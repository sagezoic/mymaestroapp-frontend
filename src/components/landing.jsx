import React, { useEffect, useState } from 'react';
import {Switch ,Route, useHistory } from 'react-router-dom';

import { MaestroRoutes } from '../routes/maestroRoutes';
import { ExplorerRoutes } from '../routes/explorerRoutes';
import { CommonRoutes } from '../routes/commonRoutes';

import Home from './home'

import Login from './login'
import Signup from './signup/signup'
import Otp from './signup/otp'
import Aftersignup1 from './signup/aftersignup1';
import Aftersignup2 from './signup/aftersignup2'; 
import Aftersignup3 from './signup/aftersignup3';
import NotFound from './notfound'
import Navbar from './navbar'
import Footer from './footer'
import Test from './test'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function RouteWithSubRoutes(route) {
  {/*This function will help us to pass the routes passed from the upper route to 
     the sub-components */}
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}

function Landing() {

  let history = useHistory();
  const [username, setUsername] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  //callback function to change the state loggedin from child login component
  const handleLogin = () => {
    // Update the isLoggedIn state when the user logs in
    setIsLoggedIn(true);
  };

  useEffect(()=>{
    debugger;
    if(sessionStorage.getItem("isLoggedIn")){
      setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    }
  },[])

  const logout =()=>{
    //set session storage
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("jwt");

    window.sessionStorage.removeItem("isLoggedIn");
    window.sessionStorage.removeItem("email");
    window.sessionStorage.removeItem("role");
    window.sessionStorage.removeItem("userId");
    window.sessionStorage.removeItem("jwt");

    //change the login state to false
    setIsLoggedIn(false);

    //change the login state to false
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    history.push("/")
  }

  return (
    <div className='main-container'>
        <Navbar Logout={logout} isLoggedIn={isLoggedIn}></Navbar>
        <Switch>

          {/* Common Routes */}

          <Route exact path="/" component={Home}/>
          <Route exact path="/login"><Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} /></Route>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signup/otp" component={Otp}/>
          <Route exact path="/signup/aftersignup1" component={Aftersignup1}/>
          <Route exact path="/signup/aftersignup2" component={Aftersignup2}/>
          <Route exact path="/signup/aftersignup3" component={Aftersignup3}/>

          <Route exact path="/test" component={Test}/>
          {/*<Route path={MaestroRoutes.path}><Dashboard/></Route>*/}
          {MaestroRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          {ExplorerRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          {CommonRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer></Footer>
        <ToastContainer position='top-center' autoClose={3000} />
    </div>
  )
}

export {Landing, RouteWithSubRoutes};
