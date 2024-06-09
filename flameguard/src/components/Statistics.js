import React from "react";
import "../styles/Statistics.css";

function Statistics() {
  return (
    <div className="drone-statistics">
      <div className="title-section">
        <div className="title">Drone Statistics</div>
      </div>
      <div className="data-section">
        <div className="status-item">
          <span>Drone Status:</span> Idle
        </div>
        <div className="battery-item">
          <span>Battery Level:</span> 75%
        </div>
        <div className="height-item">
          <span>Current Height:</span> 0 meters
        </div>
        <div className="flights-item">
          <span>Flights Today:</span> 2
        </div>
      </div>
      <div className="patrol-log-section">
        <h3>Patrol Log</h3>
        <ol>
          <li>
            Date: 2024-06-09 <br />
            Start Time: 08:00 <br />
            End Time: 08:32
          </li>
          <li>
            Date: 2024-06-08 <br />
            Start Time: 10:15 <br />
            End Time: 10:43
          </li>
          <li>
            Date: 2024-06-07 <br />
            Start Time: 14:00 <br />
            End Time: 14:25
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Statistics;
