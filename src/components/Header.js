import React from "react";
import "./Header.css";
import cargotonLogo from "../assets/cargoton-logo.png"; // Make sure the path matches where you saved your logo

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img
            src={cargotonLogo}
            alt="Cargoton Logistic Logo"
            className="logo-image"
          />
          <span className="logo-text">CARGOTON LOGISTIC</span>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#pages">PAGES</a>
            </li>
            <li>
              <a href="#tracking">TRACKING SERVICES</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="btn-quote">HET QUOTE</button>
          <button className="btn-signin">SIGN IN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
