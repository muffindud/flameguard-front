import React, { useState, useEffect } from "react";
import "../styles/Control.css";

import { HOST, PORT } from "../config";

function Control() {
  const [image, setImage] = useState("");

  const requestImage = () => {
    fetch(`http://${HOST}:${PORT}/image`)
      .then((response) => response.json())
      // TODO: Uncomment when ready
      // .then((data) => setImage(data.imageUrl))
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching drone image:", error));
  };

  const sendPatrolRequest = () => {
    fetch(`http://${HOST}:${PORT}/patrol`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error sending patrol request:", error));
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
