import React, { useState } from 'react'
import { Switch } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from './sidebar';
import NavDashboard from './navdashboard'

import {RouteWithSubRoutes} from '../landing';

function Dashboard({routes}) {
  const [toggle, setToggle] = useState(true);
  const Toggle = ()=>{
                        setToggle(!toggle)
                      }

  return (
    <div className='container-fluid bg-light min-vh-100'>
        <div className='row gx-0' >
          
          {toggle && (
          <div className='col-4 col-md-2 bg-white vh-100'>
            <Sidebar />
          </div>
        )}
        
        <div className='col'>
          <NavDashboard Toggle={Toggle}/>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </Switch>
        </div>
    </div>
    </div>
  )
}

export default Dashboard