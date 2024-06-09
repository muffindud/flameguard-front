import React from "react";
import { useState, useEffect } from "react";
import "../styles/Statistics.css";

function Statistics() {
  const [data, setData] = useState({
    droneStatus: "",
    batteryLevel: "",
    flightsToday: "",
    currentHeight: "",
    patrolLog: [],
  });

  useEffect(() => {
    // TODO: Fetch drone statistics from the backend API
    fetch("...")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error fetching drone statistics:", error)
      );
  }, []);

  return (
    <div className="drone-statistics">
      <div className="title-section">
        <div className="title">Drone Statistics</div>
      </div>
      <div className="data-section">
        <div className="status-item">
          <span>Drone Status:</span> {data.droneStatus}
        </div>
        <div className="battery-item">
          <span>Battery Level:</span> {data.batteryLevel}%
        </div>
        <div className="height-item">
          <span>Current Height:</span> {data.currentHeight} meters
        </div>
        <div className="flights-item">
          <span>Flights Today:</span> {data.flightsToday}
        </div>
      </div>
      <div className="patrol-log-section">
        <h3>Patrol Log</h3>
        <ol>
          {data.patrolLog.map((log, index) => (
            <li key={index}>
              Date: {log.date} <br />
              Start Time: {log.startTime} <br />
              End Time: {log.endTime}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Statistics;
