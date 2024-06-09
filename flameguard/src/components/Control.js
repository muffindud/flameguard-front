import React from "react";
import "../styles/Control.css";

function Control() {
  return (
    <div className="drone-control">
      <div className="title-section">
        <div className="title">Drone Control</div>
      </div>
      <div className="buttons-section">
        <button className="image-button">Request Image</button>
        <button className="patrol-button">Send Patrol Request</button>
      </div>
      <div className="image-section">
        <div className="image-title">Latest Drone Image</div>
        <img
          src={require("../images/img.png")}
          alt="drone image"
          className="drone-image"
        />
      </div>
    </div>
  );
}

export default Control;
