import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-nav">
      <Link to="/">
        <h1>RetroSpeckt</h1>
      </Link>
      <ul>
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/">
          <li className="nav-link">login</li>
        </Link>
      </ul>
    </div>
  );
}
