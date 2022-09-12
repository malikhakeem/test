import React from "react";
import FirstComponent from "./components/FirstComponent";
import { BrowserRouter as Router } from "react-router-dom";
import SecondComponent from "./components/SecondComponent";
import BottomCont from "./components/BottomCont";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Swipe from "./components/Swipe";
function App() {
  return (
    <div className="App">
      {/* <Router>
      </Router> */}
      <AnimatedRoutes />

      {/* <FirstComponent /> */}
    </div>
  );
}

export default App;
