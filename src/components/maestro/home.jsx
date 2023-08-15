import React, { useState } from 'react'

function Home() {
  
  return (
    <div className='px-3'>
        
        <div className="container-fluid">
          <div className="row g-3 my-2">
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>230</h3>
                  <p className='fs-5'>Bookings</p>
                </div>
                  <i className='bi bi-telephone p-3 fs-1'></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>2</h3>
                  <p className='fs-5'>Services</p>
                </div>
                  <i className='bi bi-card-list p-3 fs-1'></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>$2000</h3>
                  <p className='fs-5'>Wallet</p>
                </div>
                  <i className='bi bi-wallet p-3 fs-1'></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3>10%</h3>
                  <p className='fs-5'>Increase</p>
                </div>
                  <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
              </div>
            </div>
          </div>

          <table class="table caption-top bg-white rounded mt-2">
            <caption className='text-black fs-4'>Recent Bookings</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Service Type</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home