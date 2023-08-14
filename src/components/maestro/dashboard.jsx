import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from './sidebar';
import Home from './home';
import { Switch } from 'react-router-dom';

function Dashboard({page}) {
  const [toggle, setToggle] = useState(true);
  const Toggle = ()=>{
                        setToggle(!toggle)
                      }
  debugger;

  return (
    <div className='container-fluid bg-light min-vh-100'>
        <div className='row gx-0' >
          {toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar></Sidebar>
          </div>}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className="col">
            <Switch>
              <Home Toggle={Toggle}/>
            </Switch>
          </div>
        </div>
    </div>
  )
}

export default Dashboard