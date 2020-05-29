import React from "react";

import Layout from "../components/MyLayoutK";

const Navbar = props => (
  <Layout>
    <React.Fragment>
      <header className="header-navbar sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="" className="navbar-brand">
              <img src="../images/logo.png" alt="Grammerhub" class="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href=""
                    className="nav-link-dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    araia-haspopup="true"
                    aria-expanded="false"
                  >
                    Our Meetups
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a href="" className="dropdown-item">
                      Recent Meetups
                    </a>
                    <a href="" className="dropdown-item">
                      Coming Meetups
                    </a>
                    <a href="" className="dropdown-item">
                      Past Meetups
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Media
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Tech Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Best Showcase
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="header-btn">
                <a href="">Join Us</a>
              </div>
            </div>
          </div>
        </nav>
        <style jsx>{`
          .header-navbar {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 9;
          }

          .navbar {
            background: #311569;
            padding: 15px 0;
            position: relative;
            z-index: 9;
          }

          .navbar:before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #171c62;
          }

          .navbar.navbar-expand-lg .nav-item {
            margin-right: 46px;
          }

          .navbar.navbar.navbar-expand-lg li a {
            color: #f0f0f0;
            font-size: 18px;
            font-weight: 400;
            text-transform: 400;
            text-transform: capitalize;
            padding: 30px 0 !important;
            display: inline-block;

            transition: all linear 0.3s;
            -webkit-transition: all linear 0.3s;
            -moz-transition: all linear 0.3s;
            -ms-transition: all linear 0.3s;
            -o-transition: all linear 0.3s;
          }

          .navbar.navbar-expand-lg li:hover > a {
            color: #ffe169;
          }

          .navbar-expand-lg .navbar-nav .dropdown-menu {
            background: #6e06ae;
            left: 50%;
            transform: translate(-50%);
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
          }

          .navbar-expand-lg .navbar-nav .dropdown-menu a {
            display: block;
            padding: 10px 20px !important;

            transition: all linear 0.3s;
            -webkit-transition: all linear 0.3s;
            -moz-transition: all linear 0.3s;
            -ms-transition: all linear 0.3s;
            -o-transition: all linear 0.3s;
          }

          .navbar-expand-lg .navbar-nav .dropdown-menu a:hover {
            color: #ffe169;
          }

          .dropdown-item:hover {
            background-color: transparent;
          }

          .header-btn {
            position: relative;
            top: -1px;
            padding: 8px 30px;
            display: inline-block;
            background: linear-gradient(#c471ed, #b404ae);
            border-radius: 4px;
          }

          .header-btn a {
            color: #171c62;
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
          }
        `}</style>
      </header>
    </React.Fragment>
  </Layout>
);

export default Navbar;
