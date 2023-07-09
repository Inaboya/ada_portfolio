import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <div className="logo-container"></div>

                <div className="navbar__menu">
                    <ul className="navbar__menu--items">
                        <li className="navbar__menu--item">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="navbar__menu--item">
                            <Link to="/work">My Work</Link>
                        </li>

                        <li className="navbar__menu--item">
                            <Link to="/about">About Me</Link>
                        </li>

                        <li className="navbar__menu--item">
                            <Link to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
