import React from "react";
import { Link, NavLink } from "react-router-dom";

interface NavbarInterface {
  workRef: React.RefObject<HTMLDivElement> | null;
}

const Navbar: React.FC<NavbarInterface> = ({ workRef }) => {
  const handleScroll = () => {
    if (workRef && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="">
          <Link to="/" className="logo-container">
            <img
              src={require("../assets/ada_logo.png")}
              className="image-item"
              alt=""
            />
          </Link>
        </div>

        <div className="navbar__menu">
          <div className="navbar__menu--items">
            <div>
              <NavLink
                className="navbar__menu--item"
                to="/"
                onClick={handleScroll}
              >
                Home
              </NavLink>
            </div>

            <div>
              <NavLink
                className="navbar__menu--item"
                to="/"
                onClick={handleScroll}
              >
                My Work
              </NavLink>
            </div>

            <div>
              <NavLink className="navbar__menu--item" to="/">
                About Me
              </NavLink>
            </div>

            <div>
              <NavLink
                className="navbar__menu--item"
                to="/"
                onClick={handleScroll}
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
