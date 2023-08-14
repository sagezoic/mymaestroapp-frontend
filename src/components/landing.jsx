import React, { useState } from 'react';
import {Switch ,Route} from 'react-router-dom';

import Home from './home'
import Maestros from './maestros';
import ExplorerHome from './explorer/home'

import MaestroHome from './maestro/home'
import Dashboard from './maestro/dashboard'
import Services from './maestro/services';
import Calendar from './maestro/calendar';
import Payments from './maestro/payments';
import Profile from './maestro/profile';

import Login from './login/login'
import Signup from './signup/signup'
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

          <Route exact path="/maestros/" component={Maestros}/>

          <Route exact path="/maestro/dashboard"><Dashboard page={MaestroHome}/></Route>
          <Route exact path="/maestro/dashboard/services"><Services/></Route>
          <Route exact path="/maestro/dashboard/calendar" component={Dashboard} page={Calendar}/>
          <Route exact path="/maestro/dashboard/payments" component={Dashboard} page={Payments}/>
          <Route exact path="/maestro/dashboard/profile" component={Dashboard} page={Profile}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/test" component={Test}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer></Footer>
    </div>
  )
}

export default Landing