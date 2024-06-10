// Carousel.js
import React, { useState } from "react";
import "../styles/Carousel.css";
import schedulingImage from "../images/scheduling.png";
import routesPlanificationImage from "../images/route.png";
import mapIncorporationImage from "../images/mapIncorporation.png";
import multiDroneSupportImage from "../images/multiDroneSupport.png";
import liveDroneFeedImage from "../images/liveDroneFeed.png";

const features = [
  {
    title: "Scheduling",
    description:
      "Our upcoming scheduling feature will allow you to plan and automate drone patrols according to your preferred timetable. You can set specific times for the drone to conduct patrols, ensuring consistent monitoring without manual intervention.",
    image: schedulingImage,
  },
  {
    title: "Routes Planification",
    description:
      "With routes planification, you can design and save custom patrol routes for your drones. This feature will enable more efficient coverage of your area by following optimized paths tailored to your specific needs.",
    image: routesPlanificationImage,
  },
  {
    title: "Map Incorporation",
    description:
      "The map incorporation feature will integrate real-time maps into our interface, allowing you to view the drone’s current location and patrol routes on a live map. This provides better situational awareness and control.",
    image: mapIncorporationImage,
  },
  {
    title: "Multi-Drone Support",
    description:
      "We are expanding our platform to support multiple drones. You’ll be able to manage and coordinate several drones simultaneously, increasing the coverage and efficiency of your monitoring efforts.",
    image: multiDroneSupportImage,
  },
  {
    title: "Live Drone Feed",
    description:
      "The live feed feature will allow you to stream real-time video footage directly from the drone to our platform. This will provide immediate visual insights into the monitored area, enhancing situational awareness and decision-making.",
    image: liveDroneFeedImage,
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-content">
        <h3 className="feature-title">{features[currentIndex].title}</h3>
        <img
          src={features[currentIndex].image}
          alt={features[currentIndex].title}
          className="carousel-image"
        />
        <div className="carousel-text-wrapper">
          <div className="feature-description">
            {features[currentIndex].description}
          </div>
        </div>
      </div>
      <button className="carousel-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
