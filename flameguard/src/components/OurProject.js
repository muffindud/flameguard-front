import React from "react";
import "../styles/OurProject.css";

function ProjectStructure() {
  return (
    <div className="project-structure">
      <h2>Key Components of our project</h2>
      <div className="component-cards">
        <div className="card">
          <h3>Depiction Analysis</h3>
          <p>
            <span>FlameGuard</span> accurately distinguishes between fire,
            smoke, and neutral environments, enabling swift response measures.
          </p>
        </div>
        <div className="card">
          <h3>Image Preprocessing</h3>
          <p>
            Before classification, images undergo preprocessing steps such as
            resizing, tensor conversion, and normalization to ensure accurate
            analysis.
          </p>
        </div>
        <div className="card">
          <h3>Prediction and Output</h3>
          <p>
            The system employs a trained CNN model to analyze images and
            generate probability scores for each class, facilitating precise
            detection and differentiation.
          </p>
        </div>
        <div className="card">
          <h3>Telegram Bot</h3>
          <p>
            <span>FlameGuard</span> features a Telegram bot for seamless fire
            notifications, providing clear and informative alerts to users.
          </p>
        </div>
        <div className="card">
          <h3>User Interface</h3>
          <p>
            The <span>FlameGuard</span> UI offers an intuitive platform for
            drone operations, patrol scheduling, and real-time fire alert
            management, ensuring efficient monitoring and response.
          </p>
        </div>
        <div className="card">
          <h3>Data Analytics</h3>
          <p>
            <span>FlameGuard</span> incorporates data analytics and
            visualization tools to generate in-depth reporting and analytical
            insights for providing actionable intelligence to users for making
            informed decisions and driving continual improvement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectStructure;
