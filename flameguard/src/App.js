import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Statistics />
    </div>
  );
}

export default App;
