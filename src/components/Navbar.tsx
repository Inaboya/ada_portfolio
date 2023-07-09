import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="logo-container">
          <Link to="/">
            <img src={require("../assets/ada_logo.png")} className="image-item" alt="" />
          </Link>
        </div>

        <div className="navbar__menu">
          <ul className="navbar__menu--items">
            <li>
              <Link className="navbar__menu--item" to="/">Home</Link>
            </li>

            <li>
              <Link className="navbar__menu--item" to="/work">My Work</Link>
            </li>

            <li>
              <Link className="navbar__menu--item" to="/about">About Me</Link>
            </li>

            <li>
              <Link className="navbar__menu--item" to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
