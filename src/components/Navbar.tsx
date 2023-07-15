import React from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

interface NavbarInterface {
  workRef: React.RefObject<HTMLDivElement> | null;
}

const Navbar: React.FC<NavbarInterface> = ({ workRef }) => {
  const handleScroll = () => {
    if (workRef && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  // check if large screen set openMenu to false

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [openMenu]);

  return (
    <div className="navbar__container">
      {openMenu && (
        <Modal>
          <div className="modal__menu--items">
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
              <NavLink className="navbar__menu--item" to="/about">
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
        </Modal>
      )}
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
              <NavLink className="navbar__menu--item" to="/about">
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

        <div className="hamburger-menu" onClick={handleOpenMenu}>
          <div className="hamburger-menu__line" />
          <div className="hamburger-menu__line" />
          <div className="hamburger-menu__line" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
