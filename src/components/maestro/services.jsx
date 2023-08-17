import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../../css/style.css'
import ServiceCard from './servicecard'
import NavDashboard from './navdashboard'
function Services({Toggle}) {

  return (
    <div className='px-3'>
        <div className='container-fluid'>
          <div>
            <h2 className='fs-2'>Services</h2>
            <div className='mt-10 d-flex'>
              <button class="btn btn-dark btn-custom me-4">
                All
              </button>
              <button class="btn btn-dark btn-custom me-4">
                1:1 Call
              </button>
              <button class="btn btn-dark btn-custom me-4">
                Priority DM
              </button>
              <button class="btn btn-dark btn-custom">
                Online Session
              </button>
              <div className='ms-auto'>
                <Link to='/maestro/dashboard/addservice'><button className="btn btn-dark btn-custom-sq">+Add Services</button></Link>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='mt-5'>
            <ServiceCard></ServiceCard>
          </div>
        </div>
    </div>
  )
}

export default Services