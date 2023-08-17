import React, { useState } from 'react';
import {Switch ,Route} from 'react-router-dom';

import Home from './home'
import Maestros from './maestros';
import Feed from './feed'

import ExplorerHome from './explorer/home'

import MaestroHome from './maestro/home'
import Dashboard from './maestro/dashboard'

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




function Landing() {

  const [username, setUsername] = useState([]);

  return (
    <div className='main-container'>
        <Navbar></Navbar>
        <br />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/explorer/home" component={ExplorerHome}/>
          <Route exact path="/maestro/home" component={MaestroHome}/>
          <Route exact path="/explorer/feed" component={Feed}/>

          <Route exact path="/maestros/" component={Maestros}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signup/otp" component={Otp}/>
          <Route exact path="/signup/aftersignup1" component={Aftersignup1}/>
          <Route exact path="/signup/aftersignup2" component={Aftersignup2}/>
          <Route exact path="/signup/aftersignup3" component={Aftersignup3}/>
          <Route exact path="/test" component={Test}/>
          <Route path="/maestro/dashboard/"><Dashboard/></Route>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer></Footer>
    </div>
  )
}

export default Landing