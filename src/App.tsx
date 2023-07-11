import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./page/LandingPage";
import Work from "./components/Work";
import AboutPage from "./page/AboutPage";

function App() {
  return (
    <div className="container">
      <Router>

        <Routes>

            <Route path="/" element={<LandingPage />} />

            <Route path="/about" element={<AboutPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
