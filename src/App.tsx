import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";

function App() {
  return (
    <div className="container">
      <Router>
        <header className="header-container">
          <Navbar />
        </header>

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
