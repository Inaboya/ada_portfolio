import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const LandingPage: React.FC = () => {
  return (
    <div className="container">
        <Router>
        <div className="header-container">
        <Navbar />
      </div>
        </Router>
      
    </div>
  );
};

export default LandingPage;
