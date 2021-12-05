import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-nav">
      <h1>RetroSpeckt</h1>
      <ul>
        <li className="nav-link">Home</li>
        <li className="nav-link">login</li>
      </ul>
    </div>
  );
}
