import React from "react";
import TeamIntro from "./TeamIntro";
import OurProject from "./OurProject";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <TeamIntro/>
      <OurProject/>
    </div>
  );
}

export default AboutUs;
