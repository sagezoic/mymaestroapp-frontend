import React, { useState } from 'react';
import {Switch ,Route} from 'react-router-dom';

import { MaestroRoutes } from '../routes/maestroRoutes';
import { ExplorerRoutes } from '../routes/explorerRoutes';
import { CommonRoutes } from '../routes/commonRoutes';

import Home from './home'

import Login from './login'
import Signup from './signup/signup'
import NotFound from './notfound'
import Navbar from './navbar'
import Footer from './footer'
import Test from './test'

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

  const [username, setUsername] = useState([]);
  let routes = MaestroRoutes;
  debugger;

  return (
    <div className='main-container'>
        <Navbar></Navbar>
        <br />
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
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
    </div>
  )
}

export {Landing, RouteWithSubRoutes};