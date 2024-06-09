import React, { useState, useEffect } from "react";
import "../styles/Control.css";

function Control() {
  const [image, setImage] = useState("");

  const requestImage = () => {
    // TODO: Replace with backend API endpoint
    fetch("...")
      .then((response) => response.json())
      .then((data) => setImage(data.imageUrl))
      .catch((error) => console.error("Error fetching drone image:", error));
  };

  const sendPatrolRequest = () => {
    // TODO: Implement patrol request logic here
    console.log("Manual patrol request sent");
  };

  return (
    <div className="drone-control">
      <div className="title-section">
        <div className="title">Drone Control</div>
      </div>
      <div className="buttons-section">
        <button className="image-button" onClick={requestImage}>
          Request Image
        </button>
        <button className="patrol-button" onClick={sendPatrolRequest}>
          Send Patrol Request
        </button>
      </div>
      <div className="image-section">
        <div className="image-title">Latest Drone Image</div>
        <img src={image} alt="drone image" className="drone-image" />
        {/* <img
          src={require("../images/img.png")}
          alt="drone image"
          className="drone-image"
        /> */}
      </div>
    </div>
  );
}

export default Control;
