import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  const handleGetStartedClick = () => {
    if (location.pathname === "/") {
      scrollToDashboard();
    } else {
      window.location.href = "/";
    }
  };

  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById("dashboard");
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">FlameGuard</div>
      <div className="navbar-menu">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="navbar-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/future-features" className="navbar-link">
              Future Features
            </Link>
          </li>
        </ul>
        <button className="navbar-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
