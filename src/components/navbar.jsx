import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const isLoggedIn = true;

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
                    <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li class='nav-item'>
                            <Link to='/' class='nav-link active' aria-current='page'>
                                Home
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to='/explorer/feed' class='nav-link'>
                                Feed
                            </Link>
                        </li>
                        <li class='nav-item dropdown'>
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
                        </li>
                        <li class='nav-item dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                For Creators
                            </a>
                            <ul class='dropdown-menu'>
                                <li>
                                    <a class='dropdown-item' href='#'>
                                        Software Engineers
                                    </a>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <a class='dropdown-item' href='#'>
                                        Designers
                                    </a>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <a class='dropdown-item' href='#'>
                                        Mentors
                                    </a>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <a class='dropdown-item' href='#'>
                                        Creators
                                    </a>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <a class='dropdown-item' href='#'>
                                        Mental Health Experts
                                    </a>
                                </li>
                                <li>
                                    <hr class='dropdown-divider' />
                                </li>
                                <li>
                                    <a class='dropdown-item' href='#'>
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    _
                    {!isLoggedIn && (
                        <div className='d-flex'>
                            <button class='btn btn-outline-info ms-2 me-4' style={{ color: '#ffffff' }}>
                                <Link to='/login' class='nav-link'>
                                    Login
                                </Link>
                            </button>

                            <button class='btn btn-outline-info'>
                                <Link to='/signup' class='nav-link' style={{ color: '#ffffff' }}>
                                    Signup
                                </Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
