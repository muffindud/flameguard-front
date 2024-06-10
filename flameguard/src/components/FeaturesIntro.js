import React from "react";
import features from "../images/features.png";
import "../styles/FeaturesIntro.css";

function FeaturesIntro() {
  return (
    <div className="introduction-section">
      <div className="introduction-image-container">
        <img
          src={features}
          className="introd-img"
          alt="Feature Introduction Image"
        />
      </div>
      <div className="introduction-text">
        <p>
          At <span>FlameGuard</span>, we are constantly innovating to enhance
          our services and provide you with the best tools to ensure safety and
          efficiency. Here’s a sneak peek into some of the exciting features we
          are working on to make your experience even better.
        </p>
      </div>
    </div>
  );
}

export default FeaturesIntro;
