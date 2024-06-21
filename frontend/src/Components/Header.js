import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/evangadi-logo-black.png"; // Adjust the path if needed

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="Evangadi Networks Logo" className="logo" />
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ask-question">How it works</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
