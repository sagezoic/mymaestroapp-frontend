import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from './sidebar';
import Home from './home';
import Services from './services';
import Calendar from './calendar';
import Payments from './payments';
import Profile from './profile';

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const Toggle = ()=>{
                        setToggle(!toggle)
                      }

  return (
    <div className='container-fluid bg-light min-vh-100'>
        <div className='row gx-0' >
          {/*{toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar></Sidebar>
          </div>}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className="col">
            <Switch>
              <Route path="/services"><Services/></Route>
              <Route exact path="/calendar" component={Dashboard} page={Calendar}/>
              <Route exact path="/payments" component={Dashboard} page={Payments}/>
              <Route exact path="/profile" component={Dashboard} page={Profile}/>
              <Route path="/"><Home Toggle={Toggle}/></Route>
            </Switch>
          </div>*/}
          {toggle && (
          <div className='col-4 col-md-2 bg-white vh-100'>
            <Sidebar />
          </div>
        )}
        
        <div className='col'>
          <Switch>
            <Route path="/maestro/dashboard/services"><Services Toggle={Toggle}/></Route>
            <Route path='/maestro/dashboard/calendar' component={Calendar} />
            <Route path='/maestro/dashboard/payments' component={Payments} />
            <Route path='/maestro/dashboard/profile' component={Profile} />
            {/*<Route exact path="" render={(props) => <Home {...props} Toggle={Toggle} />} />*/}
            <Route path=""><Home Toggle={Toggle}/></Route>
          </Switch>
        </div>
    </div>
    </div>
  )
}

export default Dashboard