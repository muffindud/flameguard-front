import React from "react";
import Header from "./Header";
import Statistics from "./Statistics";
import Control from "./Control";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Statistics />
        <Control />
      </div>
    </div>
  );
}

export default Dashboard;
