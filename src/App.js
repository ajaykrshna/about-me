import React from "react";
import About from "./components/About";
import Desc from "./components/Desc";
import Works from "./components/Works";
import Connect from "./components/Connect";

function App() {
  return (
    <div className="full">
      <About />
      <Desc />
      <Works />
      <Connect />
    </div>
  )
}

export default App;