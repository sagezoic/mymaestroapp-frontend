import React from 'react'

function ServiceCard() {
  return (
    <div class="card" style={{width: "25rem"}}>
        <div class="card-body">
            <div className='d-flex justify-contents-center'>
                <h3 class="card-title fs-3">Service 1</h3>
                <div className='ms-auto '>
                    <i className='bi bi-eye me-2'></i>
                    <span>public</span>
                </div>
            </div>
            <div className="">
                <span>15 mins | </span><span>$0</span>
            </div>
            <p class="card-text mt-1">This is the first service, you are giving!</p>
            <div className='d-flex'>
                <i className='btn btn-light bi bi-upload me-4' style={{fontSize:"25px", cursor:"pointer"}}></i>
                <button class="btn btn-flat btn-block btn-light">Edit</button>
                <div className='ms-auto'>
                    <i className='btn btn-light bi bi-activity me-2 fs-3'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard