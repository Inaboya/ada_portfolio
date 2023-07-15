import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="work-container">
      <div className="work-wrapper">
        <h1 className="work-title">LET'S CONNECT</h1>

        <div className="footer-content">
          <div className="footer-wrapper">
            <div>
              <Link
                to={"https://twitter.com/Naturalsatel"}
                rel="noreferrer"
                target={"_blank"}
                className="footer-links"
              >
                Twitter
              </Link>
            </div>

            <div>
              <Link
                to={"https://dribbble.com/AdaAmaa"}
                rel="noreferrer"
                target={"_blank"}
                className="footer-links"
              >
                Dribbble
              </Link>
            </div>

            <div>
              <Link
                to={"https://www.behance.net/adaamaa"}
                rel="noreferrer"
                target={"_blank"}
                className="footer-links"
              >
                Behance
              </Link>
            </div>

            <div>
              <Link
                to={"https://www.linkedin.com/in/blessing-onyebuchi-96632511b"}
                rel="noreferrer"
                target={"_blank"}
                className="footer-links"
              >
                LinkedIn
              </Link>
            </div>

            <div>
              <Link
                to={
                  "https://instagram.com/honourableamaa_uiux?igshid=YmMyMTA2M2Y="
                }
                rel="noreferrer"
                target={"_blank"}
                className="footer-links"
              >
                Instagram
              </Link>
            </div>

            <div className="footer-links">
              <Link
                to={"mailto:blessingonyebuchi8888@gmail.com"}
                rel="noreferrer"
                target={"_blank"}
                className="footer-links"
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        <footer className="footer">
            <p className="footer-paragraph">
                Copyright © Blessing Onyebuchi | 2022
            </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
