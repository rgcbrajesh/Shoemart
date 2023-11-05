import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" id="logo" />
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/product">product's</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="/">Portfolio</a>
        </div>
        <div
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
