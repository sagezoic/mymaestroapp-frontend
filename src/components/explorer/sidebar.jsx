import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../../css/style.css';

function Sidebar() {
    const history = useHistory();

    return (
        <div id='dashboardSidebar' className='bg-white p-2'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-4'>Maestro</span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <Link to='/explorer/dashboard' className='list-group-item py-2 my-1'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <span>Home</span>
                </Link>
                <Link to='/explorer/dashboard/bookings' className='list-group-item py-2 my-1'>
                    <i className='bi bi-telephone fs-5 me-3'></i>
                    <span>Bookings</span>
                </Link>
                <Link to='/explorer/dashboard/prioritydm' className='list-group-item py-2 my-1'>
                    <i className='bi bi-chat-dots fs-5 me-3'></i>
                    <span>Priority DM</span>
                </Link>
                <Link to='/explorer/dashboard/calendar' className='list-group-item py-2 my-1'>
                    {/* <a > */}
                    <i className='bi bi-card-list fs-5 me-3'></i>
                    <span>Calendar</span>
                    {/* </a> */}
                </Link>
                <Link to='/explorer/dashboard/payments' className='list-group-item py-2 my-1'>
                    <i className='bi bi-wallet fs-5 me-3'></i>
                    <span>Payments</span>
                </Link>
                <Link to='/explorer/dashboard/profile' className='list-group-item py-2 my-1'>
                    <i className='bi bi-person fs-5 me-3'></i>
                    <span>Profile</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar