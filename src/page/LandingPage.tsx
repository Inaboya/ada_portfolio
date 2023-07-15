import React from "react";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  const workRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <header className="header-container">
        <Navbar workRef={workRef} />
      </header>

      <div className="landing-container">
        <Home workRef={workRef} />
        <Work workRef={workRef} />
        <Contact workRef={workRef} />
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
