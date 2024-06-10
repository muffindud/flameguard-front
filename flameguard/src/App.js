import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import FutureFeatures from "./components/FutureFeatures";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/future-features" element={<FutureFeatures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
