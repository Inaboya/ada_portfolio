import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="">
          <Link to="/" className="logo-container">
            <img src={require("../assets/ada_logo.png")} className="image-item" alt="" />
          </Link>
        </div>

        <div className="navbar__menu">
          <div className="navbar__menu--items">
            <div>
              <NavLink className="navbar__menu--item" to="/">Home</NavLink>
            </div>

            <div>
              <NavLink className="navbar__menu--item" to="/work">My Work</NavLink>
            </div>

            <div>
              <NavLink className="navbar__menu--item" to="/about">About Me</NavLink>
            </div>

            <div>
              <NavLink className="navbar__menu--item" to="/contact">Contact Me</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
