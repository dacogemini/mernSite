import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <a className="navbar-brand" href="/">
            <img src="https://lh3.googleusercontent.com/Bq0xojkZjsSdLRp8gpHHEBQvAkWquXKEdhAVUSCfqK-zA2dXjS7IRkEIAIK8aIPKaCtA2m9EB_ZWKfUIcMfoT7I5_YD7yvHtYSv1-pWZ-3a4Q_c2ow0dXGHOfHmNPPDYJxBJXNSDAg=w2400" alt="Clark" />
          </a>
          <Link className="tag" to="/">
            <h2>CELEBRATING 30 YEARS IN BUSSINES!</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav" id="nab">
              <div className="logo">
              <a className="logo" href="https://www.nabshow.com/">
            <img src="https://lh3.googleusercontent.com/AaWEYz-N-NG-m5MyendhLNblUhe4edOZY9111-SVnSc81uH0Mj7LQr-HyRElqDAd_m1zcVlHXrtkg9cOTalS3n5QameRGjulDO8GgUWpn-0SOlqQtwEgfU-1n_8VfyLFMPV_0wAOXA=w2400" width="125" height="100" alt="Clark" />
          </a>
          </div>
              </ul>
          <div className="menu" id="mobile-nav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {' '}
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  {' '}
                  CATALOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technical">
                  {' '}
                  TECHNICAL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {' '}
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className="auth" id="mobile-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;