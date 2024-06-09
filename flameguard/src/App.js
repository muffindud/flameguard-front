import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import Control from "./components/Control";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="app-container">
        <Statistics />
        <Control />
      </div>
    </div>
  );
}

export default App;
