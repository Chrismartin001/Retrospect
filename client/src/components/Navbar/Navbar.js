import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/wonderland.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-nav">
        <Link to="/">
          <img src={Logo} className="img" />
        </Link>
        <div>
          <Link to="/">
            <p className="nav-link">Home</p>
          </Link>
          <Link to="/review">
            <p className="nav-link">Upload</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
