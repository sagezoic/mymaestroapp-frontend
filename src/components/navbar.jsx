import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({Logout, isLoggedIn}) {
    debugger;
    return (
        <nav class='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#232F3E', color: '#ffffff' }}>
            <div class='container-fluid'>
                <Link to='/' class='navbar-brand'>
                    <img src={require('../images/common/logo.png')} alt='my-maestro-logo' width='30' height='30' />
                </Link>
                <button
                    class='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <form class='d-flex align-items-center' role='search'>
                        <input class='form-control me-2 col-md-12' type='search' placeholder='Find the maestro' aria-label='Search' />
                        <button class='btn btn-outline-info' type='submit' style={{ color: '#ffffff' }}>
                            Search
                        </button>
                    </form>
                    <ul class='navbar-nav ms-auto align-items-center mb-2 mb-lg-0'>
                        
                        {!isLoggedIn && (<li class='nav-item'>
                            <Link to='/' class='nav-link active' aria-current='page'>
                                Home
                            </Link>
                        </li>
                        )}
                        {isLoggedIn && (<li class='nav-item'>
                            <Link to='/explorer/feed' class='nav-link'>
                                Feed
                            </Link>
                        </li>)}

                        {isLoggedIn && (<li class='nav-item dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Dashboard
                            </a>
                            <ul class='dropdown-menu'>
                                <li>
                                    <Link to='/maestro/dashboard/home' class='dropdown-item'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/maestro/dashboard/services' class='dropdown-item'>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/maestro/dashboard/calendar' class='dropdown-item'>
                                        Calendar
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/maestro/dashboard/payments' class='dropdown-item'>
                                        Payments
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/maestro/dashboard/profile' class='dropdown-item'>
                                        Profile
                                    </Link>
                                </li>
                            </ul>
                        </li>)}
                        
                        <li class='nav-item dropdown'>
                            <Link to='/allmaestro' class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Maestros
                            </Link>
                            <ul class='dropdown-menu'>
                                <li>
                                    <Link to='/allmaestro' class='dropdown-item' href='#'>
                                        All
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/softeng' class='dropdown-item' href='#'>
                                        Software Engineers
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/designers' class='dropdown-item' href='#'>
                                        Designers
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/mentors' class='dropdown-item' href='#'>
                                        Mentors
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/creators' class='dropdown-item' href='#'>
                                        Creators
                                    </Link>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to='/mentalhealth' class='dropdown-item' href='#'>
                                        Mental Health Experts
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {isLoggedIn && (<li class='nav-item'>
                            <Link to='/maestro/dashboard/prioritydm' class='nav-link'>
                                <i class="bi bi-chat-dots" style={{color:'#ffffff', fontSize:'1.2rem'}}></i>
                            </Link>
                        </li>)}
                        {isLoggedIn && (<li class='nav-item'>
                            <Link to='#' class='nav-link'>
                                <i class="bi bi-bell" style={{color:'#ffffff', fontSize:'1.2rem'}}></i>
                            </Link>
                        </li>)}
                        {isLoggedIn && (<li class="nav-item dropdown mt-1 mr-3 ml-3">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                src={require('../images/users/user1/dp.jpg')}
                                class="rounded-circle"
                                width="40"
                                height="40"
                                style={{marginTop: '-3px'}}
                                alt="User Avatar"
                                />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li onClick={Logout}><a class="dropdown-item" href=''>Logout</a></li>
                            </ul>
                            </li>)}
                    </ul>
                    {!isLoggedIn && (
                        <div className='d-flex'>
                            <Link to='/login' class='nav-link'>
                                <button class='btn btn-outline-info ms-2 me-4' style={{ color: '#ffffff' }}>
                                    Login
                                </button>
                            </Link>

                            <Link to='/signup' class='nav-link'>
                                <button class='btn btn-outline-info' style={{ color: '#ffffff' }}>
                                    Signup
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
