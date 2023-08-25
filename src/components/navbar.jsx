import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";

function Navbar({ Logout, isLoggedIn }) {
  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#232F3E", color: "#ffffff" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../images/common/logo.png")}
            alt="my-maestro-logo"
            width="30"
            height="30"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex align-items-center" role="search">
            <input
              className="form-control me-2 col-md-12"
              type="search"
              placeholder="Find the maestro"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info"
              type="submit"
              style={{ color: "#ffffff" }}
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-auto align-items-center mb-2 mb-lg-0">
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <Link to="/explorer/feed" className="nav-link">
                  Feed
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <Link to="/explorer/allservices" className="nav-link">
                  Services
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/maestro/dashboard/home"
                      className="dropdown-item"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/maestro/dashboard/services"
                      className="dropdown-item"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/maestro/dashboard/calendar"
                      className="dropdown-item"
                    >
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/maestro/dashboard/payments"
                      className="dropdown-item"
                    >
                      Payments
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/maestro/dashboard/profile"
                      className="dropdown-item"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
            )}

            <li className="nav-item dropdown">
              <Link
                to="/allmaestro"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Maestros
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/allmaestro" className="dropdown-item" href="#">
                    All
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/softeng" className="dropdown-item" href="#">
                    Software Engineers
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/designers" className="dropdown-item" href="#">
                    Designers
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/mentors" className="dropdown-item" href="#">
                    Mentors
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/creators" className="dropdown-item" href="#">
                    Creators
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/mentalhealth" className="dropdown-item" href="#">
                    Mental Health Experts
                  </Link>
                </li>
              </ul>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link to="/maestro/dashboard/prioritydm" className="nav-link">
                  <i
                    className="bi bi-chat-dots"
                    style={{ color: "#ffffff", fontSize: "1.2rem" }}
                  ></i>
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i
                    className="bi bi-bell"
                    style={{ color: "#ffffff", fontSize: "1.2rem" }}
                  ></i>
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item dropdown mt-1 mr-3 ml-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src=""
                    className="rounded-circle"
                    width="40"
                    height="40"
                    style={{ marginTop: "-3px" }}
                    alt="User Avatar"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li onClick={Logout}>
                    <a className="dropdown-item" href="">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
          {!isLoggedIn && (
            <div className="d-flex">
              <Link to="/login" className="nav-link">
                <button
                  className="btn btn-outline-info ms-2 me-4"
                  style={{ color: "#ffffff" }}
                >
                  Login
                </button>
              </Link>

              <Link to="/signup" className="nav-link">
                <button
                  className="btn btn-outline-info"
                  style={{ color: "#ffffff" }}
                >
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
