import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <header className="header-container">
          <Navbar />
        </header>

        <Routes>
          <Fragment>
            
            <Route path="/" element={<Home />} />
          </Fragment>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
