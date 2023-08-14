import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import '../../css/style.css'

function Sidebar() {

    const history = useHistory();
    
    return (
        <div id='dashboardSidebar' className='bg-white p-2'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-4'>Maestro</span>
            </div>
            <hr className='text-dark'/>
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <span><Link to="/maestro/dashboard/">Home</Link></span>
                </a>
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-telephone fs-5 me-3'></i>
                    <span>Bookings</span>
                </a>
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-chat-dots fs-5 me-3'></i>
                    <span>Priority DM</span>
                </a>
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-card-list fs-5 me-3'></i>
                    <span><Link to="/maestro/dashboard/services">Services</Link></span>
                </a>
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-wallet fs-5 me-3'></i>
                    <span>Payments</span>
                </a>
                <a className='list-group-item py-2 my-1'>
                    <i className='bi bi-person fs-5 me-3'></i>
                    <span>Profile</span>
                </a>
            </div>
        </div>
  )
}

export default Sidebar